import type { Metadata } from "next";
import Link from "next/link";
import {
  Workflow,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Inbox,
  UserCheck,
  Layers,
  Lock,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Multi-Level Approval Workflows Guide — Katixo Docs",
  description: `Complete guide to multi-tier approval workflows, internal governance, monetary thresholds, anti-self-approval rules, and approval inboxes in ${brand.name} ERP.`,
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    DRAFT: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
    PENDING_APPROVAL: "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
    APPROVED: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    REJECTED: "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status] || styles.DRAFT}`}>
      {status}
    </span>
  );
}

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function WorkflowsPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Governance & Internal Controls Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Multi-Level Approval Workflows
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Enforce internal fiscal governance across your enterprise. Configure customizable monetary thresholds
          for Purchase Orders, Credit Notes, Vendor Payments, and Day-Close settlements, backed by ironclad
          anti-self-approval protections and unified manager review inboxes.
        </p>
      </div>

      {/* 1. Module Overview: Why Approval Workflows? */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Workflow className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: Segregation of Duties (SoD)</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          As businesses expand beyond a single office, business owners cannot inspect every invoice directly.
          Approval workflows create clear boundaries: junior operators create transactions, while managers review
          and sign off on high-value commitments:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Tiered Monetary Thresholds</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Set escalating levels (e.g. Orders &gt; ₹50,000 need Accountant; &gt; ₹2,00,000 need Business Owner).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Anti-Self-Approval</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              The system strictly blocks users from approving requests they originated, preventing unauthorized self-authorization.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Audit Trails</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Every approval and rejection records timestamp, IP, approver user ID, and mandatory decision comments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Configuration */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Configure an Approval Rule (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Go to Settings &gt; Approval Workflows:</strong>
                Select the target document type: <em>Purchase Order</em>, <em>Purchase Bill</em>, <em>Credit Note</em>, <em>Vendor Payment</em>, or <em>Field Sales Day Close</em>.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Define Approval Steps &amp; Thresholds:</strong>
                Add sequential approval levels:
                <ul className="mt-1 space-y-0.5 text-[11px]">
                  <li><strong>Step 1:</strong> Threshold ₹50,000.00 — Approver Role: <code className="text-blue-600">ACCOUNTANT</code>.</li>
                  <li><strong>Step 2:</strong> Threshold ₹2,00,000.00 — Approver Role: <code className="text-purple-600">OWNER</code>.</li>
                </ul>
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Activate Workflow:</strong>
                Toggle the workflow to <em>Active</em>. Any future document created by an operator with value exceeding the threshold will automatically transition to <StatusBadge status="PENDING_APPROVAL" /> upon save.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Managing the Approval Inbox */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Inbox className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Managing the Manager Approval Inbox</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Designated approvers receive pending requests in their unified <strong>Approval Inbox</strong>:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02] text-xs space-y-2 text-slate-600 dark:text-slate-400">
          <p>• <strong>Review Request:</strong> Approver inspects document lines, vendor details, and attached files.</p>
          <p>• <strong>Approve:</strong> Approver signs off. If multiple tiers exist, the request advances to the next step; once all steps pass, status updates to <StatusBadge status="APPROVED" />.</p>
          <p>• <strong>Reject:</strong> Approver provides mandatory rejection notes. The document reverts to <StatusBadge status="REJECTED" /> so the creator can revise and re-submit.</p>
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
          <Endpoint method="GET" path="/api/v1/workflows" />
          <Endpoint method="GET" path="/api/v1/workflow-requests/pending" />
          <Endpoint method="POST" path="/api/v1/workflow-requests/{id}/approve" />
          <Endpoint method="POST" path="/api/v1/workflow-requests/{id}/reject" />
        </div>
      </section>
    </div>
  );
}
