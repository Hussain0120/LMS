import React, { useState } from 'react';
import { Search, UserPlus, Eye, Pencil, UserX, RotateCcw } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Pill from '../../components/ui/Pill.jsx';
import Pager from '../../components/ui/Pager.jsx';
import Modal from '../../components/ui/Modal.jsx';
import StudentForm from '../../components/admin/StudentForm.jsx';
import { getStudents, addStudent, updateStudent } from '../../lib/adminStore.js';
import { toast } from '../../lib/toast.js';

export default function StudentsDirectory() {
  const [list, setList] = useState(getStudents);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(null);

  const rows = list.filter((s) => (s.name + s.roll + s.email).toLowerCase().includes(q.toLowerCase()));
  const shown = rows.slice((page - 1) * 15, page * 15);

  const toggleStatus = (s) => {
    const status = s.status === 'Dropout' ? 'Enrolled' : 'Dropout';
    setList(updateStudent(s.roll, { status }));
    toast(s.name + ' marked as ' + status);
  };

  return (
    <Shell role="a">
      <Crumb items={['Home', 'Central Administration', 'Students Directory']} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontWeight: 600 }}>Students Directory</h2>
          <p style={{ color: 'var(--mut)', margin: 0 }}>Institute-wide roster, fee status, and academic standing.</p>
        </div>
        <button className="btn" style={{ width: 'auto', padding: '0 16px', margin: 0, display: 'flex', gap: 6, alignItems: 'center' }} onClick={() => setModal(true)}>
          <UserPlus size={14} />Enroll Student
        </button>
      </div>
      <div className="hdr" style={{ marginTop: 0 }}>
        <div className="srch" style={{ maxWidth: 420 }}>
          <input placeholder="Search by name, roll or email" value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} />
          <Search />
        </div>
      </div>
      <div className="tw">
        <table>
          <thead><tr>{['Roll Number', 'Student Name', 'Batch', 'Fee Status', 'Attendance', 'Status', 'Actions'].map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {shown.map((s) => (
              <tr key={s.roll}>
                <td><span style={{ color: '#3b82f6' }}>{s.roll}</span></td>
                <td><b>{s.name}</b><br /><span style={{ color: 'var(--mut)', fontWeight: 400 }}>{s.email}</span></td>
                <td><span className="mini">{s.batch}</span></td>
                <td><Pill t={s.fee} /></td>
                <td>{s.attendance}%</td>
                <td><Pill t={s.status} /></td>
                <td>
                  <span style={{ display: 'flex', gap: 10 }}>
                    <Eye size={14} style={{ cursor: 'pointer' }} onClick={() => setView(s)} />
                    <Pencil size={14} style={{ cursor: 'pointer' }} onClick={() => toast('Edit ' + s.name)} />
                    {s.status === 'Dropout'
                      ? <RotateCcw size={14} color="#22c55e" style={{ cursor: 'pointer' }} onClick={() => toggleStatus(s)} />
                      : <UserX size={14} color="#ef4444" style={{ cursor: 'pointer' }} onClick={() => toggleStatus(s)} />}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pager total={rows.length} page={page} setPage={setPage} per={15} />
      </div>

      {modal && (
        <Modal onClose={() => setModal(false)}>
          <StudentForm onCancel={() => setModal(false)} onSubmit={(row) => { setList(addStudent(row)); toast('Student enrolled'); setModal(false); }} />
        </Modal>
      )}
      {view && (
        <Modal onClose={() => setView(null)}>
          <h3 style={{ marginTop: 0 }}>{view.name}</h3>
          <p style={{ color: 'var(--mut)' }}>{view.email}</p>
          <div style={{ display: 'flex', gap: 24, margin: '14px 0', flexWrap: 'wrap' }}>
            <div><label>Roll Number</label><p>{view.roll}</p></div>
            <div><label>Batch</label><p>{view.batch}</p></div>
            <div><label>Fee Status</label><p><Pill t={view.fee} /></p></div>
            <div><label>Attendance</label><p>{view.attendance}%</p></div>
          </div>
          <button className="btn" onClick={() => setView(null)}>Close</button>
        </Modal>
      )}
    </Shell>
  );
}
