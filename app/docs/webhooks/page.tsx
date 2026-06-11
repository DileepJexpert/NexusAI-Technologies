import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhooks — API Docs",
  description: "Receive real-time event notifications for invoices, payments, inventory changes, and more.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
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

export default function WebhooksPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Webhooks</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Webhooks notify your application in real time when events occur in Katixo — invoices created,
        payments received, stock levels changed, and more. Instead of polling the API, register
        a webhook endpoint and receive HTTP POST requests when events fire.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/webhooks" />
        <Endpoint method="POST" path="/v1/webhooks" />
        <Endpoint method="GET" path="/v1/webhooks/:id" />
        <Endpoint method="PATCH" path="/v1/webhooks/:id" />
        <Endpoint method="DELETE" path="/v1/webhooks/:id" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a webhook</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/v1/webhooks" />
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/v1/webhooks \\
  -H "Authorization: Bearer ktx_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/katixo",
    "events": [
      "invoice.created",
      "invoice.paid",
      "inventory.low_stock"
    ],
    "description": "Production webhook for order system"
  }'`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "whk_p4q5r6",
  "url": "https://your-app.com/webhooks/katixo",
  "events": ["invoice.created", "invoice.paid", "inventory.low_stock"],
  "description": "Production webhook for order system",
  "secret": "whsec_a1b2c3d4e5f6...",
  "active": true,
  "created_at": "2026-06-11T10:00:00+05:30"
}`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        The <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">secret</code> is
        returned only on creation. Store it securely — you will need it to verify webhook signatures.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Available events</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Event</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Fires when</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice.created</code></td>
              <td className="py-2.5">A new invoice is created (any type).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice.updated</code></td>
              <td className="py-2.5">An invoice is modified (before issuing).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice.paid</code></td>
              <td className="py-2.5">Full payment recorded against an invoice.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice.overdue</code></td>
              <td className="py-2.5">An invoice crosses its due date without full payment.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">invoice.voided</code></td>
              <td className="py-2.5">An invoice is voided.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">payment.received</code></td>
              <td className="py-2.5">Any payment receipt is recorded.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">payment.made</code></td>
              <td className="py-2.5">Any payment to a supplier is recorded.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">inventory.low_stock</code></td>
              <td className="py-2.5">An item&apos;s stock falls below its low stock threshold.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">inventory.adjusted</code></td>
              <td className="py-2.5">A manual stock adjustment is made.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">inventory.near_expiry</code></td>
              <td className="py-2.5">A batch enters the near-expiry window.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">party.created</code></td>
              <td className="py-2.5">A new customer or supplier is added.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">reconciliation.completed</code></td>
              <td className="py-2.5">A bank reconciliation reaches 100% match rate for a period.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Webhook payload</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Each webhook delivery is an HTTP POST with a JSON body:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "evt_m1n2o3p4",
  "type": "invoice.paid",
  "created_at": "2026-06-11T14:30:00+05:30",
  "data": {
    "invoice_id": "inv_8f3k2j1m",
    "invoice_number": "KTX/2026-27/0042",
    "customer_id": "cust_a1b2c3",
    "amount_paid": 152250,
    "payment_mode": "upi",
    "payment_reference": "UTR123456789"
  }
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Verifying signatures</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Every webhook request includes a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">X-Katixo-Signature</code> header
        containing an HMAC-SHA256 signature of the request body using your webhook secret.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`// Node.js verification example
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}`}</code>
      </pre>

      <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800 dark:border-red-800/40 dark:bg-red-900/20 dark:text-red-300">
        <strong>Always verify signatures.</strong> Without verification, an attacker could send
        fake webhook events to your endpoint. Reject any request with an invalid or missing signature.
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Retry policy</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        If your endpoint returns a non-2xx status code or does not respond within 10 seconds,
        the delivery is retried with exponential backoff:
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
        <li>Retry 1: after 1 minute</li>
        <li>Retry 2: after 5 minutes</li>
        <li>Retry 3: after 30 minutes</li>
        <li>Retry 4: after 2 hours</li>
        <li>Retry 5: after 12 hours</li>
      </ul>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        After 5 failed attempts, the event is marked as failed. You can view and manually retry
        failed deliveries from the dashboard or via the API.
      </p>
    </>
  );
}
