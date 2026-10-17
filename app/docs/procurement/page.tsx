import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Procurement & GRN API — API Docs",
  description: `Manage supplier purchase orders, goods receipt notes (GRN), and 3-way matching via the ${brand.name} Procurement API.`,
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

export default function ProcurementPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Purchase Orders & Goods Receipt (GRN)</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        End-to-end purchasing control for distributors and retail enterprises. Convert stock shortages
        into Purchase Orders, inspect incoming supplier shipments with Goods Receipt Notes (GRN), capture
        batch numbers and expiry dates, and execute 3-way matching against supplier invoices.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/purchase-orders" />
        <Endpoint method="POST" path="/api/v1/purchase-orders" />
        <Endpoint method="POST" path="/api/v1/purchase-orders/{id}/approve" />
        <Endpoint method="POST" path="/api/v1/stock-receipts" />
        <Endpoint method="POST" path="/api/v1/stock-receipts/{id}/receive" />
        <Endpoint method="GET" path="/api/v1/three-way-match/{poId}" />
      </div>

      <div className="mt-4 rounded-lg border border-indigo-200 bg-indigo-50 px-5 py-4 text-sm text-indigo-800 dark:border-indigo-800/40 dark:bg-indigo-900/20 dark:text-indigo-300">
        <strong>Batch Ingestion:</strong> Calling <code>POST /api/v1/stock-receipts/&#123;id&#125;/receive</code> creates
        active inventory lots in <code>stock_batch_balance</code>, records landed unit cost for FIFO valuation,
        and assigns warehouse rack locations.
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create Purchase Order</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/purchase-orders \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "supplierId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "orderDate": "2026-10-17",
    "expectedDate": "2026-10-22",
    "lines": [
      {
        "itemId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        "quantity": 100,
        "unitPrice": 45.00,
        "gstRate": 5.00
      }
    ]
  }'`}</code>
      </pre>
    </>
  );
}
