import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Expenses API — API Docs",
  description: "Track and categorize business expenses with automatic journal entries via the Katixo API.",
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

export default function ExpensesPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Operations & Financial Accounting Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Expenses, Petty Cash &amp; Billable Costs
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Track day-to-day business operational overheads, manage office petty cash floats, categorize travel and utility costs,
          recharge billable expenses to clients, and automatically post General Ledger journals in {brand.name}.
        </p>
      </div>

      {/* 1. Module Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          1. Module Overview: Expenses vs. Purchase Bills
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          While <em>Purchase Bills</em> manage commercial vendor liabilities and Input Tax Credit (ITC),
          the <em>Expenses</em> module is built for quick operational payments made directly from cash counters or bank accounts:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Direct Ledger Deductions</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Debits the chosen operational expense account (e.g. Fuel, Rent, Tea) and immediately credits the Cash or Bank account.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Billable Client Costs</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Tag expenses to specific customers or client projects to include them in the next customer billing cycle.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Receipt Attachments</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Attach physical vouchers, fuel slips, and invoice scans for audit-ready compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step UI Guide */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2. How to Record an Expense (Step-by-Step UI Guide)
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Go to Accounting &gt; Expenses &gt; Click "Add Expense":</strong>
                Choose the Expense Category (e.g. <em>Vehicle Fuel</em>, <em>Office Refreshments</em>, <em>Warehouse Repairs</em>).
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Select "Paid Through" Account:</strong>
                Specify where the funds came from: <em>Petty Cash Float</em>, <em>HDFC Current Account</em>, or <em>Corporate Credit Card</em>.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Enter Amount &amp; GST Details (if applicable):</strong>
                If the voucher includes tax, input GST components to claim input credit.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Save Expense:</strong>
                Katixo immediately writes the General Ledger journal: DEBIT Expense Account (6xxx) / CREDIT Cash or Bank (1xxx).
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
          Programmatically query, create, update, and categorize expenses via REST:
        </p>

        <div className="mt-4 space-y-2">
          <Endpoint method="GET" path="/api/v1/expenses" />
          <Endpoint method="GET" path="/api/v1/expenses/{id}" />
          <Endpoint method="POST" path="/api/v1/expenses" />
          <Endpoint method="PUT" path="/api/v1/expenses/{id}" />
          <Endpoint method="DELETE" path="/api/v1/expenses/{id}" />
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List expenses</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/expenses" />
      </div>
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
              <td className="py-2.5 pr-4"><code className="text-xs">from</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5">Expense date from (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">to</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5">Expense date to.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">category</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Filter by expense category.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">contactId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by vendor contact.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">page</code>, <code className="text-xs">size</code>, <code className="text-xs">sort</code></td>
              <td className="py-2.5 pr-4">int / string</td>
              <td className="py-2.5">Pagination (0-indexed, default size: 20).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Roles: OWNER, ADMIN, ACCOUNTANT, OPERATOR, VIEWER.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create an expense</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/expenses" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Records a new expense and creates the corresponding journal entry. Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code>.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/expenses \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "expenseDate": "2026-06-10",
    "accountId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "category": "Office Supplies",
    "description": "Printer cartridges and A4 paper",
    "amount": 2500.00,
    "gstRate": 18.00,
    "paymentMode": "UPI",
    "paidThroughId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "billable": false
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
              <td className="py-2.5 pr-4"><code className="text-xs">expenseDate</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of the expense.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">accountId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Expense account to debit.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">amount</code></td>
              <td className="py-2.5 pr-4">decimal</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Expense amount (must be &gt; 0.01).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">paymentMode</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">How the expense was paid (e.g., UPI, Cash, Bank Transfer).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">paidThroughId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Account the payment was made from (e.g., cash, bank account).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">gstRate</code></td>
              <td className="py-2.5 pr-4">decimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">GST rate (0, 5, 12, 18, or 28). Defaults to 0.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">category</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Expense category for reporting.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">contactId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Vendor contact. Optional for cash expenses.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billable</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Whether this expense can be billed to a customer.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">customerContactId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Customer to bill this expense to (when billable).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">receiptUrl</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">URL to the uploaded receipt image.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Void an expense</h2>
      <div className="mt-3">
        <Endpoint method="DELETE" path="/api/v1/expenses/{id}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        The DELETE endpoint voids the expense rather than deleting it — it creates a reversal
        journal entry and marks the expense as VOIDED. The record remains for audit purposes.
        Optionally pass a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">reason</code> in the request body.
        Requires OWNER, ADMIN, or ACCOUNTANT role.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The Expense object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "d4e5f6a7-b8c9-0123-4567-89abcdef0123",
  "expenseNumber": "EXP-2026-0034",
  "expenseDate": "2026-06-10",
  "accountId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "accountCode": "5001",
  "accountName": "Office Supplies",
  "category": "Office Supplies",
  "description": "Printer cartridges and A4 paper",
  "amount": 2500.00,
  "taxAmount": 450.00,
  "total": 2950.00,
  "currency": "INR",
  "gstRate": 18.00,
  "contactId": null,
  "contactName": null,
  "paymentMode": "UPI",
  "paidThroughId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "paidThroughName": "HDFC Current Account",
  "billable": false,
  "projectId": null,
  "customerContactId": null,
  "customerContactName": null,
  "receiptUrl": null,
  "status": "ACTIVE",
  "journalEntryId": "e5f6a7b8-c9d0-1234-5678-9abcdef01234",
  "createdAt": "2026-06-10T11:30:00Z"
}`}</code>
      </pre>
    </div>
  );
}
