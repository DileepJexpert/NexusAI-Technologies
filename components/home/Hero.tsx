"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroWorkspace } from "./HeroWorkspace";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#e8edf4] text-slate-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 18%, rgba(59,130,246,0.08), transparent 32%), radial-gradient(circle at 80% 18%, rgba(16,185,129,0.06), transparent 28%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Smart accounting workspace
            </div>

            <h1 className="font-heading text-3xl font-bold leading-[1.02] text-balance text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.1rem]">
              Open faster.
              <br />
              <span className="grad-text-animated">See more.</span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              A clean finance dashboard for review, reporting, and daily control.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="whiteOutline" size="lg" asChild>
                <Link href="/contact?intent=register">Register</Link>
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
            d="M0,28 C360,52 1080,0 1440,28 L1440,52 L0,52 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
