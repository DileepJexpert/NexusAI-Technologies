import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Items API — API Docs",
  description: "Manage your product and service catalog — HSN codes, tax rates, units, and pricing.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PATCH: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function ItemsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Items</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Items represent products and services in your catalog. Each item carries its HSN/SAC code,
        tax rate, unit of measurement, and pricing — so invoices and inventory are computed correctly
        without manual entry at billing time.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/items" />
        <Endpoint method="POST" path="/v1/items" />
        <Endpoint method="GET" path="/v1/items/:id" />
        <Endpoint method="PATCH" path="/v1/items/:id" />
        <Endpoint method="DELETE" path="/v1/items/:id" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The Item object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "itm_x9y8z7",
  "name": "Toor Dal",
  "sku": "TD-1KG-001",
  "hsn_code": "07139090",
  "type": "goods",
  "tax_rate": 500,
  "unit": "KG",
  "purchase_unit": "BAG",
  "conversion_factor": 25,
  "selling_price": 14500,
  "purchase_price": 11000,
  "track_inventory": true,
  "batch_tracking": false,
  "expiry_tracking": true,
  "low_stock_threshold": 50,
  "current_stock": 230,
  "barcode": "8901234567890",
  "category": "Pulses",
  "active": true,
  "created_at": "2026-01-15T09:00:00+05:30",
  "updated_at": "2026-06-10T14:22:00+05:30"
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Key fields</h2>
      <div className="mt-4 overflow-x-auto">
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
              <td className="py-2.5 pr-4"><code className="text-xs">hsn_code</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">HSN code (goods) or SAC code (services) for GST classification.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">tax_rate</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5">GST rate in basis points. 500 = 5%, 1200 = 12%, 1800 = 18%.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">unit</code> / <code className="text-xs">purchase_unit</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Sale and purchase units. Use <code className="text-xs">conversion_factor</code> to define the ratio (e.g., 1 BAG = 25 KG).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">track_inventory</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5">When true, sales and purchases automatically adjust stock levels.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">batch_tracking</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5">Enable batch-wise stock tracking (required for pharmaceuticals).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">expiry_tracking</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5">Track expiry dates per batch. Enables near-expiry alerts.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create an item</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/items" />
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/items \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Basmati Rice Premium",
    "sku": "BR-5KG-P01",
    "hsn_code": "10063020",
    "type": "goods",
    "tax_rate": 500,
    "unit": "KG",
    "purchase_unit": "BAG",
    "conversion_factor": 25,
    "selling_price": 28500,
    "purchase_price": 22000,
    "track_inventory": true,
    "expiry_tracking": false,
    "low_stock_threshold": 100,
    "barcode": "8901234567906",
    "category": "Rice"
  }'`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List items</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/items" />
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Query parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">search</code></td>
              <td className="py-2.5">Search by name, SKU, or barcode.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">category</code></td>
              <td className="py-2.5">Filter by category name.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">type</code></td>
              <td className="py-2.5">Filter by <code className="text-xs">goods</code> or <code className="text-xs">services</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">active</code></td>
              <td className="py-2.5">Filter by active status (true/false).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">low_stock</code></td>
              <td className="py-2.5">When <code className="text-xs">true</code>, returns only items below their low stock threshold.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">page</code>, <code className="text-xs">per_page</code></td>
              <td className="py-2.5">Pagination (default: 25 per page, max: 100).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
