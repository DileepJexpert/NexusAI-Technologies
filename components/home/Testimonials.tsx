"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { products } from "@/data/products";

const allTestimonials = products.flatMap((p) =>
  p.testimonials.map((t) => ({ ...t, product: p.name }))
);

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (allTestimonials.length === 0) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % allTestimonials.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  if (allTestimonials.length === 0) return null;

  const t = allTestimonials[index];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our users say"
          subtitle="Real stories from farmers, business owners and compliance professionals who use NexusAI every day."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border bg-card p-8 shadow-lg md:p-12"
            >
              <Quote className="absolute left-8 top-8 h-10 w-10 text-accent/20" />
              <div className="relative">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-lg text-foreground md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.occupation} · {t.location}
                    </div>
                  </div>
                  <div className="ml-auto hidden text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:block">
                    {t.product}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {allTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
