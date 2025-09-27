import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import HomePage from "./pages/homepages";
import DetailPage from "./pages/detailpages";
import AddNewPage from "./pages/addnewpages";
import Header from "./component/header";
import ArchivePage from "./pages/archivepages";
import LoginPage from "./pages/loginpages";
import RegisterPage from "./pages/registerpages";
import { AuthContext } from "./contexts/AuthContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { LanguageProvider } from "./contexts/languagecontext";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const { user } = useContext(AuthContext);

  return (
    <LanguageProvider>
      <LocaleProvider>
        <Router>
          <div className="app-container">
            <Header />

            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Protected routes */}
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/notes/:id"
                element={
                  <PrivateRoute>
                    <DetailPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <PrivateRoute>
                    <AddNewPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/arsip"
                element={
                  <PrivateRoute>
                    <ArchivePage />
                  </PrivateRoute>
                }
              />

              {/* Fallback */}
              <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
            </Routes>
          </div>
        </Router>
      </LocaleProvider>
    </LanguageProvider>
  );
}

export default App;
