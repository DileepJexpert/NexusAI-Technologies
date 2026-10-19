import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Receipt,
  FileText,
  Landmark,
  Boxes,
  Truck,
  Pill,
  Users,
  BarChart3,
  Bot,
  CheckCircle2,
  Workflow,
  Sparkles,
  ClipboardCheck,
  ShieldCheck,
  Layers,
  HeartPulse,
  Package,
  BookOpen,
  ArrowUpRight,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Module Guides & ERP Architecture — Katixo Documentation",
  description: `Comprehensive module guides, step-by-step creation walkthroughs, operational workflows, and domain architecture for ${brand.name} ERP and Hospital OS.`,
};

interface GuideCardProps {
  icon: React.ReactNode;
  title: string;
  moduleBadge: string;
  description: string;
  howToCreate: string;
  href: string;
  tag?: string;
}

function GuideCard({
  icon,
  title,
  moduleBadge,
  description,
  howToCreate,
  href,
  tag,
}: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#142d25] hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#b3ed97]/50"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#142d25] transition-colors group-hover:bg-[#142d25] group-hover:text-white dark:bg-white/10 dark:text-[#b3ed97] dark:group-hover:bg-[#b3ed97] dark:group-hover:text-[#142d25]">
            {icon}
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-300">
              {moduleBadge}
            </span>
            {tag && (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
                {tag}
              </span>
            )}
          </div>
        </div>

        <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-[#b3ed97]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-100 dark:bg-white/[0.02] dark:border-white/5 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-white">How to create: </span>
          {howToCreate}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-[#142d25] dark:border-white/5 dark:text-[#b3ed97]">
        <span>Explore complete guide</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function DocsOverview() {
  return (
    <div className="space-y-12">
      {/* Header section (Campfire Mintlify style) */}
      <div className="border-b border-slate-200 pb-8 dark:border-white/10">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950/50 dark:text-[#b3ed97]">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Katixo Enterprise Knowledge Base & Module Guides</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          ERP & Hospital OS Module Guides
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive functional documentation, step-by-step creation procedures, operational workflows,
          and domain architecture for {brand.name}. Learn how each module functions, when to use it, how to create records,
          and how automated accounting, inventory, and GST compliance interact.
        </p>
      </div>

      {/* Core Enterprise Lifecycles Section */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Workflow className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
              <span>How Enterprises Run on Katixo — 4 Core Lifecycles</span>
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              End-to-end operational workflows connecting procurement, warehousing, sales, and financial ledgers.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {/* Lifecycle 1 */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-white/10 dark:from-white/[0.02] dark:to-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
                Procure-to-Pay (P2P)
              </span>
              <span className="rounded-full bg-slate-200/60 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">
                Purchasing & Payables
              </span>
            </div>
            <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
              Shortage → Purchase Order → GRN → 3-Way Match Bill
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Stock shortages automatically trigger draft POs. Incoming shipments are physically inspected with a Goods Receipt Note (GRN) to capture batches, expiry dates, and rack locations. 3-way matching validates PO quantities and rates against the supplier invoice before posting to Accounts Payable.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">1. PO Created</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">2. GRN Received (Batches)</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">3. 3-Way Matched</span>
              <span>→</span>
              <span className="rounded bg-emerald-50 text-emerald-800 px-2 py-1 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">4. AP Bill Posted</span>
            </div>
            <div className="mt-4">
              <Link href="/docs/procurement" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline dark:text-[#b3ed97]">
                <span>Read Procurement & GRN guide</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Lifecycle 2 */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-white/10 dark:from-white/[0.02] dark:to-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
                Order-to-Cash (O2C)
              </span>
              <span className="rounded-full bg-slate-200/60 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">
                Sales & Receivables
              </span>
            </div>
            <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
              Sales Order → Delivery Challan (FEFO) → GST 2.0 Invoice
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Sales orders check customer credit limits and apply auto-schemes. Goods are dispatched from the warehouse via Delivery Challans with automatic FEFO (First-Expiry, First-Out) lot picking. Dispatched challans convert to GST-compliant tax invoices without double-deducting inventory.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">1. Sales Order</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">2. FEFO Picklist</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">3. DC Dispatched</span>
              <span>→</span>
              <span className="rounded bg-emerald-50 text-emerald-800 px-2 py-1 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">4. Tax Invoice & Payment</span>
            </div>
            <div className="mt-4">
              <Link href="/docs/delivery-challans" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline dark:text-[#b3ed97]">
                <span>Read Delivery Challans guide</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Lifecycle 3 */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-white/10 dark:from-white/[0.02] dark:to-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
                FMCG Distribution
              </span>
              <span className="rounded-full bg-slate-200/60 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">
                Field Sales & Vans
              </span>
            </div>
            <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
              Morning Van Load → Beat Visits → Day-Close Cash Audit
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Van stocks are loaded in the morning from the central warehouse. Sales officers navigate scheduled customer beats with GPS check-in, issue spot deliveries or book orders, collect cash and UPI payments, and complete evening cash reconciliation with variance tracking.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">1. Van Stock Loaded</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">2. Beat GPS Check-in</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">3. Spot Delivery</span>
              <span>→</span>
              <span className="rounded bg-emerald-50 text-emerald-800 px-2 py-1 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">4. Day-Close Wizard</span>
            </div>
            <div className="mt-4">
              <Link href="/docs/field-sales" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline dark:text-[#b3ed97]">
                <span>Read FMCG Field Sales guide</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Lifecycle 4 */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-white/10 dark:from-white/[0.02] dark:to-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
                Statutory HR & Payroll
              </span>
              <span className="rounded-full bg-slate-200/60 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">
                Indian Compliance
              </span>
            </div>
            <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">
              Attendance → Statutory Slabs → Bank Payout & GL Posting
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Monthly payroll automatically calculates EPF (12%), ESI (0.75%/3.25%), state-specific Professional Tax (PT), Labour Welfare Fund (LWF), and TDS. Approved runs generate bank payout files and automatically post compound General Ledger journal entries with zero manual book-keeping.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">1. Attendance Input</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">2. Statutory Auto-Calc</span>
              <span>→</span>
              <span className="rounded bg-white px-2 py-1 shadow-sm border border-slate-200 dark:bg-white/10 dark:border-white/10">3. Manager Sign-off</span>
              <span>→</span>
              <span className="rounded bg-emerald-50 text-emerald-800 px-2 py-1 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">4. Auto GL Journal</span>
            </div>
            <div className="mt-4">
              <Link href="/docs/payroll" className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:underline dark:text-[#b3ed97]">
                <span>Read Indian Payroll guide</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Module Directory: Pillar by Pillar */}
      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
            <span>Complete Module Documentation & Guides</span>
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Browse in-depth functional guides for every domain module in the Katixo Enterprise Suite.
          </p>
        </div>

        {/* Section 1: Billing & Distribution */}
        <div>
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 dark:border-white/5">
            <span className="text-base font-bold text-slate-900 dark:text-white">1. Billing, Sales & Receivables (AR)</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <GuideCard
              icon={<Receipt className="h-5 w-5" />}
              title="Tax Invoices & Billing"
              moduleBadge="Sales"
              description="Create GST 2.0 compliant B2B tax invoices, retail cash bills, and service invoices. Auto-resolves HSN codes, tax splits (CGST+SGST vs IGST), and generates e-Way bills."
              howToCreate="Navigate to Sales > Invoices > Click 'Create Invoice'. Select customer, add line items with HSN/GST rates, apply discounts, review tax summary, and click 'Send' to post to the General Ledger."
              href="/docs/invoices"
            />
            <GuideCard
              icon={<FileText className="h-5 w-5" />}
              title="Delivery Challans & Dispatch"
              moduleBadge="Distribution"
              description="Manage physical warehouse dispatches before or alongside billing. Enforces batch selection, executes stock deductions, and converts to invoices without double-counting inventory."
              howToCreate="From an approved Sales Order, click 'Create Delivery Challan'. Verify quantities, select batch lots (or let FEFO auto-pick), assign transporter/vehicle details, and click 'Dispatch'."
              href="/docs/delivery-challans"
              tag="P0 Core"
            />
            <GuideCard
              icon={<Users className="h-5 w-5" />}
              title="Contacts & Customer Ledgers"
              moduleBadge="AR Subledger"
              description="Manage customer and vendor masters, credit limits, overdue payment controls, state codes, and unified contact statements with chronological debit/credit tracking."
              howToCreate="Go to Contacts > 'Add Contact'. Choose 'Customer', enter trade name, GSTIN (auto-resolves billing address), credit limit amount, payment terms (e.g. Net 30), and save."
              href="/docs/customers"
            />
            <GuideCard
              icon={<RefreshCw className="h-5 w-5" />}
              title="Recurring Invoices & Subscriptions"
              moduleBadge="Automation"
              description="Automate monthly retainers, AMC contracts, software licenses, and recurring rental billing with automated generation schedules and email delivery."
              howToCreate="Go to Sales > Recurring Invoices > 'New Profile'. Select customer, set billing frequency (Monthly/Quarterly), start date, and template lines. Katixo generates draft invoices automatically on the due date."
              href="/docs/recurring-invoices"
            />
          </div>
        </div>

        {/* Section 2: Procurement & Warehousing */}
        <div>
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 dark:border-white/5">
            <span className="text-base font-bold text-slate-900 dark:text-white">2. Procurement, Inventory & Costing</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <GuideCard
              icon={<ClipboardCheck className="h-5 w-5" />}
              title="Purchase Orders & GRN Inspection"
              moduleBadge="Procurement"
              description="Convert stock shortages into supplier purchase orders, perform physical inbound inspection via Goods Receipt Notes (GRN), and capture batches, expiry dates, and rack locations."
              howToCreate="Under Procurement, create a PO with supplier items and negotiated rates. When goods arrive, open the PO and click 'Create Goods Receipt'. Enter received batch numbers, manufacturing/expiry dates, rack locations, and click 'Receive Stock'."
              href="/docs/procurement"
              tag="P0 Core"
            />
            <GuideCard
              icon={<Boxes className="h-5 w-5" />}
              title="Batches, Expiry & FEFO Picking"
              moduleBadge="Inventory"
              description="End-to-end batch tracking for pharma, grocery, and chemical verticals. Visual near-expiry alerts, automated FEFO dispatch picking, and supplier return debit notes."
              howToCreate="Batches are created automatically during GRN receiving. To monitor batches, go to Inventory > Batches to filter by days to expiry (< 30, 60, 90 days), and draft supplier return debit notes for slow-moving lots."
              href="/docs/inventory"
            />
            <GuideCard
              icon={<TrendingUp className="h-5 w-5" />}
              title="FIFO Lots & Cost Consumption"
              moduleBadge="Costing Engine"
              description="True FIFO inventory valuation conforming to AS-2. Opens cost lots upon purchase receipts, consumes oldest lots upon sales dispatches, and computes blended real-time COGS."
              howToCreate="Configured at organization settings (FIFO or Weighted Average). Cost lots are managed automatically: each purchase creates a cost lot; each sale issue consumes active lots and bakes the blended cost into the stock movement."
              href="/docs/inventory-costing"
            />
            <GuideCard
              icon={<Package className="h-5 w-5" />}
              title="Stock Counts & Physical Audits"
              moduleBadge="Warehouse"
              description="Perform cycle counts and physical inventory reconciliations. Compare system ledger balances against counted quantities and post automatic variance adjustments."
              howToCreate="Go to Inventory > Stock Counts > 'Start New Count'. Select warehouse and category, enter physical quantities counted per batch. The system calculates variance and cost impact. Click 'Post Adjustments' to sync ledger."
              href="/docs/stock-counts"
            />
          </div>
        </div>

        {/* Section 3: Specialized Industry Packs */}
        <div>
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 dark:border-white/5">
            <span className="text-base font-bold text-slate-900 dark:text-white">3. Vertical Industry Packs</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <GuideCard
              icon={<Pill className="h-5 w-5" />}
              title="Pharma Clinical & CDSCO Masters"
              moduleBadge="Pharma Vertical"
              description="National drug formulations, salt compositions, CDSCO drug-drug interaction alerts at POS, Schedule H/X compliance, and generic substitution matrix with profit margin comparison."
              howToCreate="Enable the Pharma Vertical Pack. In Item Master, search national drug brands or salts to auto-populate HSN, Schedule, and dosage. During POS billing, any contraindicated drug combination instantly alerts the cashier."
              href="/docs/pharma"
              tag="Domain Pack"
            />
            <GuideCard
              icon={<Truck className="h-5 w-5" />}
              title="FMCG Field Sales, Routes & Vans"
              moduleBadge="FMCG Vertical"
              description="Complete distributor execution: geographical customer beats, weekly route planning, morning van stock transfer, mobile visit check-in with GPS, and end-of-day cash reconciliation."
              howToCreate="Create beats with retail shops, assign beats to a weekly Route, and link a van and salesperson. Each morning, dispatch van stock. In the evening, open the Day-Close Wizard to reconcile cash, UPI collections, and return unsold stock."
              href="/docs/field-sales"
              tag="Domain Pack"
            />
          </div>
        </div>

        {/* Section 4: Finance, Payroll & Operations */}
        <div>
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 dark:border-white/5">
            <span className="text-base font-bold text-slate-900 dark:text-white">4. Financial Accounting, Payroll & Operations</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <GuideCard
              icon={<Users className="h-5 w-5" />}
              title="Indian SMB Payroll & Statutory Slabs"
              moduleBadge="HR & Payroll"
              description="Employee masters, flexible salary structures (Basic, HRA, Special Allowance), automated EPF (12%), ESI (0.75%/3.25%), state PT, LWF, and automated General Ledger salary journal posting."
              howToCreate="Add employees with PAN/UAN and salary components. Each month, go to Payroll > 'New Payroll Run', select period, review attendance, click 'Calculate' for statutory deductions, and click 'Approve & Post' to generate salary journals."
              href="/docs/payroll"
              tag="Statutory"
            />
            <GuideCard
              icon={<Landmark className="h-5 w-5" />}
              title="Autonomous Bank Feeds & Reconciliation"
              moduleBadge="Banking"
              description="Import bank statements (OFX, CSV, Excel), run AI-powered fuzzy matching against invoices and vendor payments by UTR / UPI reference, and reconcile accounts in one click."
              howToCreate="Go to Banking > select Bank Account > 'Import Statement'. Upload the bank CSV/OFX. Katixo automatically matches lines with customer payments and bills. Review matched items and click 'Reconcile'."
              href="/docs/banking"
            />
            <GuideCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="GST 2.0 Reform & Compliance"
              moduleBadge="Taxation"
              description="Built for post-GST 2.0 (Notification 9/2025-CT(Rate)). Unified national HSN directory, intra-state (CGST+SGST) vs inter-state (IGST) split, e-Invoice QR, and GSTR-1 / GSTR-3B export."
              howToCreate="Set your organization GSTIN and State Code in Settings. When creating items or bills, Katixo automatically determines the correct tax rates and applies proper CGST/SGST or IGST depending on the Place of Supply."
              href="/docs/gst"
            />
            <GuideCard
              icon={<Workflow className="h-5 w-5" />}
              title="Multi-Level Approval Workflows"
              moduleBadge="Governance"
              description="Enforce internal controls with custom thresholds for Purchase Orders, Credit Notes, Vendor Payments, and Day-Close audits with anti-self-approval protection."
              howToCreate="Go to Settings > Approval Workflows > 'Create Rule'. Choose document type (e.g. Purchase Order), set minimum threshold amount (e.g. ₹50,000), select designated approver roles, and activate."
              href="/docs/workflows"
            />
          </div>
        </div>

        {/* Section 5: Analytics & Hospital OS */}
        <div>
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 dark:border-white/5">
            <span className="text-base font-bold text-slate-900 dark:text-white">5. Analytics, AI & Hospital OS</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <GuideCard
              icon={<BarChart3 className="h-5 w-5" />}
              title="Custom Report Builder & Scheduled Delivery"
              moduleBadge="Reporting"
              description="Build customized operational reports, choose and reorder columns, apply multi-criteria filters, and schedule automated PDF/Excel email dispatch via recurring cron."
              howToCreate="Go to Reports > 'Custom Report Builder'. Select base dataset (Sales, Stock, AP, Ledger), pick visible columns, apply date and customer filters, save template, and configure daily/weekly email schedules."
              href="/docs/custom-reports"
              tag="New"
            />
            <GuideCard
              icon={<Bot className="h-5 w-5" />}
              title="AI Review Inbox & Smart Bill Scan"
              moduleBadge="AI Decision Engine"
              description="Observe-suggest-review architecture: OCR supplier bills from photos/PDFs, detect pricing and duplicate invoice anomalies, and review recommendations in a human-in-the-loop inbox."
              howToCreate="Upload a vendor invoice under Bills > 'Scan Invoice'. Katixo's vision model extracts line items, HSN, and totals. Go to the AI Review Inbox to accept or edit suggestions before posting to the ledger."
              href="/docs/ai"
              tag="AI Copilot"
            />
            <GuideCard
              icon={<HeartPulse className="h-5 w-5" />}
              title="Hospital OS Clinical Suite"
              moduleBadge="Healthcare"
              description="Complete hospital management: patient registration, OPD token calling queue, IPD bed and ward admissions, pathology laboratory, operation theatre scheduling, and hospital pharmacy."
              howToCreate="Register patients at Reception > 'New Patient' to issue a UHID. Generate an OPD consultation token. Doctors view clinical records and issue electronic prescriptions that flow directly to the hospital pharmacy."
              href="/docs/hospital"
              tag="Hospital Suite"
            />
          </div>
        </div>
      </div>

      {/* Developer API Callout (Cleanly separated at the bottom) */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Looking for REST API Endpoints & Developer Integration?
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Every Katixo module exposes secure, typed REST APIs with JWT authentication for ERP integrations, mobile apps, and automated pipelines.
            </p>
          </div>
          <Link
            href="/docs/authentication"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#142d25] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:opacity-90 dark:bg-[#b3ed97] dark:text-[#142d25]"
          >
            <span>API Quickstart & Auth</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
