import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "API Documentation",
  description: `${brand.name} API reference — integrate invoicing, inventory, GST, and accounting into your workflow.`,
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
        request and response bodies, and authenticates via JWT Bearer tokens.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800 dark:border-amber-800/40 dark:bg-amber-900/20 dark:text-amber-300">
        <strong>Beta notice:</strong> The {brand.name} API is in active development. Endpoints
        documented here are stable, but new endpoints and fields may be added. Breaking changes
        will be announced with at least 30 days notice via the changelog.
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Base URL</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>https://api.katixo.com/api/v1</code>
      </pre>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        All API requests must be made over HTTPS. HTTP requests are rejected.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Quick start</h2>
      <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-400">
        <p>1. Register and sign in to get a JWT access token (see <Link href="/docs/authentication" className="text-accent hover:underline">Authentication</Link>).</p>
        <p>2. Make your first request:</p>
      </div>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/invoices \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json"`}</code>
      </pre>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        This returns a paginated list of your invoices. See <Link href="/docs/authentication" className="text-accent hover:underline">Authentication</Link> for details on obtaining and refreshing tokens.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Response format</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All API responses are wrapped in a standard <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse</code> envelope:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Invoices retrieved successfully",
  "data": { ... },
  "errors": null
}`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        On error, <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">success</code> is <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">false</code> and the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">errors</code> field contains validation details:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "errors": {
    "invoiceDate": "must not be null",
    "contactId": "must not be null"
  }
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Resources</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <QuickLink
          href="/docs/authentication"
          title="Authentication"
          description="JWT tokens, OTP login, refresh flow, and role-based access."
        />
        <QuickLink
          href="/docs/invoices"
          title="Invoices"
          description="Create, send, cancel, and manage GST-compliant invoices."
        />
        <QuickLink
          href="/docs/items"
          title="Items"
          description="Product catalog with HSN codes, pricing, batches, and BOM."
        />
        <QuickLink
          href="/docs/customers"
          title="Contacts"
          description="Manage customers, vendors, GST details, and contact persons."
        />
        <QuickLink
          href="/docs/inventory"
          title="Inventory"
          description="Batch tracking, expiry alerts, and available stock queries."
        />
        <QuickLink
          href="/docs/gst"
          title="GST & Tax"
          description="GST review center, GSTR-1, GSTR-3B data and exports."
        />
        <QuickLink
          href="/docs/purchase-bills"
          title="Purchase Bills"
          description="Record purchase bills, manage attachments, and bulk post."
        />
        <QuickLink
          href="/docs/expenses"
          title="Expenses"
          description="Track and categorize business expenses."
        />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Conventions</h2>
      <div className="mt-3 space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <div>
          <strong className="text-slate-900 dark:text-white">Pagination</strong> — List endpoints return paginated results using Spring Pageable. Use <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">page</code> (0-indexed), <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">size</code>, and <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">sort</code> query parameters. Default page size is 20.
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white">Paginated response</strong> — Paginated endpoints return a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PagedResponse</code> inside the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">data</code> field:
        </div>
      </div>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "...",
  "data": {
    "content": [ ... ],
    "page": 0,
    "size": 20,
    "totalElements": 142,
    "totalPages": 8,
    "last": false
  },
  "errors": null
}`}</code>
      </pre>
      <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-400">
        <div>
          <strong className="text-slate-900 dark:text-white">Dates</strong> — Timestamps use ISO 8601 format. Financial dates (invoice date, due date) use <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">YYYY-MM-DD</code> (LocalDate). Audit timestamps use Instant format.
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white">Amounts</strong> — All monetary amounts use <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">BigDecimal</code> with up to 2 decimal places. <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">1234.56</code> represents ₹1,234.56.
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white">IDs</strong> — All resource IDs are UUIDs (e.g., <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">550e8400-e29b-41d4-a716-446655440000</code>).
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white">Multi-tenancy</strong> — The organization context (<code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">org_id</code>) is embedded in your JWT token. You can switch organizations using the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">POST /api/v1/users/me/switch-org</code> endpoint.
        </div>
      </div>
    </>
  );
}
