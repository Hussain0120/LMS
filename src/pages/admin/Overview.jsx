import React, { useState } from 'react';
import { Users, UserCog, BookOpen, Calendar, Plus, UserPlus, BookPlus, Download, Bell } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Stat from '../../components/ui/Stat.jsx';
import Bar from '../../components/ui/Bar.jsx';
import Modal from '../../components/ui/Modal.jsx';
import InstructorForm from '../../components/admin/InstructorForm.jsx';
import StudentForm from '../../components/admin/StudentForm.jsx';
import BatchForm from '../../components/admin/BatchForm.jsx';
import AnnouncementForm from '../../components/admin/AnnouncementForm.jsx';
import { getInstructors, addInstructor, getStudents, addStudent, getBatches, addBatch, addAnnouncement, downloadCsv } from '../../lib/adminStore.js';
import { toast } from '../../lib/toast.js';

export default function Overview() {
  const [open, setOpen] = useState(null);
  const [instructors, setInstructors] = useState(getInstructors);
  const [students, setStudents] = useState(getStudents);
  const [batches, setBatches] = useState(getBatches);

  const close = () => setOpen(null);

  const campusTotals = {};
  batches.forEach((b) => {
    const key = b.campus || 'Unassigned';
    campusTotals[key] = campusTotals[key] || { enrolled: 0, seats: 0 };
    campusTotals[key].enrolled += Number(b.enrolled) || 0;
    campusTotals[key].seats += Number(b.seats) || 0;
  });
  const totalEnrolled = Object.values(campusTotals).reduce((a, c) => a + c.enrolled, 0);
  const totalSeats = Object.values(campusTotals).reduce((a, c) => a + c.seats, 0);

  return (
    <Shell role="a">
      <Crumb items={['Home', 'Central Administration', 'Institute Overview']} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontWeight: 600 }}>Institute Overview</h2>
          <p style={{ color: 'var(--mut)', margin: 0 }}>Central Academic Intelligence, Multi-Campus Enrollment & Operational Health.</p>
        </div>
        <button className="btn" style={{ width: 'auto', padding: '0 16px', margin: 0, display: 'flex', gap: 6, alignItems: 'center' }} onClick={() => setOpen('notice')}>
          <Bell size={14} />Post Notice
        </button>
      </div>

      <div className="stats" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
        <Stat n={students.length.toLocaleString()} l="Total Enrolled Students" icon={Users} color="#3b82f6" />
        <Stat n={instructors.length} l="Certified Instructors" icon={UserCog} color="#22c55e" />
        <Stat n={batches.length} l="Active Running Batches" icon={BookOpen} color="#a855f7" />
        <Stat n="88.4%" l="Average Institute Attendance" icon={Calendar} color="#eab308" />
      </div>

      <div className="card" style={{ padding: 20, margin: '4px 0 24px' }}>
        <small style={{ color: 'var(--mut)' }}>QUICK MANAGEMENT & OPERATIONAL DISPATCH</small>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12, marginTop: 12 }}>
          <button className="vd" style={{ margin: 0 }} onClick={() => setOpen('instructor')}><Plus size={16} />Add Instructor</button>
          <button className="vd" style={{ margin: 0 }} onClick={() => setOpen('student')}><UserPlus size={16} />Enroll Student</button>
          <button className="vd" style={{ margin: 0 }} onClick={() => setOpen('batch')}><BookPlus size={16} />New Batch</button>
          <button className="vd" style={{ margin: 0 }} onClick={() => downloadCsv('students.csv', students, ['roll', 'name', 'email', 'batch', 'fee', 'attendance', 'status'])}><Download size={16} />Export CSV</button>
        </div>
      </div>

      <div className="card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <h4 style={{ margin: 0, fontWeight: 600 }}>Campus Enrollment Breakdown</h4>
          <span className="mini">{totalEnrolled} / {totalSeats} Total Allocated Seats</span>
        </div>
        <p style={{ color: 'var(--mut)', marginTop: 4 }}>Live capacity utilization across all regional tech campuses in Karachi.</p>
        {Object.entries(campusTotals).map(([campus, v]) => (
          <div key={campus} style={{ margin: '14px 0' }}>
            <div className="pr"><span>{campus}</span><span>{v.enrolled}/{v.seats} Enrolled · {v.seats ? Math.round((v.enrolled / v.seats) * 100) : 0}% Occupancy</span></div>
            <Bar percent={v.seats ? Math.min(100, Math.round((v.enrolled / v.seats) * 100)) : 0} color="#3b82f6" />
          </div>
        ))}
      </div>

      {open === 'instructor' && (
        <Modal onClose={close}>
          <InstructorForm onCancel={close} onSubmit={(row) => { setInstructors(addInstructor(row)); toast('Instructor added'); close(); }} />
        </Modal>
      )}
      {open === 'student' && (
        <Modal onClose={close}>
          <StudentForm onCancel={close} onSubmit={(row) => { setStudents(addStudent(row)); toast('Student enrolled'); close(); }} />
        </Modal>
      )}
      {open === 'batch' && (
        <Modal onClose={close}>
          <BatchForm onCancel={close} onSubmit={(row) => { setBatches(addBatch(row)); toast('Batch created'); close(); }} />
        </Modal>
      )}
      {open === 'notice' && (
        <Modal onClose={close}>
          <AnnouncementForm onCancel={close} onSubmit={(row) => { addAnnouncement(row); toast('Announcement posted'); close(); }} />
        </Modal>
      )}
    </Shell>
  );
}
