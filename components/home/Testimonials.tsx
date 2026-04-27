import { Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { products } from "@/data/products";

const ACCENT_COLORS = [
  "#16A34A", "#2563EB", "#7C3AED",
  "#DC2626", "#EA580C", "#0D9488",
];

const allTestimonials = products
  .flatMap((p) =>
    p.testimonials.map((t) => ({
      ...t,
      product: p.name,
      productId: p.id,
    }))
  )
  .slice(0, 6);

export function Testimonials() {
  if (allTestimonials.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our users say"
          subtitle="Real stories from farmers, business owners and compliance professionals who use NexusAI every day."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allTestimonials.map((t, idx) => {
            const color = ACCENT_COLORS[idx % ACCENT_COLORS.length];
            const initials = t.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <AnimateOnScroll key={idx} delay={idx * 0.07}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: color }}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Product tag */}
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]"
                        style={{ backgroundColor: `${color}15`, color }}
                      >
                        {t.product}
                      </span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="flex-1 text-sm leading-relaxed text-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="mt-5 flex items-center gap-3 border-t pt-4">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold text-white"
                        style={{ backgroundColor: color }}
                      >
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">
                          {t.name}
                        </div>
                        <div className="truncate text-xs text-muted-foreground">
                          {t.occupation} · {t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
