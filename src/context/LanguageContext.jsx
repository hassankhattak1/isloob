// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en"); // default English

  const toggleLanguage = (language) => {
    setLang(language);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for convenience
export function useLanguage() {
  return useContext(LanguageContext);
}
