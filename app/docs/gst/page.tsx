import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GST & Tax API — API Docs",
  description: "GST review center, GSTR-1 and GSTR-3B data, and export endpoints via the Katixo API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function GSTPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">GST &amp; Tax</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Access GST filing data directly from your invoice and purchase records. The GST API
        provides a review center for catching errors before filing, plus GSTR-1 and GSTR-3B
        data endpoints with JSON and Excel export support. Requires the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">GST</code> module.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/gst/review-center" />
        <Endpoint method="GET" path="/api/v1/gst/gstr1" />
        <Endpoint method="GET" path="/api/v1/gst/gstr3b" />
        <Endpoint method="GET" path="/api/v1/gst/gstr1/export" />
        <Endpoint method="GET" path="/api/v1/gst/gstr3b/export" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Review center</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/gst/review-center" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a summary of potential issues in your GST data for a given return period —
        missing GSTINs, mismatched HSN codes, invoices without place of supply, and other
        common filing errors. Review and fix these before generating your returns.
      </p>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Query parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">month</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Month number (1–12).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">year</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Financial year (e.g., 2026).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/api/v1/gst/review-center?month=6&year=2026" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Review center data retrieved",
  "data": {
    "period": "June 2026",
    "totalInvoices": 142,
    "totalPurchaseBills": 38,
    "issues": [
      {
        "type": "MISSING_GSTIN",
        "severity": "WARNING",
        "count": 3,
        "message": "3 B2B invoices missing customer GSTIN"
      },
      {
        "type": "HSN_MISMATCH",
        "severity": "ERROR",
        "count": 1,
        "message": "1 invoice has invalid HSN code"
      }
    ],
    "readyToFile": false
  },
  "errors": null
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">GSTR-1 data</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/gst/gstr1" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all outward supply data for a given return period, structured into the sections
        required by the GSTR-1 form: B2B invoices, B2CS (B2C small), B2CL (B2C large),
        credit/debit notes, HSN summary, and document summary.
      </p>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Query parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">month</code></td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Month number (1–12).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">year</code></td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Financial year (e.g., 2026).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/api/v1/gst/gstr1?month=6&year=2026" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "GSTR-1 data retrieved",
  "data": {
    "month": 6,
    "year": 2026,
    "gstin": "27AAECS1234F1Z5",
    "b2b": [
      {
        "customerGstin": "29BBBFM1234A1ZV",
        "customerName": "Kumar Distributors",
        "invoices": [
          {
            "invoiceNumber": "KTX/2026-27/0038",
            "invoiceDate": "2026-06-05",
            "totalAmount": 23600.00,
            "placeOfSupply": "29",
            "reverseCharge": false,
            "items": [
              {
                "hsnCode": "07139090",
                "taxableValue": 20000.00,
                "igst": 1000.00,
                "cgst": 0.00,
                "sgst": 0.00,
                "cess": 0.00
              }
            ]
          }
        ]
      }
    ],
    "b2cs": [],
    "creditNotes": [],
    "debitNotes": [],
    "hsnSummary": [],
    "documentSummary": {
      "invoicesIssued": 25,
      "invoicesCancelled": 1,
      "creditNotesIssued": 0,
      "debitNotesIssued": 0
    }
  },
  "errors": null
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">GSTR-3B data</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/gst/gstr3b" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the summary tax liability data for GSTR-3B filing — output tax from sales,
        input tax credit from purchases, and net tax payable, broken down by CGST, SGST, IGST, and cess.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/api/v1/gst/gstr3b?month=6&year=2026" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "GSTR-3B data retrieved",
  "data": {
    "month": 6,
    "year": 2026,
    "outputTax": {
      "cgst": 1121.25,
      "sgst": 1121.25,
      "igst": 1000.00,
      "cess": 0.00,
      "total": 3242.50
    },
    "inputTaxCredit": {
      "cgst": 850.00,
      "sgst": 850.00,
      "igst": 500.00,
      "cess": 0.00,
      "total": 2200.00
    },
    "netPayable": {
      "cgst": 271.25,
      "sgst": 271.25,
      "igst": 500.00,
      "cess": 0.00,
      "total": 1042.50
    }
  },
  "errors": null
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Export endpoints</h2>
      <div className="mt-3 space-y-2">
        <Endpoint method="GET" path="/api/v1/gst/gstr1/export" />
        <Endpoint method="GET" path="/api/v1/gst/gstr3b/export" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Download GSTR-1 and GSTR-3B data as Excel files ready for upload to the GST portal.
        Pass the same <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">month</code> and <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">year</code> query
        parameters. The response is an Excel file with <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</code>.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/api/v1/gst/gstr1/export?month=6&year=2026" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -o gstr1_june_2026.xlsx`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Authorization</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        GST endpoints require <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OWNER</code>,{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ADMIN</code>, or{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ACCOUNTANT</code> role.
        The <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">GST</code> module must be enabled
        for your organization. See <Link href="/docs/authentication" className="text-accent hover:underline">Authentication</Link> for
        role details.
      </p>
    </>
  );
}
