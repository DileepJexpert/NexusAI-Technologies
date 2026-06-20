"use client";

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
  { label: "Total Revenue", value: "â‚¹83,40,569", change: "+12.6%", positive: true },
  { label: "Net Profit", value: "â‚¹12,30,859", change: "+8.4%", positive: true },
  { label: "Expenses", value: "â‚¹23,40,689", change: "-3.7%", positive: false },
  { label: "Outstanding", value: "â‚¹34,50,981", change: "+5.1%", positive: true },
];

const revenuePoints = [28, 32, 30, 38, 36, 42, 40, 52, 55, 62, 58, 68];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const transactions = [
  { date: "Jun 18", desc: "Payment from Globex Corp.", amount: "â‚¹45,800", status: "Completed", color: "#16A34A" },
  { date: "Jun 17", desc: "Office Supplies", amount: "â‚¹1,250", status: "Approved", color: "#2563EB" },
  { date: "Jun 16", desc: "Software Subscription", amount: "â‚¹3,600", status: "Approved", color: "#2563EB" },
];

const bills = [
  { vendor: "Tech Solutions Ltd.", amount: "â‚¹6,120", due: "Jun 25" },
  { vendor: "Marketing Agency", amount: "â‚¹2,980", due: "Jun 28" },
  { vendor: "Office Warehouse", amount: "â‚¹1,230", due: "Jun 30" },
];

const cashFlowData = [
  { label: "Operating", value: "â‚¹2.45M", color: "#0D9488" },
  { label: "Investing", value: "â‚¹1.15M", color: "#10B981" },
  { label: "Financing", value: "â‚¹650K", color: "#6366F1" },
];

const phoneMetrics = [
  { label: "Revenue", value: "â‚¹83.4L", change: "+12.6%" },
  { label: "Profit", value: "â‚¹12.3L", change: "+8.4%" },
];

const phoneSparkline = [28, 35, 30, 42, 38, 52, 48, 58, 55, 65, 60, 68];

function KatixoLoadingLogo() {
  const ledgerLines = ["M88 61H132", "M94 84H139", "M88 107H132"];
  const nodes = [
    { cx: 134, cy: 39, fill: "#FF8A3D", delay: 0 },
    { cx: 150, cy: 84, fill: "#1FD6A5", delay: 0.25 },
    { cx: 133, cy: 130, fill: "#2F7DF6", delay: 0.5 },
  ];
  const sparks = ["M21 26L29 18", "M149 16L154 5", "M163 142L174 151"];

  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden px-5">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 22%, rgba(31,214,165,0.22), transparent 30%), radial-gradient(circle at 78% 34%, rgba(47,125,246,0.18), transparent 30%), linear-gradient(135deg, #06101d 0%, #0b1828 46%, #06261f 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.18),transparent_34%)]"
      />
            <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      <div aria-hidden className="absolute left-[8%] top-[18%] hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white shadow-2xl backdrop-blur md:block">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">Receivables</div>
        <div className="mt-2 text-2xl font-bold">Rs 5.8L</div>
      </div>
      <div aria-hidden className="absolute right-[8%] top-[24%] hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white shadow-2xl backdrop-blur md:block">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">Inventory</div>
        <div className="mt-2 text-2xl font-bold">14 alerts</div>
      </div>
      <div aria-hidden className="absolute bottom-[18%] left-[12%] hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white shadow-2xl backdrop-blur md:block">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-300">GST review</div>
        <div className="mt-2 text-2xl font-bold">Ready</div>
      </div>
      <div className="relative w-full max-w-[760px] p-2 sm:p-4">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 24% 20%, rgba(255,138,61,0.18), transparent 28%), radial-gradient(circle at 76% 30%, rgba(31,214,165,0.14), transparent 28%)",
          }}
        />

        <svg
          viewBox="0 0 720 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-auto w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          role="img"
          aria-label="Katixo animated accounting AI logo"
        >
          <defs>
            <linearGradient id="katixoGradient" x1="114" y1="66" x2="236" y2="194" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF8A3D" />
              <stop offset="0.48" stopColor="#1FD6A5" />
              <stop offset="1" stopColor="#2F7DF6" />
            </linearGradient>
            <linearGradient id="ledgerGlow" x1="90" y1="78" x2="236" y2="178" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF8A3D" />
              <stop offset="1" stopColor="#1FD6A5" />
            </linearGradient>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="0 0 0 0 0.12  0 0 0 0 0.84  0 0 0 0 0.65  0 0 0 0.55 0"
              />
              <feBlend in="SourceGraphic" mode="normal" />
            </filter>
          </defs>

          <g transform="translate(66 46)" filter="url(#softGlow)">
            <motion.path
              d="M84 8C126 8 160 42 160 84C160 126 126 160 84 160C42 160 8 126 8 84C8 42 42 8 84 8Z"
              stroke="url(#katixoGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="430"
              initial={{ strokeDashoffset: 430, opacity: 0.6 }}
              animate={{ strokeDashoffset: [430, 0, 0, 430], opacity: [0.6, 1, 1, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.path
              d="M58 42V126M116 42L67 84L119 126"
              stroke="#142D25"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="270"
              initial={{ strokeDashoffset: 270 }}
              animate={{ strokeDashoffset: [270, 270, 0, 0, 270] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {ledgerLines.map((d, index) => (
              <motion.path
                key={d}
                d={d}
                stroke="url(#ledgerGlow)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="150"
                initial={{ strokeDashoffset: 150, opacity: 0.2 }}
                animate={{ strokeDashoffset: [150, 150, 0, 0, 150], opacity: [0.2, 0.2, 1, 1, 0.2] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.08 }}
              />
            ))}

            <motion.path
              d="M42 139L58 154L90 122"
              stroke="#1FD6A5"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="90"
              initial={{ strokeDashoffset: 90, opacity: 0.2 }}
              animate={{ strokeDashoffset: [90, 90, 0, 0, 90], opacity: [0.2, 0.2, 1, 1, 0.2] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {nodes.map((node) => (
              <motion.circle
                key={`${node.cx}-${node.cy}`}
                cx={node.cx}
                cy={node.cy}
                r="7"
                fill={node.fill}
                animate={{ scale: [0.75, 1.12, 0.75], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              />
            ))}

            {sparks.map((d, index) => (
              <motion.path
                key={d}
                d={d}
                stroke="#FF8A3D"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: [0, 0, 1, 1, 0], y: [4, 4, 0, 0, 4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
              />
            ))}
          </g>

          <g transform="translate(270 96)">
            <text x="0" y="0" fill="#142D25" fontSize="64" fontWeight="760" letterSpacing="-2">
              Katixo
            </text>
            <text x="2" y="40" fill="#557066" fontSize="19" fontWeight="500" letterSpacing="0.2">
              AI-native finance ERP for India
            </text>
          </g>
        </svg>

        <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { label: "GST checks", value: "Live" },
            { label: "AI Inbox", value: "6 items" },
            { label: "Books status", value: "Clean" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#142D25]/10 bg-white/70 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#557066]">{item.label}</p>
              <p className="mt-1 text-sm font-bold text-[#142D25]">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="relative z-10 mt-5 h-1 overflow-hidden rounded-full bg-white/25">
          <motion.div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#FF8A3D] via-[#1FD6A5] to-[#2F7DF6]"
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

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
    const loaderMs = reduceMotion ? 180 : 4200;
    const openMs = reduceMotion ? 220 : 5000;
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
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#f8fafc] dark:bg-[#1C1917]"
          >
            <motion.div
              initial={reduceMotion ? false : { scale: 0.96, opacity: 0, y: 14 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <KatixoLoadingLogo />
            </motion.div>
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
              {/* â”€â”€â”€ LAPTOP â”€â”€â”€ */}
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

                {/* SCREEN (lid) â€” pivots on bottom edge */}
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
                                  <div className="text-[7px] font-bold text-slate-800 sm:text-[9px]">â‚¹4.25M</div>
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

                {/* HINGE â€” dark strip between lid and base */}
                <div
                  aria-hidden
                  className="relative z-10 h-[6px] w-full bg-gradient-to-b from-[#3a4a60] via-[#2c3a4d] to-[#1e2a3d] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_0_rgba(0,0,0,0.4)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-y-[1px] left-[8%] right-[8%] rounded-[2px] bg-gradient-to-b from-[#1f2a3d] to-[#0f172a]" />
                </div>

                {/* BASE â€” rotateX(78deg) lays it flat for horizontal keyboard */}
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

              {/* â”€â”€â”€ PHONE â€” vertical, beside laptop â”€â”€â”€ */}
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
                            <span className="font-semibold text-slate-800">â‚¹45.8K</span>
                          </div>
                          <div className="flex justify-between text-[7px] text-slate-600 sm:text-[8px]">
                            <span>Office Supplies</span>
                            <span className="font-semibold text-slate-800">â‚¹1.2K</span>
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

