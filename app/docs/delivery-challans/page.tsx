import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Delivery Challans API — API Docs",
  description: `Manage dispatch workflows, warehouse picklists, and stock deductions via the ${brand.name} Delivery Challan API.`,
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

export default function DeliveryChallansPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Delivery Challans & Dispatch</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Delivery Challans manage physical goods dispatch from warehouses. {brand.name} enforces strict
        stock validation upon dispatch, deducts batch lots according to FEFO (First-Expiry, First-Out),
        and safely converts to a final Tax Invoice without duplicate inventory movements.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/delivery-challans" />
        <Endpoint method="GET" path="/api/v1/delivery-challans/{id}" />
        <Endpoint method="POST" path="/api/v1/delivery-challans" />
        <Endpoint method="POST" path="/api/v1/delivery-challans/{id}/dispatch" />
        <Endpoint method="POST" path="/api/v1/delivery-challans/{id}/convert-to-invoice" />
        <Endpoint method="GET" path="/api/v1/delivery-challans/{id}/pdf" />
      </div>

      <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-900/20 dark:text-emerald-300">
        <strong>Dispatch Mechanics:</strong> Calling <code>/dispatch</code> executes strict inventory
        locking, checks batch balance, deducts stock, and records FIFO cost. When subsequently converted
        to a Sales Invoice, no redundant stock movement is triggered.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Dispatch a Delivery Challan</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/delivery-challans/{id}/dispatch" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Transitions status from <code className="rounded bg-slate-100 px-1 py-0.5 text-xs dark:bg-white/10">DRAFT</code> to{" "}
        <code className="rounded bg-slate-100 px-1 py-0.5 text-xs dark:bg-white/10">DISPATCHED</code>.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/delivery-challans/b4a2c1d0-1111-2222-3333-444455556666/dispatch \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Delivery challan dispatched and inventory deducted successfully",
  "data": {
    "id": "b4a2c1d0-1111-2222-3333-444455556666",
    "challanNumber": "DC/2026-27/0019",
    "status": "DISPATCHED",
    "dispatchedAt": "2026-10-17T09:15:00Z"
  }
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Convert Challan to Sales Invoice</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/delivery-challans/{id}/convert-to-invoice" />
      </div>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/delivery-challans/b4a2c1d0-1111-2222-3333-444455556666/convert-to-invoice \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
    </>
  );
}
