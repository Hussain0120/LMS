import React, { createContext, useContext, useState } from 'react';
import { getAuth, setAuth, clearAuth } from '../lib/store.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuthState] = useState(getAuth());
  const login = (data) => {
    setAuth(data);
    setAuthState(data);
  };
  const logout = () => {
    clearAuth();
    setAuthState(null);
  };
  return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
