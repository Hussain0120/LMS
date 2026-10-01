// Central read/write helpers for every admin-editable list, so Overview's
// quick actions and each dedicated admin page always see the same data.
import { seeded, save } from './store.js';
import { SEED_INSTRUCTORS, SEED_STUDENTS, SEED_BATCHES, SEED_ANNOUNCEMENTS } from './constants.js';

export const getInstructors = () => seeded('admin_instructors', SEED_INSTRUCTORS);
export const addInstructor = (row) => {
  const next = [row, ...getInstructors()];
  save('admin_instructors', next);
  return next;
};

export const getStudents = () => seeded('admin_students', SEED_STUDENTS);
export const addStudent = (row) => {
  const next = [row, ...getStudents()];
  save('admin_students', next);
  return next;
};
export const updateStudent = (roll, patch) => {
  const next = getStudents().map((s) => (s.roll === roll ? { ...s, ...patch } : s));
  save('admin_students', next);
  return next;
};
export const removeStudent = (roll) => {
  const next = getStudents().filter((s) => s.roll !== roll);
  save('admin_students', next);
  return next;
};

export const getBatches = () => seeded('admin_batches', SEED_BATCHES);
export const addBatch = (row) => {
  const next = [row, ...getBatches()];
  save('admin_batches', next);
  return next;
};

export const getAnnouncements = () => seeded('admin_announcements', SEED_ANNOUNCEMENTS);
export const addAnnouncement = (row) => {
  const next = [row, ...getAnnouncements()];
  save('admin_announcements', next);
  return next;
};
export const removeAnnouncement = (idx) => {
  const next = getAnnouncements().filter((_, i) => i !== idx);
  save('admin_announcements', next);
  return next;
};

export const downloadCsv = (filename, rows, headers) => {
  const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const csv = [headers.join(','), ...rows.map((r) => headers.map((h) => esc(r[h])).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};
