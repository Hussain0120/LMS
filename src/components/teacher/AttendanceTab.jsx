import React, { useState } from 'react';
import { Calendar, CheckCircle2, XCircle } from 'lucide-react';
import Stat from '../ui/Stat.jsx';
import Pager from '../ui/Pager.jsx';
import { classmate } from '../../lib/constants.js';
import { load, save } from '../../lib/store.js';

const TOTAL = 57;
const STATUS_OPTIONS = ['NOT MARKED', 'PRESENT', 'ABSENT', 'LEAVE'];

export default function AttendanceTab() {
  const [date, setDate] = useState('2026-09-15');
  const [marks, setMarks] = useState(() => load('teacher_attendance_marks', {}));
  const [page, setPage] = useState(1);
  const dayMarks = marks[date] || {};

  const setMark = (i, status) => {
    const next = { ...marks, [date]: { ...dayMarks, [i]: status } };
    setMarks(next);
    save('teacher_attendance_marks', next);
  };

  const counts = { PRESENT: 0, ABSENT: 0, LEAVE: 0 };
  for (let i = 0; i < TOTAL; i++) {
    const s = dayMarks[i] || 'NOT MARKED';
    if (counts[s] !== undefined) counts[s]++;
  }

  const rows = [...Array(TOTAL)].map((_, i) => i).slice((page - 1) * 10, page * 10);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginBottom: 12, fontSize: 12 }}>
        Select a Date
        <input type="date" className="sel" style={{ height: 32, fontSize: 12 }} value={date} onChange={(e) => { setDate(e.target.value); setPage(1); }} />
      </div>
      <div className="stats" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
        <Stat n={TOTAL} l="Total Students" icon={Calendar} color="#9a9a9a" />
        <Stat n={counts.PRESENT} l="Present" icon={CheckCircle2} color="#22c55e" />
        <Stat n={counts.ABSENT} l="Absent" icon={XCircle} color="#ef4444" />
        <Stat n={counts.LEAVE} l="Leave" icon={XCircle} color="#eab308" />
      </div>
      <div className="tw tt">
        <table>
          <thead><tr><th>Roll #</th><th>Full Name</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((i) => {
              const s = classmate(i);
              return (
                <tr key={i}>
                  <td>{s.r}</td>
                  <td>{s.n}</td>
                  <td>
                    <select className="sel" style={{ height: 26, fontSize: 11 }} value={dayMarks[i] || 'NOT MARKED'} onChange={(e) => setMark(i, e.target.value)}>
                      {STATUS_OPTIONS.map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pager total={TOTAL} page={page} setPage={setPage} word="students" />
      </div>
    </>
  );
}
