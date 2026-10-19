import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Invoices API — API Docs",
  description: `Create, list, send, and manage GST-compliant invoices via the ${brand.name} API.`,
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
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Sales & Billing Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Tax Invoices & Sales Billing
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Create, send, and manage GST 2.0-compliant tax invoices in {brand.name}.
          Learn how invoices automate customer receivables (AR), trigger stock deductions or inherit
          from Delivery Challans, post compound General Ledger journals, and record customer payments.
        </p>
      </div>

      {/* 1. Module Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          1. Module Overview: The Core Commercial Sales Document
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Under <strong>Section 31 of the Central Goods and Services Tax (CGST) Act, 2017</strong>, a registered
          business supplying taxable goods or services must issue a legal Tax Invoice. In Katixo ERP, the invoice
          is the primary commercial engine connecting sales, inventory, and financial ledgers:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">GST 2.0 Tax Splitting</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Compares Supplier State vs Customer Place of Supply (POS) to automatically apply CGST+SGST or IGST.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Dual Dispatch Mechanics</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Direct invoices deduct stock upon send; Delivery Challan-linked invoices reuse already-dispatched stock without duplication.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Live Accounts Receivable</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Instantly updates customer ledger, credit limit utilization, and aging buckets (0-30, 31-60, 60+ days).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Creation Walkthrough */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2. How to Create an Invoice (Step-by-Step UI Guide)
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Navigate to Sales &gt; Invoices &gt; Click "Create Invoice":</strong>
                Select the customer contact. Katixo auto-populates their GSTIN, billing address, shipping address, and Place of Supply (State Code).
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Set Dates &amp; Payment Terms:</strong>
                Choose the Invoice Date and Due Date (defaults automatically to the customer&apos;s configured payment terms, e.g. Net 30).
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Add Item Lines:</strong>
                Search items by name or scan barcode. The system retrieves the statutory HSN code, unit price, and GST rate. Enter quantity and any line discount percentage.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Save as Draft or Click "Send":</strong>
                Saving as <code className="text-blue-600">DRAFT</code> allows packing and verification. Clicking <strong>"Send"</strong> officially posts the invoice to the customer ledger, generates the PDF, and delivers it via WhatsApp or Email.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Accounting & Stock Mechanics */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          3. Automated General Ledger &amp; Stock Posting
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          When an invoice transitions from DRAFT to SENT, Katixo executes a balanced double-entry General Ledger journal:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02] font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
          <p>• DEBIT: Accounts Receivable (1100) — [Gross Total with GST]</p>
          <p>• CREDIT: Sales Revenue (4000) — [Taxable Subtotal]</p>
          <p>• CREDIT: Output CGST / SGST (Intra-state) or Output IGST (Inter-state) — [GST Total]</p>
          <p>• DEBIT: Cost of Goods Sold (5000) / CREDIT: Inventory Asset (1200) — [Blended FIFO Cost]</p>
        </div>
      </section>

      {/* 4. Developer Reference Heading */}
      <div className="border-t border-slate-200 pt-8 dark:border-white/10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Developer &amp; REST API Reference
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Programmatically query, create, send, and record payments against tax invoices via REST endpoints.
        </p>

        <div className="mt-4 space-y-2">
          <Endpoint method="GET" path="/api/v1/invoices" />
          <Endpoint method="GET" path="/api/v1/invoices/{id}" />
          <Endpoint method="POST" path="/api/v1/invoices" />
          <Endpoint method="POST" path="/api/v1/invoices/{id}/send" />
          <Endpoint method="POST" path="/api/v1/invoices/{id}/cancel" />
          <Endpoint method="GET" path="/api/v1/invoices/{id}/pdf" />
          <Endpoint method="POST" path="/api/v1/invoices/{id}/payments" />
          <Endpoint method="GET" path="/api/v1/invoices/{id}/payments" />
          <Endpoint method="DELETE" path="/api/v1/invoices/{id}/payments/{paymentId}" />
          <Endpoint method="POST" path="/api/v1/invoices/bulk-send" />
          <Endpoint method="POST" path="/api/v1/invoices/bulk-cancel" />
        </div>

        <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
          <strong>Authentication:</strong> All endpoints require a valid JWT Bearer token in the{" "}
          <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-900/40">Authorization</code> header.
          All IDs are UUIDs.
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The InvoiceResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Invoice retrieved successfully",
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "invoiceNumber": "KTX/2026-27/0042",
    "contactId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "customerName": "Sharma Kirana Store",
    "invoiceDate": "2026-06-11",
    "dueDate": "2026-07-11",
    "status": "SENT",
    "subtotal": 1450.00,
    "taxAmount": 72.50,
    "totalAmount": 1522.50,
    "amountPaid": 0.00,
    "balanceDue": 1522.50,
    "placeOfSupply": "27",
    "notes": "Payment due within 30 days",
    "lines": [
      {
        "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        "lineNumber": 1,
        "description": "Toor Dal 1kg",
        "hsnCode": "07139090",
        "itemId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
        "quantity": 10,
        "unitPrice": 145.00,
        "discountPercent": 0,
        "discountAmount": 0.00,
        "taxableAmount": 1450.00,
        "gstRate": 5.00,
        "taxAmount": 72.50,
        "lineTotal": 1522.50
      }
    ],
    "createdAt": "2026-06-11T05:00:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Invoice statuses</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Status</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DRAFT</code></td>
              <td className="py-2.5">Invoice created but not yet sent to the customer.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SENT</code></td>
              <td className="py-2.5">Invoice has been sent to the customer and is awaiting payment.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PAID</code></td>
              <td className="py-2.5">Full payment has been received. Balance due is zero.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OVERDUE</code></td>
              <td className="py-2.5">Invoice is past its due date with balance still outstanding.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CANCELLED</code></td>
              <td className="py-2.5">Invoice has been cancelled. Remains in system for audit purposes.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List invoices</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/invoices" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of invoices. The response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;PagedResponse&lt;InvoiceResponse&gt;&gt;</code>.
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        <strong>Roles:</strong> OWNER, ADMIN, ACCOUNTANT, OPERATOR, VIEWER
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
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Filter by status: <code className="text-xs">DRAFT</code>, <code className="text-xs">SENT</code>, <code className="text-xs">PAID</code>, <code className="text-xs">CANCELLED</code>, <code className="text-xs">OVERDUE</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">contactId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by contact (customer).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dateFrom</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5">Invoice date on or after this date (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dateTo</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5">Invoice date on or before this date.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">search</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Free-text search across invoice number and customer name.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Page number (zero-based, default: 0).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">size</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Results per page (default: 20).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">sort</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Sort field and direction, e.g. <code className="text-xs">invoiceDate,desc</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/invoices?status=SENT&dateFrom=2026-04-01&page=0&size=10 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Invoices retrieved successfully",
  "data": {
    "content": [
      {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "invoiceNumber": "KTX/2026-27/0042",
        "contactId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "customerName": "Sharma Kirana Store",
        "invoiceDate": "2026-06-11",
        "dueDate": "2026-07-11",
        "status": "SENT",
        "subtotal": 1450.00,
        "taxAmount": 72.50,
        "totalAmount": 1522.50,
        "amountPaid": 0.00,
        "balanceDue": 1522.50,
        "placeOfSupply": "27",
        "notes": null,
        "lines": [...],
        "createdAt": "2026-06-11T05:00:00Z"
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 42,
    "totalPages": 5,
    "last": false
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get an invoice</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/invoices/{id}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Retrieves a single invoice by its UUID. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;InvoiceResponse&gt;</code>.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/invoices/a1b2c3d4-e5f6-7890-abcd-ef1234567890 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create an invoice</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/invoices" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a new invoice in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DRAFT</code> status.
        Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> on success.
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        <strong>Roles:</strong> OWNER, ADMIN, ACCOUNTANT, OPERATOR
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">CreateInvoiceRequest body</h3>
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
              <td className="py-2.5">ID of the customer contact.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoiceDate</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of the invoice (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dueDate</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Payment due date. Defaults based on contact payment terms.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">placeOfSupply</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">State code (e.g. &quot;27&quot; for Maharashtra). Determines CGST+SGST vs IGST.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">notes</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Free-text notes printed on the invoice.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">termsAndConditions</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Terms and conditions text printed on the invoice.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">lines</code></td>
              <td className="py-2.5 pr-4">InvoiceLineRequest[]</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">At least one line item is required. See line item fields below.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">InvoiceLineRequest fields</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">itemId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Reference to an item in the item master. Optional for ad-hoc line items.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">description</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Description of the item or service.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">hsnCode</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">HSN/SAC code for GST classification.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">quantity</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Quantity of items.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">unitPrice</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Price per unit (before tax).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">discountPercent</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Discount percentage on this line (e.g. 5.00 for 5%).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">gstRate</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">GST rate percentage (e.g. 5.00, 12.00, 18.00). Auto-resolved from item master if omitted.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">taxGroupId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Tax group to apply. Overrides gstRate if provided.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: create an invoice for a kirana store</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/invoices \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "contactId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "invoiceDate": "2026-06-11",
    "dueDate": "2026-07-11",
    "placeOfSupply": "27",
    "notes": "Delivery to Sharma Kirana Store, Pune",
    "termsAndConditions": "Payment due within 30 days. Late fee of 1.5% per month.",
    "lines": [
      {
        "itemId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
        "description": "Toor Dal 1kg",
        "hsnCode": "07139090",
        "quantity": 10,
        "unitPrice": 145.00,
        "gstRate": 5.00
      },
      {
        "itemId": "d4e5f6a7-b8c9-0123-def0-234567890123",
        "description": "Basmati Rice 5kg",
        "hsnCode": "10063010",
        "quantity": 5,
        "unitPrice": 420.00,
        "discountPercent": 2.00,
        "gstRate": 5.00
      },
      {
        "description": "Ghee 1L (Amul)",
        "hsnCode": "04059090",
        "quantity": 3,
        "unitPrice": 560.00,
        "gstRate": 12.00
      }
    ]
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Invoice created successfully",
  "data": {
    "id": "e5f6a7b8-c9d0-1234-ef01-345678901234",
    "invoiceNumber": "KTX/2026-27/0043",
    "contactId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "customerName": "Sharma Kirana Store",
    "invoiceDate": "2026-06-11",
    "dueDate": "2026-07-11",
    "status": "DRAFT",
    "subtotal": 4558.00,
    "taxAmount": 375.70,
    "totalAmount": 4933.70,
    "amountPaid": 0.00,
    "balanceDue": 4933.70,
    "placeOfSupply": "27",
    "notes": "Delivery to Sharma Kirana Store, Pune",
    "lines": [
      {
        "id": "11111111-1111-1111-1111-111111111111",
        "lineNumber": 1,
        "description": "Toor Dal 1kg",
        "hsnCode": "07139090",
        "itemId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
        "quantity": 10,
        "unitPrice": 145.00,
        "discountPercent": 0,
        "discountAmount": 0.00,
        "taxableAmount": 1450.00,
        "gstRate": 5.00,
        "taxAmount": 72.50,
        "lineTotal": 1522.50
      },
      {
        "id": "22222222-2222-2222-2222-222222222222",
        "lineNumber": 2,
        "description": "Basmati Rice 5kg",
        "hsnCode": "10063010",
        "itemId": "d4e5f6a7-b8c9-0123-def0-234567890123",
        "quantity": 5,
        "unitPrice": 420.00,
        "discountPercent": 2.00,
        "discountAmount": 42.00,
        "taxableAmount": 2058.00,
        "gstRate": 5.00,
        "taxAmount": 102.90,
        "lineTotal": 2160.90
      },
      {
        "id": "33333333-3333-3333-3333-333333333333",
        "lineNumber": 3,
        "description": "Ghee 1L (Amul)",
        "hsnCode": "04059090",
        "itemId": null,
        "quantity": 3,
        "unitPrice": 560.00,
        "discountPercent": 0,
        "discountAmount": 0.00,
        "taxableAmount": 1680.00,
        "gstRate": 12.00,
        "taxAmount": 201.60,
        "lineTotal": 1881.60
      }
    ],
    "createdAt": "2026-06-11T05:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Send an invoice</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/invoices/{id}/send" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Transitions the invoice from <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DRAFT</code> to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SENT</code> and delivers it to the customer
        via the configured channel (email, WhatsApp, etc).
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        <strong>Roles:</strong> OWNER, ADMIN, ACCOUNTANT, OPERATOR
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/invoices/e5f6a7b8-c9d0-1234-ef01-345678901234/send \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Invoice sent successfully",
  "data": null,
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Cancel an invoice</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/invoices/{id}/cancel" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Cancels an invoice. This reverses inventory deductions and outstanding receivable entries.
        Cancelled invoices remain in the system for audit purposes but are excluded from GST filing
        data. A cancelled invoice cannot be un-cancelled &mdash; create a new invoice instead.
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        <strong>Roles:</strong> OWNER, ADMIN, ACCOUNTANT
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/invoices/e5f6a7b8-c9d0-1234-ef01-345678901234/cancel \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Invoice cancelled successfully",
  "data": null,
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Download PDF</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/invoices/{id}/pdf" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the invoice as a PDF file. The response has{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Content-Type: application/pdf</code> and
        the body is the raw PDF bytes. The PDF uses your organization&apos;s configured invoice
        template, logo, and bank details.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/invoices/e5f6a7b8-c9d0-1234-ef01-345678901234/pdf \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -o invoice_KTX_2026-27_0043.pdf`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Payments</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Record, list, and delete payments against an invoice. When the total payments equal the
        invoice total, the invoice status automatically transitions to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PAID</code>.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Record a payment</h3>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/invoices/{id}/payments" />
      </div>
      <h4 className="mt-4 text-base font-bold text-slate-900 dark:text-white">InvoicePaymentRequest body</h4>
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
              <td className="py-2.5 pr-4"><code className="text-xs">amount</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Amount received.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">paymentDate</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of payment (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">paymentMode</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Payment method (e.g. UPI, NEFT, CASH, CHEQUE, CARD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">reference</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Transaction reference (UPI ref, cheque number, NEFT UTR, etc).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">paidThroughAccountId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Bank/cash account the payment was deposited into.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/invoices/e5f6a7b8-c9d0-1234-ef01-345678901234/payments \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 2000.00,
    "paymentDate": "2026-06-15",
    "paymentMode": "UPI",
    "reference": "426198374512",
    "paidThroughAccountId": "a0b1c2d3-e4f5-6789-0abc-def012345678"
  }'

# Response
{
  "success": true,
  "message": "Payment recorded successfully",
  "data": {
    "id": "f6a7b8c9-d0e1-2345-f012-456789012345",
    "invoiceId": "e5f6a7b8-c9d0-1234-ef01-345678901234",
    "amount": 2000.00,
    "paymentDate": "2026-06-15",
    "paymentMode": "UPI",
    "reference": "426198374512"
  },
  "errors": null
}`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">List payments</h3>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/invoices/{id}/payments" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all payments recorded against the specified invoice.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/invoices/e5f6a7b8-c9d0-1234-ef01-345678901234/payments \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Payments retrieved successfully",
  "data": [
    {
      "id": "f6a7b8c9-d0e1-2345-f012-456789012345",
      "invoiceId": "e5f6a7b8-c9d0-1234-ef01-345678901234",
      "amount": 2000.00,
      "paymentDate": "2026-06-15",
      "paymentMode": "UPI",
      "reference": "426198374512"
    }
  ],
  "errors": null
}`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Delete a payment</h3>
      <div className="mt-3">
        <Endpoint method="DELETE" path="/api/v1/invoices/{id}/payments/{paymentId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Removes a payment record from the invoice. The invoice balance due is updated accordingly,
        and the status may revert from <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PAID</code> back
        to <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SENT</code> if the balance becomes non-zero.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X DELETE https://api.katixo.com/api/v1/invoices/e5f6a7b8-c9d0-1234-ef01-345678901234/payments/f6a7b8c9-d0e1-2345-f012-456789012345 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Payment deleted successfully",
  "data": null,
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Bulk operations</h2>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Bulk send</h3>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/invoices/bulk-send" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Send multiple draft invoices at once. The request body is a JSON array of invoice UUIDs.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/invoices/bulk-send \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '[
    "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "e5f6a7b8-c9d0-1234-ef01-345678901234",
    "b2c3d4e5-f6a7-8901-bcde-f12345678901"
  ]'

# Response
{
  "success": true,
  "message": "3 invoices sent successfully",
  "data": null,
  "errors": null
}`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Bulk cancel</h3>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/invoices/bulk-cancel" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Cancel multiple invoices at once. The request body is a JSON array of invoice UUIDs.
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        <strong>Roles:</strong> OWNER, ADMIN, ACCOUNTANT
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/invoices/bulk-cancel \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '[
    "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "b2c3d4e5-f6a7-8901-bcde-f12345678901"
  ]'

# Response
{
  "success": true,
  "message": "2 invoices cancelled successfully",
  "data": null,
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">LineResponse object</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Each invoice contains an array of line items. The server computes discount amounts, taxable
        amounts, tax, and line totals automatically from the inputs you provide.
      </p>
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
              <td className="py-2.5">Unique identifier for this line item.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">lineNumber</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Position of the line item (1-based).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">description</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Description of the item or service.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">hsnCode</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">HSN/SAC code for GST classification.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">itemId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Reference to item master (null for ad-hoc items).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">quantity</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Quantity of items.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">unitPrice</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Price per unit.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">discountPercent</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Discount percentage applied.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">discountAmount</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Computed discount amount (quantity x unitPrice x discountPercent / 100).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">taxableAmount</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Amount after discount, before tax.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">gstRate</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">GST rate applied (e.g. 5.00, 12.00, 18.00).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">taxAmount</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Computed tax amount (taxableAmount x gstRate / 100).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">lineTotal</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Total for this line (taxableAmount + taxAmount).</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Error handling</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All error responses follow the standard{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse</code> wrapper with{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">success: false</code> and
        details in the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">errors</code> array.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`# 400 Bad Request — validation error
{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "errors": [
    "contactId: must not be null",
    "lines: must not be empty"
  ]
}

# 404 Not Found
{
  "success": false,
  "message": "Invoice not found",
  "data": null,
  "errors": ["No invoice found with id: e5f6a7b8-c9d0-1234-ef01-345678901234"]
}

# 403 Forbidden — insufficient role
{
  "success": false,
  "message": "Access denied",
  "data": null,
  "errors": ["You do not have permission to cancel invoices"]
}`}</code>
      </pre>
    </div>
  );
}
