import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy API — Katixo Hospital OS",
  description: "Search the drug catalog, dispense prescriptions, manage returns, and check stock via the Katixo Hospital OS Pharmacy API.",
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

export default function PharmacyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Pharmacy</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Search the drug catalog, dispense medications against prescriptions, process returns,
        and check real-time stock levels. The Pharmacy module runs on the ERP Service and
        uses the same batch tracking and inventory engine as Katasticho ERP &mdash; ensuring
        consistent stock management, expiry tracking, and audit trails across the hospital.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Base URL</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>https://hospital.katixo.com/api/v1</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/pharmacy/drugs" />
        <Endpoint method="POST" path="/api/v1/pharmacy/dispense" />
        <Endpoint method="GET" path="/api/v1/pharmacy/dispense" />
        <Endpoint method="GET" path="/api/v1/pharmacy/dispense/{dispenseId}" />
        <Endpoint method="POST" path="/api/v1/pharmacy/returns" />
        <Endpoint method="GET" path="/api/v1/pharmacy/stock" />
      </div>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Authentication:</strong> All endpoints require a valid JWT Bearer token in the{" "}
        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-900/40">Authorization</code> header.
        All IDs are UUIDs.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Drug categories</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Category</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">TABLET</code></td>
              <td className="py-2.5">Oral solid dosage forms (e.g. Paracetamol 500mg, Azithromycin 250mg).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CAPSULE</code></td>
              <td className="py-2.5">Capsule dosage forms (e.g. Omeprazole 20mg, Amoxicillin 500mg).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SYRUP</code></td>
              <td className="py-2.5">Liquid oral preparations (e.g. Cough Syrup, Lactulose Solution).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">INJECTION</code></td>
              <td className="py-2.5">Injectable preparations (e.g. Ceftriaxone 1g IV, Insulin 40IU/ml).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OINTMENT</code></td>
              <td className="py-2.5">Topical preparations (e.g. Betadine Ointment, Mupirocin 2%).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DROPS</code></td>
              <td className="py-2.5">Eye, ear, or nasal drops (e.g. Moxifloxacin Eye Drops, Otrivin Nasal Drops).</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Dispensing statuses</h2>
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
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PENDING</code></td>
              <td className="py-2.5">Prescription received but drugs not yet dispensed to the patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DISPENSED</code></td>
              <td className="py-2.5">Drugs have been dispensed to the patient. Stock has been deducted.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">RETURNED</code></td>
              <td className="py-2.5">Dispensed drugs have been returned (partially or fully). Stock has been restored.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Search drug catalog</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/pharmacy/drugs" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Search and browse the drug catalog. Returns a paginated list of drugs with their category,
        composition, and pricing. The response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;PagedResponse&lt;DrugResponse&gt;&gt;</code>.
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
              <td className="py-2.5 pr-4"><code className="text-xs">search</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Free-text search across drug name, generic name, and composition.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">category</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Filter by category: <code className="text-xs">TABLET</code>, <code className="text-xs">CAPSULE</code>, <code className="text-xs">SYRUP</code>, <code className="text-xs">INJECTION</code>, <code className="text-xs">OINTMENT</code>, <code className="text-xs">DROPS</code>.</td>
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
        <code>{`curl "https://hospital.katixo.com/api/v1/pharmacy/drugs?search=paracetamol&category=TABLET&page=0&size=10" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Drugs retrieved successfully",
  "data": {
    "content": [
      {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "name": "Paracetamol 500mg",
        "genericName": "Paracetamol",
        "category": "TABLET",
        "composition": "Paracetamol IP 500mg",
        "manufacturer": "Cipla Ltd",
        "mrp": 25.50,
        "sellingPrice": 22.00,
        "hsnCode": "30049099",
        "gstRate": 12.00,
        "scheduleType": "OTC",
        "isActive": true
      },
      {
        "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        "name": "Paracetamol 650mg",
        "genericName": "Paracetamol",
        "category": "TABLET",
        "composition": "Paracetamol IP 650mg",
        "manufacturer": "GSK Pharmaceuticals",
        "mrp": 32.00,
        "sellingPrice": 28.50,
        "hsnCode": "30049099",
        "gstRate": 12.00,
        "scheduleType": "OTC",
        "isActive": true
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 2,
    "totalPages": 1,
    "last": true
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Dispense drugs</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/pharmacy/dispense" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Dispenses drugs against a prescription. Stock is deducted from the specified batches
        and the dispensing record is linked to the patient and prescription. Returns{" "}
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
              <td className="py-2.5 pr-4"><code className="text-xs">prescriptionId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the OPD/IPD prescription to dispense against.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">items</code></td>
              <td className="py-2.5 pr-4">DispenseItemRequest[]</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">At least one item to dispense. See item fields below.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">DispenseItemRequest fields</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">drugId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the drug from the drug catalog.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">batchId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the specific batch to dispense from (FEFO &mdash; first expiry, first out).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">quantity</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Number of units to dispense.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dosage</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Dosage instructions (e.g. &quot;1 tablet twice daily after meals&quot;).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">instructions</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Additional instructions for the patient.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: dispense drugs for a prescription</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/pharmacy/dispense \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "prescriptionId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "items": [
      {
        "drugId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "batchId": "11111111-1111-1111-1111-111111111111",
        "quantity": 10,
        "dosage": "1 tablet twice daily after meals",
        "instructions": "Take for 5 days. Avoid on empty stomach."
      },
      {
        "drugId": "c3d4e5f6-a7b8-9012-cdef-234567890123",
        "batchId": "22222222-2222-2222-2222-222222222222",
        "quantity": 6,
        "dosage": "1 tablet once daily before breakfast",
        "instructions": "Take 30 minutes before food."
      },
      {
        "drugId": "d4e5f6a7-b8c9-0123-def0-345678901234",
        "batchId": "33333333-3333-3333-3333-333333333333",
        "quantity": 3,
        "dosage": "1 capsule daily",
        "instructions": "Complete the full course of 3 days."
      }
    ]
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Drugs dispensed successfully",
  "data": {
    "id": "e5f6a7b8-c9d0-1234-ef01-456789012345",
    "dispenseNumber": "DIS-2026-003412",
    "prescriptionId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "patientName": "Anita Kumari Verma",
    "patientUhid": "UHID-2026-004580",
    "status": "DISPENSED",
    "dispensedAt": "2026-06-12T14:30:00Z",
    "dispensedBy": "Pharmacist Ravi Shankar",
    "items": [
      {
        "drugId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "drugName": "Paracetamol 500mg",
        "batchNumber": "PCM-2026-A045",
        "quantity": 10,
        "unitPrice": 2.20,
        "amount": 22.00,
        "dosage": "1 tablet twice daily after meals",
        "instructions": "Take for 5 days. Avoid on empty stomach.",
        "expiryDate": "2027-11-30"
      },
      {
        "drugId": "c3d4e5f6-a7b8-9012-cdef-234567890123",
        "drugName": "Omeprazole 20mg",
        "batchNumber": "OMZ-2026-B012",
        "quantity": 6,
        "unitPrice": 5.50,
        "amount": 33.00,
        "dosage": "1 tablet once daily before breakfast",
        "instructions": "Take 30 minutes before food.",
        "expiryDate": "2027-08-31"
      },
      {
        "drugId": "d4e5f6a7-b8c9-0123-def0-345678901234",
        "drugName": "Azithromycin 250mg",
        "batchNumber": "AZT-2026-C008",
        "quantity": 3,
        "unitPrice": 18.00,
        "amount": 54.00,
        "dosage": "1 capsule daily",
        "instructions": "Complete the full course of 3 days.",
        "expiryDate": "2027-06-30"
      }
    ],
    "subtotal": 109.00,
    "taxAmount": 13.08,
    "totalAmount": 122.08,
    "createdAt": "2026-06-12T14:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List dispensing records</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/pharmacy/dispense" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of dispensing records. Use query parameters to filter by patient,
        date, or status.
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
              <td className="py-2.5 pr-4"><code className="text-xs">date</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5">Filter by dispensing date (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Filter by status: <code className="text-xs">PENDING</code>, <code className="text-xs">DISPENSED</code>, <code className="text-xs">RETURNED</code>.</td>
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
        <code>{`curl "https://hospital.katixo.com/api/v1/pharmacy/dispense?date=2026-06-12&status=DISPENSED&page=0&size=10" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Dispensing records retrieved successfully",
  "data": {
    "content": [
      {
        "id": "e5f6a7b8-c9d0-1234-ef01-456789012345",
        "dispenseNumber": "DIS-2026-003412",
        "prescriptionId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "patientName": "Anita Kumari Verma",
        "patientUhid": "UHID-2026-004580",
        "status": "DISPENSED",
        "dispensedAt": "2026-06-12T14:30:00Z",
        "dispensedBy": "Pharmacist Ravi Shankar",
        "totalAmount": 122.08,
        "itemCount": 3,
        "createdAt": "2026-06-12T14:30:00Z"
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
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get dispense details</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/pharmacy/dispense/{dispenseId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Retrieves the full details of a dispensing record including all items, batch information,
        dosage instructions, and pricing. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;DispenseResponse&gt;</code>.
      </p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/pharmacy/dispense/e5f6a7b8-c9d0-1234-ef01-456789012345 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Return dispensed drugs</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/pharmacy/returns" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Process a return of dispensed drugs. Stock is restored to the original batch and the
        dispensing record is updated. Partial returns are supported &mdash; you can return a
        subset of the dispensed items or a lesser quantity.
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
              <td className="py-2.5 pr-4"><code className="text-xs">dispenseId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the original dispensing record.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">items</code></td>
              <td className="py-2.5 pr-4">ReturnItemRequest[]</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Items to return. See item fields below.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">ReturnItemRequest fields</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">drugId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the drug being returned.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">quantity</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Number of units being returned (must not exceed dispensed quantity).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">reason</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Reason for the return (e.g. &quot;Patient discharged early&quot;, &quot;Adverse reaction&quot;).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/pharmacy/returns \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "dispenseId": "e5f6a7b8-c9d0-1234-ef01-456789012345",
    "items": [
      {
        "drugId": "d4e5f6a7-b8c9-0123-def0-345678901234",
        "quantity": 2,
        "reason": "Patient discharged early, 2 out of 3 Azithromycin capsules unused"
      }
    ]
  }'

# Response
{
  "success": true,
  "message": "Drug return processed successfully",
  "data": {
    "id": "f6a7b8c9-d0e1-2345-f012-567890123456",
    "returnNumber": "RET-2026-000891",
    "dispenseId": "e5f6a7b8-c9d0-1234-ef01-456789012345",
    "patientName": "Anita Kumari Verma",
    "patientUhid": "UHID-2026-004580",
    "items": [
      {
        "drugId": "d4e5f6a7-b8c9-0123-def0-345678901234",
        "drugName": "Azithromycin 250mg",
        "quantity": 2,
        "refundAmount": 36.00,
        "reason": "Patient discharged early, 2 out of 3 Azithromycin capsules unused"
      }
    ],
    "totalRefundAmount": 36.00,
    "processedAt": "2026-06-13T10:15:00Z",
    "processedBy": "Pharmacist Ravi Shankar",
    "createdAt": "2026-06-13T10:15:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Check drug stock</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/pharmacy/stock" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Check real-time stock levels for a specific drug or batch. Returns available quantity,
        batch details, and expiry information. Uses the same inventory engine as Katasticho ERP.
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
              <td className="py-2.5 pr-4"><code className="text-xs">drugId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter stock by drug. Returns all batches for this drug.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">batchId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter stock by specific batch. Returns single batch details.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://hospital.katixo.com/api/v1/pharmacy/stock?drugId=a1b2c3d4-e5f6-7890-abcd-ef1234567890" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Stock details retrieved successfully",
  "data": {
    "drugId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "drugName": "Paracetamol 500mg",
    "totalAvailable": 2450,
    "reorderLevel": 500,
    "batches": [
      {
        "batchId": "11111111-1111-1111-1111-111111111111",
        "batchNumber": "PCM-2026-A045",
        "availableQuantity": 1200,
        "purchasePrice": 1.80,
        "sellingPrice": 2.20,
        "manufacturingDate": "2026-01-15",
        "expiryDate": "2027-11-30",
        "receivedDate": "2026-02-10",
        "supplier": "Cipla Ltd"
      },
      {
        "batchId": "44444444-4444-4444-4444-444444444444",
        "batchNumber": "PCM-2026-A052",
        "availableQuantity": 1250,
        "purchasePrice": 1.85,
        "sellingPrice": 2.20,
        "manufacturingDate": "2026-03-20",
        "expiryDate": "2028-03-31",
        "receivedDate": "2026-04-05",
        "supplier": "Cipla Ltd"
      }
    ]
  },
  "errors": null
}`}</code>
      </pre>

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
    "prescriptionId: must not be null",
    "items: must not be empty"
  ]
}

# 409 Conflict — insufficient stock
{
  "success": false,
  "message": "Insufficient stock",
  "data": null,
  "errors": ["Paracetamol 500mg: requested 100, available 45 in batch PCM-2026-A045"]
}

# 422 Unprocessable Entity — expired batch
{
  "success": false,
  "message": "Cannot dispense from expired batch",
  "data": null,
  "errors": ["Batch OMZ-2025-B003 expired on 2026-01-31. Select a valid batch."]
}`}</code>
      </pre>
    </>
  );
}
