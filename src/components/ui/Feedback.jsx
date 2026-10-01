import React from 'react';
import { MessageSquare } from 'lucide-react';
import { toast } from '../../lib/toast.js';

export default function Feedback() {
  return (
    <button className="fb" onClick={() => toast('Thanks! Feedback form coming soon.')}>
      <MessageSquare size={16} />
      Feedback
    </button>
  );
}
