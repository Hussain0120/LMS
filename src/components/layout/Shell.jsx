import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, CalendarCheck, Wallet, FileText, ClipboardCheck,
  ChevronLeft, ChevronRight, User, Sun, Moon, LogOut, Users, UserCog, BarChart3, Megaphone,
} from 'lucide-react';
import { LOGO, SNAME, PIC, TNAME, TPIC, ANAME, APIC } from '../../lib/constants.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const NAV = {
  s: [
    ['Dashboard', '/dashboard', LayoutDashboard],
    ['Progress', '/progress', BookOpen],
    ['Attendance', '/attendance', CalendarCheck],
    ['Payment', '/payment', Wallet],
    ['Assignment', '/assignment', FileText],
    ['Quiz', '/quiz', ClipboardCheck],
  ],
  t: [
    ['Dashboard', '/trainer', LayoutDashboard],
  ],
  a: [
    ['Overview', '/admin/overview', LayoutDashboard],
    ['Instructors', '/admin/instructors', UserCog],
    ['Students Directory', '/admin/students', Users],
    ['Batches & Courses', '/admin/batches', BookOpen],
    ['Attendance & Analytics', '/admin/attendance', BarChart3],
    ['Announcements', '/admin/announcements', Megaphone],
  ],
};

const IDENTITY = {
  s: { name: SNAME, pic: PIC },
  t: { name: TNAME, pic: TPIC },
  a: { name: ANAME, pic: APIC },
};

const LOGIN_PATH = { s: '/login', t: '/trainer/login', a: '/admin/login' };

export default function Shell({ role, children }) {
  const collapsedByDefault = role !== 's';
  const [sm, setSm] = useState(collapsedByDefault);
  const [menu, setMenu] = useState(false);
  const nav = useNavigate();
  const { theme, toggle } = useTheme();
  const { logout } = useAuth();
  const { name, pic } = IDENTITY[role];
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  const signOut = () => {
    logout();
    nav(LOGIN_PATH[role]);
  };

  return (
    <div className="app">
      <aside className={'side' + (sm ? ' sm' : '')}>
        <div className="slogo">
          <img src={LOGO} alt="SMIT" />
          <button onClick={() => setSm(!sm)}>{sm ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}</button>
        </div>
        <nav className="nav">
          {NAV[role].map(([label, to, Icon]) => (
            <NavLink key={label} to={to} end className={({ isActive }) => (isActive && (role === 's' || to === '/trainer' || to.startsWith('/admin/overview')) ? 'on' : '')}>
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="me" onClick={() => setMenu(!menu)}>
          {menu && (
            <div className="pop">
              {role === 's' && (
                <div onClick={() => nav('/profile')}>
                  <User size={16} />
                  Profile
                </div>
              )}
              <div onClick={toggle}>
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </div>
              <hr />
              <div onClick={signOut}>
                <LogOut size={16} />
                Log out
              </div>
            </div>
          )}
          <span>{name}</span>
          {pic ? <img src={pic} alt={name} /> : <b className="ini" title={name}>{initials}</b>}
        </div>
      </aside>
      <main className="main">
        <div className="in-main">{children}</div>
      </main>
    </div>
  );
}
