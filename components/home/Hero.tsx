"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroWorkspace } from "./HeroWorkspace";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#e8edf4] text-slate-900 dark:from-[#1C1917] dark:to-[#090705] dark:text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 18%, rgba(59,130,246,0.07), transparent 32%), radial-gradient(circle at 80% 18%, rgba(16,185,129,0.05), transparent 28%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 20% 18%, rgba(13,148,136,0.12), transparent 32%), radial-gradient(circle at 80% 18%, rgba(168,85,247,0.08), transparent 28%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.04]"
        style={{ backgroundSize: "62px 62px" }}
      />

      <div className="container-wide relative z-10 flex min-h-screen items-start pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.65 }}
            className="order-1 flex max-w-md flex-col items-start text-left"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 backdrop-blur-sm dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-300 sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              AI-native ERP for Indian businesses
            </div>

            <h1 className="font-heading text-3xl font-bold leading-[1.02] text-balance text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-[3.1rem]">
              Superpower your
              <br />
              <span className="text-emerald-700 dark:text-emerald-300">finance team.</span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base sm:leading-7">
              Katixo brings GST billing, POS, inventory, reconciliation and business reporting into one clean workspace for MSME, retail, distribution and healthcare teams.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <div className="order-2">
            <HeroWorkspace />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", height: 52, width: "100%" }}
        >
          <path
            className="fill-white dark:fill-[#090705]"
            d="M0,28 C360,52 1080,0 1440,28 L1440,52 L0,52 Z"
          />
        </svg>
      </div>
    </section>
  );
}


