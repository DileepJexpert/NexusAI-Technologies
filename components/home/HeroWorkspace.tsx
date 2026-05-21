"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
    const openMs = reduceMotion ? 220 : 3000;

    const loaderTimer = window.setTimeout(() => setShowLoader(false), loaderMs);
    const openTimer = window.setTimeout(() => setIsOpen(true), openMs);

    return () => {
      window.clearTimeout(loaderTimer);
      window.clearTimeout(openTimer);
    };
  }, [reduceMotion]);

  const bars = useMemo(() => [18, 22, 26, 25, 32, 38, 42, 51, 49, 56], []);

  return (
    <>
      <AnimatePresence>
        {showLoader ? (
          <motion.div
            key="hero-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.18 : 0.5, ease: "easeOut" } }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#06101d]"
          >
            <div className="flex flex-col items-center gap-6 px-6 text-center">
              <motion.div
                initial={reduceMotion ? false : { scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: "easeOut" }}
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
                <div className="mt-8 flex items-center gap-2">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      animate={{ opacity: [0.28, 1, 0.28], y: [0, -2, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: dot * 0.12,
                      }}
                      className="h-2.5 w-2.5 rounded-full bg-white/70"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative ml-auto w-full max-w-[820px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[10%] bottom-[10%] h-24 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.26),transparent_68%)] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[780px]">
          <div className="absolute bottom-[7%] left-[1%] right-[1%] h-[25%] rounded-t-[26px] border border-cyan-300/12 bg-gradient-to-b from-[#0f6f79] to-[#0b4f59] shadow-[0_45px_90px_rgba(3,13,20,0.42)]" />
          <div className="absolute bottom-[6.2%] left-[1%] right-[1%] h-[1.2%] rounded-full bg-cyan-300/70 blur-[2px]" />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: reduceMotion ? 0 : 1.65, ease: "easeOut" }}
            className="relative z-10 mx-auto flex min-h-[350px] w-full items-end justify-center sm:min-h-[410px] lg:min-h-[455px]"
            style={{ perspective: 3300 }}
          >
            <motion.div
              animate={{
                rotateX: isOpen ? 7 : 13,
                rotateY: isOpen ? -28 : -32,
                scale: isOpen ? 0.91 : 0.88,
                x: isOpen ? -44 : -56,
              }}
              transition={{ duration: reduceMotion ? 0.35 : 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[760px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{ rotateX: isOpen ? 0 : -102 }}
                transition={{ duration: reduceMotion ? 0.4 : 2.8, delay: reduceMotion ? 0 : 0.28, ease: [0.2, 0.9, 0.24, 1] }}
                className="relative z-20 ml-[4%] h-[195px] w-[76%] origin-bottom rounded-[26px] border border-[#253a4e] bg-[#101a2b] shadow-[0_45px_80px_rgba(1,8,20,0.46)] sm:h-[250px] md:h-[310px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-[10px] overflow-hidden rounded-[22px] border border-[#d9e5f3] bg-[#f6f8fb]">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <div className="w-[34%] rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] text-slate-400">
                      Search or jump to...
                    </div>
                    <div className="h-6 w-6 rounded-full bg-slate-100" />
                  </div>

                  <div className="grid h-[calc(100%-49px)] grid-cols-[46px_1fr]">
                    <div className="border-r border-slate-200 bg-[#fbfcfd] px-2 py-3">
                      <div className="space-y-2">
                        {Array.from({ length: 9 }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-6 rounded-lg ${idx === 1 ? "bg-slate-200" : "bg-slate-100"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-4 sm:p-5">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <div className="text-[11px] text-slate-400">Home</div>
                          <div className="mt-1 text-xl font-semibold text-slate-800 sm:text-3xl">
                            Dashboard
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] text-slate-500 sm:text-xs">
                            Export PDF
                          </div>
                          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] text-slate-500 sm:text-xs">
                            Edit dashboard
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-4 text-[10px] text-slate-400 sm:text-xs">
                        <span className="border-b-2 border-slate-700 pb-1 text-slate-700">Executive summary</span>
                        <span>Cash management</span>
                        <span>Revenue</span>
                        <span>Custom</span>
                        <span>New dashboard</span>
                      </div>

                      <div className="grid h-[calc(100%-94px)] grid-cols-[1.3fr_0.8fr] gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                          <div className="text-[10px] text-slate-400">Month to date</div>
                          <div className="mt-1 text-sm font-medium text-slate-500">Revenue</div>
                          <div className="mt-2 text-xl font-semibold text-slate-800 sm:text-2xl">
                            ₹8,34,93,450
                          </div>
                          <div className="mt-4 flex h-[120px] items-end gap-2 sm:h-[150px]">
                            {bars.map((height, idx) => (
                              <motion.div
                                key={idx}
                                initial={false}
                                animate={{ height: isOpen ? `${height}%` : "0%" }}
                                transition={{
                                  duration: reduceMotion ? 0.2 : 0.55,
                                  delay: reduceMotion ? 0 : 1.3 + idx * 0.04,
                                }}
                                className="flex-1 rounded-t-xl bg-gradient-to-t from-[#7dd3fc] to-[#cdefff]"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-3">
                          {metrics.map((metric) => (
                            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                              <div className="text-[10px] text-slate-400 sm:text-xs">{metric.label}</div>
                              <div className="mt-1 text-xl font-semibold text-slate-800 sm:text-2xl">
                                {metric.value}
                              </div>
                              <div className="mt-1 text-[10px] font-medium text-emerald-500 sm:text-xs">
                                {metric.change}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="relative z-10 ml-[1%] -mt-1.5 w-[82%]">
                <div className="h-[18px] rounded-t-[22px] border border-white/14 bg-gradient-to-b from-[#a0acbd] to-[#7f8da1]" />
                <div className="h-[34px] rounded-b-[30px] border-x border-b border-white/10 bg-gradient-to-b from-[#8290a4] to-[#69788d] shadow-[0_32px_64px_rgba(0,0,0,0.34)]">
                  <div className="mx-auto mt-[11px] h-[3px] w-[20%] rounded-full bg-white/45" />
                </div>
                <div className="absolute left-[8%] right-[8%] top-[4px] grid grid-cols-12 gap-1.5 opacity-85">
                  {Array.from({ length: 36 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-[6px] rounded-[3px] border border-white/8 bg-[#6f7d92] ${
                        idx >= 24 ? "hidden sm:block" : ""
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-x-[32%] bottom-[7px] h-[18px] rounded-2xl border border-white/8 bg-[#728198]" />
              </div>

              <motion.div
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                  x: isOpen ? 0 : 12,
                  rotateZ: isOpen ? 0 : 3,
                }}
                transition={{ duration: reduceMotion ? 0.25 : 0.9, delay: reduceMotion ? 0 : 1.85 }}
                className="absolute bottom-[10%] right-[0%] z-30 w-[20%] min-w-[108px] max-w-[148px] rounded-[28px] border-[5px] border-[#111827] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.32)]"
              >
                <div className="mx-auto mt-2 h-5 w-16 rounded-full bg-[#0f172a]" />
                <div className="p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Inbox</div>
                      <div className="mt-1 text-sm font-semibold text-slate-800">Mobile</div>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-slate-100" />
                  </div>

                  <div className="mb-3 flex gap-2 text-[9px] text-slate-400">
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">Transactions</span>
                    <span>Receipts</span>
                  </div>

                  <div className="space-y-2.5">
                    {phoneRows.map((row) => (
                      <div key={row.name} className="rounded-2xl border border-slate-200 bg-slate-50 px-2.5 py-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-[9px] font-medium text-slate-700">{row.name}</div>
                            <div className="mt-1 text-[8px] text-slate-400">{row.amount}</div>
                          </div>
                          <div className="rounded-md bg-emerald-500 px-2 py-1 text-[8px] font-semibold text-white">
                            {row.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
