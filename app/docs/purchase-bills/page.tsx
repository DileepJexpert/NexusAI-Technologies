import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Bills API — API Docs",
  description: "Record purchase bills, manage line items, and track vendor payables via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
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
    </div>
  );
}

export default function PurchaseBillsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Purchase Bills</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Record purchase bills from vendors, track payables, and manage the bill lifecycle
        from draft to posted. Purchase bills automatically create journal entries and
        update inventory when posted.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/bills" />
        <Endpoint method="GET" path="/api/v1/bills/{id}" />
        <Endpoint method="POST" path="/api/v1/bills" />
        <Endpoint method="PUT" path="/api/v1/bills/{id}" />
        <Endpoint method="POST" path="/api/v1/bills/{id}/post" />
        <Endpoint method="POST" path="/api/v1/bills/{id}/void" />
        <Endpoint method="GET" path="/api/v1/bills/{id}/pdf" />
        <Endpoint method="DELETE" path="/api/v1/bills/{id}" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List purchase bills</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/bills" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of purchase bills with optional filters.
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
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Filter by bill status (DRAFT, POSTED, VOIDED).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">contact_id</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by vendor contact.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">date_from</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5">Bill date on or after (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">date_to</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5">Bill date on or before.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">page</code>, <code className="text-xs">size</code>, <code className="text-xs">sort</code></td>
              <td className="py-2.5 pr-4">int / string</td>
              <td className="py-2.5">Pagination (0-indexed, default size: 20).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Roles: OWNER, ADMIN, ACCOUNTANT, VIEWER.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a purchase bill</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/bills" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a new purchase bill in DRAFT status. Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code>.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/bills \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "contactId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "vendorBillNumber": "VB-2026-0142",
    "billDate": "2026-06-10",
    "dueDate": "2026-07-10",
    "placeOfSupply": "27",
    "lines": [
      {
        "description": "Toor Dal 1kg",
        "hsnCode": "07139090",
        "itemId": "550e8400-e29b-41d4-a716-446655440000",
        "quantity": 100,
        "unitPrice": 110.00,
        "gstRate": 5.00
      },
      {
        "description": "Basmati Rice 5kg",
        "hsnCode": "10063020",
        "itemId": "661f9500-f3ac-52e5-b827-557766551111",
        "quantity": 50,
        "unitPrice": 220.00,
        "gstRate": 5.00
      }
    ],
    "notes": "Monthly stock purchase"
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
              <td className="py-2.5 pr-4"><code className="text-xs">contactId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Vendor contact ID.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billDate</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of the bill (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">lines</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">At least one line item required.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">vendorBillNumber</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Vendor&apos;s own bill/invoice number.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dueDate</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Payment due date.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">placeOfSupply</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">2-digit state code for GST calculation.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">reverseCharge</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Whether reverse charge is applicable.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Post a bill</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/bills/{id}/post" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Finalizes a draft bill — creates accounting journal entries, updates vendor payable balance,
        and (if items are linked) adjusts inventory quantities. A posted bill cannot be edited;
        use void instead.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Void a bill</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/bills/{id}/void" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Voids a posted bill. Reverses the journal entry and inventory changes. Optionally
        pass a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">reason</code> in the request body.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/bills/{id}/void \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{ "reason": "Duplicate entry" }'`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The PurchaseBill object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "c3d4e5f6-a7b8-9012-3456-789abcdef012",
  "contactId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "vendorName": "Sharma Wholesale",
  "billNumber": "BILL-2026-0087",
  "vendorBillNumber": "VB-2026-0142",
  "billDate": "2026-06-10",
  "dueDate": "2026-07-10",
  "status": "POSTED",
  "subtotal": 22000.00,
  "taxAmount": 1100.00,
  "totalAmount": 23100.00,
  "amountPaid": 0.00,
  "balanceDue": 23100.00,
  "tdsAmount": 0.00,
  "currency": "INR",
  "placeOfSupply": "27",
  "reverseCharge": false,
  "notes": "Monthly stock purchase",
  "lines": [
    {
      "id": "f1e2d3c4-b5a6-9876-5432-10fedcba9876",
      "lineNumber": 1,
      "description": "Toor Dal 1kg",
      "hsnCode": "07139090",
      "itemId": "550e8400-e29b-41d4-a716-446655440000",
      "quantity": 100,
      "unitPrice": 110.00,
      "discountPercent": 0.00,
      "discountAmount": 0.00,
      "taxableAmount": 11000.00,
      "gstRate": 5.00,
      "taxAmount": 550.00,
      "lineTotal": 11550.00
    }
  ],
  "createdAt": "2026-06-10T09:30:00Z"
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Authorization</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Create, update, post, void, and delete operations require <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OWNER</code>,{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ADMIN</code>, or{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ACCOUNTANT</code> role.
        Read operations (list, get, PDF) additionally allow <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">VIEWER</code> and{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OPERATOR</code>.
      </p>
    </>
  );
}
