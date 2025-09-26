// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import HomePage from './pages/homepages';
import DetailPage from './pages/detailpages';
import AddNewPage from './pages/addnewpages';
import Header from './component/header';
import ArchivePage from './pages/archivepages';
import LoginPage from './pages/loginpages';
import RegisterPage from './pages/registerpages';
import { AuthContext } from './contexts/AuthContext';

// Komponen PrivateRoute untuk proteksi halaman
function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="app-container">
        {/* Header hanya muncul kalau sudah login */}
        {user && <Header />}

        <Routes>
          {/* Auth routes */}
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

          {/* Default redirect */}
          <Route path="*" element={<Navigate to={user ? '/' : '/login'} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
