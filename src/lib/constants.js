// ---- Brand assets ----
export const LOGO = 'https://lms.saylanimit.com/assets/logo.6lrMPvRL.png';
export const COURSE = 'Modern Web Application Development';

// ---- Per-role identity (kept separate on purpose: student, teacher and
// admin each have their own name + photo, never shared with each other) ----
export const SNAME = 'Ahmed Maqbool';
export const PIC = 'https://res.cloudinary.com/saylani-welfare/image/upload/v1759869189/SMIT/Students/4220168729401.jpg';

export const TNAME = 'S Muzammil Javed';
export const TPIC = ''; // paste a teacher photo URL here if you have one

export const ANAME = 'Muhammad Danish';
export const APIC = ''; // paste an admin photo URL here if you have one

// ---- Demo login credentials ----
export const STUDENT_CNIC = '4203122915726';
export const STUDENT_PASS_DEFAULT = '12345678';
export const TEACHER_EMAIL = 'trainer@smit.com';
export const TEACHER_PASS = '12345678';
export const ADMIN_EMAIL = 'admin@smit.com';
export const ADMIN_PASS = '12345678';

// ---- Course progress modules ----
export const MODULES = [
  ['Web Designing', 20, 20],
  ['Front-End Development', 27, 31],
  ['Modern Front-End Development', 10, 14],
  ['Back-End Development', 1, 16],
];

// ---- Quizzes (student result view) ----
export const QUIZZES = [
  ['Javascript (Quiz-4)', 'Modern Front-End Development', '1 / 3', '95%', 'PASSED'],
  ['Javascript (Quiz-3)', 'Modern Front-End Development', '1 / 3', '65%', 'FAILED'],
  ['Javascript (Quiz-2)', 'Modern Front-End Development', '1 / 3', '88%', 'PASSED'],
  ['Javascript (Quiz-1)', 'Modern Front-End Development', '1 / 3', '78%', 'PASSED'],
  ['CSS Quiz', 'Front-End Development', '3 / 3', '63%', 'FAILED'],
  ['HTML Quiz', 'Web Designing', '1 / 3', '68%', 'FAILED'],
];

// ---- Fee history ----
export const FEES = ['Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb'].map((m, i) => ({
  m: m + ' 2026',
  due: (i ? '08' : '13') + '-' + m + '-2026',
  v: '2026' + String(9 - i).padStart(2, '0') + '487564',
}));

// ---- Default assignment list (student view) ----
export const DEFAULT_ASSIGNMENTS = [
  { title: 'test', topics: 0, due: 'September 25, 2026', status: 'NOT SUBMITTED', closed: false, hack: false, desc: 'Internal test assignment used to verify the submission workflow.' },
  { title: 'Student & Teacher Login Portal', topics: 0, due: 'September 24, 2026', status: 'NOT SUBMITTED', closed: true, hack: false, desc: 'Submit both the GitHub repository link and live project link for your React/Next.js frontend project.' },
  { title: 'Admin panel (E commerce Dashboard)', topics: 7, due: 'September 10, 2026', status: 'NOT SUBMITTED', closed: false, hack: false, desc: 'Create the provided UI design in React or Next.js, matching the given Figma spacing and components.' },
  { title: 'QUICKSERVE WMA (Batch-20)', topics: 0, due: 'August 30, 2026', status: 'NOT SUBMITTED', closed: true, hack: true, desc: 'Hackathon challenge: build a modern service-booking web application within 48 hours.' },
  { title: 'E-Commerce Website (React js)', topics: 4, due: 'August 17, 2026', status: 'LATE SUBMITTED', closed: false, hack: false, desc: 'React.js frontend. Create all required e-commerce pages: home, product, cart and checkout.' },
  { title: 'Furniture E-Commerce Website', topics: 5, due: 'August 10, 2026', status: 'LATE SUBMITTED', closed: false, hack: false, desc: 'Follow the provided Figma design pixel-for-pixel and deploy the live link.' },
  { title: 'JavaScript Assignment', topics: 6, due: 'July 10, 2026', status: 'SUBMITTED', closed: false, hack: false, desc: 'Complete all 25 JavaScript questions available at the shared practice link.' },
  { title: 'Budgetting App', topics: 10, due: 'June 1, 2026', status: 'SUBMITTED', closed: false, hack: false, desc: 'Develop a fully responsive and functional budgeting web application.' },
];

// ---- Teacher-side assignment list (richer: description + topics tags) ----
export const DEFAULT_TEACHER_ASSIGNMENTS = [
  { title: 'Admin panel (E commerce Dashboard)', desc: 'Create the provided UI design in React or nextjs.', topics: ['NextJS', 'ReactJS Introduction'], due: 'Sep 10, 2026', hack: false },
  { title: 'QUICKSERVE WMA (Batch-20)', desc: 'Challenge: Build a modern service-booking web application that…', topics: [], due: 'Aug 30, 2026', hack: true },
  { title: 'E-Commerce Website (React js)', desc: 'React.js frontend. Create all required e-commerce…', topics: ['Components , Props'], due: 'Aug 17, 2026', hack: false },
  { title: 'Furniture E-Commerce Website', desc: 'Follow the Figma design.', topics: ['JavaScript Book Code', 'Github'], due: 'Aug 10, 2026', hack: false },
  { title: 'JavaScript Assignment', desc: 'Complete all 25 JavaScript questions available at the link…', topics: ['JavaScript Introduction'], due: 'Jul 10, 2026', hack: false },
  { title: 'Budgetting App', desc: 'Develop a fully responsive and functional Budgeting Web…', topics: ['JavaScript Chapter'], due: 'Jun 1, 2026', hack: false },
  { title: 'Amazon Clone', desc: 'Create a fully responsive landing page inspired by the official…', topics: ['HTML Text', 'HTML Images'], due: 'May 24, 2026', hack: false },
  { title: 'NASA Landing Page', desc: 'Create a fully responsive landing page inspired by NASA…', topics: ['Media queries', 'HTML Text'], due: 'May 1, 2026', hack: false },
  { title: 'Helplytics AI', desc: 'SMIT GRAND CODING NIGHT - April 2026…', topics: [], due: 'Apr 19, 2026', hack: true },
];

export const DEFAULT_TEACHER_QUIZZES = [
  ['Javascript (Quiz-4)', 'Jun 24, 2026'],
  ['Javascript (Quiz-3)', 'Jun 3, 2026'],
  ['Javascript (Quiz-2)', 'May 18, 2026'],
  ['Javascript (Quiz-1)', 'Apr 17, 2026'],
  ['CSS Quiz', 'Mar 27, 2026'],
  ['HTML Quiz', 'Jan 7, 2026'],
];

// ---- Realistic Muslim demo names for the class roster ----
const FIRST = ['Muhammad', 'Ahmed', 'Ali', 'Hassan', 'Usman', 'Bilal', 'Hamza', 'Zain', 'Fatima', 'Ayesha', 'Maryam', 'Zainab', 'Hira', 'Sana', 'Omar', 'Talha', 'Saad', 'Iqra', 'Areeba', 'Faizan'];
const LAST = ['Khan', 'Siddiqui', 'Ansari', 'Qureshi', 'Sheikh', 'Memon', 'Raza', 'Malik', 'Hussain', 'Baig', 'Farooqui', 'Javed'];

export const classmate = (i) => {
  if (i === 0) return { n: SNAME, r: 487564, e: 'ahmed.maqbool@example.com' };
  const n = FIRST[i % FIRST.length] + ' ' + LAST[(i * 7) % LAST.length];
  return { n, r: 487564 + i * 13, e: n.toLowerCase().replace(' ', '') + (100 + i) + '@gmail.com' };
};

export const attendanceDates = (monthAbbr) => {
  const monthIdx = { Sep: 8, Aug: 7, Jul: 6 }[monthAbbr];
  const out = [];
  for (let d = 1; d <= 31; d++) {
    const dt = new Date(2026, monthIdx, d);
    if (dt.getMonth() !== monthIdx) break;
    if ([1, 3, 5].includes(dt.getDay())) out.push(dt);
  }
  return out;
};
export const FIXED_ATTENDANCE = ['PRESENT', 'ABSENT', 'ABSENT', 'ABSENT', 'PRESENT', 'PRESENT'];

// ---- Admin portal seed data ----
export const SEED_INSTRUCTORS = [
  { name: 'S Muzammil Javed', email: 'muzammil.javed@edupulse.edu.pk', dept: 'Web & Mobile Dev', course: 'Modern Web App Development', status: 'Active' },
  { name: 'Ali Mughal', email: 'ali.mughal@edupulse.edu.pk', dept: 'AI & Data Science', course: 'Python, AI & Agentic Workflows', status: 'Active' },
  { name: 'Inzamam Malik', email: 'inzamam.malik@edupulse.edu.pk', dept: 'Cloud Native', course: 'Docker, K8s & Cloud Architecture', status: 'Active' },
  { name: 'Ghous Ahmed', email: 'ghous.ahmed@edupulse.edu.pk', dept: 'Mobile Development', course: 'Flutter & React Native', status: 'Active' },
  { name: 'Hira Khan', email: 'hira.khan@edupulse.edu.pk', dept: 'UI/UX & Graphics', course: 'Figma, UI/UX & Digital Media', status: 'Active' },
  { name: 'Ishaq Bhojani', email: 'ishaq.bhojani@edupulse.edu.pk', dept: 'Web & Mobile Dev', course: 'Full Stack MERN Architecture', status: 'Active' },
];

const SD_FIRST = ['Muhammad Ahsan', 'Ahsan Raza', 'Syed Hamza', 'Zainab', 'Usman', 'Ayesha', 'Omer', 'Maryam', 'Daniyal', 'Hassan', 'Khadija', 'Saad', 'Hafsa', 'Bilal', 'Fatima'];
const SD_LAST = ['Raza', 'Khan', 'Ali', 'Fatima', 'Ghani', 'Siddiqua', 'Farooq', 'Tariq', 'Ahmed', 'Raza', 'Noor', 'Sheikh', 'Rehman', 'Tariq', 'Zahra'];
export const SEED_STUDENTS = SD_FIRST.map((f, i) => {
  const n = f + ' ' + SD_LAST[i];
  const roll = 'WMA-10' + String(482 + i).padStart(3, '0');
  return { roll, name: n, email: n.toLowerCase().split(' ').join('.') + '@edupulse.edu.pk', batch: 'Batch 20', fee: i === 7 || i === 9 ? 'PENDING' : 'PAID', attendance: [88.4, 94.2, 91, 96.5, 85, 92.8, 78.4, 89.1, 42, 86.7, 95, 83.3, 87.5, 90, 98][i], status: i === 9 ? 'Dropout' : 'Enrolled' };
});
// pad to 57 total records like the real portal
for (let i = SEED_STUDENTS.length; i < 57; i++) {
  const c = classmate(i + 20);
  SEED_STUDENTS.push({ roll: 'WMA-10' + (482 + i), name: c.n, email: c.e, batch: 'Batch 20', fee: 'PAID', attendance: 80 + (i % 15), status: 'Enrolled' });
}

export const SEED_BATCHES = [
  { batch: 'Batch 20', course: 'Modern Web App Development', lead: 'S Muzammil Javed', campus: 'Zaitoon Ashraf IT Park — Karachi', time: 'Mon, Wed, Fri • 01:00 PM - 03:00 PM', seats: 60, enrolled: 57, status: 'In Progress' },
  { batch: 'Batch 11', course: 'Python, AI & Agentic Workflows', lead: 'Ali Mughal', campus: 'Gulshan Campus — Karachi', time: 'Tue, Thu, Sat • 10:00 AM - 12:00 PM', seats: 60, enrolled: 52, status: 'In Progress' },
  { batch: 'Batch 15', course: 'Flutter & Mobile App Development', lead: 'Ghous Ahmed', campus: 'Zaitoon Ashraf IT Park — Karachi', time: 'Mon, Wed, Fri • 03:30 PM - 05:30 PM', seats: 55, enrolled: 48, status: 'In Progress' },
  { batch: 'Batch 19', course: 'Full Stack MERN Architecture', lead: 'Ishaq Bhojani', campus: 'Gulshan Campus — Karachi', time: 'Tue, Thu, Sat • 02:00 PM - 04:00 PM', seats: 60, enrolled: 62, status: 'In Progress' },
  { batch: 'Batch 08', course: 'Docker, K8s & Cloud Architecture', lead: 'Inzamam Malik', campus: 'Numish Campus — Karachi', time: 'Weekend (Sat & Sun) • 09:00 AM - 01:00 PM', seats: 50, enrolled: 52, status: 'Completed' },
  { batch: 'Batch 21', course: 'Figma, UI/UX & Digital Media', lead: 'Hira Khan', campus: 'Bahadurabad Head Office — Karachi', time: 'Mon, Wed, Fri • 11:00 AM - 01:00 PM', seats: 50, enrolled: 40, status: 'Upcoming' },
];

export const SEED_ATTENDANCE_ROWS = [
  { batch: 'Batch 20 (WMA)', lead: 'S Muzammil Javed', campus: 'Zaitoon Ashraf IT Park', total: 57, avg: 88.4, sessions: 48, flagged: 3, audit: 'Optimal' },
  { batch: 'Batch 19 (MERN)', lead: 'Hafiz Muhammad Rizwan', campus: 'Gulshan Campus', total: 62, avg: 84.2, sessions: 54, flagged: 7, audit: 'Optimal' },
  { batch: 'Batch 15 (Flutter)', lead: 'Engr. Muhammad Tariq', campus: 'Numish Campus', total: 48, avg: 72.8, sessions: 42, flagged: 14, audit: 'Warning' },
  { batch: 'Batch 11 (Python AI)', lead: 'Dr. Faiza Malik', campus: 'Bahadurabad Head Office', total: 44, avg: 91.5, sessions: 60, flagged: 1, audit: 'Optimal' },
  { batch: 'Batch 08 (Cloud Ops)', lead: 'Bilal Khan', campus: 'Zaitoon Ashraf IT Park', total: 52, avg: 79.1, sessions: 38, flagged: 11, audit: 'Warning' },
  { batch: 'Batch 21 (UI/UX)', lead: 'Ayesha Siddiqua', campus: 'Gulshan Campus', total: 40, avg: 86.7, sessions: 24, flagged: 4, audit: 'Optimal' },
];

export const SEED_ANNOUNCEMENTS = [
  { tag: 'Event', date: '2026-09-18', audience: 'All Students & Teachers', title: 'SMIT Grand Annual Hackathon 2026 Announced', body: 'The institute is hosting its annual 48-hour prototype hackathon at Zaitoon Ashraf IT Park. Over 50 batches will compete on AI & full-stack solutions. Registration is now open.', by: 'Director Academics · Muhammad Danish' },
  { tag: 'Exam', date: '2026-09-15', audience: 'Teachers Only', title: 'Mid-term Assessment Cycle for Batch 20 & 19', body: 'All instructors are requested to submit draft practical problem sheets and viva evaluation rubrics by Monday. Students will undergo a 3-hour practical code test.', by: 'Examination Controller · S Danish' },
  { tag: 'Academic', date: '2026-09-10', audience: 'All Students & Teachers', title: 'Guest Speaker Masterclass on Agentic AI Systems', body: 'Global AI researcher Dr. Tariq Mansoor will conduct a live session on LangGraph, Model Context Protocols, and autonomous enterprise systems in the main auditorium.', by: 'Central Administration' },
  { tag: 'Notice', date: '2026-09-06', audience: 'Students Only', title: 'Lab Schedule Update for Friday Evening Batches', body: 'Cloud virtualization servers will undergo maintenance between 08:00 PM and 11:00 PM this Friday. Please backup all remote instances.', by: 'IT Infrastructure Support' },
];
