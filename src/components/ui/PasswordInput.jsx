import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div className="in">
      <input type={show ? 'text' : 'password'} value={value} onChange={(e) => onChange(e.target.value)} />
      {show ? <EyeOff onClick={() => setShow(false)} /> : <Eye onClick={() => setShow(true)} />}
    </div>
  );
}
