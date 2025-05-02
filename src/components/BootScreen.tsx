"use client";

import { useEffect, useState } from "react";
import TerminalLine from "./TerminalLine";
import { useRouter } from "next/navigation";

const asciiWelcome = `
 _____ _             _       _ _ _   _           _           
|  _  | |           | |     (_) | | (_)         | |          
| | | | |_   _  __ _| | ___  _| | |_ _  ___ __ _| |_ ___  ___ 
| | | | | | | |/ _\` | |/ _ \\| | | __| |/ __/ _\` | __/ _ \\/ __|
\\ \\_/ / | |_| | (_| | | (_) | | | |_| | (_| (_| | ||  __/\\__ \\
 \\___/|_|\\__,_|\\__, |_|\\___/|_|_|\\__|_|\\___\\__,_|\\__\\___||___/
                __/ |                                         
               |___/                                          

CTRL + ALT + ADIT
maker of weird things... booting up...
`;

const bootLines = [
  "BIOS Version: ADIT-MKRX-001",
  "Initializing weirdness...",
  "Mounting floppy drive...",
  "Loading terminal interface...",
  "Injecting chaos...",
  "System integrity: ✖ (expected)",
  "Preparing dashboard...",
  "Welcome, Adit Luthra.",
];

export default function BootScreen() {
  const [bootComplete, setBootComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("theme", "hacker");
      setBootComplete(true);
    }, bootLines.length * 800 + 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = () => {
      if (bootComplete) {
        router.push("/home");
      }
    };
    if (bootComplete) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [bootComplete, router]);

  return (
    <div className="h-screen w-screen flex flex-col items-start justify-center p-6 font-pixel text-terminal-green bg-terminal-black">
      <pre className="mb-4 whitespace-pre-wrap leading-snug text-sm">
        {asciiWelcome}
      </pre>
      {bootLines.map((line, i) => (
        <TerminalLine key={i} line={line} delay={i * 800} />
      ))}
      {bootComplete && (
        <div className="mt-6 text-orange-400 animate-blink">
          Press any key to continue...
        </div>
      )}
    </div>
  );
}
