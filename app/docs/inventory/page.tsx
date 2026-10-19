import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Batches & Stock API — API Docs",
  description: "Batch tracking, expiry alerts, and available stock queries via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function InventoryPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Inventory & Warehousing Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Batches, Expiry &amp; FEFO Inventory Management
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Master batch traceability, First-Expiry, First-Out (FEFO) auto-picking, cold-chain shelf-life tracking,
          and supplier return settlements in {brand.name}. Built for pharmaceuticals, packaged foods, and FMCG.
        </p>
      </div>

      {/* 1. Module Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          1. Module Overview: Why Batch &amp; Expiry Tracking is Critical
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          In pharmaceuticals (under CDSCO Drug Rules) and packaged foods (under FSSAI regulations), selling or
          holding expired inventory is illegal and triggers severe penalties. Katixo provides complete lot-level traceability:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">FEFO Dispatch Logic</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Dispatches automatically draw from the batch closest to expiration, preventing aged inventory accumulation.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Near-Expiry Alerts</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Proactively highlights lots reaching 30, 60, or 90 days to expiration with one-click supplier return drafting.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Batch-Level Audit</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Granular tracking of which customer received which batch number for rapid manufacturer recalls.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step UI Guide */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2. How to Manage Batches (Step-by-Step UI Guide)
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Enable Batch Tracking on Items:</strong>
                When creating or editing an item in <strong>Inventory &gt; Items</strong>, check the box <em>"Track Batches &amp; Expiry"</em>.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Capture Batches at Goods Receipt (GRN):</strong>
                When goods arrive from a supplier, enter the manufacturer Batch Number, Manufacturing Date (MFG), and Expiry Date (EXP) on the Goods Receipt Note. Stock is activated in <code className="text-blue-600">stock_batch_balance</code>.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>FEFO Picking During Dispatch:</strong>
                During Delivery Challan or POS invoice creation, Katixo automatically prioritizes batches expiring earliest. Warehouse staff can override selection if customers request specific manufacturing dates.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Near-Expiry Supplier Returns:</strong>
                Open the <strong>Near Expiry Dashboard</strong>, filter by days to expiry, and select slow-moving batches to generate an automated Debit Note return to the manufacturer.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Developer Reference Heading */}
      <div className="border-t border-slate-200 pt-8 dark:border-white/10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Developer &amp; REST API Reference
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Programmatically query item batches, available quantities, and near-expiry lots:
        </p>

        <div className="mt-4 space-y-2">
          <Endpoint method="GET" path="/api/v1/batches/item/{itemId}" />
          <Endpoint method="GET" path="/api/v1/batches/item/{itemId}/available" />
          <Endpoint method="GET" path="/api/v1/batches/near-expiry" />
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get batches by item</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/batches/item/{itemId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all batches for a specific item, including batch number, manufacturing date,
        expiry date, and current quantity on hand.
      </p>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Path parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">itemId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">The item to query batches for.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/batches/item/550e8400-e29b-41d4-a716-446655440000 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Batches retrieved",
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "batchNumber": "PCM-2026-A01",
      "itemId": "550e8400-e29b-41d4-a716-446655440000",
      "itemName": "Paracetamol 500mg",
      "manufacturingDate": "2026-01-15",
      "expiryDate": "2028-01-14",
      "quantityOnHand": 500.00,
      "purchaseRate": 1.20,
      "warehouseId": "d4e5f6a7-b8c9-0123-4567-89abcdef0123",
      "warehouseName": "Main Store"
    },
    {
      "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "batchNumber": "PCM-2025-K12",
      "itemId": "550e8400-e29b-41d4-a716-446655440000",
      "itemName": "Paracetamol 500mg",
      "manufacturingDate": "2025-11-01",
      "expiryDate": "2027-10-31",
      "quantityOnHand": 120.00,
      "purchaseRate": 1.15,
      "warehouseId": "d4e5f6a7-b8c9-0123-4567-89abcdef0123",
      "warehouseName": "Main Store"
    }
  ],
  "errors": null
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Available batches</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/batches/item/{itemId}/available" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns only batches with available stock (quantity &gt; 0) and not expired.
        Useful for billing workflows where you need to select a batch to sell from.
        Results are sorted by expiry date (FEFO — First Expiry, First Out).
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/batches/item/550e8400-...440000/available \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Near-expiry batches</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/batches/near-expiry" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all batches across all items that are approaching their expiry date.
        The near-expiry threshold is configurable per organization (default: 90 days).
      </p>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Query parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Page number (0-indexed). Default: 0.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">size</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Page size. Default: 20.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">sort</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Sort field and direction (e.g., <code className="text-xs">expiryDate,asc</code>).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/api/v1/batches/near-expiry?size=10" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Near-expiry batches retrieved",
  "data": {
    "content": [
      {
        "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        "batchNumber": "PCM-2025-K12",
        "itemId": "550e8400-e29b-41d4-a716-446655440000",
        "itemName": "Paracetamol 500mg",
        "expiryDate": "2027-10-31",
        "daysToExpiry": 45,
        "quantityOnHand": 120.00,
        "warehouseName": "Main Store"
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 8,
    "totalPages": 1,
    "last": true
  },
  "errors": null
}`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Use this endpoint to proactively identify stock that needs to be sold, returned, or written off
        before expiry. Particularly important for pharmacy and FMCG businesses.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Authorization</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All batch endpoints require at minimum the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">VIEWER</code> role.
        The <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">BATCH_EXPIRY</code> module must
        be enabled for the organization, and individual items must have <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">trackBatches: true</code>.
      </p>
    </div>
  );
}
