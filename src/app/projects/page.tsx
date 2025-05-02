"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "../../components/ProjectCard";

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

  useEffect(() => {
    fetch("/api/github/projects")
      .then((res) => res.json())
      .then(async (githubProjects) => {
        const { getManualProjects } = await import("../../lib/projects");
        const manualProjects = getManualProjects();
        setProjects([...manualProjects, ...githubProjects]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
      <h1 className="text-xl mb-4 text-terminal-neon">📁 Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} mode={mode} />
        ))}
      </div>
    </div>
  );
}
