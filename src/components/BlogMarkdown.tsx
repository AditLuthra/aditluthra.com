"use client";

import ReactMarkdown from "react-markdown";

export default function BlogMarkdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-sm">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
