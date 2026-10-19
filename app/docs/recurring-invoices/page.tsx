import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Recurring Invoices API — API Docs",
  description: "Automate recurring billing with scheduled invoice generation via the Katixo API.",
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

export default function RecurringInvoicesPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Subscription & Billing Automation Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Recurring Invoices &amp; Subscriptions
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Automate repeating billing cycles in {brand.name}. Ideal for Annual Maintenance Contracts (AMC),
          monthly retainer agreements, facility leases, software subscriptions, and scheduled repeat client billings.
        </p>
      </div>

      {/* 1. Module Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          1. Module Overview: Automated Headless Invoicing
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Rather than manually re-creating identical monthly invoices for repeat clients, recurring profiles
          automate invoice creation on designated schedule dates:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Flexible Frequencies</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Configure Weekly, Monthly, Quarterly, Semi-Annual, or Annual generation cadences.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Auto-Send Option</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Automatically transitions invoices to SENT status and dispatches PDF copies via WhatsApp and Email.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Fixed Term or Perpetual</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Set fixed contract dates (e.g. 12 months) or keep perpetual until client cancellation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step UI Guide */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          2. How to Set Up a Recurring Profile (Step-by-Step UI Guide)
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Go to Sales &gt; Recurring Invoices &gt; Click "New Recurring Profile":</strong>
                Select the customer contact.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Configure Schedule &amp; Term:</strong>
                Choose frequency (e.g. <em>Monthly</em>), Start Date, and optional End Date. Enable <em>"Auto Send"</em> if you want the system to deliver the bill without manual review.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Define Invoice Template Lines:</strong>
                Add retainer items, services, or rental lines with negotiated rates and GST.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Activate Profile:</strong>
                Save the profile. On the due date, Katixo&apos;s cron job automatically generates the next invoice and increments the generation counter.
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
          Programmatically query, create, stop, and resume recurring billing schedules via REST:
        </p>

        <div className="mt-4 space-y-2">
          <Endpoint method="GET" path="/api/v1/recurring-invoices" />
          <Endpoint method="GET" path="/api/v1/recurring-invoices/{id}" />
          <Endpoint method="POST" path="/api/v1/recurring-invoices" />
          <Endpoint method="PUT" path="/api/v1/recurring-invoices/{id}" />
          <Endpoint method="POST" path="/api/v1/recurring-invoices/{id}/stop" />
          <Endpoint method="POST" path="/api/v1/recurring-invoices/{id}/resume" />
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a recurring invoice</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/recurring-invoices" />
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/recurring-invoices \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "contactId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "frequency": "MONTHLY",
    "startDate": "2026-07-01",
    "endDate": "2027-06-30",
    "autoSend": true,
    "lines": [
      {
        "description": "Monthly AMC — POS System",
        "quantity": 1,
        "unitPrice": 5000.00,
        "gstRate": 18.00
      }
    ],
    "notes": "Annual Maintenance Contract — POS hardware and software"
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
              <td className="py-2.5">Customer contact to bill.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">frequency</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Billing frequency: WEEKLY, MONTHLY, QUARTERLY, YEARLY.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">startDate</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of the first invoice.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">lines</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Line items (same structure as invoice lines).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">endDate</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">When to stop generating invoices. Runs indefinitely if omitted.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">autoSend</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Automatically send generated invoices. Default: false.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Stop &amp; resume</h2>
      <div className="mt-3 space-y-2">
        <Endpoint method="POST" path="/api/v1/recurring-invoices/{id}/stop" />
        <Endpoint method="POST" path="/api/v1/recurring-invoices/{id}/resume" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Pause a recurring invoice schedule without deleting it. No new invoices are generated while
        stopped. Resume to continue from where it left off.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The RecurringInvoice object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "f6a7b8c9-d0e1-2345-6789-abcdef012345",
  "contactId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "customerName": "Sharma General Store",
  "frequency": "MONTHLY",
  "startDate": "2026-07-01",
  "endDate": "2027-06-30",
  "nextInvoiceDate": "2026-08-01",
  "status": "ACTIVE",
  "autoSend": true,
  "invoicesGenerated": 1,
  "totalBilled": 5900.00,
  "lines": [
    {
      "description": "Monthly AMC — POS System",
      "quantity": 1,
      "unitPrice": 5000.00,
      "gstRate": 18.00,
      "lineTotal": 5900.00
    }
  ],
  "notes": "Annual Maintenance Contract — POS hardware and software",
  "createdAt": "2026-06-15T10:00:00Z"
}`}</code>
      </pre>
    </div>
  );
}
