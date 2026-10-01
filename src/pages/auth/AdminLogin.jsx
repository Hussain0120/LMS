import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGO, ADMIN_EMAIL, ADMIN_PASS } from '../../lib/constants.js';
import { toast } from '../../lib/toast.js';
import { useAuth } from '../../context/AuthContext.jsx';
import PasswordInput from '../../components/ui/PasswordInput.jsx';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigate();
  const { login } = useAuth();

  const doLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
      login({ role: 'a' });
      nav('/admin/overview');
    } else {
      toast('Invalid credentials. Demo: ' + ADMIN_EMAIL + ' / ' + ADMIN_PASS);
    }
  };

  return (
    <div className="center">
      <img src={LOGO} alt="SMIT" />
      <h4>Saylani Admin Portal</h4>
      <div className="wrap">
        <form className="box" onSubmit={doLogin}>
          <h3>Login</h3>
          <p>Kindly provide your admin email and password to access the central administration panel.</p>
          <label>Email *</label>
          <div className="in"><input value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <label>Password *</label>
          <PasswordInput value={pass} onChange={setPass} />
          <button className="btn">LOGIN</button>
          <button type="button" className="link" onClick={() => toast(email ? 'Password reset link sent to ' + email : 'Enter your email first.')}>Forgot Password?</button>
        </form>
        <Link className="alt" to="/login">Login as student</Link>
        <Link className="alt" to="/trainer/login">Login as teacher</Link>
      </div>
    </div>
  );
}
