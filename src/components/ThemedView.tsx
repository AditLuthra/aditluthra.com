"use client";

import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import TerminalUI from "./TerminalUI";

interface ThemedViewProps {
  human: ReactNode;
  hacker?: ReactNode; // Optional override, else fallback to full terminal
}

export default function ThemedView({ human, hacker }: ThemedViewProps) {
  const { theme } = useTheme();

  return (
    <>
      {theme === "human" ? human : hacker ?? <TerminalUI />}
    </>
  );
}
