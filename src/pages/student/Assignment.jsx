import React, { useState } from 'react';
import { FileText, Pencil, Clock, Eye, Upload } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Stat from '../../components/ui/Stat.jsx';
import Pill from '../../components/ui/Pill.jsx';
import Modal from '../../components/ui/Modal.jsx';
import { COURSE, DEFAULT_ASSIGNMENTS } from '../../lib/constants.js';
import { load, save, seeded } from '../../lib/store.js';
import { toast } from '../../lib/toast.js';

export default function Assignment() {
  const [list, setList] = useState(() => seeded('student_assignments', DEFAULT_ASSIGNMENTS));
  const [subs, setSubs] = useState(() => load('student_submissions', {}));
  const [viewIdx, setViewIdx] = useState(null);
  const [formIdx, setFormIdx] = useState(null);
  const [link, setLink] = useState('');
  const [text, setText] = useState('');

  const submitted = list.filter((a) => a.status === 'SUBMITTED' || a.status === 'LATE SUBMITTED').length;
  const pending = list.length - submitted;

  const openForm = (i) => {
    const s = subs[list[i].title];
    setLink(s?.link || '');
    setText(s?.text || '');
    setFormIdx(i);
  };

  const save1 = (e) => {
    e.preventDefault();
    const title = list[formIdx].title;
    const isEdit = list[formIdx].status !== 'NOT SUBMITTED';
    const nextSubs = { ...subs, [title]: { link, text } };
    const nextList = list.map((a, i) => (i === formIdx ? { ...a, status: 'SUBMITTED' } : a));
    setSubs(nextSubs);
    setList(nextList);
    save('student_submissions', nextSubs);
    save('student_assignments', nextList);
    toast(isEdit ? 'Submission updated' : 'Assignment submitted');
    setFormIdx(null);
  };

  const open = viewIdx !== null ? list[viewIdx] : null;
  const editing = formIdx !== null ? list[formIdx] : null;
  const isEdit = editing && editing.status !== 'NOT SUBMITTED';

  return (
    <Shell role="s">
      <Crumb items={['Home', COURSE, 'Assignment']} />
      <div className="stats" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <Stat n={list.length} l="Assigned" icon={FileText} color="#3b82f6" />
        <Stat n={submitted} l="Submitted" icon={Pencil} color="#22c55e" />
        <Stat n={pending} l="Pending" icon={Clock} color="#eab308" />
      </div>
      <div className="tw">
        <table>
          <thead><tr>{['Assignment', 'Topics', 'Due Date', 'Status', 'Action'].map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {list.map((a, i) => (
              <tr key={a.title} className={a.hack ? 'hack' : ''}>
                <td>{a.title} {a.hack && <span className="pill" style={{ marginLeft: 6, color: '#c084fc' }}>HACKATHON</span>}</td>
                <td>{a.topics ? <span className="topic">{a.topics} Topics</span> : <span style={{ color: 'var(--mut)', fontWeight: 400 }}>No topics</span>}</td>
                <td style={{ color: a.closed && a.status === 'NOT SUBMITTED' ? '#ef4444' : undefined }}>{a.due}</td>
                <td><Pill t={a.status} /></td>
                <td>
                  <span style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Eye size={16} onClick={() => setViewIdx(i)} style={{ cursor: 'pointer' }} />
                    {a.closed && a.status === 'NOT SUBMITTED' ? (
                      <i style={{ color: '#ef4444' }}>Submissions closed</i>
                    ) : (
                      <>
                        <Upload size={16} onClick={() => openForm(i)} style={{ cursor: 'pointer', opacity: a.status === 'NOT SUBMITTED' ? 1 : 0.4 }} />
                        <Pencil size={16} onClick={() => openForm(i)} style={{ cursor: 'pointer', opacity: a.status === 'NOT SUBMITTED' ? 0.4 : 1 }} />
                      </>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <Modal onClose={() => setViewIdx(null)}>
          <h3 style={{ marginTop: 0 }}>Assignment Information</h3>
          <label>Title</label>
          <p style={{ fontWeight: 600, marginTop: 4 }}>{open.title}</p>
          <div style={{ display: 'flex', gap: 24, margin: '14px 0' }}>
            <div><label>Due Date</label><p>{open.due}, 11:59 PM</p></div>
            <div><label>Status</label><p><Pill t={open.status} /></p></div>
          </div>
          <label>Description</label>
          <p style={{ color: 'var(--mut)' }}>{open.desc}</p>
          <button className="btn" onClick={() => setViewIdx(null)}>Close</button>
        </Modal>
      )}

      {editing && (
        <Modal onClose={() => setFormIdx(null)}>
          <form onSubmit={save1}>
            <h3 style={{ marginTop: 0 }}>{isEdit ? 'Edit Assignment' : 'Submit Assignment'}</h3>
            <label>Submission Link (Github, Notion ,Drive)</label>
            <div className="in"><input placeholder="e.g. https://github.com/your-work" value={link} onChange={(e) => setLink(e.target.value)} /></div>
            <label>{isEdit ? 'Submission Images' : 'Reference Images'}</label>
            <div className="in" style={{ display: 'flex', gap: 8 }}>
              <input placeholder="No file chosen" disabled style={{ flex: 1 }} />
              <button type="button" className="alt" style={{ width: 120, margin: 0 }} onClick={() => toast('Image upload is disabled in this demo')}>+ Add Image</button>
            </div>
            <label>Submission Text {!isEdit && '*'}</label>
            <textarea className="in" style={{ width: '100%', minHeight: 80, padding: 10, background: 'var(--bg)', border: '1px solid var(--bd)', borderRadius: 6 }} placeholder="submit links and other details" value={text} onChange={(e) => setText(e.target.value)} required={!isEdit} />
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 14 }}>
              <button type="button" className="alt" style={{ width: 100, margin: 0 }} onClick={() => setFormIdx(null)}>Cancel</button>
              <button className="btn" style={{ width: 160, margin: 0 }}>{isEdit ? 'Update Submission' : 'Submit'}</button>
            </div>
          </form>
        </Modal>
      )}
    </Shell>
  );
}
