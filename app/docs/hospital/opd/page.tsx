import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OPD API — Hospital OS API Docs",
  description: "Katixo Hospital OS OPD API reference — appointments, token queue, consultations, and prescriptions.",
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

export default function OpdPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">OPD (Outpatient Department)</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Manage the complete outpatient workflow &mdash; from appointment booking and patient check-in
        through consultation, prescription, and follow-up scheduling. The OPD module includes an
        auto-generated token queue system that tracks patient flow in real time. All endpoints
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
        <Endpoint method="POST" path="/api/v1/opd/appointments" />
        <Endpoint method="GET" path="/api/v1/opd/appointments" />
        <Endpoint method="GET" path="/api/v1/opd/appointments/{appointmentId}" />
        <Endpoint method="PUT" path="/api/v1/opd/appointments/{appointmentId}/check-in" />
        <Endpoint method="PUT" path="/api/v1/opd/appointments/{appointmentId}/start-consultation" />
        <Endpoint method="PUT" path="/api/v1/opd/appointments/{appointmentId}/complete" />
        <Endpoint method="GET" path="/api/v1/opd/queue" />
        <Endpoint method="POST" path="/api/v1/opd/prescriptions" />
      </div>

      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-900/20 dark:text-blue-300">
        <strong>Authentication:</strong> All endpoints require a valid JWT Bearer token in the{" "}
        <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs dark:bg-blue-900/40">Authorization</code> header.
        All IDs are UUIDs. Token numbers (e.g. T-001) are auto-generated per doctor per day.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The AppointmentResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Appointment retrieved successfully",
  "data": {
    "id": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
    "tokenNumber": "T-001",
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "patientName": "Rajesh Kumar Verma",
    "patientUhid": "UHID-2026-00451",
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "doctorName": "Dr. Anjali Sharma",
    "departmentName": "General Medicine",
    "appointmentDate": "2026-06-12",
    "appointmentTime": "10:30:00",
    "type": "SCHEDULED",
    "status": "SCHEDULED",
    "checkedInAt": null,
    "consultationStartedAt": null,
    "completedAt": null,
    "createdAt": "2026-06-11T14:20:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Appointment statuses</h2>
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
              <td className="py-2.5">Appointment booked but patient has not yet arrived at the hospital.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CHECKED_IN</code></td>
              <td className="py-2.5">Patient has arrived and checked in at the OPD counter. Added to the doctor&apos;s queue.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_CONSULTATION</code></td>
              <td className="py-2.5">Doctor has started seeing the patient. Consultation is in progress.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">COMPLETED</code></td>
              <td className="py-2.5">Consultation finished. Prescription and follow-up (if any) have been recorded.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CANCELLED</code></td>
              <td className="py-2.5">Appointment was cancelled by the patient or hospital staff.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">NO_SHOW</code></td>
              <td className="py-2.5">Patient did not arrive for the scheduled appointment.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Appointment types</h2>
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
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">WALK_IN</code></td>
              <td className="py-2.5">Patient walks in without a prior appointment. Token assigned on the spot.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SCHEDULED</code></td>
              <td className="py-2.5">Pre-booked appointment with a specific date and time slot.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">FOLLOW_UP</code></td>
              <td className="py-2.5">Follow-up visit linked to a previous consultation.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Book an appointment</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/opd/appointments" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Books a new OPD appointment and auto-generates a token number for the given doctor and date.
        Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> on success.
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
              <td className="py-2.5">ID of the registered patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">doctorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">ID of the consulting doctor.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">departmentId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Department ID (e.g. General Medicine, Orthopedics, Pediatrics, ENT, Ophthalmology).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">appointmentDate</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Date of appointment (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">appointmentTime</code></td>
              <td className="py-2.5 pr-4">LocalTime</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Time slot (HH:mm:ss, 24-hour format).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">type</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Appointment type: <code className="text-xs">WALK_IN</code>, <code className="text-xs">SCHEDULED</code>, or <code className="text-xs">FOLLOW_UP</code>.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">notes</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Free-text notes (e.g. chief complaint, referral info).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: book a scheduled appointment</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/opd/appointments \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "departmentId": "a9b8c7d6-e5f4-3210-abcd-ef9876543210",
    "appointmentDate": "2026-06-12",
    "appointmentTime": "10:30:00",
    "type": "SCHEDULED",
    "notes": "Patient complains of persistent fever for 3 days"
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": {
    "id": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
    "tokenNumber": "T-001",
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "patientName": "Rajesh Kumar Verma",
    "patientUhid": "UHID-2026-00451",
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "doctorName": "Dr. Anjali Sharma",
    "departmentName": "General Medicine",
    "appointmentDate": "2026-06-12",
    "appointmentTime": "10:30:00",
    "type": "SCHEDULED",
    "status": "SCHEDULED",
    "checkedInAt": null,
    "consultationStartedAt": null,
    "completedAt": null,
    "createdAt": "2026-06-11T14:20:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List appointments</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/opd/appointments" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of OPD appointments. The response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;PagedResponse&lt;AppointmentResponse&gt;&gt;</code>.
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
              <td className="py-2.5">Filter by appointment date (YYYY-MM-DD). Defaults to today.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">doctorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by doctor.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">departmentId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Filter by department.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">status</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Filter by status: <code className="text-xs">SCHEDULED</code>, <code className="text-xs">CHECKED_IN</code>, <code className="text-xs">IN_CONSULTATION</code>, <code className="text-xs">COMPLETED</code>, <code className="text-xs">CANCELLED</code>, <code className="text-xs">NO_SHOW</code>.</td>
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
        <code>{`curl "https://hospital.katixo.com/api/v1/opd/appointments?date=2026-06-12&doctorId=d1e2f3a4-b5c6-7890-dcba-fe0987654321&status=CHECKED_IN&page=0&size=10" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Appointments retrieved successfully",
  "data": {
    "content": [
      {
        "id": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
        "tokenNumber": "T-001",
        "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "patientName": "Rajesh Kumar Verma",
        "patientUhid": "UHID-2026-00451",
        "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
        "doctorName": "Dr. Anjali Sharma",
        "departmentName": "General Medicine",
        "appointmentDate": "2026-06-12",
        "appointmentTime": "10:30:00",
        "type": "SCHEDULED",
        "status": "CHECKED_IN",
        "checkedInAt": "2026-06-12T10:15:00Z",
        "consultationStartedAt": null,
        "completedAt": null,
        "createdAt": "2026-06-11T14:20:00Z"
      },
      {
        "id": "c2b3d4e5-f6a7-8901-bcde-f12345678901",
        "tokenNumber": "T-002",
        "patientId": "e58bd10c-69dd-4483-b568-1f13c4d5e6f7",
        "patientName": "Sunita Devi",
        "patientUhid": "UHID-2026-00523",
        "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
        "doctorName": "Dr. Anjali Sharma",
        "departmentName": "General Medicine",
        "appointmentDate": "2026-06-12",
        "appointmentTime": "11:00:00",
        "type": "WALK_IN",
        "status": "CHECKED_IN",
        "checkedInAt": "2026-06-12T10:45:00Z",
        "consultationStartedAt": null,
        "completedAt": null,
        "createdAt": "2026-06-12T10:40:00Z"
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
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get appointment details</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/opd/appointments/{appointmentId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Retrieves a single appointment by its UUID. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;AppointmentResponse&gt;</code>.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://hospital.katixo.com/api/v1/opd/appointments/b1a2c3d4-e5f6-7890-abcd-ef1234567890 \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Check in patient</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/opd/appointments/{appointmentId}/check-in" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Marks the patient as arrived and moves them into the doctor&apos;s token queue. Transitions
        the appointment status from{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SCHEDULED</code> to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CHECKED_IN</code>.
        The <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">checkedInAt</code> timestamp is recorded automatically.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/opd/appointments/b1a2c3d4-e5f6-7890-abcd-ef1234567890/check-in \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Patient checked in successfully",
  "data": {
    "id": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
    "tokenNumber": "T-001",
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "patientName": "Rajesh Kumar Verma",
    "patientUhid": "UHID-2026-00451",
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "doctorName": "Dr. Anjali Sharma",
    "departmentName": "General Medicine",
    "appointmentDate": "2026-06-12",
    "appointmentTime": "10:30:00",
    "type": "SCHEDULED",
    "status": "CHECKED_IN",
    "checkedInAt": "2026-06-12T10:15:00Z",
    "consultationStartedAt": null,
    "completedAt": null,
    "createdAt": "2026-06-11T14:20:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Start consultation</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/opd/appointments/{appointmentId}/start-consultation" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Indicates the doctor has started seeing the patient. Transitions the appointment from{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CHECKED_IN</code> to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_CONSULTATION</code>.
        The <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">consultationStartedAt</code> timestamp is recorded automatically.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/opd/appointments/b1a2c3d4-e5f6-7890-abcd-ef1234567890/start-consultation \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Consultation started",
  "data": {
    "id": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
    "tokenNumber": "T-001",
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "patientName": "Rajesh Kumar Verma",
    "patientUhid": "UHID-2026-00451",
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "doctorName": "Dr. Anjali Sharma",
    "departmentName": "General Medicine",
    "appointmentDate": "2026-06-12",
    "appointmentTime": "10:30:00",
    "type": "SCHEDULED",
    "status": "IN_CONSULTATION",
    "checkedInAt": "2026-06-12T10:15:00Z",
    "consultationStartedAt": "2026-06-12T10:32:00Z",
    "completedAt": null,
    "createdAt": "2026-06-11T14:20:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Complete consultation</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/opd/appointments/{appointmentId}/complete" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Marks the consultation as finished. Transitions the appointment from{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_CONSULTATION</code> to{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">COMPLETED</code>.
        A prescription should be created before or alongside completing the consultation.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT https://hospital.katixo.com/api/v1/opd/appointments/b1a2c3d4-e5f6-7890-abcd-ef1234567890/complete \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Consultation completed",
  "data": {
    "id": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
    "tokenNumber": "T-001",
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "patientName": "Rajesh Kumar Verma",
    "patientUhid": "UHID-2026-00451",
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "doctorName": "Dr. Anjali Sharma",
    "departmentName": "General Medicine",
    "appointmentDate": "2026-06-12",
    "appointmentTime": "10:30:00",
    "type": "SCHEDULED",
    "status": "COMPLETED",
    "checkedInAt": "2026-06-12T10:15:00Z",
    "consultationStartedAt": "2026-06-12T10:32:00Z",
    "completedAt": "2026-06-12T10:48:00Z",
    "createdAt": "2026-06-11T14:20:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get token queue</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/opd/queue" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns the current token queue for a doctor on a given date. The queue is ordered by
        check-in time and includes estimated wait times based on average consultation duration.
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
              <td className="py-2.5 pr-4"><code className="text-xs">doctorId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5">Required. The doctor whose queue to retrieve.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">date</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5">Date to query (YYYY-MM-DD). Defaults to today.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://hospital.katixo.com/api/v1/opd/queue?doctorId=d1e2f3a4-b5c6-7890-dcba-fe0987654321&date=2026-06-12" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Queue retrieved successfully",
  "data": {
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "doctorName": "Dr. Anjali Sharma",
    "departmentName": "General Medicine",
    "date": "2026-06-12",
    "currentToken": "T-001",
    "totalInQueue": 4,
    "averageConsultationMinutes": 15,
    "queue": [
      {
        "position": 1,
        "tokenNumber": "T-001",
        "appointmentId": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
        "patientName": "Rajesh Kumar Verma",
        "patientUhid": "UHID-2026-00451",
        "status": "IN_CONSULTATION",
        "checkedInAt": "2026-06-12T10:15:00Z",
        "estimatedWaitMinutes": 0
      },
      {
        "position": 2,
        "tokenNumber": "T-002",
        "appointmentId": "c2b3d4e5-f6a7-8901-bcde-f12345678901",
        "patientName": "Sunita Devi",
        "patientUhid": "UHID-2026-00523",
        "status": "CHECKED_IN",
        "checkedInAt": "2026-06-12T10:45:00Z",
        "estimatedWaitMinutes": 8
      },
      {
        "position": 3,
        "tokenNumber": "T-003",
        "appointmentId": "d3c4e5f6-a7b8-9012-cdef-234567890123",
        "patientName": "Mohammed Irfan",
        "patientUhid": "UHID-2026-00612",
        "status": "CHECKED_IN",
        "checkedInAt": "2026-06-12T11:02:00Z",
        "estimatedWaitMinutes": 23
      },
      {
        "position": 4,
        "tokenNumber": "T-004",
        "appointmentId": "e4d5f6a7-b8c9-0123-def0-345678901234",
        "patientName": "Priya Singh",
        "patientUhid": "UHID-2026-00487",
        "status": "CHECKED_IN",
        "checkedInAt": "2026-06-12T11:10:00Z",
        "estimatedWaitMinutes": 38
      }
    ]
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create prescription</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/opd/prescriptions" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a prescription record for an OPD consultation. Includes diagnosis, vitals, medications,
        lab test orders, and follow-up scheduling. Returns{" "}
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
              <td className="py-2.5 pr-4"><code className="text-xs">appointmentId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">The appointment this prescription is for.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">diagnosis</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Primary diagnosis (e.g. &quot;Acute viral fever with pharyngitis&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">complaints</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Chief complaints as described by the patient.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">vitals</code></td>
              <td className="py-2.5 pr-4">Object</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Patient vitals: <code className="text-xs">bp</code>, <code className="text-xs">pulse</code>, <code className="text-xs">temp</code>, <code className="text-xs">weight</code>, <code className="text-xs">height</code>, <code className="text-xs">spo2</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">medications</code></td>
              <td className="py-2.5 pr-4">Array</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Array of medications. Each: <code className="text-xs">drugName</code>, <code className="text-xs">dosage</code>, <code className="text-xs">frequency</code>, <code className="text-xs">duration</code>, <code className="text-xs">instructions</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">labTests</code></td>
              <td className="py-2.5 pr-4">UUID[]</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Array of lab test IDs to order (e.g. CBC, Dengue NS1).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">followUpDate</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Recommended follow-up date (YYYY-MM-DD).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Vitals object</h3>
      <div className="mt-3 overflow-x-auto">
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
              <td className="py-2.5 pr-4"><code className="text-xs">bp</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Blood pressure (e.g. &quot;120/80&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">pulse</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Pulse rate in beats per minute.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">temp</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Body temperature in Fahrenheit.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">weight</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Body weight in kilograms.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">height</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5">Height in centimeters.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">spo2</code></td>
              <td className="py-2.5 pr-4">int</td>
              <td className="py-2.5">Oxygen saturation percentage.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Medication object</h3>
      <div className="mt-3 overflow-x-auto">
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
              <td className="py-2.5 pr-4"><code className="text-xs">drugName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Name of the drug (e.g. &quot;Paracetamol 500mg&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">dosage</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Dosage (e.g. &quot;1 tablet&quot;, &quot;5ml&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">frequency</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">How often (e.g. &quot;TDS&quot; for three times daily, &quot;BD&quot; for twice daily, &quot;OD&quot; for once daily).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">duration</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Duration of course (e.g. &quot;5 days&quot;, &quot;2 weeks&quot;).</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">instructions</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5">Special instructions (e.g. &quot;After meals&quot;, &quot;At bedtime&quot;, &quot;With lukewarm water&quot;).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-base font-bold text-slate-900 dark:text-white">Example: create a prescription</h3>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://hospital.katixo.com/api/v1/opd/prescriptions \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "appointmentId": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
    "diagnosis": "Acute viral fever with pharyngitis",
    "complaints": "High fever for 3 days, sore throat, body ache, headache",
    "vitals": {
      "bp": "120/80",
      "pulse": 92,
      "temp": 101.4,
      "weight": 72.5,
      "height": 170,
      "spo2": 97
    },
    "medications": [
      {
        "drugName": "Paracetamol 500mg",
        "dosage": "1 tablet",
        "frequency": "TDS",
        "duration": "5 days",
        "instructions": "After meals. Take if fever above 100°F."
      },
      {
        "drugName": "Azithromycin 500mg",
        "dosage": "1 tablet",
        "frequency": "OD",
        "duration": "3 days",
        "instructions": "Before meals on empty stomach"
      },
      {
        "drugName": "Cetirizine 10mg",
        "dosage": "1 tablet",
        "frequency": "OD",
        "duration": "5 days",
        "instructions": "At bedtime"
      },
      {
        "drugName": "Pantoprazole 40mg",
        "dosage": "1 tablet",
        "frequency": "OD",
        "duration": "5 days",
        "instructions": "Before breakfast on empty stomach"
      }
    ],
    "labTests": [
      "aa11bb22-cc33-dd44-ee55-ff6677889900",
      "bb22cc33-dd44-ee55-ff66-778899001122"
    ],
    "followUpDate": "2026-06-17"
  }'

# Response (201 Created)
{
  "success": true,
  "message": "Prescription created successfully",
  "data": {
    "id": "f5e6d7c8-b9a0-1234-5678-901234567890",
    "appointmentId": "b1a2c3d4-e5f6-7890-abcd-ef1234567890",
    "patientId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "patientName": "Rajesh Kumar Verma",
    "patientUhid": "UHID-2026-00451",
    "doctorId": "d1e2f3a4-b5c6-7890-dcba-fe0987654321",
    "doctorName": "Dr. Anjali Sharma",
    "departmentName": "General Medicine",
    "diagnosis": "Acute viral fever with pharyngitis",
    "complaints": "High fever for 3 days, sore throat, body ache, headache",
    "vitals": {
      "bp": "120/80",
      "pulse": 92,
      "temp": 101.4,
      "weight": 72.5,
      "height": 170,
      "spo2": 97
    },
    "medications": [
      {
        "id": "11aa22bb-33cc-44dd-55ee-66ff77889900",
        "drugName": "Paracetamol 500mg",
        "dosage": "1 tablet",
        "frequency": "TDS",
        "duration": "5 days",
        "instructions": "After meals. Take if fever above 100°F."
      },
      {
        "id": "22bb33cc-44dd-55ee-66ff-778899001122",
        "drugName": "Azithromycin 500mg",
        "dosage": "1 tablet",
        "frequency": "OD",
        "duration": "3 days",
        "instructions": "Before meals on empty stomach"
      },
      {
        "id": "33cc44dd-55ee-66ff-7788-990011223344",
        "drugName": "Cetirizine 10mg",
        "dosage": "1 tablet",
        "frequency": "OD",
        "duration": "5 days",
        "instructions": "At bedtime"
      },
      {
        "id": "44dd55ee-66ff-7788-9900-112233445566",
        "drugName": "Pantoprazole 40mg",
        "dosage": "1 tablet",
        "frequency": "OD",
        "duration": "5 days",
        "instructions": "Before breakfast on empty stomach"
      }
    ],
    "labTests": [
      {
        "id": "aa11bb22-cc33-dd44-ee55-ff6677889900",
        "testName": "Complete Blood Count (CBC)",
        "status": "ORDERED"
      },
      {
        "id": "bb22cc33-dd44-ee55-ff66-778899001122",
        "testName": "Dengue NS1 Antigen",
        "status": "ORDERED"
      }
    ],
    "followUpDate": "2026-06-17",
    "createdAt": "2026-06-12T10:48:00Z"
  },
  "errors": null
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Appointment workflow</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        The typical OPD flow follows these state transitions:
      </p>
      <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-5 py-3 dark:border-white/10">
          <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">1</span>
          <span><strong className="text-slate-900 dark:text-white">Book</strong> &mdash; POST /api/v1/opd/appointments &rarr; status becomes <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SCHEDULED</code></span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-5 py-3 dark:border-white/10">
          <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">2</span>
          <span><strong className="text-slate-900 dark:text-white">Check In</strong> &mdash; PUT .../check-in &rarr; status becomes <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CHECKED_IN</code>, patient enters queue</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-5 py-3 dark:border-white/10">
          <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">3</span>
          <span><strong className="text-slate-900 dark:text-white">Start Consultation</strong> &mdash; PUT .../start-consultation &rarr; status becomes <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">IN_CONSULTATION</code></span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-5 py-3 dark:border-white/10">
          <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">4</span>
          <span><strong className="text-slate-900 dark:text-white">Prescribe</strong> &mdash; POST /api/v1/opd/prescriptions &rarr; creates prescription with medications and lab orders</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-5 py-3 dark:border-white/10">
          <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">5</span>
          <span><strong className="text-slate-900 dark:text-white">Complete</strong> &mdash; PUT .../complete &rarr; status becomes <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">COMPLETED</code></span>
        </div>
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
    "doctorId: must not be null",
    "appointmentDate: must not be null"
  ]
}

# 404 Not Found
{
  "success": false,
  "message": "Appointment not found",
  "data": null,
  "errors": ["No appointment found with id: b1a2c3d4-e5f6-7890-abcd-ef1234567890"]
}

# 409 Conflict — invalid state transition
{
  "success": false,
  "message": "Invalid status transition",
  "data": null,
  "errors": ["Cannot start consultation: appointment status is SCHEDULED, must be CHECKED_IN"]
}

# 409 Conflict — doctor slot unavailable
{
  "success": false,
  "message": "Slot unavailable",
  "data": null,
  "errors": ["Dr. Anjali Sharma already has an appointment at 10:30 on 2026-06-12"]
}`}</code>
      </pre>
    </>
  );
}
