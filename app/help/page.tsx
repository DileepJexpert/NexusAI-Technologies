import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { Search, MessageCircle, Mail, FileCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Help Center",
  description: `Find answers, guides, and support for ${brand.name} — accounting and POS software for Indian MSMEs.`,
  alternates: {
    canonical: "/help",
  },
};

const categories = [
  {
    icon: "🚀",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    title: "Getting Started",
    articles: [
      "Setting up your organization",
      "Adding your first items",
      "Creating your first invoice",
      "Inviting team members",
      "Configuring GST settings",
    ],
  },
  {
    icon: "🧾",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    title: "Billing & Invoices",
    articles: [
      "Creating and sending invoices",
      "Recording payments",
      "Managing credit notes",
      "Setting up recurring invoices",
      "Bulk invoice operations",
    ],
  },
  {
    icon: "📦",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    title: "Inventory Management",
    articles: [
      "Adding items with HSN codes",
      "Batch and expiry tracking",
      "Stock counts and adjustments",
      "Multi-warehouse setup",
      "Bill of Materials (BOM)",
    ],
  },
  {
    icon: "🏛️",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    title: "GST & Compliance",
    articles: [
      "GST return overview",
      "Filing GSTR-1",
      "Filing GSTR-3B",
      "E-invoicing setup",
      "GST reconciliation",
    ],
  },
  {
    icon: "🛒",
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
    title: "Purchase & Expenses",
    articles: [
      "Recording purchase bills",
      "Managing vendors",
      "Tracking expenses",
      "Purchase returns",
    ],
  },
  {
    icon: "⚙️",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    title: "Account & Settings",
    articles: [
      "User roles and permissions",
      "Organization settings",
      "Multi-organization management",
      "Data export and backup",
      "API access setup",
    ],
  },
];

export default function HelpPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(brand.whatsappGreeting)}`;

  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Help Center
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Find answers, guides, and support for {brand.name}
          </p>

          {/* Search placeholder (visual only) */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-4">
              <Search className="h-5 w-5 text-white/60 shrink-0" />
              <span className="text-white/50 text-left">Search for help...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-xl ${cat.color}`}
                  >
                    {cat.icon}
                  </div>
                  <h2 className="font-heading text-lg font-bold">{cat.title}</h2>
                </div>

                <ul className="mt-4 space-y-2">
                  {cat.articles.map((article) => (
                    <li key={article}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary hover:underline"
                      >
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t pt-3">
                  <Link
                    href="#"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View all &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact support */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold">Still need help?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Our team is here to help you get the most out of {brand.name}. Reach
            out through any of the channels below.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold">WhatsApp Support</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Chat with us for quick help
              </p>
            </a>

            <a
              href={`mailto:${brand.supportEmail}`}
              className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold">Email Support</h3>
              <p className="mt-1 text-sm text-muted-foreground">{brand.supportEmail}</p>
            </a>

            <Link
              href="/docs"
              className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <FileCode className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold">API Documentation</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Developer guides and reference
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
