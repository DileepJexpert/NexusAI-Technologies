import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory API — API Docs",
  description: "Stock levels, batch tracking, adjustments, and inter-location transfers via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PATCH: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
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
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Inventory</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Query real-time stock levels, create manual adjustments, and manage batch and expiry tracking.
        Stock is updated automatically when invoices and purchase entries are created — the endpoints
        here are for querying current state and making corrections.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/inventory" />
        <Endpoint method="GET" path="/v1/inventory/:item_id" />
        <Endpoint method="GET" path="/v1/inventory/:item_id/batches" />
        <Endpoint method="POST" path="/v1/inventory/adjustments" />
        <Endpoint method="GET" path="/v1/inventory/adjustments" />
        <Endpoint method="POST" path="/v1/inventory/transfers" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Stock summary</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/inventory" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns stock levels for all inventory-tracked items. Supports filtering by location, category,
        and low-stock status.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "data": [
    {
      "item_id": "itm_x9y8z7",
      "item_name": "Toor Dal",
      "sku": "TD-1KG-001",
      "unit": "KG",
      "current_stock": 230,
      "reserved_stock": 15,
      "available_stock": 215,
      "low_stock_threshold": 50,
      "is_low_stock": false,
      "stock_value": 2530000,
      "location": "loc_main"
    }
  ],
  "page": 1,
  "per_page": 25,
  "total": 142
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Batch tracking</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/inventory/:item_id/batches" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        For items with batch tracking enabled, returns stock broken down by batch number with
        manufacturing date, expiry date, and remaining quantity.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "item_id": "itm_m3d1c1n",
  "item_name": "Paracetamol 500mg",
  "batches": [
    {
      "batch_number": "PCM-2026-A01",
      "manufacturing_date": "2026-01-15",
      "expiry_date": "2028-01-14",
      "quantity": 500,
      "purchase_rate": 120,
      "location": "loc_main"
    },
    {
      "batch_number": "PCM-2025-K12",
      "manufacturing_date": "2025-11-01",
      "expiry_date": "2027-10-31",
      "quantity": 120,
      "purchase_rate": 115,
      "location": "loc_main",
      "near_expiry": true
    }
  ]
}`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Items are flagged as <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">near_expiry: true</code> when
        they are within 90 days of expiration (configurable per item).
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Stock adjustments</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/inventory/adjustments" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Record manual stock corrections for damage, shrinkage, expiry write-offs, or count discrepancies.
        Every adjustment creates an audit trail entry.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/inventory/adjustments \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "items": [
      {
        "item_id": "itm_x9y8z7",
        "quantity": -5,
        "batch_number": null,
        "reason": "damage"
      },
      {
        "item_id": "itm_m3d1c1n",
        "quantity": -120,
        "batch_number": "PCM-2025-K12",
        "reason": "expiry"
      }
    ],
    "adjustment_date": "2026-06-11",
    "notes": "Monthly stock audit — June 2026"
  }'`}</code>
      </pre>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Adjustment reasons</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Reason</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Accounting treatment</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">damage</code></td>
              <td className="py-2.5">Posted to &quot;Stock Written Off — Damage&quot; expense ledger.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">expiry</code></td>
              <td className="py-2.5">Posted to &quot;Stock Written Off — Expiry&quot; expense ledger.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">count_correction</code></td>
              <td className="py-2.5">Positive or negative. Posted to &quot;Stock Adjustment&quot; account.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">pilferage</code></td>
              <td className="py-2.5">Posted to &quot;Stock Written Off — Pilferage&quot; expense ledger.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">opening_stock</code></td>
              <td className="py-2.5">Used during initial setup. Posted to opening balance equity.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Stock transfers</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/inventory/transfers" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Move stock between locations (e.g., warehouse to shop floor). Transfers deduct from the source
        location and add to the destination. If batch tracking is enabled, specify the batch number.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/inventory/transfers \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from_location": "loc_warehouse",
    "to_location": "loc_shop",
    "items": [
      {
        "item_id": "itm_x9y8z7",
        "quantity": 50
      }
    ],
    "transfer_date": "2026-06-11",
    "notes": "Weekly shop replenishment"
  }'`}</code>
      </pre>
    </>
  );
}
