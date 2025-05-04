"use client";

import Link from "next/link";

import { useTheme } from "@/context/ThemeContext";

export default function FriendlyNav() {
  const { setTheme } = useTheme();

  const switchToHacker = () => {
    setTheme("hacker");
    localStorage.setItem("theme", "hacker");
    window.location.href = "/boot";
  };

  return (
    <nav className="fixed top-4 right-4 flex gap-3 bg-terminal-black text-terminal-green border border-terminal-green px-4 py-2 rounded-md z-50 font-pixel text-sm md:text-base shadow-lg">
      <Link href="/human" className="hover:text-lime-400 transition">
        🏠 Home
      </Link>
      <Link href="/about" className="hover:text-lime-400 transition">
        👨‍🔧 About
      </Link>
      <Link href="/projects" className="hover:text-lime-400 transition">
        🛠️ Projects
      </Link>
      <Link href="/blog" className="hover:text-lime-400 transition">
        💾 Blog
      </Link>
      <Link href="/contact" className="hover:text-lime-400 transition">
        📬 Contact
      </Link>
      <button
        onClick={switchToHacker}
        className="hover:text-orange-400 transition"
        title="Switch to Hacker Mode"
      >
        💻 Hacker Mode
      </button>
    </nav>
  );
}
