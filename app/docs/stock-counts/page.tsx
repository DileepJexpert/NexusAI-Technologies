import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stock Counts API — API Docs",
  description: "Create and post physical stock counts, track variances, and reconcile inventory.",
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

export default function StockCountsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Stock Counts</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Perform physical stock counts to reconcile book quantities against actual stock on
        hand. When a stock count is posted, the system automatically creates stock adjustment
        movements for any variances found.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/stock-counts" />
        <Endpoint method="GET" path="/api/v1/stock-counts/{id}" />
        <Endpoint method="POST" path="/api/v1/stock-counts" />
        <Endpoint method="POST" path="/api/v1/stock-counts/{id}/post" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List stock counts</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/stock-counts" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of stock counts. Use standard <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">page</code>,{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">size</code>, and{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">sort</code> parameters for pagination.
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Roles: OWNER, ADMIN, ACCOUNTANT, OPERATOR, VIEWER.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a stock count</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/stock-counts" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a new stock count in DRAFT status. Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code>.
        The system automatically calculates the expected quantity (book stock) and variance
        for each line item.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/stock-counts \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "warehouseId": "d4e5f6a7-b8c9-0123-4567-89abcdef0123",
    "countDate": "2026-06-11",
    "notes": "Monthly physical count — June 2026",
    "lines": [
      {
        "itemId": "550e8400-e29b-41d4-a716-446655440000",
        "countedQuantity": 225,
        "notes": "5 units damaged, set aside"
      },
      {
        "itemId": "661f9500-f3ac-52e5-b827-557766551111",
        "countedQuantity": 48
      }
    ]
  }'`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">warehouseId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Warehouse to count stock in.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">lines</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Line items with counted quantities.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">countDate</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Date of the physical count. Defaults to today.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">notes</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Free-text notes about this count session.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Line item fields</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">itemId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Required. The item being counted.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">countedQuantity</code></td>
              <td className="py-2.5 pr-4">decimal</td>
              <td className="py-2.5">Required. Physical count quantity.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">notes</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Optional notes for this line (e.g., &quot;damaged&quot;).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Post a stock count</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/stock-counts/{id}/post" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Finalizes the stock count and applies variance adjustments. For each line where
        the counted quantity differs from the expected (book) quantity, the system creates
        a stock adjustment movement to bring book stock in line with the physical count.
        Requires OWNER, ADMIN, or ACCOUNTANT role.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The StockCount object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "e5f6a7b8-c9d0-1234-5678-9abcdef01234",
  "countNumber": "SC-2026-0012",
  "warehouseId": "d4e5f6a7-b8c9-0123-4567-89abcdef0123",
  "warehouseName": "Main Store",
  "countDate": "2026-06-11",
  "status": "POSTED",
  "notes": "Monthly physical count — June 2026",
  "postedAt": "2026-06-11T15:30:00Z",
  "lineCount": 2,
  "varianceCount": 1,
  "lines": [
    {
      "id": "f6a7b8c9-d0e1-2345-6789-abcdef012345",
      "itemId": "550e8400-e29b-41d4-a716-446655440000",
      "itemName": "Toor Dal 1kg",
      "sku": "TD-1KG-001",
      "expectedQuantity": 230.00,
      "countedQuantity": 225.00,
      "variance": -5.00,
      "notes": "5 units damaged, set aside"
    },
    {
      "id": "a7b8c9d0-e1f2-3456-789a-bcdef0123456",
      "itemId": "661f9500-f3ac-52e5-b827-557766551111",
      "itemName": "Basmati Rice 5kg",
      "sku": "BR-5KG-P01",
      "expectedQuantity": 48.00,
      "countedQuantity": 48.00,
      "variance": 0.00,
      "notes": null
    }
  ],
  "createdAt": "2026-06-11T14:00:00Z"
}`}</code>
      </pre>
    </>
  );
}
