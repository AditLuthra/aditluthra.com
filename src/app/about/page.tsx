"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import FriendlyNav from "@/components/FriendlyNav";
import AboutBox from "@/components/AboutBox";

export default function AboutPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (theme === "hacker") {
      router.push("/cli");
    }
  }, [theme, router]);

  if (!hydrated || theme === "hacker") return null;

  return (
    <>
      <FriendlyNav />
      <AboutBox />
    </>
  );
}
