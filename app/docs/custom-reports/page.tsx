import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Mail,
  SlidersHorizontal,
  Table,
  Clock,
  Sparkles,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Custom Report Builder & Automation Guide — Katixo Docs",
  description: `Complete guide to building custom SQL-backed reports, configuring column sets, applying multi-factor filters, and scheduling automated email delivery in ${brand.name} ERP.`,
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function CustomReportsPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Analytics & Reporting Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Custom Report Builder & Automated Schedules
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Tailor enterprise reporting to your exact business metrics. Build SQL-backed operational reports,
          select and reorder visible columns, apply multi-dimensional filters, and schedule automated PDF/Excel
          email delivery to executives and auditors on a recurring cron schedule.
        </p>
      </div>

      {/* 1. Module Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: Why Custom Reporting?</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Every distributor, hospital, and retailer tracks different KPIs. Rather than exporting raw data to Excel
          for manual VLOOKUPs, Katixo&apos;s Custom Report Builder lets users design and save bespoke report views:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Dynamic Column Sets</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Pick, reorder, and hide columns to generate clean, executive-ready tables without clutter.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Granular Filters</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Slice and dice by date ranges, customer groups, sales reps, warehouses, and tax categories.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Automated Email Cron</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Dispatches daily sales or weekly stock audit summaries to management inboxes automatically at 8:00 AM.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Creation Walkthrough */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Build a Custom Report (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Go to Reports &gt; Custom Reports &gt; "Create Custom Report":</strong>
                Select the base dataset: <em>Sales Register</em>, <em>Purchase Register</em>, <em>Stock Summary</em>, <em>Van Settlement</em>, or <em>Day Book</em>.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Select & Reorder Columns:</strong>
                Use the column picker to toggle fields (e.g. Invoice Number, Date, Customer Name, HSN Code, Taxable Value, CGST, SGST, Total Amount). Drag to reorder.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Configure Filters:</strong>
                Set criteria like Date Range (Current Month), Payment Status (Unpaid &amp; Overdue), or Customer Territory (Pune North).
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Save & Share:</strong>
                Name your report (e.g. <em>"Monthly Overdue AR &gt; ₹50,000"</em>). Choose whether it is private to your user account or public to all accountants.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Scheduling Automated Delivery */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Clock className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Scheduling Automated Email Reports</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Set up headless automated report delivery so leadership always has fresh numbers without logging in:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02] text-xs space-y-2 text-slate-600 dark:text-slate-400">
          <p>• <strong>Frequency:</strong> Choose <em>Daily</em>, <em>Weekly</em> (e.g. every Monday), or <em>Monthly</em> (e.g. 1st of month).</p>
          <p>• <strong>Dispatch Time:</strong> Set time of delivery (e.g. 08:30 AM).</p>
          <p>• <strong>Recipients:</strong> Enter comma-separated email addresses of founders, CFOs, or external auditors.</p>
          <p>• <strong>Attachment:</strong> Reports arrive formatted in both PDF and Excel formats ready for review.</p>
        </div>
      </section>

      {/* 4. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/saved-reports" />
          <Endpoint method="POST" path="/api/v1/saved-reports" />
          <Endpoint method="PUT" path="/api/v1/saved-reports/{id}" />
          <Endpoint method="POST" path="/api/v1/saved-reports/{id}/schedules" />
        </div>
      </section>
    </div>
  );
}
