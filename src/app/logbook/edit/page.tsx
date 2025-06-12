"use client";

import { useEffect, useRef, useState } from "react";

export default function EditLogbookPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const [projects, setProjects] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [logInput, setLogInput] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_LOGBOOK_KEY || "";

  const unlock = () => {
    if (password === CORRECT_PASSWORD) {
      setUnlocked(true);
      fetchProjects();
    } else {
      alert("❌ Wrong password");
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/logbook/projects");
      const json = await res.json();
      setProjects(json.projects || []);
      setSelectedProject(json.projects?.[0] || "");
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  const submitLog = async () => {
    const log = logInput.trim();
    if (!log || !selectedProject) return;

    try {
      const res = await fetch("/api/logbook/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_slug: selectedProject,
          content: log,
        }),
      });

      if (res.ok) {
        setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${log}`]);
        setLogInput("");
        terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
      } else {
        const contentType = res.headers.get("content-type");
        if (contentType?.includes("application/json")) {
          const err = await res.json();
          console.error("Log insert failed:", err);
        } else {
          const text = await res.text();
          console.error("Unexpected error:", text);
        }
      }
    } catch (err) {
      console.error("Log post failed:", err);
    }
  };

  // Auto-scroll after unlock
  useEffect(() => {
    if (unlocked) {
      terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
    }
  }, [unlocked]);

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-black text-terminal-green font-pixel flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl mb-4">🔐 Logbook Admin Access</h1>
        <input
          type="password"
          className="bg-terminal-black border border-terminal-green text-terminal-green text-center p-2 rounded"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && unlock()}
        />
        <button
          onClick={unlock}
          className="mt-4 px-4 py-2 bg-terminal-green text-black font-bold rounded"
        >
          Unlock
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-terminal-green font-pixel p-8">
      <h1 className="text-3xl mb-6 text-terminal-neon">🧠 Logbook Admin</h1>

      {/* Project Selector */}
      <div className="mb-6">
        <label className="block text-lg mb-2">
          🛠 Project:
          <select
            className="ml-4 bg-terminal-black border border-terminal-green text-terminal-green px-2 py-1 rounded"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            {projects.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Log Input */}
      <input
        type="text"
        value={logInput}
        onChange={(e) => setLogInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submitLog();
          }
        }}
        placeholder="Write a log and hit Enter"
        className="w-full p-4 bg-terminal-black border border-terminal-green text-terminal-green rounded font-mono mb-6"
      />

      {/* Terminal Preview */}
      <div
        ref={terminalRef}
        className="h-[40vh] bg-terminal-black border border-terminal-green rounded p-4 overflow-y-auto custom-scrollbar"
      >
        {logs.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <p className="animate-pulse mt-2">█</p>
      </div>
    </main>
  );
}
