"use client";

import { useTheme } from "../../context/ThemeContext";
import ASCIIForm from "../../components/ASCIIForm";
import VisualContactCard from "../../components/VisualContactCard";

export default function ContactPage() {
  const { mode } = useTheme();

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
      <h1 className="text-xl mb-4 text-terminal-neon">📬 Contact Me</h1>
      <p className="mb-4 text-sm">
        Want to send ASCII art, ideas, or vibes? Use the form or{" "}
        <a href="mailto:adit@makrx.org" className="text-terminal-neon underline">email me directly</a>.
      </p>

      {mode === "hacker" ? <ASCIIForm /> : <VisualContactCard />}
    </div>
  );
}
