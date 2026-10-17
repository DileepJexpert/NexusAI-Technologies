import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Indian Payroll API — API Docs",
  description: `Automate Indian SMB payroll, statutory PF, ESI, Professional Tax, and automatic journal posting via the ${brand.name} Payroll API.`,
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

export default function PayrollPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Indian Payroll & Statutory Compliance</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Complete payroll lifecycle for Indian SMBs. Computes Provident Fund (PF 12%), Employee State
        Insurance (ESI 0.75% / 3.25%), state-specific Professional Tax (PT), Labour Welfare Fund (LWF),
        and TDS deduction with automated posting into double-entry accounting ledgers.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/payroll/employees" />
        <Endpoint method="POST" path="/api/v1/payroll/employees" />
        <Endpoint method="GET" path="/api/v1/payroll/runs" />
        <Endpoint method="POST" path="/api/v1/payroll/runs" />
        <Endpoint method="POST" path="/api/v1/payroll/runs/{id}/calculate" />
        <Endpoint method="POST" path="/api/v1/payroll/runs/{id}/approve" />
        <Endpoint method="POST" path="/api/v1/payroll/runs/{id}/post" />
        <Endpoint method="GET" path="/api/v1/payroll/runs/{id}/payslips" />
        <Endpoint method="POST" path="/api/v1/payroll/payments" />
      </div>

      <div className="mt-4 rounded-lg border border-purple-200 bg-purple-50 px-5 py-4 text-sm text-purple-800 dark:border-purple-800/40 dark:bg-purple-900/20 dark:text-purple-300">
        <strong>Automatic Journal Postings:</strong> When a payroll run is posted (<code>POST /post</code>),
        Katixo automatically creates a double-entry journal voucher debiting Salary Expense and Employer
        Contributions, and crediting Salary Payable, PF Payable, ESI Payable, and PT Payable accounts.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a Payroll Run</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/payroll/runs" />
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/payroll/runs \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "year": 2026,
    "month": 10,
    "title": "October 2026 Regular Payroll"
  }'

# Response
{
  "success": true,
  "message": "Payroll run initiated",
  "data": {
    "id": "c1d2e3f4-5555-6666-7777-888899990000",
    "year": 2026,
    "month": 10,
    "status": "DRAFT",
    "employeeCount": 24,
    "totalGross": 0.00
  }
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Calculate Statutory Slabs</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/payroll/runs/{id}/calculate" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Calculates all employee payslips using statutory formulas:
      </p>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-400">
        <li><strong>PF:</strong> 12% of Basic (capped as per statutory wage rules).</li>
        <li><strong>ESI:</strong> 0.75% employee + 3.25% employer if Gross &le; ₹21,000.</li>
        <li><strong>PT:</strong> State-wise slab calculation (e.g. Maharashtra ₹200 / ₹300).</li>
        <li><strong>TDS:</strong> Tax deduction per selected tax regime (New vs Old).</li>
      </ul>
    </>
  );
}
