"use client";

import React, {
  useEffect,
  useRef,
  useState,
  type JSX as JSXType,
} from "react";
import ReactMarkdown from "react-markdown";

import ProjectsOutput from "./terminalContent/ProjectsOutput";
import AboutOutput from "./terminalContent/WhoamiOutput";
import BlogOutput from "./terminalContent/BlogOutput";
import ContactOutput from "./terminalContent/ContactOutput";

import blogPosts from "@/content/blogIndex.json";

interface GitHubProject {
  name: string;
  url: string;
  description?: string;
}

export default function TerminalUI() {
  const [lines, setLines] = useState<(JSXType.Element | string)[]>([
    "Welcome to the Adit CLI. Type 'help' to begin.",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [githubProjects, setGithubProjects] = useState<GitHubProject[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // 🔃 Fetch GitHub projects
  useEffect(() => {
    fetch("/api/github/projects")
      .then((res) => res.json())
      .then((data) => setGithubProjects(data))
      .catch(() => setGithubProjects([]));
  }, []);

  const addLine = (content: JSXType.Element | string) => {
    setLines((prev) => [...prev, content]);
  };

  const happyMessages = [
    "✨ You're enough. Even when your code isn't.",
    "💖 Your weird ideas make the world better.",
    "🚀 Go build boldly.",
    "🌟 Keep making circuits blush.",
    "🤖 Beep boop... you're awesome!",
  ];

  const runCommand = (cmd: string) => {
    const command = cmd.trim();
    if (!command) return;

    addLine(<span className="text-terminal-neon">$ {command}</span>);
    setHistory((prev) => [...prev, command]);
    setHistoryIndex(null);

    const [base, ...args] = command.toLowerCase().split(" ");

    switch (base) {
      case "help":
        addLine(
          <>
            <div>🧠 Commands:</div>
            <div>- whoami 👤</div>
            <div>- projects 🛠️</div>
            <div>- blog 💾</div>
            <div>- read [slug]</div>
            <div>- open [project]</div>
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
        addLine("Opening email client...");
        window.location.href = "mailto:adit@makrx.org";
        break;

      case "clear":
        setLines([]);
        break;

      case "sudo":
        if (args.join(" ") === "make-me-happy") {
          const msg = happyMessages[Math.floor(Math.random() * happyMessages.length)];
          addLine(msg);
        } else {
          addLine("❌ Unknown sudo command.");
        }
        break;

      case "read": {
        const slug = args[0];
        const blog = blogPosts.find((b) => b.slug === slug);
        if (!slug || !blog) {
          addLine(`❌ Blog not found for slug: "${slug}"`);
        } else {
          addLine(<div className="text-terminal-neon font-bold">{blog.title}</div>);
          addLine(
            <div className="text-[1.125rem] leading-relaxed font-pixel text-terminal-green whitespace-pre-wrap">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
          );
        }
        break;
      }

      case "open": {
        const userInput = args.join(" ").trim();
        const normalize = (str: string) =>
          str.toLowerCase().replace(/[\s_-]+/g, "");

        const target = normalize(userInput);

        const github = githubProjects.find((p) => normalize(p.name) === target);

        const url = github?.url;

        if (url) {
          addLine(`🌐 Opening: ${url}`);
          window.open(url, "_blank");
        } else {
          addLine("❌ Project not found.");
        }
        break;
      }
      case "manifest": {
        addLine("📂 Hello companies and recruiters — you’ve unlocked Adit’s secret manifest page.");
        window.open("/manifest", "_blank");
        break;
      }


      default:
        addLine(<div className="text-red-400">❌ Command not found: {command}</div>);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      if (!history.length) return;
      const newIndex =
        historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === "ArrowDown") {
      if (historyIndex === null) return;
      const newIndex =
        historyIndex + 1 >= history.length ? null : historyIndex + 1;
      setHistoryIndex(newIndex);
      setInput(newIndex === null ? "" : history[newIndex]);
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
            typeof line === "string" ||
            line?.type === "span" ||
            line?.type === "div"
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
