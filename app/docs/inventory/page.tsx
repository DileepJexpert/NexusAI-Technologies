import type { Metadata } from "next";

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
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Batches &amp; Stock</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Query batch-level stock for items with batch tracking enabled. Track expiry dates,
        find near-expiry stock, and check available quantities per batch. Batch tracking
        requires the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">BATCH_EXPIRY</code> module
        to be enabled for your organization.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/batches/item/{itemId}" />
        <Endpoint method="GET" path="/api/v1/batches/item/{itemId}/available" />
        <Endpoint method="GET" path="/api/v1/batches/near-expiry" />
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
    </>
  );
}
