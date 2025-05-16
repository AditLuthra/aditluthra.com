"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("human");
  const [hydrated, setHydrated] = useState(false); // 🧠 important

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "human" || stored === "hacker") {
      setThemeState(stored);
    }
    setHydrated(true); // ✅ now we're ready to render children
  }, []);

  const setTheme = (mode: Theme) => {
    localStorage.setItem("theme", mode);
    setThemeState(mode);
  };

  const toggleMode = () => {
    const newMode = theme === "human" ? "hacker" : "human";
    setTheme(newMode);
  };

  // 🧠 Prevent early render glitches
  if (!hydrated) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
