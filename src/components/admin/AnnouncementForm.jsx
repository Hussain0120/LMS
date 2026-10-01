import React, { useState } from 'react';
import { ANAME } from '../../lib/constants.js';

const TAGS = ['Notice', 'Event', 'Exam', 'Academic', 'Holiday'];

export default function AnnouncementForm({ onSubmit, onCancel }) {
  const [tag, setTag] = useState('Notice');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [audience, setAudience] = useState('All Students & Teachers');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    onSubmit({ tag, title, body, audience, date: new Date().toISOString().slice(0, 10), by: 'Director Academics · ' + ANAME });
  };

  return (
    <form onSubmit={submit}>
      <h3 style={{ marginTop: 0 }}>Post Announcement</h3>
      <label>Type</label>
      <select className="sel" style={{ width: '100%', marginBottom: 14 }} value={tag} onChange={(e) => setTag(e.target.value)}>
        {TAGS.map((t) => <option key={t}>{t}</option>)}
      </select>
      <label>Title *</label>
      <div className="in"><input value={title} onChange={(e) => setTitle(e.target.value)} autoFocus required /></div>
      <label>Audience</label>
      <div className="in"><input value={audience} onChange={(e) => setAudience(e.target.value)} /></div>
      <label>Details *</label>
      <textarea className="in" style={{ width: '100%', minHeight: 80, padding: 10, background: 'var(--bg)', border: '1px solid var(--bd)', borderRadius: 6 }} value={body} onChange={(e) => setBody(e.target.value)} required />
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 14 }}>
        <button type="button" className="alt" style={{ width: 100, margin: 0 }} onClick={onCancel}>Cancel</button>
        <button className="btn" style={{ width: 150, margin: 0 }}>Post Announcement</button>
      </div>
    </form>
  );
}
