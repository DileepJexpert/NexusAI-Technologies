import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, MessageCircle, Play, Star } from "lucide-react";
import {
  products as allProducts,
  getProductById,
  getProductsByCategory,
} from "@/data/products";
import { getCategoryById } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VideoPlayer } from "@/components/products/VideoPlayer";
import { ProductCard } from "@/components/products/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Params {
  params: Promise<{ category: string; product: string }>;
}

export function generateStaticParams() {
  return allProducts.map((p) => ({
    category: p.category_id,
    product: p.id,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { product } = await params;
  const p = getProductById(product);
  if (!p) return { title: "Product not found" };
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.description,
    openGraph: {
      title: `${p.name} — ${p.tagline}`,
      description: p.description,
    },
  };
}

export default async function ProductDetailPage({ params }: Params) {
  const { category, product } = await params;
  const p = getProductById(product);
  const cat = getCategoryById(category);
  if (!p || !cat || p.category_id !== category) notFound();

  const related = getProductsByCategory(category).filter((r) => r.id !== p.id);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background: `linear-gradient(135deg, ${p.color}10 0%, ${p.color}05 100%)`,
        }}
      >
        <div className="container-wide">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-foreground">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/products/${cat.id}`} className="hover:text-foreground">
              {cat.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{p.name}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl"
                  style={{ backgroundColor: `${p.color}20` }}
                >
                  {p.icon}
                </div>
                <StatusBadge status={p.status} />
              </div>
              <h1
                className="mt-6 font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance"
                style={{ color: p.color }}
              >
                {p.name}
              </h1>
              <p className="mt-3 text-xl font-semibold text-foreground">{p.tagline}</p>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                {p.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="accent" size="lg" asChild>
                  <a href={p.whatsapp_link} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    {p.status === "live" ? "Try on WhatsApp" : "Notify Me"}
                  </a>
                </Button>
                {p.youtube_video_id && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={`#video`}>
                      <Play className="h-5 w-5" /> Watch Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-square rounded-3xl shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${p.color}, ${p.color}80)`,
                }}
              >
                <div className="flex h-full items-center justify-center text-9xl">
                  {p.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      {p.youtube_video_id && (
        <section id="video" className="section-padding">
          <div className="container-wide">
            <SectionHeading title={`Watch ${p.name} in action`} />
            <div className="mx-auto mt-12 max-w-4xl">
              <VideoPlayer videoId={p.youtube_video_id} title={p.name} />
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need"
            subtitle={`${p.name} packs the features that actually matter to you.`}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      {p.usecases.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Use Cases"
              title="Real-world impact"
              subtitle={`How people are already using ${p.name} today.`}
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.usecases.map((u) => (
                <div
                  key={u.title}
                  className="rounded-xl border bg-card p-6 shadow-sm"
                  style={{ borderLeftColor: p.color, borderLeftWidth: 4 }}
                >
                  <h3 className="font-heading text-lg font-bold">{u.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {u.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {p.pricing.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, transparent pricing"
              subtitle="All plans include Hindi voice support and WhatsApp delivery."
            />
            <div
              className={`mx-auto mt-14 grid gap-6 ${
                p.pricing.length === 1
                  ? "max-w-md"
                  : p.pricing.length === 2
                  ? "max-w-3xl md:grid-cols-2"
                  : "max-w-5xl md:grid-cols-3"
              }`}
            >
              {p.pricing.map((tier) => (
                <div
                  key={tier.name}
                  className={`flex flex-col rounded-2xl border bg-card p-8 shadow-sm ${
                    tier.highlighted
                      ? "relative ring-2 ring-primary md:scale-105"
                      : ""
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Recommended
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-bold">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-extrabold">
                      {tier.price}
                    </span>
                    {tier.priceDetail && (
                      <span className="text-sm text-muted-foreground">
                        {tier.priceDetail}
                      </span>
                    )}
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.highlighted ? "default" : "outline"}
                    className="mt-8 w-full"
                    asChild
                  >
                    <a
                      href={p.whatsapp_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.cta}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {p.testimonials.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Testimonials"
              title="What users say"
            />
            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border bg-card p-6 shadow-sm"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 border-t pt-4">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.occupation} · {t.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {p.faq.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
            />
            <div className="mx-auto mt-10 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {p.faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{f.question}</AccordionTrigger>
                    <AccordionContent>{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeading title={`More in ${cat.name}`} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProductCard key={r.id} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div
            className="relative overflow-hidden rounded-3xl p-10 text-center text-white md:p-16"
            style={{
              background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
            }}
          >
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Start using {p.name} for free
            </h2>
            <p className="mt-4 text-white/90">No app download needed.</p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href={p.whatsapp_link} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Open WhatsApp <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
