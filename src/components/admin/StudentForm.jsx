import React, { useState } from 'react';

export default function StudentForm({ onSubmit, onCancel }) {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [batch, setBatch] = useState('Batch 20');

  const submit = (e) => {
    e.preventDefault();
    if (!name || !roll) return;
    onSubmit({ name, roll, email: email || name.toLowerCase().split(' ').join('.') + '@edupulse.edu.pk', batch, fee: 'PENDING', attendance: 0, status: 'Enrolled' });
  };

  return (
    <form onSubmit={submit}>
      <h3 style={{ marginTop: 0 }}>Enroll Student</h3>
      <label>Full Name *</label>
      <div className="in"><input value={name} onChange={(e) => setName(e.target.value)} autoFocus required /></div>
      <label>Roll Number *</label>
      <div className="in"><input placeholder="WMA-10999" value={roll} onChange={(e) => setRoll(e.target.value)} required /></div>
      <label>Email</label>
      <div className="in"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <label>Batch *</label>
      <div className="in"><input value={batch} onChange={(e) => setBatch(e.target.value)} required /></div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button type="button" className="alt" style={{ width: 100, margin: 0 }} onClick={onCancel}>Cancel</button>
        <button className="btn" style={{ width: 140, margin: 0 }}>Enroll Student</button>
      </div>
    </form>
  );
}
