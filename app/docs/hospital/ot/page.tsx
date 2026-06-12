import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operation Theatre API — Katixo Hospital OS",
  description: "Schedule surgeries, manage OT bookings, track surgical teams, and record operative notes via the Katixo Hospital OS API.",
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

export default function OTPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Operation Theatre</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Manage operation theatres, schedule surgeries, assign surgical teams, and record
        pre-operative and post-operative notes. The OT module integrates with IPD admissions
        to ensure only admitted patients can be scheduled for surgery.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Base URL</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>https://hospital.katixo.com/api/v1</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/ot/theatres" />
        <Endpoint method="POST" path="/api/v1/ot/surgeries" />
        <Endpoint method="GET" path="/api/v1/ot/surgeries" />
        <Endpoint method="PUT" path="/api/v1/ot/surgeries/{surgeryId}/start" />
        <Endpoint method="PUT" path="/api/v1/ot/surgeries/{surgeryId}/complete" />
        <Endpoint method="GET" path="/api/v1/ot/surgeries/{surgeryId}" />
      </div>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Authentication:</strong> All endpoints require a valid JWT Bearer token in the{" "}
        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-900/40">Authorization</code> header.
        All IDs are UUIDs.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The SurgeryResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Surgery retrieved successfully",
  "data": {
    "id": "c4d5e6f7-a8b9-0123-cdef-456789012345",
    "surgeryNumber": "SRG-2026-00187",
    "patientName": "Ramesh Kumar Sharma",
    "patientUhid": "UHID-2026-004521",
    "procedureName": "Total Knee Replacement - Right",
    "theatreName": "OT-1 (Major)",
    "surgeonName": "Dr. Vikram Singh",
    "anesthetistName": "Dr. Meena Iyer",
    "scheduledDate": "2026-06-15",
    "scheduledTime": "09:00",
    "estimatedDuration": 180,
    "actualStartTime": "2026-06-15T09:12:00Z",
    "actualEndTime": "2026-06-15T12:05:00Z",
    "status": "COMPLETED",
    "preOpNotes": "Patient NPO since midnight. Pre-anesthesia checkup done. Blood group: B+ve, 2 units packed RBCs arranged.",
    "postOpNotes": "Procedure completed successfully. Implant: Smith & Nephew Genesis II. Drain placed. Patient shifted to recovery.",
    "createdAt": "2026-06-12T10:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Surgery statuses</h2>
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
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SCHEDULED</code></td>
              <td className="py-2.5">Surgery has been scheduled and the OT slot is reserved.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_PROGRESS</code></td>
              <td className="py-2.5">Surgery has started. The theatre is marked as in use.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">COMPLETED</code></td>
              <td className="py-2.5">Surgery has been completed. Post-operative notes have been recorded.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CANCELLED</code></td>
              <td className="py-2.5">Surgery was cancelled. The OT slot is released back to available.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Theatre types</h2>
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
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">MAJOR</code></td>
              <td className="py-2.5">Fully equipped for major surgical procedures including orthopaedic, cardiac, and neuro surgeries.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">MINOR</code></td>
              <td className="py-2.5">For minor procedures, biopsies, wound debridement, and day-care surgeries.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">EMERGENCY</code></td>
              <td className="py-2.5">Dedicated emergency OT available 24/7 for trauma and emergency surgical cases.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List theatres</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/ot/theatres" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a list of all operation theatres with their current availability status.
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/ot/theatres \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Theatres retrieved successfully",
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "OT-1 (Major)",
      "type": "MAJOR",
      "status": "AVAILABLE",
      "floor": "3rd Floor",
      "equipment": ["C-Arm", "Laparoscopy Unit", "Cautery Machine"]
    },
    {
      "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "name": "OT-2 (Major)",
      "type": "MAJOR",
      "status": "IN_USE",
      "floor": "3rd Floor",
      "equipment": ["Cardiac Monitor", "Heart-Lung Machine", "Cautery Machine"]
    },
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-234567890123",
      "name": "OT-3 (Minor)",
      "type": "MINOR",
      "status": "AVAILABLE",
      "floor": "2nd Floor",
      "equipment": ["Cautery Machine", "Suction Unit"]
    },
    {
      "id": "d4e5f6a7-b8c9-0123-def0-345678901234",
      "name": "Emergency OT",
      "type": "EMERGENCY",
      "status": "AVAILABLE",
      "floor": "Ground Floor",
      "equipment": ["Ventilator", "Defibrillator", "C-Arm", "Cautery Machine"]
    },
    {
      "id": "e5f6a7b8-c9d0-1234-ef01-456789012345",
      "name": "OT-4 (Major)",
      "type": "MAJOR",
      "status": "MAINTENANCE",
      "floor": "3rd Floor",
      "equipment": ["Microscope", "Neuro Navigation", "Cautery Machine"]
    }
  ],
  "errors": null
}`}</code>
      </pre>

      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Theatre statuses</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Status</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">AVAILABLE</code></td>
              <td className="py-2.5">Theatre is free and can be booked for surgery.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_USE</code></td>
              <td className="py-2.5">Surgery is currently in progress in this theatre.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">MAINTENANCE</code></td>
              <td className="py-2.5">Theatre is undergoing maintenance or sterilization and cannot be booked.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Schedule a surgery</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/ot/surgeries" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Schedules a new surgery and reserves the specified OT slot. The patient must have an active
        IPD admission. Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> on success.
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
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Active IPD admission ID for the patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">theatreId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the operation theatre to book.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">surgeonId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the lead surgeon (staff member).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">anesthetistId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the anesthetist (staff member).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">scheduledDate</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of the surgery (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">scheduledTime</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Start time in HH:mm format (e.g. &quot;09:00&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">estimatedDuration</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Estimated duration in minutes.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">procedureName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Name of the surgical procedure.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">procedureType</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5"><code className="text-xs">ELECTIVE</code> or <code className="text-xs">EMERGENCY</code>.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">preOpNotes</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Pre-operative clinical notes, patient preparation details.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: schedule a knee replacement surgery</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/ot/surgeries \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "admissionId": "a8b9c0d1-e2f3-4567-890a-bcdef1234567",
    "theatreId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "surgeonId": "d1e2f3a4-b5c6-7890-def0-123456789abc",
    "anesthetistId": "e2f3a4b5-c6d7-8901-ef01-234567890bcd",
    "scheduledDate": "2026-06-15",
    "scheduledTime": "09:00",
    "estimatedDuration": 180,
    "procedureName": "Total Knee Replacement - Right",
    "procedureType": "ELECTIVE",
    "preOpNotes": "Patient NPO since midnight. Pre-anesthesia checkup done. Blood group: B+ve, 2 units packed RBCs arranged. Consent obtained."
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Surgery scheduled successfully",
  "data": {
    "id": "c4d5e6f7-a8b9-0123-cdef-456789012345",
    "surgeryNumber": "SRG-2026-00187",
    "patientName": "Ramesh Kumar Sharma",
    "patientUhid": "UHID-2026-004521",
    "procedureName": "Total Knee Replacement - Right",
    "theatreName": "OT-1 (Major)",
    "surgeonName": "Dr. Vikram Singh",
    "anesthetistName": "Dr. Meena Iyer",
    "scheduledDate": "2026-06-15",
    "scheduledTime": "09:00",
    "estimatedDuration": 180,
    "actualStartTime": null,
    "actualEndTime": null,
    "status": "SCHEDULED",
    "preOpNotes": "Patient NPO since midnight. Pre-anesthesia checkup done. Blood group: B+ve, 2 units packed RBCs arranged. Consent obtained.",
    "postOpNotes": null,
    "createdAt": "2026-06-12T10:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List surgeries</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/ot/surgeries" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of surgeries. Use query parameters to filter by date, theatre,
        surgeon, or status. The response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;PagedResponse&lt;SurgeryResponse&gt;&gt;</code>.
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
              <td className="py-2.5 pr-4"><code className="text-xs">date</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5">Filter surgeries scheduled on this date (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">theatreId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by specific operation theatre.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">surgeonId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by lead surgeon.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Filter by status: <code className="text-xs">SCHEDULED</code>, <code className="text-xs">IN_PROGRESS</code>, <code className="text-xs">COMPLETED</code>, <code className="text-xs">CANCELLED</code>.</td>
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
        <code>{`curl "https://hospital.katixo.com/api/v1/ot/surgeries?date=2026-06-15&status=SCHEDULED&page=0&size=10" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Surgeries retrieved successfully",
  "data": {
    "content": [
      {
        "id": "c4d5e6f7-a8b9-0123-cdef-456789012345",
        "surgeryNumber": "SRG-2026-00187",
        "patientName": "Ramesh Kumar Sharma",
        "patientUhid": "UHID-2026-004521",
        "procedureName": "Total Knee Replacement - Right",
        "theatreName": "OT-1 (Major)",
        "surgeonName": "Dr. Vikram Singh",
        "anesthetistName": "Dr. Meena Iyer",
        "scheduledDate": "2026-06-15",
        "scheduledTime": "09:00",
        "estimatedDuration": 180,
        "actualStartTime": null,
        "actualEndTime": null,
        "status": "SCHEDULED",
        "preOpNotes": "Patient NPO since midnight. Pre-anesthesia checkup done.",
        "postOpNotes": null,
        "createdAt": "2026-06-12T10:30:00Z"
      },
      {
        "id": "d5e6f7a8-b9c0-1234-def0-567890123456",
        "surgeryNumber": "SRG-2026-00188",
        "patientName": "Sunita Devi Gupta",
        "patientUhid": "UHID-2026-004530",
        "procedureName": "Laparoscopic Cholecystectomy",
        "theatreName": "OT-2 (Major)",
        "surgeonName": "Dr. Priya Nair",
        "anesthetistName": "Dr. Rajesh Kapoor",
        "scheduledDate": "2026-06-15",
        "scheduledTime": "10:30",
        "estimatedDuration": 90,
        "actualStartTime": null,
        "actualEndTime": null,
        "status": "SCHEDULED",
        "preOpNotes": "Ultrasound confirms multiple gallstones. Patient consented.",
        "postOpNotes": null,
        "createdAt": "2026-06-12T11:15:00Z"
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
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Start a surgery</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/ot/surgeries/{surgeryId}/start" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Transitions the surgery from <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SCHEDULED</code> to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_PROGRESS</code>. Records the actual
        start time and marks the theatre as <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_USE</code>.
      </p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/ot/surgeries/c4d5e6f7-a8b9-0123-cdef-456789012345/start \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Surgery started successfully",
  "data": {
    "id": "c4d5e6f7-a8b9-0123-cdef-456789012345",
    "surgeryNumber": "SRG-2026-00187",
    "patientName": "Ramesh Kumar Sharma",
    "patientUhid": "UHID-2026-004521",
    "procedureName": "Total Knee Replacement - Right",
    "theatreName": "OT-1 (Major)",
    "surgeonName": "Dr. Vikram Singh",
    "anesthetistName": "Dr. Meena Iyer",
    "scheduledDate": "2026-06-15",
    "scheduledTime": "09:00",
    "estimatedDuration": 180,
    "actualStartTime": "2026-06-15T09:12:00Z",
    "actualEndTime": null,
    "status": "IN_PROGRESS",
    "preOpNotes": "Patient NPO since midnight. Pre-anesthesia checkup done. Blood group: B+ve, 2 units packed RBCs arranged. Consent obtained.",
    "postOpNotes": null,
    "createdAt": "2026-06-12T10:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Complete a surgery</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/ot/surgeries/{surgeryId}/complete" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Marks the surgery as <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">COMPLETED</code>,
        records the actual end time, and releases the theatre back to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">AVAILABLE</code>.
        Post-operative notes and complication details should be provided in the request body.
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
              <td className="py-2.5 pr-4"><code className="text-xs">postOpNotes</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Post-operative clinical notes, procedure details, and outcome.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">complications</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Any intra-operative or immediate post-operative complications. Null if none.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">bloodUnitsUsed</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Number of blood units transfused during surgery (default: 0).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/ot/surgeries/c4d5e6f7-a8b9-0123-cdef-456789012345/complete \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "postOpNotes": "Procedure completed successfully. Implant: Smith & Nephew Genesis II. Drain placed. Patient shifted to recovery. Vitals stable.",
    "complications": null,
    "bloodUnitsUsed": 1
  }'

# Response
{
  "success": true,
  "message": "Surgery completed successfully",
  "data": {
    "id": "c4d5e6f7-a8b9-0123-cdef-456789012345",
    "surgeryNumber": "SRG-2026-00187",
    "patientName": "Ramesh Kumar Sharma",
    "patientUhid": "UHID-2026-004521",
    "procedureName": "Total Knee Replacement - Right",
    "theatreName": "OT-1 (Major)",
    "surgeonName": "Dr. Vikram Singh",
    "anesthetistName": "Dr. Meena Iyer",
    "scheduledDate": "2026-06-15",
    "scheduledTime": "09:00",
    "estimatedDuration": 180,
    "actualStartTime": "2026-06-15T09:12:00Z",
    "actualEndTime": "2026-06-15T12:05:00Z",
    "status": "COMPLETED",
    "preOpNotes": "Patient NPO since midnight. Pre-anesthesia checkup done. Blood group: B+ve, 2 units packed RBCs arranged. Consent obtained.",
    "postOpNotes": "Procedure completed successfully. Implant: Smith & Nephew Genesis II. Drain placed. Patient shifted to recovery. Vitals stable.",
    "createdAt": "2026-06-12T10:30:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get surgery details</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/ot/surgeries/{surgeryId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Retrieves the full details of a single surgery by its UUID. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;SurgeryResponse&gt;</code>.
      </p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/ot/surgeries/c4d5e6f7-a8b9-0123-cdef-456789012345 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
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
    "scheduledDate: must be a future date",
    "theatreId: OT-4 (Major) is currently under maintenance"
  ]
}

# 409 Conflict — scheduling conflict
{
  "success": false,
  "message": "Theatre booking conflict",
  "data": null,
  "errors": ["OT-1 (Major) is already booked for 2026-06-15 09:00-12:00 (SRG-2026-00185)"]
}

# 422 Unprocessable Entity — invalid state transition
{
  "success": false,
  "message": "Invalid surgery status transition",
  "data": null,
  "errors": ["Cannot start surgery: current status is COMPLETED, expected SCHEDULED"]
}`}</code>
      </pre>
    </>
  );
}
