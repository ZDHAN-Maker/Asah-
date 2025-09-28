import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LanguageContext, LanguageProvider } from "../contexts/languagecontext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const { language, translations } = useContext(LanguageContext);

  const t = translations[language];

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert(
        language === "id"
          ? "Password dan konfirmasi password tidak sama!"
          : "Password and confirmation do not match!"
      );
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === email)) {
      alert(language === "id" ? "Email sudah terdaftar!" : "Email already registered!");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert(
      language === "id"
        ? "Pendaftaran berhasil! Silakan login."
        : "Registration successful! Please login."
    );
    navigate("/login");
  };

  return (
    <LanguageProvider>
    <main>
      <h2>{t.registerTitle}</h2>
      <form className="input-register" onSubmit={handleRegister}>
        <label>{t.name}</label>
        <input
          type="text"
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>{t.email}</label>
        <input
          type="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>{t.password}</label>
        <input
          type="password"
          placeholder={t.passwordPlaceholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>{t.confirmPassword}</label>
        <input
          type="password"
          placeholder={t.confirmPasswordPlaceholder}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button type="submit">{t.registerButton}</button>
      </form>

      <p>
        {t.loginText} <Link to="/login">{t.loginLink}</Link>
      </p>
    </main>
    </LanguageProvider> 
  );
}
