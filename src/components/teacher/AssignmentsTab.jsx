import React, { useState } from 'react';
import { Plus, Eye, Pencil } from 'lucide-react';
import Pager from '../ui/Pager.jsx';
import Modal from '../ui/Modal.jsx';
import { DEFAULT_TEACHER_ASSIGNMENTS } from '../../lib/constants.js';
import { seeded, save } from '../../lib/store.js';
import { toast } from '../../lib/toast.js';

export default function AssignmentsTab() {
  const [list, setList] = useState(() => seeded('teacher_assignments', DEFAULT_TEACHER_ASSIGNMENTS));
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [due, setDue] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (!title || !due) return;
    const next = [{ title, desc, topics: [], due, hack: false }, ...list];
    setList(next);
    save('teacher_assignments', next);
    toast('Assignment created');
    setModal(false);
    setTitle(''); setDesc(''); setDue('');
  };

  const shown = list.slice((page - 1) * 10, page * 10);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
        <button className="btn" style={{ width: 'auto', padding: '0 16px', margin: 0, display: 'flex', gap: 6, alignItems: 'center' }} onClick={() => setModal(true)}>
          <Plus size={14} />New Assignment
        </button>
      </div>
      <div className="tw tt">
        <table>
          <thead><tr><th>Title</th><th>Description</th><th>Topics</th><th>Due Date</th><th>Actions</th></tr></thead>
          <tbody>
            {shown.map((a, i) => (
              <tr key={a.title + i} className={a.hack ? 'hack' : ''}>
                <td>{a.title} {a.hack && <span className="pill" style={{ fontSize: 9 }}>HACKATHON</span>}</td>
                <td style={{ maxWidth: 260 }}>{a.desc}</td>
                <td>{a.topics.length ? a.topics.map((t) => <span key={t} className="mini" style={{ marginRight: 4 }}>{t}</span>) : 'No topics'}</td>
                <td>{a.due}</td>
                <td>
                  <span style={{ display: 'flex', gap: 10 }}>
                    <Eye size={14} style={{ cursor: 'pointer' }} onClick={() => toast(a.title)} />
                    <Pencil size={14} style={{ cursor: 'pointer' }} onClick={() => toast('Edit ' + a.title)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pager total={list.length} page={page} setPage={setPage} />
      </div>

      {modal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={add}>
            <h3 style={{ marginTop: 0 }}>New Assignment</h3>
            <label>Title *</label>
            <div className="in"><input value={title} onChange={(e) => setTitle(e.target.value)} autoFocus required /></div>
            <label>Description</label>
            <div className="in"><input value={desc} onChange={(e) => setDesc(e.target.value)} /></div>
            <label>Due Date *</label>
            <div className="in"><input placeholder="e.g. Oct 1, 2026" value={due} onChange={(e) => setDue(e.target.value)} required /></div>
            <button className="btn">Create</button>
          </form>
        </Modal>
      )}
    </>
  );
}
