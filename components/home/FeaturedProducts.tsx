import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { getCategoryById } from "@/data/categories";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function FeaturedProducts() {
  const products = getFeaturedProducts();
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Live Now"
          title="Our live products"
          subtitle="These assistants are already helping thousands of Indians every day. Try one on WhatsApp right now."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => {
            const category = getCategoryById(p.category_id);
            return (
              <AnimateOnScroll key={p.id} delay={idx * 0.08}>
                <Link
                  href={`/products/${p.category_id}/${p.id}`}
                  className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl"
                      style={{ backgroundColor: `${p.color}15` }}
                    >
                      {p.icon}
                    </div>
                    <StatusBadge status={p.status} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  {category && (
                    <div className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                      {category.icon} {category.name}
                    </div>
                  )}
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary">
                    Try Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
