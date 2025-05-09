"use client";

import { useTheme } from "../context/ThemeContext";

export default function ModeSwitch() {
  const { theme, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="fixed top-4 right-4 z-50 text-xs px-3 py-1 border border-terminal-green text-terminal-green hover:bg-terminal-neon hover:text-black transition font-pixel"
    >
      {theme === "hacker" ? "🎨 Switch to Human" : "💻 Switch to Hacker"}
    </button>
  );
}
