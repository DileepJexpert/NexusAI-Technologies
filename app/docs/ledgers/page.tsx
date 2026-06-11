import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ledgers & Reports API — API Docs",
  description: "Access ledger entries, trial balance, profit & loss, and balance sheet reports via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function LedgersPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Ledgers &amp; Reports</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Access accounting ledgers and standard financial reports. All reports are computed
        from the underlying transaction data in real time — there is no separate report
        generation step.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/ledgers" />
        <Endpoint method="GET" path="/v1/ledgers/:id" />
        <Endpoint method="GET" path="/v1/reports/trial-balance" />
        <Endpoint method="GET" path="/v1/reports/profit-loss" />
        <Endpoint method="GET" path="/v1/reports/balance-sheet" />
        <Endpoint method="GET" path="/v1/reports/day-book" />
        <Endpoint method="GET" path="/v1/reports/cash-flow" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Ledger entries</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/ledgers/:id" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all entries for a specific ledger account within a date range,
        with opening balance, running balance, and closing balance.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/v1/ledgers/ldg_sales?from=2026-04-01&to=2026-06-30" \\
  -H "Authorization: Bearer ktx_live_your_api_key"`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "ledger_id": "ldg_sales",
  "ledger_name": "Sales Account",
  "group": "Revenue",
  "from_date": "2026-04-01",
  "to_date": "2026-06-30",
  "opening_balance": 0,
  "closing_balance": 4852500,
  "total_debit": 152250,
  "total_credit": 5004750,
  "entries": [
    {
      "date": "2026-06-11",
      "voucher_type": "sales",
      "voucher_number": "KTX/2026-27/0042",
      "party_name": "Sharma General Store",
      "debit": 0,
      "credit": 145000,
      "balance": 4852500
    }
  ]
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Trial balance</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/reports/trial-balance" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the trial balance as of a given date. Shows all ledger accounts with
        their debit and credit totals.
      </p>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Query parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">as_of</code></td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Date for the trial balance (YYYY-MM-DD). Defaults to today.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">format</code></td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5"><code className="text-xs">json</code> (default) or <code className="text-xs">csv</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Profit &amp; Loss</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/reports/profit-loss" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Income and expense summary for a date range. Groups accounts by category
        (Revenue, Cost of Goods Sold, Operating Expenses, Other Income, Other Expenses).
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/v1/reports/profit-loss?from=2026-04-01&to=2026-06-30" \\
  -H "Authorization: Bearer ktx_live_your_api_key"`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "from_date": "2026-04-01",
  "to_date": "2026-06-30",
  "revenue": {
    "sales": 4852500,
    "other_income": 12000,
    "total": 4864500
  },
  "cost_of_goods_sold": {
    "purchases": 3200000,
    "stock_adjustment": -45000,
    "total": 3155000
  },
  "gross_profit": 1709500,
  "operating_expenses": {
    "rent": 150000,
    "salaries": 300000,
    "utilities": 45000,
    "bank_charges": 8500,
    "other": 22000,
    "total": 525500
  },
  "net_profit": 1184000
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Balance sheet</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/reports/balance-sheet" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Assets, liabilities, and equity as of a given date. Includes current and non-current
        breakdowns, receivables, payables, cash and bank balances, and inventory valuation.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Day book</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/reports/day-book" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Chronological list of all vouchers (sales, purchases, payments, receipts, journal entries)
        for a given date or date range. The primary audit trail report.
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
              <td className="py-2.5 pr-4"><code className="text-xs">date</code></td>
              <td className="py-2.5">Single date (YYYY-MM-DD). Returns all vouchers for that day.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">from</code> / <code className="text-xs">to</code></td>
              <td className="py-2.5">Date range. Use instead of <code className="text-xs">date</code> for multi-day reports.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">voucher_type</code></td>
              <td className="py-2.5">Filter: <code className="text-xs">sales</code>, <code className="text-xs">purchase</code>, <code className="text-xs">payment</code>, <code className="text-xs">receipt</code>, <code className="text-xs">journal</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
