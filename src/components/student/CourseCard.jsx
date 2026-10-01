import React from 'react';
import { Hash, Award, MapPin, MousePointerClick } from 'lucide-react';
import { COURSE } from '../../lib/constants.js';
import Bar from '../ui/Bar.jsx';

export default function CourseCard({ onView, showTimes, progress = 75 }) {
  return (
    <div className="card course">
      <div className="hd">
        <div>
          <h2>{COURSE}</h2>
          {showTimes && (
            <div className="times">
              <span>Mon 01:00 PM - 03:00 PM</span>
              <span>Wed 01:00 PM - 03:00 PM</span>
              <span>Fri 01:00 PM - 03:00 PM</span>
            </div>
          )}
        </div>
        <span className="tag">ENROLLED</span>
      </div>
      <div className="bd">
        <div className="pr"><span>Progress</span><span>{progress}% Completed</span></div>
        <Bar percent={progress} />
        <div className="meta">
          <div><Hash size={16} /><b>Batch:</b>20</div>
          <div><Award size={16} /><b>Roll:</b>487564</div>
          <div><MapPin size={16} /><b>Campus:</b>Zaitoon Ashraf IT Park</div>
          <div><MapPin size={16} /><b>City:</b>Karachi</div>
        </div>
        {onView && (
          <button className="vd" onClick={onView}>
            <MousePointerClick size={18} />
            View Details
          </button>
        )}
      </div>
    </div>
  );
}
