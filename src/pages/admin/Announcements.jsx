import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Calendar, Users } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Modal from '../../components/ui/Modal.jsx';
import AnnouncementForm from '../../components/admin/AnnouncementForm.jsx';
import { getAnnouncements, addAnnouncement, removeAnnouncement } from '../../lib/adminStore.js';
import { toast } from '../../lib/toast.js';

const FILTERS = ['All Notices', 'Notice', 'Event', 'Exam', 'Academic', 'Holiday'];

export default function Announcements() {
  const [list, setList] = useState(getAnnouncements);
  const [filter, setFilter] = useState('All Notices');
  const [modal, setModal] = useState(false);

  const rows = list.filter((a, i) => filter === 'All Notices' || a.tag === filter).map((a) => ({ ...a, idx: list.indexOf(a) }));

  const del = (idx) => {
    setList(removeAnnouncement(idx));
    toast('Announcement removed');
  };

  return (
    <Shell role="a">
      <Crumb items={['Home', 'Central Administration', 'Notice Board']} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontWeight: 600 }}>Official Bulletin & Notice Board</h2>
          <p style={{ color: 'var(--mut)', margin: 0 }}>Broadcast institutional notices, examination circulars, holidays, and campus events.</p>
        </div>
        <button className="btn" style={{ width: 'auto', padding: '0 16px', margin: 0, display: 'flex', gap: 6, alignItems: 'center' }} onClick={() => setModal(true)}>
          <Plus size={14} />Post Announcement
        </button>
      </div>
      <div className="seg" style={{ margin: '0 0 20px', maxWidth: 560 }}>
        {FILTERS.map((f) => <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{f}</button>)}
      </div>
      {rows.map((a) => (
        <div key={a.title + a.date} className="card" style={{ padding: 18, marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', fontSize: 12, color: 'var(--mut)' }}>
              <span className="mini">{a.tag}</span>
              <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}><Calendar size={12} />{a.date}</span>
              <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}><Users size={12} />{a.audience}</span>
            </div>
            <span style={{ display: 'flex', gap: 10 }}>
              <Pencil size={14} style={{ cursor: 'pointer' }} onClick={() => toast('Edit ' + a.title)} />
              <Trash2 size={14} style={{ cursor: 'pointer' }} onClick={() => del(a.idx)} />
            </span>
          </div>
          <h3 style={{ margin: '10px 0 6px', fontWeight: 600, fontSize: 16 }}>{a.title}</h3>
          <p style={{ color: 'var(--mut)', margin: '0 0 8px', fontSize: 13.5 }}>{a.body}</p>
          <small style={{ color: 'var(--mut)' }}>Issued by: {a.by}</small>
        </div>
      ))}
      {rows.length === 0 && <p className="empty" style={{ textAlign: 'center', marginTop: 40 }}>No announcements in this category.</p>}

      {modal && (
        <Modal onClose={() => setModal(false)}>
          <AnnouncementForm onCancel={() => setModal(false)} onSubmit={(row) => { setList(addAnnouncement(row)); toast('Announcement posted'); setModal(false); }} />
        </Modal>
      )}
    </Shell>
  );
}
