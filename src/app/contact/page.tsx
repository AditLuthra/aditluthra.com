"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useTheme } from "@/context/ThemeContext";

import ThemedView from "@/components/ThemedView";
import VisualContactCard from "@/components/VisualContactCard";
import FriendlyNav from "@/components/FriendlyNav";

export default function ContactPage() {
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (theme === "hacker") {
      router.push("/cli");
    }
  }, [theme, router]);

  if (theme === "hacker") return null;

  return (
    <ThemedView
      human={
        <>
          <FriendlyNav />
          <VisualContactCard />
        </>
      }
      hacker={null}
    />
  );
}
