import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('grp_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (username, password) => {
    // Simulate auth check
    if ((username === 'admin' || username === 'admin@grpatil.edu.in') && password === 'admin123') {
      const userData = {
        id: 'usr-1',
        name: 'Administrator',
        email: 'admin@grpatil.edu.in',
        role: 'Super Admin'
      };
      setUser(userData);
      localStorage.setItem('grp_admin_user', JSON.stringify(userData));
      return { success: true };
    }
    throw new Error('Invalid username or password. (Use "admin" / "admin123")');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('grp_admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
