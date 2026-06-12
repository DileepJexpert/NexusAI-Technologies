import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPD API — Hospital OS API Docs",
  description: "Katixo Hospital OS IPD API reference — admissions, ward and bed management, treatment notes, transfers, and discharge.",
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

export default function IpdPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">IPD (Inpatient Department)</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Manage inpatient admissions, ward and bed allocation, treatment notes, bed transfers, and
        patient discharge. The IPD module tracks a patient&apos;s entire inpatient journey &mdash; from
        admission through treatment to final discharge with follow-up instructions. All endpoints
        require JWT Bearer token authentication.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Base URL</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>https://hospital.katixo.com/api/v1</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="POST" path="/api/v1/ipd/admissions" />
        <Endpoint method="GET" path="/api/v1/ipd/admissions" />
        <Endpoint method="GET" path="/api/v1/ipd/admissions/{admissionId}" />
        <Endpoint method="GET" path="/api/v1/ipd/wards" />
        <Endpoint method="PUT" path="/api/v1/ipd/admissions/{admissionId}/transfer" />
        <Endpoint method="POST" path="/api/v1/ipd/admissions/{admissionId}/treatment-notes" />
        <Endpoint method="PUT" path="/api/v1/ipd/admissions/{admissionId}/discharge" />
      </div>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Authentication:</strong> All endpoints require a valid JWT Bearer token in the{" "}
        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-900/40">Authorization</code> header.
        All IDs are UUIDs.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The AdmissionResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Admission retrieved successfully",
  "data": {
    "id": "b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c",
    "admissionNumber": "ADM-2026-00001",
    "patientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "patientName": "Rajesh Kumar Sharma",
    "patientUhid": "UHID-2026-004821",
    "doctorName": "Dr. Priya Mehta",
    "departmentName": "Cardiology",
    "wardName": "Ward A - Cardiac Care",
    "bedNumber": "A-204",
    "admissionDate": "2026-06-10T09:30:00Z",
    "admissionReason": "Acute myocardial infarction - chest pain and elevated troponin levels",
    "status": "ADMITTED",
    "insuranceDetails": {
      "policyNumber": "STAR-HC-98234710",
      "providerName": "Star Health Insurance",
      "preAuthAmount": 250000.00
    },
    "treatmentNotes": [
      {
        "id": "c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f",
        "noteType": "PROGRESS",
        "content": "Patient stable post-angioplasty. Vitals: BP 130/80, HR 72, SpO2 98%. Continuing dual antiplatelet therapy.",
        "doctorName": "Dr. Priya Mehta",
        "createdAt": "2026-06-11T08:15:00Z"
      },
      {
        "id": "d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a",
        "noteType": "NURSING",
        "content": "IV fluids running. Patient took oral feed. No complaints of chest pain. Wound dressing at catheter site clean and dry.",
        "doctorName": "Sr. Nurse Kavitha",
        "createdAt": "2026-06-11T14:00:00Z"
      }
    ],
    "dischargeDate": null,
    "dischargeSummary": null,
    "createdAt": "2026-06-10T09:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Admission statuses</h2>
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
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ADMITTED</code></td>
              <td className="py-2.5">Patient is currently admitted and occupying a bed.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">TRANSFERRED</code></td>
              <td className="py-2.5">Patient has been transferred to a different ward or bed.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DISCHARGED</code></td>
              <td className="py-2.5">Patient has been discharged with a discharge summary and follow-up instructions.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Ward types</h2>
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
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">GENERAL</code></td>
              <td className="py-2.5">General ward with shared rooms and basic facilities.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SEMI_PRIVATE</code></td>
              <td className="py-2.5">Semi-private room shared between two patients.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PRIVATE</code></td>
              <td className="py-2.5">Private single-occupancy room with attached washroom.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ICU</code></td>
              <td className="py-2.5">Intensive Care Unit for critically ill patients requiring continuous monitoring.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">NICU</code></td>
              <td className="py-2.5">Neonatal Intensive Care Unit for newborns requiring specialized care.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PICU</code></td>
              <td className="py-2.5">Paediatric Intensive Care Unit for critically ill children.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Admit a patient</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/ipd/admissions" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a new inpatient admission. The specified bed is marked as occupied and the patient
        status changes to <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ADMITTED</code>.
        Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> on success.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-4 overflow-x-auto">
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
              <td className="py-2.5">ID of the registered patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">doctorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the admitting/treating doctor.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">departmentId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the clinical department (e.g. Cardiology, Orthopaedics).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">wardId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the ward where the patient will be admitted.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">bedId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the specific bed to assign.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">admissionDate</code></td>
              <td className="py-2.5 pr-4">DateTime</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date and time of admission (ISO 8601).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">admissionReason</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Clinical reason for admission.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">referredBy</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Name of the referring doctor or hospital.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">estimatedStayDays</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Estimated number of days the patient will stay.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">insuranceDetails</code></td>
              <td className="py-2.5 pr-4">Object</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Insurance information. Contains <code className="text-xs">policyNumber</code> (String), <code className="text-xs">providerName</code> (String), and <code className="text-xs">preAuthAmount</code> (BigDecimal).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: admit a patient to Fortis Memorial, Gurugram</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/ipd/admissions \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "patientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "doctorId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "departmentId": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "wardId": "d4e5f6a7-b8c9-0123-def0-234567890123",
    "bedId": "e5f6a7b8-c9d0-1234-ef01-345678901234",
    "admissionDate": "2026-06-10T09:30:00Z",
    "admissionReason": "Acute myocardial infarction - chest pain and elevated troponin levels",
    "referredBy": "Dr. Anil Gupta, City Heart Clinic, Gurgaon",
    "estimatedStayDays": 5,
    "insuranceDetails": {
      "policyNumber": "STAR-HC-98234710",
      "providerName": "Star Health Insurance",
      "preAuthAmount": 250000.00
    }
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Patient admitted successfully",
  "data": {
    "id": "b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c",
    "admissionNumber": "ADM-2026-00001",
    "patientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "patientName": "Rajesh Kumar Sharma",
    "patientUhid": "UHID-2026-004821",
    "doctorName": "Dr. Priya Mehta",
    "departmentName": "Cardiology",
    "wardName": "Ward A - Cardiac Care",
    "bedNumber": "A-204",
    "admissionDate": "2026-06-10T09:30:00Z",
    "admissionReason": "Acute myocardial infarction - chest pain and elevated troponin levels",
    "status": "ADMITTED",
    "insuranceDetails": {
      "policyNumber": "STAR-HC-98234710",
      "providerName": "Star Health Insurance",
      "preAuthAmount": 250000.00
    },
    "treatmentNotes": [],
    "dischargeDate": null,
    "dischargeSummary": null,
    "createdAt": "2026-06-10T09:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List admissions</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/ipd/admissions" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of admissions. The response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;PagedResponse&lt;AdmissionResponse&gt;&gt;</code>.
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
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Filter by status: <code className="text-xs">ADMITTED</code>, <code className="text-xs">DISCHARGED</code>, <code className="text-xs">TRANSFERRED</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">wardId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by ward.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">doctorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by treating doctor.</td>
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
        <code>{`curl https://hospital.katixo.com/api/v1/ipd/admissions?status=ADMITTED&page=0&size=10 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Admissions retrieved successfully",
  "data": {
    "content": [
      {
        "id": "b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c",
        "admissionNumber": "ADM-2026-00001",
        "patientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "patientName": "Rajesh Kumar Sharma",
        "patientUhid": "UHID-2026-004821",
        "doctorName": "Dr. Priya Mehta",
        "departmentName": "Cardiology",
        "wardName": "Ward A - Cardiac Care",
        "bedNumber": "A-204",
        "admissionDate": "2026-06-10T09:30:00Z",
        "admissionReason": "Acute myocardial infarction - chest pain and elevated troponin levels",
        "status": "ADMITTED",
        "insuranceDetails": {
          "policyNumber": "STAR-HC-98234710",
          "providerName": "Star Health Insurance",
          "preAuthAmount": 250000.00
        },
        "treatmentNotes": [...],
        "dischargeDate": null,
        "dischargeSummary": null,
        "createdAt": "2026-06-10T09:30:00Z"
      },
      {
        "id": "c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f",
        "admissionNumber": "ADM-2026-00002",
        "patientId": "d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a",
        "patientName": "Sunita Devi Verma",
        "patientUhid": "UHID-2026-004822",
        "doctorName": "Dr. Rakesh Agarwal",
        "departmentName": "Orthopaedics",
        "wardName": "Ward C - Ortho",
        "bedNumber": "C-112",
        "admissionDate": "2026-06-10T14:15:00Z",
        "admissionReason": "Fracture of right femur following road traffic accident",
        "status": "ADMITTED",
        "insuranceDetails": null,
        "treatmentNotes": [...],
        "dischargeDate": null,
        "dischargeSummary": null,
        "createdAt": "2026-06-10T14:15:00Z"
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 34,
    "totalPages": 4,
    "last": false
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get admission details</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/ipd/admissions/{admissionId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Retrieves a single admission by its UUID, including the current bed assignment, full
        treatment history, and discharge details (if discharged). Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;AdmissionResponse&gt;</code>.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/ipd/admissions/b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List wards with bed availability</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/ipd/wards" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns all wards in the hospital with real-time bed availability counts. Use this to check
        available beds before creating an admission or initiating a transfer.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/ipd/wards \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Wards retrieved successfully",
  "data": [
    {
      "id": "d4e5f6a7-b8c9-0123-def0-234567890123",
      "wardName": "Ward A - Cardiac Care",
      "wardType": "SEMI_PRIVATE",
      "totalBeds": 20,
      "occupiedBeds": 14,
      "availableBeds": 6
    },
    {
      "id": "e5f6a7b8-c9d0-2345-ef01-345678901234",
      "wardName": "Ward B - General Medicine",
      "wardType": "GENERAL",
      "totalBeds": 40,
      "occupiedBeds": 31,
      "availableBeds": 9
    },
    {
      "id": "f6a7b8c9-d0e1-3456-f012-456789012345",
      "wardName": "Ward C - Ortho",
      "wardType": "SEMI_PRIVATE",
      "totalBeds": 16,
      "occupiedBeds": 12,
      "availableBeds": 4
    },
    {
      "id": "a7b8c9d0-e1f2-4567-0123-567890123456",
      "wardName": "ICU - Main",
      "wardType": "ICU",
      "totalBeds": 12,
      "occupiedBeds": 10,
      "availableBeds": 2
    },
    {
      "id": "b8c9d0e1-f2a3-5678-1234-678901234567",
      "wardName": "NICU",
      "wardType": "NICU",
      "totalBeds": 8,
      "occupiedBeds": 5,
      "availableBeds": 3
    },
    {
      "id": "c9d0e1f2-a3b4-6789-2345-789012345678",
      "wardName": "Deluxe Suites - Private",
      "wardType": "PRIVATE",
      "totalBeds": 10,
      "occupiedBeds": 7,
      "availableBeds": 3
    }
  ],
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Transfer patient</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/ipd/admissions/{admissionId}/transfer" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Transfers a patient to a different bed or ward. The previous bed is freed and the new bed
        is marked as occupied. A transfer record is logged in the admission history.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-4 overflow-x-auto">
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
              <td className="py-2.5 pr-4"><code className="text-xs">newWardId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the destination ward.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">newBedId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the destination bed.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">reason</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Reason for the transfer.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: transfer to ICU at AIIMS Delhi</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/ipd/admissions/b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c/transfer \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "newWardId": "a7b8c9d0-e1f2-4567-0123-567890123456",
    "newBedId": "1a2b3c4d-5e6f-7890-abcd-ef0123456789",
    "reason": "Patient condition deteriorated - requires continuous cardiac monitoring and ventilator support"
  }'

# Response
{
  "success": true,
  "message": "Patient transferred successfully",
  "data": {
    "id": "b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c",
    "admissionNumber": "ADM-2026-00001",
    "patientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "patientName": "Rajesh Kumar Sharma",
    "patientUhid": "UHID-2026-004821",
    "doctorName": "Dr. Priya Mehta",
    "departmentName": "Cardiology",
    "wardName": "ICU - Main",
    "bedNumber": "ICU-03",
    "admissionDate": "2026-06-10T09:30:00Z",
    "admissionReason": "Acute myocardial infarction - chest pain and elevated troponin levels",
    "status": "ADMITTED",
    "insuranceDetails": {
      "policyNumber": "STAR-HC-98234710",
      "providerName": "Star Health Insurance",
      "preAuthAmount": 250000.00
    },
    "treatmentNotes": [...],
    "dischargeDate": null,
    "dischargeSummary": null,
    "createdAt": "2026-06-10T09:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Add treatment note</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/ipd/admissions/{admissionId}/treatment-notes" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Appends a treatment note to the admission record. Treatment notes form the patient&apos;s
        clinical chart and include progress updates, nursing observations, medication logs, and
        dietary instructions. Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> on success.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-4 overflow-x-auto">
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
              <td className="py-2.5 pr-4"><code className="text-xs">noteType</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Type of note: <code className="text-xs">PROGRESS</code>, <code className="text-xs">NURSING</code>, <code className="text-xs">MEDICATION</code>, or <code className="text-xs">DIET</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">content</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">The clinical note content.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">doctorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the doctor or nurse adding the note.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Note types</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">PROGRESS</code></td>
              <td className="py-2.5">Doctor&apos;s progress note with clinical observations and plan of care.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">NURSING</code></td>
              <td className="py-2.5">Nursing observations including vitals, intake/output, and patient comfort.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">MEDICATION</code></td>
              <td className="py-2.5">Medication administration record with drug, dose, route, and time.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DIET</code></td>
              <td className="py-2.5">Dietary instructions and meal plan for the patient.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: add a medication note</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/ipd/admissions/b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c/treatment-notes \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "noteType": "MEDICATION",
    "content": "Administered Inj. Enoxaparin 60mg SC. Tab Clopidogrel 75mg + Tab Aspirin 75mg given orally. Tab Atorvastatin 40mg given at bedtime. Vitals stable post-medication.",
    "doctorId": "f47ac10b-58cc-4372-a567-0e02b2c3d479"
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Treatment note added successfully",
  "data": {
    "id": "e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
    "noteType": "MEDICATION",
    "content": "Administered Inj. Enoxaparin 60mg SC. Tab Clopidogrel 75mg + Tab Aspirin 75mg given orally. Tab Atorvastatin 40mg given at bedtime. Vitals stable post-medication.",
    "doctorName": "Dr. Priya Mehta",
    "createdAt": "2026-06-11T20:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Discharge patient</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/ipd/admissions/{admissionId}/discharge" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Discharges a patient from the hospital. The assigned bed is freed, the admission status
        changes to <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">DISCHARGED</code>,
        and a discharge summary with follow-up instructions is recorded. This action is irreversible.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Request body</h3>
      <div className="mt-4 overflow-x-auto">
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
              <td className="py-2.5 pr-4"><code className="text-xs">dischargeDate</code></td>
              <td className="py-2.5 pr-4">DateTime</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date and time of discharge (ISO 8601).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dischargeSummary</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Clinical discharge summary describing diagnosis, treatment, and outcome.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">followUpDate</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Date for the follow-up visit (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">followUpInstructions</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Instructions for the patient to follow after discharge.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">dischargeMedications</code></td>
              <td className="py-2.5 pr-4">String[]</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Array of medications prescribed at discharge.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: discharge from Narayana Health, Bangalore</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/ipd/admissions/b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c/discharge \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "dischargeDate": "2026-06-15T11:00:00Z",
    "dischargeSummary": "Patient admitted with acute MI on 10/06/2026. Underwent successful PTCA with stent placement to LAD on 11/06/2026. Post-procedure recovery uneventful. Patient is hemodynamically stable, afebrile, and mobilizing independently. ECG shows normal sinus rhythm. Echo shows LVEF 50%. Discharged in satisfactory condition.",
    "followUpDate": "2026-06-22",
    "followUpInstructions": "Review in OPD Cardiology after 1 week. Avoid heavy lifting for 4 weeks. Report immediately if chest pain, breathlessness, or bleeding from puncture site. Strict salt-restricted diet. Walk 20 minutes daily.",
    "dischargeMedications": [
      "Tab Clopidogrel 75mg OD x 12 months",
      "Tab Aspirin 75mg OD x lifelong",
      "Tab Atorvastatin 40mg HS x lifelong",
      "Tab Metoprolol 25mg BD x 3 months",
      "Tab Ramipril 2.5mg OD x 3 months",
      "Tab Pantoprazole 40mg OD x 1 month"
    ]
  }'

# Response
{
  "success": true,
  "message": "Patient discharged successfully",
  "data": {
    "id": "b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c",
    "admissionNumber": "ADM-2026-00001",
    "patientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "patientName": "Rajesh Kumar Sharma",
    "patientUhid": "UHID-2026-004821",
    "doctorName": "Dr. Priya Mehta",
    "departmentName": "Cardiology",
    "wardName": "ICU - Main",
    "bedNumber": "ICU-03",
    "admissionDate": "2026-06-10T09:30:00Z",
    "admissionReason": "Acute myocardial infarction - chest pain and elevated troponin levels",
    "status": "DISCHARGED",
    "insuranceDetails": {
      "policyNumber": "STAR-HC-98234710",
      "providerName": "Star Health Insurance",
      "preAuthAmount": 250000.00
    },
    "treatmentNotes": [
      {
        "id": "c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f",
        "noteType": "PROGRESS",
        "content": "Patient stable post-angioplasty. Vitals: BP 130/80, HR 72, SpO2 98%. Continuing dual antiplatelet therapy.",
        "doctorName": "Dr. Priya Mehta",
        "createdAt": "2026-06-11T08:15:00Z"
      },
      {
        "id": "d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a",
        "noteType": "NURSING",
        "content": "IV fluids running. Patient took oral feed. No complaints of chest pain. Wound dressing at catheter site clean and dry.",
        "doctorName": "Sr. Nurse Kavitha",
        "createdAt": "2026-06-11T14:00:00Z"
      },
      {
        "id": "e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
        "noteType": "MEDICATION",
        "content": "Administered Inj. Enoxaparin 60mg SC. Tab Clopidogrel 75mg + Tab Aspirin 75mg given orally. Tab Atorvastatin 40mg given at bedtime. Vitals stable post-medication.",
        "doctorName": "Dr. Priya Mehta",
        "createdAt": "2026-06-11T20:30:00Z"
      }
    ],
    "dischargeDate": "2026-06-15T11:00:00Z",
    "dischargeSummary": "Patient admitted with acute MI on 10/06/2026. Underwent successful PTCA with stent placement to LAD on 11/06/2026. Post-procedure recovery uneventful. Patient is hemodynamically stable, afebrile, and mobilizing independently. ECG shows normal sinus rhythm. Echo shows LVEF 50%. Discharged in satisfactory condition.",
    "createdAt": "2026-06-10T09:30:00Z"
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
    "patientId: must not be null",
    "bedId: must not be null",
    "admissionReason: must not be blank"
  ]
}

# 404 Not Found
{
  "success": false,
  "message": "Admission not found",
  "data": null,
  "errors": ["No admission found with id: b7e4c1a2-3d5f-4e8a-9b1c-2d3e4f5a6b7c"]
}

# 409 Conflict — bed already occupied
{
  "success": false,
  "message": "Bed unavailable",
  "data": null,
  "errors": ["Bed A-204 in Ward A - Cardiac Care is already occupied by another patient"]
}

# 422 Unprocessable Entity — invalid state transition
{
  "success": false,
  "message": "Invalid operation",
  "data": null,
  "errors": ["Cannot discharge patient: admission is already in DISCHARGED status"]
}`}</code>
      </pre>
    </>
  );
}
