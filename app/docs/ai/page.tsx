import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "AI Review & Suggestions API — API Docs",
  description: `Automate anomaly detection, OCR bill scanning, and exception reviews via the ${brand.name} AI Decision API.`,
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

export default function AiPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">AI Decision Layer & Suggestions</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Katixo embeds an agentic AI review layer designed around the principle:{" "}
        <em>observe &rarr; suggest &rarr; human review &rarr; learn</em>. AI agents inspect domain events
        (invoices posted, bills received, bank feeds) to detect duplicate expenses, tax mismatches, and
        overdue credit limits without ever altering ledgers autonomously.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/ai/suggestions" />
        <Endpoint method="POST" path="/api/v1/ai/suggestions/{id}/accept" />
        <Endpoint method="POST" path="/api/v1/ai/suggestions/{id}/reject" />
        <Endpoint method="POST" path="/api/v1/ai/scan/bill" />
        <Endpoint method="POST" path="/api/v1/ai/query" />
      </div>

      <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-800 dark:border-rose-800/40 dark:bg-rose-900/20 dark:text-rose-300">
        <strong>Safety Guardrails:</strong> AI suggestions remain in a pending queue until accepted by an
        authorized user (OWNER or ADMIN). All actions execute through existing validated business services.
      </div>
    </>
  );
}
