"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CampfireStudioMonitor } from "./CampfireStudioMonitor";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#142d25] text-white pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      {/* Campfire dark forest ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(179, 237, 151, 0.08), transparent 35%), radial-gradient(circle at 82% 35%, rgba(179, 237, 151, 0.12), transparent 45%), radial-gradient(circle at 50% 100%, rgba(10, 28, 20, 0.9), #142d25)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
        style={{ backgroundSize: "60px 60px" }}
      />

      <div className="container-wide relative z-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8 xl:gap-14">
          {/* Left Column: Campfire Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex max-w-xl flex-col items-start text-left"
          >
            {/* Enterprise Tag */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b3ed97]/30 bg-[#10241e]/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b3ed97] backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b3ed97]" />
              AI Native ERP Built for Modern Finance
            </div>

            {/* Campfire Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-bold tracking-tight text-white leading-[1.04]">
              Month end
              <br />
              shouldn&apos;t take
              <br />
              <span className="text-[#b3ed97]">all month</span>
            </h1>

            {/* Campfire Subheading */}
            <p className="mt-6 max-w-lg text-base sm:text-lg text-[#c2d9cc] leading-relaxed">
              Close 3 to 10 days faster with the AI Native ERP built for modern finance and operational teams.
            </p>

            {/* Signature Pill Button with Coral-Orange Arrow Circle */}
            <div className="mt-8 flex flex-col items-start gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#b3ed97] pl-7 pr-2 py-2 text-base font-semibold text-[#142d25] shadow-xl hover:bg-[#a6e688] transition-all hover:shadow-[#b3ed97]/25"
              >
                <span>Try Katixo</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff862f] text-white shadow-md transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>

              {/* Secondary Product Tour Link */}
              <Link
                href="/docs"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#b3ed97] hover:text-white transition-colors pt-1"
              >
                Take a product tour <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Trust and Feature Indicator Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-[#b8d1c5]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
                <span>Autonomous bank matching</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
                <span>GST 2.0 automatic rates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#b3ed97] shrink-0" />
                <span>Review exceptions, not rows</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Studio Display & Orbital Rings */}
          <div className="w-full">
            <CampfireStudioMonitor />
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
            className="fill-slate-900 dark:fill-[#090705]"
            d="M0,28 C360,52 1080,0 1440,28 L1440,52 L0,52 Z"
          />
        </svg>
      </div>
    </section>
  );
}
