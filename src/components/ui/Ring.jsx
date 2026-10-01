import React from 'react';
export default function Ring({ percent }) {
  return (
    <div className="ring" style={{ background: `conic-gradient(#3b82f6 ${percent * 3.6}deg, var(--hi) 0)` }}>
      <span>{percent}%</span>
    </div>
  );
}
