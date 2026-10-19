import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Scan,
  ShieldCheck,
  Sparkles,
  Inbox,
  Eye,
  TrendingUp,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "AI Decision Engine & Review Inbox Guide — Katixo Docs",
  description: `Complete guide to the AI Decision Layer in ${brand.name} ERP: OCR bill scanning, anomaly detection, inventory intelligence, and the human-in-the-loop review inbox.`,
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function AiDocsPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          AI & Decision Intelligence Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          AI Decision Engine & Human Review Inbox
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          AI designed for enterprise finance where accuracy is non-negotiable. Explore Katixo&apos;s
          <em> Observe-Suggest-Review-Learn</em> framework: automate supplier bill ingestion via smart OCR,
          detect pricing and tax anomalies in real time, and verify every action through a safe human-in-the-loop review inbox.
        </p>
      </div>

      {/* 1. Core AI Architecture: Observe -> Suggest -> Review -> Learn */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Architectural Safety: Zero Autonomous Writes</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          In financial accounting, an unverified AI hallucination can corrupt ledgers or trigger GST audit penalties.
          {brand.name} enforces an ironclad architectural contract:
        </p>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs text-emerald-950 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200 space-y-2">
          <div className="font-bold flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-[#b3ed97]" />
            <span>The 4-Step Safety Lifecycle</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-4 font-mono text-[11px]">
            <div className="rounded bg-white/80 p-2.5 dark:bg-black/40">
              <strong>1. Observe:</strong> Event listeners monitor domain transactions (invoices posted, GRNs received).
            </div>
            <div className="rounded bg-white/80 p-2.5 dark:bg-black/40">
              <strong>2. Suggest:</strong> Models formulate structured, explainable recommendations.
            </div>
            <div className="rounded bg-white/80 p-2.5 dark:bg-black/40">
              <strong>3. Review:</strong> Suggestions land in the business owner&apos;s Review Inbox.
            </div>
            <div className="rounded bg-white/80 p-2.5 dark:bg-black/40">
              <strong>4. Learn:</strong> Operator accept/reject decisions tune future confidence thresholds.
            </div>
          </div>
          <p className="text-[11px] font-semibold text-emerald-900 dark:text-emerald-300">
            *AI never directly posts to the General Ledger, adjusts inventory balances, or files statutory tax without explicit human authorization.
          </p>
        </div>
      </section>

      {/* 2. Key AI Capabilities */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Bot className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. Core AI Capabilities in Katixo ERP</span>
        </h2>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1.5">
              <Scan className="h-4 w-4 text-emerald-600" />
              <span>Smart Bill OCR</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Upload vendor invoice photos or PDFs. Multimodal AI extracts vendor GSTIN, invoice number, items, quantities, HSN, and GST splits to pre-fill draft bills.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1.5">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span>Anomaly Detection</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Flags unapproved price increases on raw materials (&gt;10% variance), duplicate invoice numbers, and abnormal customer overdue debt patterns.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1.5">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>Inventory Intelligence</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Evaluates 90-day sales run rates and supplier lead times to predict impending stockouts and recommend optimal reorder batch sizes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Step-by-Step: The Review Inbox Walkthrough */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Inbox className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Managing the AI Review Inbox (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Navigate to AI Review Inbox:</strong> Click the AI Copilot icon in the top header or open <strong>AI &gt; Review Inbox</strong>.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Inspect Suggestion Cards:</strong> Each suggestion provides full contextual justification, confidence rating (e.g. 96%), and estimated financial impact.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Take Action with One Click:</strong>
                <ul className="mt-1 space-y-0.5 text-[11px]">
                  <li><strong>Accept:</strong> Instantly executes the proposed workflow (e.g. drafts the reorder PO or updates price list).</li>
                  <li><strong>Modify:</strong> Adjust quantities or dates before accepting.</li>
                  <li><strong>Reject:</strong> Dismisses the suggestion. Operators can provide optional reasons to train future suggestions.</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/ai/suggestions" />
          <Endpoint method="POST" path="/api/v1/ai/suggestions/{id}/accept" />
          <Endpoint method="POST" path="/api/v1/ai/suggestions/{id}/reject" />
          <Endpoint method="POST" path="/api/v1/ai/scan-bill" />
        </div>
      </section>
    </div>
  );
}
