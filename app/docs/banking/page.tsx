import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Banking & Auto-Reconciliation API — API Docs",
  description: `Manage multi-currency bank accounts, statement parsing, and rule-based auto-reconciliation via the ${brand.name} Banking API.`,
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

export default function BankingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Banking & Auto-Reconciliation</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Automate the painful month-end bank reconciliation. Ingest PDF and CSV bank feeds, match transactions
        against customer receipts and vendor payments using fuzzy reference and UTR matching, and apply
        custom automated reconciliation rules.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/bank-accounts" />
        <Endpoint method="POST" path="/api/v1/bank-accounts" />
        <Endpoint method="POST" path="/api/v1/bank-reconciliation/statements/upload" />
        <Endpoint method="POST" path="/api/v1/bank-reconciliation/auto-match" />
        <Endpoint method="GET" path="/api/v1/bank-reconciliation/rules" />
        <Endpoint method="POST" path="/api/v1/bank-reconciliation/rules" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Trigger Auto-Match</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/bank-reconciliation/auto-match \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "bankAccountId": "c1d2e3f4-1111-2222-3333-444455556666",
    "toleranceDays": 3
  }'`}</code>
      </pre>
    </>
  );
}
