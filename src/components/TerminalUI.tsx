"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const COMMANDS: Record<string, string> = {
  help: `Available commands: whoami, projects, blog, contact, clear, help`,
  whoami: `Adit Luthra - Maker of weird things, founder of MakrX, creative technologist.`,
  contact: `Reach me at: adit@makrx.org or type 'mailto' to open email client.`,
  blog: `Opening blog...`,
  projects: `Opening projects...`,
  mailto: `Opening email client...`,
  clear: ``,
};

export default function TerminalUI() {
  const [lines, setLines] = useState<string[]>(["Type 'help' to begin."]);
  const [input, setInput] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const runCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    const output = COMMANDS[lowerCmd];

    if (lowerCmd === "clear") {
      setLines([]);
      return;
    }

    setLines(prev => [...prev, `> ${cmd}`, output || `Command not found: ${cmd}`]);

    if (lowerCmd === "projects") setTimeout(() => router.push("/projects"), 1000);
    if (lowerCmd === "blog") setTimeout(() => router.push("/blog"), 1000);
    if (lowerCmd === "mailto") window.location.href = "mailto:adit@makrx.org";
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [lines]);

  return (
    <div className="h-full w-full overflow-y-auto">
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap mb-1 text-sm">{line}</div>
      ))}
      <div className="flex items-center">
        <span className="text-terminal-neon mr-1">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="bg-transparent outline-none w-full font-pixel text-sm"
          autoFocus
        />
      </div>
    </div>
  );
}
