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
        Subscribe to updates via webhook or check this page periodically.
      </p>

      <div className="mt-8 space-y-10">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">June 11, 2026</h2>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              New
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>Bank Reconciliation API</strong> — Import bank statements, auto-match transactions, and check reconciliation status. Supports CSV, OFX, and XLSX from major Indian banks.</li>
            <li><strong>Webhooks</strong> — Real-time event notifications. Register endpoints and receive HTTP POST callbacks for invoice, payment, and inventory events.</li>
            <li><strong>Ledger reports API</strong> — Access trial balance, profit &amp; loss, balance sheet, and day book reports via the API.</li>
          </ul>
        </div>

        <div className="border-t border-slate-200 pt-8 dark:border-white/10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">May 20, 2026</h2>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Improved
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>Batch and expiry tracking</strong> — Items API now supports <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">batch_tracking</code> and <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">expiry_tracking</code> fields. Inventory endpoints return batch-level stock with near-expiry flags.</li>
            <li><strong>MSME supplier tracking</strong> — Parties API now includes <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">is_msme</code> and <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">udyam_number</code> fields for section 43B(h) compliance tracking.</li>
            <li><strong>Invoice PDF endpoint</strong> — New <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">GET /v1/invoices/:id/pdf</code> returns a rendered PDF using your organization template.</li>
          </ul>
        </div>

        <div className="border-t border-slate-200 pt-8 dark:border-white/10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">April 15, 2026</h2>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              New
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>GST API</strong> — GSTR-1 data, HSN summary, and tax summary endpoints. Generate filing-ready data directly from your invoice records.</li>
            <li><strong>Outstanding report</strong> — New <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">GET /v1/parties/:id/outstanding</code> returns invoice-wise outstanding with ageing buckets.</li>
          </ul>
        </div>

        <div className="border-t border-slate-200 pt-8 dark:border-white/10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">March 1, 2026</h2>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Launch
            </span>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><strong>Initial API release</strong> — Core endpoints for Invoices, Items, Customers &amp; Parties, and Inventory. Authentication via API keys with scoped permissions.</li>
            <li><strong>Test environment</strong> — Separate test keys (<code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ktx_test_</code>) for development with isolated data.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
