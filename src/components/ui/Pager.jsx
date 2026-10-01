import React from 'react';

export default function Pager({ total, page, setPage, per = 10, word = 'records' }) {
  const n = Math.max(1, Math.ceil(total / per));
  const nums = n <= 3 ? [...Array(n)].map((_, i) => i + 1) : [1, 2];
  return (
    <div className="pager">
      <span>
        Showing {(page - 1) * per + 1}–{Math.min(page * per, total)} of {total} {word}
      </span>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>‹ Previous</button>
        {nums.map((x) => (
          <button key={x} className={page === x ? 'on' : ''} onClick={() => setPage(x)}>{x}</button>
        ))}
        {n > 3 && <span>…</span>}
        {n > 2 && <button className={page === n ? 'on' : ''} onClick={() => setPage(n)}>{n}</button>}
        <button disabled={page === n} onClick={() => setPage(page + 1)}>Next ›</button>
      </div>
    </div>
  );
}
