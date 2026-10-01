import React, { useState } from 'react';
import { Calendar, BarChart3, AlertTriangle, Award, Download, Eye } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Stat from '../../components/ui/Stat.jsx';
import Pill from '../../components/ui/Pill.jsx';
import { SEED_ATTENDANCE_ROWS } from '../../lib/constants.js';
import { downloadCsv } from '../../lib/adminStore.js';
import { toast } from '../../lib/toast.js';

export default function AttendanceAnalytics() {
  const [batch, setBatch] = useState('All Batches');
  const [campus, setCampus] = useState('All Campuses');

  const batches = ['All Batches', ...new Set(SEED_ATTENDANCE_ROWS.map((r) => r.batch))];
  const campuses = ['All Campuses', ...new Set(SEED_ATTENDANCE_ROWS.map((r) => r.campus))];
  const rows = SEED_ATTENDANCE_ROWS.filter((r) => (batch === 'All Batches' || r.batch === batch) && (campus === 'All Campuses' || r.campus === campus));

  const flaggedTotal = SEED_ATTENDANCE_ROWS.reduce((a, r) => a + r.flagged, 0);
  const highPerforming = SEED_ATTENDANCE_ROWS.filter((r) => r.avg >= 85).length;
  const totalSessions = SEED_ATTENDANCE_ROWS.reduce((a, r) => a + r.sessions, 0);

  return (
    <Shell role="a">
      <Crumb items={['Home', 'Central Administration', 'Attendance Analytics']} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontWeight: 600 }}>Institute Attendance Oversight</h2>
          <p style={{ color: 'var(--mut)', margin: 0 }}>Campus-wide biometric presence telemetry, batch performance thresholds, and compliance registers.</p>
        </div>
        <button className="btn" style={{ width: 'auto', padding: '0 16px', margin: 0, display: 'flex', gap: 6, alignItems: 'center' }} onClick={() => downloadCsv('attendance.csv', SEED_ATTENDANCE_ROWS, ['batch', 'lead', 'campus', 'total', 'avg', 'sessions', 'flagged', 'audit'])}>
          <Download size={14} />Export Master CSV
        </button>
      </div>
      <div className="stats" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
        <Stat n="88.4%" l="Institute Average Attendance" icon={Calendar} color="#3b82f6" />
        <Stat n={totalSessions.toLocaleString()} l="Total Classes Conducted" icon={BarChart3} color="#a855f7" />
        <Stat n={flaggedTotal} l="Flagged Below 75%" icon={AlertTriangle} color="#ef4444" />
        <Stat n={highPerforming} l="High Performing Batches" icon={Award} color="#22c55e" />
      </div>
      <div className="hdr" style={{ marginTop: 0 }}>
        <select className="sel" value={batch} onChange={(e) => setBatch(e.target.value)}>{batches.map((b) => <option key={b}>{b}</option>)}</select>
        <select className="sel" value={campus} onChange={(e) => setCampus(e.target.value)}>{campuses.map((c) => <option key={c}>{c}</option>)}</select>
        <span style={{ marginLeft: 'auto', color: 'var(--mut)' }}>Auditing {rows.length} batches</span>
      </div>
      <div className="tw">
        <table>
          <thead><tr>{['Batch & Course', 'Campus Location', 'Total Students', 'Average Attendance', 'Classes Held', 'Flagged (<75%)', 'Audit Status', 'Action'].map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.batch}>
                <td><b>{r.batch}</b><br /><span style={{ color: 'var(--mut)', fontWeight: 400 }}>Lead: {r.lead}</span></td>
                <td>{r.campus}</td>
                <td>{r.total}</td>
                <td style={{ color: r.avg < 75 ? '#ef4444' : undefined }}>{r.avg}%</td>
                <td>{r.sessions} Sessions</td>
                <td>{r.flagged ? <span className="pill rd">{r.flagged} Students</span> : <span className="pill g">0 Students</span>}</td>
                <td><Pill t={r.audit} /></td>
                <td><Eye size={16} style={{ cursor: 'pointer' }} onClick={() => toast(r.batch + ' full report')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
