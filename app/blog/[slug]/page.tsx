import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { getAllPosts, getPostBySlug, renderMarkdown } from "@/lib/blog";
import { getCategoryById } from "@/data/categories";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cat = getCategoryById(post.category);
  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
  const html = await renderMarkdown(post.content);

  return (
    <>
      <section
        className="py-16 text-white md:py-20"
        style={{
          background: cat
            ? `linear-gradient(135deg, ${cat.color}, ${cat.color}99)`
            : "linear-gradient(135deg, #1B2A4A, #2E5090)",
        }}
      >
        <div className="container-wide max-w-3xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
          {cat && (
            <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {cat.icon} {cat.name}
            </div>
          )}
          <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-white/90">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-6 text-sm text-white/80">
            {post.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
            {post.author && <span>· {post.author}</span>}
          </div>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-wide max-w-3xl">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t section-padding bg-muted/30">
          <div className="container-wide max-w-5xl">
            <h2 className="font-heading text-2xl font-bold">Keep reading</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((r) => {
                const rcat = getCategoryById(r.category);
                return (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    {rcat && (
                      <div className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                        {rcat.icon} {rcat.name}
                      </div>
                    )}
                    <h3 className="mt-3 font-heading text-lg font-bold group-hover:text-primary">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {r.excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
