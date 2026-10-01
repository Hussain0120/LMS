import React, { useState } from 'react';
import { ToggleRight, ToggleLeft, ClipboardCheck, Eye } from 'lucide-react';
import Pill from '../ui/Pill.jsx';
import { COURSE, DEFAULT_TEACHER_QUIZZES } from '../../lib/constants.js';
import { seeded, save } from '../../lib/store.js';
import { toast } from '../../lib/toast.js';

export default function QuizzesTab() {
  const [status, setStatus] = useState(() => seeded('teacher_quiz_status', DEFAULT_TEACHER_QUIZZES.map(() => 'ACTIVE')));

  const flip = (i) => {
    const next = status.map((s, idx) => (idx === i ? (s === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE') : s));
    setStatus(next);
    save('teacher_quiz_status', next);
  };

  return (
    <div className="tw tt">
      <table>
        <thead><tr><th>Quiz</th><th>Course(s)</th><th>Date</th><th>Expiry</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          {DEFAULT_TEACHER_QUIZZES.map(([q, d], i) => (
            <tr key={q}>
              <td>{q}</td>
              <td style={{ maxWidth: 280, color: 'var(--mut)' }}>{COURSE}, Web and Mobile App Development</td>
              <td>{d}</td>
              <td>{d}</td>
              <td><Pill t={status[i]} /></td>
              <td>
                <span style={{ display: 'flex', gap: 10 }}>
                  {status[i] === 'ACTIVE'
                    ? <ToggleRight size={16} color="#22c55e" style={{ cursor: 'pointer' }} onClick={() => flip(i)} />
                    : <ToggleLeft size={16} color="var(--mut)" style={{ cursor: 'pointer' }} onClick={() => flip(i)} />}
                  <ClipboardCheck size={14} style={{ cursor: 'pointer' }} onClick={() => toast(q + ' results')} />
                  <Eye size={14} style={{ cursor: 'pointer' }} onClick={() => toast(q)} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
