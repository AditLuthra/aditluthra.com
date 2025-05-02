import "../styles/globals.css";
import { vt323 } from "../fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "../context/ThemeContext";
import ModeSwitch from "../components/ModeSwitch";

export const metadata: Metadata = {
  title: "CTRL + ALT + ADIT",
  description: "maker of weird things...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={vt323.variable}>
      <body className="font-pixel bg-terminal-black text-terminal-green">
        <ThemeProvider>
          <ModeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
