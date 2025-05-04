"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import ProjectCard from "@/components/ProjectCard";
import ThemedView from "@/components/ThemedView";
import TerminalOutput from "@/components/TerminalOutput";
import HumanNav from "@/components/FriendlyNav"; // ✅ Nav for human users

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  source: "github" | "manual";
  stars?: number;
  tags?: string[];
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { mode } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (mode === "hacker") {
      router.push("/cli");
    }
  }, [mode, router]);

  useEffect(() => {
    fetch("/api/github/projects")
      .then((res) => res.json())
      .then(async (githubProjects) => {
        const { getManualProjects } = await import("@/lib/projects");
        const manualProjects = getManualProjects();
        setProjects([...manualProjects, ...githubProjects]);
      });
  }, []);

  if (mode === "hacker") return null;

  return (
    <ThemedView
      human={
        <>
          <HumanNav />
          <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
            <h1 className="text-xl mb-4 text-terminal-neon">🛠️ Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} mode="human" />
              ))}
            </div>
          </div>
        </>
      }
      hacker={
        <TerminalOutput
          title="🛠️ Projects"
          lines={[
            "> ls ./projects",
            ...projects.map((proj) => `📁 ${proj.name} — ${proj.description}`),
            "",
            "use: open(project_url) to clone or explore",
          ]}
        />
      }
    />
  );
}
