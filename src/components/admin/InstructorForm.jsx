import React, { useState } from 'react';

export default function InstructorForm({ onSubmit, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [course, setCourse] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !dept || !course) return;
    onSubmit({ name, email, dept, course, status: 'Active' });
  };

  return (
    <form onSubmit={submit}>
      <h3 style={{ marginTop: 0 }}>Add Instructor</h3>
      <label>Full Name *</label>
      <div className="in"><input value={name} onChange={(e) => setName(e.target.value)} autoFocus required /></div>
      <label>Email *</label>
      <div className="in"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
      <label>Department *</label>
      <div className="in"><input value={dept} onChange={(e) => setDept(e.target.value)} required /></div>
      <label>Course *</label>
      <div className="in"><input value={course} onChange={(e) => setCourse(e.target.value)} required /></div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button type="button" className="alt" style={{ width: 100, margin: 0 }} onClick={onCancel}>Cancel</button>
        <button className="btn" style={{ width: 140, margin: 0 }}>Add Instructor</button>
      </div>
    </form>
  );
}
