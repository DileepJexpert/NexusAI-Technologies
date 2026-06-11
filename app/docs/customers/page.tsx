import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers & Parties API — API Docs",
  description: "Manage customers, suppliers, and their ledger balances in Katixo.",
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

export default function CustomersPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Customers &amp; Parties</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Parties represent both customers and suppliers. Each party has a ledger that automatically
        tracks outstanding balances from invoices, payments, credit notes, and debit notes.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/parties" />
        <Endpoint method="POST" path="/v1/parties" />
        <Endpoint method="GET" path="/v1/parties/:id" />
        <Endpoint method="PATCH" path="/v1/parties/:id" />
        <Endpoint method="GET" path="/v1/parties/:id/ledger" />
        <Endpoint method="GET" path="/v1/parties/:id/outstanding" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The Party object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "cust_a1b2c3",
  "type": "customer",
  "name": "Sharma General Store",
  "gstin": "27AAECS1234F1Z5",
  "pan": "AAECS1234F",
  "phone": "+919876543210",
  "email": "sharma@example.com",
  "billing_address": {
    "line1": "Shop 12, Market Road",
    "line2": "",
    "city": "Pune",
    "state": "Maharashtra",
    "state_code": "27",
    "pincode": "411001"
  },
  "payment_terms_days": 30,
  "credit_limit": 5000000,
  "is_msme": true,
  "udyam_number": "UDYAM-MH-01-0012345",
  "opening_balance": 0,
  "current_balance": 152250,
  "tags": ["wholesale", "pune"],
  "active": true,
  "created_at": "2026-02-01T09:00:00+05:30",
  "updated_at": "2026-06-11T10:30:00+05:30"
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">GSTIN validation</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        When you provide a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">gstin</code>, the API validates
        its format and checks the state code against the billing address. If the GSTIN belongs to
        a different state than the billing address state code, the API returns a warning (not an error)
        so you can verify.
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        PAN is auto-extracted from the GSTIN (characters 3–12) if not provided separately.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">MSME tracking</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Set <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">is_msme: true</code> and
        provide the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">udyam_number</code> for
        suppliers who are registered MSMEs. The system uses this to:
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
        <li>Flag payables approaching the 45-day MSMED Act limit</li>
        <li>Compute interest on overdue payments</li>
        <li>Generate section 43B(h) compliance reports at year-end</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Party ledger</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/parties/:id/ledger" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the full ledger for a party — every invoice, payment, credit note, and debit note
        with running balance. Supports date range filtering.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "party_id": "cust_a1b2c3",
  "party_name": "Sharma General Store",
  "from_date": "2026-04-01",
  "to_date": "2026-06-11",
  "opening_balance": 0,
  "closing_balance": 152250,
  "entries": [
    {
      "date": "2026-06-11",
      "type": "invoice",
      "reference": "KTX/2026-27/0042",
      "debit": 152250,
      "credit": 0,
      "balance": 152250
    }
  ]
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Outstanding report</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/parties/:id/outstanding" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns invoice-wise outstanding with ageing buckets (0–30, 31–60, 61–90, 90+ days).
        Useful for credit control and collection follow-up.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "party_id": "cust_a1b2c3",
  "total_outstanding": 325000,
  "ageing": {
    "current": 152250,
    "days_31_60": 100000,
    "days_61_90": 72750,
    "days_90_plus": 0
  },
  "invoices": [
    {
      "invoice_id": "inv_8f3k2j1m",
      "invoice_number": "KTX/2026-27/0042",
      "invoice_date": "2026-06-11",
      "due_date": "2026-07-11",
      "total": 152250,
      "paid": 0,
      "balance": 152250,
      "days_overdue": 0
    }
  ]
}`}</code>
      </pre>
    </>
  );
}
