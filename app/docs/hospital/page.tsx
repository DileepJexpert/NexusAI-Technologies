import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospital OS API — Overview",
  description: "Katixo Hospital OS API reference — patient management, OPD, IPD, laboratory, pharmacy, and hospital billing.",
};

function QuickLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-slate-200 p-5 transition-all hover:border-accent/40 hover:shadow-md dark:border-white/10 dark:hover:border-accent/40"
    >
      <div className="font-semibold text-slate-900 group-hover:text-accent dark:text-white">{title}</div>
      <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</div>
    </Link>
  );
}

export default function HospitalOverviewPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hospital OS API</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Katixo Hospital OS is a comprehensive hospital management platform covering the full
        clinical and operational workflow — from patient registration through OPD/IPD to
        laboratory, operation theatre, pharmacy, and billing. The API is organized into
        three services:
      </p>

      <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
        <div className="rounded-lg border border-slate-200 px-5 py-4 dark:border-white/10">
          <strong className="text-slate-900 dark:text-white">Hospital Service</strong> — Core clinical
          and operational APIs: patients, OPD appointments, IPD admissions, laboratory, and OT management.
        </div>
        <div className="rounded-lg border border-slate-200 px-5 py-4 dark:border-white/10">
          <strong className="text-slate-900 dark:text-white">ERP Service</strong> — Business operations:
          pharmacy billing, inventory and stock management, GST compliance, payment processing, and financial ledgers.
        </div>
        <div className="rounded-lg border border-slate-200 px-5 py-4 dark:border-white/10">
          <strong className="text-slate-900 dark:text-white">Integration Service</strong> — External
          integrations: WhatsApp notifications, ABDM (Ayushman Bharat Digital Mission), and AI-powered features.
          <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            Coming Soon
          </span>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Base URL</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>https://hospital.katixo.com/api/v1</code>
      </pre>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Architecture</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Hospital OS is built as a monorepo with shared libraries that provide cross-cutting concerns:
      </p>
      <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex gap-3">
          <code className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-white/10">common-lib</code>
          <span>Base response structures, exception handling, pagination, and utility functions.</span>
        </div>
        <div className="flex gap-3">
          <code className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-white/10">security-lib</code>
          <span>JWT authentication, authorization, current user context, and permission management.</span>
        </div>
        <div className="flex gap-3">
          <code className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-white/10">tenant-lib</code>
          <span>Multi-tenant support with tenant/group/branch context and filtering.</span>
        </div>
        <div className="flex gap-3">
          <code className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-white/10">erp-client</code>
          <span>Typed internal API client enabling hospital service to call ERP service endpoints.</span>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Authentication</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Hospital OS uses the same JWT authentication as the Katasticho ERP. See the shared{" "}
        <Link href="/docs/authentication" className="text-accent hover:underline">Authentication</Link>{" "}
        documentation for details on obtaining tokens, roles, and multi-tenant context.
      </p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        The JWT token includes <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">tenantId</code>,{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">groupId</code>, and{" "}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">branchId</code> claims
        that scope all API requests to the correct hospital and branch.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Resources</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <QuickLink
          href="/docs/hospital/patients"
          title="Patients"
          description="Patient registration, search, demographics, and medical record numbers."
        />
        <QuickLink
          href="/docs/hospital/opd"
          title="OPD"
          description="Appointments, token queue, consultations, and prescriptions."
        />
        <QuickLink
          href="/docs/hospital/ipd"
          title="IPD"
          description="Admissions, bed/ward management, treatment charts, and discharge."
        />
        <QuickLink
          href="/docs/hospital/laboratory"
          title="Laboratory"
          description="Test catalog, sample collection, processing, and reports."
        />
        <QuickLink
          href="/docs/hospital/ot"
          title="Operation Theatre"
          description="Surgery scheduling, OT booking, surgical team, and notes."
        />
        <QuickLink
          href="/docs/hospital/pharmacy"
          title="Pharmacy"
          description="Drug dispensing, prescription fills, batch tracking, and returns."
        />
        <QuickLink
          href="/docs/hospital/billing"
          title="Billing"
          description="Patient billing, package billing, payments, receipts, and refunds."
        />
      </div>
    </>
  );
}
