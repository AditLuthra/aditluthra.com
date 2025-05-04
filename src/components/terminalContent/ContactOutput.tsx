"use client";

import TerminalOutput from "../TerminalOutput";

export default function ContactOutput() {
  return (
    <TerminalOutput
      title="📬 Contact"
      lines={[
        "> ping adit@makrx.org",
        "",
        "✉️ Email: adit@makrx.org",
        "🔗 LinkedIn: linkedin.com/in/aditluthra",
        "🌐 Website: aditluthra.com",
        "",
        "You can also send ASCII art or memes. I appreciate those too.",
        "",
        "Use: mailto(adit@makrx.org) to open your mail client.",
      ]}
    />
  );
}
