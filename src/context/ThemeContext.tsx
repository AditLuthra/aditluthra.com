"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "hacker" | "friendly";

const ThemeContext = createContext<{
  mode: ThemeMode;
  toggleMode: () => void;
}>({
  mode: "hacker",
  toggleMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("hacker");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "friendly" || stored === "hacker") {
      setMode(stored as ThemeMode);
    }
  }, []);

  const toggleMode = () => {
    const next = mode === "hacker" ? "friendly" : "hacker";
    setMode(next);
    localStorage.setItem("theme", next);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
