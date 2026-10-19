import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Boxes,
  ShieldCheck,
  Receipt,
  Layers,
  ArrowDownCircle,
  HelpCircle,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Delivery Challans & Dispatch Guide — Katixo Docs",
  description: `Complete operational guide to Delivery Challans in ${brand.name} ERP: dispatch workflows, FEFO batch selection, stock deduction, and tax invoice conversion.`,
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    DRAFT: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
    DISPATCHED: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    INVOICED: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
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
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function DeliveryChallansPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Sales & Distribution Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Delivery Challans & Warehouse Dispatch
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Delivery Challans (DC) govern the physical movement and dispatch of goods from warehouses before
          or alongside financial invoicing. Learn how to manage dispatches, execute FEFO batch allocations,
          avoid duplicate inventory deductions, and convert challans into GST-compliant tax invoices.
        </p>
      </div>

      {/* 1. What is a Delivery Challan & Why Use It? */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Truck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. What is a Delivery Challan & When to Use It?</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Under <strong>Rule 55 of the Central Goods and Services Tax (CGST) Rules, 2017</strong>, goods can be legally transported
          without an immediate tax invoice using a formal Delivery Challan. In Indian wholesale distribution, pharma logistics,
          and FMCG trade, the Delivery Challan serves critical operational functions:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Warehouse Dispatch
            </h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Goods physically leave the warehouse for transport before customer acceptance or payment confirmation.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Partial Deliveries
            </h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              A large Sales Order (e.g. 100 boxes) can be dispatched across multiple vehicle trips using separate Delivery Challans.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Transit Compliance
            </h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Satisfies statutory road-check requirements and supports e-Way Bill generation with vehicle registration details.
            </p>
          </div>
        </div>

        {/* Challan vs Invoice callout */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300">
          <div className="font-bold flex items-center gap-1.5 mb-1">
            <AlertTriangle className="h-4 w-4" />
            <span>Crucial Invariant: Delivery Challan vs. Tax Invoice</span>
          </div>
          <p>
            In {brand.name}, <strong>Delivery Challan DISPATCH is what deducts physical inventory</strong> (`stock_movement.SALE`)
            and consumes FIFO cost lots. When you subsequently convert a Delivery Challan into a Tax Invoice,
            <strong> inventory is NOT deducted a second time</strong>. The invoice only creates the financial receivables
            entry (`AR 1100`) and books GST liability.
          </p>
        </div>
      </section>

      {/* 2. Step-by-Step Creation Walkthrough */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Create a Delivery Challan (Step-by-Step)</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          There are two standard ways to create a Delivery Challan in Katixo ERP:
        </p>

        <div className="space-y-4">
          {/* Method A */}
          <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Method A: From an Approved Sales Order (Recommended Workflow)
              </h3>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                Standard Distribution Flow
              </span>
            </div>
            <ol className="mt-3 space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
                <div>
                  <strong>Navigate to Sales &gt; Sales Orders:</strong> Open the confirmed or partially dispatched Sales Order.
                </div>
              </li>
              <li className="flex gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
                <div>
                  <strong>Click "Create Delivery Challan":</strong> The system automatically copies customer details, shipping address, place of supply, and remaining un-dispatched quantities for each line.
                </div>
              </li>
              <li className="flex gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
                <div>
                  <strong>Adjust Dispatched Quantities & Select Batches:</strong> If executing a partial dispatch, reduce quantities. For batch-tracked items, click <em>Select Batches</em> or use <em>Auto-Pick FEFO</em> to allocate stock from the nearest-expiry batch.
                </div>
              </li>
              <li className="flex gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
                <div>
                  <strong>Enter Transport Details:</strong> Specify vehicle registration number (e.g. MH-12-AB-1234), transporter name, and driver contact number for e-Way bill compliance.
                </div>
              </li>
              <li className="flex gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">5</span>
                <div>
                  <strong>Save as DRAFT:</strong> Review lines, batches, and delivery instructions. At this stage, warehouse stock is NOT yet deducted.
                </div>
              </li>
            </ol>
          </div>

          {/* Method B */}
          <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Method B: Standalone Delivery Challan (Direct Dispatch)
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Used when dispatching promotional samples, demo equipment, job-work items, or direct ad-hoc deliveries without a prior Sales Order.
            </p>
            <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <p>1. Go to <strong>Sales &gt; Delivery Challans</strong> and click <strong>"New Delivery Challan"</strong>.</p>
              <p>2. Select the Customer Contact and Dispatch Warehouse.</p>
              <p>3. Add items manually, specify quantities, and select batch lots from available warehouse rack balances.</p>
              <p>4. Save the challan in <StatusBadge status="DRAFT" /> state.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dispatching & Stock Deduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Boxes className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Dispatch Execution & Stock Deduction</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          When goods are physically loaded onto the truck, warehouse managers click the <strong>"Dispatch"</strong> button.
          This initiates atomic backend validations:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02] space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Strict Stock Validation:</strong> The server acquires a pessimistic write lock on the item and batch balance rows. If warehouse stock is insufficient, the dispatch is aborted with <code className="text-rose-600">DC_INSUFFICIENT_STOCK</code>.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Inventory Movement Recording:</strong> Inserts an immutable <code className="text-blue-600">stock_movement</code> of type <code className="text-blue-600">SALE</code> referencing the challan number.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>FIFO Cost Lot Consumption:</strong> Automatically draws cost from active FIFO lots (`cost_lot_consumption`) and computes the exact blended COGS cost basis for the dispatch.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Status Update:</strong> The challan transitions to <StatusBadge status="DISPATCHED" /> and locks line edits.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Converting to Sales Invoice */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Receipt className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>4. Converting Challan to Sales Invoice</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Once the customer receives the goods and signs the physical delivery slip, the challan is converted
          into a final GST Tax Invoice.
        </p>

        <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
            <span className="rounded bg-emerald-100 p-1 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              <ArrowDownCircle className="h-4 w-4" />
            </span>
            <span>How to Convert:</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Open the dispatched Delivery Challan and click <strong>"Convert to Invoice"</strong>.
            You can invoice the full challan or adjust quantities if the customer rejected damaged units.
          </p>
          <div className="rounded-lg bg-slate-50 p-3 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-400">
            <strong>Accounting Journal Created on Invoice:</strong>
            <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px]">
              <li><strong>DEBIT:</strong> Accounts Receivable (1100) — [Gross Total with GST]</li>
              <li><strong>CREDIT:</strong> Sales Revenue (4000) — [Taxable Amount]</li>
              <li><strong>CREDIT:</strong> Output CGST / SGST / IGST — [Tax Amount]</li>
              <li><strong>DEBIT:</strong> Cost of Goods Sold (5000) / <strong>CREDIT:</strong> Inventory Asset (1200) — [Inherited from DC dispatched FIFO cost]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Complete Status Lifecycle */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>5. Lifecycle States & Allowed Actions</span>
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 dark:bg-white/5 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold">
              <tr>
                <th className="p-3">Status</th>
                <th className="p-3">Meaning</th>
                <th className="p-3">Stock Impact</th>
                <th className="p-3">Allowed Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-400">
              <tr>
                <td className="p-3"><StatusBadge status="DRAFT" /></td>
                <td className="p-3">Created by sales/warehouse operator; under packing.</td>
                <td className="p-3">None (Stock is still free in warehouse)</td>
                <td className="p-3">Edit lines, Change batches, Delete, Dispatch</td>
              </tr>
              <tr>
                <td className="p-3"><StatusBadge status="DISPATCHED" /></td>
                <td className="p-3">Vehicle has departed warehouse; goods in transit.</td>
                <td className="p-3 font-semibold text-rose-600">Deducted from warehouse batch balance</td>
                <td className="p-3">Print Challan PDF, Convert to Invoice, Cancel</td>
              </tr>
              <tr>
                <td className="p-3"><StatusBadge status="INVOICED" /></td>
                <td className="p-3">Final Tax Invoice has been generated and booked to AR.</td>
                <td className="p-3">Already deducted by DC (No duplicate movement)</td>
                <td className="p-3">View linked Invoice, Print PDF</td>
              </tr>
              <tr>
                <td className="p-3"><StatusBadge status="CANCELLED" /></td>
                <td className="p-3">Order cancelled before or after dispatch.</td>
                <td className="p-3">If cancelled after dispatch, stock is returned to warehouse</td>
                <td className="p-3">Audit trail only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Programmatically automate dispatches from warehouse management systems (WMS) or mobile barcode scanners:
        </p>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/delivery-challans" />
          <Endpoint method="GET" path="/api/v1/delivery-challans/{id}" />
          <Endpoint method="POST" path="/api/v1/delivery-challans" />
          <Endpoint method="POST" path="/api/v1/delivery-challans/{id}/dispatch" />
          <Endpoint method="POST" path="/api/v1/delivery-challans/{id}/convert-to-invoice" />
          <Endpoint method="GET" path="/api/v1/delivery-challans/{id}/pdf" />
        </div>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs font-mono text-slate-200">
          <code>{`# Dispatch a delivery challan via cURL
curl -X POST https://api.katixo.com/api/v1/delivery-challans/b4a2c1d0-1111-2222-3333-444455556666/dispatch \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
        </pre>
      </section>
    </div>
  );
}
