import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Landmark,
  Leaf,
  PackageCheck,
  ReceiptText,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products and Portfolio",
  description:
    "Explore Katixo Books ERP, Katixo Hospital OS and focused software workflows for Indian businesses.",
  alternates: {
    canonical: "/products",
  },
};

const flagshipProducts = [
  {
    title: "Katixo Books ERP",
    badge: "Live flagship",
    description:
      "The daily finance operating layer for Indian businesses: GST billing, POS, inventory, bank reconciliation and owner dashboards in one focused workspace.",
    href: "/accounting-pos-software",
    cta: "See Books ERP",
    tone: "dark",
    icon: ReceiptText,
    features: [
      "GST billing and returns",
      "POS counter mode",
      "Batch-aware inventory",
      "Bank reconciliation",
      "Receivables and payables",
      "AI exception queue",
    ],
  },
  {
    title: "Katixo Hospital OS",
    badge: "Early access flagship",
    description:
      "A complete operating system for hospitals and clinics: OPD, IPD, laboratory, pharmacy, billing and multi-branch operational control.",
    href: "/products/health/katixo-hospital-os",
    cta: "See Hospital OS",
    tone: "light",
    icon: Stethoscope,
    features: [
      "OPD and IPD workflows",
      "Lab and OT operations",
      "Pharmacy billing",
      "Bed occupancy tracking",
      "Patient queue visibility",
      "Healthcare finance reports",
    ],
  },
];

const productGroups = [
  {
    title: "Finance and business",
    description: "Focused tools for billing, compliance, credit and MSME operations.",
    icon: Landmark,
    products: [
      { name: "Books ERP", status: "Flagship", text: "GST billing, POS and finance control.", href: "/accounting-pos-software" },
      { name: "NiyamMitra", status: "Live", text: "Bank compliance and audit workflow assistant.", href: "/products/finance/niyammitra" },
      { name: "LoanSathi", status: "Pipeline", text: "Loan discovery and eligibility support.", href: "/products/finance/loansathi" },
      { name: "KhataBook AI", status: "Pipeline", text: "Small business bookkeeping assistant.", href: "/products/finance/khatabook-ai" },
    ],
  },
  {
    title: "Healthcare",
    description: "Software for clinics, hospitals, pharmacies and rural health access.",
    icon: Stethoscope,
    products: [
      { name: "Hospital OS", status: "Early access", text: "Hospital operations from front desk to billing.", href: "/products/health/katixo-hospital-os" },
      { name: "Pharmacy workflows", status: "Module", text: "Batch stock, expiry alerts and billing.", href: "/docs/hospital/pharmacy" },
      { name: "GraminVaidya", status: "Pipeline", text: "Rural health guidance and reminders.", href: "/products/health/graminvaidya" },
    ],
  },
  {
    title: "Agriculture and dairy",
    description: "Practical software ideas for farmers, markets and livestock workflows.",
    icon: Leaf,
    products: [
      { name: "KisanMitra", status: "Live", text: "Government scheme and farmer support assistant.", href: "/products/agriculture/kisanmitra" },
      { name: "MandiMitra", status: "Pipeline", text: "Mandi price intelligence and crop market support.", href: "/products/agriculture/mandimitra" },
      { name: "PashuSeva", status: "Pipeline", text: "Livestock care and insurance support.", href: "/products/agriculture/pashuseva" },
    ],
  },
  {
    title: "Events and education",
    description: "Focused workflow products for planners, training and learning support.",
    icon: CalendarDays,
    products: [
      { name: "EventKhata", status: "Pipeline", text: "Budgets, vendors and event receivables.", href: "/products/events/eventkhata" },
      { name: "VidyaBot", status: "Pipeline", text: "Learning and student support assistant.", href: "/products/education/vidyabot" },
      { name: "ParikshaMitra", status: "Pipeline", text: "Exam planning and preparation workflow.", href: "/products/education/parikshamitra" },
    ],
  },
];

const statusClasses: Record<string, string> = {
  Flagship: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Live: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Early access": "border-blue-200 bg-blue-50 text-blue-700",
  Module: "border-slate-200 bg-slate-50 text-slate-600",
  Pipeline: "border-amber-200 bg-amber-50 text-amber-700",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#F6F8FB] text-slate-950 dark:bg-[#090705] dark:text-white">
      <section className="relative overflow-hidden border-b border-slate-200/70 py-20 dark:border-white/10 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 32% 20%, rgba(31,214,165,0.14), transparent 30%), radial-gradient(circle at 72% 22%, rgba(47,125,246,0.12), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.5), rgba(246,248,251,0))",
          }}
        />
        <div className="container-wide relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            The Portfolio
          </p>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] text-[#0B1628] dark:text-white sm:text-5xl md:text-6xl">
            Every product we build and operate.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            Two flagship platforms lead the family: Books ERP and Hospital OS, surrounded by focused software for finance, healthcare, agriculture, events and education.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          {flagshipProducts.map((product) => {
            const Icon = product.icon;
            const isDark = product.tone === "dark";
            return (
              <article
                key={product.title}
                className={
                  isDark
                    ? "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] p-7 text-white shadow-2xl md:p-10"
                    : "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
                }
              >
                {isDark ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 78% 10%, rgba(31,214,165,0.25), transparent 28%), radial-gradient(circle at 12% 92%, rgba(47,125,246,0.16), transparent 30%)",
                    }}
                  />
                ) : (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 82% 8%, rgba(47,125,246,0.12), transparent 28%), radial-gradient(circle at 8% 92%, rgba(31,214,165,0.1), transparent 30%)",
                    }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={
                        isDark
                          ? "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF8A3D] via-[#1FD6A5] to-[#2F7DF6] text-slate-950"
                          : "flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-white"
                      }
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span
                      className={
                        isDark
                          ? "rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-emerald-200"
                          : "rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-700"
                      }
                    >
                      {product.badge}
                    </span>
                  </div>

                  <h2 className="mt-8 font-heading text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
                    {product.title}
                  </h2>
                  <p className={isDark ? "mt-4 leading-7 text-slate-300" : "mt-4 leading-7 text-slate-600"}>
                    {product.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className={isDark ? "flex items-center gap-2 text-sm text-slate-200" : "flex items-center gap-2 text-sm text-slate-700"}
                      >
                        <PackageCheck className={isDark ? "h-4 w-4 text-emerald-300" : "h-4 w-4 text-emerald-600"} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button variant={isDark ? "whiteOutline" : "accent"} size="lg" asChild>
                      <Link href={product.href}>
                        {product.cta} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Focused Products
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.03em] text-[#0B1628] dark:text-white md:text-5xl">
                Built around clear operating workflows.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition-colors hover:text-emerald-800"
            >
              Discuss your workflow <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-8">
            {productGroups.map((group) => {
              const Icon = group.icon;
              return (
                <section key={group.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] md:p-6">
                  <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 dark:border-white/10 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-heading text-2xl font-bold tracking-[-0.02em] text-[#0B1628] dark:text-white">
                          {group.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {group.products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="group rounded-2xl border border-slate-200 bg-[#FAFBFD] p-5 transition-all hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white font-heading text-sm font-extrabold text-[#0B1628] shadow-sm dark:bg-white/10 dark:text-white">
                            {product.name.charAt(0)}
                          </div>
                          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${statusClasses[product.status] ?? statusClasses.Pipeline}`}>
                            {product.status}
                          </span>
                        </div>
                        <h4 className="mt-5 font-heading text-lg font-bold text-[#0B1628] transition-colors group-hover:text-emerald-700 dark:text-white">
                          {product.name}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {product.text}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B1120] p-8 text-white shadow-2xl md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(255,138,61,0.18), transparent 28%), radial-gradient(circle at 82% 20%, rgba(31,214,165,0.18), transparent 28%)",
              }}
            />
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                  Product fit first
                </div>
                <h2 className="max-w-2xl font-heading text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
                  See your workflow running in Katixo.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/contact">
                    Book a demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="whiteOutline" size="lg" asChild>
                  <Link href="/docs">View docs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
