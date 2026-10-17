"use client";

import { Check, X, Sparkles, Zap, Shield, Clock } from "lucide-react";

interface ComparisonRow {
  feature: string;
  category: string;
  katixo: { text: string; win: boolean };
  legacyCloud: { text: string; win: boolean };
  desktop: { text: string; win: boolean };
}

const comparisonRows: ComparisonRow[] = [
  {
    category: "Speed & Scale",
    feature: "Time to Month-End Close",
    katixo: { text: "24 Hours (Autonomous continuous close)", win: true },
    legacyCloud: { text: "15 to 20 Days per cycle", win: false },
    desktop: { text: "Manual Excel reconciliation", win: false },
  },
  {
    category: "Speed & Scale",
    feature: "Implementation Time & Cost",
    katixo: { text: "Live in 24 Hours • ₹0 Consulting Fees", win: true },
    legacyCloud: { text: "6 to 9 Months • ₹25L - ₹1 Cr+ fees", win: false },
    desktop: { text: "Manual on-prem install", win: false },
  },
  {
    category: "Automation",
    feature: "Bank Reconciliation",
    katixo: { text: "99.4% Autonomous AI feed matching", win: true },
    legacyCloud: { text: "Manual CSV import & custom scripts", win: false },
    desktop: { text: "Manual voucher ticking", win: false },
  },
  {
    category: "Compliance",
    feature: "GST 2.0 Reform (Notification 9/2025-CT)",
    katixo: { text: "Automated 5% rates & loose food split", win: true },
    legacyCloud: { text: "Requires custom consulting patch", win: false },
    desktop: { text: "Manual tax master edits", win: false },
  },
  {
    category: "Costing",
    feature: "FIFO Cost Lots & Stock Movements",
    katixo: { text: "Lot-tracked valuation & prorated COGS", win: true },
    legacyCloud: { text: "High-tier enterprise add-on only", win: false },
    desktop: { text: "Basic average approximation", win: false },
  },
  {
    category: "Verticals",
    feature: "FMCG Van Sales & Route Planning",
    katixo: { text: "Native mobile beats & day-close wizard", win: true },
    legacyCloud: { text: "Requires expensive 3rd-party SFA", win: false },
    desktop: { text: "Not supported", win: false },
  },
  {
    category: "Verticals",
    feature: "Pharma FEFO & Drug Safety Check",
    katixo: { text: "Native CDSCO interactions & batch recall", win: true },
    legacyCloud: { text: "Heavy customization needed", win: false },
    desktop: { text: "Basic batch text only", win: false },
  },
  {
    category: "Analytics",
    feature: "Custom Report Builder & Automation",
    katixo: { text: "Custom columns + automated cron emails", win: true },
    legacyCloud: { text: "Requires SuiteScript / ABAP developer", win: false },
    desktop: { text: "Rigid non-customizable reports", win: false },
  },
];

export function LegacyErpComparison() {
  return (
    <section className="relative overflow-hidden bg-[#0a1812] text-white py-20 md:py-28 border-t border-[#142d25]">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(179, 237, 151, 0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(20, 45, 37, 0.5), transparent 50%)",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header (DualEntry style) */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b3ed97]/30 bg-[#142d25] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b3ed97]">
            <Sparkles className="h-3.5 w-3.5" />
            Competitive Benchmark
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            The last ERP decision
            <br />
            <span className="text-[#b3ed97]">you&apos;ll ever make.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#c2d9cc] leading-relaxed">
            See how Katixo compares directly to legacy cloud monoliths and desktop accounting software.
          </p>
        </div>

        {/* DualEntry Key Hard-Metric Stats Row */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#10271e]/90 p-5 sm:p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b3ed97]">
              <Clock className="h-4 w-4" />
              Close Books
            </div>
            <div className="mt-3 text-3xl sm:text-4xl font-bold text-white font-heading">
              24 Hours
            </div>
            <p className="mt-1.5 text-xs text-[#c2d9cc]">
              Down from 15 to 20 days on legacy ERPs.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#10271e]/90 p-5 sm:p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b3ed97]">
              <Shield className="h-4 w-4" />
              Setup Costs
            </div>
            <div className="mt-3 text-3xl sm:text-4xl font-bold text-white font-heading">
              ₹0 Fees
            </div>
            <p className="mt-1.5 text-xs text-[#c2d9cc]">
              Save ₹25L+ in implementation consulting.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#10271e]/90 p-5 sm:p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b3ed97]">
              <Zap className="h-4 w-4" />
              Transaction Scale
            </div>
            <div className="mt-3 text-3xl sm:text-4xl font-bold text-white font-heading">
              10x More
            </div>
            <p className="mt-1.5 text-xs text-[#c2d9cc]">
              Process 10x transactions with same headcount.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#10271e]/90 p-5 sm:p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b3ed97]">
              <Sparkles className="h-4 w-4" />
              Autonomous Match
            </div>
            <div className="mt-3 text-3xl sm:text-4xl font-bold text-white font-heading">
              99.4%
            </div>
            <p className="mt-1.5 text-xs text-[#c2d9cc]">
              Review exceptions only, never individual rows.
            </p>
          </div>
        </div>

        {/* Detailed Benchmark Table */}
        <div className="mt-12 overflow-x-auto rounded-3xl border border-white/10 bg-[#10271e]/80 shadow-2xl backdrop-blur-xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 bg-[#0a1812]/80 text-xs font-bold uppercase tracking-wider">
                <th className="py-5 px-6 text-slate-400 w-[28%]">Capability</th>
                <th className="py-5 px-6 text-[#142d25] bg-[#b3ed97] w-[32%] rounded-t-xl">
                  <div className="flex items-center gap-2 font-heading text-sm">
                    <span>Katixo (AI-Native)</span>
                    <span className="rounded-full bg-[#142d25] px-2 py-0.5 text-[9px] font-bold text-[#b3ed97]">
                      Recommended
                    </span>
                  </div>
                </th>
                <th className="py-5 px-6 text-slate-300 w-[20%]">NetSuite / SAP</th>
                <th className="py-5 px-6 text-slate-400 w-[20%]">Tally / Busy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">
                    <div className="text-[10px] uppercase font-bold text-[#b3ed97]/80 tracking-wider">
                      {row.category}
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">{row.feature}</div>
                  </td>
                  <td className="py-4 px-6 bg-[#b3ed97]/10 border-x border-[#b3ed97]/20 font-medium text-white">
                    <div className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b3ed97] text-[#142d25] mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className="font-semibold text-white">{row.katixo.text}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-300">
                    <div className="flex items-start gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 mt-0.5">
                        <X className="h-2.5 w-2.5" />
                      </span>
                      <span className="text-xs text-slate-300">{row.legacyCloud.text}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    <div className="flex items-start gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-500 mt-0.5">
                        <X className="h-2.5 w-2.5" />
                      </span>
                      <span className="text-xs text-slate-400">{row.desktop.text}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 rounded-2xl border border-[#b3ed97]/30 bg-gradient-to-r from-[#142d25] to-[#10241d] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Ready to break free from legacy ERP complexity?
            </h3>
            <p className="mt-1 text-sm text-[#c2d9cc]">
              Sign up today. Your live data imported and operational tomorrow.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 rounded-full bg-[#b3ed97] px-7 py-3 text-sm font-bold text-[#142d25] shadow-lg hover:bg-[#a6e688] transition-all hover:scale-105"
          >
            Switch to Katixo &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
