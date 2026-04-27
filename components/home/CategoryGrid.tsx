"use client";

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
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7 shadow-sm transition-all duration-300"
                  style={
                    {
                      "--category-color": c.color,
                      transition:
                        "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = c.color + "60";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${c.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-transform duration-500 group-hover:rotate-6"
                      style={{ backgroundColor: `${c.color}14` }}
                    >
                      {c.icon}
                    </div>
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300"
                      style={{ borderColor: `${c.color}40` }}
                    >
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        style={{ color: c.color }}
                      />
                    </div>
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
