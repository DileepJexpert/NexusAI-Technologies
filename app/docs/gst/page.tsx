import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST & Tax API — API Docs",
  description: "GSTR-1 filing data, HSN summary, tax computation, and B2B/B2C breakdowns via the Katixo API.",
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
        Access GSTR-1-ready sales data, HSN-wise summaries, and tax computation reports.
        These endpoints aggregate invoice data into the format required for GST return filing.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/v1/gst/gstr1" />
        <Endpoint method="GET" path="/v1/gst/hsn-summary" />
        <Endpoint method="GET" path="/v1/gst/tax-summary" />
        <Endpoint method="GET" path="/v1/gst/b2b" />
        <Endpoint method="GET" path="/v1/gst/b2cs" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">GSTR-1 data</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/gst/gstr1" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all sales data for a given return period, structured into the sections
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
              <td className="py-2.5 pr-4"><code className="text-xs">period</code></td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Return period in <code className="text-xs">MMYYYY</code> format (e.g., <code className="text-xs">062026</code> for June 2026).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">format</code></td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5"><code className="text-xs">json</code> (default) or <code className="text-xs">csv</code>. CSV returns a zip file with separate files for each section.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/v1/gst/gstr1?period=062026" \\
  -H "Authorization: Bearer ktx_live_your_api_key"`}</code>
      </pre>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "period": "062026",
  "gstin": "27AAECS1234F1Z5",
  "b2b": [
    {
      "customer_gstin": "29BBBFM1234A1ZV",
      "customer_name": "Kumar Distributors",
      "invoices": [
        {
          "invoice_number": "KTX/2026-27/0038",
          "invoice_date": "2026-06-05",
          "invoice_value": 236000,
          "place_of_supply": "29",
          "reverse_charge": false,
          "items": [
            {
              "hsn_code": "07139090",
              "taxable_value": 200000,
              "igst": 10000,
              "cgst": 0,
              "sgst": 0,
              "cess": 0
            }
          ]
        }
      ]
    }
  ],
  "b2cs": [
    {
      "place_of_supply": "27",
      "tax_rate": 500,
      "type": "OE",
      "taxable_value": 1450000,
      "cgst": 36250,
      "sgst": 36250,
      "cess": 0
    }
  ],
  "hsn_summary": [],
  "document_summary": {
    "invoices": { "from": "KTX/2026-27/0031", "to": "KTX/2026-27/0055", "total": 25, "cancelled": 1 },
    "credit_notes": { "from": null, "to": null, "total": 0, "cancelled": 0 }
  }
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">HSN summary</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/gst/hsn-summary" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns HSN-wise aggregated sales for a given period — total quantity, taxable value,
        and tax amounts. This maps directly to Table 12 of the GSTR-1 form.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "period": "062026",
  "hsn_data": [
    {
      "hsn_code": "07139090",
      "description": "Pulses (dried, shelled)",
      "uqc": "KGS",
      "total_quantity": 850,
      "total_taxable_value": 1232500,
      "total_igst": 10000,
      "total_cgst": 26625,
      "total_sgst": 26625,
      "total_cess": 0
    },
    {
      "hsn_code": "10063020",
      "description": "Rice (semi-milled or wholly milled)",
      "uqc": "KGS",
      "total_quantity": 1200,
      "total_taxable_value": 3420000,
      "total_igst": 0,
      "total_cgst": 85500,
      "total_sgst": 85500,
      "total_cess": 0
    }
  ]
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Tax summary</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/v1/gst/tax-summary" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Monthly tax liability and input credit summary. Shows output tax from sales,
        input tax credit from purchases, and net tax payable.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "period": "062026",
  "output_tax": {
    "cgst": 112125,
    "sgst": 112125,
    "igst": 10000,
    "cess": 0,
    "total": 234250
  },
  "input_tax_credit": {
    "cgst": 85000,
    "sgst": 85000,
    "igst": 5000,
    "cess": 0,
    "total": 175000
  },
  "net_payable": {
    "cgst": 27125,
    "sgst": 27125,
    "igst": 5000,
    "cess": 0,
    "total": 59250
  }
}`}</code>
      </pre>
    </>
  );
}
