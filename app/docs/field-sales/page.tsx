import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Field Sales & Van Operations API — API Docs",
  description: `Manage FMCG beats, route planning, van stock, mobile order booking, and day-close cash reconciliation via the ${brand.name} Field Sales API.`,
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

export default function FieldSalesPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">FMCG Field Sales, Beats & Van Stock</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Engineered for consumer goods and beverage distributors operating on-the-road sales forces.
        Coordinates customer beats, daily route sequences, mobile van stock inventory, GPS visit check-ins,
        order booking, and evening cash reconciliation.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/field-sales/beats" />
        <Endpoint method="POST" path="/api/v1/field-sales/beats" />
        <Endpoint method="GET" path="/api/v1/field-sales/routes" />
        <Endpoint method="POST" path="/api/v1/field-sales/routes" />
        <Endpoint method="POST" path="/api/v1/field-sales/route-executions" />
        <Endpoint method="POST" path="/api/v1/field-sales/visits/{id}/check-in" />
        <Endpoint method="POST" path="/api/v1/field-sales/visits/{id}/orders" />
        <Endpoint method="POST" path="/api/v1/field-sales/visits/{id}/collections" />
        <Endpoint method="POST" path="/api/v1/field-sales/van-transfers/load" />
        <Endpoint method="POST" path="/api/v1/field-sales/day-close/initiate" />
        <Endpoint method="POST" path="/api/v1/field-sales/day-close/{id}/submit" />
      </div>

      <div className="mt-4 rounded-lg border border-orange-200 bg-orange-50 px-5 py-4 text-sm text-orange-800 dark:border-orange-800/40 dark:bg-orange-900/20 dark:text-orange-300">
        <strong>Cash Reconciliation &amp; Fraud Prevention:</strong> Evening day-close matches opening cash,
        total field collections, petty fuel/toll expenses, and deposited cash to calculate exact variance
        before an admin signs off on route closure.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Record Visit Check-In</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/field-sales/visits/{id}/check-in" />
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/field-sales/visits/33333333-4444-5555-6666-777788889999/check-in \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "latitude": 18.5204,
    "longitude": 73.8567,
    "batteryLevel": 88
  }'`}</code>
      </pre>
    </>
  );
}
