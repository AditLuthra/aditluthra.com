"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useTheme } from "../../context/ThemeContext";
import FriendlyDashboard from "../../components/FriendlyDashboard";

export default function HumanPage() {
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    // Block hacker users
    if (theme !== "human") {
      router.push("/cli");
    }
  }, [theme, router]);

  if (theme !== "human") return null; // Prevent flicker

  return <FriendlyDashboard />;
}
