import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import Pill from '../../components/ui/Pill.jsx';
import { COURSE, QUIZZES } from '../../lib/constants.js';

export default function Quiz() {
  return (
    <Shell role="s">
      <Crumb items={['Home', COURSE, 'Quiz']} />
      <div className="info">
        <h4><AlertTriangle size={18} />Important Information</h4>
        <ul>
          <li>Once started, quizzes must be completed in one session</li>
          <li>Switching tabs or leaving the window will be recorded</li>
          <li>Ensure you have a stable internet connection</li>
          <li>The quiz will open in fullscreen mode</li>
        </ul>
      </div>
      <div className="tw">
        <table>
          <thead><tr>{['Title', 'Module', 'Questions', 'Attempts', 'Percentage', 'Status', 'Note', 'Action'].map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {QUIZZES.map(([title, mod, attempts, pct, status]) => (
              <tr key={title}>
                <td style={{ fontWeight: 400 }}>{title}</td>
                <td>{mod}</td>
                <td><span className="pill gy" style={{ border: 0 }}>40</span></td>
                <td><span className={'pill ' + (attempts === '3 / 3' ? 'rd' : 'gy')} style={{ border: 0 }}>{attempts}</span></td>
                <td>{pct}</td>
                <td><Pill t={status} /></td>
                <td>—</td>
                <td><button className="sel" disabled style={{ color: 'var(--mut)', height: 30 }}>Completed</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ textAlign: 'center', color: 'var(--mut)', marginTop: 24 }}>Contact your instructor if you have any issues accessing your quizzes.</p>
    </Shell>
  );
}
