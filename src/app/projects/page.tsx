"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useTheme } from "@/context/ThemeContext";
import ProjectCard from "@/components/ProjectCard";
import FriendlyNav from "@/components/FriendlyNav";

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
  const { theme } = useTheme();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (theme === "hacker") {
      router.push("/cli");
    }
  }, [theme, router]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/api/github/projects");
        const githubProjects: Project[] = await res.json();
        const { getManualProjects } = await import("@/lib/projects");
        const manualProjects = getManualProjects();
        setProjects([...manualProjects, ...githubProjects]);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      }
    };
    loadProjects();
  }, []);

  if (!hydrated || theme === "hacker") return null;

  return (
    <>
      <FriendlyNav />
      <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
        <h1 className="text-xl mb-4 text-terminal-neon">🛠️ Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} mode="friendly" />
          ))}
        </div>
      </div>
    </>
  );
}
