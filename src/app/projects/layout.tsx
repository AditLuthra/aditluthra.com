import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata: Metadata = {
  title: "Projects – Adit Luthra",
  description: "Explore Adit Luthra’s featured projects, from open-source software to custom hardware builds and creative experiments.",
  openGraph: {
    title: "Adit Luthra – Projects",
    description: "Browse Adit’s curated project list — full-stack, embedded, and experimental builds.",
    url: "https://aditluthra.com/projects",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-projects.png", // Optional image
        width: 1200,
        height: 630,
        alt: "Adit Luthra Project Gallery",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects – Adit Luthra",
    description: "Full-stack, embedded systems, 3D printed hardware, and more from Adit.",
    images: ["https://aditluthra.com/images/og-projects.png"],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable}`}>
      <body className="font-pixel bg-terminal-black text-terminal-green">
        <ThemeProvider>
          <ModeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
