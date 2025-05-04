"use client";

import { useEffect, useRef, useState } from "react";
import ProjectsOutput from "./terminalContent/ProjectsOutput";
import AboutOutput from "./terminalContent/WhoamiOutput"; // still used for whoami
import BlogOutput from "./terminalContent/BlogOutput";
import ContactOutput from "./terminalContent/ContactOutput";

export default function TerminalUI() {
  const [lines, setLines] = useState<(JSX.Element | string)[]>([
    "Welcome to the Adit CLI. Type 'help' to begin.",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addLine = (content: JSX.Element | string) => {
    setLines((prev) => [...prev, content]);
  };

  const runCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    if (!command) return;

    addLine(<span className="text-terminal-neon">$ {cmd}</span>);

    switch (command) {
      case "help":
        addLine(
          <>
            <div>🧠 Commands:</div>
            <div>- whoami 👤</div>
            <div>- projects 🛠️</div>
            <div>- blog 💾</div>
            <div>- contact 📬</div>
            <div>- mailto ✉️</div>
            <div>- clear</div>
            <div>- sudo make-me-happy 💖</div>
          </>
        );
        break;

      case "whoami":
        addLine(<AboutOutput />);
        break;

      case "projects":
        addLine(<ProjectsOutput />);
        break;

      case "blog":
        addLine(<BlogOutput />);
        break;

      case "contact":
        addLine(<ContactOutput />);
        break;

      case "mailto":
        addLine(<div>Opening email client...</div>);
        window.location.href = "mailto:adit@makrx.org";
        break;

      case "clear":
        setLines([]);
        break;

      case "sudo make-me-happy":
        addLine("✨ You are already doing amazing things. Keep making weird stuff!");
        break;

      default:
        addLine(<div className="text-red-400">❌ Command not found: {command}</div>);
    }
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
    <div className="h-full w-full overflow-y-auto p-6 font-pixel text-terminal-green bg-terminal-black text-lg md:text-xl">
      {lines.map((line, i) => (
        <div
          key={i}
          className={`whitespace-pre-wrap ${
            typeof line === "string" || line?.type === "span" || line?.type === "div"
              ? "mb-1"
              : ""
          }`}
        >
          {line}
        </div>
      ))}
      <div className="flex items-center">
        <span className="text-terminal-neon mr-2 text-lg">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="bg-transparent outline-none w-full font-pixel text-lg md:text-xl"
          autoFocus
        />
      </div>
    </div>
  );
}
