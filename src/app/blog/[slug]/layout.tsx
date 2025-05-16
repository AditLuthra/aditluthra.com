import "../../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
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
