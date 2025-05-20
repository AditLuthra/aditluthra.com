"use client";

import ReactMarkdown from "react-markdown";

export default function BlogMarkdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-white">
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <img
              {...props}
              alt={props.alt || ""}
              className="my-6 mx-auto max-w-full rounded-lg shadow-md border border-terminal-green"
            />
          ),
          p: ({ node, children }) => (
            <p className="mb-4 leading-relaxed">{children}</p>
          ),
          h2: ({ node, children }) => (
            <h2 className="mt-8 mb-4 text-2xl font-bold text-terminal-neon">
              {children}
            </h2>
          ),
          h3: ({ node, children }) => (
            <h3 className="mt-6 mb-3 text-xl font-semibold text-terminal-yellow">
              {children}
            </h3>
          ),
          em: ({ node, children }) => (
            <div className="text-center text-base italic text-terminal-gray mt-1">
              {children}
            </div>
          ),
          ul: ({ node, children }) => (
            <ul className="list-disc list-inside text-terminal-green mb-4">
              {children}
            </ul>
          ),
          li: ({ node, children }) => (
            <li className="mb-1">{children}</li>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
