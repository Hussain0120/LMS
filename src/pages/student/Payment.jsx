import React from 'react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import FeeTable from '../../components/student/FeeTable.jsx';
import { COURSE, FEES } from '../../lib/constants.js';

export default function Payment() {
  return (
    <Shell role="s">
      <Crumb items={['Home', COURSE, 'Payment']} />
      <div className="info jazz">
        <div>
          <p style={{ margin: '0 0 12px' }}>To pay your fee via JazzCash:</p>
          <ol>
            <li>Open JazzCash app</li>
            <li>Click on <b>More</b></li>
            <li>Go to <b>Education</b> tab</li>
            <li>Click <b>Universities</b></li>
            <li>Select <b>Saylani Education</b> from the list</li>
            <li>Paste your <b>Voucher ID</b></li>
            <li>Pay your fee</li>
          </ol>
        </div>
        <div className="phone" />
      </div>
      <FeeTable rows={FEES} />
    </Shell>
  );
}
