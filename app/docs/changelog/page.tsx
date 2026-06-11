import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — API Docs",
  description: "Katixo API changelog — new endpoints, changes, and deprecations.",
};

export default function ChangelogPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Changelog</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        A record of additions, changes, and deprecations to the Katixo API.
      </p>

      <div className="mt-8 space-y-10">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">June 2026</h2>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              New
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>Workflows &amp; Approvals</strong> — Configure multi-step approval workflows for invoices, purchase bills, and expenses. Approve or reject pending requests via API.</li>
            <li><strong>Recurring Invoices</strong> — Set up automated billing schedules with weekly, monthly, quarterly, or yearly frequency. Stop and resume schedules on demand.</li>
            <li><strong>Expense API</strong> — Full CRUD for business expenses with automatic journal entry creation, GST handling, and billable expense tracking.</li>
            <li><strong>Stock Counts</strong> — Create physical stock counts, compare against book quantities, and post variance adjustments automatically.</li>
          </ul>
        </div>

        <div className="border-t border-slate-200 pt-8 dark:border-white/10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">May 2026</h2>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Improved
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>GST Review Center</strong> — New <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">GET /api/v1/gst/review-center</code> endpoint identifies missing GSTINs, invalid HSN codes, and other filing errors before you generate returns.</li>
            <li><strong>GSTR-3B endpoint</strong> — Summary tax liability data for GSTR-3B filing with output tax, ITC, and net payable breakdowns.</li>
            <li><strong>Excel exports</strong> — GSTR-1 and GSTR-3B data can now be downloaded as Excel files via <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">/export</code> endpoints.</li>
            <li><strong>Purchase bill PDF</strong> — New <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">GET /api/v1/bills/{'{id}'}/pdf</code> generates downloadable PDFs.</li>
          </ul>
        </div>

        <div className="border-t border-slate-200 pt-8 dark:border-white/10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">April 2026</h2>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Improved
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>Batch &amp; expiry tracking</strong> — Near-expiry batch query endpoint. Items with <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">trackBatches: true</code> now support FEFO-sorted available batch queries.</li>
            <li><strong>Invoice payments</strong> — Record, list, and delete payments against invoices. Track partial payments and balance due.</li>
            <li><strong>Bulk operations</strong> — Bulk send and bulk cancel endpoints for invoices.</li>
            <li><strong>BOM support</strong> — Items API now supports Bill of Materials (BOM) for composite items.</li>
            <li><strong>CSV import</strong> — Import items in bulk via CSV with template download and detailed import results.</li>
          </ul>
        </div>

        <div className="border-t border-slate-200 pt-8 dark:border-white/10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">March 2026</h2>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Launch
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>Initial API release</strong> — Core endpoints for Authentication (JWT/OTP), Invoices, Items, Contacts, Purchase Bills, Inventory/Batches, and GST.</li>
            <li><strong>JWT authentication</strong> — OTP-based signup, password login, refresh tokens, multi-org switching, and role-based access control (OWNER, ADMIN, ACCOUNTANT, OPERATOR, VIEWER).</li>
            <li><strong>Module system</strong> — Organizations can enable modules (INVENTORY, GST, BATCH_EXPIRY, RECURRING_BILLING, PHARMACY, etc.) to unlock API capabilities.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
