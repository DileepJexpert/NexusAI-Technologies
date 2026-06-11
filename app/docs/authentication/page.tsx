import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Authentication — API Docs",
  description: `How to authenticate with the ${brand.name} API using JWT Bearer tokens.`,
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

export default function AuthenticationPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Authentication</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The {brand.name} API uses JWT (JSON Web Token) Bearer tokens for authentication. Tokens are
        obtained by signing in with OTP or password, and include the user&apos;s role and
        organization context.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Auth endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="POST" path="/api/v1/auth/otp/request" />
        <Endpoint method="POST" path="/api/v1/auth/otp/verify" />
        <Endpoint method="POST" path="/api/v1/auth/signup" />
        <Endpoint method="POST" path="/api/v1/auth/register" />
        <Endpoint method="POST" path="/api/v1/auth/login" />
        <Endpoint method="POST" path="/api/v1/auth/refresh" />
        <Endpoint method="POST" path="/api/v1/auth/logout" />
        <Endpoint method="GET" path="/api/v1/auth/me" />
        <Endpoint method="POST" path="/api/v1/auth/forgot-password" />
        <Endpoint method="POST" path="/api/v1/auth/reset-password" />
        <Endpoint method="POST" path="/api/v1/auth/invite" />
        <Endpoint method="POST" path="/api/v1/auth/invite/accept" />
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Authentication flow</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        There are two ways to authenticate: <strong>OTP-based signup/login</strong> and <strong>password-based login</strong>.
      </p>

      <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">1. OTP-based signup</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Request an OTP, verify it, then complete registration:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`# Step 1: Request OTP
curl -X POST https://api.katixo.com/api/v1/auth/otp/request \\
  -H "Content-Type: application/json" \\
  -d '{ "phone": "+919876543210" }'

# Step 2: Verify OTP
curl -X POST https://api.katixo.com/api/v1/auth/otp/verify \\
  -H "Content-Type: application/json" \\
  -d '{ "phone": "+919876543210", "otp": "123456" }'

# Step 3: Complete signup with organization details
curl -X POST https://api.katixo.com/api/v1/auth/signup \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "+919876543210",
    "name": "Rajesh Kumar",
    "email": "rajesh@example.com",
    "password": "secureP@ss123",
    "businessName": "Kumar General Store",
    "businessType": "RETAILER"
  }'`}</code>
      </pre>

      <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">2. Password login</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        For existing users with a password set:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "+919876543210",
    "password": "secureP@ss123"
  }'`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Both flows return an <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">AuthResponse</code>:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": 3600,
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Rajesh Kumar",
      "phone": "+919876543210",
      "email": "rajesh@example.com",
      "role": "OWNER"
    }
  },
  "errors": null
}`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Making authenticated requests</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Include the access token in the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">Authorization</code> header as a Bearer token:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl https://api.katixo.com/api/v1/invoices \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Token refresh</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Access tokens expire after 1 hour. Use the refresh token to get a new access token without re-authenticating:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/auth/refresh \\
  -H "Content-Type: application/json" \\
  -d '{ "refreshToken": "eyJhbGciOiJIUzI1NiIs..." }'`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        Returns a new <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">accessToken</code> and <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">refreshToken</code> pair.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Roles &amp; permissions</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Each user is assigned a role within their organization. The role determines which API endpoints they can access:
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left dark:border-white/10">
              <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">Role</th>
              <th className="pb-3 font-semibold text-slate-900 dark:text-white">Permissions</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 dark:text-slate-400">
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OWNER</code></td>
              <td className="py-2.5">Full access. Can manage organization settings, users, and all data.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ADMIN</code></td>
              <td className="py-2.5">Full access to data. Can invite users and manage settings.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">ACCOUNTANT</code></td>
              <td className="py-2.5">Read/write for invoices, purchases, expenses, GST, contacts, items. Can approve workflows.</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-white/5">
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">OPERATOR</code></td>
              <td className="py-2.5">Read/write for invoices, items, contacts, inventory. Cannot access GST reports or approve workflows.</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">VIEWER</code></td>
              <td className="py-2.5">Read-only access to all data. Cannot create, update, or delete.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Multi-organization</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        A user can belong to multiple organizations (e.g., a CA firm managing several clients). The JWT token
        contains the active <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">org_id</code> claim. To switch organizations:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`# List your organizations
curl https://api.katixo.com/api/v1/users/me/organisations \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Switch to a different org (returns new tokens)
curl -X POST https://api.katixo.com/api/v1/users/me/switch-org \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{ "orgId": "b7d2f8a0-1234-4567-89ab-cdef01234567" }'`}</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Invite team members</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Organization owners and admins can invite users via phone number:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl -X POST https://api.katixo.com/api/v1/auth/invite \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "+919876543211",
    "role": "ACCOUNTANT",
    "name": "Priya Sharma"
  }'`}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        The invited user receives an SMS with a link to accept the invitation and set up their account.
      </p>

      <div className="mt-8 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800 dark:border-red-800/40 dark:bg-red-900/20 dark:text-red-300">
        <strong>Security:</strong> Never expose JWT tokens in client-side code or public repositories.
        Store tokens securely and use HTTPS for all requests. If a token is compromised, use the
        logout endpoint to invalidate all active sessions.
      </div>

      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Password recovery</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Users can reset their password via OTP-verified flow:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`# Request password reset OTP
curl -X POST https://api.katixo.com/api/v1/auth/forgot-password \\
  -H "Content-Type: application/json" \\
  -d '{ "phone": "+919876543210" }'

# Reset password with OTP
curl -X POST https://api.katixo.com/api/v1/auth/reset-password \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "+919876543210",
    "otp": "123456",
    "newPassword": "newSecureP@ss456"
  }'`}</code>
      </pre>
    </>
  );
}
