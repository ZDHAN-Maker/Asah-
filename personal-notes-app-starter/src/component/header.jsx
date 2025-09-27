import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LocaleContext } from "../contexts/LocaleContext";
import ThemeToggle from "./themetoggle";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="app-header">
      <h1>
        <Link to="/" className="app-title-link">
          {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
        </Link>
      </h1>

      <nav>
        {/* Jika belum login */}
        {!user && (
          <>
            <button className="toggle-locale" title="Ganti Bahasa" onClick={toggleLocale}>
              <span className="material-symbols-outlined">g_translate</span>
              {locale.toUpperCase()}
            </button>
            <ThemeToggle />
          </>
        )}

        {/* Jika sudah login */}
        {user && (
          <>
            <button className="toggle-locale" title="Ganti Bahasa" onClick={toggleLocale}>
              <span className="material-symbols-outlined">g_translate</span>
              {locale.toUpperCase()}
            </button>
            <Link to="/arsip">{locale === "id" ? "Arsip" : "Archive"}</Link>
            <ThemeToggle />
            <button className="button-logout" onClick={handleLogout}>
              <span className="material-symbols-outlined">logout</span>
              {locale === "id" ? "Keluar" : "Logout"}
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
