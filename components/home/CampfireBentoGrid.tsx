import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Layers,
  BarChart3,
  CheckCircle2,
  Receipt,
  FileCheck2,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CampfireBentoGrid() {
  return (
    <section className="border-t bg-slate-50/50 py-20 dark:bg-[#070e1a] md:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <Cpu className="h-3.5 w-3.5" />
            Accounting Intelligence
          </div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl text-balance">
            One platform for general ledger, close management, and domain operations.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Built for Indian complexity, multi-branch scale, and statutory compliance. Replace spreadsheet chaos with autonomous accounting.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {/* Tile 1: Close Management & Autonomous Reconciliations (Spans 7 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-white/10 dark:bg-[#0d1829] lg:col-span-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                <FileCheck2 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                Autonomous Close &amp; Bank Matching
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Month-end shouldn&apos;t take all month. Katixo parses bank PDF/CSV statements, matches transactions via fuzzy UTR references, and auto-posts clearing journals.
              </p>
            </div>

            {/* Mockup Card */}
            <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Bank Feed &bull; HDFC Current A/c #9412</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-600 dark:text-emerald-400 font-bold">
                  99.4% Match Confidence
                </span>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
                <div>
                  <div className="text-xs text-slate-400">NEFT-INW/429811/GLOBEX CORP/INV-1042</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">₹1,45,800.00 Received</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-slate-100 px-2 py-1 text-xs font-mono font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    &rarr; Applied to KX-1042
                  </span>
                  <span className="rounded-full bg-emerald-500 p-1 text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Cuts close time from 10 days to 2 days
              </span>
              <Link href="/docs/banking" className="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400">
                Explore Banking API <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Tile 2: Exceptions-First AI Review (Spans 5 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-white/10 dark:bg-[#0d1829] lg:col-span-5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                Review Exceptions, Not Every Row
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Let AI highlight what matters. Clean transactions flow straight to the ledger, while anomalies enter a prioritized decision inbox.
              </p>
            </div>

            {/* AI Review Queue Mock */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center justify-between rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-xs">
                <span className="font-semibold text-amber-800 dark:text-amber-300">Duplicate Vendor Bill Flagged</span>
                <span className="rounded bg-amber-500/20 px-2 py-0.5 font-bold text-amber-800 dark:text-amber-300">₹14,500</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-rose-500/20 bg-rose-500/5 p-3 text-xs">
                <span className="font-semibold text-rose-800 dark:text-rose-300">GST Rate Mismatch on HSN 3004</span>
                <span className="rounded bg-rose-500/20 px-2 py-0.5 font-bold text-rose-800 dark:text-rose-300">5% vs 12%</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 text-xs">
                <span className="font-semibold text-blue-800 dark:text-blue-300">Customer Overdue &gt; 45 Days</span>
                <span className="rounded bg-blue-500/20 px-2 py-0.5 font-bold text-blue-800 dark:text-blue-300">Hold Dispatch</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <Link href="/docs/ai" className="inline-flex items-center text-sm font-bold text-purple-600 hover:text-purple-700 dark:text-purple-400">
                View AI Decision Guardrails <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Tile 3: Real-Time Drilldown Reporting & Custom Builder (Spans 5 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-white/10 dark:bg-[#0d1829] lg:col-span-5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                Live Drilldown Reporting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Click any balance sheet or P&amp;L figure to drill down directly into the underlying invoice or journal voucher. Build ad-hoc reports and automate email delivery.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 p-4 font-mono text-xs text-slate-200">
              <div className="text-slate-400">// Custom Report Schedule</div>
              <div className="mt-1 text-emerald-400">frequency: &quot;WEEKLY&quot;</div>
              <div className="text-blue-300">recipients: [&quot;cfo@katixo.com&quot;, &quot;auditor@ca.in&quot;]</div>
              <div className="text-amber-300">cron: Every Monday at 08:00 AM</div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <Link href="/docs/custom-reports" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                Report Builder Specs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Tile 4: Deep Domain Packs (Pharma, FMCG, Kirana, Payroll) (Spans 7 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-white/10 dark:bg-[#0d1829] lg:col-span-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                Deep Indian Domain Packs
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Generic ERPs like QuickBooks or NetSuite don&apos;t know Indian pharma FEFO or FMCG van stock. Katixo is customized out-of-the-box for your industry vertical.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-white/5 dark:bg-white/[0.02]">
                <p className="font-bold text-slate-900 dark:text-white text-sm">Pharma FEFO</p>
                <p className="text-xs text-slate-500">CDSCO safety &amp; Schedule H1</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-white/5 dark:bg-white/[0.02]">
                <p className="font-bold text-slate-900 dark:text-white text-sm">FMCG Van Stock</p>
                <p className="text-xs text-slate-500">Beats &amp; day-close reconciliation</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-white/5 dark:bg-white/[0.02]">
                <p className="font-bold text-slate-900 dark:text-white text-sm">Indian Payroll</p>
                <p className="text-xs text-slate-500">PF 12%, ESI, PT slabs &amp; TDS</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-white/5 dark:bg-white/[0.02]">
                <p className="font-bold text-slate-900 dark:text-white text-sm">GST 2.0 Engine</p>
                <p className="text-xs text-slate-500">Notif 9/2025 auto-resolution</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                100% on-premise or cloud deployable
              </span>
              <Link href="/docs/delivery-challans" className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400">
                Explore Fulfillment API <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
