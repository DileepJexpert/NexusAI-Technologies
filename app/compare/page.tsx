import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { Check, X, Minus, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: `Compare ${brand.name} vs Tally, Zoho Books, Busy & Vyapar`,
  description: `See how ${brand.name} compares to Tally, Zoho Books, Busy Accounting and Vyapar. Honest feature-by-feature comparison for Indian MSMEs choosing accounting software.`,
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

type Status = "yes" | "no" | "limited" | string;

interface FeatureRow {
  feature: string;
  katixo: Status;
  competitor: Status;
}

interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  features: FeatureRow[];
  whyKatixo: string[];
  whenCompetitor: string[];
}

const competitors: Competitor[] = [
  {
    slug: "tally",
    name: "Tally",
    tagline: "The legacy desktop accounting giant",
    features: [
      { feature: "Cloud-based", katixo: "yes", competitor: "Desktop-first" },
      { feature: "GST Filing", katixo: "Auto GSTR-1/3B", competitor: "yes" },
      { feature: "Batch/Expiry Tracking", katixo: "yes", competitor: "yes" },
      { feature: "Multi-location Inventory", katixo: "yes", competitor: "yes" },
      { feature: "API Access", katixo: "Full REST API", competitor: "TDL/XML only" },
      { feature: "Mobile POS", katixo: "yes", competitor: "no" },
      { feature: "Multi-user & Roles", katixo: "Yes, 5 roles", competitor: "yes" },
      { feature: "E-invoicing", katixo: "yes", competitor: "yes" },
      { feature: "Pricing", katixo: "Competitive cloud pricing", competitor: "From ~18,000/year" },
    ],
    whyKatixo: [
      "Cloud-native architecture means access from anywhere, on any device, with no installation hassles.",
      "Modern REST API makes integrations with e-commerce, logistics and payment platforms straightforward.",
      "Built-in mobile POS eliminates the need for separate billing software at retail counters.",
      "Auto GSTR-1/3B preparation reduces manual GST filing effort significantly.",
    ],
    whenCompetitor: [
      "Your business already relies on extensive Tally TDL customisations that would be costly to migrate.",
      "You operate in a fully offline environment where internet connectivity is unreliable.",
      "Your CA or auditor specifically requires Tally-format data exports for compliance workflows.",
    ],
  },
  {
    slug: "zoho-books",
    name: "Zoho Books",
    tagline: "Part of the broader Zoho ecosystem",
    features: [
      { feature: "Cloud-based", katixo: "yes", competitor: "yes" },
      { feature: "GST Filing", katixo: "Auto GSTR-1/3B", competitor: "yes" },
      { feature: "Batch/Expiry Tracking", katixo: "yes", competitor: "limited" },
      { feature: "Multi-location Inventory", katixo: "yes", competitor: "yes" },
      { feature: "API Access", katixo: "Full REST API", competitor: "yes" },
      { feature: "Mobile POS", katixo: "yes", competitor: "limited" },
      { feature: "Multi-user & Roles", katixo: "Yes, 5 roles", competitor: "yes" },
      { feature: "E-invoicing", katixo: "yes", competitor: "yes" },
      { feature: "Pricing", katixo: "Competitive cloud pricing", competitor: "From ~749/month" },
    ],
    whyKatixo: [
      "Purpose-built for Indian MSMEs with first-class batch/expiry tracking for pharma, grocery and FMCG businesses.",
      "Dedicated mobile POS designed for Indian retail workflows, not just a companion app.",
      "Leaner interface focused on accounting and billing -- no upsell pressure from a large product suite.",
      "Granular role-based access with five predefined roles suited for small team structures.",
    ],
    whenCompetitor: [
      "You already use multiple Zoho products (CRM, Desk, Projects) and want tight native integration.",
      "You need built-in project accounting with time tracking and project profitability reports.",
      "Your business operates internationally and requires multi-currency invoicing with exchange-rate management.",
    ],
  },
  {
    slug: "busy-accounting",
    name: "Busy Accounting",
    tagline: "Desktop accounting for SMEs",
    features: [
      { feature: "Cloud-based", katixo: "yes", competitor: "Desktop-only" },
      { feature: "GST Filing", katixo: "Auto GSTR-1/3B", competitor: "yes" },
      { feature: "Batch/Expiry Tracking", katixo: "yes", competitor: "yes" },
      { feature: "Multi-location Inventory", katixo: "yes", competitor: "limited" },
      { feature: "API Access", katixo: "Full REST API", competitor: "no" },
      { feature: "Mobile POS", katixo: "yes", competitor: "no" },
      { feature: "Multi-user & Roles", katixo: "Yes, 5 roles", competitor: "limited" },
      { feature: "E-invoicing", katixo: "yes", competitor: "yes" },
      { feature: "Pricing", katixo: "Competitive cloud pricing", competitor: "From ~7,500 one-time" },
    ],
    whyKatixo: [
      "Full cloud access means your data is available on any device without VPN or remote desktop setups.",
      "Open REST API allows you to connect with payment gateways, e-commerce and logistics platforms.",
      "Mobile POS turns any phone or tablet into a billing counter, ideal for retail and field sales.",
      "Granular multi-user roles let you control who sees financials vs. who only handles billing.",
    ],
    whenCompetitor: [
      "You prefer a one-time licence fee over recurring subscription pricing.",
      "Your business runs entirely on a local network and you want a lightweight desktop-only solution.",
      "You need specific manufacturing or job-work accounting features that Busy has refined over the years.",
    ],
  },
  {
    slug: "vyapar",
    name: "Vyapar",
    tagline: "Mobile-first billing for micro businesses",
    features: [
      { feature: "Cloud-based", katixo: "yes", competitor: "Mobile-first" },
      { feature: "GST Filing", katixo: "Auto GSTR-1/3B", competitor: "yes" },
      { feature: "Batch/Expiry Tracking", katixo: "yes", competitor: "no" },
      { feature: "Multi-location Inventory", katixo: "yes", competitor: "no" },
      { feature: "API Access", katixo: "Full REST API", competitor: "no" },
      { feature: "Mobile POS", katixo: "yes", competitor: "yes" },
      { feature: "Multi-user & Roles", katixo: "Yes, 5 roles", competitor: "limited" },
      { feature: "E-invoicing", katixo: "yes", competitor: "yes" },
      { feature: "Pricing", katixo: "Competitive cloud pricing", competitor: "From ~3,399/year" },
    ],
    whyKatixo: [
      "Full inventory management with batch tracking, expiry dates and multi-location support as you grow.",
      "REST API access lets you integrate with your online store, delivery partners and payment systems.",
      "Five-level role-based access gives you proper team management as your business scales beyond a single user.",
      "Cloud-native architecture works equally well on desktop and mobile, so you are not locked into a phone-only experience.",
    ],
    whenCompetitor: [
      "You are a solo entrepreneur who primarily operates from a smartphone and needs a very simple invoicing app.",
      "Your business is in the early stages and you need the simplest possible GST billing tool to get started.",
      "You do not need inventory management, batch tracking or multi-user access at this point.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helper: render a status cell                                      */
/* ------------------------------------------------------------------ */

function StatusCell({ value }: { value: Status }) {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center gap-1.5 text-green-600 font-medium">
        <Check className="h-4 w-4" /> Yes
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex items-center gap-1.5 text-red-500 font-medium">
        <X className="h-4 w-4" /> No
      </span>
    );
  }
  if (value === "limited") {
    return (
      <span className="inline-flex items-center gap-1.5 text-amber-600 font-medium">
        <Minus className="h-4 w-4" /> Limited
      </span>
    );
  }
  // Custom string (e.g. "Auto GSTR-1/3B", "TDL/XML only")
  return <span className="text-muted-foreground font-medium">{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ComparePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            How {brand.name} Compares
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Choosing the right accounting software matters. See honest,
            feature-by-feature comparisons of {brand.name} against the most
            popular options for Indian MSMEs.
          </p>
        </div>
      </section>

      {/* ---- Comparison Cards (Jump Links) ---- */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Comparisons"
            title="Pick a comparison"
            subtitle={`See how ${brand.name} stacks up against each competitor across features, pricing and use-case fit.`}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {competitors.map((c) => (
              <a
                key={c.slug}
                href={`#vs-${c.slug}`}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md hover:ring-2 hover:ring-primary/40"
              >
                <h3 className="font-heading text-xl font-bold">
                  {brand.name} vs {c.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                  View comparison <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Detailed Comparison Sections ---- */}
      {competitors.map((c) => (
        <section
          key={c.slug}
          id={`vs-${c.slug}`}
          className="section-padding scroll-mt-24 border-t"
        >
          <div className="container-wide">
            {/* Section heading */}
            <SectionHeading
              eyebrow="Feature comparison"
              title={`${brand.name} vs ${c.name}`}
              subtitle={c.tagline}
            />

            {/* Feature table */}
            <div className="mt-10 overflow-x-auto rounded-xl border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b bg-muted/40">
                    <th className="px-4 py-3 font-semibold text-muted-foreground">
                      Feature
                    </th>
                    <th className="px-4 py-3 font-semibold text-primary">
                      {brand.name}
                    </th>
                    <th className="px-4 py-3 font-semibold text-muted-foreground">
                      {c.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.features.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                    >
                      <td className="px-4 py-3 font-medium">{row.feature}</td>
                      <td className="px-4 py-3">
                        <StatusCell value={row.katixo} />
                      </td>
                      <td className="px-4 py-3">
                        <StatusCell value={row.competitor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Why Katixo + When Competitor */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {/* Why choose Katixo */}
              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-primary">
                  Why choose {brand.name} over {c.name}
                </h3>
                <ul className="mt-4 space-y-3">
                  {c.whyKatixo.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to choose competitor */}
              <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold">
                  When {c.name} might be a better fit
                </h3>
                <ul className="mt-4 space-y-3">
                  {c.whenCompetitor.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ---- CTA ---- */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Ready to try {brand.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            See why growing Indian businesses are choosing {brand.name} as their
            cloud-native accounting and POS platform.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-slate-100"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
