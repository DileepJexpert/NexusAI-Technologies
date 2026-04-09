import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { getCategoryById } from "@/data/categories";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, deep dives and product updates from the NexusAI team — covering Indian schemes, finance, compliance and AI for Bharat.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            The NexusAI Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Practical guides for farmers, businesses and curious Indians.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => {
              const cat = getCategoryById(p.category);
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="aspect-[16/9] w-full"
                    style={{
                      background: cat
                        ? `linear-gradient(135deg, ${cat.color}, ${cat.color}80)`
                        : "linear-gradient(135deg, #1B2A4A, #2E5090)",
                    }}
                  >
                    <div className="flex h-full items-center justify-center text-6xl">
                      {cat?.icon ?? "📝"}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {cat && (
                      <div className="inline-flex w-fit items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                        {cat.icon} {cat.name}
                      </div>
                    )}
                    <h2 className="mt-3 font-heading text-xl font-bold leading-tight group-hover:text-primary">
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      {p.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(p.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {p.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {posts.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No posts yet. Check back soon!
            </div>
          )}
        </div>
      </section>
    </>
  );
}
