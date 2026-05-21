"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bot, CheckCircle2, Sparkles } from "lucide-react";

const metrics = [
  { label: "Cash view", value: "98.4%", tone: "bg-emerald-400" },
  { label: "Auto matched", value: "1,284", tone: "bg-sky-400" },
  { label: "Needs review", value: "12", tone: "bg-amber-400" },
];

const queue = [
  { name: "Close checklist", status: "Ready to approve" },
  { name: "Vendor review", status: "4 exceptions grouped" },
  { name: "Revenue sync", status: "Live with bank feed" },
];

const rows = [
  { company: "Northline Logistics", amount: "$84,200", tag: "Revenue" },
  { company: "Meridian Foods", amount: "$22,440", tag: "Payables" },
  { company: "Aster Retail", amount: "$41,980", tag: "Collections" },
  { company: "Valence Health", amount: "$18,600", tag: "Review" },
];

export function HeroWorkspace() {
  const reduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loaderMs = reduceMotion ? 180 : 1600;
    const openMs = reduceMotion ? 220 : 3200;

    const loaderTimer = window.setTimeout(() => setShowLoader(false), loaderMs);
    const openTimer = window.setTimeout(() => setIsOpen(true), openMs);

    return () => {
      window.clearTimeout(loaderTimer);
      window.clearTimeout(openTimer);
    };
  }, [reduceMotion]);

  const bars = useMemo(() => [42, 58, 55, 74, 63, 88, 94, 86, 110, 102, 118, 132], []);

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

      <div className="relative ml-auto w-full max-w-[860px] px-0 sm:px-2">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[76%] h-24 w-[68%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22),transparent_68%)] blur-3xl"
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduceMotion ? 0 : 1.7, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-[820px] justify-center"
          style={{ perspective: 3000 }}
        >
          <motion.div
            animate={{
              rotateX: isOpen ? 10 : 16,
              rotateY: isOpen ? -18 : -22,
              scale: isOpen ? 0.96 : 0.92,
              x: isOpen ? 6 : -4,
            }}
            transition={{ duration: reduceMotion ? 0.35 : 2.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[760px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 24,
              }}
              transition={{ duration: reduceMotion ? 0.2 : 0.7, delay: reduceMotion ? 0 : 1.55 }}
              className="absolute -left-3 top-12 z-20 hidden rounded-2xl border border-white/15 bg-[#11233e]/82 px-4 py-3 shadow-2xl backdrop-blur-xl md:block"
            >
              <div className="flex items-center gap-3 text-white">
                <div className="rounded-xl bg-emerald-400/15 p-2 text-emerald-300">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-slate-400">
                    Katixo Assist
                  </div>
                  <div className="text-sm font-semibold">11 approvals bundled for review</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : -20,
              }}
              transition={{ duration: reduceMotion ? 0.2 : 0.7, delay: reduceMotion ? 0 : 1.75 }}
              className="absolute -right-2 top-20 z-20 hidden rounded-2xl border border-white/10 bg-white/92 px-4 py-3 shadow-2xl md:block"
            >
              <div className="flex items-center gap-3 text-slate-900">
                <div className="rounded-xl bg-orange-100 p-2 text-orange-500">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    Daily review
                  </div>
                  <div className="text-sm font-semibold">Close tasks reduced by 37%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                rotateX: isOpen ? 0 : -104,
              }}
              transition={{ duration: reduceMotion ? 0.38 : 2.7, delay: reduceMotion ? 0 : 0.28, ease: [0.2, 0.9, 0.24, 1] }}
              className="relative z-10 mx-auto h-[184px] w-[90%] origin-bottom rounded-[26px] border border-[#2d4360] bg-[#0c182b] shadow-[0_45px_80px_rgba(1,8,20,0.45)] sm:h-[232px] md:h-[292px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-[12px] overflow-hidden rounded-[20px] border border-white/8 bg-[#0f1c32]">
                <div className="flex items-center justify-between border-b border-white/8 bg-[#101d35] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="rounded-full bg-white/6 px-3 py-1 text-[11px] font-medium text-slate-300">
                    Katixo Finance OS
                  </div>
                </div>

                <div className="grid h-[calc(100%-49px)] grid-cols-[70px_1fr_170px] sm:grid-cols-[82px_1fr_185px]">
                  <div className="border-r border-white/8 bg-[#0a1526] px-2 py-3">
                    <div className="space-y-2">
                      {["Overview", "Ledger", "Close", "Cash", "Reports"].map((item, idx) => (
                        <div
                          key={item}
                          className={`rounded-lg px-2.5 py-2 text-[10px] font-medium sm:text-[11px] ${
                            idx === 0 ? "bg-white text-slate-900" : "text-slate-400"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0f1b31] p-3 sm:p-4">
                    <div className="grid h-full gap-3">
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl border border-white/8 bg-white/[0.04] p-2.5 sm:p-3"
                          >
                            <div className="mb-2 flex items-center justify-between">
                              <div className="text-[9px] uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]">
                                {metric.label}
                              </div>
                              <span className={`h-2.5 w-2.5 rounded-full ${metric.tone}`} />
                            </div>
                            <div className="text-sm font-semibold text-white sm:text-xl">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid min-h-0 grid-cols-[1.15fr_0.85fr] gap-3">
                        <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-3">
                          <div className="mb-3 flex items-center justify-between">
                            <div>
                              <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">
                                Throughput
                              </div>
                              <div className="mt-1 text-sm font-semibold text-white sm:text-base">
                                Accounting dashboard
                              </div>
                            </div>
                            <div className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                              Live sync
                            </div>
                          </div>

                          <div className="rounded-2xl bg-[#09111f] p-3">
                            <div className="mb-3 flex items-end justify-between">
                              <div>
                                <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">
                                  Monthly volume
                                </div>
                                <div className="text-lg font-semibold text-white sm:text-2xl">
                                  $1.82M
                                </div>
                              </div>
                              <div className="text-xs font-medium text-emerald-300">+18.2%</div>
                            </div>
                            <div className="flex h-20 items-end gap-1.5 sm:h-24">
                              {bars.map((height, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={false}
                                  animate={{ height: isOpen ? height : 0 }}
                                  transition={{
                                    duration: reduceMotion ? 0.2 : 0.55,
                                    delay: reduceMotion ? 0 : 0.03 * idx + 1.35,
                                  }}
                                  className="flex-1 rounded-t-lg bg-gradient-to-t from-emerald-400 to-sky-400/70"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-3">
                          <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">
                            Priority queue
                          </div>
                          <div className="mt-3 space-y-2.5">
                            {queue.map((task) => (
                              <div key={task.name} className="rounded-2xl bg-[#09111f] px-3 py-2.5">
                                <div className="flex items-center justify-between gap-2">
                                  <div className="text-[11px] font-medium text-white sm:text-xs">
                                    {task.name}
                                  </div>
                                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                                </div>
                                <div className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">
                                  {task.status}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-3">
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">
                              Reconciliation
                            </div>
                            <div className="mt-1 text-sm font-semibold text-white sm:text-base">
                              Review and clear faster
                            </div>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-white/6">
                          {rows.map((row, idx) => (
                            <div
                              key={row.company}
                              className={`grid grid-cols-[1.15fr_0.75fr_0.65fr] items-center gap-2 px-3 py-2.5 ${
                                idx !== rows.length - 1 ? "border-b border-white/6" : ""
                              }`}
                            >
                              <div className="truncate text-[10px] font-medium text-white sm:text-[11px]">
                                {row.company}
                              </div>
                              <div className="text-[10px] text-slate-300 sm:text-[11px]">
                                {row.amount}
                              </div>
                              <div className="justify-self-start rounded-full bg-white/8 px-2 py-1 text-[9px] text-slate-300 sm:text-[10px]">
                                {row.tag}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l border-white/8 bg-[#0b1629] p-3 sm:p-4">
                    <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-3">
                      <div className="text-[10px] uppercase tracking-[0.12em] text-slate-400">
                        Today at Katixo
                      </div>
                      <div className="mt-3 space-y-2.5">
                        {[
                          "Revenue exceptions grouped",
                          "Approvals queued by priority",
                          "Cash snapshot updated",
                          "14 anomalies summarized",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl bg-[#09111f] px-3 py-2.5 text-[10px] text-slate-200 sm:text-[11px]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-[26px] border border-white/5"
                style={{ transform: "translateZ(-1px)" }}
              />
            </motion.div>

            <div className="relative mx-auto -mt-3 h-[14px] w-[90%] rounded-b-[24px] border border-white/10 bg-gradient-to-b from-[#8a97ab] to-[#66758a] shadow-[0_22px_50px_rgba(0,0,0,0.34)] sm:h-[16px]">
              <div className="absolute inset-x-[38%] top-[4px] h-[2px] rounded-full bg-white/45" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
