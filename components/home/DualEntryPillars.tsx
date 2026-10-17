"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  BookOpen,
  Receipt,
  FileCheck,
  Percent,
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface Pillar {
  id: string;
  name: string;
  subhead: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  mockData: {
    title: string;
    badge: string;
    rows: { label: string; value: string; status?: string }[];
    highlight: string;
  };
}

const pillars: Pillar[] = [
  {
    id: "multi-entity",
    name: "Multi-Entity",
    subhead: "One view, every entity.",
    tagline: "Consolidated multi-GSTIN accounting without manual spreadsheets.",
    icon: <Layers className="h-5 w-5" />,
    description:
      "Manage multiple branches, regional depots, and distinct GSTIN entities from a single unified ledger. Run individual P&Ls or generate consolidated corporate balance sheets with automatic intercompany eliminations in seconds.",
    benefits: [
      "Real-time multi-branch ledger consolidation",
      "Automated intercompany balance elimination",
      "Branch-level access controls and audit logs",
    ],
    mockData: {
      title: "Corporate Entity Consolidation",
      badge: "Real-Time Sync",
      rows: [
        { label: "HQ (Delhi GSTIN-07)", value: "₹2,42,80,000", status: "Active" },
        { label: "West Depot (Mumbai GSTIN-27)", value: "₹1,84,50,000", status: "Active" },
        { label: "South Hub (Bengaluru GSTIN-29)", value: "₹94,20,000", status: "Active" },
        { label: "Intercompany Elimination", value: "-₹32,50,000", status: "Auto-Balanced" },
      ],
      highlight: "Total Consolidated ARR: ₹4,89,00,000",
    },
  },
  {
    id: "general-ledger",
    name: "General Ledger",
    subhead: "Your full financial picture.",
    tagline: "Double-entry bookkeeping that auto-posts with 100% precision.",
    icon: <BookOpen className="h-5 w-5" />,
    description:
      "Every invoice sent, challan dispatched, bank fee charged, and payroll run automatically writes double-entry debits and credits. No end-of-month scramble to post adjustments — your balance sheet is continuously audit-ready.",
    benefits: [
      "Immutable double-entry journal transactions",
      "Prorated COGS posting on delivery dispatch",
      "Drill down from any financial statement to the source line",
    ],
    mockData: {
      title: "Real-Time Journal Stream",
      badge: "Double-Entry Verified",
      rows: [
        { label: "DR Accounts Receivable (Globex)", value: "₹4,58,000", status: "Posted" },
        { label: "CR Sales Revenue (Pharma Goods)", value: "₹4,16,364", status: "Posted" },
        { label: "CR Output IGST (5% Chapter 30)", value: "₹41,636", status: "Posted" },
        { label: "DR COGS (FIFO Blended Cost)", value: "₹3,12,000", status: "Prorated" },
      ],
      highlight: "Ledger Status: 100% Balanced • Paisa-Perfect",
    },
  },
  {
    id: "accounts-payable",
    name: "Accounts Payable",
    subhead: "Capture, approve, done.",
    tagline: "OCR document scan with automated 3-way purchase matching.",
    icon: <Receipt className="h-5 w-5" />,
    description:
      "Drop in PDF supplier invoices or smartphone photos. Katixo's AI reads line items, matches quantities against Goods Receipts (GRN) and Purchase Orders, flags pricing variances, and prepares batch NEFT payments for approval.",
    benefits: [
      "99.8% accurate OCR bill scanning",
      "Automated 3-way match: PO vs GRN vs Supplier Bill",
      "Approval hierarchies with self-approval guards",
    ],
    mockData: {
      title: "3-Way Match Verification",
      badge: "99.8% OCR Match",
      rows: [
        { label: "PO-2026-089 (Cipla Ltd)", value: "1,000 Units @ ₹420", status: "Approved" },
        { label: "GRN-2026-114 (Warehouse Inward)", value: "1,000 Units Received", status: "Verified" },
        { label: "Supplier Bill #B-8819", value: "₹4,41,000 (Incl. 5% GST)", status: "Matched" },
        { label: "Price Variance Check", value: "₹0.00 Variance", status: "Clean" },
      ],
      highlight: "Ready for Batch Payment • Saved 40 Mins",
    },
  },
  {
    id: "accounts-receivable",
    name: "Accounts Receivable",
    subhead: "Get paid. Stay reconciled.",
    tagline: "From sales order to delivery challan, e-invoice, and collection.",
    icon: <FileCheck className="h-5 w-5" />,
    description:
      "Enforce customer credit limits and overdue payment blocks before approving sales orders. Dispatch goods via delivery challans with FEFO stock deduction, convert to GST e-invoices with one click, and track aging ledgers.",
    benefits: [
      "Automated customer credit limits & overdue holds",
      "Delivery challans with batch FEFO auto-pick",
      "Instant e-way bill & e-invoice IRN generation",
    ],
    mockData: {
      title: "Order-to-Cash Execution",
      badge: "Credit Verified",
      rows: [
        { label: "SO-2026-441 (Apollo Chemist)", value: "₹3,20,000", status: "Credit OK" },
        { label: "DC-2026-218 Dispatch", value: "Batch B-902 (FEFO Picked)", status: "Deducted" },
        { label: "Tax Invoice #INV-883", value: "IRN Generated", status: "E-Invoiced" },
        { label: "Customer Aging Ledger", value: "Payment Due: 15 Days", status: "Tracked" },
      ],
      highlight: "Stock Reduced • No Duplicate Movement",
    },
  },
  {
    id: "revenue-tax",
    name: "GST 2.0 & Tax",
    subhead: "Zero guesswork. Fully compliant.",
    tagline: "Notification 9/2025-CT rate engine with autonomous GSTR-2B ITC match.",
    icon: <Percent className="h-5 w-5" />,
    description:
      "Built for the latest Indian GST reforms. Automatically applies 5% rates on Chapter 30 medicines and medical devices, handles loose vs pre-packaged retail food splits, and cross-checks every purchase bill against the GSTR-2B portal to prevent lost input credits.",
    benefits: [
      "Automated Chapter 30 5% medicine GST rates",
      "Retail loose vs packaged grocery tax split",
      "Continuous GSTR-2B vs purchase register matching",
    ],
    mockData: {
      title: "GST 2.0 Reform Compliance",
      badge: "Notification 9/2025-CT",
      rows: [
        { label: "Medicines & Vaccines (3001-3006)", value: "5% GST (Post-Reform)", status: "Applied" },
        { label: "Medical Devices (9018-9021)", value: "5% GST (Post-Reform)", status: "Applied" },
        { label: "Loose Grocery / FMCG", value: "0% Exempt Auto-Split", status: "Verified" },
        { label: "GSTR-2B ITC Match Rate", value: "₹18,42,000 Clean ITC", status: "100% Claimable" },
      ],
      highlight: "Zero Disallowed Credits • Audit-Protected",
    },
  },
  {
    id: "reporting-analytics",
    name: "Custom Reports",
    subhead: "Any angle. Every opportunity.",
    tagline: "Custom query builder with automated scheduled email delivery.",
    icon: <BarChart3 className="h-5 w-5" />,
    description:
      "Ditch rigid ERP canned reports. Build bespoke multi-column reports, select custom fields, save filter presets, and schedule automated weekly or monthly PDF/Excel delivery to management and investors.",
    benefits: [
      "Custom column selection and tag-based filtering",
      "Automated cron email distribution (Daily/Weekly/Monthly)",
      "Instant CSV and Excel exports with one click",
    ],
    mockData: {
      title: "Scheduled Executive Distribution",
      badge: "Cron: Every Mon 8 AM",
      rows: [
        { label: "Report: Gross Margin by Brand", value: "Columns: 8 • Filters: Pharma", status: "Saved" },
        { label: "Recipients", value: "cfo@company.com, founders@...", status: "4 Recipients" },
        { label: "Next Scheduled Run", value: "Monday 08:00 AM IST", status: "Active" },
        { label: "Format", value: "Excel (.xlsx) + Executive PDF", status: "Automated" },
      ],
      highlight: "Delivered While You Sleep • Zero Manual Work",
    },
  },
  {
    id: "cash-forecasting",
    name: "Cash Runway",
    subhead: "Less budgetV15.xlsx, more foresight.",
    tagline: "Live bank feed projections and working capital runway modeling.",
    icon: <TrendingUp className="h-5 w-5" />,
    description:
      "Say goodbye to stale monthly Excel forecast models. Katixo integrates directly with current account feeds, pending vendor payables, and customer receivable aging to project exact cash runway for the next 18 months.",
    benefits: [
      "Live working capital runway projections",
      "Automated vendor cash outflow scheduling",
      "Receivables collection probability scoring",
    ],
    mockData: {
      title: "Working Capital Forecast",
      badge: "18-Month Projection",
      rows: [
        { label: "Current Bank Balance", value: "₹1,42,50,000", status: "Live Feed" },
        { label: "Committed AP Outflows (30d)", value: "₹48,20,000", status: "Scheduled" },
        { label: "Projected AR Inflows (30d)", value: "₹76,40,000", status: "High Conf." },
        { label: "Net Cash Runway", value: "18.4 Months", status: "Healthy" },
      ],
      highlight: "Clear Visibility • Never Guess Payroll Cash",
    },
  },
];

export function DualEntryPillars() {
  const [activeTab, setActiveTab] = useState(pillars[0].id);
  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section className="relative overflow-hidden bg-[#0c1f17] text-white py-20 md:py-28 border-t border-[#142d25]">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(179, 237, 151, 0.12), transparent 50%), radial-gradient(circle at 80% 80%, rgba(20, 45, 37, 0.6), transparent 60%)",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header (DualEntry style) */}
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b3ed97]/30 bg-[#142d25] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b3ed97]">
            <Sparkles className="h-3.5 w-3.5" />
            The Complete AI ERP Suite
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            The full picture.
            <br />
            <span className="text-[#b3ed97]">Not just a piece of it.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#c2d9cc] leading-relaxed">
            Legacy software forces you to stitch together 5 different tools for billing, inventory, GST, and reports. Katixo consolidates every financial and operational workflow into one autonomous system.
          </p>
        </div>

        {/* 7-Pill Navigation Selector Tabs (DualEntry style) */}
        <div className="mt-10 flex flex-wrap gap-2 pb-2">
          {pillars.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#b3ed97] text-[#142d25] shadow-lg shadow-[#b3ed97]/20 scale-[1.02]"
                    : "bg-[#142d25]/80 text-[#c2d9cc] hover:bg-[#183a2f] hover:text-white border border-white/10"
                }`}
              >
                <span className={isActive ? "text-[#142d25]" : "text-[#b3ed97]"}>
                  {pillar.icon}
                </span>
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Panel */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#10271e]/90 p-6 sm:p-8 lg:p-12 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
            >
              {/* Left Column: Value Prop & Bullet Points */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#b3ed97]">
                    {currentPillar.subhead}
                  </div>
                  <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-white">
                    {currentPillar.tagline}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#c2d9cc]">
                    {currentPillar.description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 pt-2">
                  {currentPillar.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-sm text-white">
                      <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Deep Link to Product Tour */}
                <div className="pt-2">
                  <a
                    href="/docs"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#b3ed97] hover:text-white transition-colors"
                  >
                    <span>Explore {currentPillar.name} API & Docs</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live Enterprise Preview Mock Card */}
              <div className="rounded-2xl border border-white/10 bg-[#0a1812] p-5 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b3ed97]/20 text-[#b3ed97]">
                      {currentPillar.icon}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {currentPillar.mockData.title}
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-[#b3ed97] border border-[#b3ed97]/30">
                    {currentPillar.mockData.badge}
                  </span>
                </div>

                {/* Live Data Rows */}
                <div className="mt-4 space-y-2.5">
                  {currentPillar.mockData.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3.5 py-2.5 text-xs border border-white/5"
                    >
                      <span className="text-slate-300 font-medium">{row.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-white">{row.value}</span>
                        {row.status && (
                          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-semibold text-[#b3ed97]">
                            {row.status}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Highlight Card */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-[#b3ed97]/30 bg-[#142d25] p-3 text-xs font-bold text-[#b3ed97]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#b3ed97]" />
                    {currentPillar.mockData.highlight}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white font-semibold">
                    Live
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
