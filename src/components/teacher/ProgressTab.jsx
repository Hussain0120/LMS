import React, { useState } from 'react';
import { SlidersHorizontal, CheckCheck, Clock } from 'lucide-react';
import Bar from '../ui/Bar.jsx';
import Ring from '../ui/Ring.jsx';
import { TNAME, MODULES } from '../../lib/constants.js';

export default function ProgressTab() {
  const [onlyMine, setOnlyMine] = useState(true);
  const overall = 69;

  return (
    <>
      <div className="card" style={{ padding: 16, marginBottom: 12 }}>
        <small style={{ color: 'var(--mut)' }}>COMPARE PROGRESS</small>
        <h4 style={{ margin: '4px 0 10px', fontWeight: 500 }}>Course Progress Overview</h4>
        <button className="vd" style={{ margin: 0, height: 32, fontSize: 12, fontWeight: 400 }} onClick={() => setOnlyMine(!onlyMine)}>
          <SlidersHorizontal size={14} />
          {onlyMine ? 'Only My Progress' : 'Compare All Batches'}
        </button>
      </div>
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <small style={{ color: 'var(--mut)' }}>MY PROGRESS</small>
            <h4 style={{ margin: '4px 0', fontWeight: 500 }}>{TNAME} - Zaitoon Ashraf IT Park <span className="mini">Batch 20</span></h4>
          </div>
          <span className="mini" style={{ height: 22 }}>Topics: 56/81</span>
        </div>
        <div className="pr" style={{ fontSize: 12, marginTop: 12 }}><span>Overall progress</span><b style={{ color: '#3b82f6' }}>{overall}%</b></div>
        <Bar percent={overall} color="#3b82f6" />
        <div style={{ marginTop: 16 }}>
          {MODULES.map(([name, done, total]) => {
            const pct = Math.round((done / total) * 100);
            return (
              <div key={name} className="card mod" style={{ padding: 12 }}>
                <div className="ico">{pct === 100 ? <CheckCheck size={14} color="#22c55e" /> : <Clock size={14} color="#eab308" />}</div>
                <div style={{ flex: 1 }}><h3 style={{ fontSize: 14 }}>{name}</h3><small>Topics: {done}/{total}</small></div>
                <Ring percent={pct} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
