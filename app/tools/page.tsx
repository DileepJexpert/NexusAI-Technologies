import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {
  ShieldCheck,
  MessageSquare,
  Building2,
  Database,
  ArrowRight,
  FileSpreadsheet,
  QrCode,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: `Free & Pro Business Tools for Indian MSMEs | ${brand.name}`,
  description: `Explore standalone companion tools for Indian enterprises and accountants: GSTR-2B Auto-Reconciler, WhatsApp AI Billing Agent, B2B Customer Portal, and 1-Click Tally Migrator.`,
};

const toolsList = [
  {
    slug: "gst-reconciliation",
    href: "/tools/gst-reconciliation",
    title: "GST 2.0 & GSTR-2B Auto-Reconciler",
    category: "Tax & Compliance",
    badge: "Free Tool",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400",
    icon: ShieldCheck,
    description:
      "Instantly cross-reference monthly GSTR-2B JSON against purchase registers from Tally, Busy, or Katixo. Detect tax rate discrepancies, identify defaulting suppliers, and avoid Section 16(2)(aa) scrutiny notices.",
    features: [
      "Client-side 100% private JSON parsing",
      "Line-level post-GST 2.0 rate discrepancy check",
      "1-Click WhatsApp payment hold notice for unfiled suppliers",
      "CA-ready discrepancy audit Excel export",
    ],
  },
  {
    slug: "whatsapp-ai",
    href: "/tools/whatsapp-ai",
    title: "WhatsApp AI Business & Billing Agent",
    category: "Business & Billing AI",
    badge: "AI Native",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-400",
    icon: MessageSquare,
    description:
      "Turn WhatsApp into an autonomous bookkeeping assistant. Record cash receipts and vendor expenses via voice notes or bill photos, and let customers check their balance and download PDF statements on demand.",
    features: [
      "Voice-note to journal entry in Hindi & English",
      "Snap photo of physical paper bill to auto-draft purchase entry",
      "Auto-send customer statement PDFs with dynamic UPI QR codes",
      "Works with existing WhatsApp Business numbers",
    ],
  },
  {
    slug: "b2b-portal",
    href: "/tools/b2b-portal",
    title: "B2B Wholesale Customer & Retailer Portal",
    category: "B2B Commerce & Portals",
    badge: "High ROI",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-400",
    icon: Building2,
    description:
      "A branded self-service portal for your retail buyers. Retailers can view available wholesale schemes, place re-orders, check credit limits, download GST tax invoices, and pay outstanding balances via UPI.",
    features: [
      "Eliminates 80% of routine 'send bill copy' phone calls",
      "Live customer ledger and overdue payment tracking",
      "Wholesale catalog with volume tiers and schemes",
      "Instant order push directly into Katixo Sales Orders",
    ],
  },
  {
    slug: "data-migrator",
    href: "/tools/data-migrator",
    title: "1-Click Tally & Busy Data Migrator",
    category: "Migration & Utilities",
    badge: "1-Click",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400",
    icon: Database,
    description:
      "Switching from legacy desktop software? Our automated migration engine reads your historical Tally XML or Busy Excel exports and imports 5 years of ledgers, opening stock, batches, and contacts in minutes.",
    features: [
      "Zero manual re-keying of customer or supplier masters",
      "Preserves batch numbers, manufacturing dates, and HSN codes",
      "Automatic chart-of-accounts mapping to modern cloud ledger",
      "Free migration assistance for growing Indian businesses",
    ],
  },
];

export default function ToolsHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs mb-4">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span>Standalone Micro-Tools & Portals</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Powerful Business Tools Built for Indian MSMEs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Use these standalone utilities alongside your existing accounting software or unlock their full power inside the complete {brand.name} AI ERP platform.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Ecosystem Utilities"
            title="Choose a tool to get started"
            subtitle="Engineered for speed, compliance with Indian tax laws, and zero friction."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {toolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.slug}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-slate-800 dark:text-emerald-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                    </div>

                    <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {tool.category}
                    </div>

                    <h3 className="mt-1 font-heading text-xl font-bold text-slate-900 dark:text-white">
                      {tool.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                      {tool.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-2">
                        {tool.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href={tool.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                    >
                      Open Tool <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Want All These Tools Connected in One Seamless ERP?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            {brand.name} unites GST 2.0 reconciliation, WhatsApp billing, wholesale customer portals, and inventory costing into a single unified workspace.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Request a Live Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
