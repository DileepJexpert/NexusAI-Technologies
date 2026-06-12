import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital Billing API — Katixo Hospital OS",
  description: "Create patient bills, record payments, generate receipts, and manage billing packages via the Katixo Hospital OS API.",
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function BillingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hospital Billing</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Create and manage patient bills, record payments across multiple modes (cash, card, UPI,
        insurance), generate receipts, and configure billing packages for common procedures. Bills
        can be linked to OPD appointments or IPD admissions and support GST-compliant tax
        calculations.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Base URL</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>https://hospital.katixo.com/api/v1</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="POST" path="/api/v1/billing/bills" />
        <Endpoint method="GET" path="/api/v1/billing/bills" />
        <Endpoint method="GET" path="/api/v1/billing/bills/{billId}" />
        <Endpoint method="PUT" path="/api/v1/billing/bills/{billId}/finalize" />
        <Endpoint method="POST" path="/api/v1/billing/bills/{billId}/payments" />
        <Endpoint method="GET" path="/api/v1/billing/bills/{billId}/receipt" />
        <Endpoint method="POST" path="/api/v1/billing/packages" />
      </div>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Authentication:</strong> All endpoints require a valid JWT Bearer token in the{" "}
        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-900/40">Authorization</code> header.
        All IDs are UUIDs.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The BillResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Bill retrieved successfully",
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "billNumber": "BIL-2026-00045",
    "patientName": "Rajesh Kumar Patel",
    "patientUhid": "UHID-2026-004510",
    "admissionId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "appointmentId": null,
    "lineItems": [
      {
        "id": "11111111-1111-1111-1111-111111111111",
        "serviceType": "CONSULTATION",
        "description": "Orthopaedic Consultation - Dr. Vikram Singh",
        "quantity": 1,
        "rate": 500.00,
        "amount": 500.00
      },
      {
        "id": "22222222-2222-2222-2222-222222222222",
        "serviceType": "LAB_TEST",
        "description": "CBC (Complete Blood Count)",
        "quantity": 1,
        "rate": 350.00,
        "amount": 350.00
      },
      {
        "id": "33333333-3333-3333-3333-333333333333",
        "serviceType": "LAB_TEST",
        "description": "Blood Grouping & Rh Typing",
        "quantity": 1,
        "rate": 200.00,
        "amount": 200.00
      },
      {
        "id": "44444444-4444-4444-4444-444444444444",
        "serviceType": "BED_CHARGE",
        "description": "Semi-Private Room (per day)",
        "quantity": 5,
        "rate": 2000.00,
        "amount": 10000.00
      },
      {
        "id": "55555555-5555-5555-5555-555555555555",
        "serviceType": "SURGERY",
        "description": "Total Knee Replacement - Right",
        "quantity": 1,
        "rate": 85000.00,
        "amount": 85000.00
      },
      {
        "id": "66666666-6666-6666-6666-666666666666",
        "serviceType": "PHARMACY",
        "description": "Medicines & consumables",
        "quantity": 1,
        "rate": 4520.00,
        "amount": 4520.00
      }
    ],
    "subtotal": 100570.00,
    "discountPercent": 5.00,
    "discountAmount": 5028.50,
    "taxAmount": 0.00,
    "totalAmount": 95541.50,
    "amountPaid": 50000.00,
    "balance": 45541.50,
    "status": "PARTIALLY_PAID",
    "payments": [
      {
        "id": "77777777-7777-7777-7777-777777777777",
        "amount": 50000.00,
        "paymentMode": "BANK_TRANSFER",
        "referenceNumber": "NEFT-UTR-2026061200012345",
        "paidAt": "2026-06-10T11:00:00Z"
      }
    ],
    "createdAt": "2026-06-10T09:30:00Z",
    "finalizedAt": "2026-06-10T10:45:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Bill statuses</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Status</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DRAFT</code></td>
              <td className="py-2.5">Bill created but not yet finalized. Line items can still be added or modified.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">FINALIZED</code></td>
              <td className="py-2.5">Bill has been finalized and is ready for payment. No further edits allowed.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PAID</code></td>
              <td className="py-2.5">Full payment received. Balance is zero.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PARTIALLY_PAID</code></td>
              <td className="py-2.5">Some payment received but balance is still outstanding.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CANCELLED</code></td>
              <td className="py-2.5">Bill has been cancelled. Remains in the system for audit purposes.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Service types</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CONSULTATION</code></td>
              <td className="py-2.5">Doctor consultation fees (e.g. Orthopaedic Consultation: &#8377;500).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">LAB_TEST</code></td>
              <td className="py-2.5">Laboratory investigations (e.g. CBC Test: &#8377;350, Blood Grouping: &#8377;200).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PROCEDURE</code></td>
              <td className="py-2.5">Medical procedures such as ECG, X-Ray, dressing changes.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PHARMACY</code></td>
              <td className="py-2.5">Medicines and consumables dispensed from the pharmacy.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">BED_CHARGE</code></td>
              <td className="py-2.5">Room/bed charges per day (e.g. Semi-Private Room: &#8377;2,000/day).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SURGERY</code></td>
              <td className="py-2.5">Surgical procedure charges including surgeon and OT fees.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OTHER</code></td>
              <td className="py-2.5">Any other charges not covered by the categories above.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a bill</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/billing/bills" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a new patient bill in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DRAFT</code> status.
        The bill must be linked to either an IPD admission or an OPD appointment. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> on success.
      </p>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">patientId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">admissionId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Conditional</td>
              <td className="py-2.5">IPD admission ID. Required if no appointmentId is provided.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">appointmentId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Conditional</td>
              <td className="py-2.5">OPD appointment ID. Required if no admissionId is provided.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">lineItems</code></td>
              <td className="py-2.5 pr-4">LineItemRequest[]</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">At least one line item. See line item fields below.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">discountPercent</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Overall discount percentage on the bill (e.g. 5.00 for 5%).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">discountAmount</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Fixed discount amount. If both percent and amount are provided, amount takes precedence.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">LineItemRequest fields</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">serviceType</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5"><code className="text-xs">CONSULTATION</code>, <code className="text-xs">LAB_TEST</code>, <code className="text-xs">PROCEDURE</code>, <code className="text-xs">PHARMACY</code>, <code className="text-xs">BED_CHARGE</code>, <code className="text-xs">SURGERY</code>, or <code className="text-xs">OTHER</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">description</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Description of the service or item.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">quantity</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Quantity (e.g. number of days for bed charge, number of tests).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">rate</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Rate per unit in INR.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: create a bill for an IPD patient</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/billing/bills \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "admissionId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "lineItems": [
      {
        "serviceType": "CONSULTATION",
        "description": "Orthopaedic Consultation - Dr. Vikram Singh",
        "quantity": 1,
        "rate": 500.00
      },
      {
        "serviceType": "LAB_TEST",
        "description": "CBC (Complete Blood Count)",
        "quantity": 1,
        "rate": 350.00
      },
      {
        "serviceType": "LAB_TEST",
        "description": "Blood Grouping & Rh Typing",
        "quantity": 1,
        "rate": 200.00
      },
      {
        "serviceType": "BED_CHARGE",
        "description": "Semi-Private Room (per day)",
        "quantity": 5,
        "rate": 2000.00
      },
      {
        "serviceType": "SURGERY",
        "description": "Total Knee Replacement - Right",
        "quantity": 1,
        "rate": 85000.00
      },
      {
        "serviceType": "PHARMACY",
        "description": "Medicines & consumables",
        "quantity": 1,
        "rate": 4520.00
      }
    ],
    "discountPercent": 5.00
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Bill created successfully",
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "billNumber": "BIL-2026-00045",
    "patientName": "Rajesh Kumar Patel",
    "patientUhid": "UHID-2026-004510",
    "admissionId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "appointmentId": null,
    "lineItems": [
      {
        "id": "11111111-1111-1111-1111-111111111111",
        "serviceType": "CONSULTATION",
        "description": "Orthopaedic Consultation - Dr. Vikram Singh",
        "quantity": 1,
        "rate": 500.00,
        "amount": 500.00
      },
      {
        "id": "22222222-2222-2222-2222-222222222222",
        "serviceType": "LAB_TEST",
        "description": "CBC (Complete Blood Count)",
        "quantity": 1,
        "rate": 350.00,
        "amount": 350.00
      },
      {
        "id": "33333333-3333-3333-3333-333333333333",
        "serviceType": "LAB_TEST",
        "description": "Blood Grouping & Rh Typing",
        "quantity": 1,
        "rate": 200.00,
        "amount": 200.00
      },
      {
        "id": "44444444-4444-4444-4444-444444444444",
        "serviceType": "BED_CHARGE",
        "description": "Semi-Private Room (per day)",
        "quantity": 5,
        "rate": 2000.00,
        "amount": 10000.00
      },
      {
        "id": "55555555-5555-5555-5555-555555555555",
        "serviceType": "SURGERY",
        "description": "Total Knee Replacement - Right",
        "quantity": 1,
        "rate": 85000.00,
        "amount": 85000.00
      },
      {
        "id": "66666666-6666-6666-6666-666666666666",
        "serviceType": "PHARMACY",
        "description": "Medicines & consumables",
        "quantity": 1,
        "rate": 4520.00,
        "amount": 4520.00
      }
    ],
    "subtotal": 100570.00,
    "discountPercent": 5.00,
    "discountAmount": 5028.50,
    "taxAmount": 0.00,
    "totalAmount": 95541.50,
    "amountPaid": 0.00,
    "balance": 95541.50,
    "status": "DRAFT",
    "payments": [],
    "createdAt": "2026-06-10T09:30:00Z",
    "finalizedAt": null
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List bills</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/billing/bills" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of bills. The response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;PagedResponse&lt;BillResponse&gt;&gt;</code>.
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
              <td className="py-2.5 pr-4"><code className="text-xs">patientId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Filter by status: <code className="text-xs">DRAFT</code>, <code className="text-xs">FINALIZED</code>, <code className="text-xs">PAID</code>, <code className="text-xs">PARTIALLY_PAID</code>, <code className="text-xs">CANCELLED</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dateFrom</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5">Bills created on or after this date (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dateTo</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5">Bills created on or before this date.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Page number (zero-based, default: 0).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">size</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Results per page (default: 20).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://hospital.katixo.com/api/v1/billing/bills?status=PARTIALLY_PAID&dateFrom=2026-06-01&page=0&size=10" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Bills retrieved successfully",
  "data": {
    "content": [
      {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "billNumber": "BIL-2026-00045",
        "patientName": "Rajesh Kumar Patel",
        "patientUhid": "UHID-2026-004510",
        "status": "PARTIALLY_PAID",
        "subtotal": 100570.00,
        "discountAmount": 5028.50,
        "taxAmount": 0.00,
        "totalAmount": 95541.50,
        "amountPaid": 50000.00,
        "balance": 45541.50,
        "createdAt": "2026-06-10T09:30:00Z"
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 1,
    "totalPages": 1,
    "last": true
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get bill details</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/billing/bills/{billId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Retrieves the full details of a bill including all line items, payment history, and
        computed totals. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;BillResponse&gt;</code>.
      </p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/billing/bills/a1b2c3d4-e5f6-7890-abcd-ef1234567890 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Finalize a bill</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/billing/bills/{billId}/finalize" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Transitions a bill from <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DRAFT</code> to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">FINALIZED</code>. Once finalized,
        line items cannot be added or modified. The bill is now ready to accept payments.
      </p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/billing/bills/a1b2c3d4-e5f6-7890-abcd-ef1234567890/finalize \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Bill finalized successfully",
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "billNumber": "BIL-2026-00045",
    "status": "FINALIZED",
    "totalAmount": 95541.50,
    "finalizedAt": "2026-06-10T10:45:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Record a payment</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/billing/bills/{billId}/payments" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Records a payment against a finalized bill. When total payments equal the bill total, the
        status automatically transitions to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PAID</code>. The bill must be in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">FINALIZED</code> or{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PARTIALLY_PAID</code> status.
      </p>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">amount</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Payment amount in INR.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">paymentMode</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5"><code className="text-xs">CASH</code>, <code className="text-xs">CARD</code>, <code className="text-xs">UPI</code>, <code className="text-xs">INSURANCE</code>, or <code className="text-xs">BANK_TRANSFER</code>.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">referenceNumber</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Transaction reference (UPI ref, card approval code, NEFT UTR, insurance claim number).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: record a UPI payment</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/billing/bills/a1b2c3d4-e5f6-7890-abcd-ef1234567890/payments \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 45541.50,
    "paymentMode": "UPI",
    "referenceNumber": "426198374512"
  }'

# Response
{
  "success": true,
  "message": "Payment recorded successfully",
  "data": {
    "id": "88888888-8888-8888-8888-888888888888",
    "billId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "amount": 45541.50,
    "paymentMode": "UPI",
    "referenceNumber": "426198374512",
    "paidAt": "2026-06-12T16:30:00Z",
    "billStatus": "PAID",
    "billBalance": 0.00
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get payment receipt</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/billing/bills/{billId}/receipt" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the payment receipt as a PDF file. The response has{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Content-Type: application/pdf</code> and
        the body is the raw PDF bytes. The receipt includes patient details, bill summary, all
        payments received, and the hospital&apos;s logo and address.
      </p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/billing/bills/a1b2c3d4-e5f6-7890-abcd-ef1234567890/receipt \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -o receipt_BIL-2026-00045.pdf`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Billing packages</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Billing packages bundle multiple services into a single predefined price. They are commonly
        used for standard procedures such as normal delivery, caesarean section, or cataract surgery.
        When a package is applied to a bill, all included services are added as line items at the
        package rate.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Create a billing package</h3>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/billing/packages" />
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Required</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">packageName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Name of the billing package.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">departmentId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Department this package belongs to (e.g. Obstetrics, Ophthalmology).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">services</code></td>
              <td className="py-2.5 pr-4">String[]</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">List of services included in the package.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">totalPrice</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Total package price in INR.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">validityDays</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Number of days the package is valid from the date of admission.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: create a Normal Delivery Package</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/billing/packages \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "packageName": "Normal Delivery Package",
    "departmentId": "c3d4e5f6-a7b8-9012-cdef-234567890123",
    "services": [
      "OB/GYN Consultation",
      "Labour Room Charges",
      "Delivery Charges",
      "Semi-Private Room (3 days)",
      "Neonatologist Visit",
      "Routine Lab Tests (CBC, Blood Group, Urine R/M)",
      "Medicines & Consumables",
      "Nursing Charges"
    ],
    "totalPrice": 25000.00,
    "validityDays": 5
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Billing package created successfully",
  "data": {
    "id": "99999999-9999-9999-9999-999999999999",
    "packageName": "Normal Delivery Package",
    "departmentName": "Obstetrics & Gynaecology",
    "services": [
      "OB/GYN Consultation",
      "Labour Room Charges",
      "Delivery Charges",
      "Semi-Private Room (3 days)",
      "Neonatologist Visit",
      "Routine Lab Tests (CBC, Blood Group, Urine R/M)",
      "Medicines & Consumables",
      "Nursing Charges"
    ],
    "totalPrice": 25000.00,
    "validityDays": 5,
    "isActive": true,
    "createdAt": "2026-06-12T08:00:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800 dark:border-amber-800/40 dark:bg-amber-900/20 dark:text-amber-300">
        <strong>Common packages:</strong> Normal Delivery Package &#8377;25,000 &middot; Caesarean Section Package &#8377;55,000 &middot;
        Cataract Surgery Package &#8377;18,000 &middot; Appendectomy Package &#8377;35,000 &middot;
        Master Health Checkup &#8377;2,500.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Error handling</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All error responses follow the standard{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse</code> wrapper with{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">success: false</code> and
        details in the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">errors</code> array.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`# 400 Bad Request — validation error
{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "errors": [
    "patientId: must not be null",
    "lineItems: must not be empty",
    "Either admissionId or appointmentId must be provided"
  ]
}

# 409 Conflict — payment exceeds balance
{
  "success": false,
  "message": "Payment amount exceeds balance",
  "data": null,
  "errors": ["Payment of \\u20b950,000.00 exceeds remaining balance of \\u20b945,541.50"]
}

# 422 Unprocessable Entity — invalid state transition
{
  "success": false,
  "message": "Cannot record payment",
  "data": null,
  "errors": ["Bill BIL-2026-00045 is in DRAFT status. Finalize the bill before recording payments."]
}`}</code>
      </pre>
    </>
  );
}
