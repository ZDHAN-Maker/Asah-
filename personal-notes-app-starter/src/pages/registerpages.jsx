// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../component/header';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Password dan konfirmasi password tidak sama!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find((u) => u.email === email)) {
      alert('Email sudah terdaftar!');
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Pendaftaran berhasil! Silakan login.');
    navigate('/login');
  };

  return (
    <>
    <Header />
    <main>
      <h2>Buat akun baru</h2>
      <form className="input-register" onSubmit={handleRegister}>
        <label>Nama</label>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Konfirmasi Password</label>
        <input
          type="password"
          placeholder="Ulangi password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button type="submit">Daftar</button>
      </form>

      <p>
        Sudah punya akun? <Link to="/login">Login di sini</Link>
      </p>
    </main>
    </>
    
  );
}
