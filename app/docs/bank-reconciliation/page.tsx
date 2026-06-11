import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bank Reconciliation API — API Docs",
  description: "Import bank statements, auto-match transactions, and track reconciliation status via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PATCH: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function BankReconciliationPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Bank Reconciliation</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Import bank statements, auto-match transactions against your books, and track
        reconciliation status. Supports CSV and OFX statement formats from major Indian banks.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/bank-accounts" />
        <Endpoint method="POST" path="/v1/bank-accounts" />
        <Endpoint method="POST" path="/v1/bank-accounts/:id/statements" />
        <Endpoint method="GET" path="/v1/bank-accounts/:id/transactions" />
        <Endpoint method="POST" path="/v1/bank-accounts/:id/match" />
        <Endpoint method="GET" path="/v1/bank-accounts/:id/reconciliation" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Bank account setup</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/bank-accounts" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Register a bank account to begin importing statements and reconciling.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/bank-accounts \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "bank_name": "HDFC Bank",
    "account_number": "50100123456789",
    "ifsc": "HDFC0001234",
    "account_type": "current",
    "opening_balance": 25000000,
    "opening_balance_date": "2026-04-01"
  }'`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Import statement</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/bank-accounts/:id/statements" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Upload a bank statement file. Supported formats:
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Format</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Content-Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Notes</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4">CSV</td>
              <td className="py-2.5 pr-4"><code className="text-xs">text/csv</code></td>
              <td className="py-2.5">Auto-detects column mapping for SBI, HDFC, ICICI, Axis, Kotak, and PNB formats.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4">OFX / QFX</td>
              <td className="py-2.5 pr-4"><code className="text-xs">application/x-ofx</code></td>
              <td className="py-2.5">Standard Open Financial Exchange format.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4">Excel</td>
              <td className="py-2.5 pr-4"><code className="text-xs">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</code></td>
              <td className="py-2.5">XLSX files with standard date/narration/debit/credit columns.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/bank-accounts/ba_hdfc01/statements \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -F "file=@statement_june_2026.csv" \\
  -F "format=csv"`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "statement_id": "stmt_j7k8l9",
  "bank_account_id": "ba_hdfc01",
  "period": { "from": "2026-06-01", "to": "2026-06-10" },
  "transactions_imported": 47,
  "duplicates_skipped": 3,
  "auto_matched": 31,
  "pending_review": 13
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Auto-matching</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        When a statement is imported, the system automatically attempts to match bank transactions
        against book entries using these rules:
      </p>
      <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-slate-600 dark:text-slate-400">
        <li><strong>Exact amount + date match</strong> — a bank debit/credit matches a book entry of the same amount on the same date or within a 3-day window.</li>
        <li><strong>UTR / reference match</strong> — the bank narration contains a UTR or cheque number that matches a recorded payment reference.</li>
        <li><strong>Invoice number in narration</strong> — the bank narration contains an invoice number that maps to an outstanding receivable or payable.</li>
        <li><strong>Recurring pattern</strong> — monthly charges (rent, EMI, subscription) that match a saved rule.</li>
      </ol>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Transactions that cannot be auto-matched are left in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">pending_review</code> status for manual matching or categorization.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Manual matching</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/bank-accounts/:id/match" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Manually match a bank transaction to a book entry, or categorize it as a new entry
        (e.g., bank charges, interest received).
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/bank-accounts/ba_hdfc01/match \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "bank_transaction_id": "btxn_a1b2c3",
    "match_type": "invoice_payment",
    "invoice_id": "inv_8f3k2j1m",
    "amount": 152250
  }'`}</code>
      </pre>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Match types</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice_payment</code></td>
              <td className="py-2.5">Payment received against a sales invoice.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">purchase_payment</code></td>
              <td className="py-2.5">Payment made against a purchase bill.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">expense</code></td>
              <td className="py-2.5">Categorize as a direct expense (specify ledger).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">income</code></td>
              <td className="py-2.5">Categorize as income (interest, refund, etc.).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">transfer</code></td>
              <td className="py-2.5">Inter-bank transfer (specify destination bank account).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Reconciliation status</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/bank-accounts/:id/reconciliation" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the current reconciliation status for a bank account — book balance,
        bank balance, unmatched items on both sides, and the reconciliation summary.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "bank_account_id": "ba_hdfc01",
  "as_of_date": "2026-06-10",
  "bank_balance": 28500000,
  "book_balance": 27850000,
  "difference": 650000,
  "unmatched_bank_transactions": 5,
  "unmatched_book_entries": 3,
  "reconciliation_rate": 94.2,
  "summary": {
    "total_bank_debits": 4200000,
    "total_bank_credits": 7700000,
    "total_book_debits": 4050000,
    "total_book_credits": 7550000
  }
}`}</code>
      </pre>
    </>
  );
}
