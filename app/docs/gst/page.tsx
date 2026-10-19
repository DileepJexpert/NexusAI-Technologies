import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Download,
  FileSpreadsheet,
  Layers,
  Sparkles,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "GST 2.0 & Statutory Tax Compliance Guide — Katixo Docs",
  description: `Complete guide to GST 2.0 reform compliance, national HSN directory, pre-filing review center, GSTR-1, GSTR-3B, and Input Tax Credit (ITC) in ${brand.name} ERP.`,
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function GSTPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Statutory Tax & Compliance Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          GST 2.0 Reform & Statutory Tax Compliance
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Built for India&apos;s post-GST 2.0 tax landscape (Notification 9/2025-CT(Rate)).
          Manage automated intra-state vs inter-state tax splits, leverage the universal HSN directory,
          audit filings with the Pre-Filing Review Center, and export GSTN-ready GSTR-1 and GSTR-3B returns.
        </p>
      </div>

      {/* 1. GST 2.0 Reform Architecture */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: India GST 2.0 Architecture</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Following India&apos;s comprehensive GST rate rationalization, Katixo ERP natively enforces current statutory schedules:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Pharma Chapter 30 (5%)</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Medicines (3001-3006) and medical devices (9018-9021) unified at 5%. 33 notified lifesaving drugs zero-rated.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Kirana & Retail FMCG</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Essential grocery staples and soaps at 5%, standard FMCG at 18%, luxury/tobacco at 28% with compensation cess.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Dynamic Place of Supply</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Compares Supplier State vs Delivery State: Intra-state splits into CGST + SGST; Inter-state posts to IGST.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Pre-Filing Review Center */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <span>2. The Pre-Filing Review Center: Catching Errors Early</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Uploading flawed return data to the GST Portal results in notices and blocked Input Tax Credit (ITC).
          Katixo&apos;s <strong>Pre-Filing Review Center</strong> validates all transactions before export:
        </p>

        <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Missing or Invalid Customer GSTINs:</strong> Flags B2B invoices that would be rejected as invalid on the portal.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>HSN Code Validation:</strong> Checks that all items have valid 4, 6, or 8-digit HSN codes matching CBIC master directories.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Place of Supply (POS) Integrity:</strong> Ensures inter-state invoices have valid two-digit state codes (e.g. 27 for Maharashtra).
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Tax Split Precision:</strong> Guarantees that CGST and SGST equal each other to the exact paisa.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Generating GSTR-1 & GSTR-3B */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Generating GSTR-1 & GSTR-3B Return Files</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Export statutory return files with a single click:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">GSTR-1 Outward Supplies</span>
            <p className="text-slate-600 dark:text-slate-400">
              Aggregates Table 4 (B2B invoices), Table 5 (B2C Large), Table 7 (B2C Small), Table 9 (Credit/Debit Notes CDNR/CDNUR), and Table 12 (HSN summary). Export as JSON ready for direct upload to GSTN portal.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">GSTR-3B Monthly Summary</span>
            <p className="text-slate-600 dark:text-slate-400">
              Summarizes total taxable turnover, output tax liability, eligible Input Tax Credit (ITC) from purchase bills, and net cash tax payable after ITC offset.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/gst/review-center" />
          <Endpoint method="GET" path="/api/v1/gst/gstr1" />
          <Endpoint method="GET" path="/api/v1/gst/gstr3b" />
          <Endpoint method="GET" path="/api/v1/gst/gstr1/export" />
          <Endpoint method="GET" path="/api/v1/gst/gstr3b/export" />
        </div>
      </section>
    </div>
  );
}
