import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGO, STUDENT_CNIC, STUDENT_PASS_DEFAULT } from '../../lib/constants.js';
import { load, save } from '../../lib/store.js';
import { toast } from '../../lib/toast.js';
import { useAuth } from '../../context/AuthContext.jsx';
import PasswordInput from '../../components/ui/PasswordInput.jsx';

const getUsers = () => load('users', { [STUDENT_CNIC]: STUDENT_PASS_DEFAULT });

export default function StudentLogin() {
  const [tab, setTab] = useState('login');
  const [cnic, setCnic] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [pass2, setPass2] = useState('');
  const nav = useNavigate();
  const { login } = useAuth();

  const doLogin = (e) => {
    e.preventDefault();
    const users = getUsers();
    if (users[cnic] === pass) {
      login({ role: 's', cnic });
      nav('/courses');
    } else {
      toast('Invalid CNIC or password. Demo: ' + STUDENT_CNIC + ' / ' + STUDENT_PASS_DEFAULT);
    }
  };

  const doCreate = (e) => {
    e.preventDefault();
    if (cnic.length < 13 || pass.length < 6 || pass !== pass2) {
      toast('Enter a 13-digit CNIC and matching passwords (min 6 characters).');
      return;
    }
    save('users', { ...getUsers(), [cnic]: pass });
    toast('Password created. Please login.');
    setTab('login');
    setPass('');
    setPass2('');
  };

  return (
    <div className="center">
      <img src={LOGO} alt="SMIT" />
      <h4>Student Portal</h4>
      <div className="wrap">
        <div className="tabs">
          <button className={tab === 'login' ? 'on' : ''} onClick={() => setTab('login')}>Login</button>
          <button className={tab === 'create' ? 'on' : ''} onClick={() => setTab('create')}>Create Password</button>
        </div>

        {tab === 'login' ? (
          <form className="box" onSubmit={doLogin}>
            <h3>Login</h3>
            <p>Kindly provide the CNIC number and password used during SMIT course registration.</p>
            <label>CNIC *</label>
            <div className="in"><input value={cnic} onChange={(e) => setCnic(e.target.value)} /></div>
            <label>Password *</label>
            <PasswordInput value={pass} onChange={setPass} />
            <button className="btn">LOGIN</button>
          </form>
        ) : (
          <form className="box" onSubmit={doCreate}>
            <h3>Create Password</h3>
            <p>Enter the CNIC used during SMIT course registration to create your password.</p>
            <label>CNIC *</label>
            <div className="in"><input value={cnic} onChange={(e) => setCnic(e.target.value)} /></div>
            <label>Email *</label>
            <div className="in"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            <label>New Password *</label>
            <PasswordInput value={pass} onChange={setPass} />
            <label>Confirm Password *</label>
            <PasswordInput value={pass2} onChange={setPass2} />
            <button className="btn">CREATE PASSWORD</button>
          </form>
        )}

        <Link className="alt" to="/trainer/login">Login as teacher</Link>
        <Link className="alt" to="/admin/login">Login as Saylani Admin</Link>
      </div>
    </div>
  );
}
