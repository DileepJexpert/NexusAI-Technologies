import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {
  Truck,
  FileCheck,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: `Vendor & Supplier Collaboration Hub | ${brand.name}`,
  description: `Streamline procure-to-pay workflows with a dedicated vendor portal. Purchase order confirmations, electronic delivery challan uploads, and real-time payment schedule visibility.`,
};

export default function VendorPortalToolPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs mb-4">
            <Truck className="h-4 w-4 text-emerald-400" />
            <span>Procure-to-Pay Automation</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Vendor & Supplier Collaboration Hub
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Give suppliers a unified dashboard to acknowledge Purchase Orders (POs), upload delivery challans with batch numbers, and check scheduled payment disbursement dates.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-wide max-w-5xl">
          <SectionHeading
            eyebrow="Supplier Integration"
            title="Accelerate 3-Way Procurement Matching"
            subtitle="Connect your warehouse receiving dock directly with external suppliers."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-slate-800 dark:text-emerald-400">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900 dark:text-white">
                Instant PO Acknowledgments
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Suppliers receive digital PO notifications and confirm expected delivery dates with one click.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 dark:bg-slate-800 dark:text-blue-400">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900 dark:text-white">
                Pre-Dispatch ASN & Challans
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Suppliers submit batch numbers and expiry dates prior to dispatch, enabling barcode verification at your goods receiving dock.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-800 dark:bg-slate-800 dark:text-purple-400">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900 dark:text-white">
                Payment Status Transparency
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Suppliers track bill approval, TDS deductions, and upcoming payment batch dates without follow-up emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Strengthen Supplier Relationships with {brand.name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            Seamlessly linked to Katixo's 3-way matching and Accounts Payable engine.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
