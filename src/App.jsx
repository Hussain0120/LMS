import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';

import StudentLogin from './pages/auth/StudentLogin.jsx';
import TeacherLogin from './pages/auth/TeacherLogin.jsx';
import AdminLogin from './pages/auth/AdminLogin.jsx';

import Courses from './pages/student/Courses.jsx';
import Dashboard from './pages/student/Dashboard.jsx';
import Progress from './pages/student/Progress.jsx';
import Attendance from './pages/student/Attendance.jsx';
import Payment from './pages/student/Payment.jsx';
import Assignment from './pages/student/Assignment.jsx';
import Quiz from './pages/student/Quiz.jsx';
import Profile from './pages/student/Profile.jsx';

import Trainer from './pages/teacher/Trainer.jsx';

import Overview from './pages/admin/Overview.jsx';
import Instructors from './pages/admin/Instructors.jsx';
import StudentsDirectory from './pages/admin/StudentsDirectory.jsx';
import BatchesCourses from './pages/admin/BatchesCourses.jsx';
import AttendanceAnalytics from './pages/admin/AttendanceAnalytics.jsx';
import Announcements from './pages/admin/Announcements.jsx';

const LOGIN_PATH = { s: '/login', t: '/trainer/login', a: '/admin/login' };

function Guard({ role, children }) {
  const { auth } = useAuth();
  if (!auth || auth.role !== role) return <Navigate to={LOGIN_PATH[role]} replace />;
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<StudentLogin />} />
      <Route path="/trainer/login" element={<TeacherLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/courses" element={<Guard role="s"><Courses /></Guard>} />
      <Route path="/dashboard" element={<Guard role="s"><Dashboard /></Guard>} />
      <Route path="/progress" element={<Guard role="s"><Progress /></Guard>} />
      <Route path="/attendance" element={<Guard role="s"><Attendance /></Guard>} />
      <Route path="/payment" element={<Guard role="s"><Payment /></Guard>} />
      <Route path="/assignment" element={<Guard role="s"><Assignment /></Guard>} />
      <Route path="/quiz" element={<Guard role="s"><Quiz /></Guard>} />
      <Route path="/profile" element={<Guard role="s"><Profile /></Guard>} />

      <Route path="/trainer" element={<Guard role="t"><Trainer /></Guard>} />

      <Route path="/admin/overview" element={<Guard role="a"><Overview /></Guard>} />
      <Route path="/admin/instructors" element={<Guard role="a"><Instructors /></Guard>} />
      <Route path="/admin/students" element={<Guard role="a"><StudentsDirectory /></Guard>} />
      <Route path="/admin/batches" element={<Guard role="a"><BatchesCourses /></Guard>} />
      <Route path="/admin/attendance" element={<Guard role="a"><AttendanceAnalytics /></Guard>} />
      <Route path="/admin/announcements" element={<Guard role="a"><Announcements /></Guard>} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}
