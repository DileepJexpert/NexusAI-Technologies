import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Upload,
  Sparkles,
  ShieldCheck,
  FileText,
  FileCheck2,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Autonomous Banking & Auto-Reconciliation Guide — Katixo Docs",
  description: `Complete guide to automated bank statement feeds, fuzzy AI matching, one-click reconciliation, and Bank Reconciliation Statements (BRS) in ${brand.name} ERP.`,
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

export default function BankingPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Treasury & Banking Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Autonomous Bank Feeds & Auto-Reconciliation
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Reconcile thousands of bank transactions in minutes. Import bank statements from any Indian bank
          (HDFC, ICICI, SBI, Axis), run rule-based and AI fuzzy matching on UTR numbers and UPI narratives,
          and produce certified Bank Reconciliation Statements (BRS) with zero variance.
        </p>
      </div>

      {/* 1. Module Overview: Why Autonomous Reconciliation? */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Landmark className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: Eliminating Manual Passbook Ticking</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          High-volume distributors and retail chains receive hundreds of customer payments daily via UPI, NEFT,
          and RTGS. Without automation, accountants spend days manually matching statement lines with ERP invoices:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">UTR & UPI Matching</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Extracts 12-digit UTR numbers and UPI transaction IDs directly from messy bank narration lines.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">One-Click Expense Creation</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Directly books bank charges, loan EMIs, and interest credits into the General Ledger from the statement line.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Audit-Proof BRS</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Generates formal Bank Reconciliation Statements explaining unpresented cheques and uncleared deposits.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step: How to Import & Reconcile */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Upload className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Reconcile a Bank Account (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Go to Banking &gt; Select Bank Account:</strong>
                Choose your current or overdraft account. Click <strong>"Import Statement"</strong>.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Upload Bank File (CSV, OFX, or Excel):</strong>
                Katixo supports statement exports from all major Indian banks. The ingestion engine parses transaction dates, withdrawal/deposit amounts, cheque numbers, and narration text.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Review AI & Rule Matches:</strong>
                <ul className="mt-1 space-y-1 text-[11px]">
                  <li><strong className="text-emerald-700 dark:text-emerald-400">Green (High Confidence):</strong> Exact match on UTR number, date proximity, and amount. Click <em>"Approve All Green"</em> to clear hundreds of rows at once.</li>
                  <li><strong className="text-amber-700 dark:text-amber-400">Amber (Multiple Candidates):</strong> Multiple invoices exist for the same customer amount. Click the row to select the intended invoice.</li>
                </ul>
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Handle Un-booked Bank Debits/Credits:</strong>
                For monthly bank charges, interest, or loan EMI debits, click <em>"Create Transaction"</em> directly from the statement line. Select the expense account; Katixo books the journal entry and reconciles the row instantly.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">5</span>
              <div>
                <strong>Lock Reconciliation Period:</strong>
                Once variance reaches ₹0.00, click <strong>"Lock Period"</strong>. Generates an official BRS report and prevents retrospective modifications.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/banking/accounts" />
          <Endpoint method="POST" path="/api/v1/banking/statements/upload" />
          <Endpoint method="GET" path="/api/v1/banking/reconciliation/{accountId}" />
          <Endpoint method="POST" path="/api/v1/banking/reconciliation/match" />
          <Endpoint method="POST" path="/api/v1/banking/reconciliation/auto-match" />
        </div>
      </section>
    </div>
  );
}
