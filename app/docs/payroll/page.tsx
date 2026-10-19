import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Calculator,
  Building2,
  FileSpreadsheet,
  Download,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Indian Payroll & Statutory Compliance Guide — Katixo Docs",
  description: `Complete operational guide to Indian SMB payroll, statutory slabs (EPF, ESI, PT, TDS), monthly salary runs, and automated General Ledger posting in ${brand.name} ERP.`,
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    DRAFT: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
    CALCULATED: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    APPROVED: "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
    POSTED: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    CANCELLED: "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",
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
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function PayrollPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          HR, Payroll & Statutory Compliance Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Indian SMB Payroll & Statutory Slabs Engine
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Designed specifically for Indian businesses. Manage employee masters, configure salary structures
          conforming to the New Wage Code, automate statutory deductions (EPF, ESI, Professional Tax, LWF, TDS),
          generate bank payout files, and post compound salary journals automatically to the General Ledger.
        </p>
      </div>

      {/* 1. Indian Statutory Compliance Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: Indian Statutory Rules Engine</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Katixo ERP embeds India&apos;s statutory labor rules directly into the payroll calculation engine:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Employees&apos; Provident Fund (EPF)</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>12% Employee + 12% Employer</strong> of Basic + DA. Capped at ₹15,000 monthly statutory ceiling by default (with optional un-capped employer contribution). Employer share is split into 3.67% EPF + 8.33% EPS.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Employees&apos; State Insurance (ESI)</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>0.75% Employee + 3.25% Employer</strong> of Gross Salary. Applicable automatically for all staff with monthly gross wages ≤ ₹21,000. Exempt for staff earning above threshold.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Professional Tax (PT) Slabs</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
              State-specific statutory monthly slabs (e.g. Maharashtra ₹200/mo and ₹300 in Feb; Karnataka ₹200/mo for gross &gt; ₹15,000; Telangana, Gujarat, West Bengal).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">TDS (Section 192) & LWF</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
              Monthly Tax Deducted at Source based on employee tax regime (Old vs New Regime) and state-specific Labour Welfare Fund semi-annual deductions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step: Setting Up Salary Structures */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Calculator className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Configure Employee Salary Structures</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Add Employee Profile:</strong> Navigate to <strong>Payroll &gt; Employees &gt; "Add Employee"</strong>. Enter full name, PAN, Aadhaar, Universal Account Number (UAN for PF), ESIC IP Number, and Bank Account with IFSC.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Assign Salary Components (Wage Code Compliant):</strong> Under employee profile, set CTC. The system automatically partitions:
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px]">
                  <li><strong>Basic Salary:</strong> 50% of monthly gross (ensures statutory minimum under Wage Code).</li>
                  <li><strong>House Rent Allowance (HRA):</strong> 40% (non-metro) or 50% (metro) of Basic.</li>
                  <li><strong>Special Allowance / Conveyance:</strong> Balancing figure for remaining gross.</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Running Monthly Payroll (The 4-Step UI Walkthrough) */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Running Monthly Payroll (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-3.5">
          <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
            <div>
              <strong className="text-slate-900 dark:text-white">Initiate Payroll Run:</strong>
              Go to <strong>Payroll &gt; Payroll Runs &gt; Click "New Payroll Run"</strong>. Select the month and year (e.g., <em>October 2026</em>). The system initializes in <StatusBadge status="DRAFT" /> and loads all active staff.
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
            <div>
              <strong className="text-slate-900 dark:text-white">Input Attendance & Leaves:</strong>
              Enter total working days, days worked, and Loss of Pay (LOP) unpaid absences. Katixo auto-prorates basic and allowances accordingly.
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
            <div>
              <strong className="text-slate-900 dark:text-white">Execute "Calculate":</strong>
              Click the <strong>"Calculate"</strong> button. The system evaluates EPF, ESI, state PT slab, and TDS for every staff member. Run status advances to <StatusBadge status="CALCULATED" />. Staff can view draft payslips.
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
            <div>
              <strong className="text-slate-900 dark:text-white">Approve & Disburse:</strong>
              Authorized business owner or HR manager clicks <strong>"Approve Payroll"</strong> (<StatusBadge status="APPROVED" />). Download the bank NEFT/RTGS CSV file to upload directly into your corporate internet banking (HDFC, ICICI, SBI).
            </div>
          </div>
        </div>
      </section>

      {/* 4. Automated General Ledger Posting */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>4. Automated General Ledger Journal Posting</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Katixo eliminates manual journal entries. Clicking <strong>"Post to Ledger"</strong> automatically creates a balanced double-entry General Ledger journal:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02] font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
          <div className="text-emerald-700 dark:text-[#b3ed97] font-bold mb-1.5 font-sans">Compound Journal Entry (Generated on Post):</div>
          <p>• DEBIT: Salary Expense (Account 6000) — [Total Gross Earnings]</p>
          <p>• DEBIT: Employer EPF Contribution (Account 6010) — [12% Employer Share]</p>
          <p>• DEBIT: Employer ESI Contribution (Account 6020) — [3.25% Employer Share]</p>
          <p>• CREDIT: Salary Payable (Account 2100) — [Net Payable to Employees]</p>
          <p>• CREDIT: EPF Payable (Account 2110) — [Combined Employee + Employer PF]</p>
          <p>• CREDIT: ESI Payable (Account 2120) — [Combined Employee + Employer ESI]</p>
          <p>• CREDIT: Professional Tax Payable (Account 2130)</p>
          <p>• CREDIT: TDS Payable (Account 2140)</p>
        </div>
      </section>

      {/* 5. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/payroll/runs" />
          <Endpoint method="POST" path="/api/v1/payroll/runs" />
          <Endpoint method="POST" path="/api/v1/payroll/runs/{id}/calculate" />
          <Endpoint method="POST" path="/api/v1/payroll/runs/{id}/approve" />
          <Endpoint method="POST" path="/api/v1/payroll/runs/{id}/post-journal" />
          <Endpoint method="GET" path="/api/v1/payroll/runs/{id}/bank-file" />
        </div>
      </section>
    </div>
  );
}
