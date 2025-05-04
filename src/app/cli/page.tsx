"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../../context/ThemeContext";
import TerminalUI from "../../components/TerminalUI";

export default function CLIDashboard() {
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    // If theme is not hacker, redirect to friendly UI
    if (theme && theme !== "hacker") {
      router.push("/human");
    }
  }, [theme, router]);

  // Wait until theme is set
  if (theme !== "hacker") return null;

  return (
    <main className="min-h-screen bg-terminal-black text-terminal-green font-pixel p-6">
      <TerminalUI />
    </main>
  );
}
