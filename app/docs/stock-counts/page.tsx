import type { Metadata } from "next";
import Link from "next/link";
import {
  Boxes,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ClipboardCheck,
  Building2,
  SlidersHorizontal,
  Layers,
  Scale,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Physical Stock Counts & Inventory Audit Guide — Katixo Docs",
  description: `Complete guide to cycle counts, physical inventory audits, variance reconciliation, batch adjustments, and automated General Ledger posting in ${brand.name} ERP.`,
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    DRAFT: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
    POSTED: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    CANCELLED: "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status] || styles.DRAFT}`}>
      {status}
    </span>
  );
}

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

export default function StockCountsPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Warehouse & Inventory Audit Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Physical Stock Counts & Variance Reconciliation
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Perform scheduled cycle counts and annual physical inventory audits. Compare system book quantities
          against physical floor stock, identify shrinkage and breakages, adjust batch balances, and
          automatically post inventory variance journal entries to the General Ledger.
        </p>
      </div>

      {/* 1. Module Overview: Why Physical Stock Audits? */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Scale className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: Resolving Book Stock vs Floor Stock</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          In high-volume warehouses, physical stock naturally deviates from digital ledgers over time due to
          breakage, leakage, picking errors, or unrecorded samples. Regular stock counts protect profitability:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Continuous Cycle Counting</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Audit specific high-velocity racks or product categories weekly without halting entire warehouse operations.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Batch & Expiry Precision</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Verifies actual quantities per batch number and expiry date, catching expired stock before dispatch.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Automated GL Journals</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Posting a count automatically debits or credits Inventory Variance (Account 5150) against Inventory Asset.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Walkthrough */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ClipboardCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Perform a Stock Count (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Go to Inventory &gt; Stock Counts &gt; "New Stock Count":</strong>
                Select the warehouse and optionally filter by item category or rack aisle. System snapshot freezes the current book stock.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Enter Physical Quantities Counted:</strong>
                Warehouse staff walk the aisles and enter the actual counted units for each item line and batch. Notes can explain physical conditions (e.g. <em>"5 packs damaged by forklift"</em>).
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Review Variances &amp; Cost Impact:</strong>
                Katixo calculates:
                <div className="mt-1.5 rounded-lg bg-slate-50 p-2.5 font-mono text-[11px] dark:bg-white/5 space-y-0.5">
                  <p>• Quantity Variance = Counted Quantity - System Book Quantity</p>
                  <p>• Cost Variance = Quantity Variance × Item Weighted Average Cost</p>
                </div>
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Post Adjustments:</strong>
                Warehouse manager or accountant reviews the variance report and clicks <strong>"Post Adjustments"</strong> (<StatusBadge status="POSTED" />).
                The system updates <code className="text-blue-600">stock_balance</code> and <code className="text-blue-600">stock_batch_balance</code>, adjusts FIFO lots, and writes the financial adjustment journal.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Accounting Impact */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Automated General Ledger Adjustment Posting</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Posting a stock count automatically balances the physical reality with your balance sheet:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <span className="font-bold text-rose-700 dark:text-rose-400 block mb-1">Negative Variance (Deficit / Shrinkage)</span>
            <p className="text-slate-600 dark:text-slate-400">
              Physical count &lt; Book stock:
            </p>
            <div className="mt-2 font-mono text-[11px] text-slate-800 dark:text-slate-200">
              • DEBIT: Inventory Shrinkage / Variance (5150)<br />
              • CREDIT: Inventory Asset (1200)
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1">Positive Variance (Surplus / Found Stock)</span>
            <p className="text-slate-600 dark:text-slate-400">
              Physical count &gt; Book stock:
            </p>
            <div className="mt-2 font-mono text-[11px] text-slate-800 dark:text-slate-200">
              • DEBIT: Inventory Asset (1200)<br />
              • CREDIT: Inventory Gain / Variance (5150)
            </div>
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
          <Endpoint method="GET" path="/api/v1/stock-counts" />
          <Endpoint method="GET" path="/api/v1/stock-counts/{id}" />
          <Endpoint method="POST" path="/api/v1/stock-counts" />
          <Endpoint method="POST" path="/api/v1/stock-counts/{id}/post" />
        </div>
      </section>
    </div>
  );
}
