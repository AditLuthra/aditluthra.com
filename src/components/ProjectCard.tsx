interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  source: "github" | "manual";
  stars?: number;
  tags?: string[];
}

export default function ProjectCard({
  project,
  mode,
}: {
  project: Project;
  mode: "hacker" | "friendly";
}) {
  const shared = (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg">{project.name}</h2>
        <span className="text-xs bg-terminal-green text-black px-2 py-0.5 rounded">
          {project.source}
        </span>
      </div>
      <p className="text-sm mb-2">{project.description}</p>
      {project.tags && (
        <div className="flex flex-wrap gap-1 text-xs text-terminal-gray">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="border border-terminal-gray px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.stars !== undefined && (
        <div className="text-xs mt-2">⭐ {project.stars} stars</div>
      )}
    </>
  );

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block border p-4 rounded transition ${
        mode === "hacker"
          ? "border-terminal-green hover:bg-terminal-neon hover:text-black"
          : "border-[#ccc] bg-[#1b1b1b] hover:bg-terminal-neon hover:text-black"
      }`}
    >
      {shared}
    </a>
  );
}
