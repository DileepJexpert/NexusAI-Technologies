import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductsByCategory, sortByStatus } from "@/data/products";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function CategorySpotlight() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Flagship Products"
          title="Meet the flagship from every domain"
          subtitle="Pick a domain to see its flagship assistant — or explore the full category."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => {
            const prods = sortByStatus(getProductsByCategory(c.id));
            const flagship = prods[0];
            if (!flagship) return null;
            return (
              <AnimateOnScroll key={c.id} delay={idx * 0.05}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  {/* Domain header strip */}
                  <div
                    className="flex items-center justify-between px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em]"
                    style={{
                      backgroundColor: `${c.color}10`,
                      color: c.color,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{c.icon}</span>
                      {c.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {prods.length} {prods.length === 1 ? "product" : "products"}
                    </span>
                  </div>

                  {/* Flagship */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                          style={{ backgroundColor: `${c.color}15` }}
                        >
                          {flagship.icon}
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-bold tracking-tight">
                            {flagship.name}
                          </h3>
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Flagship
                          </div>
                        </div>
                      </div>
                      <StatusBadge status={flagship.status} />
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {flagship.tagline}
                    </p>

                    <div className="mt-auto flex items-center gap-3 pt-6">
                      <Link
                        href={`/products/${c.id}/${flagship.id}`}
                        className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Product details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="text-muted-foreground">·</span>
                      <Link
                        href={`/products/${c.id}`}
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground"
                      >
                        View domain
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border bg-background px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            See all 12 products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
