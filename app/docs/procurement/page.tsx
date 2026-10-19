import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Boxes,
  Truck,
  Receipt,
  Layers,
  FileCheck,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Procurement & GRN Guide — Katixo Docs",
  description: `Complete guide to purchasing, Goods Receipt Notes (GRN), batch ingestion, rack location assignment, and 3-way matching in ${brand.name} ERP.`,
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    DRAFT: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
    PENDING_APPROVAL: "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
    APPROVED: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    ISSUED: "bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
    PARTIALLY_RECEIVED: "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
    RECEIVED: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
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
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function ProcurementPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Purchasing & Inbound Warehousing Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Purchase Orders & Goods Receipt (GRN)
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Master the complete Procure-to-Pay (P2P) lifecycle in {brand.name}. Convert stock shortages
          into supplier purchase orders, perform inbound physical inspections with Goods Receipt Notes (GRN),
          capture batches and expiry dates, assign warehouse racks, and verify supplier invoices with 3-way matching.
        </p>
      </div>

      {/* 1. What is the Procurement & GRN Module? */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ClipboardCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: The Procure-to-Pay (P2P) Pipeline</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          In wholesale distribution, retail chains, and manufacturing enterprises, procurement controls the
          business&apos;s largest cash outflows and guarantees inventory availability. In Katixo ERP, purchasing
          is organized into three tightly-governed operational stages:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">Stage 1</span>
            <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">Purchase Order (PO)</h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Commercial contract sent to the supplier specifying agreed items, quantities, negotiated rates, and delivery due dates.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">Stage 2</span>
            <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">Goods Receipt Note (GRN)</h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Physical inspection at warehouse unloading. Captures supplier batches, expiry dates, rack locations, and updates stock balances.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">Stage 3</span>
            <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white">3-Way Match & Bill</h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Audits PO prices vs GRN accepted quantities vs Supplier Bill before booking liability in Accounts Payable (AP 2000).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step: Creating a Purchase Order */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Create a Purchase Order (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Go to Procurement &gt; Purchase Orders &gt; Click "New Purchase Order":</strong>
                Select the supplier from your contact directory. Katixo automatically fetches the supplier&apos;s GSTIN, state code, and default payment terms (e.g. Net 30, Net 45).
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Select Receiving Warehouse & Expected Date:</strong>
                Choose the destination warehouse or branch where goods should be delivered. Set the expected delivery date for supplier lead time tracking.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Add Item Lines & Negotiated Purchase Rates:</strong>
                Search items by name, SKU, or barcode. Enter ordered quantities and unit purchase rates. The system verifies HSN codes and applies the correct GST percentage automatically.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Approval Routing (Governance):</strong>
                If your organization has configured multi-level approval workflows (e.g., POs over ₹50,000 require Manager approval), clicking <em>Submit</em> moves the PO to <StatusBadge status="PENDING_APPROVAL" />. Once approved, the PO enters <StatusBadge status="APPROVED" />.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">5</span>
              <div>
                <strong>Issue to Supplier:</strong>
                Click <em>"Issue PO"</em> to generate the legal PO document. Send it to the vendor with one click via WhatsApp or PDF email. Status updates to <StatusBadge status="ISSUED" />.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Inbound Inspection & GRN Workflow */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Truck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Physical Inbound Receiving: The Goods Receipt Note (GRN)</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          When the supplier&apos;s truck arrives at the warehouse loading bay, warehouse staff create a Goods Receipt Note (GRN) to inspect incoming goods:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.02] space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 text-xs">
            <div className="rounded-lg bg-white p-3.5 border border-slate-200 dark:bg-white/5 dark:border-white/5">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Quality Inspection</span>
              <p className="text-slate-600 dark:text-slate-400">
                Staff enter <strong>Received Quantity</strong>, <strong>Accepted Quantity</strong>, and <strong>Rejected Quantity</strong>. Damaged or near-expiry packs are immediately flagged and set aside.
              </p>
            </div>
            <div className="rounded-lg bg-white p-3.5 border border-slate-200 dark:bg-white/5 dark:border-white/5">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Batch & Expiry Ingestion</span>
              <p className="text-slate-600 dark:text-slate-400">
                For batch-tracked items (pharma, FMCG, packaged foods), staff input the manufacturer <strong>Batch Number</strong>, <strong>Manufacturing Date (MFG)</strong>, and <strong>Expiry Date (EXP)</strong>.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-3.5 border border-slate-200 dark:bg-white/5 dark:border-white/5 text-xs">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Rack Location Tagging</span>
            <p className="text-slate-600 dark:text-slate-400">
              Assign warehouse rack coordinates (e.g. Rack B-02, Shelf 3) so pickers can instantly locate items during order dispatch.
            </p>
          </div>

          <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200 text-xs text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800/50 dark:text-emerald-300">
            <div className="font-bold flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="h-4 w-4" />
              <span>What Happens When You Click "Receive Stock"?</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
              <li>Creates active stock balances in <code className="font-semibold">stock_batch_balance</code> and <code className="font-semibold">stock_balance</code>.</li>
              <li>Opens a new FIFO cost lot (<code className="font-semibold">cost_lot</code>) with the landed unit cost for FIFO valuation.</li>
              <li>Recalculates the item&apos;s weighted average purchase cost.</li>
              <li>Updates the PO&apos;s received quantity counter; transitions PO to <StatusBadge status="PARTIALLY_RECEIVED" /> or <StatusBadge status="RECEIVED" />.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 3-Way Matching Engine */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>4. 3-Way Matching & Purchase Bill Conversion</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Before paying the supplier, Katixo&apos;s <strong>3-Way Matching Engine</strong> cross-audits the three critical documents:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 dark:bg-white/5 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold">
              <tr>
                <th className="p-3">Audit Leg</th>
                <th className="p-3">Source Document</th>
                <th className="p-3">Validation Rule</th>
                <th className="p-3">Anti-Fraud Protection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-400">
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-white">Quantity Match</td>
                <td className="p-3">GRN Received Quantity</td>
                <td className="p-3">Billed Qty ≤ Inspected & Accepted Qty</td>
                <td className="p-3 text-emerald-700 dark:text-emerald-400">Prevents paying for damaged or short shipments</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-white">Price Match</td>
                <td className="p-3">Purchase Order Rate</td>
                <td className="p-3">Supplier Invoice Rate == Agreed PO Rate</td>
                <td className="p-3 text-emerald-700 dark:text-emerald-400">Flags unapproved price hikes or unauthorized surcharges</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-white">Tax Rate Match</td>
                <td className="p-3">Item Master HSN</td>
                <td className="p-3">GST Rate == Statutory HSN Rate (5%, 12%, 18%)</td>
                <td className="p-3 text-emerald-700 dark:text-emerald-400">Guarantees eligible Input Tax Credit (ITC) under GSTR-2B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Purchase Order Lifecycle States */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>5. Complete Lifecycle & Status Transitions</span>
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 dark:bg-white/5 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold">
              <tr>
                <th className="p-3">PO Status</th>
                <th className="p-3">Meaning</th>
                <th className="p-3">Inventory State</th>
                <th className="p-3">Next Step</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-400">
              <tr>
                <td className="p-3"><StatusBadge status="DRAFT" /></td>
                <td className="p-3">PO being drafted by purchase officer.</td>
                <td className="p-3">No stock change</td>
                <td className="p-3">Submit for approval or issue</td>
              </tr>
              <tr>
                <td className="p-3"><StatusBadge status="PENDING_APPROVAL" /></td>
                <td className="p-3">Value exceeds threshold; awaiting manager approval.</td>
                <td className="p-3">No stock change</td>
                <td className="p-3">Manager Approve or Reject</td>
              </tr>
              <tr>
                <td className="p-3"><StatusBadge status="ISSUED" /></td>
                <td className="p-3">Sent to supplier; shipment in transit.</td>
                <td className="p-3">Inbound pipeline expected</td>
                <td className="p-3">Create GRN when goods arrive</td>
              </tr>
              <tr>
                <td className="p-3"><StatusBadge status="PARTIALLY_RECEIVED" /></td>
                <td className="p-3">Partial shipment received at warehouse.</td>
                <td className="p-3 font-semibold text-blue-600">Partial batches received into stock</td>
                <td className="p-3">Receive remaining shipment</td>
              </tr>
              <tr>
                <td className="p-3"><StatusBadge status="RECEIVED" /></td>
                <td className="p-3">Full order received and inspected.</td>
                <td className="p-3 font-semibold text-emerald-600">All stock active in warehouse & FIFO lots</td>
                <td className="p-3">Convert to Purchase Bill (AP)</td>
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
          Programmatically create POs, trigger stock receipts, or query 3-way match status via REST:
        </p>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/purchase-orders" />
          <Endpoint method="POST" path="/api/v1/purchase-orders" />
          <Endpoint method="POST" path="/api/v1/purchase-orders/{id}/approve" />
          <Endpoint method="POST" path="/api/v1/stock-receipts" />
          <Endpoint method="POST" path="/api/v1/stock-receipts/{id}/receive" />
          <Endpoint method="GET" path="/api/v1/three-way-match/{poId}" />
        </div>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs font-mono text-slate-200">
          <code>{`# Receive stock with batches and rack assignment via cURL
curl -X POST https://api.katixo.com/api/v1/stock-receipts/c8a1b2-1111/receive \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "items": [
      {
        "itemId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        "batchNumber": "BN-2026-X9",
        "expiryDate": "2028-06-30",
        "receivedQuantity": 100,
        "rackLocationId": "r1a2b3-9999"
      }
    ]
  }'`}</code>
        </pre>
      </section>
    </div>
  );
}
