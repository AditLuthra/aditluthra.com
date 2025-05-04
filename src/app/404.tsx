export default function NotFound() {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green font-pixel flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl mb-4 text-terminal-neon">🚫 404 ERROR</h1>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
        {`System Message: Requested page not found in this reality.
  Possible causes:
    - You typed something weird (respect).
    - This file exists only in your imagination.
    - A wormhole ate the page.
  
  > Suggestion: Navigate back using real commands like:
    $ home
    $ projects
    $ blog
  
  Or just click here to escape:
  `}
      </pre>
      <a
        href="/home"
        className="mt-4 text-sm underline text-orange-400 hover:text-terminal-neon"
      >
        Return to Terminal
      </a>
    </div>
  );
}
