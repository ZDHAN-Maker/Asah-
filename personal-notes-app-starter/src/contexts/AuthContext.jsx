import { createContext, useState, useEffect } from "react";
import {
  login as apiLogin,
  putAccessToken,
  getUserLogged,
} from "../utils/network-data";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { error, data } = await getUserLogged();
      if (!error) setUser(data);
    }
    fetchUser();
  }, []);

  const login = async ({ email, password }) => {
    const { error, data } = await apiLogin({ email, password });
    if (!error) {
      putAccessToken(data.accessToken);
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
