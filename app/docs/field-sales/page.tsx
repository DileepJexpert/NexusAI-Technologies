import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Calendar,
  DollarSign,
  Boxes,
  ShieldCheck,
  Layers,
  Award,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "FMCG Field Sales & Van Distribution Guide — Katixo Docs",
  description: `Complete guide to FMCG van sales, beat scheduling, route execution, GPS store check-ins, and day-close cash reconciliation in ${brand.name} ERP.`,
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    PLANNED: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300",
    IN_PROGRESS: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    COMPLETED: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    APPROVED: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    REJECTED: "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status] || styles.PLANNED}`}>
      {status}
    </span>
  );
}

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function FieldSalesPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          FMCG & Distribution Domain Pack
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          FMCG Field Sales, Routes & Van Distribution
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Built specifically for consumer goods, beverages, dairy, and food distributors.
          Manage geographical customer beats, weekly route schedules, morning van stock transfers,
          GPS store check-ins, spot billing, and end-of-day cash reconciliation.
        </p>
      </div>

      {/* 1. What is FMCG Field Sales & Why it Matters */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Truck className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: The FMCG Distribution Engine</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          In Indian FMCG distribution, success depends on field execution: keeping retail shelves stocked,
          servicing thousands of retail kirana stores on strict weekly schedules, and eliminating cash leakage.
          Katixo ERP provides an integrated, mobile-ready field sales system:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Beats & Routes</h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Clusters of retail outlets organized geographically and assigned to days of the week (e.g. Monday Market Beat).
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Live Van Stock</h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Real-time inventory balances per vehicle. Spot deliveries instantly deduct from van stock without warehouse delays.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Day-Close Audit</h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Evening cash counter reconciliation: balances opening float + collections - expenses against physical cash deposited.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Setup: Masters & Planning */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MapPin className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Set Up Masters (Beats, Routes & Vans)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-4">
          <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
            <div>
              <strong className="text-slate-900 dark:text-white block text-sm mb-1">Step 1: Create Beats (Customer Clusters)</strong>
              <p>
                Navigate to <strong>Field Sales &gt; Beats &gt; "New Beat"</strong>. Name your beat (e.g., <em>"Old City Kirana Beat"</em>),
                and assign customers in visit sequence (Shop 1, Shop 2, Shop 3). Set visit frequency (Daily, Weekly, Bi-weekly).
              </p>
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white block text-sm mb-1">Step 2: Build Routes (Weekly Schedules)</strong>
              <p>
                Go to <strong>Field Sales &gt; Routes &gt; "New Route"</strong>. Link one or more beats to a route and specify the active
                days of the week (e.g., Route A runs on Mondays and Thursdays).
              </p>
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white block text-sm mb-1">Step 3: Register Vans & Assign Sales Personnel</strong>
              <p>
                Under <strong>Field Sales &gt; Vans</strong>, register your delivery vehicles with registration numbers, driver details,
                and maximum payload capacity. Then create a <strong>Field Sales Assignment</strong> linking Sales Officer + Route + Van.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Daily 4-Stage Operational Cycle */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. The Daily 4-Stage Operational Workflow</span>
        </h2>

        <div className="space-y-3">
          {/* Stage 1 */}
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 dark:text-[#b3ed97]">STAGE 1: 07:00 AM — Morning Van Stock Loading</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">Warehouse Depot</span>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The warehouse supervisor creates a <strong>Van Stock Transfer (LOAD)</strong>. Items are selected from central inventory,
              loaded onto the van, and verified. Both the warehouse supervisor and salesperson confirm the transfer.
              Stock is transferred to <code className="text-blue-600">van_stock_balance</code>.
            </p>
          </div>

          {/* Stage 2 */}
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 dark:text-[#b3ed97]">STAGE 2: 08:30 AM — Starting Route Execution</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">Mobile / Tablet</span>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The salesperson opens the Katixo app and clicks <strong>"Start Route Execution"</strong>. The app generates the day&apos;s
              scheduled visits in optimal order from the route&apos;s assigned beats. Status changes to <StatusBadge status="IN_PROGRESS" />.
            </p>
          </div>

          {/* Stage 3 */}
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 dark:text-[#b3ed97]">STAGE 3: 09:00 AM - 05:00 PM — Customer Store Visits</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">Retail Outlets</span>
            </div>
            <div className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <p>• <strong>GPS Check-In:</strong> Verifies latitude/longitude against customer master coordinates.</p>
              <p>• <strong>Spot Delivery:</strong> Delivers stock immediately from van inventory; prints thermal receipt or sends WhatsApp bill.</p>
              <p>• <strong>Advance Order Booking:</strong> Takes orders for next-day warehouse truck delivery if items exceed van capacity.</p>
              <p>• <strong>Payment Collection:</strong> Collects Cash or displays dynamic UPI QR code; issues instant receipt.</p>
              <p>• <strong>GPS Check-Out:</strong> Records visit duration, store feedback, or skip reasons (e.g. store closed).</p>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 dark:text-[#b3ed97]">STAGE 4: 06:30 PM — Day-Close Wizard & Cash Reconciliation</span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">Depot Cashier</span>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              When the van returns, the salesperson opens the <strong>Day-Close Wizard</strong>:
            </p>
            <div className="mt-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-400 space-y-1">
              <p>1. <strong>Stock Return:</strong> Unsold goods are transferred back to the central warehouse (`van_stock_transfer.RETURN`).</p>
              <p>2. <strong>Cash Audit Formula:</strong> Opening Float + Cash Collections - Field Expenses = Expected Cash.</p>
              <p>3. <strong>Cashier Verification:</strong> Physical cash handed over is counted. Zero variance completes the audit. Supervisor approves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Salesman Targets & Incentives */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>4. Salesman Targets & Performance Analytics</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Motivate field sales officers with transparent target tracking:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 p-3.5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Revenue Target</span>
            <p className="text-slate-600 dark:text-slate-400">Monthly sales volume with tiered commission incentives (e.g. 1.5% bonus on reaching 100%).</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-3.5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Outlet Coverage</span>
            <p className="text-slate-600 dark:text-slate-400">Tracks percentage of scheduled beat visits actually completed vs skipped.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-3.5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">New Outlet Onboarding</span>
            <p className="text-slate-600 dark:text-slate-400">Incentivizes expanding retail footprint by registering new kirana accounts on the go.</p>
          </div>
        </div>
      </section>

      {/* 5. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Field sales endpoints for mobile app sync, GPS tracking, and automated van transfers:
        </p>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/field-sales/routes/today" />
          <Endpoint method="POST" path="/api/v1/field-sales/route-executions/{id}/start" />
          <Endpoint method="POST" path="/api/v1/field-sales/visits/{id}/check-in" />
          <Endpoint method="POST" path="/api/v1/field-sales/van-transfers/load" />
          <Endpoint method="POST" path="/api/v1/field-sales/day-close/submit" />
        </div>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs font-mono text-slate-200">
          <code>{`# GPS Check-in for a customer visit via cURL
curl -X POST https://api.katixo.com/api/v1/field-sales/visits/v1a2b3/check-in \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "latitude": 18.5204,
    "longitude": 73.8567
  }'`}</code>
        </pre>
      </section>
    </div>
  );
}
