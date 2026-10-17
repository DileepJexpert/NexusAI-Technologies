import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Pill, Stethoscope, Store, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Reference Workflows",
  description:
    "Explore practical Katixo workflow examples for kirana stores, medical shops, distributors and hospitals.",
};

const workflows = [
  {
    sector: "Kirana and retail",
    product: "Katixo Books ERP",
    title: "A two-counter store closes the day without a parallel notebook.",
    body:
      "Counter billing, customer balances, day-end cash view and stock movement live in one workflow, so the owner can review the business without rebuilding the day in a register.",
    icon: Store,
    tone: "emerald",
    points: ["Counter billing", "Customer balances", "Day-end cash review"],
    metrics: ["Closing time", "Manual register usage", "GST-ready invoices"],
  },
  {
    sector: "Medical shop",
    product: "Katixo Books ERP",
    title: "A pharmacy tracks batch stock and expiry from purchase to sale.",
    body:
      "Purchase bills create batch-level stock, expiry reminders surface risk early, and counter invoices stay GST-ready without separate spreadsheet tracking.",
    icon: Pill,
    tone: "orange",
    points: ["Batch-aware stock", "Expiry attention", "Purchase entry"],
    metrics: ["Expiry write-offs", "Low-stock alerts", "Purchase entry speed"],
  },
  {
    sector: "Distribution",
    product: "Katixo Books ERP",
    title: "A distributor makes receivables visible before calls begin.",
    body:
      "Customer ledgers, receivables aging, payment matching and follow-up queues help the team decide who to call and why.",
    icon: Truck,
    tone: "blue",
    points: ["Receivables aging", "Bank matching", "Payment follow-up"],
    metrics: ["Overdue amount", "Collection cycle", "Matched payments"],
  },
  {
    sector: "Hospital",
    product: "Katixo Hospital OS",
    title: "A clinic connects front desk, pharmacy and billing data.",
    body:
      "OPD registration, patient records, pharmacy dispensing and billing share the same operating view, reducing duplicate entry between departments.",
    icon: Stethoscope,
    tone: "violet",
    points: ["OPD registration", "Pharmacy stock", "Patient billing"],
    metrics: ["Queue time", "Duplicate entries", "Billing handoffs"],
  },
];

const toneClasses: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  orange: "bg-orange-50 text-orange-700 ring-orange-100",
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  violet: "bg-violet-50 text-violet-700 ring-violet-100",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fafc] py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-50 via-blue-50/60 to-transparent"
        />
        <div className="container-wide relative">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Reference workflows
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            See how real operating workflows fit into {brand.name}.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            These are practical implementation examples, not claimed customer case
            studies. They show the workflows we can map in a demo for retail,
            pharmacy, distribution and healthcare teams.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2">
            {workflows.map((workflow) => {
              const Icon = workflow.icon;

              return (
                <article
                  key={workflow.sector}
                  className="rounded-3xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${toneClasses[workflow.tone]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border bg-background px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      {workflow.product}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                    {workflow.sector}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-slate-950 dark:text-white">
                    {workflow.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{workflow.body}</p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        Workflow includes
                      </h3>
                      <div className="mt-3 space-y-2">
                        {workflow.points.map((point) => (
                          <div key={point} className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        Metrics to validate
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {workflow.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/10 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Bring your workflow
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight md:text-4xl">
                  We can map your first operating flow in a demo.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  Tell us the business type, daily volume and the first pain point.
                  We will show the Katixo workflow that fits.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact">
                    Book a demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="whiteOutline">
                  <Link href="/products">View products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
