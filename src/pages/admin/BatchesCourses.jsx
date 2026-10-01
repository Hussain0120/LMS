import React, { useState } from 'react';
import { Plus, Eye, MapPin, Clock, Users } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Pill from '../../components/ui/Pill.jsx';
import Bar from '../../components/ui/Bar.jsx';
import Modal from '../../components/ui/Modal.jsx';
import BatchForm from '../../components/admin/BatchForm.jsx';
import { getBatches, addBatch } from '../../lib/adminStore.js';
import { toast } from '../../lib/toast.js';

export default function BatchesCourses() {
  const [list, setList] = useState(getBatches);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(null);

  return (
    <Shell role="a">
      <Crumb items={['Home', 'Central Administration', 'Batches & Courses']} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontWeight: 600 }}>Batches & Accredited Courses</h2>
          <p style={{ color: 'var(--mut)', margin: 0 }}>Academic programs, timetables, lab capacity allocations, and lead faculty mentors.</p>
        </div>
        <button className="btn" style={{ width: 'auto', padding: '0 16px', margin: 0, display: 'flex', gap: 6, alignItems: 'center' }} onClick={() => setModal(true)}>
          <Plus size={14} />New Batch
        </button>
      </div>
      <div className="pg" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
        {list.map((b) => {
          const pct = b.seats ? Math.min(100, Math.round((b.enrolled / b.seats) * 100)) : 0;
          return (
            <div key={b.batch} className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="tag">{b.batch}</span>
                <Pill t={b.status} />
              </div>
              <h3 style={{ margin: '10px 0 6px', fontWeight: 600 }}>{b.course}</h3>
              <p style={{ color: 'var(--mut)', fontSize: 13, margin: '4px 0', display: 'flex', gap: 6, alignItems: 'center' }}><Users size={13} />Lead: {b.lead}</p>
              <p style={{ color: 'var(--mut)', fontSize: 13, margin: '4px 0', display: 'flex', gap: 6, alignItems: 'center' }}><MapPin size={13} />{b.campus}</p>
              <p style={{ color: 'var(--mut)', fontSize: 13, margin: '4px 0', display: 'flex', gap: 6, alignItems: 'center' }}><Clock size={13} />{b.time}</p>
              <div className="pr" style={{ fontSize: 12, marginTop: 10 }}><span>Cohort Occupancy</span><span>{b.enrolled}/{b.seats} Students ({pct}%)</span></div>
              <Bar percent={pct} color="#3b82f6" />
              <button className="vd" style={{ margin: '14px 0 0' }} onClick={() => setView(b)}><Eye size={16} />View Batch Details</button>
            </div>
          );
        })}
      </div>

      {modal && (
        <Modal onClose={() => setModal(false)}>
          <BatchForm onCancel={() => setModal(false)} onSubmit={(row) => { setList(addBatch(row)); toast('Batch created'); setModal(false); }} />
        </Modal>
      )}
      {view && (
        <Modal onClose={() => setView(null)}>
          <h3 style={{ marginTop: 0 }}>Batch Specification: {view.batch}</h3>
          <p style={{ color: 'var(--mut)', marginTop: -8 }}>Program: {view.course}</p>
          <div className="card" style={{ padding: 16, margin: '14px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <b>{view.course}</b>
              <Pill t={view.status} />
            </div>
            <small style={{ color: 'var(--mut)' }}>{view.batch}</small>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div><label>Lead Instructor</label><p>{view.lead}</p></div>
            <div><label>Registered Students</label><p>{view.enrolled} / {view.seats} Students</p></div>
            <div><label>Class Schedule & Timing</label><p>{view.time}</p></div>
            <div><label>Assigned Campus Center</label><p>{view.campus}</p></div>
          </div>
          <button className="btn" onClick={() => setView(null)}>Close Details</button>
        </Modal>
      )}
    </Shell>
  );
}
