import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Authentication — API Docs",
  description: `How to authenticate with the ${brand.name} API using API keys.`,
};

export default function AuthenticationPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Authentication</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The {brand.name} API uses API keys to authenticate requests. You can create and manage
        keys from your {brand.name} dashboard under <strong>Settings → API Keys</strong>.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">API key types</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Key prefix</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Environment</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-3 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ktx_test_</code></td>
              <td className="py-3 pr-4">Test</td>
              <td className="py-3">Use for development and testing. Creates no real financial records. Test data is isolated and can be wiped.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ktx_live_</code></td>
              <td className="py-3 pr-4">Production</td>
              <td className="py-3">Creates real invoices, affects real inventory. Use only in production applications.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Making authenticated requests</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Include your API key in the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Authorization</code> header as a Bearer token:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/v1/invoices \\
  -H "Authorization: Bearer ktx_live_your_api_key"`}</code>
      </pre>

      <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800 dark:border-red-800/40 dark:bg-red-900/20 dark:text-red-300">
        <strong>Security:</strong> Never expose API keys in client-side code, public repositories,
        or browser requests. API keys carry the same privileges as your user account. If a key is
        compromised, revoke it immediately from the dashboard.
      </div>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Key scopes</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        When creating a key, you can restrict its permissions to specific resources:
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Scope</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Grants access to</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">invoices:read</code></td>
              <td className="py-2.5">List and retrieve invoices, credit notes</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">invoices:write</code></td>
              <td className="py-2.5">Create, update, void invoices</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">items:read</code></td>
              <td className="py-2.5">List and retrieve items</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">items:write</code></td>
              <td className="py-2.5">Create, update, delete items</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">inventory:read</code></td>
              <td className="py-2.5">Query stock levels, batch info</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">inventory:write</code></td>
              <td className="py-2.5">Create adjustments, transfers</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">parties:read</code></td>
              <td className="py-2.5">List and retrieve customers, suppliers</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">parties:write</code></td>
              <td className="py-2.5">Create, update customers and suppliers</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">gst:read</code></td>
              <td className="py-2.5">GST reports, GSTR-1 data, HSN summary</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">banking:read</code></td>
              <td className="py-2.5">Bank statements, reconciliation status</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">banking:write</code></td>
              <td className="py-2.5">Import statements, match transactions</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        A key with no explicit scopes has full access. We recommend using the narrowest scopes needed for each integration.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Organization context</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        If your account has access to multiple organizations (e.g., a CA firm managing several clients), include the
        organization ID in the header:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/v1/invoices \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "X-Katixo-Org: org_a1b2c3d4"`}</code>
      </pre>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        If omitted, requests default to the primary organization linked to the API key.
      </p>
    </>
  );
}
