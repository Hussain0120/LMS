import React from 'react';

export default function Modal({ onClose, children, width = 420 }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="box" style={{ width }} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
