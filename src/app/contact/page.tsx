"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import ThemedView from "@/components/ThemedView";
import VisualContactCard from "@/components/VisualContactCard";
import ContactOutput from "@/components/terminalContent/ContactOutput";
import HumanNav from "@/components/FriendlyNav";

export default function ContactPage() {
  const { mode } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (mode === "hacker") {
      router.push("/cli");
    }
  }, [mode, router]);

  if (mode === "hacker") return null;

  return (
    <ThemedView
      human={
        <>
          <HumanNav />
          <VisualContactCard />
        </>
      }
      hacker={<ContactOutput />} // This will never render; safe fallback
    />
  );
}
