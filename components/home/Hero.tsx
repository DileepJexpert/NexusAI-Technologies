"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Bot,
  CheckCircle2,
  FileText,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reviewItems = [
  { label: "GST invoices", value: "128", note: "Ready" },
  { label: "Payments matched", value: "92%", note: "Today" },
  { label: "Low stock", value: "14", note: "Review" },
];

const ledgerRows = [
  ["Invoice KX-1042", "Aarav Medical", "Rs 18,450", "Matched"],
  ["Purchase bill", "Northline Traders", "Rs 42,800", "Pending"],
  ["GST review", "May filing", "Rs 7,920", "Check"],
];

const floatingCards = [
  {
    title: "Counter billing",
    text: "GST invoice created",
    icon: ReceiptText,
    className: "left-3 top-6 lg:-left-8 lg:top-20",
  },
  {
    title: "Inventory sync",
    text: "Batch stock updated",
    icon: PackageCheck,
    className: "right-3 top-24 lg:-right-8 lg:top-28",
  },
  {
    title: "Books review",
    text: "Only 4 exceptions",
    icon: ShieldCheck,
    className: "bottom-8 left-6 lg:-bottom-6 lg:left-16",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf8] text-slate-950 dark:bg-[#0a0f18] dark:text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(235,244,239,0.76) 52%, rgba(255,255,255,1) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.035]"
        style={{ backgroundSize: "56px 56px" }}
      />

      <div className="container-wide relative z-10 flex min-h-screen flex-col items-center pt-24 pb-14 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            AI-native finance ERP for Indian MSMEs
          </div>

          <h1 className="mt-7 font-heading text-5xl font-extrabold leading-[0.98] text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
            Superpower your
            <span className="block text-emerald-700 dark:text-emerald-300">finance team.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            Katixo brings POS billing, GST records, inventory, reconciliation, hospital billing and business reports into one clean workspace built for Indian operators.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">Take a product tour</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
          className="relative mt-12 w-full max-w-6xl"
        >
          <ProductStage />
        </motion.div>
      </div>
    </section>
  );
}

function ProductStage() {
  return (
    <div className="relative mx-auto aspect-[16/9] min-h-[430px] w-full overflow-hidden rounded-lg border border-slate-200 bg-[#07111f] p-3 shadow-2xl md:p-5">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-400/15 to-transparent" />

      {floatingCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className={`absolute z-20 hidden max-w-[190px] rounded-lg border border-white/10 bg-white/95 p-3 text-slate-950 shadow-xl backdrop-blur md:block ${card.className}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold">{card.title}</div>
                <div className="text-xs text-slate-500">{card.text}</div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="relative z-10 flex h-full overflow-hidden rounded-lg border border-white/10 bg-white text-slate-950">
        <aside className="hidden w-52 shrink-0 border-r bg-[#09252d] p-4 text-white md:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 font-bold text-[#09252d]">
              K
            </div>
            <div>
              <div className="text-sm font-bold">Katixo</div>
              <div className="text-[11px] text-white/55">Finance OS</div>
            </div>
          </div>
          <nav className="mt-8 space-y-2 text-sm">
            {["Dashboard", "Invoices", "Inventory", "GST Review", "Banking", "Reports"].map((item, index) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 ${index === 0 ? "bg-white/12 text-white" : "text-white/62"}`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col bg-slate-50">
          <div className="flex items-center justify-between border-b bg-white px-4 py-3 md:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Live workspace</p>
              <h2 className="text-xl font-bold md:text-2xl">Business control center</h2>
            </div>
            <div className="hidden rounded-full border bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 sm:block">
              June 2026
            </div>
          </div>

          <div className="grid flex-1 gap-4 overflow-hidden p-4 md:grid-cols-[1.1fr_0.9fr] md:p-6">
            <div className="flex min-w-0 flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {reviewItems.map((item) => (
                  <div key={item.label} className="rounded-lg border bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                    <div className="mt-2 flex items-end justify-between gap-2">
                      <span className="text-2xl font-bold">{item.value}</span>
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
                        {item.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="min-h-0 flex-1 rounded-lg border bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">Revenue and cash flow</h3>
                    <p className="text-xs text-slate-500">Sales, collections and payable movement</p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-emerald-700" />
                </div>
                <div className="flex h-44 items-end gap-2 border-b border-l px-3 pb-3">
                  {[34, 46, 41, 58, 63, 52, 71, 86, 78, 94].map((height, index) => (
                    <div key={index} className="flex flex-1 flex-col justify-end">
                      <div
                        className="rounded-t bg-gradient-to-t from-emerald-700 to-emerald-300"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden min-w-0 flex-col gap-4 lg:flex">
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-bold">AI review queue</h3>
                  <Bot className="h-5 w-5 text-emerald-700" />
                </div>
                <div className="space-y-2">
                  {ledgerRows.map(([name, party, amount, status]) => (
                    <div key={name} className="grid grid-cols-[1fr_auto] gap-3 rounded-lg bg-slate-50 p-3 text-sm">
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-slate-500">{party}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{amount}</p>
                        <p className="text-xs text-emerald-700">{status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <BadgeIndianRupee className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 text-xs text-slate-500">Receivables</p>
                  <p className="text-xl font-bold">Rs 5.8L</p>
                </div>
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <FileText className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 text-xs text-slate-500">GST checks</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
