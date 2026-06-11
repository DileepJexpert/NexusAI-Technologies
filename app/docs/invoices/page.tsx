import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices API — API Docs",
  description: "Create, list, retrieve, and manage GST-compliant invoices via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
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

export default function InvoicesPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Invoices</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Create and manage GST-compliant tax invoices and bills of supply. Invoices are the core
        transactional record in Katixo — each invoice automatically updates inventory, receivables,
        and GST filing data.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/invoices" />
        <Endpoint method="POST" path="/v1/invoices" />
        <Endpoint method="GET" path="/v1/invoices/:id" />
        <Endpoint method="PATCH" path="/v1/invoices/:id" />
        <Endpoint method="POST" path="/v1/invoices/:id/void" />
        <Endpoint method="GET" path="/v1/invoices/:id/pdf" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The Invoice object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "inv_8f3k2j1m",
  "invoice_number": "KTX/2026-27/0042",
  "type": "tax_invoice",
  "status": "issued",
  "customer_id": "cust_a1b2c3",
  "invoice_date": "2026-06-11",
  "due_date": "2026-07-11",
  "place_of_supply": "27",
  "line_items": [
    {
      "item_id": "itm_x9y8z7",
      "description": "Toor Dal 1kg",
      "hsn_code": "07139090",
      "quantity": 10,
      "unit": "KG",
      "unit_price": 14500,
      "discount_percent": 0,
      "tax_rate": 500,
      "cgst": 3625,
      "sgst": 3625,
      "igst": 0,
      "total": 152250
    }
  ],
  "subtotal": 145000,
  "total_cgst": 3625,
  "total_sgst": 3625,
  "total_igst": 0,
  "total_tax": 7250,
  "grand_total": 152250,
  "amount_paid": 0,
  "balance_due": 152250,
  "notes": "Payment due within 30 days",
  "created_at": "2026-06-11T10:30:00+05:30",
  "updated_at": "2026-06-11T10:30:00+05:30"
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Invoice types</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">tax_invoice</code></td>
              <td className="py-2.5">Standard GST tax invoice with CGST/SGST or IGST breakup.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">bill_of_supply</code></td>
              <td className="py-2.5">For composition scheme dealers or exempt supplies. No tax breakup.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">credit_note</code></td>
              <td className="py-2.5">Issued against an existing invoice for returns or adjustments.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">debit_note</code></td>
              <td className="py-2.5">Issued to a supplier for purchase returns or price adjustments.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create an invoice</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/invoices" />
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/invoices \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "tax_invoice",
    "customer_id": "cust_a1b2c3",
    "invoice_date": "2026-06-11",
    "due_date": "2026-07-11",
    "place_of_supply": "27",
    "line_items": [
      {
        "item_id": "itm_x9y8z7",
        "quantity": 10,
        "unit_price": 14500,
        "discount_percent": 0
      }
    ],
    "notes": "Payment due within 30 days"
  }'`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Tax rates, HSN codes, and CGST/SGST/IGST split are computed automatically based on the
        item master and place of supply. You do not need to pass tax amounts — the API calculates them.
      </p>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Request body parameters</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">type</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">One of <code className="text-xs">tax_invoice</code>, <code className="text-xs">bill_of_supply</code>, <code className="text-xs">credit_note</code>, <code className="text-xs">debit_note</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">customer_id</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the customer party.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice_date</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of the invoice (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">due_date</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Payment due date. Defaults to invoice_date + payment terms from customer profile.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">place_of_supply</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">2-digit state code (e.g., &quot;27&quot; for Maharashtra). Determines CGST+SGST vs IGST.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">line_items</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Array of line item objects (see below).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice_number</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Custom invoice number. Auto-generated if omitted.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">notes</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Free-text notes printed on the invoice.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List invoices</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/invoices" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of invoices, sorted by invoice date descending.
      </p>
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
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5">Filter by status: <code className="text-xs">draft</code>, <code className="text-xs">issued</code>, <code className="text-xs">paid</code>, <code className="text-xs">voided</code>, <code className="text-xs">overdue</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">customer_id</code></td>
              <td className="py-2.5">Filter by customer.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">from_date</code></td>
              <td className="py-2.5">Invoice date on or after this date (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">to_date</code></td>
              <td className="py-2.5">Invoice date on or before this date.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5">Page number (default: 1).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">per_page</code></td>
              <td className="py-2.5">Results per page (default: 25, max: 100).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Void an invoice</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/invoices/:id/void" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Voids an issued invoice. This reverses inventory deductions and outstanding receivable entries.
        Voided invoices remain in the system for audit purposes but are excluded from GST filing data.
        A voided invoice cannot be un-voided — issue a new invoice instead.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/invoices/inv_8f3k2j1m/void \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{ "reason": "Duplicate invoice" }'`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Download PDF</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/invoices/:id/pdf" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the invoice as a PDF file. The response has <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Content-Type: application/pdf</code>.
        The PDF uses your organization&apos;s configured invoice template, logo, and bank details.
      </p>
    </>
  );
}
