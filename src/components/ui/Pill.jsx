import React from 'react';

const MAP = {
  PASSED: 'g', PRESENT: 'g', PAID: 'g', ACTIVE: 'g', ENROLLED: 'gy', Enrolled: 'g',
  FAILED: 'rd', ABSENT: 'rd', Dropout: 'rd',
  'LATE SUBMITTED': 'yl', SUBMITTED: 'g', 'NOT MARKED': 'gy', 'NOT SUBMITTED': 'gy',
  PENDING: 'yl', Optimal: 'g', Warning: 'yl', 'In Progress': 'gy', Completed: 'g', Upcoming: 'pu',
};

export default function Pill({ t }) {
  return <span className={'pill ' + (MAP[t] || 'gy')}>{t}</span>;
}
