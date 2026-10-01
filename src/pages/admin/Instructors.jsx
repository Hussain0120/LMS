import React, { useState } from 'react';
import { Search, Plus, Eye } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Pill from '../../components/ui/Pill.jsx';
import Modal from '../../components/ui/Modal.jsx';
import InstructorForm from '../../components/admin/InstructorForm.jsx';
import { getInstructors, addInstructor } from '../../lib/adminStore.js';
import { toast } from '../../lib/toast.js';

export default function Instructors() {
  const [list, setList] = useState(getInstructors);
  const [q, setQ] = useState('');
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(null);

  const rows = list.filter((i) => (i.name + i.dept + i.course).toLowerCase().includes(q.toLowerCase()));

  return (
    <Shell role="a">
      <Crumb items={['Home', 'Central Administration', 'Faculty & Instructors']} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontWeight: 600 }}>Certified Faculty & Instructors</h2>
          <p style={{ color: 'var(--mut)', margin: 0 }}>Faculty credentials, departmental allocation, and active cohort supervision.</p>
        </div>
        <button className="btn" style={{ width: 'auto', padding: '0 16px', margin: 0, display: 'flex', gap: 6, alignItems: 'center' }} onClick={() => setModal(true)}>
          <Plus size={14} />Add Instructor
        </button>
      </div>
      <div className="hdr" style={{ marginTop: 0 }}>
        <div className="srch" style={{ maxWidth: 420 }}>
          <input placeholder="Search instructor by Name, Department, or Course." value={q} onChange={(e) => setQ(e.target.value)} />
          <Search />
        </div>
        <span style={{ marginLeft: 'auto', color: 'var(--mut)' }}>Total Faculty: <b style={{ color: 'var(--tx)' }}>{list.length}</b></span>
      </div>
      <div className="tw">
        <table>
          <thead><tr>{['Name & Email', 'Department', 'Course', 'Status', 'Action'].map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((i) => (
              <tr key={i.email}>
                <td><b>{i.name}</b><br /><span style={{ color: '#3b82f6', fontWeight: 400 }}>{i.email}</span></td>
                <td>{i.dept}</td>
                <td style={{ color: '#3b82f6' }}>{i.course}</td>
                <td><Pill t={i.status} /></td>
                <td><Eye size={16} style={{ cursor: 'pointer' }} onClick={() => setView(i)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <Modal onClose={() => setModal(false)}>
          <InstructorForm onCancel={() => setModal(false)} onSubmit={(row) => { setList(addInstructor(row)); toast('Instructor added'); setModal(false); }} />
        </Modal>
      )}
      {view && (
        <Modal onClose={() => setView(null)}>
          <h3 style={{ marginTop: 0 }}>{view.name}</h3>
          <p style={{ color: 'var(--mut)' }}>{view.email}</p>
          <div style={{ display: 'flex', gap: 24, margin: '14px 0' }}>
            <div><label>Department</label><p>{view.dept}</p></div>
            <div><label>Status</label><p><Pill t={view.status} /></p></div>
          </div>
          <label>Course</label>
          <p>{view.course}</p>
          <button className="btn" onClick={() => setView(null)}>Close</button>
        </Modal>
      )}
    </Shell>
  );
}
