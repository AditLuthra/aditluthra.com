"use client";

import { useTheme } from "../../context/ThemeContext";
import AboutBox from "../../components/AboutBox";

export default function AboutPage() {
  const { mode } = useTheme();

  if (mode === "friendly") return <AboutBox />;

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
{`> whoami
Adit Luthra
-----------------------------
🛠 Founder @ MakrX, Botness Technologies
🎯 Mission: Build the world's biggest maker ecosystem
🤖 Loves: robots, 3D printing, weird projects, power electronics
🧠 Believer in making over memorizing, and learning by building
🌍 From: Chandigarh, India

Dream. Make. Share.`}
      </pre>
    </div>
  );
}
