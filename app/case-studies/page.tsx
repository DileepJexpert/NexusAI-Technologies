import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `See how Indian MSMEs use ${brand.name} to streamline billing, GST compliance, inventory management, and vendor tracking across retail, wholesale, grocery, and manufacturing.`,
};

const stats = [
  { value: "₹15+ Cr", label: "Revenue managed" },
  { value: "4", label: "Industries" },
  { value: "60%", label: "Avg time saved" },
  { value: "500+", label: "Invoices/month" },
];

const caseStudies = [
  {
    company: "Sharma Medical Store",
    location: "Jaipur, Rajasthan",
    industry: "Pharmacy & Healthcare",
    revenue: "₹2.5 Cr/year",
    quote:
      "We used to lose nearly ₹2 lakh every year to expired stock that slipped through the cracks. With Katixo, every batch is tracked from purchase to sale — nothing expires unnoticed anymore.",
    owner: "Ramesh Sharma, Owner",
    description:
      "A pharmacy chain with 3 outlets across Jaipur, Sharma Medical Store deals with thousands of SKUs including scheduled drugs, OTC medicines, and surgical items. Manual batch tracking on paper registers meant expired stock was regularly discovered only during audits.",
    challenge:
      "Manual batch tracking across 3 outlets led to expired stock losses of ₹1.5–2 lakh annually. Billing was slow during peak hours, causing long customer queues.",
    solution:
      "Katixo POS with the batch tracking and expiry alerts module. Automated near-expiry notifications 30/60/90 days before expiry. Barcode-based billing at all counters.",
    metrics: [
      { label: "Billing time", before: "3–4 min/invoice", after: "Under 90 sec" },
      { label: "Expired stock loss", before: "₹1.5–2L/year", after: "Under ₹15K/year" },
      { label: "Monthly invoices", before: "~400", after: "600+" },
    ],
  },
  {
    company: "Priya Textiles",
    location: "Surat, Gujarat",
    industry: "Textile & Wholesale",
    revenue: "₹8 Cr/year",
    quote:
      "Filing GSTR-1 used to take our accountant an entire week. Now the data is ready in minutes because Katixo auto-classifies HSN codes as we create invoices. Our CA was genuinely surprised.",
    owner: "Meena Patel, Managing Partner",
    description:
      "Priya Textiles is a wholesale fabric distributor managing 5,000+ SKUs across silk, cotton, and synthetic categories. With hundreds of invoices monthly to retailers across Gujarat and Maharashtra, GST compliance was a constant headache.",
    challenge:
      "Frequent HSN code misclassification on invoices led to GST notice risks. Preparing GSTR-1 data manually from tally exports took 5–7 days each month.",
    solution:
      "Katixo GST module with automatic HSN code classification based on product category. One-click GSTR-1 JSON export. Integrated invoice-level tax breakdowns.",
    metrics: [
      { label: "GSTR-1 prep time", before: "5–7 days", after: "Under 30 min" },
      { label: "HSN errors", before: "8–12/month", after: "0" },
      { label: "CA review time", before: "2 days", after: "2 hours" },
    ],
  },
  {
    company: "FreshBasket Grocers",
    location: "Bengaluru, Karnataka",
    industry: "Grocery & Retail",
    revenue: "₹1.2 Cr/year",
    quote:
      "We were throwing away vegetables and dairy worth ₹40,000 every month. The near-expiry alerts and reorder suggestions from Katixo cut that waste almost in half within the first quarter.",
    owner: "Anil Kumar, Founder",
    description:
      "FreshBasket operates 2 neighbourhood grocery stores in Bengaluru stocking fresh produce, dairy, packaged foods, and household essentials. With perishable inventory making up over 40% of stock, waste from overordering and missed expiry dates was eating into already thin margins.",
    challenge:
      "Perishable goods worth ₹40K/month were being wasted due to overordering and missed shelf-life windows. No visibility into real-time stock levels across both stores.",
    solution:
      "Katixo inventory management with near-expiry alerts, store-wise stock dashboards, and smart reorder suggestions based on sales velocity and shelf life.",
    metrics: [
      { label: "Monthly waste", before: "₹40K", after: "₹18K" },
      { label: "Stockout incidents", before: "15–20/month", after: "3–5/month" },
      { label: "Reorder accuracy", before: "~60%", after: "90%+" },
    ],
  },
  {
    company: "Gupta Engineering Works",
    location: "Ludhiana, Punjab",
    industry: "Manufacturing",
    revenue: "₹4 Cr/year",
    quote:
      "Tracking 200+ vendor bills on spreadsheets was a nightmare — we missed payment terms, lost purchase return records, and overpaid twice on the same invoice. Katixo brought everything into one place.",
    owner: "Vikram Gupta, Director",
    description:
      "Gupta Engineering Works manufactures precision auto parts and sources raw materials from over 200 vendors across Punjab and Haryana. Managing purchase bills, tracking payment terms, and handling purchase returns was done across spreadsheets, WhatsApp, and paper files.",
    challenge:
      "No centralised system for 200+ vendor bills. Missed early-payment discounts and duplicate payments. Purchase return tracking was entirely manual with no audit trail.",
    solution:
      "Katixo purchase bills module with vendor ledger, payment due tracking, and purchase return management. Automated reminders for upcoming payment deadlines.",
    metrics: [
      { label: "Bill processing time", before: "45 min/day", after: "10 min/day" },
      { label: "Missed discounts", before: "₹80K/year", after: "Under ₹5K/year" },
      { label: "Duplicate payments", before: "3–4/quarter", after: "0" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl text-balance">
            Real businesses. Real results.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            See how Indian MSMEs use {brand.name} to save time, reduce errors, and run
            their operations with confidence.
          </p>
        </div>
      </section>

      {/* Aggregate stats banner */}
      <section className="border-b bg-muted/40 py-10">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Case Studies"
            title="Stories from the counter and the shop floor"
            subtitle={`From pharmacies in Jaipur to factories in Ludhiana, ${brand.name} helps MSMEs across India work faster and smarter.`}
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <article
                key={cs.company}
                className="flex flex-col rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Card header */}
                <div className="border-b p-6 pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-xl font-bold">{cs.company}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{cs.location}</p>
                    </div>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {cs.industry}
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-medium text-primary">
                    Revenue: {cs.revenue}
                  </div>
                </div>

                {/* Quote */}
                <div className="border-b px-6 py-5">
                  <blockquote className="text-sm italic text-muted-foreground">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                  <p className="mt-2 text-xs font-semibold">{cs.owner}</p>
                </div>

                {/* Description, challenge, solution */}
                <div className="flex-1 space-y-4 px-6 py-5">
                  <p className="text-sm text-muted-foreground">{cs.description}</p>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Challenge
                    </h4>
                    <p className="mt-1 text-sm">{cs.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Solution
                    </h4>
                    <p className="mt-1 text-sm">{cs.solution}</p>
                  </div>
                </div>

                {/* Metrics table */}
                <div className="mt-auto border-t px-6 py-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Metrics
                  </h4>
                  <div className="space-y-2">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="font-medium">{m.label}</span>
                        <div className="flex items-center gap-2 text-right">
                          <span className="text-muted-foreground line-through">
                            {m.before}
                          </span>
                          <span className="font-semibold text-green-600">{m.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold">
            Ready to write your own success story?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            Join thousands of Indian businesses that trust {brand.name} for billing,
            accounting, and inventory management.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
