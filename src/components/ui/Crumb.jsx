import React from 'react';
import Feedback from './Feedback.jsx';

export default function Crumb({ items }) {
  return (
    <div className="top">
      <div>
        {items.map((c, i) => (
          <span key={i} style={{ margin: 0 }}>
            {i > 0 && <span> › </span>}
            {i === items.length - 1 ? <b>{c}</b> : c}
          </span>
        ))}
      </div>
      <Feedback />
    </div>
  );
}
