import React from 'react';
export default function Bar({ percent, color = 'var(--g)' }) {
  return (
    <div className="bar">
      <i style={{ width: percent + '%', background: color }} />
    </div>
  );
}
