import React from 'react';

const LIGHT_BG = {
  '#22c55e': ['#d1fae5', '#059467'],
  '#a855f7': ['#efe6ff', '#7c3bed'],
  '#3b82f6': ['#dbeafe', '#2563eb'],
  '#eab308': ['#fef3c7', '#d97706'],
  '#ef4444': ['#fee2e2', '#dc2626'],
  '#9a9a9a': ['#f3f4f6', '#4b5563'],
};

export default function Stat({ n, l, icon: Icon, color }) {
  const [ib, ic] = LIGHT_BG[color] || [];
  return (
    <div className="st">
      <div>
        <big>{n}</big>
        {l}
      </div>
      <div className="ico" style={{ '--ib': ib, '--ic': ic }}>
        <Icon size={20} color={color} />
      </div>
    </div>
  );
}
