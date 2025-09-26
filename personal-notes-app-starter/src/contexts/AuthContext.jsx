import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cek user dari localStorage saat pertama kali load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Simpan user ke localStorage setiap kali berubah
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Fungsi login
  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      setUser({ email: existingUser.email, name: existingUser.name });
      return true;
    }
    return false;
  };

  // Fungsi register
  const register = (name, email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.find((u) => u.email === email);

    if (userExists) {
      return false; // Email sudah dipakai
    }

    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    setUser({ email: newUser.email, name: newUser.name });
    return true;
  };

  // Fungsi logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
