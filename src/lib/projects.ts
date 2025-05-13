// src/lib/projects.ts

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  source: "github";
  stars?: number;
  tags?: string[];
}

// If needed in future, you can fetch or mock projects here.
// For now, returns an empty array.
export function getManualProjects(): Project[] {
  return [];
}
