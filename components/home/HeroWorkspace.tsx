"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BellDot, Bot, CheckCircle2, Sparkles } from "lucide-react";

const metrics = [
  { label: "Cash visibility", value: "98.4%", tone: "bg-emerald-400" },
  { label: "Reconciled", value: "1,284", tone: "bg-sky-400" },
  { label: "Exceptions", value: "12", tone: "bg-amber-400" },
];

const tasks = [
  { name: "Close checklist", status: "On track" },
  { name: "Vendor review", status: "4 flagged" },
  { name: "Revenue sync", status: "Auto-running" },
];

const rows = [
  { company: "Northline Logistics", amount: "$84,200", tag: "Revenue" },
  { company: "Meridian Foods", amount: "$22,440", tag: "Payables" },
  { company: "Aster Retail", amount: "$41,980", tag: "Collections" },
  { company: "Valence Health", amount: "$18,600", tag: "Review" },
];

export function HeroWorkspace() {
  return (
    <div className="relative hidden w-[680px] max-w-[48vw] items-center justify-center lg:flex">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-12 top-8 z-20 rounded-2xl border border-white/15 bg-[#10233f]/85 px-4 py-3 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 text-white">
            <div className="rounded-xl bg-emerald-400/15 p-2 text-emerald-300">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-slate-400">
                Katixo Assist
              </div>
              <div className="text-sm font-semibold">
                11 approvals suggested
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute -left-10 bottom-12 z-20 rounded-2xl border border-white/15 bg-white/90 px-4 py-3 shadow-2xl"
        >
          <div className="flex items-center gap-3 text-slate-900">
            <div className="rounded-xl bg-orange-100 p-2 text-orange-500">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Daily review
              </div>
              <div className="text-sm font-semibold">
                Close tasks reduced by 37%
              </div>
            </div>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0e1d34]/90 shadow-[0_32px_90px_rgba(7,12,20,0.55)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#101f38] px-5 py-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                Katixo Workspace
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <BellDot className="h-4 w-4" />
              <div className="rounded-full bg-white/5 px-3 py-1 text-xs">
                Finance OS
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[88px_1fr_200px]">
            <aside className="border-r border-white/10 bg-[#0a1528] px-3 py-4">
              <div className="space-y-2">
                {["Overview", "Ledger", "Revenue", "Approvals", "Analytics"].map((item, idx) => (
                  <div
                    key={item}
                    className={`rounded-xl px-3 py-2 text-xs font-medium ${
                      idx === 0 ? "bg-white text-slate-900" : "text-slate-400"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <main className="bg-[#0f1b31] p-5">
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="text-xs uppercase tracking-[0.12em] text-slate-400">
                          {metric.label}
                        </div>
                        <span className={`h-2.5 w-2.5 rounded-full ${metric.tone}`} />
                      </div>
                      <div className="text-2xl font-semibold text-white">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-[1.3fr_0.9fr] gap-4">
                  <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.12em] text-slate-400">
                          Operating dashboard
                        </div>
                        <div className="mt-1 text-lg font-semibold text-white">
                          Accounting and workflow visibility
                        </div>
                      </div>
                      <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        Live sync
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#09111f] p-4">
                      <div className="mb-3 flex items-end justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-[0.12em] text-slate-500">
                            Monthly throughput
                          </div>
                          <div className="text-3xl font-semibold text-white">$1.82M</div>
                        </div>
                        <div className="text-sm font-medium text-emerald-300">+18.2%</div>
                      </div>
                      <div className="flex h-32 items-end gap-2">
                        {[42, 58, 55, 74, 63, 88, 94, 86, 110, 102, 118, 132].map((height, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ height: 0 }}
                            animate={{ height }}
                            transition={{ duration: 0.7, delay: 0.08 * idx }}
                            className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald-400 to-sky-400/70"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-400">
                      Priority queue
                    </div>
                    <div className="mt-4 space-y-3">
                      {tasks.map((task) => (
                        <div key={task.name} className="rounded-2xl bg-[#09111f] px-4 py-3">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-sm font-medium text-white">{task.name}</div>
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                          </div>
                          <div className="mt-1 text-xs text-slate-400">{task.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.12em] text-slate-400">
                        Account window
                      </div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        Review and reconcile faster
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400" />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/6">
                    {rows.map((row, idx) => (
                      <div
                        key={row.company}
                        className={`grid grid-cols-[1.4fr_0.7fr_0.6fr] items-center gap-3 px-4 py-3 ${
                          idx !== rows.length - 1 ? "border-b border-white/6" : ""
                        }`}
                      >
                        <div className="text-sm font-medium text-white">{row.company}</div>
                        <div className="text-sm text-slate-300">{row.amount}</div>
                        <div className="justify-self-start rounded-full bg-white/8 px-2.5 py-1 text-xs text-slate-300">
                          {row.tag}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            <aside className="border-l border-white/10 bg-[#0c182c] p-4">
              <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.12em] text-slate-400">
                  Today at Katixo
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Revenue exceptions grouped",
                    "Approvals bundled for review",
                    "Cash snapshot updated",
                    "14 anomalies summarized",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-[#09111f] px-3 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
