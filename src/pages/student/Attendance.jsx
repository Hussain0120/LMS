import React, { useState } from 'react';
import { Calendar, CheckCircle2, XCircle } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Stat from '../../components/ui/Stat.jsx';
import Bar from '../../components/ui/Bar.jsx';
import Pill from '../../components/ui/Pill.jsx';
import { COURSE, attendanceDates, FIXED_ATTENDANCE } from '../../lib/constants.js';

const STATS = [['Total Classes', 148], ['Present', 98], ['Leave', 0], ['Absent', 50]];
const ICONS = [Calendar, CheckCircle2, XCircle, XCircle];
const COLORS = ['#9a9a9a', '#22c55e', '#eab308', '#ef4444'];

export default function Attendance() {
  const [month, setMonth] = useState('Sep');
  const dates = attendanceDates(month);

  return (
    <Shell role="s">
      <Crumb items={['Home', COURSE, 'Attendance']} />
      <div className="stats" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
        {STATS.map(([l, n], i) => <Stat key={l} n={n} l={l} icon={ICONS[i]} color={COLORS[i]} />)}
      </div>
      <div className="card" style={{ padding: '22px 24px', marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0, fontWeight: 600 }}>Attendance Overview</h3>
            <p style={{ color: 'var(--mut)', margin: '12px 0 16px' }}>Your attendance is below 75%. Please improve.</p>
          </div>
          <b style={{ color: '#f97316', fontSize: 24 }}>66%</b>
        </div>
        <Bar percent={66} color="#f97316" />
      </div>
      <div style={{ textAlign: 'right', marginBottom: 12 }}>
        <select className="sel" value={month} onChange={(e) => setMonth(e.target.value)}>
          {['Sep', 'Aug', 'Jul'].map((m) => <option key={m} value={m}>{m} 2026</option>)}
        </select>
      </div>
      <div className="tw">
        <table>
          <thead><tr><th>Class</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            {dates.map((d, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 400 }}>{i + 1}</td>
                <td>{d.toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td><Pill t={FIXED_ATTENDANCE[i] || (i % 3 ? 'PRESENT' : 'ABSENT')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
