import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Boxes,
  Layers,
  ArrowLeftRight,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "FIFO Inventory Costing & Transfers Guide — Katixo Docs",
  description: `Complete guide to FIFO cost lot accounting, AS-2 valuation, inter-warehouse stock transfers, and real-time COGS computation in ${brand.name} ERP.`,
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

export default function InventoryCostingPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Inventory & Valuation Architecture
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          FIFO Costing, Valuation & Warehouse Transfers
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Compliant with Indian Accounting Standard 2 (AS-2) and Ind AS 2. Discover how {brand.name}&apos;s
          high-performance FIFO costing engine opens cost lots, calculates real-time Cost of Goods Sold (COGS),
          and maintains cost basis integrity across inter-warehouse stock transfers.
        </p>
      </div>

      {/* 1. What is FIFO Costing & Why it Matters */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: Why FIFO Costing is Essential</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Under Indian tax and accounting standards, enterprises cannot arbitrarily estimate stock valuation.
          <strong>First-In, First-Out (FIFO)</strong> assumes that items purchased earliest are sold earliest.
          In a rising price environment, FIFO accurately matches historical procurement costs with sales revenues:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">AS-2 Statutory Compliance</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Audit-ready inventory valuation backed by granular lot-by-lot acquisition and consumption records.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Accurate Gross Profit</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Eliminates false profit spikes caused by using outdated purchase prices or un-weighted averages.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Pessimistic Concurrency</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Row-level database locking ensures multiple concurrent dispatches cannot oversell or double-consume lots.
            </p>
          </div>
        </div>
      </section>

      {/* 2. How the Katixo FIFO Engine Works */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Boxes className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How the FIFO Engine Operates Under the Hood</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-4 text-xs text-slate-600 dark:text-slate-400">
          <div>
            <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-1">
              A. Cost Lot Opening (Every Inbound Receipt)
            </strong>
            <p>
              Whenever stock enters a warehouse — whether via a Goods Receipt Note (GRN), direct Purchase Bill, or positive physical stock count — Katixo opens an immutable <code className="text-blue-600">cost_lot</code> record:
            </p>
            <div className="mt-2 rounded-lg bg-slate-50 p-3 font-mono text-[11px] dark:bg-white/5 space-y-0.5">
              <p>• Lot ID: UUID</p>
              <p>• Item: Paracetamol 650mg | Warehouse: Main Depot</p>
              <p>• Opening Qty: 100 units | Remaining Qty: 100 units</p>
              <p>• Landed Unit Cost: ₹42.50 | Total Lot Value: ₹4,250.00</p>
            </div>
          </div>

          <div>
            <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-1">
              B. Lot Consumption (Oldest-First Draw with Blended Cost)
            </strong>
            <p>
              When a sales issue occurs (Delivery Challan dispatch, POS cash sale, or direct invoice), the FIFO engine queries active open lots ordered by <code className="text-blue-600">created_at ASC</code>:
            </p>
            <div className="mt-2 rounded-lg bg-emerald-50 p-3.5 border border-emerald-200 text-emerald-950 dark:bg-emerald-950/30 dark:border-emerald-800/50 dark:text-emerald-300">
              <span className="font-bold block mb-1">Numerical Example:</span>
              <p>Suppose an order requires 15 units. Active open lots are:</p>
              <ul className="mt-1 list-disc list-inside space-y-0.5">
                <li>Lot 1 (Oldest): 10 units remaining @ ₹100.00 each</li>
                <li>Lot 2 (Newer): 20 units remaining @ ₹120.00 each</li>
              </ul>
              <p className="mt-2 font-semibold">
                Engine consumes all 10 units from Lot 1 (₹1,000) + 5 units from Lot 2 (₹600).<br />
                Total COGS = ₹1,600.00 | Blended FIFO Unit Cost = ₹106.67.
              </p>
            </div>
          </div>

          <div>
            <strong className="text-sm font-bold text-slate-900 dark:text-white block mb-1">
              C. General Ledger COGS Posting
            </strong>
            <p>
              When the Sales Invoice is posted, the accounting posting rule credits Inventory Asset (1200) and debits Cost of Goods Sold (5000) using this exact blended FIFO cost basis.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Inter-Warehouse Transfers */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ArrowLeftRight className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Inter-Warehouse Transfers & Cost Preservation</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Transferring inventory between branches (e.g. Central Warehouse to a City Van Hub) must never alter the company&apos;s total inventory asset value:
        </p>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Create Transfer Order:</strong> Go to <strong>Inventory &gt; Transfer Orders &gt; "New Transfer Order"</strong>. Select Origin Warehouse and Destination Warehouse. Add item lines and batch numbers.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Dispatch (TRANSFER_OUT):</strong> Warehouse staff pack items and click <em>Dispatch</em>. Origin stock is deducted and items enter <code className="text-amber-600">IN_TRANSIT</code>. The original FIFO acquisition cost is carried forward on the transfer order line.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Receive at Destination (TRANSFER_IN):</strong> Destination warehouse verifies the goods and clicks <em>Receive</em>. Katixo opens a new FIFO cost lot at the destination warehouse carrying the <strong>identical original cost basis</strong>. Zero valuation distortion occurs.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. Valuation Reports */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>4. Valuation Reports & Balance Sheet Synchronization</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Two standard reports provide full audit visibility into stock valuations:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">FIFO Lot Valuation Report</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Lists every active, unconsumed cost lot in your organization with receipt date, original quantity, remaining quantity, unit cost, and current balance sheet value.
            </p>
            <code className="mt-2 block text-[11px] text-emerald-700 dark:text-[#b3ed97]">/api/v1/reports/fifo-valuation</code>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Stock Summary Report</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Aggregated view per item across all warehouses. For FIFO organizations, values are derived directly from the sum of active cost lots.
            </p>
            <code className="mt-2 block text-[11px] text-emerald-700 dark:text-[#b3ed97]">/api/v1/reports/stock-summary</code>
          </div>
        </div>
      </section>

      {/* 5. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Transfer order and valuation endpoints for automated inventory pipelines:
        </p>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/transfer-orders" />
          <Endpoint method="POST" path="/api/v1/transfer-orders" />
          <Endpoint method="POST" path="/api/v1/transfer-orders/{id}/dispatch" />
          <Endpoint method="POST" path="/api/v1/transfer-orders/{id}/receive" />
          <Endpoint method="GET" path="/api/v1/reports/fifo-valuation" />
        </div>
      </section>
    </div>
  );
}
