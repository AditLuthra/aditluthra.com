"use client";

import { useTheme } from "../../context/ThemeContext";
import TerminalUI from "../../components/TerminalUI";
import FriendlyDashboard from "../../components/FriendlyDashboard";

export default function HomePage() {
  const { mode } = useTheme();

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-4 font-pixel">
      {mode === "hacker" ? <TerminalUI /> : <FriendlyDashboard />}
    </div>
  );
}
