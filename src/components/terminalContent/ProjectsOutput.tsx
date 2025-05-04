"use client";

import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  source: "github" | "manual";
  stars?: number;
  tags?: string[];
}

export default function ProjectsOutput(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/github/projects")
      .then((res) => res.json())
      .then(async (githubProjects) => {
        const { getManualProjects } = await import("@/lib/projects");
        const manualProjects = getManualProjects();
        setProjects([...manualProjects, ...githubProjects]);
      });
  }, []);

  if (projects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="whitespace-pre-wrap text-terminal-green font-pixel">
      <div>🛠️ PROJECTS</div>
      <div>{"----------------------"}</div>
      {projects.map((proj, i) => (
        <div key={i} className="mb-3">
          <div>{`> ${proj.name}`}</div>
          <div>{`# ${proj.description}`}</div>
          <div>{`🌐 ${proj.url}`}</div>
        </div>
      ))}
      <div>{`Type: open("project_url") to view it externally.`}</div>
    </div>
  );
}
