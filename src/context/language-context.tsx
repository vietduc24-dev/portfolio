"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio-data";

type Language = "en" | "vi";
type PortfolioData = typeof portfolioData.en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Optional: load initial language from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Language;
    if (saved === "vi" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(saved);
    } else {
      // Default to Vietnamese if browser is VI
      if (navigator.language.startsWith("vi")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguage("vi");
      }
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "vi" : "en";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });
  };

  const data = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
