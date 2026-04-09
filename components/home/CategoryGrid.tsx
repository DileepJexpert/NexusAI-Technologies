import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductsByCategory, sortByStatus } from "@/data/products";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { StatusBadge } from "@/components/shared/StatusBadge";

export function CategoryGrid() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The Platform"
          title="Six domains. Twelve assistants. One WhatsApp."
          subtitle="Every product we ship is built for an Indian domain — with workflows, compliance and language support tailored to it."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => {
            const prods = sortByStatus(getProductsByCategory(c.id));
            const count = prods.length;
            return (
              <AnimateOnScroll key={c.id} delay={idx * 0.05}>
                <Link
                  href={`/products/${c.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Accent bar */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: c.color }}
                  />

                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl"
                      style={{ backgroundColor: `${c.color}14` }}
                    >
                      {c.icon}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold tracking-tight">
                    {c.name}
                  </h3>
                  <div
                    className="mt-1 text-xs font-semibold uppercase tracking-[0.12em]"
                    style={{ color: c.color }}
                  >
                    {count} {count === 1 ? "Product" : "Products"}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>

                  {/* Mini product list */}
                  <div className="mt-5 flex-1 border-t pt-4">
                    <ul className="space-y-2">
                      {prods.slice(0, 3).map((p) => (
                        <li
                          key={p.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="flex items-center gap-2 text-foreground">
                            <span className="text-base">{p.icon}</span>
                            <span className="font-medium">{p.name}</span>
                          </span>
                          <StatusBadge status={p.status} />
                        </li>
                      ))}
                      {prods.length > 3 && (
                        <li className="pt-1 text-xs text-muted-foreground">
                          +{prods.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
