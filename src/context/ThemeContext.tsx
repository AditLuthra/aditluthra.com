"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "human" | "hacker";

interface ThemeContextType {
  theme: Theme;
  setTheme: (mode: Theme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "human",
  setTheme: () => {},
  toggleMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("human");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "human" || stored === "hacker") {
      setThemeState(stored);
    }
  }, []);

  const setTheme = (mode: Theme) => {
    localStorage.setItem("theme", mode);
    setThemeState(mode);
  };

  const toggleMode = () => {
    const newMode = theme === "human" ? "hacker" : "human";
    setTheme(newMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
