import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "FIFO Inventory Costing & Transfers API — API Docs",
  description: `Track real-time FIFO lot consumption, inter-warehouse transfer orders, and picklist generation via the ${brand.name} Costing API.`,
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

export default function InventoryCostingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">FIFO Inventory Costing & Transfers</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Katixo supports strict FIFO (First-In, First-Out) lot tracking and Weighted Average costing.
        Every inbound receipt opens a cost lot; sales issues consume lots oldest-first to record exact
        Cost of Goods Sold (COGS) into the general ledger. Transfer orders preserve cost across branch moves.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/reports/fifo-valuation" />
        <Endpoint method="GET" path="/api/v1/transfer-orders" />
        <Endpoint method="POST" path="/api/v1/transfer-orders" />
        <Endpoint method="POST" path="/api/v1/transfer-orders/{id}/ship" />
        <Endpoint method="POST" path="/api/v1/transfer-orders/{id}/receive" />
        <Endpoint method="POST" path="/api/v1/picklists/generate" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get FIFO Stock Valuation</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/reports/fifo-valuation \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
    </>
  );
}
