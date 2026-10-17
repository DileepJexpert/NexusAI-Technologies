import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Custom Report Builder API — API Docs",
  description: `Build ad-hoc reports with dynamic columns, filters, and automated cron email distribution via the ${brand.name} API.`,
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

export default function CustomReportsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Custom Report Builder & Schedules</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The Custom Report Builder empowers accountants, CFOs, and business owners to design ad-hoc
        reports with custom column selections, multidimensional JSON filters, and automated scheduled
        email deliveries directly from {brand.name}.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/saved-reports" />
        <Endpoint method="POST" path="/api/v1/saved-reports" />
        <Endpoint method="GET" path="/api/v1/saved-reports/{id}" />
        <Endpoint method="PUT" path="/api/v1/saved-reports/{id}" />
        <Endpoint method="DELETE" path="/api/v1/saved-reports/{id}" />
        <Endpoint method="GET" path="/api/v1/saved-reports/{id}/schedules" />
        <Endpoint method="POST" path="/api/v1/saved-reports/{id}/schedules" />
        <Endpoint method="DELETE" path="/api/v1/saved-reports/{id}/schedules/{scheduleId}" />
      </div>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Roles:</strong> OWNER, ADMIN, ACCOUNTANT. All entities are organization-scoped through
        multi-tenant tenancy context.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The SavedReport Object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Report retrieved successfully",
  "data": {
    "id": "e9b2c3d4-1234-4567-89ab-cdef01234567",
    "orgId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "name": "High Value Pharmacy Sales - Weekly",
    "description": "Weekly sales invoices exceeding Rs 25,000 for Schedule H items",
    "baseReportKey": "SALES_REGISTER",
    "columnKeys": [
      "invoiceNumber",
      "invoiceDate",
      "customerName",
      "taxableAmount",
      "gstRate",
      "taxAmount",
      "totalAmount"
    ],
    "filters": {
      "minAmount": 25000,
      "status": "SENT",
      "dateRange": "LAST_7_DAYS"
    },
    "tags": ["pharma", "audit", "high-value"],
    "isPublic": true,
    "createdBy": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "createdAt": "2026-10-15T10:30:00Z"
  }
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a Saved Report</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/saved-reports" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Saves a custom query template for repeated execution or automated scheduling.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/saved-reports \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Pending Challans Not Invoiced",
    "description": "Delivery challans dispatched but missing invoice conversion",
    "baseReportKey": "CHALLAN_NOT_INVOICED",
    "columnKeys": ["challanNumber", "challanDate", "customerName", "dispatchedQty"],
    "filters": { "agingDaysGreaterThan": 3 },
    "tags": ["distributor", "fulfillment"],
    "isPublic": true
  }'`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Add an Automated Schedule</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/saved-reports/{id}/schedules" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Schedules a background cron worker to run the report and email CSV/PDF digests to stakeholders.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/saved-reports/e9b2c3d4-1234-4567-89ab-cdef01234567/schedules \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "frequency": "WEEKLY",
    "dayOfWeek": 1,
    "sendTime": "08:30",
    "recipientEmails": ["auditor@katixo.com", "finance-head@acme.in"],
    "subjectTemplate": "[Weekly Audit] {{reportName}} - {{date}}",
    "active": true
  }'`}</code>
      </pre>
    </>
  );
}
