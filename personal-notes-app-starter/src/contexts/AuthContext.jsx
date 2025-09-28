import { createContext, useState, useEffect } from "react";
import {
  login as apiLogin,
  putAccessToken,
  getUserLogged,
} from "../utils/network-data";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const { error, data } = await getUserLogged();
      if (!error) {
        setUser(data);
      } else {
        setUser(null);
      }
      setLoading(false);
    }
    fetchUser();
  }, []);

  const login = async ({ email, password }) => {
    const { error, data } = await apiLogin({ email, password });
    if (!error) {
      putAccessToken(data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);

      const { data: userData } = await getUserLogged();
      setUser(userData);
    }
    return !error;
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
}
