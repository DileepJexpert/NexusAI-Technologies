import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, FileText, PackageCheck, ReceiptText, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

const pageUrl = `${brand.siteUrl}/accounting-pos-software`;

const keywords = [
  "best accounting POS software",
  "accounting POS software India",
  "POS billing software for MSME",
  "GST billing software for small business",
  "kirana store billing software",
  "medical store POS software",
  "distributor billing software",
  "retail POS accounting software",
  "inventory and accounting software India",
  "small business accounting software",
];

const businessTypes = [
  "MSME and small businesses",
  "Kirana and grocery stores",
  "Medical and pharmacy shops",
  "Retail showrooms",
  "Wholesale distributors",
  "Service businesses",
];

const features = [
  {
    icon: ReceiptText,
    title: "GST-ready billing",
    description: "Create clean invoices, track taxable sales, and keep daily billing records ready for review.",
  },
  {
    icon: PackageCheck,
    title: "Inventory control",
    description: "Track stock movement across purchases, sales, returns, and distributor supply workflows.",
  },
  {
    icon: FileText,
    title: "Accounting workspace",
    description: "Bring sales, expenses, receivables, payables, and reconciliation into one finance view.",
  },
  {
    icon: BarChart3,
    title: "Business dashboard",
    description: "See revenue, cash flow, pending bills, GST status, and exceptions without spreadsheet chaos.",
  },
];

const faqs = [
  {
    question: "What is accounting POS software?",
    answer:
      "Accounting POS software combines billing, sales records, inventory, GST details, customer balances, vendor payments, and business reports in one system.",
  },
  {
    question: "Is Katixo useful for MSME and small businesses?",
    answer:
      "Yes. Katixo is designed for Indian MSME and small business teams that need simple billing, accounting review, GST workflows, reconciliation, and business visibility.",
  },
  {
    question: "Can medical stores and kirana shops use Katixo?",
    answer:
      "Katixo is being built for practical retail workflows including kirana stores, medical shops, distributors, and service-led businesses that need billing plus finance control.",
  },
  {
    question: "Does Katixo support GST billing and reports?",
    answer:
      "Katixo focuses on GST-aware billing, finance review, reporting, and accounting workflows for Indian businesses.",
  },
];

export const metadata: Metadata = {
  title: "Best Accounting POS Software for MSME and Small Business",
  description:
    "Katixo is accounting POS software for Indian MSME, small business, medical stores, kirana shops, retailers and distributors with GST billing, inventory and finance dashboards.",
  keywords,
  alternates: {
    canonical: "/accounting-pos-software",
  },
  openGraph: {
    title: "Best Accounting POS Software for MSME and Small Business",
    description:
      "GST billing, inventory, accounting review and finance dashboards for Indian small businesses, kirana stores, medical shops and distributors.",
    url: pageUrl,
  },
};

export default function AccountingPosSoftwarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: "Katixo Accounting POS Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: pageUrl,
        description: metadata.description,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/PreOrder",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "MSME, small business, retailers, medical stores, kirana shops and distributors",
        },
        publisher: {
          "@type": "Organization",
          name: brand.name,
          url: brand.siteUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden bg-[#07111f] py-20 text-white md:py-28">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(34,197,94,0.2), transparent 32%), radial-gradient(circle at 82% 28%, rgba(14,165,233,0.2), transparent 30%)",
          }}
        />
        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Accounting POS for India
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Best accounting POS software for MSME and small business
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Katixo helps medical stores, kirana shops, retailers, distributors and service businesses manage GST billing, inventory, accounting review and finance dashboards from one clean workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="whiteOutline" size="lg" asChild>
                <Link href="/contact?intent=register">Register interest</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-md bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="text-sm text-slate-500">Today</p>
                  <h2 className="text-2xl font-bold">Store dashboard</h2>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  GST ready
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Sales", "₹1,84,500"],
                  ["Inventory alerts", "12 items"],
                  ["Receivables", "₹42,300"],
                  ["Bills to pay", "₹18,900"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-2 text-2xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-md border bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold">Recent bills</p>
                  <p className="text-sm text-emerald-700">Synced</p>
                </div>
                {["Medical sale invoice", "Kirana counter bill", "Distributor purchase"].map((item) => (
                  <div key={item} className="flex items-center justify-between border-t py-3 text-sm">
                    <span>{item}</span>
                    <span className="font-semibold text-slate-700">Posted</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">Built for real Indian business workflows</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The right accounting POS system should do more than print bills. It should help owners understand stock, cash, profit, GST, pending collections and daily business health.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 rounded-lg border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    id={feature.title === "GST-ready billing" ? "gst-ready-billing" : undefined}
                    className="mt-5 text-xl font-bold"
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Store className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-bold">Keywords this page targets</h2>
            <p className="mt-4 text-muted-foreground">
              This page is structured so Google can understand that Katixo is relevant for accounting POS, billing, GST and small business finance searches.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] py-16 text-white">
        <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Want Katixo for your business?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Register your interest and tell us your business type. We will help you map billing, accounting and reporting needs.
            </p>
          </div>
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact">
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold">Accounting POS software FAQ</h2>
          <div className="mt-8 divide-y rounded-lg border bg-card">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
