"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Truck,
  Pill,
  ShoppingBag,
  FileSpreadsheet,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type VerticalTab = "pharma" | "fmcg" | "kirana" | "reports";

export function InteractiveVerticalSimulator() {
  const [activeTab, setActiveTab] = useState<VerticalTab>("pharma");
  const [safetyChecked, setSafetyChecked] = useState(false);

  return (
    <section className="border-t bg-slate-50/70 py-16 dark:bg-[#0c1424] md:py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive Industry Simulator
          </div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            See how Katixo adapts to your exact workflow.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            No generic spreadsheets. Katixo switches interfaces and domain controls for pharmacy safety,
            field route delivery, fast counter retail, or multi-branch reporting.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            { id: "pharma", label: "Pharma & Chemist", icon: Pill },
            { id: "fmcg", label: "FMCG & Van Sales", icon: Truck },
            { id: "kirana", label: "Kirana & Supermarket", icon: ShoppingBag },
            { id: "reports", label: "Custom Reports & Payroll", icon: FileSpreadsheet },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as VerticalTab);
                  setSafetyChecked(false);
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10 dark:bg-emerald-600 dark:text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? "text-emerald-400" : "text-slate-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Simulation Window */}
        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl dark:border-white/10 dark:bg-[#07111f]">
          {/* Top Window Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 dark:border-white/5 dark:bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                app.katixo.com/workspace/{activeTab}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Engine Active
              </span>
            </div>
          </div>

          {/* Tab 1: Pharma */}
          {activeTab === "pharma" && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-800 dark:bg-teal-900/40 dark:text-teal-300">
                      PHARMA POS & DISPENSARY
                    </span>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                      SCHEDULE H1 COMPLIANT
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    Apollo Chemist Counter #2 &mdash; Patient: Ramesh Sharma (Dr. Joshi Clinic)
                  </h3>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSafetyChecked(!safetyChecked)}
                  className="gap-2"
                >
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  {safetyChecked ? "Safety Verified" : "Run Clinical Safety Check"}
                </Button>
              </div>

              {safetyChecked && (
                <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-900 dark:border-emerald-800/40 dark:bg-emerald-950/20 dark:text-emerald-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Clinical Interaction Passed:</strong> Zero contraindicated or severe drug-drug interactions detected between Augmentin and Paracetamol.
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                    CDSCO Master OK
                  </span>
                </div>
              )}

              {/* Items Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 dark:border-white/5">
                      <th className="pb-3">Drug / Brand</th>
                      <th className="pb-3">Batch & Expiry</th>
                      <th className="pb-3">Rack</th>
                      <th className="pb-3">HSN (GST 2.0)</th>
                      <th className="pb-3 text-right">Qty</th>
                      <th className="pb-3 text-right">Price</th>
                      <th className="pb-3 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    <tr>
                      <td className="py-3 font-semibold text-slate-800 dark:text-slate-200">
                        Augmentin 625 Duo (Amoxicillin + Clavulanic)
                        <span className="ml-2 inline-block rounded bg-rose-100 px-1.5 py-0.2 text-[10px] font-bold text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
                          Rx Required
                        </span>
                      </td>
                      <td className="py-3 font-mono text-xs text-slate-500">AUG-26A (Exp 11/2028)</td>
                      <td className="py-3 text-xs font-medium text-slate-600 dark:text-slate-300">Shelf B-04</td>
                      <td className="py-3 text-xs font-mono text-slate-500">30041010 (5%)</td>
                      <td className="py-3 text-right font-medium">20 tabs</td>
                      <td className="py-3 text-right">₹18.50</td>
                      <td className="py-3 text-right font-bold text-slate-900 dark:text-white">₹388.50</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-800 dark:text-slate-200">
                        Calpol 650 Fast Release (Paracetamol)
                      </td>
                      <td className="py-3 font-mono text-xs text-slate-500">CLP-998 (Exp 04/2027)</td>
                      <td className="py-3 text-xs font-medium text-slate-600 dark:text-slate-300">Front Drawer A</td>
                      <td className="py-3 text-xs font-mono text-slate-500">30049060 (5%)</td>
                      <td className="py-3 text-right font-medium">15 tabs</td>
                      <td className="py-3 text-right">₹2.10</td>
                      <td className="py-3 text-right font-bold text-slate-900 dark:text-white">₹33.08</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-4 dark:bg-white/[0.03]">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  ⚡ <strong>FEFO Auto-Allocation:</strong> Nearest expiry batch AUG-26A auto-selected from rack Shelf B-04.
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm" asChild>
                    <Link href="/docs/pharma">
                      Explore Pharma API <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: FMCG */}
          {activeTab === "fmcg" && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-indigo-100 px-2 py-0.5 text-xs font-bold text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
                      ROUTE BEAT &amp; VAN STOCK
                    </span>
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                      EVENING CLOSE READY
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    Route 04 (Indiranagar Beat) &mdash; Salesman: Rajesh Kumar (Van MH-12-DE-5678)
                  </h3>
                </div>
                <span className="text-sm font-semibold text-emerald-600">
                  Visits: 22/24 Completed (91.6%)
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                  <p className="text-xs text-slate-500">Morning Van Stock Loaded</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">180 Cases</p>
                  <p className="text-xs text-slate-400">₹1,44,000 inventory value</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                  <p className="text-xs text-slate-500">Delivered &amp; Invoiced</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-600">162 Cases</p>
                  <p className="text-xs text-emerald-600/80">90% drop rate</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
                  <p className="text-xs text-slate-500">Returns to Warehouse</p>
                  <p className="mt-1 text-2xl font-bold text-amber-600">18 Cases</p>
                  <p className="text-xs text-slate-400">Damage checked: 0</p>
                </div>
              </div>

              {/* Day-close reconciliation */}
              <div className="mt-6 rounded-xl border border-slate-200/80 p-5 dark:border-white/10">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Cash Reconciliation &amp; Route Sign-Off
                </h4>
                <div className="mt-3 grid gap-3 text-sm sm:grid-cols-4">
                  <div>
                    <span className="text-xs text-slate-400">Opening Float</span>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">₹5,000.00</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">Cash Collections</span>
                    <p className="font-semibold text-emerald-600">+ ₹52,400.00</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">Fuel &amp; Toll Expense</span>
                    <p className="font-semibold text-rose-500">- ₹750.00</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">Cash Deposited (Bank)</span>
                    <p className="font-bold text-slate-900 dark:text-white">₹56,650.00</p>
                    <span className="inline-block rounded bg-emerald-100 px-1.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      Variance: ₹0.00 (Zero Deficit)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button size="sm" asChild>
                  <Link href="/docs/field-sales">
                    Explore Field Sales API <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Tab 3: Kirana */}
          {activeTab === "kirana" && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                      RAPID BARCODE COUNTER
                    </span>
                    <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                      OFFLINE-FIRST POS
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    Shiv Grocery Supermarket &mdash; Counter 1 (Instant Thermal Print)
                  </h3>
                </div>
                <span className="font-mono text-xs text-slate-400">Avg Scan Time: 1.8s/item</span>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 dark:border-white/5">
                      <th className="pb-3">Barcode / Item</th>
                      <th className="pb-3">Tax Type</th>
                      <th className="pb-3">HSN (GST 2.0)</th>
                      <th className="pb-3 text-right">Qty</th>
                      <th className="pb-3 text-right">Price</th>
                      <th className="pb-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    <tr>
                      <td className="py-3 font-semibold text-slate-800 dark:text-slate-200">
                        Loose Chana Dal (Unbranded)
                      </td>
                      <td className="py-3 text-xs text-emerald-600 font-semibold">Exempt (0%)</td>
                      <td className="py-3 font-mono text-xs text-slate-500">07133100</td>
                      <td className="py-3 text-right font-medium">5 kg</td>
                      <td className="py-3 text-right">₹92.00</td>
                      <td className="py-3 text-right font-bold">₹460.00</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-800 dark:text-slate-200">
                        Amul Pure Ghee 1L Tin
                      </td>
                      <td className="py-3 text-xs text-blue-600 font-semibold">Taxable (12%)</td>
                      <td className="py-3 font-mono text-xs text-slate-500">04059090</td>
                      <td className="py-3 text-right font-medium">2 units</td>
                      <td className="py-3 text-right">₹590.00</td>
                      <td className="py-3 text-right font-bold">₹1,321.60</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200/80 p-4 dark:border-white/10">
                <div>
                  <span className="text-xs text-slate-400">Customer Khata (Credit Control)</span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Suresh Patil &bull; Outstanding ₹1,250 / Limit ₹5,000 &bull;{" "}
                    <span className="text-emerald-600 font-bold">Credit Allowed</span>
                  </p>
                </div>
                <Button size="sm" asChild>
                  <Link href="/accounting-pos-software">
                    View Counter POS Features <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Tab 4: Custom Reports & Payroll */}
          {activeTab === "reports" && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
                      AD-HOC QUERY ENGINE
                    </span>
                    <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-bold text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                      AUTOMATED CRON DIGESTS
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    Custom Report: &ldquo;High-Risk Receivables &gt; 30 Days with Overdue Interest&rdquo;
                  </h3>
                </div>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400">
                  Runs every Monday @ 08:30 AM
                </span>
              </div>

              <div className="mt-6 rounded-xl bg-slate-900 p-4 text-xs font-mono text-slate-200">
                <div className="text-slate-500">// Report Query Definition (JSON Filters &amp; Selected Columns)</div>
                <div className="mt-2">
                  <span className="text-emerald-400">&quot;columns&quot;</span>: [&quot;invoiceNo&quot;, &quot;customerName&quot;, &quot;daysOverdue&quot;, &quot;balanceDue&quot;, &quot;lastContactDate&quot;],
                </div>
                <div>
                  <span className="text-emerald-400">&quot;filter&quot;</span>: &#123; <span className="text-amber-400">&quot;balanceDue_gt&quot;</span>: 25000, <span className="text-amber-400">&quot;daysOverdue_gt&quot;</span>: 30 &#125;,
                </div>
                <div>
                  <span className="text-emerald-400">&quot;schedule&quot;</span>: &#123; <span className="text-amber-400">&quot;frequency&quot;</span>: &quot;WEEKLY&quot;, <span className="text-amber-400">&quot;recipients&quot;</span>: [&quot;cfo@acme.in&quot;, &quot;auditor@ca-firm.com&quot;] &#125;
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Integrated with Indian Payroll (PF 12%, ESI, PT slabs, and direct double-entry journal vouchers).
                </div>
                <Button size="sm" asChild>
                  <Link href="/docs/custom-reports">
                    Explore Reporting API <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
