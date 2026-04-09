import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author?: string;
  image?: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const full = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(full);
    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || "",
      category: data.category || "general",
      readTime: estimateReadTime(content),
      author: data.author,
      image: data.image,
      content,
    } as BlogPost;
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export async function renderMarkdown(content: string): Promise<string> {
  const processed = await remark().use(remarkHtml).process(content);
  return processed.toString();
}
