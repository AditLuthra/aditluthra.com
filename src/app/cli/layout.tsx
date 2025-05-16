import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata: Metadata = {
  title: "Adit Luthra — Terminal CLI",
  description: "Explore Adit Luthra's hacker-style portfolio through a fully interactive command-line interface.",
  openGraph: {
    title: "Adit Luthra — Terminal CLI",
    description: "Enter a pixel-perfect terminal to learn about Adit Luthra, a maker of weird things.",
    url: "https://aditluthra.com/cli",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-cli.png", // create or update as needed
        width: 1200,
        height: 630,
        alt: "Adit Luthra CLI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTRL + ALT + ADIT — CLI",
    description: "Type 'help' to start exploring Adit's world from a terminal.",
    images: ["https://aditluthra.com/images/og-cli.png"],
  },
};

export default function CliLayout({ children }: { children: React.ReactNode }) {
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
