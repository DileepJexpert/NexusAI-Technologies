import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {
  Building2,
  ShoppingCart,
  Receipt,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: `B2B Wholesale Customer & Retailer Portal | ${brand.name}`,
  description: `Self-service wholesale portal for distributors and manufacturers. Retailers can check credit limits, place repeat orders, download GST invoices, and pay balances online.`,
};

export default function B2bPortalToolPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs mb-4">
            <Building2 className="h-4 w-4 text-emerald-400" />
            <span>Distributor & Retailer Commerce</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            B2B Wholesale Customer & Retailer Portal
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Empower your retail customers with a 24/7 self-service portal. Let them re-order stock, track delivery challans, download signed GST invoices, and settle balances without calling your office.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-wide max-w-5xl">
          <SectionHeading
            eyebrow="Wholesale Efficiency"
            title="Eliminate 80% of Routine Order Desk Calls"
            subtitle="Designed for FMCG, pharma, garments, and industrial supply distributors."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-slate-800 dark:text-emerald-400">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900 dark:text-white">
                1-Click Wholesale Re-Ordering
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Retailers see their customized price lists, quantity tier discounts, and active trade schemes (e.g. Buy 10 Get 1 Free).
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 dark:bg-slate-800 dark:text-blue-400">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900 dark:text-white">
                Live Credit Limit & Aging
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Shows exact credit days, approved credit limit, and overdue bills. Automatically blocks orders if overdue thresholds are breached.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-800 dark:bg-slate-800 dark:text-purple-400">
                <Receipt className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900 dark:text-white">
                Self-Service Invoice PDFs
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Retailers download digitally signed GST tax invoices and debit/credit notes for their CA filings at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Launch Your Branded B2B Portal in 48 Hours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            Included out-of-the-box with {brand.name} Distribution & Multi-Warehouse ERP.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Book Portal Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
