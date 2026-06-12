import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory API — Hospital OS",
  description:
    "Katixo Hospital OS Laboratory API — test catalog, lab orders, sample collection, result entry, and pathologist verification.",
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

export default function LaboratoryPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Laboratory</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The Laboratory module manages the full diagnostic workflow &mdash; from maintaining a
        test catalog and placing lab orders to recording sample collection, entering results
        with parameter-level detail, and pathologist verification. Orders can originate from
        OPD consultations or IPD admissions.
      </p>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Base URL:</strong>{" "}
        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-800/40">
          https://hospital.katixo.com/api/v1
        </code>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/lab/tests" />
        <Endpoint method="POST" path="/api/v1/lab/orders" />
        <Endpoint method="GET" path="/api/v1/lab/orders" />
        <Endpoint method="GET" path="/api/v1/lab/orders/{orderId}" />
        <Endpoint method="PUT" path="/api/v1/lab/orders/{orderId}/collect-sample" />
        <Endpoint method="PUT" path="/api/v1/lab/orders/{orderId}/results" />
        <Endpoint method="PUT" path="/api/v1/lab/orders/{orderId}/verify" />
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Authentication</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All requests require a JWT Bearer token in the{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Authorization</code> header.
        The token must include valid <code className="text-xs">tenantId</code>,{" "}
        <code className="text-xs">groupId</code>, and <code className="text-xs">branchId</code> claims
        scoping the request to the correct hospital branch.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`Authorization: Bearer eyJhbGciOiJIUzI1NiIs...`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Enums</h2>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">TestCategory</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {["HEMATOLOGY", "BIOCHEMISTRY", "MICROBIOLOGY", "RADIOLOGY", "PATHOLOGY"].map((t) => (
          <code
            key={t}
            className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300"
          >
            {t}
          </code>
        ))}
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">SampleType</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {["BLOOD", "URINE", "STOOL", "SWAB", "TISSUE"].map((t) => (
          <code
            key={t}
            className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300"
          >
            {t}
          </code>
        ))}
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Priority</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {["ROUTINE", "URGENT", "STAT"].map((t) => (
          <code
            key={t}
            className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300"
          >
            {t}
          </code>
        ))}
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">OrderStatus</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {["ORDERED", "SAMPLE_COLLECTED", "PROCESSING", "COMPLETED", "CANCELLED"].map((t) => (
          <code
            key={t}
            className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300"
          >
            {t}
          </code>
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The LabOrderResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
  "orderNumber": "LAB-2026-00123",
  "patientId": "f6b9c4d2-8e3a-5f0b-b2c4-d6e8f0a1b3c5",
  "patientName": "Rajesh Kumar Sharma",
  "patientUhid": "UHID-2026-004571",
  "orderedBy": "Dr. Priya Mehta",
  "orderDate": "2026-06-12T09:30:00Z",
  "priority": "ROUTINE",
  "status": "COMPLETED",
  "tests": [
    {
      "testId": "b2c3d4e5-6789-abcd-ef01-23456789abcd",
      "testCode": "CBC",
      "testName": "Complete Blood Count",
      "category": "HEMATOLOGY",
      "sampleType": "BLOOD",
      "status": "COMPLETED",
      "sampleId": "SMP-20260612-0047",
      "collectedBy": "Nurse Anjali Desai",
      "collectionTime": "2026-06-12T10:15:00Z",
      "results": [
        {
          "parameterName": "Hemoglobin",
          "value": "14.2",
          "unit": "g/dL",
          "normalRange": "13.0-17.0",
          "isAbnormal": false
        },
        {
          "parameterName": "WBC Count",
          "value": "7500",
          "unit": "cells/cumm",
          "normalRange": "4000-11000",
          "isAbnormal": false
        },
        {
          "parameterName": "RBC Count",
          "value": "5.1",
          "unit": "million/cumm",
          "normalRange": "4.5-5.5",
          "isAbnormal": false
        },
        {
          "parameterName": "Platelet Count",
          "value": "2.8",
          "unit": "lakh/cumm",
          "normalRange": "1.5-4.0",
          "isAbnormal": false
        },
        {
          "parameterName": "PCV (Hematocrit)",
          "value": "42.5",
          "unit": "%",
          "normalRange": "40-50",
          "isAbnormal": false
        },
        {
          "parameterName": "MCV",
          "value": "83.3",
          "unit": "fL",
          "normalRange": "80-100",
          "isAbnormal": false
        }
      ],
      "verifiedBy": "Dr. Sunil Patil",
      "verifiedAt": "2026-06-12T14:45:00Z",
      "remarks": "All parameters within normal limits."
    }
  ]
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Key fields</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Field</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">id</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Unique identifier for the lab order.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">orderNumber</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Auto-generated order number (e.g., <code className="text-xs">LAB-2026-00123</code>).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">patientUhid</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Unique Hospital Identification number of the patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">orderedBy</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Name of the referring doctor.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">priority</code></td>
              <td className="py-2.5 pr-4">Priority</td>
              <td className="py-2.5"><code className="text-xs">ROUTINE</code>, <code className="text-xs">URGENT</code>, or <code className="text-xs">STAT</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">OrderStatus</td>
              <td className="py-2.5">Current workflow status of the order.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">tests</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5">List of ordered tests with their results and verification details.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">tests[].results</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5">Parameter-level results with value, unit, normal range, and abnormal flag.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List available lab tests</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/lab/tests" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the test catalog configured for the hospital. Use query parameters to filter
        by category or search by test name/code.
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
              <td className="py-2.5 pr-4"><code className="text-xs">category</code></td>
              <td className="py-2.5 pr-4">TestCategory</td>
              <td className="py-2.5">Filter by category: <code className="text-xs">HEMATOLOGY</code>, <code className="text-xs">BIOCHEMISTRY</code>, <code className="text-xs">MICROBIOLOGY</code>, <code className="text-xs">RADIOLOGY</code>, or <code className="text-xs">PATHOLOGY</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">search</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5">Search by test name or test code.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5">Page number (zero-based). Default: 0.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">size</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5">Page size. Default: 20.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://hospital.katixo.com/api/v1/lab/tests?category=HEMATOLOGY&page=0&size=10" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Response</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Lab tests retrieved successfully",
  "data": {
    "content": [
      {
        "testId": "b2c3d4e5-6789-abcd-ef01-23456789abcd",
        "testCode": "CBC",
        "testName": "Complete Blood Count",
        "category": "HEMATOLOGY",
        "sampleType": "BLOOD",
        "price": 450.00,
        "turnaroundHours": 4
      },
      {
        "testId": "c3d4e5f6-789a-bcde-f012-3456789abcde",
        "testCode": "ESR",
        "testName": "Erythrocyte Sedimentation Rate",
        "category": "HEMATOLOGY",
        "sampleType": "BLOOD",
        "price": 200.00,
        "turnaroundHours": 2
      },
      {
        "testId": "d4e5f6a7-89ab-cdef-0123-456789abcdef",
        "testCode": "PT-INR",
        "testName": "Prothrombin Time with INR",
        "category": "HEMATOLOGY",
        "sampleType": "BLOOD",
        "price": 550.00,
        "turnaroundHours": 6
      }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 18,
    "totalPages": 2,
    "last": false
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a lab order</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/lab/orders" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a new lab test order for a patient. The order can be linked to an OPD
        appointment (<code className="text-xs">appointmentId</code>) or an IPD admission
        (<code className="text-xs">admissionId</code>) to track the source. The{" "}
        <code className="text-xs">orderNumber</code> is auto-generated by the system.
      </p>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Request body</h3>
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
              <td className="py-2.5">Patient for whom the tests are ordered.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">appointmentId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No*</td>
              <td className="py-2.5">OPD appointment that originated the order.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">admissionId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No*</td>
              <td className="py-2.5">IPD admission that originated the order.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">tests</code></td>
              <td className="py-2.5 pr-4">UUID[]</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Array of test IDs from the test catalog.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">priority</code></td>
              <td className="py-2.5 pr-4">Priority</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5"><code className="text-xs">ROUTINE</code>, <code className="text-xs">URGENT</code>, or <code className="text-xs">STAT</code>.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">notes</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Clinical notes or special instructions for the lab technician.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        * Provide either <code className="text-xs">appointmentId</code> or{" "}
        <code className="text-xs">admissionId</code> to link the order to its source.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/lab/orders \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "patientId": "f6b9c4d2-8e3a-5f0b-b2c4-d6e8f0a1b3c5",
    "appointmentId": "e5a8b3c1-7d2f-4e9a-a1b3-c5d7e9f0a2b4",
    "tests": [
      "b2c3d4e5-6789-abcd-ef01-23456789abcd",
      "c3d4e5f6-789a-bcde-f012-3456789abcde"
    ],
    "priority": "ROUTINE",
    "notes": "Patient is on anticoagulant therapy. Please note in CBC."
  }'`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Response</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Lab order created successfully",
  "data": {
    "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
    "orderNumber": "LAB-2026-00123",
    "patientId": "f6b9c4d2-8e3a-5f0b-b2c4-d6e8f0a1b3c5",
    "patientName": "Rajesh Kumar Sharma",
    "patientUhid": "UHID-2026-004571",
    "orderedBy": "Dr. Priya Mehta",
    "orderDate": "2026-06-12T09:30:00Z",
    "priority": "ROUTINE",
    "status": "ORDERED",
    "tests": [
      {
        "testId": "b2c3d4e5-6789-abcd-ef01-23456789abcd",
        "testCode": "CBC",
        "testName": "Complete Blood Count",
        "category": "HEMATOLOGY",
        "sampleType": "BLOOD",
        "status": "ORDERED",
        "results": null,
        "verifiedBy": null,
        "verifiedAt": null
      },
      {
        "testId": "c3d4e5f6-789a-bcde-f012-3456789abcde",
        "testCode": "ESR",
        "testName": "Erythrocyte Sedimentation Rate",
        "category": "HEMATOLOGY",
        "sampleType": "BLOOD",
        "status": "ORDERED",
        "results": null,
        "verifiedBy": null,
        "verifiedAt": null
      }
    ]
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List lab orders</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/lab/orders" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of lab orders for the hospital branch. Filter by status,
        patient, or date to narrow results.
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
              <td className="py-2.5 pr-4">OrderStatus</td>
              <td className="py-2.5">Filter by order status.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">patientId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter orders for a specific patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">date</code></td>
              <td className="py-2.5 pr-4">date</td>
              <td className="py-2.5">Filter by order date (ISO format, e.g., <code className="text-xs">2026-06-12</code>).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5">Page number (zero-based). Default: 0.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">size</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5">Page size. Default: 20.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://hospital.katixo.com/api/v1/lab/orders?status=ORDERED&date=2026-06-12&page=0&size=20" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Response</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Lab orders retrieved successfully",
  "data": {
    "content": [
      {
        "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
        "orderNumber": "LAB-2026-00123",
        "patientName": "Rajesh Kumar Sharma",
        "patientUhid": "UHID-2026-004571",
        "orderedBy": "Dr. Priya Mehta",
        "orderDate": "2026-06-12T09:30:00Z",
        "priority": "ROUTINE",
        "status": "ORDERED",
        "testCount": 2
      }
    ],
    "page": 0,
    "size": 20,
    "totalElements": 34,
    "totalPages": 2,
    "last": false
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get order by ID</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/lab/orders/{orderId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the full lab order with all test details and results (if available). This is the
        primary endpoint for viewing a patient&apos;s lab report.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/lab/orders/a1b2c3d4-5678-9abc-def0-123456789abc \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;LabOrderResponse&gt;</code> with
        the full order object including nested test results and verification details (see the LabOrderResponse object above).
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Record sample collection</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/lab/orders/{orderId}/collect-sample" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Records sample collection details for an order. Transitions the order status from{" "}
        <code className="text-xs">ORDERED</code> to <code className="text-xs">SAMPLE_COLLECTED</code>.
        The <code className="text-xs">sampleId</code> typically corresponds to the barcode
        printed on the sample container.
      </p>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Request body</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">collectedBy</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Name of the phlebotomist or nurse who collected the sample.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">collectionTime</code></td>
              <td className="py-2.5 pr-4">datetime</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ISO 8601 timestamp of sample collection.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">sampleId</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Barcode identifier on the sample container.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/lab/orders/a1b2c3d4-5678-9abc-def0-123456789abc/collect-sample \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "collectedBy": "Nurse Anjali Desai",
    "collectionTime": "2026-06-12T10:15:00Z",
    "sampleId": "SMP-20260612-0047"
  }'`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Response</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Sample collection recorded successfully",
  "data": {
    "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
    "orderNumber": "LAB-2026-00123",
    "status": "SAMPLE_COLLECTED",
    "sampleId": "SMP-20260612-0047",
    "collectedBy": "Nurse Anjali Desai",
    "collectionTime": "2026-06-12T10:15:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Enter test results</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/lab/orders/{orderId}/results" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Submits test results with parameter-level detail. Each test in the order can have
        multiple parameters (e.g., CBC includes Hemoglobin, WBC, RBC, Platelets, etc.).
        Transitions the order status to <code className="text-xs">PROCESSING</code>.
      </p>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Request body</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">results</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Array of test result objects.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">results[].testId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">The test ID within the order.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">results[].parameters</code></td>
              <td className="py-2.5 pr-4">array</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Array of parameter results for the test.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">parameters[].parameterName</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Name of the measured parameter.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">parameters[].value</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Measured value (string to support both numeric and text results).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">parameters[].unit</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Unit of measurement (e.g., g/dL, cells/cumm, mg/dL).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">parameters[].normalRange</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Reference range (e.g., &quot;13.0-17.0&quot;, &quot;4000-11000&quot;).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">parameters[].isAbnormal</code></td>
              <td className="py-2.5 pr-4">boolean</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Whether the value is outside the normal range.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: CBC results entry</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/lab/orders/a1b2c3d4-5678-9abc-def0-123456789abc/results \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "results": [
      {
        "testId": "b2c3d4e5-6789-abcd-ef01-23456789abcd",
        "parameters": [
          {
            "parameterName": "Hemoglobin",
            "value": "14.2",
            "unit": "g/dL",
            "normalRange": "13.0-17.0",
            "isAbnormal": false
          },
          {
            "parameterName": "WBC Count",
            "value": "7500",
            "unit": "cells/cumm",
            "normalRange": "4000-11000",
            "isAbnormal": false
          },
          {
            "parameterName": "RBC Count",
            "value": "5.1",
            "unit": "million/cumm",
            "normalRange": "4.5-5.5",
            "isAbnormal": false
          },
          {
            "parameterName": "Platelet Count",
            "value": "2.8",
            "unit": "lakh/cumm",
            "normalRange": "1.5-4.0",
            "isAbnormal": false
          },
          {
            "parameterName": "PCV (Hematocrit)",
            "value": "42.5",
            "unit": "%",
            "normalRange": "40-50",
            "isAbnormal": false
          },
          {
            "parameterName": "MCV",
            "value": "83.3",
            "unit": "fL",
            "normalRange": "80-100",
            "isAbnormal": false
          },
          {
            "parameterName": "MCH",
            "value": "27.8",
            "unit": "pg",
            "normalRange": "27-31",
            "isAbnormal": false
          },
          {
            "parameterName": "MCHC",
            "value": "33.4",
            "unit": "g/dL",
            "normalRange": "32-36",
            "isAbnormal": false
          }
        ]
      }
    ]
  }'`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Response</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Test results recorded successfully",
  "data": {
    "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
    "orderNumber": "LAB-2026-00123",
    "status": "PROCESSING",
    "resultsEnteredAt": "2026-06-12T13:20:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Verify results</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/lab/orders/{orderId}/verify" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Approves and verifies the test results. This is typically done by a pathologist or
        senior lab technician. Transitions the order status from{" "}
        <code className="text-xs">PROCESSING</code> to <code className="text-xs">COMPLETED</code>.
        Once verified, the report becomes available for the referring doctor and the patient.
      </p>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Request body</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">verifiedBy</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Name of the pathologist or verifying authority.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">remarks</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Pathologist remarks or interpretation notes.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/lab/orders/a1b2c3d4-5678-9abc-def0-123456789abc/verify \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "verifiedBy": "Dr. Sunil Patil",
    "remarks": "All parameters within normal limits."
  }'`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Response</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Lab results verified successfully",
  "data": {
    "id": "a1b2c3d4-5678-9abc-def0-123456789abc",
    "orderNumber": "LAB-2026-00123",
    "status": "COMPLETED",
    "verifiedBy": "Dr. Sunil Patil",
    "verifiedAt": "2026-06-12T14:45:00Z",
    "remarks": "All parameters within normal limits."
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Workflow</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        A lab order follows this lifecycle:
      </p>
      <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 px-5 py-4 dark:border-white/10">
          <span className="shrink-0 rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">1</span>
          <div>
            <strong className="text-slate-900 dark:text-white">ORDERED</strong> &mdash; Doctor places the order via{" "}
            <code className="text-xs">POST /api/v1/lab/orders</code>. System auto-generates the order number.
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 px-5 py-4 dark:border-white/10">
          <span className="shrink-0 rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">2</span>
          <div>
            <strong className="text-slate-900 dark:text-white">SAMPLE_COLLECTED</strong> &mdash; Phlebotomist records
            sample collection with barcode via <code className="text-xs">PUT .../collect-sample</code>.
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 px-5 py-4 dark:border-white/10">
          <span className="shrink-0 rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">3</span>
          <div>
            <strong className="text-slate-900 dark:text-white">PROCESSING</strong> &mdash; Lab technician enters
            parameter-level results via <code className="text-xs">PUT .../results</code>.
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 px-5 py-4 dark:border-white/10">
          <span className="shrink-0 rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">4</span>
          <div>
            <strong className="text-slate-900 dark:text-white">COMPLETED</strong> &mdash; Pathologist verifies and
            approves results via <code className="text-xs">PUT .../verify</code>. Report is now final.
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        An order can be moved to <code className="text-xs">CANCELLED</code> at any point before
        verification.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Error responses</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Validation errors and business rule violations are returned inside the{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">errors</code> array:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "errors": [
    "patientId: must not be null",
    "tests: must not be empty",
    "priority: must not be null"
  ]
}`}</code>
      </pre>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Status</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Reason</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">400</code></td>
              <td className="py-2.5">Validation error (missing required fields, invalid test IDs, empty results).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">401</code></td>
              <td className="py-2.5">Missing or invalid JWT Bearer token.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">403</code></td>
              <td className="py-2.5">Insufficient permissions (e.g., only pathologists can verify results).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">404</code></td>
              <td className="py-2.5">Order or patient not found for the given ID.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">409</code></td>
              <td className="py-2.5">Invalid status transition (e.g., entering results before sample collection).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
