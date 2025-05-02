import { getPostBySlug } from "../../../lib/markdown";
import BlogMarkdown from "../../../components/BlogMarkdown";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(dir);
  return files.map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return <div className="p-8 text-terminal-green font-pixel">Post not found.</div>;

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green p-6 font-pixel">
      <h1 className="text-xl mb-4">{post.title}</h1>
      <BlogMarkdown content={post.content} />
    </div>
  );
}
