import React, { useState } from 'react';
import { Clock, GraduationCap, Calendar } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Stat from '../../components/ui/Stat.jsx';
import CourseCard from '../../components/student/CourseCard.jsx';
import FeeTable from '../../components/student/FeeTable.jsx';
import { COURSE, FEES } from '../../lib/constants.js';

export default function Dashboard() {
  const [tab, setTab] = useState('Quizzes');
  const today = new Date();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());
  const week = [...Array(7)].map((_, i) => {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    return d;
  });

  return (
    <Shell role="s">
      <Crumb items={['Home', COURSE]} />
      <div className="cols">
        <div>
          <div className="stats" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Stat n="98/148" l="Attendance" icon={Clock} color="#22c55e" />
            <Stat n="12/15" l="Assignment" icon={GraduationCap} color="#a855f7" />
          </div>
          <div className="h5">Active Course</div>
          <CourseCard showTimes progress={74} />
          <div className="h5">Fee</div>
          <FeeTable rows={FEES.slice(0, 1)} />
        </div>
        <div>
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ margin: 0, display: 'flex', gap: 10, alignItems: 'center', fontWeight: 600 }}>
              <Calendar size={18} />
              Class Schedule
            </h3>
            <div className="days">
              {week.map((d) => (
                <div key={d.getDate()} className={[1, 3, 5].includes(d.getDay()) ? 'a' : ''}>
                  {d.toLocaleDateString('en', { weekday: 'short' })}
                  <br />
                  {d.getDate()}
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ marginTop: 16, minHeight: 160 }}>
            <div className="seg">
              {['Assignments', 'Quizzes', 'Events'].map((t) => (
                <button key={t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
            <p className="empty" style={{ textAlign: 'center', marginTop: 30 }}>No upcoming {tab.toLowerCase()}</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
