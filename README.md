# Saylani LMS Portal (React + Vite)

## Run
```
npm install
npm run dev
```
Then open the printed http://localhost:5173 link.

## Demo logins
- Student — CNIC: 4203122915726, Password: 12345678 (or use "Create Password")
- Teacher — Email: trainer@smit.com, Password: 12345678
- Saylani Admin — Email: admin@smit.com, Password: 12345678

## What's persisted in localStorage
- Theme (dark/light)
- Login session
- Student assignment submissions
- Teacher-created assignments, quiz active/inactive toggles, attendance marks
- Admin instructors, students directory, batches, announcements

## Project structure
```
src/
  lib/           constants, localStorage helpers, admin data helpers
  context/       Theme + Auth React contexts
  components/
    ui/          shared building blocks (Stat, Pill, Bar, Ring, Pager, Modal...)
    layout/      Shell.jsx (sidebar + topbar used by every role)
    student/     student-only building blocks (CourseCard, FeeTable)
    teacher/     one component per trainer course-page tab
    admin/       one form component per admin entity
  pages/
    auth/        StudentLogin, TeacherLogin, AdminLogin
    student/     one file per student page
    teacher/     Trainer.jsx (tab orchestrator)
    admin/       one file per admin page
```
