import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Katixo is an India-first software company building focused products for accounting, billing, healthcare and operational workflows.",
};

const principles = [
  {
    title: "Focused, not sprawling",
    description:
      "Every product starts with one daily job: a billing counter, a compliance desk, a stock room or a hospital floor.",
    icon: Target,
    tone: "emerald",
  },
  {
    title: "India-first by design",
    description:
      "GST, WhatsApp, retail counters, distributor payments and healthcare queues shape the product from day one.",
    icon: MapPin,
    tone: "blue",
  },
  {
    title: "AI where it earns its place",
    description:
      "AI is used to review exceptions, match payments and flag risks, so teams review the few items that matter.",
    icon: Sparkles,
    tone: "orange",
  },
];

const operatingSteps = [
  {
    title: "Start where the pain is daily",
    description:
      "We begin with a workflow that someone touches every day: billing, stock entry, reconciliation, OPD queues or payment follow-up.",
  },
  {
    title: "Operate what we build",
    description:
      "Products are run as live services with docs, onboarding paths and support, not as shelfware licences.",
  },
  {
    title: "Expand into platforms",
    description:
      "Focused tools grow into two flagship platforms: Books ERP for business finance and Hospital OS for healthcare operations.",
  },
];

const facts = [
  { value: "2026", label: "Started in Noida" },
  { value: "2", label: "Flagship platforms" },
  { value: "India", label: "Primary operating market" },
  { value: "ERP", label: "Core product direction" },
];

const toneClasses: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  orange: "bg-orange-50 text-orange-700 ring-orange-100",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fafc] py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-emerald-50 via-blue-50/60 to-transparent"
        />
        <div className="container-wide relative">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              About {brand.name}
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              One company. Focused products. Built for India.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {brand.name} builds and operates practical software for the businesses that
              run India, from a kirana counter and distributor godown to a clinic,
              pharmacy or multi-branch hospital. We start with one workflow, make it
              dependable, then expand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/products">
                  Explore products <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Book a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-2xl border bg-card p-7 shadow-sm">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${toneClasses[item.tone]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid overflow-hidden rounded-3xl border bg-slate-950 text-white shadow-2xl shadow-slate-950/10 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="border-white/10 p-7 md:border-r md:last:border-r-0">
                <div className="font-heading text-4xl font-extrabold tracking-tight text-emerald-300">
                  {fact.value}
                </div>
                <p className="mt-2 text-sm text-slate-300">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              How we work
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              Ship one workflow. Operate it. Expand.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The company is organized around practical workflows first, then reusable
              systems that can support more products over time.
            </p>
          </div>

          <div className="rounded-3xl border bg-background p-6 shadow-sm">
            {operatingSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 border-b py-5 last:border-b-0 sm:grid-cols-[48px_1fr]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-sm font-extrabold text-emerald-700 ring-1 ring-emerald-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Books ERP",
                text: "Accounting, GST billing, POS, inventory and owner dashboards for Indian businesses.",
                icon: Workflow,
              },
              {
                title: "Hospital OS",
                text: "OPD, IPD, pharmacy, lab, OT and billing workflows for clinics and hospitals.",
                icon: Building2,
              },
              {
                title: "Operating discipline",
                text: "Clear products, practical docs, direct demos and support that maps to real business workflows.",
                icon: CheckCircle2,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-2xl border bg-card p-7">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-heading text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
