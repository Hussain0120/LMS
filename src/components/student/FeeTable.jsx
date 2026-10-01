import React from 'react';
import { Copy } from 'lucide-react';
import { toast } from '../../lib/toast.js';
import Pill from '../ui/Pill.jsx';

export default function FeeTable({ rows }) {
  const copy = (v) => {
    navigator.clipboard?.writeText(v);
    toast('Voucher ID copied');
  };
  return (
    <div className="tw">
      <table>
        <thead>
          <tr>{['Month', 'Amount', 'Type', 'Due date', 'Voucher ID', 'Status'].map((h) => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.v}>
              <td>{r.m}</td>
              <td>Rs: 1000 /-</td>
              <td>Monthly</td>
              <td>{r.due}</td>
              <td>
                {r.v}
                <button className="cp" onClick={() => copy(r.v)}><Copy size={16} /></button>
              </td>
              <td><Pill t="PAID" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
