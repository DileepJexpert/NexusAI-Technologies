import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  FileText,
  Landmark,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const trustSegments = [
  "Kirana stores",
  "Medical shops",
  "Distributors",
  "Retail counters",
  "MSME finance teams",
  "Hospital billing desks",
];

const automationItems = [
  "GST invoices",
  "Inventory sync",
  "Bank matching",
  "Purchase bills",
  "Payment follow-up",
  "Expense capture",
  "Stock alerts",
  "Cash reports",
  "Receivables aging",
  "Duplicate checks",
  "Approval flows",
  "TDS reminders",
];

const productCards = [
  {
    icon: ReceiptText,
    title: "Accounting POS",
    text: "Fast GST billing, item masters, customer balances and day-end reports for busy counters.",
    href: "/accounting-pos-software",
  },
  {
    icon: PackageCheck,
    title: "Inventory Control",
    text: "Track stock, batches, purchase bills and mismatch checks before they become accounting errors.",
    href: "/integrations",
  },
  {
    icon: Landmark,
    title: "Finance Operations",
    text: "Receivables, payables, bank reconciliation and owner dashboards in one clean workspace.",
    href: "/docs",
  },
  {
    icon: ShieldCheck,
    title: "GST Readiness",
    text: "Practical workflows for GST invoices, tax review, returns preparation and audit-friendly records.",
    href: "/gst-guides",
  },
];

const aiFeatures = [
  {
    title: "Let Katixo watch the routine work.",
    text: "Surface unpaid invoices, mismatched payments, low-stock items and GST exceptions without waiting for month-end.",
  },
  {
    title: "Review what needs attention.",
    text: "Owners and accountants get focused queues instead of searching through every bill, ledger and spreadsheet.",
  },
  {
    title: "Keep the team lean as volume grows.",
    text: "The same workflow can support more billing counters, more products and more branches without chaos.",
  },
];

const complexityBlocks = [
  {
    icon: Store,
    title: "Built for daily counters",
    text: "Designed around quick billing, practical shortcuts and clear records for small business operators.",
  },
  {
    icon: FileText,
    title: "Audit-friendly records",
    text: "Keep invoices, purchases, payments and GST details structured enough for accountant review.",
  },
  {
    icon: BarChart3,
    title: "Owner dashboards",
    text: "Understand sales, stock, collections and cash position without waiting for manual reports.",
  },
];

export function PlatformShowcase() {
  return (
    <>
      <section className="border-y bg-white py-8">
        <div className="container-wide">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Built for Indian business operators
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {trustSegments.map((segment) => (
              <div
                key={segment}
                className="rounded-lg border bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
              >
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#07111f] py-14 text-white">
        <div className="container-wide">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            The top finance teams use Katixo for
          </h2>
        </div>
        <div className="marquee-track mt-10">
          <div className="marquee-inner gap-3 pr-3">
            {[...automationItems, ...automationItems, ...automationItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Explore Katixo
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                One workspace for billing, books, stock and control.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Katixo brings the daily operating layer of a business into the same place: POS billing, GST records, inventory movement, payment tracking and finance review.
              </p>
              <div className="mt-8">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/contact">
                    Book a demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {productCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-950 group-hover:text-emerald-700">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border bg-white p-5 shadow-xl">
            <div className="rounded-md bg-[#07111f] p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">AI review queue</p>
                  <h3 className="text-2xl font-bold">Exceptions to review</h3>
                </div>
                <Bot className="h-7 w-7 text-emerald-400" />
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["Payment matched", "Invoice KX-1042", "Rs 18,450"],
                  ["Low stock alert", "Paracetamol 500mg", "18 units"],
                  ["GST rate check", "Service invoice", "Needs review"],
                  ["Duplicate expense", "Courier charge", "Possible duplicate"],
                ].map(([label, detail, value]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold">{label}</p>
                        <p className="mt-1 text-xs text-slate-400">{detail}</p>
                      </div>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              AI-native finance control
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
              Automate the work that slows teams down.
            </h2>
            <div className="mt-8 space-y-6">
              {aiFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="font-bold text-slate-950">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Ready for operational complexity
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl">
                Simple at the counter. Structured for the accountant.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {complexityBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <article key={block.title} className="rounded-lg border bg-slate-50 p-6">
                    <Icon className="h-6 w-6 text-emerald-700" />
                    <h3 className="mt-4 font-bold text-slate-950">{block.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{block.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] py-16 text-white">
        <div className="container-wide grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              See what your team can do with Katixo
            </div>
            <h2 className="text-3xl font-bold md:text-5xl">
              Close daily sales, stock and books with less manual chasing.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">
                Get a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="whiteOutline" size="lg" asChild>
              <Link href="/docs">View API docs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
