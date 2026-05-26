import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Katixo News and Updates",
  description:
    "Verified Katixo product updates, accounting software notes and sourced business news for Indian MSME and small businesses.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Katixo News and Updates
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Verified product updates, accounting software notes and sourced business news. We publish only after checking the information.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Newspaper className="h-6 w-6" />
                  </div>
                  <h2 className="font-heading text-xl font-bold leading-tight group-hover:text-primary">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{p.excerpt}</p>
                  {p.date ? (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Newspaper className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">No published news yet</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                We are keeping this section reserved for real product announcements, sourced industry updates and verified accounting software guidance. No imaginary articles will be published here.
              </p>
              <div className="mt-7">
                <Button asChild>
                  <Link href="/contact">
                    Get updates from Katixo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
