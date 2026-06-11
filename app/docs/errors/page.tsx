import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Errors — API Docs",
  description: "Katixo API error codes, response format, and rate limit details.",
};

export default function ErrorsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Errors</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The Katixo API uses conventional HTTP status codes to indicate success or failure.
        Codes in the 2xx range indicate success, 4xx indicate a client error, and 5xx indicate
        a server-side issue.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Error response format</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All error responses return a JSON object with a consistent structure:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "error": {
    "type": "validation_error",
    "message": "invoice_date is required",
    "field": "invoice_date",
    "code": "required_field"
  }
}`}</code>
      </pre>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">HTTP status codes</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Code</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Status</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Meaning</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-green-600 dark:text-green-400">200</code></td>
              <td className="py-2.5 pr-4">OK</td>
              <td className="py-2.5">Request succeeded.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-green-600 dark:text-green-400">201</code></td>
              <td className="py-2.5 pr-4">Created</td>
              <td className="py-2.5">Resource created successfully.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-amber-600 dark:text-amber-400">400</code></td>
              <td className="py-2.5 pr-4">Bad Request</td>
              <td className="py-2.5">Invalid request body, missing required fields, or malformed JSON.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-amber-600 dark:text-amber-400">401</code></td>
              <td className="py-2.5 pr-4">Unauthorized</td>
              <td className="py-2.5">Missing or invalid API key.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-amber-600 dark:text-amber-400">403</code></td>
              <td className="py-2.5 pr-4">Forbidden</td>
              <td className="py-2.5">API key lacks the required scope for this endpoint.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-amber-600 dark:text-amber-400">404</code></td>
              <td className="py-2.5 pr-4">Not Found</td>
              <td className="py-2.5">The requested resource does not exist.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-amber-600 dark:text-amber-400">409</code></td>
              <td className="py-2.5 pr-4">Conflict</td>
              <td className="py-2.5">Duplicate resource (e.g., invoice number already exists).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-amber-600 dark:text-amber-400">422</code></td>
              <td className="py-2.5 pr-4">Unprocessable</td>
              <td className="py-2.5">Request is well-formed but contains invalid business logic (e.g., voiding an already-voided invoice).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="font-mono text-amber-600 dark:text-amber-400">429</code></td>
              <td className="py-2.5 pr-4">Too Many Requests</td>
              <td className="py-2.5">Rate limit exceeded. Retry after the interval in the <code className="text-xs">Retry-After</code> header.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="font-mono text-red-600 dark:text-red-400">500</code></td>
              <td className="py-2.5 pr-4">Internal Error</td>
              <td className="py-2.5">Something went wrong on our end. These are rare and automatically alerted.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white" id="rate-limits">Rate limits</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        API requests are rate-limited per API key:
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Plan</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Requests / minute</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Burst limit</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4">Free</td>
              <td className="py-2.5 pr-4">60</td>
              <td className="py-2.5">10 concurrent</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4">Pro</td>
              <td className="py-2.5 pr-4">300</td>
              <td className="py-2.5">30 concurrent</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4">Enterprise</td>
              <td className="py-2.5 pr-4">Custom</td>
              <td className="py-2.5">Custom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Rate limit headers are included in every response:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`X-RateLimit-Limit: 300
X-RateLimit-Remaining: 287
X-RateLimit-Reset: 1718100120
Retry-After: 12`}</code>
      </pre>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        When rate-limited, wait for the number of seconds specified in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Retry-After</code> before retrying. Implement exponential backoff for production integrations.
      </p>
    </>
  );
}
