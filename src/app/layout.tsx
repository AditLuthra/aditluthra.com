import type { Metadata } from "next";
import "../styles/globals.css";

import { vt323, inter } from "../fonts";
import { ThemeProvider } from "@/context/ThemeContext";
import VercelAnalyticsWrapper from "@/components/VercelAnalyticsWrapper";

export const metadata: Metadata = {
  title: "CTRL + ALT + ADIT — Adit Luthra",
  description: "Entry point to the mind of Adit Luthra — maker of weird things, thinker of strange thoughts.",
  openGraph: {
    title: "CTRL + ALT + ADIT — Adit Luthra",
    description: "Choose your path. Are you a Normal Human or a Hacker? Explore Adit's creative terminal world.",
    url: "https://aditluthra.com",
    siteName: "CTRL + ALT + ADIT",
    images: [
      {
        url: "https://aditluthra.com/images/og-entry.png",
        width: 1200,
        height: 630,
        alt: "CTRL + ALT + ADIT by Adit Luthra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTRL + ALT + ADIT — Adit Luthra",
    description: "Explore the pixel-perfect terminal site of Adit Luthra — maker of weird things.",
    images: ["https://aditluthra.com/images/og-entry.png"],
    creator: "@aditluthra",
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#00FF41",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable}`}>
      <body className="font-pixel bg-terminal-black text-terminal-green">
        <ThemeProvider>{children}</ThemeProvider>
        <VercelAnalyticsWrapper />
      </body>
    </html>
  );
}
