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
  { label: "Revenue", value: "₹83.4L", change: "+12.6%" },
  { label: "Profit", value: "₹12.3L", change: "+8.4%" },
];

const phoneSparkline = [28, 35, 30, 42, 38, 52, 48, 58, 55, 65, 60, 68];

function Keyboard() {
  const rows: Array<{ keys: number[]; tall?: boolean }> = [
    { keys: Array(14).fill(1), tall: false },
    { keys: [...Array(12).fill(1), 1.5] },
    { keys: [1.5, ...Array(12).fill(1), 1.25] },
    { keys: [1.75, ...Array(11).fill(1), 2] },
    { keys: [2.25, ...Array(10).fill(1), 2.25] },
    { keys: [1.2, 1.2, 1.2, 1.2, 6, 1.2, 1.2, 1.2, 1.2] },
  ];

  return (
    <div
      className="rounded-md bg-gradient-to-b from-[#1f2937] to-[#0f172a] p-[6px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.55),inset_0_-1px_0_rgba(255,255,255,0.04)] sm:p-[8px]"
      style={{ display: "flex", flexDirection: "column", gap: "3px" }}
    >
      {rows.map((row, ri) => (
        <div key={ri} className="flex" style={{ gap: "3px" }}>
          {row.keys.map((flex, ki) => (
            <div
              key={ki}
              style={{ flex }}
              className={`relative rounded-[3px] border border-[#0a1322] bg-gradient-to-b from-[#4b5870] to-[#2f3a4d] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.35),0_1px_2px_rgba(0,0,0,0.4)] ${
                ri === 0 ? "h-[10px] sm:h-[12px]" : "h-[16px] sm:h-[18px]"
              }`}
            >
              <div
                aria-hidden
                className="absolute inset-[1px] rounded-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 45%, rgba(0,0,0,0.18) 100%)",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function HeroWorkspace() {
  const reduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loaderMs = reduceMotion ? 180 : 1500;
    const openMs = reduceMotion ? 220 : 2200;
    const t1 = setTimeout(() => setShowLoader(false), loaderMs);
    const t2 = setTimeout(() => setIsOpen(true), openMs);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
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

  const phoneSparkPath = useMemo(() => {
    const w = 80;
    const h = 30;
    return phoneSparkline
      .map((p, i) => {
        const x = (i / (phoneSparkline.length - 1)) * w;
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
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_65%)] blur-3xl"
                />
                <div className="relative flex flex-col items-center">
                  <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                    <Image
                      src="/images/logo-white.svg"
                      alt="Katixo logo"
                      width={180}
                      height={44}
                      className="h-11 w-auto sm:h-12"
                      priority
                    />
                  </div>
                  <div className="mt-5 text-sm font-medium tracking-[0.28em] text-slate-400">KATIXO</div>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ opacity: [0.28, 1, 0.28], y: [0, -2, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.12 }}
                      className="h-2.5 w-2.5 rounded-full bg-white/70"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D scene */}
      <div
        className="relative w-full"
        style={{
          perspective: "2200px",
          perspectiveOrigin: "50% 35%",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 1.65 }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Scene overhead tilt */}
          <div
            className="relative"
            style={{
              transform: "rotateX(10deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Laptop + phone side-by-side */}
            <div
              className="flex items-end justify-center gap-2"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* ─── LAPTOP ─── */}
              <motion.div
                animate={{
                  rotateY: isOpen ? -14 : -8,
                  scale: isOpen ? 1 : 0.96,
                }}
                transition={{ duration: reduceMotion ? 0.3 : 2.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[660px] shrink"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Ground shadow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 left-[6%] right-[6%] h-24 rounded-[50%] bg-black/35 blur-3xl"
                />

                {/* SCREEN (lid) — pivots on bottom edge */}
                <motion.div
                  animate={{ rotateX: isOpen ? -2 : -92 }}
                  transition={{
                    duration: reduceMotion ? 0.3 : 3.5,
                    delay: reduceMotion ? 0 : 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative z-20 rounded-t-[18px] border border-[#1e3148] bg-gradient-to-b from-[#1a2632] to-[#0f1923] shadow-[0_-10px_40px_rgba(0,0,0,0.45)]"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 100% 0",
                    aspectRatio: "16/10",
                  }}
                >
                  {/* Webcam */}
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-[3px] z-10 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#1a2632] ring-1 ring-white/5 sm:top-[4px] sm:h-[4px] sm:w-[4px]"
                  />
                  {/* Lid back face */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-t-[18px]"
                    style={{
                      background: "linear-gradient(160deg, #b4bdc9 0%, #98a4b4 50%, #828e9e 100%)",
                      transform: "translateZ(-3px)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                    }}
                  />

                  <div className="absolute inset-[6px] overflow-hidden rounded-[12px] bg-[#f4f7fa] sm:inset-[8px]">
                    {/* Browser bar */}
                    <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-3 py-1.5 sm:py-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]" />
                        <span className="h-[6px] w-[6px] rounded-full bg-[#febc2e]" />
                        <span className="h-[6px] w-[6px] rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex w-[28%] items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5">
                        <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
                          <circle cx="7" cy="7" r="5.5" stroke="#94a3b8" strokeWidth="1.5" />
                          <line x1="11" y1="11" x2="14" y2="14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-[7px] text-slate-400 sm:text-[8px]">acme.katixo.app</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 rounded-full bg-slate-100" />
                        <div className="rounded-md bg-[#0D9488] px-2 py-0.5 text-[7px] font-semibold text-white sm:text-[8px]">
                          + New
                        </div>
                      </div>
                    </div>

                    {/* App layout: sidebar + main */}
                    <div className="grid h-[calc(100%-28px)] grid-cols-[60px_1fr] sm:grid-cols-[72px_1fr]">
                      {/* Sidebar */}
                      <div className="flex flex-col border-r border-slate-200/80 bg-[#0f172a] px-1.5 py-2 text-white sm:px-2">
                        <div className="mb-3 flex items-center gap-1 px-1">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-[#0D9488] to-[#10B981] text-[7px] font-bold sm:h-6 sm:w-6 sm:text-[8px]">
                            A
                          </div>
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

                        {/* Metric cards */}
                        <div className="mt-1.5 grid grid-cols-4 gap-1.5 sm:mt-2">
                          {topMetrics.map((m) => (
                            <div
                              key={m.label}
                              className="rounded-lg border border-slate-100 bg-slate-50/80 p-1.5 sm:p-2"
                            >
                              <div className="text-[5px] text-slate-400 sm:text-[7px]">{m.label}</div>
                              <div className="text-[8px] font-bold text-slate-800 sm:text-[11px]">{m.value}</div>
                              <div
                                className={`text-[5px] font-medium sm:text-[7px] ${
                                  m.positive ? "text-emerald-500" : "text-rose-500"
                                }`}
                              >
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
                                <div className="rounded border border-slate-200 px-1 py-0.5 text-[5px] text-slate-400 sm:text-[6px]">
                                  This year
                                </div>
                                <div className="rounded border border-slate-200 px-1 py-0.5 text-[5px] text-slate-400 sm:text-[6px]">
                                  Monthly
                                </div>
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
                                  transition={{
                                    duration: reduceMotion ? 0.3 : 1.5,
                                    delay: reduceMotion ? 0 : 1.3,
                                  }}
                                />
                              </svg>
                              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-0.5">
                                {months.map((m) => (
                                  <span key={m} className="text-[4px] text-slate-300 sm:text-[5px]">
                                    {m}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Cash flow donut */}
                          <div className="rounded-lg border border-slate-100 p-1.5 sm:p-2">
                            <div className="text-[6px] font-semibold text-slate-700 sm:text-[8px]">Cash flow</div>
                            <div className="mt-1 flex items-center justify-center">
                              <div className="relative h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]">
                                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                                  <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                                  <motion.circle
                                    cx="18" cy="18" r="14" fill="none" stroke="#0D9488" strokeWidth="4"
                                    strokeDasharray="88"
                                    initial={{ strokeDashoffset: 88 }}
                                    animate={{ strokeDashoffset: isOpen ? 33 : 88 }}
                                    transition={{ duration: 1.2, delay: 1.4 }}
                                  />
                                  <motion.circle
                                    cx="18" cy="18" r="14" fill="none" stroke="#10B981" strokeWidth="4"
                                    strokeDasharray="88" strokeDashoffset="55"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isOpen ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 1.8 }}
                                  />
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
                                    <span
                                      className="rounded px-1 py-0.5 text-[4px] font-medium text-white sm:text-[5px]"
                                      style={{ backgroundColor: t.color }}
                                    >
                                      {t.status}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

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

                {/* HINGE — dark strip between lid and base */}
                <div
                  aria-hidden
                  className="relative z-10 h-[6px] w-full bg-gradient-to-b from-[#3a4a60] via-[#2c3a4d] to-[#1e2a3d] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_0_rgba(0,0,0,0.4)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-y-[1px] left-[8%] right-[8%] rounded-[2px] bg-gradient-to-b from-[#1f2a3d] to-[#0f172a]" />
                </div>

                {/* BASE — rotateX(78deg) lays it flat for horizontal keyboard */}
                <div
                  className="relative z-0 w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 0% 0",
                    transform: "rotateX(78deg)",
                  }}
                >
                  <div
                    className="relative rounded-b-[18px] bg-gradient-to-b from-[#c4cdd9] via-[#aeb8c6] to-[#95a1b1] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1),0_30px_60px_rgba(0,0,0,0.35)]"
                    style={{ padding: "16px 22px 22px" }}
                  >
                    {/* Base side thickness */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 -bottom-[10px] h-[10px] rounded-b-[18px] bg-gradient-to-b from-[#95a1b1] to-[#5e6d80]"
                      style={{ transform: "translateZ(-5px)" }}
                    />

                    <Keyboard />

                    {/* Trackpad */}
                    <div className="mx-auto mt-[12px] h-[36px] w-[40%] rounded-md border border-[#7a8a9e]/40 bg-gradient-to-b from-[#d4dde7] via-[#c0cad7] to-[#a7b3c1] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_2px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.15)] sm:mt-[14px] sm:h-[42px]" />
                  </div>
                </div>
              </motion.div>

              {/* ─── PHONE — vertical, beside laptop ─── */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 30,
                  rotateY: isOpen ? -22 : -35,
                }}
                transition={{
                  duration: reduceMotion ? 0.25 : 1.1,
                  delay: reduceMotion ? 0 : 1.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative -ml-3 w-[110px] flex-shrink-0 self-start sm:-ml-4 sm:w-[130px] md:w-[150px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Phone shadow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 left-0 right-0 h-12 rounded-[50%] bg-black/30 blur-2xl"
                />

                <div
                  className="relative w-full overflow-hidden rounded-[28px] border border-[#2a3441] bg-gradient-to-b from-[#1a2330] to-[#0f172a] p-[6px] shadow-[0_30px_70px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]"
                  style={{ aspectRatio: "9 / 19" }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-white">
                    {/* Dynamic Island */}
                    <div
                      aria-hidden
                      className="absolute left-1/2 top-[6px] z-10 h-[14px] w-[52px] -translate-x-1/2 rounded-full bg-[#0a0f1a] sm:h-[16px] sm:w-[60px]"
                    />

                    {/* Status bar */}
                    <div className="flex items-center justify-between px-3 pb-1 pt-2 text-[8px] font-semibold text-slate-900 sm:text-[9px]">
                      <span>9:41</span>
                      <span className="flex items-center gap-1">
                        <svg width="10" height="8" viewBox="0 0 24 20" fill="#0f172a">
                          <rect x="0" y="14" width="4" height="6" rx="1" />
                          <rect x="6" y="10" width="4" height="10" rx="1" />
                          <rect x="12" y="6" width="4" height="14" rx="1" />
                          <rect x="18" y="2" width="4" height="18" rx="1" />
                        </svg>
                        <svg width="13" height="8" viewBox="0 0 24 12" fill="none">
                          <rect x="1" y="1" width="20" height="10" rx="2" stroke="#0f172a" strokeWidth="1" />
                          <rect x="3" y="3" width="14" height="6" rx="1" fill="#0f172a" />
                        </svg>
                      </span>
                    </div>

                    {/* Content */}
                    <div className="px-2.5 pb-2 pt-6">
                      <div className="mb-2 text-[10px] font-bold text-slate-800 sm:text-[11px]">Dashboard</div>

                      {phoneMetrics.map((m) => (
                        <div
                          key={m.label}
                          className="mb-1.5 rounded-lg border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 px-2.5 py-1.5"
                        >
                          <div className="text-[7px] text-slate-400 sm:text-[8px]">{m.label}</div>
                          <div className="flex items-end justify-between">
                            <div className="text-[11px] font-bold text-slate-800 sm:text-[12px]">{m.value}</div>
                            <div className="text-[8px] font-semibold text-emerald-500 sm:text-[9px]">{m.change}</div>
                          </div>
                        </div>
                      ))}

                      <div className="mt-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5">
                        <div className="text-[7px] font-semibold text-slate-600 sm:text-[8px]">Trend</div>
                        <svg viewBox="0 0 80 30" fill="none" className="mt-1 h-[24px] w-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d={`${phoneSparkPath} L80,30 L0,30 Z`} fill="url(#phoneGrad)" />
                          <path d={phoneSparkPath} stroke="#0D9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>

                      <div className="mt-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5">
                        <div className="text-[7px] font-semibold text-slate-600 sm:text-[8px]">Latest</div>
                        <div className="mt-1 space-y-0.5">
                          <div className="flex justify-between text-[7px] text-slate-600 sm:text-[8px]">
                            <span>Globex Corp.</span>
                            <span className="font-semibold text-slate-800">₹45.8K</span>
                          </div>
                          <div className="flex justify-between text-[7px] text-slate-600 sm:text-[8px]">
                            <span>Office Supplies</span>
                            <span className="font-semibold text-slate-800">₹1.2K</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="absolute inset-x-0 bottom-0 flex justify-around border-t border-slate-100 bg-white pb-4 pt-2">
                      {["Home", "Txns", "More"].map((tab, i) => (
                        <div key={tab} className="flex flex-col items-center gap-0.5">
                          <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-[#0D9488]" : "bg-slate-300"}`} />
                          <span className={`text-[6px] sm:text-[7px] ${i === 0 ? "font-semibold text-[#0D9488]" : "text-slate-400"}`}>
                            {tab}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Home indicator */}
                    <div
                      aria-hidden
                      className="absolute bottom-[6px] left-1/2 z-10 h-[3px] w-[50px] -translate-x-1/2 rounded-full bg-slate-800"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
