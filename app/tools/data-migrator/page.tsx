import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {
  Database,
  FileCode2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  FolderSync,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: `1-Click Tally & Busy Data Migration Engine | ${brand.name}`,
  description: `Seamlessly migrate from Tally ERP 9, TallyPrime, or Busy Accounting to Katixo AI ERP. Automated XML and Excel parser imports 5 years of historical ledgers, batches, and contacts with zero data loss.`,
};

export default function DataMigratorToolPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs mb-4">
            <Database className="h-4 w-4 text-emerald-400" />
            <span>₹0 Migration Fee • Zero Downtime</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            1-Click Tally & Busy Data Migrator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Never stay locked into legacy desktop software out of fear of data loss. Export your Tally XML or Busy Excel sheet, and our migration engine maps 5 years of historical ledgers, batches, and opening stock in under 15 minutes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-wide max-w-5xl">
          <SectionHeading
            eyebrow="3 Simple Steps"
            title="How the Migration Engine Works"
            subtitle="Automated, secure, and audited by senior accounting professionals."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="text-sm font-bold text-emerald-600 mb-2">Step 1</div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Export Masters & Vouchers
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Export your company data from Tally via <em>Gateway of Tally &gt; Export &gt; All Masters (XML)</em>, or export Master Lists from Busy.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="text-sm font-bold text-blue-600 mb-2">Step 2</div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Automated Schema Mapping
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Our parser cleans up duplicate contacts, normalizes GSTINs, formats phone numbers, and maps your chart of accounts to Katixo.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="text-sm font-bold text-purple-600 mb-2">Step 3</div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Trial Balance Verification
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We generate a side-by-side Trial Balance comparison. Not a single rupee of opening balance is misplaced before you go live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Ready to Upgrade Your Business to {brand.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            Talk to our migration specialists for a free, guided migration session.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Start Free Migration <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
