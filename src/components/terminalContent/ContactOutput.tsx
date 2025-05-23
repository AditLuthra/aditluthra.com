"use client";

import TerminalOutput from "../TerminalOutput";

export default function ContactOutput() {
  return (
    <TerminalOutput
      title="📬 Contact"
      lines={[
        "> ping adit@makrx.org",
        "",
        "✉️ Email: aditluthra0@gmail.com",
        "🔗 LinkedIn: linkedin.com/in/aditluthra",
        "🌐 Website: aditluthra.com",
        "",
        "You can also send ASCII art or memes. I appreciate those too.",
        "",
        "Use: mailto(aditluthra0@gmail.com) to open your mail client.",
      ]}
    />
  );
}
