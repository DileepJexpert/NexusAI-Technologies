import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function CategoryGrid() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="What We Build"
          title="AI tools for every Indian need"
          subtitle="Six product lines, twelve assistants, one mission: put AI into the hands of every Indian on WhatsApp."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => {
            const count = getProductsByCategory(c.id).length;
            return (
              <AnimateOnScroll key={c.id} delay={idx * 0.08}>
                <Link
                  href={`/products/${c.id}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderLeftColor: c.color, borderLeftWidth: 4 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{c.icon}</div>
                    <ArrowUpRight
                      className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold">
                    {c.name}
                  </h3>
                  <div
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: c.color }}
                  >
                    {count} {count === 1 ? "Product" : "Products"}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
