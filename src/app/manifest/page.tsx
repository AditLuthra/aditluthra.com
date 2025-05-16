import Image from "next/image";
import manualProjects from "@/content/projects.json";
import { vt323, inter } from "@/fonts";

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  source: "github" | "manual";
  stars?: number | null;
  tags?: string[];
}

async function fetchGitHubProjects(): Promise<Project[]> {
  const isServer = typeof window === "undefined";

  const baseUrl = isServer
    ? "https://aditluthra.com" // works for Vercel/prod
    : window.location.origin;

  try {
    const res = await fetch(`${baseUrl}/api/github/projects`, { cache: "no-store" });
    if (!res.ok) throw new Error("GitHub API error");
    return await res.json();
  } catch (err) {
    console.error("GitHub fetch failed:", err);
    return [];
  }
}

export default async function ManifestPage() {
  const githubProjects = await fetchGitHubProjects();
  const projects: Project[] = [
    ...manualProjects.map((proj) => ({ ...proj, source: "manual" as const })),
    ...githubProjects,
  ];

  return (
    <main className={`${vt323.variable} ${inter.variable} bg-[#FAFAFA] text-black`}>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <h1 className="text-6xl font-bold font-pixel text-center mb-2 mt-2">Adit Luthra</h1>
        <p className="text-green-700 text-3xl font-pixel font-semibold text-center mb-6">
          Maker • Innovator • Explorer
        </p>

        {/* Avatar + Bio */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col sm:flex-row items-center w-full justify-center mb-6 gap-6">
            <Image
              src="/images/adit-avatar.png"
              alt="Adit Avatar"
              width={150}
              height={150}
              className="border border-black"
            />
            <p className="text-xl font-sans leading-relaxed max-w-2xl text-center sm:text-left">
              Passionate about bridging creativity and technology, I’m committed to building innovative,
              scalable solutions that redefine boundaries. Driven by curiosity, hands-on experimentation,
              and impactful projects.
            </p>
          </div>
          <a
            href="/adit-luthra-resume.pdf"
            download
            className="inline-block text-[22px] mt-3 px-8 py-3 border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition font-bold tracking-wide"
          >
            Download Full Resume (PDF)
          </a>
        </div>

        {/* Skills */}
        <section className="flex flex-wrap justify-center gap-2 text-lg font-sans my-10">
          {[
            "Full-Stack Development",
            "Robotics & Embedded Systems",
            "3D Printing",
            "IoT & Automation",
            "Rapid Prototyping",
            "AI & Machine Learning Basics",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1 bg-gray-100 border border-gray-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-pixel mb-8 text-left">Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <a
                key={proj.id}
                href={proj.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black rounded-md p-6 bg-white hover:shadow-md transition flex flex-col"
              >
                <h3 className="font-bold text-[22px] font-pixel">{proj.name}</h3>
                <p className="mt-2 text-base text-gray-700 font-sans">{proj.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Education & Experience */}
        <section className="text-left mt-10">
          <h2 className="text-3xl font-pixel mb-6">Education & Experience</h2>
          <div className="space-y-6 text-xl font-sans">
            <div>
              <p className="font-bold font-pixel text-xl mb-1">🎓 Punjab Engineering College (PEC)</p>
              <p>B.Tech. Electrical Engineering</p>
            </div>
            <div>
              <p className="font-bold font-pixel text-xl mb-1">💼 Botness Technologies Pvt. Ltd.</p>
              <p>Founder – Since 2024</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
