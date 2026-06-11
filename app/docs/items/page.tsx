import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Items API — API Docs",
  description: `Manage your product and service catalog in ${brand.name} — HSN codes, GST rates, units, pricing, BOM, and CSV import.`,
};

function Endpoint({ method, path, badge }: { method: string; path: string; badge?: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
      {badge && (
        <span className="ml-auto rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
          {badge}
        </span>
      )}
    </div>
  );
}

function RoleBadge({ roles }: { roles: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {roles.map((r) => (
        <span
          key={r}
          className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-400"
        >
          {r}
        </span>
      ))}
    </div>
  );
}

export default function ItemsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Items</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Items represent products, services, and composite goods in your {brand.name} catalog.
        Each item carries its HSN/SAC code, GST rate, unit of measurement, pricing, and
        optional pharmacy fields &mdash; so invoices and inventory are computed correctly
        without manual entry at billing time.
      </p>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Module gate:</strong> All item endpoints require the{" "}
        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-800/40">INVENTORY</code>{" "}
        module to be enabled for your organization (<code className="text-xs">@RequiresModule(INVENTORY)</code>).
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/items" badge="all roles" />
        <Endpoint method="GET" path="/api/v1/items/{id}" badge="all roles" />
        <Endpoint method="POST" path="/api/v1/items" badge="201 Created" />
        <Endpoint method="PUT" path="/api/v1/items/{id}" />
        <Endpoint method="DELETE" path="/api/v1/items/{id}" />
        <Endpoint method="GET" path="/api/v1/items/import/template" badge="text/csv" />
        <Endpoint method="POST" path="/api/v1/items/import" badge="multipart" />
        <Endpoint method="POST" path="/api/v1/items/{id}/bom" />
        <Endpoint method="DELETE" path="/api/v1/items/bom/{componentId}" />
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Authentication</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All requests require a JWT Bearer token in the{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Authorization</code> header.
        See the <a href="/docs/authentication" className="text-blue-600 underline dark:text-blue-400">Authentication</a> guide
        for details on obtaining tokens.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`Authorization: Bearer eyJhbGciOiJIUzI1NiIs...`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Response envelope</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Every response is wrapped in an <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;T&gt;</code> envelope:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Item created successfully",
  "data": { ... },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">ItemType enum</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {["GOODS", "SERVICE", "COMPOSITE"].map((t) => (
          <code
            key={t}
            className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300"
          >
            {t}
          </code>
        ))}
      </div>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        <code className="text-xs">COMPOSITE</code> items have a Bill of Materials (BOM) &mdash; see the BOM
        endpoints below.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The ItemResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "d4f7a1b2-9c3e-4f8a-b6d5-1e2f3a4b5c6d",
  "sku": "TD-1KG-001",
  "barcode": "8901234567890",
  "name": "Toor Dal",
  "description": "Premium unpolished toor dal, sourced from Latur, Maharashtra",
  "itemType": "GOODS",
  "category": "Pulses",
  "brand": "Laxmi Bhog",
  "manufacturer": "Laxmi Foods Pvt Ltd",
  "hsnCode": "07139090",
  "unitOfMeasure": "KG",
  "purchasePrice": 110.00,
  "salePrice": 145.00,
  "mrp": 160.00,
  "gstRate": 5.00,
  "trackInventory": true,
  "trackBatches": false,
  "reorderLevel": 50,
  "reorderQuantity": 200,
  "preferredVendorId": "a1b2c3d4-5678-9abc-def0-123456789abc",
  "preferredVendorName": "Maharashtra Pulses Trading Co.",
  "active": true,
  "totalOnHand": 230.00,
  "createdAt": "2026-01-15T03:30:00Z",
  "secondaryUnits": [
    {
      "uomAbbreviation": "BAG",
      "conversionFactor": 25.0,
      "customPrice": 2750.00
    }
  ]
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
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
              <td className="py-2.5 pr-4"><code className="text-xs">id</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Unique identifier for the item.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">sku</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Stock keeping unit. Required, max 50 characters, must be unique.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">itemType</code></td>
              <td className="py-2.5 pr-4">ItemType</td>
              <td className="py-2.5">One of <code className="text-xs">GOODS</code>, <code className="text-xs">SERVICE</code>, or <code className="text-xs">COMPOSITE</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">hsnCode</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">HSN code (goods) or SAC code (services) for GST classification.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">gstRate</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">GST rate as a percentage (e.g., <code className="text-xs">5.00</code>, <code className="text-xs">12.00</code>, <code className="text-xs">18.00</code>). Min 0.00.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">unitOfMeasure</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Primary unit of measurement (e.g., KG, PCS, LTR, BOX).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">trackInventory</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5">When true, sales and purchases automatically adjust stock levels.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">trackBatches</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5">Enable batch-wise stock tracking (required for pharmaceuticals).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">totalOnHand</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Current total stock on hand across all warehouses.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">secondaryUnits</code></td>
              <td className="py-2.5 pr-4">List&lt;UnitPriceInfo&gt;</td>
              <td className="py-2.5">Alternate units with conversion factors and optional custom prices.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">preferredVendorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Preferred supplier for reorder suggestions.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List items</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/items" />
      </div>
      <RoleBadge roles={["OWNER", "ADMIN", "ACCOUNTANT", "OPERATOR", "VIEWER"]} />

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
              <td className="py-2.5 pr-4"><code className="text-xs">search</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Search by name, SKU, or barcode.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">activeOnly</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5">When <code className="text-xs">true</code>, returns only active items.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5">Page number (zero-based). Default: 0.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">size</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5">Page size. Default: 20.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">sort</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Sort field and direction (e.g., <code className="text-xs">name,asc</code> or <code className="text-xs">createdAt,desc</code>).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/api/v1/items?search=paracetamol&activeOnly=true&page=0&size=10&sort=name,asc" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Paginated response</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;PagedResponse&lt;ItemResponse&gt;&gt;</code>:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Items retrieved successfully",
  "data": {
    "content": [
      {
        "id": "d4f7a1b2-9c3e-4f8a-b6d5-1e2f3a4b5c6d",
        "sku": "PARA-500-STRIP",
        "name": "Paracetamol 500mg Strip",
        "itemType": "GOODS",
        "hsnCode": "30049099",
        "salePrice": 32.50,
        "gstRate": 12.00,
        "active": true,
        "totalOnHand": 540.00
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 47,
    "totalPages": 5,
    "last": false
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get item by ID</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/items/{id}" />
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/items/d4f7a1b2-9c3e-4f8a-b6d5-1e2f3a4b5c6d \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;ItemResponse&gt;</code> with
        the full item object including <code className="text-xs">secondaryUnits</code> and vendor details.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create an item</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/items" badge="201 Created" />
      </div>
      <RoleBadge roles={["OWNER", "ADMIN", "ACCOUNTANT", "OPERATOR"]} />
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Send a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CreateItemRequest</code> body.
        Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> on success.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/items \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "sku": "BR-5KG-P01",
    "name": "Basmati Rice Premium",
    "itemType": "GOODS",
    "hsnCode": "10063020",
    "category": "Rice",
    "brand": "Daawat",
    "manufacturer": "LT Foods Ltd",
    "barcode": "8901058853100",
    "unitOfMeasure": "KG",
    "purchasePrice": 220.00,
    "salePrice": 285.00,
    "mrp": 320.00,
    "gstRate": 5.00,
    "trackInventory": true,
    "trackBatches": false,
    "reorderLevel": 100,
    "reorderQuantity": 500,
    "preferredVendorId": "b7d2f8a0-1234-4567-89ab-cdef01234567",
    "secondaryUnits": [
      {
        "uomAbbreviation": "BAG",
        "conversionFactor": 25.0,
        "customPrice": 5500.00
      }
    ],
    "openingStock": 150,
    "purchaseUom": "BAG",
    "purchaseUomConversion": 25.0,
    "purchasePricePerUom": 5200.00
  }'`}</code>
      </pre>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">CreateItemRequest fields</h3>
      <div className="mt-3 overflow-x-auto">
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
              <td className="py-2.5 pr-4"><code className="text-xs">sku</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Max 50 chars. Must be unique within the organization.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">name</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Max 255 chars. Display name for the item.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">itemType</code></td>
              <td className="py-2.5 pr-4">ItemType</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5"><code className="text-xs">GOODS</code>, <code className="text-xs">SERVICE</code>, or <code className="text-xs">COMPOSITE</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">hsnCode</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">HSN (goods) or SAC (services) code.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">category</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Item category (e.g., Pulses, Electronics, Pharmaceuticals).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">brand</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Brand or label name.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">barcode</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">EAN-13, UPC, or custom barcode.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">manufacturer</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Manufacturer or producer name.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">unitOfMeasure</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Primary UOM (e.g., KG, PCS, LTR, BOX, STRIP).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">purchasePrice</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Default purchase price per primary unit.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">salePrice</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Default sale price per primary unit.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">mrp</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Maximum retail price (for labeling compliance).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">gstRate</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">GST rate as percentage. Min <code className="text-xs">0.00</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">trackInventory</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Auto-adjust stock on sales/purchases.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">trackBatches</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Batch-wise tracking (batch number + expiry).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">reorderLevel</code></td>
              <td className="py-2.5 pr-4">number</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Low-stock alert threshold.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">reorderQuantity</code></td>
              <td className="py-2.5 pr-4">number</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Suggested quantity for purchase orders.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">preferredVendorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Preferred vendor for reorder suggestions.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">secondaryUnits</code></td>
              <td className="py-2.5 pr-4">List&lt;UnitPriceEntry&gt;</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Alternate units. Each entry has <code className="text-xs">uomAbbreviation</code>, <code className="text-xs">conversionFactor</code>, and optional <code className="text-xs">customPrice</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">purchaseUom</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Purchase unit (e.g., BAG, CASE, DRUM).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">purchaseUomConversion</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">How many primary units in one purchase unit (e.g., 1 BAG = 25 KG).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">purchasePricePerUom</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Price per purchase unit.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">openingStock</code></td>
              <td className="py-2.5 pr-4">number</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Initial stock quantity when creating the item.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">openingBatchNumber</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Batch number for opening stock (if batch tracking is enabled).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">openingExpiryDate</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Expiry date for the opening stock batch.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Pharmacy fields</h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Optional fields for pharmaceutical items:
      </p>
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
              <td className="py-2.5 pr-4"><code className="text-xs">drugSchedule</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Drug schedule (e.g., H, H1, X, G).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">composition</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Active ingredient composition (e.g., &quot;Paracetamol 500mg&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dosageForm</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Form (e.g., Tablet, Syrup, Capsule, Injection).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">packSize</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Pack size (e.g., &quot;10 tablets/strip&quot;, &quot;100ml bottle&quot;).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">prescriptionRequired</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5">Whether the item requires a prescription for sale.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: Pharmacy item</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/items \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "sku": "AMOX-500-10S",
    "name": "Amoxicillin 500mg Capsule (10s)",
    "itemType": "GOODS",
    "hsnCode": "30041090",
    "category": "Antibiotics",
    "brand": "Cipla",
    "manufacturer": "Cipla Ltd",
    "unitOfMeasure": "STRIP",
    "purchasePrice": 42.00,
    "salePrice": 58.50,
    "mrp": 65.00,
    "gstRate": 12.00,
    "trackInventory": true,
    "trackBatches": true,
    "reorderLevel": 30,
    "reorderQuantity": 100,
    "drugSchedule": "H",
    "composition": "Amoxicillin Trihydrate IP 500mg",
    "dosageForm": "Capsule",
    "packSize": "10 capsules/strip",
    "prescriptionRequired": true,
    "openingStock": 75,
    "openingBatchNumber": "CIP-AMX-2607A",
    "openingExpiryDate": "2027-06-30"
  }'`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Update an item</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/items/{id}" />
      </div>
      <RoleBadge roles={["OWNER", "ADMIN", "ACCOUNTANT", "OPERATOR"]} />
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Send an <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">UpdateItemRequest</code> body.
        Fields not included in the request remain unchanged.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://api.katixo.com/api/v1/items/d4f7a1b2-9c3e-4f8a-b6d5-1e2f3a4b5c6d \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "salePrice": 295.00,
    "mrp": 330.00,
    "reorderLevel": 150
  }'`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Delete an item</h2>
      <div className="mt-3">
        <Endpoint method="DELETE" path="/api/v1/items/{id}" />
      </div>
      <RoleBadge roles={["OWNER", "ADMIN", "ACCOUNTANT"]} />
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Soft-deletes an item. The item becomes inactive and is excluded from default listing.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X DELETE https://api.katixo.com/api/v1/items/d4f7a1b2-9c3e-4f8a-b6d5-1e2f3a4b5c6d \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Item deleted successfully",
  "data": null,
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">CSV import &amp; export</h2>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Download CSV template</h3>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/items/import/template" badge="text/csv" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a CSV file with header columns matching the <code className="text-xs">CreateItemRequest</code> fields.
        Use this as a template to prepare your import file.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/items/import/template \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -o items_template.csv`}</code>
      </pre>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Import items from CSV</h3>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/items/import" badge="multipart/form-data" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Upload a CSV file as <code className="text-xs">multipart/form-data</code>. Returns an{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;ItemImportResult&gt;</code>.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/items/import \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -F "file=@items_to_import.csv"`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Import completed",
  "data": {
    "totalRows": 150,
    "created": 142,
    "skipped": 8,
    "successRows": [1, 2, 3, 4, 5],
    "failedRows": [
      { "row": 23, "error": "Duplicate SKU: RCE-BAS-5K" },
      { "row": 87, "error": "Invalid itemType: PRODUCT" }
    ]
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Bill of Materials (BOM)</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Composite items (<code className="text-xs">itemType: COMPOSITE</code>) can have child components.
        Use the BOM endpoints to manage the component list for manufacturing or kitting.
      </p>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Add BOM component</h3>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/items/{id}/bom" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Send a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">BomComponentRequest</code> body:
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/items/e5a8b3c1-7d2f-4e9a-a1b3-c5d7e9f0a2b4/bom \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "childItemId": "f6b9c4d2-8e3a-5f0b-b2c4-d6e8f0a1b3c5",
    "quantity": 2.50
  }'`}</code>
      </pre>

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
              <td className="py-2.5 pr-4"><code className="text-xs">childItemId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">The ID of the component item to add.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">quantity</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Quantity of the component required per unit of the composite item.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Delete BOM component</h3>
      <div className="mt-3">
        <Endpoint method="DELETE" path="/api/v1/items/bom/{componentId}" />
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X DELETE https://api.katixo.com/api/v1/items/bom/a1b2c3d4-5678-9abc-def0-112233445566 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Example: Service item</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/items \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "sku": "SVC-AC-INSTALL",
    "name": "AC Installation Service",
    "itemType": "SERVICE",
    "hsnCode": "998719",
    "category": "Services",
    "unitOfMeasure": "NOS",
    "salePrice": 2500.00,
    "gstRate": 18.00,
    "trackInventory": false
  }'`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Error responses</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Validation errors and business rule violations are returned inside the{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">errors</code> array:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "errors": [
    "sku: must not be blank",
    "name: must not be blank",
    "itemType: must not be null",
    "gstRate: must be greater than or equal to 0.00"
  ]
}`}</code>
      </pre>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Status</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Reason</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">400</code></td>
              <td className="py-2.5">Validation error (missing required fields, invalid values).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">401</code></td>
              <td className="py-2.5">Missing or invalid JWT Bearer token.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">403</code></td>
              <td className="py-2.5">Insufficient role permissions, or INVENTORY module not enabled.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">404</code></td>
              <td className="py-2.5">Item not found for the given UUID.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">409</code></td>
              <td className="py-2.5">Duplicate SKU or barcode within the organization.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
