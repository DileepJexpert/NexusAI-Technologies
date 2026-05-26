import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  "MSME and small businesses",
  "Kirana and grocery stores",
  "Medical and pharmacy shops",
  "Retail billing counters",
  "Wholesale distributors",
  "Service businesses",
];

const topics = [
  {
    title: "GST billing and invoice records",
    text: "Create GST-ready bills, keep sales records clean, and make daily billing easier to review.",
  },
  {
    title: "Inventory, stock and purchases",
    text: "Track stock movement, supplier purchases, returns, and items that need owner attention.",
  },
  {
    title: "Accounting and cash visibility",
    text: "See receivables, payables, expenses, bank reconciliation, cash flow, and profit signals in one place.",
  },
  {
    title: "Reports for business owners",
    text: "Use simple dashboards to understand sales, pending collections, GST status, and finance exceptions.",
  },
];

const faqs = [
  {
    question: "Which businesses can use Katixo accounting POS software?",
    answer:
      "Katixo is built for Indian MSME, small businesses, kirana stores, medical shops, retailers, distributors, and service businesses that need billing plus accounting visibility.",
  },
  {
    question: "Can Katixo help with GST billing?",
    answer:
      "Yes. Katixo is positioned for GST-ready billing, invoice records, accounting review, and finance reporting for Indian businesses.",
  },
  {
    question: "Is Katixo only a POS tool?",
    answer:
      "No. Katixo combines POS-style billing with accounting, inventory, reconciliation, reports, and owner-level business dashboards.",
  },
];

export function SeoBusinessSections() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Accounting POS software
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Built for MSME, kirana, medical, retail and distributor businesses
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Google ranks pages that clearly answer what people search for. Katixo now explains the real use cases: GST billing, inventory, accounting, cash flow, reports, and daily business control for Indian small businesses.
            </p>
            <div className="mt-7">
              <Button variant="accent" size="lg" asChild>
                <Link href="/accounting-pos-software">
                  View accounting POS page <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 rounded-lg border bg-slate-50 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                <span className="font-semibold text-slate-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              What Katixo helps with
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Billing, accounting and finance control in one workspace
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <article key={topic.title} className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{topic.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{topic.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Common questions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Accounting POS software FAQ
            </h2>
            <p className="mt-4 text-slate-600">
              FAQ content helps visitors and gives Google clearer answers for search snippets.
            </p>
          </div>
          <div className="divide-y rounded-lg border bg-card">
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
