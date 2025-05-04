import manualProjects from "../content/projects.json";

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  source: "github" | "manual";
  stars?: number;
  tags?: string[];
}

export function getManualProjects(): Project[] {
  return manualProjects.map((proj) => ({
    ...proj,
    source: "manual" as const, // 🔒 Ensures type compatibility
  }));
}
