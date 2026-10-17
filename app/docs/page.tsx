import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rocket, Terminal, Receipt, FileText, Landmark, Boxes, Truck, Pill, Users, BarChart3, Bot, CheckCircle2 } from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Introduction - Developer Documentation",
  description: `Welcome to the ${brand.name} developer documentation. Explore REST APIs, multi-tenant auth, and automated financial workflows.`,
};

function MintlifyCard({
  icon,
  title,
  description,
  href,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#142d25] hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#b3ed97]/50"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#142d25] dark:bg-white/10 dark:text-[#b3ed97] transition-colors group-hover:bg-[#142d25] group-hover:text-white dark:group-hover:bg-[#b3ed97] dark:group-hover:text-[#142d25]">
            {icon}
          </div>
          {badge && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
              {badge}
            </span>
          )}
        </div>
        <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-[#b3ed97] transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#142d25] dark:text-[#b3ed97] opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Read guide</span>
        <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}

export default function DocsOverview() {
  return (
    <div className="space-y-10">
      {/* Header section (Campfire Mintlify style) */}
      <div className="border-b border-slate-200 pb-8 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Getting started
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Introduction
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Welcome to the {brand.name} developer documentation. Build on top of India&apos;s most modern AI-native finance and operations ERP suite.
        </p>
      </div>

      {/* Setting up Section */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Setting up</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Everything you need to get started developing against our REST APIs.
        </p>

        <div className="mt-4">
          <Link
            href="/docs/authentication"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#142d25] hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#b3ed97]/50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#142d25] dark:bg-emerald-950/50 dark:text-[#b3ed97]">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-[#b3ed97]">
                  Quickstart & Authorization
                </h3>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                  Follow our multi-tenant API onboarding, JWT authentication, and role authorization guide.
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#142d25] dark:group-hover:text-[#b3ed97] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      {/* Build with us Section (2-Column Campfire Card Grid) */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Build with us!</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Use our APIs to create the workflows you need to get Katixo working best for your organization.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <MintlifyCard
            icon={<Terminal className="h-5 w-5" />}
            title="API Documentation"
            description="Explore the full collection of Katasticho ERP and Hospital OS REST endpoints."
            href="/docs/invoices"
          />
          <MintlifyCard
            icon={<Receipt className="h-5 w-5" />}
            title="Accounts Payable Workflows"
            description="Manage purchase orders, goods receipts (GRN), 3-way matching, and bill payments."
            href="/docs/procurement"
            badge="New"
          />
          <MintlifyCard
            icon={<FileText className="h-5 w-5" />}
            title="Accounts Receivable & Challans"
            description="Sales orders, delivery challans with stock deduction, and GST 2.0 invoice dispatch."
            href="/docs/delivery-challans"
            badge="New"
          />
          <MintlifyCard
            icon={<Landmark className="h-5 w-5" />}
            title="Autonomous Bank Feeds"
            description="Automate statement parsing, rule-based matching, and one-click reconciliation."
            href="/docs/banking"
            badge="New"
          />
          <MintlifyCard
            icon={<Boxes className="h-5 w-5" />}
            title="FIFO Lots & Cost Consumption"
            description="Lot-tracked valuation, blended cost consumption, and inter-warehouse stock transfers."
            href="/docs/inventory-costing"
            badge="New"
          />
          <MintlifyCard
            icon={<Truck className="h-5 w-5" />}
            title="FMCG Van Sales & Routes"
            description="Beat planning, morning van stock transfer, visit check-in, and day-close cash reconciliation."
            href="/docs/field-sales"
            badge="New"
          />
          <MintlifyCard
            icon={<Pill className="h-5 w-5" />}
            title="Pharma Clinical & Drug Masters"
            description="CDSCO interaction checking, FEFO lot auto-picking, and generic substitution matrix."
            href="/docs/pharma"
            badge="New"
          />
          <MintlifyCard
            icon={<Users className="h-5 w-5" />}
            title="Payroll & Statutory Slabs"
            description="PF 12%, ESI, PT, and TDS calculations with automated journal entry generation."
            href="/docs/payroll"
            badge="New"
          />
          <MintlifyCard
            icon={<BarChart3 className="h-5 w-5" />}
            title="Custom Report Builder"
            description="Create custom SQL-backed reports, configure column sets, and schedule automated cron emails."
            href="/docs/custom-reports"
            badge="New"
          />
          <MintlifyCard
            icon={<Bot className="h-5 w-5" />}
            title="AI Decision Engine & MCP"
            description="Model Context Protocol tools, OCR bill scan, anomaly detection, and human review inbox."
            href="/docs/ai"
            badge="New"
          />
        </div>
      </div>

      {/* Base URLs & Request Conventions */}
      <div className="border-t border-slate-200 pt-8 dark:border-white/10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">API Environments & Base URLs</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Katasticho Core ERP</div>
            <code className="mt-1 block text-sm font-mono text-emerald-700 dark:text-[#b3ed97]">
              https://api.katixo.com/api/v1
            </code>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Hospital OS Service</div>
            <code className="mt-1 block text-sm font-mono text-emerald-700 dark:text-[#b3ed97]">
              https://hospital.katixo.com/api/v1
            </code>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Standard Response Envelope</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            All endpoints return a uniform <code className="font-mono text-xs text-emerald-700 dark:text-[#b3ed97]">ApiResponse&lt;T&gt;</code> envelope:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs font-mono text-slate-200">
            <code>{`{
  "success": true,
  "message": "Resource retrieved successfully",
  "data": { ... },
  "errors": null
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
