import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing across Katixo products, plans and service layers.",
};

const billingFaq = [
  {
    question: "Can I try for free?",
    answer: "Yes, several products have a free or entry-level starting point.",
  },
  {
    question: "How do I pay?",
    answer: "We support standard digital payment and invoicing options depending on the product or engagement.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Subscription-style products do not require long lock-in periods by default.",
  },
  {
    question: "Do I need to download an app?",
    answer: "No. Many Katixo products are delivered through lightweight messaging and web-first experiences.",
  },
];

export default function PricingPage() {
  const productsWithPricing = products.filter((p) => p.pricing.length > 0);

  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Clear pricing, flexible adoption
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Start small, expand when the workflow proves itself, and keep your costs aligned with value.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-20">
          {productsWithPricing.map((p) => (
            <div key={p.id}>
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ backgroundColor: `${p.color}15` }}
                >
                  {p.icon}
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold">{p.name}</h2>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                </div>
              </div>

              <div
                className={`mt-8 grid gap-6 ${
                  p.pricing.length === 1
                    ? "max-w-md"
                    : p.pricing.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-3"
                }`}
              >
                {p.pricing.map((tier) => (
                  <div
                    key={tier.name}
                    className={`flex flex-col rounded-2xl border bg-card p-8 shadow-sm ${
                      tier.highlighted ? "ring-2 ring-primary" : ""
                    }`}
                  >
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
                    <Button variant={tier.highlighted ? "default" : "outline"} className="mt-8 w-full" asChild>
                      <a href={p.whatsapp_link} target="_blank" rel="noopener noreferrer">
                        {tier.cta}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-sm">
                <Link href={`/products/${p.category_id}/${p.id}`} className="font-semibold text-primary hover:underline">
                  Learn more about {p.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading title="Billing questions" />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible>
              {billingFaq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
