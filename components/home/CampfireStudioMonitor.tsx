"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Sparkles, Bell, Search, ShieldCheck } from "lucide-react";

export function CampfireStudioMonitor() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] lg:max-w-[760px] xl:max-w-[820px] select-none py-6 lg:py-4">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 45%, rgba(179, 237, 151, 0.18), rgba(20, 45, 37, 0.4) 40%, transparent 70%)",
        }}
      />

      {/* Orbital Dotted Rings & Star Nodes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-visible"
      >
        <svg
          viewBox="0 0 900 600"
          className="h-[125%] w-[125%] -translate-y-4 opacity-75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Orbit */}
          <ellipse
            cx="480"
            cy="290"
            rx="410"
            ry="230"
            transform="rotate(-14 480 290)"
            stroke="#b3ed97"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            strokeOpacity="0.28"
          />
          {/* Middle Orbit */}
          <ellipse
            cx="480"
            cy="290"
            rx="330"
            ry="180"
            transform="rotate(-12 480 290)"
            stroke="#b3ed97"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            strokeOpacity="0.35"
          />
          {/* Inner Orbit */}
          <ellipse
            cx="480"
            cy="290"
            rx="250"
            ry="135"
            transform="rotate(-10 480 290)"
            stroke="#b3ed97"
            strokeWidth="1"
            strokeDasharray="3 4"
            strokeOpacity="0.22"
          />

          {/* Glowing orbital star/spark nodes */}
          {/* Top-center spark node */}
          <g transform="translate(480, 75)">
            <circle cx="0" cy="0" r="11" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="0" cy="0" r="3" fill="#b3ed97" />
            <path d="M-6 0H6 M0 -6V6" stroke="#b3ed97" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
          </g>
          {/* Far-left spark node */}
          <g transform="translate(130, 360)">
            <circle cx="0" cy="0" r="10" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="0" cy="0" r="2.5" fill="#b3ed97" />
          </g>
          {/* Far-right bottom spark node */}
          <g transform="translate(800, 420)">
            <circle cx="0" cy="0" r="10" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="0" cy="0" r="2.5" fill="#b3ed97" />
          </g>
        </svg>
      </div>

      {/* Floating Card 1: Top-Right (Controller Profile + Revenue Sparkline) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -top-3 right-0 sm:right-6 md:right-10 z-30 flex items-center gap-2"
      >
        {/* Avatar chip */}
        <div className="flex items-center gap-2 rounded-xl border border-[#b3ed97]/30 bg-[#142d25]/90 px-3 py-2 text-white shadow-2xl backdrop-blur-md">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700/80 ring-2 ring-[#b3ed97]/50 text-xs font-bold text-white">
            AK
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#b3ed97] ring-2 ring-[#142d25]" />
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-[#b3ed97] font-semibold">Controller</div>
            <div className="text-xs font-bold text-white">Andrew K.</div>
          </div>
        </div>

        {/* Revenue Metric Card with Sparkline */}
        <div className="rounded-xl border border-[#b3ed97]/30 bg-[#142d25]/90 p-3 text-white shadow-2xl backdrop-blur-md min-w-[130px]">
          <div className="text-[10px] text-emerald-200/70 font-medium">ARR / Revenue</div>
          <div className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5 mt-0.5">
            $2.1M
            <span className="text-[10px] font-semibold text-[#b3ed97] flex items-center">
              <TrendingUp className="h-3 w-3" /> +14%
            </span>
          </div>
          {/* Mini Sparkline Chart */}
          <div className="mt-1.5 h-6 w-full">
            <svg viewBox="0 0 100 24" className="h-full w-full overflow-visible" fill="none">
              <defs>
                <linearGradient id="campfireSparkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b3ed97" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#b3ed97" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0 18 Q 20 16, 35 12 T 70 8 T 100 3 L 100 24 L 0 24 Z"
                fill="url(#campfireSparkGrad)"
              />
              <path
                d="M0 18 Q 20 16, 35 12 T 70 8 T 100 3"
                stroke="#b3ed97"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="100" cy="3" r="2.5" fill="#b3ed97" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: Middle-Right (AI Close Agent) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-[48%] -right-2 sm:right-2 md:right-4 z-30"
      >
        <div className="flex items-center gap-3 rounded-xl border border-[#b3ed97]/35 bg-[#142d25]/95 px-3.5 py-2.5 text-white shadow-2xl backdrop-blur-md">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b3ed97]/20 text-[#b3ed97]">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              AI Close Agent
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b3ed97] animate-pulse" />
            </div>
            <div className="text-[10px] text-[#b3ed97]">Auto-reconciling 99.4%</div>
          </div>
          {/* Active switch mockup */}
          <div className="ml-1 flex h-5 w-9 items-center rounded-full bg-[#b3ed97] p-0.5 shadow-inner">
            <div className="h-4 w-4 translate-x-4 rounded-full bg-[#142d25] shadow" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 3: Bottom-Left (Automated Burn & Spend Bar Chart) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-6 -left-2 sm:left-2 md:left-4 z-30"
      >
        <div className="rounded-xl border border-[#b3ed97]/35 bg-[#142d25]/95 p-3.5 text-white shadow-2xl backdrop-blur-md max-w-[200px]">
          <div className="text-[10px] font-medium text-emerald-200/80">Close faster by spend</div>
          <div className="mt-0.5 text-xs font-bold text-white">Cash runway: 18 mo</div>
          {/* Mini Bar Chart */}
          <div className="mt-2 flex items-end gap-1.5 h-10 w-full pt-1">
            <div className="flex-1 rounded-t bg-[#b3ed97]/40 h-[45%]" />
            <div className="flex-1 rounded-t bg-[#b3ed97]/55 h-[65%]" />
            <div className="flex-1 rounded-t bg-[#b3ed97]/70 h-[50%]" />
            <div className="flex-1 rounded-t bg-[#b3ed97]/85 h-[80%]" />
            <div className="flex-1 rounded-t bg-[#b3ed97] h-[100%]" />
          </div>
          <div className="mt-1 flex justify-between text-[8px] text-[#b3ed97] font-semibold">
            <span>Spend</span>
            <span>Balanced</span>
          </div>
        </div>
      </motion.div>

      {/* 3D Tilted Studio Monitor Canvas */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          perspective: "1200px",
        }}
      >
        {/* Monitor Frame with 3D tilt */}
        <div
          className="relative w-full rounded-2xl bg-[#090b0a] p-2 ring-1 ring-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:rotate-0"
          style={{
            transform: "rotateY(-14deg) rotateX(4deg) translateZ(0)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Top Bezel Webcam Notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span className="h-0.5 w-0.5 rounded-full bg-emerald-400" />
          </div>

          {/* Monitor Screen Glass (High-density ERP Interface) */}
          <div className="relative overflow-hidden rounded-xl bg-white text-slate-800 shadow-inner">
            {/* App Header */}
            <div className="flex h-11 items-center justify-between border-b border-slate-100 bg-[#fafbfa] px-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff862f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b3ed97]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                </div>
                <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-3">
                  <span className="font-heading text-xs font-bold tracking-tight text-[#142d25]">Katixo</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 border border-emerald-200">
                    Live ERP
                  </span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-[11px] text-slate-400 w-44 sm:w-56 shadow-sm">
                <Search className="h-3 w-3 text-slate-400" />
                <span className="truncate">Search entries, GST, bank...</span>
              </div>

              {/* User greeting */}
              <div className="flex items-center gap-2">
                <Bell className="h-3.5 w-3.5 text-slate-400" />
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <span className="hidden sm:inline">Welcome,</span>
                  <span>Andrew</span>
                  <div className="h-5 w-5 rounded-full bg-[#142d25] text-white flex items-center justify-center text-[9px]">
                    A
                  </div>
                </div>
              </div>
            </div>

            {/* App Body */}
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[130px_1fr] bg-[#f8faf8] min-h-[300px] sm:min-h-[340px]">
              {/* Mini Left Sidebar */}
              <div className="border-r border-slate-200/70 bg-white p-2 text-[11px] space-y-1">
                <div className="rounded-md bg-emerald-50 px-2 py-1.5 font-semibold text-emerald-800 flex items-center justify-between">
                  <span>Dashboard</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="px-2 py-1.5 text-slate-600 hover:text-slate-900 font-medium">Reconcile</div>
                <div className="px-2 py-1.5 text-slate-600 hover:text-slate-900 font-medium">GST 2.0</div>
                <div className="px-2 py-1.5 text-slate-600 hover:text-slate-900 font-medium">Journals</div>
                <div className="px-2 py-1.5 text-slate-600 hover:text-slate-900 font-medium">Reports</div>
                <div className="px-2 py-1.5 text-slate-400 font-medium hidden sm:block">Settings</div>
              </div>

              {/* Main Dashboard Panel */}
              <div className="p-3 sm:p-4 space-y-3">
                {/* Metric Cards Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-sm">
                    <div className="text-[10px] text-slate-500 font-medium">ARR / Revenue</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">$2.1M</div>
                    <div className="text-[9px] font-semibold text-emerald-600 flex items-center mt-0.5">
                      +14.2% YoY
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-sm">
                    <div className="text-[10px] text-slate-500 font-medium">Bank Match Rate</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">99.4%</div>
                    <div className="text-[9px] font-semibold text-emerald-600 flex items-center mt-0.5">
                      Autonomous
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-sm">
                    <div className="text-[10px] text-slate-500 font-medium">GST Compliance</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">100%</div>
                    <div className="text-[9px] font-semibold text-[#142d25] flex items-center mt-0.5">
                      Notification 9/2025
                    </div>
                  </div>
                </div>

                {/* Cash Flow Graph + Active Trajectory */}
                <div className="rounded-lg border border-slate-200/80 bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-bold text-slate-900">Cash Flow & Working Capital</div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Auto-Forecast
                    </span>
                  </div>
                  <div className="h-16 w-full">
                    <svg viewBox="0 0 400 65" className="h-full w-full overflow-visible" fill="none">
                      <defs>
                        <linearGradient id="mainMonitorGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 48 Q 60 42, 110 32 T 220 22 T 320 12 T 400 5 L 400 65 L 0 65 Z"
                        fill="url(#mainMonitorGrad)"
                      />
                      <path
                        d="M0 48 Q 60 42, 110 32 T 220 22 T 320 12 T 400 5"
                        stroke="#059669"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="400" cy="5" r="3.5" fill="#059669" />
                    </svg>
                  </div>
                </div>

                {/* Month-End Close Checklist */}
                <div className="rounded-lg border border-slate-200/80 bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      Month-End Close Automation
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">3 of 4 Ready</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between rounded bg-slate-50 px-2 py-1">
                      <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Bank Feeds Autonomous Reconciliation
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700">Matched 99.4%</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-slate-50 px-2 py-1">
                      <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        GST 2.0 Inward vs GSTR-2B ITC Check
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700">Reconciled</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-slate-50 px-2 py-1">
                      <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <span className="h-3.5 w-3.5 rounded-full border-2 border-amber-500 flex items-center justify-center text-[8px] text-amber-600 font-bold">
                          •
                        </span>
                        FIFO Cost Lot & Stock Movement Allocation
                      </span>
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                        Reviewing 2 Lots
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apple-Style Metallic Stand (Underneath the Monitor) */}
        <div
          className="relative flex flex-col items-center -mt-2 z-0"
          style={{
            transform: "rotateY(-14deg) rotateX(4deg)",
          }}
        >
          {/* Angled Metallic Stand Arm with Cable Pass-through Hole */}
          <div
            className="relative h-20 w-16 shadow-xl"
            style={{
              background: "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 50%, #71717a 100%)",
              clipPath: "polygon(20% 0%, 80% 0%, 95% 100%, 5% 100%)",
            }}
          >
            {/* Center Oval Cable Pass-Through Hole */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 h-7 w-7 rounded-full bg-[#142d25] ring-2 ring-[#71717a]" />
          </div>

          {/* Aluminum Stand Base Plate (Resting on Desk Surface) */}
          <div
            className="h-3 w-40 rounded-sm shadow-2xl"
            style={{
              background: "linear-gradient(90deg, #a1a1aa 0%, #e4e4e7 50%, #71717a 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            }}
          />

          {/* Soft Ground Contact Shadow */}
          <div className="h-4 w-52 -mt-1 rounded-full bg-black/60 blur-md" />
        </div>
      </div>
    </div>
  );
}
