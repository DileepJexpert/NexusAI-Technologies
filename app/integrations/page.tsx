import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import type { ProductStatus } from "@/data/types";

export const metadata: Metadata = {
  title: "Integrations",
  description: `Connect ${brand.name} with payment gateways, GST portals, banks, e-commerce platforms and productivity tools you already use.`,
};

interface Integration {
  name: string;
  category: string;
  status: ProductStatus;
  description: string;
  borderColor: string;
}

const categories: { title: string; integrations: Integration[] }[] = [
  {
    title: "Payments & Banking",
    integrations: [
      {
        name: "Razorpay",
        category: "Payments",
        status: "live",
        description:
          "Accept invoice payments online via Razorpay payment gateway with automatic reconciliation.",
        borderColor: "border-l-blue-500",
      },
      {
        name: "UPI / BHIM",
        category: "Payments",
        status: "live",
        description:
          "Collect payments directly via UPI with auto-generated QR codes on every invoice.",
        borderColor: "border-l-emerald-500",
      },
      {
        name: "ICICI / HDFC Bank Feeds",
        category: "Banking",
        status: "beta",
        description:
          "Auto-import bank transactions and match them against invoices for faster reconciliation.",
        borderColor: "border-l-amber-500",
      },
    ],
  },
  {
    title: "GST & Compliance",
    integrations: [
      {
        name: "GST Portal",
        category: "Compliance",
        status: "live",
        description:
          "File GSTR-1 and GSTR-3B directly from your dashboard without switching to the portal.",
        borderColor: "border-l-indigo-500",
      },
      {
        name: "E-Invoice (IRP)",
        category: "Compliance",
        status: "live",
        description:
          "Auto-generate IRN via the NIC portal for every B2B invoice above the threshold.",
        borderColor: "border-l-violet-500",
      },
      {
        name: "E-Way Bill",
        category: "Compliance",
        status: "live",
        description:
          "Generate e-way bills alongside invoices for seamless goods transport compliance.",
        borderColor: "border-l-purple-500",
      },
    ],
  },
  {
    title: "Communication",
    integrations: [
      {
        name: "WhatsApp Business",
        category: "Messaging",
        status: "live",
        description:
          "Send invoices, payment reminders and receipt confirmations via WhatsApp automatically.",
        borderColor: "border-l-green-500",
      },
      {
        name: "Email (SMTP)",
        category: "Email",
        status: "live",
        description:
          "Automated invoice delivery, payment reminders and overdue notifications via email.",
        borderColor: "border-l-sky-500",
      },
    ],
  },
  {
    title: "E-commerce & POS",
    integrations: [
      {
        name: "Shopify",
        category: "E-commerce",
        status: "beta",
        description:
          "Sync orders, inventory levels and customer data between your Shopify store and Katixo.",
        borderColor: "border-l-lime-500",
      },
      {
        name: "WooCommerce",
        category: "E-commerce",
        status: "coming_soon",
        description:
          "Two-way sync for products, orders and stock levels with your WooCommerce store.",
        borderColor: "border-l-fuchsia-500",
      },
    ],
  },
  {
    title: "Productivity",
    integrations: [
      {
        name: "Google Sheets",
        category: "Productivity",
        status: "beta",
        description:
          "Export reports, ledger data and transaction summaries to Google Sheets on a schedule.",
        borderColor: "border-l-teal-500",
      },
      {
        name: "Tally Import",
        category: "Migration",
        status: "live",
        description:
          "Migrate your existing masters, ledgers and vouchers from Tally ERP with one click.",
        borderColor: "border-l-red-500",
      },
    ],
  },
];

const stats = [
  { value: "10+", label: "Integrations" },
  { value: "REST", label: "API" },
  { value: "Webhooks", label: "Support" },
  { value: "Custom", label: "Workflows" },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Integrations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Connect {brand.name} with the payment gateways, banks, GST portals
            and productivity tools you already use — so your data flows
            automatically.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-muted/30">
        <div className="container-wide grid grid-cols-2 gap-4 py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-2xl font-extrabold sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration categories */}
      {categories.map((category) => (
        <section
          key={category.title}
          className="section-padding odd:bg-muted/30"
        >
          <div className="container-wide">
            <SectionHeading
              eyebrow="Integrations"
              title={category.title}
              align="left"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.integrations.map((integration) => (
                <div
                  key={integration.name}
                  className={`rounded-2xl border border-l-4 ${integration.borderColor} bg-card p-6 shadow-sm transition-shadow hover:shadow-md`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold">
                        {integration.name}
                      </h3>
                      <span className="mt-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {integration.category}
                      </span>
                    </div>
                    <StatusBadge status={integration.status} />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* API section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-8 text-center shadow-sm sm:p-12">
            <SectionHeading
              eyebrow="Developer API"
              title="Build your own integration"
              subtitle={`${brand.name} exposes a REST API with full read and write access to invoices, items, customers, expenses and reports. Use webhooks to react to events in real time.`}
            />
            <div className="mt-8">
              <Button asChild>
                <Link href="/docs">Explore the API docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Need a custom integration?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            Tell us what tools you use and we&apos;ll work with you to connect
            them to {brand.name}.
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
              asChild
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
