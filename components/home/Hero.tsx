"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { FullSlidingHeroCarousel } from "./FullSlidingHeroCarousel";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#142d25] text-white pt-10 pb-16 md:pt-14 md:pb-20">
      {/* Campfire dark forest ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(179, 237, 151, 0.12), transparent 45%), radial-gradient(circle at 85% 40%, rgba(179, 237, 151, 0.08), transparent 50%), radial-gradient(circle at 15% 60%, rgba(10, 71, 51, 0.5), transparent 55%), #142d25",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
        style={{ backgroundSize: "60px 60px" }}
      />

      <div className="container-wide relative z-10">
        {/* Campfire + DualEntry Headline Introduction */}
        <div className="mx-auto max-w-3xl text-center pb-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#b3ed97]/30 bg-[#10241e]/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#b3ed97] backdrop-blur-md mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#b3ed97]" />
            <span>The AI ERP That Runs While You Lead</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Month end shouldn&apos;t take{" "}
            <span className="text-[#b3ed97]">all month</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#c2d9cc] leading-relaxed max-w-2xl mx-auto"
          >
            Close in 24 hours. Cut 90% of manual reconciliation across multi-entity general ledger, NABH Hospital OS, and FMCG route distribution.
          </motion.p>
        </div>

        {/* FULL SLIDING PANORAMIC CAROUSEL BANNER (Directly matching user screenshot) */}
        <FullSlidingHeroCarousel />

        {/* Trust Badges below Carousel */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-[#b8d1c5]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
            <span>24-Hour Month-End Close</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
            <span>Multi-Entity Consolidation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
            <span>NABH Hospital Clinical Flow</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
            <span>GST 2.0 Notification 9/2025-CT Ready</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
            <span>₹0 Migration & Setup Fee</span>
          </div>
        </div>
      </div>

      {/* Elegant Curved Bottom Divider */}
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
            className="fill-[#0c1f17]"
            d="M0,28 C360,52 1080,0 1440,28 L1440,52 L0,52 Z"
          />
        </svg>
      </div>
    </section>
  );
}
