import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "API Documentation",
  description: `${brand.name} API reference — integrate invoicing, inventory, GST, and bank reconciliation into your workflow.`,
};

function QuickLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-slate-200 p-5 transition-all hover:border-accent/40 hover:shadow-md dark:border-white/10 dark:hover:border-accent/40"
    >
      <div className="font-semibold text-slate-900 group-hover:text-accent dark:text-white">{title}</div>
      <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</div>
    </Link>
  );
}

export default function DocsOverview() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{brand.name} API</h1>
      <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
        Build integrations with {brand.name}&apos;s accounting, invoicing, inventory, and GST
        compliance platform. The API follows REST conventions, uses JSON for all
        request and response bodies, and authenticates via API keys.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800 dark:border-amber-800/40 dark:bg-amber-900/20 dark:text-amber-300">
        <strong>Beta notice:</strong> The {brand.name} API is in active development. Endpoints
        documented here are stable, but new endpoints and fields may be added. Breaking changes
        will be announced with at least 30 days notice via the changelog.
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Base URL</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>https://api.katixo.com/v1</code>
      </pre>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        All API requests must be made over HTTPS. HTTP requests are rejected.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Quick start</h2>
      <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-400">
        <p>1. Generate an API key from your <strong>Settings → API Keys</strong> page in the {brand.name} dashboard.</p>
        <p>2. Make your first request:</p>
      </div>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/v1/invoices \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json"`}</code>
      </pre>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        This returns a paginated list of your invoices. See <Link href="/docs/authentication" className="text-accent hover:underline">Authentication</Link> for details on API key types and scopes.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Resources</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <QuickLink
          href="/docs/authentication"
          title="Authentication"
          description="API keys, scopes, and security best practices."
        />
        <QuickLink
          href="/docs/invoices"
          title="Invoices"
          description="Create, list, and manage GST-compliant invoices."
        />
        <QuickLink
          href="/docs/items"
          title="Items"
          description="Product and service catalog with HSN codes and tax rates."
        />
        <QuickLink
          href="/docs/customers"
          title="Customers & Parties"
          description="Manage customers, suppliers, and their ledger balances."
        />
        <QuickLink
          href="/docs/inventory"
          title="Inventory"
          description="Stock levels, adjustments, batch tracking, and transfers."
        />
        <QuickLink
          href="/docs/gst"
          title="GST & Tax"
          description="GSTR-1 data, HSN summary, and tax computation."
        />
        <QuickLink
          href="/docs/bank-reconciliation"
          title="Bank Reconciliation"
          description="Import statements, auto-match, and reconciliation status."
        />
        <QuickLink
          href="/docs/webhooks"
          title="Webhooks"
          description="Real-time event notifications for invoices, payments, and stock."
        />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Conventions</h2>
      <div className="mt-3 space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <div>
          <strong className="text-slate-900 dark:text-white">Pagination</strong> — List endpoints return paginated results. Use <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">page</code> and <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">per_page</code> query parameters. Default page size is 25, maximum is 100.
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white">Dates</strong> — All dates are in ISO 8601 format (<code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">2026-06-11T10:30:00+05:30</code>). Financial dates (invoice date, due date) use <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">YYYY-MM-DD</code>.
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white">Amounts</strong> — All monetary amounts are in the smallest currency unit (paise for INR). ₹1,234.56 is represented as <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">123456</code>.
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white">IDs</strong> — All resource IDs are prefixed strings (e.g., <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">inv_</code>, <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">itm_</code>, <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">cust_</code>). Use these as-is; do not parse the prefix.
        </div>
      </div>
    </>
  );
}
