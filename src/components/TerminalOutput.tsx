type TerminalOutputProps = {
  title?: string;
  lines: string[];
};

export default function TerminalOutput({ title, lines }: TerminalOutputProps) {
  return (
    <div className="font-pixel text-terminal-green">
      {title && <div className="text-terminal-neon mb-1">{title}</div>}
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">{line}</div>
      ))}
    </div>
  );
}
