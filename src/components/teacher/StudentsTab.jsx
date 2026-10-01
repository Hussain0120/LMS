import React, { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import Pill from '../ui/Pill.jsx';
import Pager from '../ui/Pager.jsx';
import { classmate } from '../../lib/constants.js';
import { toast } from '../../lib/toast.js';

const TOTAL = 201;

export default function StudentsTab() {
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const rows = [...Array(TOTAL)].map((_, i) => classmate(i)).filter((s) => (s.n + s.e + s.r).toLowerCase().includes(q.toLowerCase()));
  const shown = rows.slice((page - 1) * 10, page * 10);

  return (
    <>
      <div className="hdr" style={{ marginTop: 0 }}>
        <div />
        <div className="srch">
          <input placeholder="Search by name, email or roll no..." value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} />
          <Search />
        </div>
        <select className="sel"><option>All</option></select>
      </div>
      <div className="tw tt">
        <table>
          <thead><tr><th>Name</th><th>Roll Number</th><th>Email</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {shown.map((s) => (
              <tr key={s.r}>
                <td><span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{s.n}</span></td>
                <td>{s.r}</td>
                <td>{s.e}</td>
                <td><Pill t="ENROLLED" /></td>
                <td><Eye size={14} style={{ cursor: 'pointer' }} onClick={() => toast(s.n + ' — full profile view coming soon')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pager total={rows.length} page={page} setPage={setPage} />
      </div>
    </>
  );
}
