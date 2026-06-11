import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Contacts API — ${brand.name} API Docs`,
  description: `Create, list, update, and delete contacts (customers, vendors) via the ${brand.name} ERP ContactController API.`,
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

export default function ContactsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Contacts</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Contacts represent customers, vendors, or both. Each contact stores GST details, billing and
        shipping addresses, payment terms, bank information, and one or more contact persons. The API
        uses JWT Bearer token authentication and returns all responses in the standard{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;T&gt;</code>{" "}
        envelope.
      </p>

      {/* ── Authentication ── */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Authentication</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        All endpoints require a valid JWT Bearer token in the{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Authorization</code> header.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...`}</code>
      </pre>

      {/* ── Response envelope ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Response envelope</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Every response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;T&gt;</code>.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Contact created successfully",
  "data": { ... },
  "errors": null
}`}</code>
      </pre>

      {/* ── Endpoints ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/contacts" />
        <Endpoint method="GET" path="/api/v1/contacts/{id}" />
        <Endpoint method="POST" path="/api/v1/contacts" />
        <Endpoint method="PUT" path="/api/v1/contacts/{id}" />
        <Endpoint method="DELETE" path="/api/v1/contacts/{id}" />
        <Endpoint method="POST" path="/api/v1/contacts/{id}/persons" />
        <Endpoint method="DELETE" path="/api/v1/contacts/{id}/persons/{personId}" />
      </div>

      {/* ── Enums ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Enums</h2>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">ContactType</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Value</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CUSTOMER</code></td>
              <td className="py-2.5">A customer you sell to.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">VENDOR</code></td>
              <td className="py-2.5">A vendor/supplier you buy from.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">BOTH</code></td>
              <td className="py-2.5">Acts as both customer and vendor.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">GstTreatment</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Value</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">REGISTERED</code></td>
              <td className="py-2.5">Registered under GST with a valid GSTIN.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">UNREGISTERED</code></td>
              <td className="py-2.5">Not registered under GST.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">COMPOSITION</code></td>
              <td className="py-2.5">Registered under the composition scheme.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CONSUMER</code></td>
              <td className="py-2.5">End consumer (B2C).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OVERSEAS</code></td>
              <td className="py-2.5">Located outside India; exports/imports.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">SEZ</code></td>
              <td className="py-2.5">Located in a Special Economic Zone.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── The ContactResponse object ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">The ContactResponse object</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "contactType": "CUSTOMER",
  "displayName": "Sharma Traders",
  "companyName": "Sharma Traders Pvt. Ltd.",
  "firstName": "Rajesh",
  "lastName": "Sharma",
  "gstin": "27AAECS1234F1Z5",
  "pan": "AAECS1234F",
  "gstTreatment": "REGISTERED",
  "placeOfSupply": "27",
  "email": "rajesh@sharmatraders.in",
  "phone": "+912026543210",
  "mobile": "+919876543210",
  "website": "https://sharmatraders.in",
  "billingAddressLine1": "Shop 12, Laxmi Market",
  "billingAddressLine2": "M.G. Road",
  "billingCity": "Pune",
  "billingState": "Maharashtra",
  "billingStateCode": "27",
  "billingPostalCode": "411001",
  "billingCountry": "IN",
  "shippingAddressLine1": "Warehouse 5, Hadapsar Industrial Estate",
  "shippingAddressLine2": "",
  "shippingCity": "Pune",
  "shippingState": "Maharashtra",
  "shippingStateCode": "27",
  "shippingPostalCode": "411028",
  "shippingCountry": "IN",
  "paymentTermsDays": 30,
  "creditLimit": 500000.00,
  "openingBalance": 0.00,
  "outstandingAr": 152250.00,
  "outstandingAp": 0.00,
  "salesHold": false,
  "salesHoldReason": null,
  "salesHoldUntil": null,
  "tdsApplicable": false,
  "tdsSection": null,
  "tdsRate": null,
  "bankName": "HDFC Bank",
  "bankAccountNo": "50100123456789",
  "bankIfsc": "HDFC0001234",
  "upiId": "sharmatraders@hdfcbank",
  "active": true,
  "notes": "Wholesale customer since 2019. Preferred payment via NEFT.",
  "createdAt": "2026-02-01T03:30:00Z",
  "persons": [
    {
      "id": "c9bf9e57-1685-4c89-bafb-ff5af830be8a",
      "salutation": "Mr.",
      "firstName": "Rajesh",
      "lastName": "Sharma",
      "designation": "Managing Director",
      "department": "Management",
      "email": "rajesh@sharmatraders.in",
      "phone": "+912026543210",
      "mobile": "+919876543210",
      "primary": true
    },
    {
      "id": "a3e8f7c2-4d6b-4912-8e5a-1b2c3d4e5f6a",
      "salutation": "Ms.",
      "firstName": "Priya",
      "lastName": "Sharma",
      "designation": "Accounts Manager",
      "department": "Finance",
      "email": "priya@sharmatraders.in",
      "phone": null,
      "mobile": "+919823456789",
      "primary": false
    }
  ]
}`}</code>
      </pre>

      {/* ── List contacts ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">List contacts</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/contacts" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Returns a paginated list of contacts. The response is wrapped in{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;Page&lt;ContactResponse&gt;&gt;</code>.
      </p>
      <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">Query parameters</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Parameter</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Default</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Description</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">type</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">--</td>
              <td className="py-2.5">Filter by <code className="text-xs">CUSTOMER</code>, <code className="text-xs">VENDOR</code>, or <code className="text-xs">BOTH</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">search</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">--</td>
              <td className="py-2.5">Search by display name, company name, email, phone, or GSTIN.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">page</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5 pr-4">0</td>
              <td className="py-2.5">Zero-based page number.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">size</code></td>
              <td className="py-2.5 pr-4">integer</td>
              <td className="py-2.5 pr-4">20</td>
              <td className="py-2.5">Number of results per page.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">sort</code></td>
              <td className="py-2.5 pr-4">string</td>
              <td className="py-2.5 pr-4">--</td>
              <td className="py-2.5">Sort field and direction, e.g. <code className="text-xs">displayName,asc</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X GET "https://erp.katasticho.com/api/v1/contacts?type=CUSTOMER&size=10&page=0" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..."`}</code>
      </pre>

      {/* ── Get contact ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Get a contact</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/contacts/{id}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Retrieves a single contact by UUID. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;ContactResponse&gt;</code>.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X GET "https://erp.katasticho.com/api/v1/contacts/f47ac10b-58cc-4372-a567-0e02b2c3d479" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..."`}</code>
      </pre>

      {/* ── Create contact ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Create a contact</h2>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/contacts" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Creates a new contact. Returns <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code> with{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;ContactResponse&gt;</code>.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST "https://erp.katasticho.com/api/v1/contacts" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "contactType": "CUSTOMER",
    "displayName": "Gupta Electronics",
    "companyName": "Gupta Electronics Pvt. Ltd.",
    "firstName": "Amit",
    "lastName": "Gupta",
    "salutation": "Mr.",
    "gstin": "07AABCG1234H1Z9",
    "pan": "AABCG1234H",
    "gstTreatment": "REGISTERED",
    "placeOfSupply": "07",
    "email": "amit@guptaelectronics.co.in",
    "phone": "+911141234567",
    "mobile": "+919811234567",
    "website": "https://guptaelectronics.co.in",
    "billingAddressLine1": "45, Nehru Place",
    "billingAddressLine2": "Near Lotus Temple",
    "billingCity": "New Delhi",
    "billingState": "Delhi",
    "billingStateCode": "07",
    "billingPostalCode": "110019",
    "billingCountry": "IN",
    "shippingAddressLine1": "45, Nehru Place",
    "shippingAddressLine2": "Near Lotus Temple",
    "shippingCity": "New Delhi",
    "shippingState": "Delhi",
    "shippingStateCode": "07",
    "shippingPostalCode": "110019",
    "shippingCountry": "IN",
    "paymentTermsDays": 45,
    "creditLimit": 1000000.00,
    "openingBalance": 75000.00,
    "defaultPriceListId": null,
    "salesHold": false,
    "salesHoldReason": null,
    "salesHoldUntil": null,
    "tdsApplicable": false,
    "tdsSection": null,
    "tdsRate": null,
    "bankName": "ICICI Bank",
    "bankAccountNo": "123456789012",
    "bankIfsc": "ICIC0001234",
    "upiId": "guptaelectronics@icici",
    "notes": "Key distributor for consumer electronics in Delhi NCR."
  }'`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">CreateContactRequest fields</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">contactType</code></td>
              <td className="py-2.5 pr-4">ContactType</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5"><code className="text-xs">CUSTOMER</code>, <code className="text-xs">VENDOR</code>, or <code className="text-xs">BOTH</code>.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">displayName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">Primary display name shown across the application.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">companyName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Legal company name.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">firstName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">First name of the primary contact.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">lastName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Last name of the primary contact.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">salutation</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">E.g. Mr., Mrs., Ms., Dr.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">gstin</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">15-character GSTIN (validated on server).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">pan</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">10-character PAN.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">taxId</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Tax identification number (for overseas contacts).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">gstTreatment</code></td>
              <td className="py-2.5 pr-4">GstTreatment</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">GST treatment type. See enum above.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">placeOfSupply</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">2-digit state code (e.g., &quot;27&quot; for Maharashtra).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">email</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Primary email address.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">phone</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Landline phone number.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">mobile</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Mobile phone number.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">website</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Website URL.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billingAddressLine1</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Billing address line 1.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billingAddressLine2</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Billing address line 2.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billingCity</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Billing city.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billingState</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Billing state name (e.g., &quot;Maharashtra&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billingStateCode</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">2-digit GST state code.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billingPostalCode</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Billing PIN code.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">billingCountry</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">ISO 3166-1 alpha-2 country code (e.g., &quot;IN&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">shippingAddress*</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Same structure as billing address fields (Line1, Line2, City, State, StateCode, PostalCode, Country).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">paymentTermsDays</code></td>
              <td className="py-2.5 pr-4">Integer</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Default payment terms in days (e.g., 30).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">creditLimit</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Maximum credit limit in INR.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">openingBalance</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Opening balance when migrating from another system.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">defaultPriceListId</code></td>
              <td className="py-2.5 pr-4">UUID</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">UUID of the default price list to apply for this contact.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">salesHold</code></td>
              <td className="py-2.5 pr-4">Boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Whether sales are on hold for this contact.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">salesHoldReason</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Reason for the sales hold.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">salesHoldUntil</code></td>
              <td className="py-2.5 pr-4">LocalDate</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Date until which the sales hold is active (YYYY-MM-DD).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">tdsApplicable</code></td>
              <td className="py-2.5 pr-4">Boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Whether TDS is applicable (typically for vendors).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">tdsSection</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">TDS section code (e.g., &quot;194C&quot;, &quot;194J&quot;).</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">tdsRate</code></td>
              <td className="py-2.5 pr-4">BigDecimal</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">TDS deduction rate as a percentage.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">bankName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Bank name for payments.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">bankAccountNo</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Bank account number.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">bankIfsc</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">IFSC code of the bank branch.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">upiId</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">UPI virtual payment address.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">notes</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Free-text internal notes.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Update contact ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Update a contact</h2>
      <div className="mt-3">
        <Endpoint method="PUT" path="/api/v1/contacts/{id}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Updates an existing contact. The request body uses the same{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">CreateContactRequest</code>{" "}
        schema. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse&lt;ContactResponse&gt;</code>.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X PUT "https://erp.katasticho.com/api/v1/contacts/f47ac10b-58cc-4372-a567-0e02b2c3d479" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "contactType": "CUSTOMER",
    "displayName": "Sharma Traders",
    "companyName": "Sharma Traders Pvt. Ltd.",
    "firstName": "Rajesh",
    "lastName": "Sharma",
    "gstin": "27AAECS1234F1Z5",
    "gstTreatment": "REGISTERED",
    "placeOfSupply": "27",
    "email": "accounts@sharmatraders.in",
    "mobile": "+919876543210",
    "paymentTermsDays": 45,
    "creditLimit": 750000.00,
    "billingAddressLine1": "Shop 12, Laxmi Market",
    "billingCity": "Pune",
    "billingState": "Maharashtra",
    "billingStateCode": "27",
    "billingPostalCode": "411001",
    "billingCountry": "IN"
  }'`}</code>
      </pre>

      {/* ── Delete contact ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Delete a contact</h2>
      <div className="mt-3">
        <Endpoint method="DELETE" path="/api/v1/contacts/{id}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Deletes a contact. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">204 No Content</code>{" "}
        with no response body.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X DELETE "https://erp.katasticho.com/api/v1/contacts/f47ac10b-58cc-4372-a567-0e02b2c3d479" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..."`}</code>
      </pre>

      {/* ── Contact persons ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Contact persons</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Each contact can have multiple contact persons. Contact persons are individuals associated
        with the contact (e.g., an accounts manager, a procurement head). One person can be marked
        as primary.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">Add a contact person</h3>
      <div className="mt-3">
        <Endpoint method="POST" path="/api/v1/contacts/{id}/persons" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Adds a contact person to an existing contact. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">201 Created</code>.
      </p>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST "https://erp.katasticho.com/api/v1/contacts/f47ac10b-58cc-4372-a567-0e02b2c3d479/persons" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "salutation": "Mr.",
    "firstName": "Vikram",
    "lastName": "Mehta",
    "designation": "Purchase Manager",
    "department": "Procurement",
    "email": "vikram.mehta@sharmatraders.in",
    "phone": "+912026543211",
    "mobile": "+919823012345",
    "primary": false
  }'`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">ContactPersonRequest fields</h3>
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
              <td className="py-2.5 pr-4"><code className="text-xs">salutation</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">E.g. Mr., Mrs., Ms., Dr.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">firstName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">Yes</td>
              <td className="py-2.5">First name of the contact person.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">lastName</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Last name of the contact person.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">designation</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Job title or designation.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">department</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Department within the organization.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">email</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Email address of the contact person.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">phone</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Landline phone number.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="text-xs">mobile</code></td>
              <td className="py-2.5 pr-4">String</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Mobile phone number.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="text-xs">primary</code></td>
              <td className="py-2.5 pr-4">Boolean</td>
              <td className="py-2.5 pr-4">No</td>
              <td className="py-2.5">Whether this is the primary contact person.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">Delete a contact person</h3>
      <div className="mt-3">
        <Endpoint method="DELETE" path="/api/v1/contacts/{id}/persons/{personId}" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Removes a contact person from a contact. Returns{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">204 No Content</code>{" "}
        with no response body.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X DELETE "https://erp.katasticho.com/api/v1/contacts/f47ac10b-58cc-4372-a567-0e02b2c3d479/persons/c9bf9e57-1685-4c89-bafb-ff5af830be8a" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIs..."`}</code>
      </pre>

      {/* ── Vendor example ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Vendor example</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Vendors use the same API. Set{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">contactType</code>{" "}
        to <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">VENDOR</code> and
        optionally configure TDS fields.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "contactType": "VENDOR",
  "displayName": "Bharat Steel Suppliers",
  "companyName": "Bharat Steel Suppliers LLP",
  "firstName": "Suresh",
  "lastName": "Patel",
  "gstin": "24AABFB5678K1Z2",
  "pan": "AABFB5678K",
  "gstTreatment": "REGISTERED",
  "placeOfSupply": "24",
  "email": "suresh@bharatsteel.co.in",
  "mobile": "+919725012345",
  "billingAddressLine1": "Plot 42, GIDC Industrial Estate",
  "billingAddressLine2": "Phase II",
  "billingCity": "Ahmedabad",
  "billingState": "Gujarat",
  "billingStateCode": "24",
  "billingPostalCode": "382445",
  "billingCountry": "IN",
  "paymentTermsDays": 60,
  "creditLimit": 2000000.00,
  "openingBalance": 0.00,
  "tdsApplicable": true,
  "tdsSection": "194C",
  "tdsRate": 2.00,
  "bankName": "State Bank of India",
  "bankAccountNo": "38765432109",
  "bankIfsc": "SBIN0012345",
  "upiId": "bharatsteel@sbi",
  "notes": "Primary raw material supplier. MSME registered."
}`}</code>
      </pre>

      {/* ── Error response ── */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Error responses</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        When validation fails or a resource is not found, the API returns an{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ApiResponse</code>{" "}
        with <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">success: false</code>{" "}
        and the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">errors</code> array
        populated.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": false,
  "message": "Validation failed",
  "data": null,
  "errors": [
    "contactType: must not be null",
    "displayName: must not be blank"
  ]
}`}</code>
      </pre>
    </>
  );
}
