import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata: Metadata = {
  title: "Blog – Adit Luthra",
  description: "Thoughts, builds, breakdowns, and stories from Adit Luthra. Welcome to the mind of a weird maker.",
  openGraph: {
    title: "Blog – Adit Luthra",
    description: "Read about robotics, 3D printing, rapid prototyping, ideas, and experiments — direct from Adit’s head.",
    url: "https://aditluthra.com/blog",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-blog.png", // Add this image if you'd like
        width: 1200,
        height: 630,
        alt: "Blog – CTRL + ALT + ADIT",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Adit Luthra",
    description: "Dev logs, build diaries, and creative chaos from Adit Luthra.",
    images: ["https://aditluthra.com/images/og-blog.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
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
