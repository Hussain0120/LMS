import React, { useState } from 'react';
import { Book, GraduationCap, Clock, CheckCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Stat from '../../components/ui/Stat.jsx';
import Ring from '../../components/ui/Ring.jsx';
import { COURSE, MODULES } from '../../lib/constants.js';

export default function Progress() {
  const [open, setOpen] = useState(null);
  return (
    <Shell role="s">
      <Crumb items={['Home', COURSE, 'Progress']} />
      <div className="stats" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <Stat n="81" l="Total Topics" icon={Book} color="#22c55e" />
        <Stat n="58" l="Completed Topics" icon={GraduationCap} color="#a855f7" />
        <Stat n="23" l="Pending Topics" icon={Clock} color="#ef4444" />
      </div>
      {MODULES.map(([name, done, total], i) => {
        const pct = Math.round((done / total) * 100);
        const isOpen = open === i;
        return (
          <div key={name} className="card">
            <div className="mod" onClick={() => setOpen(isOpen ? null : i)}>
              <div className="ico">{pct === 100 ? <CheckCheck size={16} color="#22c55e" /> : <Clock size={16} color="#eab308" />}</div>
              <div style={{ flex: 1 }}>
                <h3>{name}</h3>
                <small>Topics: {done}/{total}</small>
              </div>
              <Ring percent={pct} />
              <ChevronDown size={16} color="var(--mut)" style={{ transform: isOpen ? 'rotate(180deg)' : '', transition: '.2s' }} />
            </div>
            {isOpen && (
              <div className="tp">
                {[...Array(total)].map((_, k) => (
                  <div key={k}><CheckCircle2 size={14} color={k < done ? '#22c55e' : 'var(--mut)'} />{name} – Topic {k + 1}</div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </Shell>
  );
}
