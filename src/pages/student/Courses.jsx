import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { COURSE, SNAME, PIC } from '../../lib/constants.js';
import Feedback from '../../components/ui/Feedback.jsx';
import CourseCard from '../../components/student/CourseCard.jsx';

export default function Courses() {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('ENROLLED');
  const nav = useNavigate();
  const match = COURSE.toLowerCase().includes(q.toLowerCase());

  return (
    <div className="main">
      <div className="hdr">
        <div className="chip" onClick={() => nav('/profile')}>
          <img src={PIC} alt="" />
          {SNAME}
        </div>
        <div className="srch">
          <input placeholder="Search Course" value={q} onChange={(e) => setQ(e.target.value)} />
          <Search />
        </div>
        <select className="sel" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>ENROLLED</option>
          <option>ALL</option>
        </select>
        <Feedback />
      </div>
      {match && (
        <div style={{ maxWidth: 642 }}>
          <CourseCard onView={() => nav('/dashboard')} />
        </div>
      )}
    </div>
  );
}
