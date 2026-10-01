import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Mail, User, BookOpen, LogOut } from 'lucide-react';
import Shell from '../../components/layout/Shell.jsx';
import Crumb from '../../components/ui/Crumb.jsx';
import { LOGO, SNAME, PIC, COURSE } from '../../lib/constants.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { toast } from '../../lib/toast.js';

export default function Profile() {
  const nav = useNavigate();
  const { logout } = useAuth();

  return (
    <Shell role="s">
      <Crumb items={['Home', 'Profile']} />
      <div className="ban"><img src={LOGO} alt="" /></div>
      <img className="pav" src={PIC} alt={SNAME} />
      <div style={{ display: 'flex', alignItems: 'flex-end', margin: '8px 0 20px' }}>
        <div>
          <h2 style={{ margin: 0, fontWeight: 600 }}>{SNAME}</h2>
          <span className="pill gy" style={{ marginTop: 6 }}>Student</span>
        </div>
        <button className="eb" style={{ marginLeft: 'auto' }} onClick={() => toast('Edit profile is disabled in demo')}>
          <Pencil size={12} />Edit Profile
        </button>
      </div>
      <div className="pg">
        <div className="card pc" style={{ alignSelf: 'start' }}>
          <h5><Mail size={14} color="#3b82f6" />Contact Info</h5>
          <small>Email</small><p>ahmed.maqbool@example.com</p>
          <small>Phone</small><p>03001234567</p>
          <small>Address</small><p>Gulshan-e-Iqbal, Karachi</p>
        </div>
        <div>
          <div className="card pc">
            <h5><User size={14} color="#3b82f6" />Personal Information</h5>
            <div className="pg" style={{ gap: 0 }}>
              <div><small>Gender</small><p>Male</p><small>Last Qualification</small><p>Not Provided</p></div>
              <div><small>Date of Birth</small><p>March 15, 2002</p><small>CNIC</small><p>4210112345671</p></div>
            </div>
          </div>
          <div className="card pc">
            <h5><BookOpen size={14} color="#3b82f6" />Enrolled Courses</h5>
            <div style={{ background: 'var(--navy)', borderLeft: '3px solid #3b82f6', padding: 12, borderRadius: 4 }}>
              <small style={{ color: 'var(--tx)', marginBottom: 6 }}>{COURSE}</small>
              <span className="tag" style={{ fontSize: 10 }}>ENROLLED</span>
            </div>
          </div>
        </div>
      </div>
      <button className="lo" onClick={() => { logout(); nav('/login'); }}><LogOut size={14} />Logout</button>
    </Shell>
  );
}
