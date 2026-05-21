"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const metrics = [
  { label: "Outstanding receivables", value: "₹5.38Cr", change: "+3.5%" },
  { label: "Outstanding payables", value: "₹3.07Cr", change: "+2.9%" },
  { label: "Net profit", value: "₹2.18Cr", change: "+4.1%" },
];

const phoneRows = [
  { name: "Acme Industries", amount: "₹1,20,000", status: "Approve" },
  { name: "GST sync", amount: "₹3,65,000", status: "Approve" },
  { name: "Data Services", amount: "₹53,000", status: "Review" },
  { name: "Northline", amount: "₹87,000", status: "Approve" },
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

  const bars = useMemo(() => [18, 22, 26, 25, 32, 38, 42, 51, 49, 56], []);

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
                  <div className="mt-5 text-sm font-medium tracking-[0.28em] text-slate-400">
                    KATIXO
                  </div>
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

      {/* Devices composition */}
      <div className="relative w-full" style={{ perspective: "1800px" }}>
        {/* Surface glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[5%] right-[5%] h-16 rounded-[100%] bg-[radial-gradient(ellipse,rgba(125,211,252,0.18),transparent_70%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-1 left-[8%] right-[8%] h-[2px] rounded-full bg-cyan-300/25 shadow-[0_0_20px_rgba(103,232,249,0.3)]"
        />

        {/* Main container — laptop + phone side by side */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 1.65 }}
          className="relative flex items-end justify-center gap-4 sm:gap-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ─── LAPTOP ─── */}
          <motion.div
            animate={{
              rotateX: isOpen ? 6 : 10,
              rotateY: isOpen ? -8 : -12,
              scale: isOpen ? 1 : 0.95,
            }}
            transition={{ duration: reduceMotion ? 0.3 : 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[72%] max-w-[600px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Screen / lid */}
            <motion.div
              animate={{
                rotateX: isOpen ? 0 : -90,
              }}
              transition={{
                duration: reduceMotion ? 0.3 : 2.5,
                delay: reduceMotion ? 0 : 0.3,
                ease: [0.2, 0.9, 0.24, 1],
              }}
              className="relative z-20 origin-bottom rounded-t-[18px] border border-[#253a4e] bg-[#101a2b] shadow-[0_40px_80px_rgba(1,8,20,0.5)]"
              style={{ transformStyle: "preserve-3d", aspectRatio: "16/10" }}
            >
              {/* Screen bezel + content */}
              <div className="absolute inset-[6px] sm:inset-[8px] overflow-hidden rounded-[14px] border border-[#d9e5f3] bg-[#f6f8fb]">
                {/* Browser chrome */}
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2 sm:px-4 sm:py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-300" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  </div>
                  <div className="w-[30%] rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-center text-[8px] text-slate-400 sm:text-[9px]">
                    app.katixo.com
                  </div>
                  <div className="h-4 w-4 rounded-full bg-slate-100" />
                </div>

                {/* Dashboard content */}
                <div className="grid h-[calc(100%-32px)] grid-cols-[36px_1fr] sm:grid-cols-[42px_1fr]">
                  {/* Sidebar */}
                  <div className="border-r border-slate-200 bg-[#fbfcfd] px-1 py-2 sm:px-1.5">
                    <div className="space-y-1.5">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 rounded-md sm:h-5 ${i === 1 ? "bg-slate-200" : "bg-slate-100"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Main */}
                  <div className="overflow-hidden p-2 sm:p-3">
                    <div className="mb-2 flex items-start justify-between sm:mb-3">
                      <div>
                        <div className="text-[8px] text-slate-400 sm:text-[9px]">Home</div>
                        <div className="text-sm font-semibold text-slate-800 sm:text-lg md:text-xl">
                          Dashboard
                        </div>
                      </div>
                      <div className="hidden gap-1.5 sm:flex">
                        <div className="rounded-md border border-slate-200 px-2 py-1 text-[8px] text-slate-500">
                          Export PDF
                        </div>
                        <div className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] text-slate-500">
                          Edit
                        </div>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-2 flex gap-2 text-[7px] text-slate-400 sm:mb-3 sm:text-[9px]">
                      <span className="border-b border-slate-700 pb-0.5 text-slate-700">
                        Executive summary
                      </span>
                      <span>Cash</span>
                      <span>Revenue</span>
                    </div>

                    {/* Charts + metrics */}
                    <div className="grid grid-cols-[1.3fr_0.7fr] gap-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                        <div className="text-[7px] text-slate-400 sm:text-[8px]">Month to date</div>
                        <div className="text-[8px] font-medium text-slate-500 sm:text-[10px]">Revenue</div>
                        <div className="text-xs font-semibold text-slate-800 sm:text-base md:text-lg">
                          ₹8,34,93,450
                        </div>
                        <div className="mt-1 flex h-[50px] items-end gap-[3px] sm:mt-2 sm:h-[80px]">
                          {bars.map((h, i) => (
                            <motion.div
                              key={i}
                              initial={false}
                              animate={{ height: isOpen ? `${h}%` : "0%" }}
                              transition={{
                                duration: reduceMotion ? 0.2 : 0.5,
                                delay: reduceMotion ? 0 : 1.4 + i * 0.04,
                              }}
                              className="flex-1 rounded-t-md bg-gradient-to-t from-[#7dd3fc] to-[#cdefff]"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        {metrics.map((m) => (
                          <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-1.5 sm:p-2">
                            <div className="text-[7px] text-slate-400 sm:text-[8px]">{m.label}</div>
                            <div className="text-[10px] font-semibold text-slate-800 sm:text-sm">
                              {m.value}
                            </div>
                            <div className="text-[7px] font-medium text-emerald-500 sm:text-[9px]">
                              {m.change}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Keyboard base */}
            <div className="relative z-10 -mt-px w-full">
              {/* Top edge / hinge */}
              <div className="h-[14px] rounded-t-[14px] border border-white/10 bg-gradient-to-b from-[#a4b0c0] via-[#8b9aaf] to-[#78879b] sm:h-[18px] sm:rounded-t-[18px]" />
              {/* Main body */}
              <div className="h-[28px] rounded-b-[20px] border-x border-b border-white/8 bg-gradient-to-b from-[#8493a7] to-[#637287] shadow-[0_24px_50px_rgba(0,0,0,0.3)] sm:h-[34px] sm:rounded-b-[24px]">
                <div className="mx-auto mt-[10px] h-[2px] w-[20%] rounded-full bg-white/40 sm:mt-[13px] sm:h-[3px]" />
              </div>
              {/* Keyboard keys */}
              <div className="absolute left-[8%] right-[8%] top-[4px] grid grid-cols-12 gap-1 opacity-80 sm:top-[5px]">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[4px] rounded-[2px] border border-slate-900/20 bg-[#4f5f74] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] sm:h-[5px]"
                  />
                ))}
              </div>
              {/* Trackpad */}
              <div className="absolute inset-x-[32%] bottom-[5px] h-[14px] rounded-xl border border-slate-900/15 bg-[#78879b] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] sm:bottom-[6px] sm:h-[16px]" />
            </div>
          </motion.div>

          {/* ─── PHONE ─── */}
          <motion.div
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 30,
              rotateY: isOpen ? -6 : -12,
              rotateX: isOpen ? 2 : 6,
            }}
            transition={{
              duration: reduceMotion ? 0.25 : 0.9,
              delay: reduceMotion ? 0 : 1.8,
            }}
            className="relative z-30 w-[18%] min-w-[100px] max-w-[140px] shrink-0 self-end"
            style={{ transformStyle: "preserve-3d", marginBottom: "4px" }}
          >
            <div className="rounded-[22px] border-[4px] border-[#111827] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
              {/* Notch */}
              <div className="mx-auto mt-1.5 h-4 w-14 rounded-full bg-[#0f172a]" />

              <div className="p-2.5">
                {/* Header */}
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <div className="text-[8px] text-slate-400">Inbox</div>
                    <div className="text-[11px] font-semibold text-slate-800">
                      Approvals
                    </div>
                  </div>
                  <div className="h-5 w-5 rounded-full bg-slate-100" />
                </div>

                {/* Tabs */}
                <div className="mb-2 flex gap-1.5 text-[7px] text-slate-400">
                  <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-slate-700">
                    Transactions
                  </span>
                  <span className="py-0.5">Receipts</span>
                </div>

                {/* Rows */}
                <div className="space-y-1.5">
                  {phoneRows.map((row) => (
                    <div
                      key={row.name}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div className="min-w-0">
                          <div className="truncate text-[8px] font-medium text-slate-700">
                            {row.name}
                          </div>
                          <div className="text-[7px] text-slate-400">{row.amount}</div>
                        </div>
                        <div className="shrink-0 rounded-md bg-emerald-500 px-1.5 py-0.5 text-[7px] font-semibold text-white">
                          {row.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Home indicator */}
              <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-slate-200" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
