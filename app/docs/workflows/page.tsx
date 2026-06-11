import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflows & Approvals API — API Docs",
  description: "Configure approval workflows and manage approval requests via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function WorkflowsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Workflows &amp; Approvals</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Configure multi-step approval workflows for invoices, purchase bills, expenses, and
        other documents. When a document triggers a workflow, it enters a pending state until
        approved by the designated approvers.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Workflow configuration</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/workflows" />
        <Endpoint method="GET" path="/api/v1/workflows/{id}" />
        <Endpoint method="PUT" path="/api/v1/workflows/{id}" />
        <Endpoint method="PUT" path="/api/v1/workflows/{id}/steps" />
      </div>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">List workflows</h3>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/workflows" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all workflow definitions for your organization. Each workflow is tied to a
        document type (e.g., invoices, purchase bills, expenses).
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Workflows retrieved",
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "Purchase Bill Approval",
      "documentType": "PURCHASE_BILL",
      "enabled": true,
      "steps": [
        {
          "stepOrder": 1,
          "approverRole": "ACCOUNTANT",
          "threshold": 50000.00,
          "description": "Bills above ₹50,000 need accountant approval"
        },
        {
          "stepOrder": 2,
          "approverRole": "OWNER",
          "threshold": 200000.00,
          "description": "Bills above ₹2,00,000 need owner approval"
        }
      ]
    }
  ],
  "errors": null
}`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Update workflow</h3>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/workflows/{id}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Enable, disable, or rename a workflow. Requires OWNER or ADMIN role.
      </p>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Replace workflow steps</h3>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/workflows/{id}/steps" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Replace all steps in a workflow. Send the complete list of steps — existing steps are
        removed and replaced. Requires OWNER or ADMIN role.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Approval requests</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/workflow/approval-requests" />
        <Endpoint method="GET" path="/api/v1/workflow/approval-requests/{id}" />
        <Endpoint method="GET" path="/api/v1/workflow/approval-requests/document/{documentType}/{documentId}" />
        <Endpoint method="POST" path="/api/v1/workflow/approval-requests/{id}/approve" />
        <Endpoint method="POST" path="/api/v1/workflow/approval-requests/{id}/reject" />
      </div>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">List approval requests</h3>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/workflow/approval-requests" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns paginated approval requests. Filter by status to see pending items that need your attention.
      </p>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Query parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Filter by approval status: PENDING, APPROVED, REJECTED.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">page</code>, <code className="text-xs">size</code>, <code className="text-xs">sort</code></td>
              <td className="py-2.5 pr-4">int / string</td>
              <td className="py-2.5">Pagination (0-indexed, default size: 20).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Approve or reject</h3>
      <div className="mt-3 space-y-2">
        <Endpoint method="POST" path="/api/v1/workflow/approval-requests/{id}/approve" />
        <Endpoint method="POST" path="/api/v1/workflow/approval-requests/{id}/reject" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Approve or reject a pending approval request. Optionally include a comment:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/workflow/approval-requests/{id}/approve \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{ "comment": "Verified against PO. Approved." }'`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Requires OWNER, ADMIN, or ACCOUNTANT role. When all required steps are approved, the
        underlying document transitions to its next status (e.g., a purchase bill moves from PENDING_APPROVAL to POSTED).
      </p>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Get approval for a document</h3>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/workflow/approval-requests/document/{documentType}/{documentId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Look up the approval request for a specific document. For example, to check the approval
        status of a purchase bill:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/workflow/approval-requests/document/PURCHASE_BILL/c3d4e5f6-... \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
    </>
  );
}
