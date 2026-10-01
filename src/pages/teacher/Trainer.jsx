import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Users, CalendarCheck, FileText, ClipboardCheck } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Feedback from '../../components/ui/Feedback.jsx';
import { COURSE } from '../../lib/constants.js';
import StudentsTab from '../../components/teacher/StudentsTab.jsx';
import AttendanceTab from '../../components/teacher/AttendanceTab.jsx';
import AssignmentsTab from '../../components/teacher/AssignmentsTab.jsx';
import QuizzesTab from '../../components/teacher/QuizzesTab.jsx';
import ProgressTab from '../../components/teacher/ProgressTab.jsx';

const TABS = [
  ['students', 'Students', Users],
  ['attendance', 'Attendance', CalendarCheck],
  ['assignments', 'Assignments', FileText],
  ['quizzes', 'Quizzes', ClipboardCheck],
  ['progress', 'Course Progress', ClipboardCheck],
];

export default function Trainer() {
  const [sp, setSp] = useSearchParams();
  const tab = sp.get('tab') || 'students';

  return (
    <Shell role="t">
      <div className="top">
        <div>Dashboard › <b>{COURSE}</b></div>
        <Feedback />
      </div>
      <h2 style={{ margin: '0 0 4px', fontWeight: 500, fontSize: 22 }}>{COURSE}</h2>
      <div className="ttabs">
        {TABS.map(([k, l, Icon]) => (
          <button key={k} className={tab === k ? 'on' : ''} onClick={() => setSp({ tab: k })}>
            <Icon size={14} />{l}
          </button>
        ))}
      </div>
      {tab === 'students' && <StudentsTab />}
      {tab === 'attendance' && <AttendanceTab />}
      {tab === 'assignments' && <AssignmentsTab />}
      {tab === 'quizzes' && <QuizzesTab />}
      {tab === 'progress' && <ProgressTab />}
    </Shell>
  );
}
