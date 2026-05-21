"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const sidebarItems = [
  { label: "Overview", active: true },
  { label: "Sales" },
  { label: "Purchases" },
  { label: "Banking" },
  { label: "Accounting" },
  { label: "Contacts" },
  { label: "Reports" },
  { label: "Settings" },
];

const topMetrics = [
  { label: "Total Revenue", value: "₹83,40,569", change: "+12.6%", positive: true },
  { label: "Net Profit", value: "₹12,30,859", change: "+8.4%", positive: true },
  { label: "Expenses", value: "₹23,40,689", change: "-3.7%", positive: false },
  { label: "Outstanding", value: "₹34,50,981", change: "+5.1%", positive: true },
];

const revenuePoints = [28, 32, 30, 38, 36, 42, 40, 52, 55, 62, 58, 68];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const transactions = [
  { date: "Jun 18", desc: "Payment from Globex Corp.", amount: "₹45,800", status: "Completed", color: "#16A34A" },
  { date: "Jun 17", desc: "Office Supplies", amount: "₹1,250", status: "Approved", color: "#2563EB" },
  { date: "Jun 16", desc: "Software Subscription", amount: "₹3,600", status: "Approved", color: "#2563EB" },
];

const bills = [
  { vendor: "Tech Solutions Ltd.", amount: "₹6,120", due: "Jun 25" },
  { vendor: "Marketing Agency", amount: "₹2,980", due: "Jun 28" },
  { vendor: "Office Warehouse", amount: "₹1,230", due: "Jun 30" },
];

const cashFlowData = [
  { label: "Operating", value: "₹2.45M", color: "#0D9488" },
  { label: "Investing", value: "₹1.15M", color: "#10B981" },
  { label: "Financing", value: "₹650K", color: "#6366F1" },
];

const phoneMetrics = [
  { label: "Total Revenue", value: "₹83,40,569", sub: "This month", change: "+12.6%" },
  { label: "Net Profit", value: "₹12,30,859", sub: "", change: "+8.4%" },
  { label: "Cash flow", value: "₹4.25M", sub: "Total", change: "" },
];

export function HeroWorkspace() {
  const reduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loaderMs = reduceMotion ? 180 : 1500;
    const openMs = reduceMotion ? 220 : 2200;
    const t1 = setTimeout(() => setShowLoader(false), loaderMs);
    const t2 = setTimeout(() => setIsOpen(true), openMs);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [reduceMotion]);

  const linePath = useMemo(() => {
    const w = 320;
    const h = 100;
    return revenuePoints
      .map((p, i) => {
        const x = (i / (revenuePoints.length - 1)) * w;
        const y = h - (p / 75) * h;
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ");
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="hero-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.18 : 0.5 } }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#06101d]"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={reduceMotion ? false : { scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                className="relative"
              >
                <div aria-hidden className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_65%)] blur-3xl" />
                <div className="relative flex flex-col items-center">
                  <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                    <Image src="/images/logo-white.svg" alt="Katixo logo" width={180} height={44} className="h-11 w-auto sm:h-12" priority />
                  </div>
                  <div className="mt-5 text-sm font-medium tracking-[0.28em] text-slate-400">KATIXO</div>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2">
                  {[0, 1, 2].map((d) => (
                    <motion.span key={d} animate={{ opacity: [0.28, 1, 0.28], y: [0, -2, 0] }} transition={{ duration: 1, repeat: Infinity, delay: d * 0.12 }} className="h-2.5 w-2.5 rounded-full bg-white/70" />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Devices */}
      <div className="relative w-full" style={{ perspective: "2200px" }}>
        {/* Base glow */}
        <div aria-hidden className="pointer-events-none absolute -bottom-4 left-[2%] right-[2%] h-24 rounded-[50%] bg-[radial-gradient(ellipse,rgba(34,211,238,0.35),rgba(56,189,248,0.15)_40%,transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-1 left-[5%] right-[5%] h-[3px] rounded-full bg-cyan-300/40 shadow-[0_0_30px_rgba(103,232,249,0.4)]" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 1.65 }}
          className="relative"
        >
          {/* ─── LAPTOP ─── */}
          <motion.div
            animate={{
              rotateX: isOpen ? 5 : 10,
              rotateY: isOpen ? -6 : -10,
              scale: isOpen ? 1 : 0.96,
            }}
            transition={{ duration: reduceMotion ? 0.3 : 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-[92%] max-w-[720px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Screen */}
            <motion.div
              animate={{ rotateX: isOpen ? 0 : -88 }}
              transition={{ duration: reduceMotion ? 0.3 : 2.5, delay: reduceMotion ? 0 : 0.3, ease: [0.2, 0.9, 0.24, 1] }}
              className="relative z-20 origin-bottom rounded-t-[16px] border border-[#1e3148] bg-[#0f1923] shadow-[0_-10px_60px_rgba(0,0,0,0.5)]"
              style={{ transformStyle: "preserve-3d", aspectRatio: "16/10" }}
            >
              <div className="absolute inset-[5px] sm:inset-[7px] overflow-hidden rounded-[12px] bg-[#f4f7fa]">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-3 py-1.5 sm:py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]" />
                    <span className="h-[6px] w-[6px] rounded-full bg-[#febc2e]" />
                    <span className="h-[6px] w-[6px] rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex w-[28%] items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5">
                    <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#94a3b8" strokeWidth="1.5"/><line x1="11" y1="11" x2="14" y2="14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    <span className="text-[7px] text-slate-400 sm:text-[8px]">Search...</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded-full bg-slate-100" />
                    <div className="rounded-md bg-[#0D9488] px-2 py-0.5 text-[7px] font-semibold text-white sm:text-[8px]">+ New</div>
                  </div>
                </div>

                {/* App layout: sidebar + main */}
                <div className="grid h-[calc(100%-28px)] grid-cols-[60px_1fr] sm:grid-cols-[72px_1fr]">
                  {/* Sidebar */}
                  <div className="flex flex-col border-r border-slate-200/80 bg-[#0f172a] px-1.5 py-2 text-white sm:px-2">
                    <div className="mb-3 flex items-center gap-1 px-1">
                      <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0D9488] text-[7px] font-bold sm:h-6 sm:w-6 sm:text-[8px]">A</div>
                      <div className="hidden text-[7px] font-semibold sm:block">Acme Inc.</div>
                    </div>
                    <div className="space-y-0.5">
                      {sidebarItems.map((item) => (
                        <div
                          key={item.label}
                          className={`rounded-md px-1.5 py-1 text-[6px] sm:text-[7px] ${
                            item.active
                              ? "bg-white/15 font-semibold text-white"
                              : "text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto space-y-1 border-t border-white/10 pt-2">
                      <div className="px-1.5 text-[6px] text-slate-500 sm:text-[7px]">Help & Support</div>
                      <div className="flex items-center gap-1 px-1.5">
                        <div className="h-4 w-4 rounded-full bg-slate-600" />
                        <div className="hidden sm:block">
                          <div className="text-[7px] font-medium">Olivia Rhye</div>
                          <div className="text-[6px] text-slate-500">Admin</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="overflow-hidden bg-white p-2 sm:p-3">
                    <div className="text-[9px] font-semibold text-slate-800 sm:text-sm">Overview</div>

                    {/* Top metric cards */}
                    <div className="mt-1.5 grid grid-cols-4 gap-1.5 sm:mt-2">
                      {topMetrics.map((m) => (
                        <div key={m.label} className="rounded-lg border border-slate-100 bg-slate-50/80 p-1.5 sm:p-2">
                          <div className="text-[5px] text-slate-400 sm:text-[7px]">{m.label}</div>
                          <div className="text-[8px] font-bold text-slate-800 sm:text-[11px]">{m.value}</div>
                          <div className={`text-[5px] font-medium sm:text-[7px] ${m.positive ? "text-emerald-500" : "text-rose-500"}`}>
                            {m.change} <span className="text-slate-400">vs last month</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Charts row */}
                    <div className="mt-2 grid grid-cols-[1.4fr_0.6fr] gap-1.5 sm:mt-3">
                      {/* Revenue trend */}
                      <div className="rounded-lg border border-slate-100 p-1.5 sm:p-2">
                        <div className="mb-1 flex items-center justify-between">
                          <div className="text-[6px] font-semibold text-slate-700 sm:text-[8px]">Revenue trend</div>
                          <div className="flex gap-1">
                            <div className="rounded border border-slate-200 px-1 py-0.5 text-[5px] text-slate-400 sm:text-[6px]">This year</div>
                            <div className="rounded border border-slate-200 px-1 py-0.5 text-[5px] text-slate-400 sm:text-[6px]">Monthly</div>
                          </div>
                        </div>
                        <div className="relative h-[50px] w-full sm:h-[70px]">
                          <svg viewBox="0 0 320 100" fill="none" className="h-full w-full" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0D9488" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <motion.path
                              d={`${linePath} L320,100 L0,100 Z`}
                              fill="url(#lineGrad)"
                              initial={false}
                              animate={{ opacity: isOpen ? 1 : 0 }}
                              transition={{ duration: 1, delay: 1.5 }}
                            />
                            <motion.path
                              d={linePath}
                              stroke="#0D9488"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: isOpen ? 1 : 0 }}
                              transition={{ duration: reduceMotion ? 0.3 : 1.5, delay: reduceMotion ? 0 : 1.3 }}
                            />
                          </svg>
                          {/* X-axis labels */}
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-0.5">
                            {months.map((m) => (
                              <span key={m} className="text-[4px] text-slate-300 sm:text-[5px]">{m}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Cash flow donut */}
                      <div className="rounded-lg border border-slate-100 p-1.5 sm:p-2">
                        <div className="text-[6px] font-semibold text-slate-700 sm:text-[8px]">Cash flow summary</div>
                        <div className="mt-1 flex items-center justify-center">
                          <div className="relative h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]">
                            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                              <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                              <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#0D9488" strokeWidth="4" strokeDasharray="88" initial={{ strokeDashoffset: 88 }} animate={{ strokeDashoffset: isOpen ? 33 : 88 }} transition={{ duration: 1.2, delay: 1.4 }} />
                              <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="88" strokeDashoffset="55" initial={{ opacity: 0 }} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.5, delay: 1.8 }} />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <div className="text-[7px] font-bold text-slate-800 sm:text-[9px]">₹4.25M</div>
                              <div className="text-[4px] text-slate-400 sm:text-[5px]">Total</div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-1.5 space-y-0.5">
                          {cashFlowData.map((c) => (
                            <div key={c.label} className="flex items-center gap-1 text-[5px] sm:text-[6px]">
                              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                              <span className="text-slate-600">{c.label}</span>
                              <span className="ml-auto font-medium text-slate-800">{c.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tables row */}
                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      {/* Recent transactions */}
                      <div className="rounded-lg border border-slate-100 p-1.5">
                        <div className="mb-1 flex items-center justify-between">
                          <div className="text-[6px] font-semibold text-slate-700 sm:text-[7px]">Recent transactions</div>
                          <div className="text-[5px] text-[#0D9488] sm:text-[6px]">View all</div>
                        </div>
                        <div className="space-y-0.5">
                          {transactions.map((t) => (
                            <div key={t.desc} className="flex items-center justify-between text-[5px] sm:text-[6px]">
                              <div className="flex items-center gap-1 truncate">
                                <span className="text-slate-400">{t.date}</span>
                                <span className="truncate text-slate-700">{t.desc}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="font-medium text-slate-800">{t.amount}</span>
                                <span className="rounded px-1 py-0.5 text-[4px] font-medium text-white sm:text-[5px]" style={{ backgroundColor: t.color }}>{t.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bills to approve */}
                      <div className="rounded-lg border border-slate-100 p-1.5">
                        <div className="mb-1 flex items-center justify-between">
                          <div className="text-[6px] font-semibold text-slate-700 sm:text-[7px]">Bills to approve</div>
                          <div className="text-[5px] text-[#0D9488] sm:text-[6px]">View all</div>
                        </div>
                        <div className="space-y-0.5">
                          {bills.map((b) => (
                            <div key={b.vendor} className="flex items-center justify-between text-[5px] sm:text-[6px]">
                              <span className="truncate text-slate-700">{b.vendor}</span>
                              <div className="flex items-center gap-1">
                                <span className="font-medium text-slate-800">{b.amount}</span>
                                <span className="text-slate-400">{b.due}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Keyboard base */}
            <div className="relative z-10 -mt-px w-full">
              <div className="h-[12px] rounded-t-[12px] border border-white/10 bg-gradient-to-b from-[#a4b0c0] via-[#8b9aaf] to-[#78879b] sm:h-[16px] sm:rounded-t-[16px]" />
              <div className="h-[24px] rounded-b-[18px] border-x border-b border-white/8 bg-gradient-to-b from-[#8493a7] to-[#637287] shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:h-[30px] sm:rounded-b-[22px]">
                <div className="mx-auto mt-[8px] h-[2px] w-[18%] rounded-full bg-white/35 sm:mt-[11px] sm:h-[3px]" />
              </div>
              {/* Keys */}
              <div className="absolute left-[8%] right-[8%] top-[3px] grid grid-cols-12 gap-[2px] opacity-75 sm:top-[4px] sm:gap-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="h-[3px] rounded-[1.5px] border border-slate-900/20 bg-[#4f5f74] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-[4px]" />
                ))}
              </div>
              {/* Trackpad */}
              <div className="absolute inset-x-[32%] bottom-[4px] h-[12px] rounded-lg border border-slate-900/15 bg-[#78879b] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] sm:bottom-[5px] sm:h-[14px]" />
            </div>
          </motion.div>

          {/* ─── PHONE ─── */}
          <motion.div
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 40,
              x: isOpen ? 0 : 20,
            }}
            transition={{ duration: reduceMotion ? 0.25 : 0.9, delay: reduceMotion ? 0 : 1.8 }}
            className="absolute bottom-[8%] right-[2%] z-30 w-[22%] min-w-[110px] max-w-[160px] sm:right-[0%]"
            style={{ transform: "rotateY(-4deg)", transformStyle: "preserve-3d" }}
          >
            <div className="rounded-[20px] border-[4px] border-[#111827] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] sm:rounded-[24px] sm:border-[5px]">
              {/* Notch */}
              <div className="mx-auto mt-1.5 h-[14px] w-[48px] rounded-full bg-[#0f172a] sm:h-[16px] sm:w-[56px]" />

              <div className="p-2 sm:p-2.5">
                {/* Phone header */}
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[8px] font-semibold text-slate-800 sm:text-[10px]">Overview</div>
                  <div className="flex items-center gap-1">
                    <span className="text-[6px] text-slate-400 sm:text-[7px]">Due month</span>
                    <div className="h-4 w-4 rounded-full bg-slate-100" />
                  </div>
                </div>

                {/* Phone metrics */}
                <div className="space-y-1.5">
                  {phoneMetrics.map((m, i) => (
                    <div key={m.label} className="rounded-xl border border-slate-100 bg-slate-50/80 p-1.5 sm:p-2">
                      <div className="flex items-center justify-between">
                        <div className="text-[5px] text-slate-400 sm:text-[6px]">{m.label}</div>
                        {m.sub && <div className="text-[5px] text-slate-400 sm:text-[6px]">{m.sub}</div>}
                      </div>
                      <div className="text-[9px] font-bold text-slate-800 sm:text-[11px]">{m.value}</div>
                      {m.change && (
                        <div className="text-[5px] font-medium text-emerald-500 sm:text-[6px]">{m.change} <span className="text-slate-400">vs last month</span></div>
                      )}
                      {i === 2 && (
                        <div className="mt-1 flex items-center justify-center">
                          <div className="relative h-[28px] w-[28px] sm:h-[32px] sm:w-[32px]">
                            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                              <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                              <circle cx="18" cy="18" r="14" fill="none" stroke="#0D9488" strokeWidth="4" strokeDasharray="88" strokeDashoffset="33" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Phone bills */}
                <div className="mt-2">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-[6px] font-semibold text-slate-700 sm:text-[7px]">Bills to approve</div>
                    <div className="text-[5px] text-[#0D9488] sm:text-[6px]">View all</div>
                  </div>
                  <div className="space-y-1">
                    {bills.map((b) => (
                      <div key={b.vendor} className="rounded-lg border border-slate-100 bg-slate-50 p-1.5">
                        <div className="flex items-start justify-between gap-1">
                          <div>
                            <div className="text-[6px] font-medium text-slate-700 sm:text-[7px]">{b.vendor}</div>
                            <div className="text-[5px] text-slate-400 sm:text-[6px]">{b.amount} · due {b.due}</div>
                          </div>
                          <div className="shrink-0 rounded-md bg-emerald-500 px-1.5 py-0.5 text-[5px] font-semibold text-white sm:text-[6px]">Approve</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="flex items-center justify-around border-t border-slate-100 px-2 py-1.5">
                {["Overview", "Txns", "Contacts", "More"].map((tab, i) => (
                  <div key={tab} className="flex flex-col items-center gap-0.5">
                    <div className={`h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3 ${i === 0 ? "bg-[#0D9488]" : "bg-slate-200"}`} />
                    <span className={`text-[4px] sm:text-[5px] ${i === 0 ? "font-semibold text-[#0D9488]" : "text-slate-400"}`}>{tab}</span>
                  </div>
                ))}
              </div>

              {/* Home indicator */}
              <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-slate-200" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
