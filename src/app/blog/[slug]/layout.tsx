import "../../../styles/globals.css";
import { vt323, inter } from "@/fonts";
import { ThemeProvider } from "@/context/ThemeContext";
import ModeSwitch from "@/components/ModeSwitch";
import FriendlyNav from "@/components/FriendlyNav"; // ✅ Add this

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${vt323.variable} ${inter.variable}`}>
      <body className="font-pixel bg-terminal-black text-terminal-green">
        <ThemeProvider>
          <ModeSwitch />
          <FriendlyNav /> {/* ✅ Inject navbar here */}
          <main className="pt-28">{children}</main> {/* Add top padding so content doesn't overlap */}
        </ThemeProvider>
      </body>
    </html>
  );
}

