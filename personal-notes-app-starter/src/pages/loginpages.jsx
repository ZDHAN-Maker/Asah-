
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Header from '../component/header';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/');
    } else {
      alert('Email atau password salah!');
    }
  };

  return (
    <>
    <Header />
    <main>
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <form className="input-login" onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>

      <p>
        Belum punya akun? <Link to="/register">Daftar di sini</Link>
      </p>
    </main>
    </>
    
  );
}
