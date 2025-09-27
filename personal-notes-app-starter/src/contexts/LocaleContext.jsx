import { createContext, useState, useEffect } from "react";

export const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("id");

  // Simpan preferensi bahasa ke localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const newLocale = prev === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
