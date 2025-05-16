import "../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata: Metadata = {
  title: "Boot Sequence — Hacker Mode | Adit Luthra",
  description: "Initializing hacker interface... Welcome to Adit Luthra's terminal world.",
  openGraph: {
    title: "Boot into Hacker Mode — Adit Luthra",
    description: "You're entering the pixelated mind of Adit Luthra. Hacker mode engaged.",
    url: "https://aditluthra.com/boot",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-boot.png", // Optional OG image
        width: 1200,
        height: 630,
        alt: "Hacker Boot Interface by Adit Luthra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booting into Hacker Mode | Adit Luthra",
    description: "Boot sequence initiated. Welcome to the terminal of Adit Luthra.",
    images: ["https://aditluthra.com/images/og-boot.png"],
  },
};

export default function BootLayout({ children }: { children: React.ReactNode }) {
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
