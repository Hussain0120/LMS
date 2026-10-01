import React, { useState } from 'react';

export default function BatchForm({ onSubmit, onCancel }) {
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [lead, setLead] = useState('');
  const [campus, setCampus] = useState('');
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState(50);

  const submit = (e) => {
    e.preventDefault();
    if (!batch || !course || !lead) return;
    onSubmit({ batch, course, lead, campus, time, seats: Number(seats), enrolled: 0, status: 'Upcoming' });
  };

  return (
    <form onSubmit={submit}>
      <h3 style={{ marginTop: 0 }}>New Batch</h3>
      <label>Batch Number *</label>
      <div className="in"><input placeholder="Batch 22" value={batch} onChange={(e) => setBatch(e.target.value)} autoFocus required /></div>
      <label>Course Name *</label>
      <div className="in"><input value={course} onChange={(e) => setCourse(e.target.value)} required /></div>
      <label>Lead Instructor *</label>
      <div className="in"><input value={lead} onChange={(e) => setLead(e.target.value)} required /></div>
      <label>Campus</label>
      <div className="in"><input value={campus} onChange={(e) => setCampus(e.target.value)} /></div>
      <label>Class Timing</label>
      <div className="in"><input placeholder="Mon, Wed, Fri • 01:00 PM - 03:00 PM" value={time} onChange={(e) => setTime(e.target.value)} /></div>
      <label>Seats</label>
      <div className="in"><input type="number" min="1" value={seats} onChange={(e) => setSeats(e.target.value)} /></div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button type="button" className="alt" style={{ width: 100, margin: 0 }} onClick={onCancel}>Cancel</button>
        <button className="btn" style={{ width: 130, margin: 0 }}>Create Batch</button>
      </div>
    </form>
  );
}
