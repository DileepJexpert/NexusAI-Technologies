"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Search,
  Bell,
  ShieldCheck,
  Building2,
  Activity,
} from "lucide-react";

interface HeroSlide {
  id: string;
  tabLabel: string;
  tabIcon: React.ReactNode;
  tagline: string;
  headlineMain: string;
  headlineMint: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
  tourText: string;
  tourHref: string;
  trustMetrics: string[];
  monitor: {
    headerApp: string;
    headerBadge: string;
    searchPlaceholder: string;
    userGreeting: string;
    userInitial: string;
    sidebarActive: string;
    sidebarItems: string[];
    metrics: { label: string; value: string; sub: string; subColor: string }[];
    chartTitle: string;
    chartTag: string;
    chartColor: string;
    chartFill: string;
    chartPath: string;
    checklistTitle: string;
    checklistSubtitle: string;
    checklists: { text: string; status: string; statusColor: string; ready: boolean }[];
    floatingTop: {
      avatar: string;
      role: string;
      name: string;
      metricLabel: string;
      metricValue: string;
      metricTrend: string;
      chartPath: string;
    };
    floatingMid: {
      title: string;
      sub: string;
    };
    floatingBottom: {
      title: string;
      sub: string;
      bars: number[];
    };
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: "finance-erp",
    tabLabel: "Finance ERP",
    tabIcon: <Building2 className="h-3.5 w-3.5" />,
    tagline: "The AI ERP That Runs While You Lead",
    headlineMain: "Month end\nshouldn't take",
    headlineMint: "all month",
    subheading:
      "Close 3 to 10 days faster with autonomous bank matching, multi-entity GL, and GST 2.0 intelligence built for Indian enterprise.",
    ctaText: "Try Katixo",
    ctaHref: "/contact",
    tourText: "Take a product tour",
    tourHref: "/docs",
    trustMetrics: [
      "Close in 24 Hours",
      "10x Transaction Volume",
      "₹0 Setup Fee",
      "GST 2.0 Auto-Rates",
    ],
    monitor: {
      headerApp: "Katixo",
      headerBadge: "Live ERP",
      searchPlaceholder: "Search entries, GST, bank...",
      userGreeting: "Andrew K.",
      userInitial: "A",
      sidebarActive: "Dashboard",
      sidebarItems: ["Reconcile", "GST 2.0", "Journals", "Reports"],
      metrics: [
        { label: "ARR / Revenue", value: "$2.1M", sub: "+14.2%", subColor: "text-emerald-600" },
        { label: "Bank Match Rate", value: "99.4%", sub: "Autonomous", subColor: "text-emerald-600" },
        { label: "GST Compliance", value: "100%", sub: "9/2025-CT", subColor: "text-[#142d25]" },
      ],
      chartTitle: "Cash Flow & Working Capital",
      chartTag: "Auto-Forecast",
      chartColor: "#b3ed97",
      chartFill: "rgba(179, 237, 151, 0.2)",
      chartPath: "M0 30 Q 55 25, 100 20 T 190 14 T 270 8 T 360 2",
      checklistTitle: "Month-End Close Automation",
      checklistSubtitle: "3 of 3 Ready",
      checklists: [
        { text: "Bank Feeds Autonomous Reconciliation", status: "Matched 99.4%", statusColor: "text-emerald-700", ready: true },
        { text: "GST 2.0 Inward vs GSTR-2B ITC Check", status: "Reconciled", statusColor: "text-emerald-700", ready: true },
      ],
      floatingTop: {
        avatar: "AK",
        role: "Controller",
        name: "Andrew K.",
        metricLabel: "ARR / Revenue",
        metricValue: "$2.1M",
        metricTrend: "+14%",
        chartPath: "M0 16 Q 18 14, 30 10 T 60 7 T 90 2",
      },
      floatingMid: {
        title: "AI Close Agent",
        sub: "Auto-reconciling 99.4%",
      },
      floatingBottom: {
        title: "Close faster by spend",
        sub: "Cash runway: 18 mo",
        bars: [40, 65, 50, 80, 100],
      },
    },
  },
  {
    id: "hospital-os",
    tabLabel: "Hospital OS",
    tabIcon: <Activity className="h-3.5 w-3.5" />,
    tagline: "NABH Clinical Operating System",
    headlineMain: "Patient care\nshouldn't wait in",
    headlineMint: "endless queues",
    subheading:
      "Run outpatient smart triage, consultant IPD rounds, ICU bed allocation, and automated insurance TPA clearance in one unified hospital OS.",
    ctaText: "Explore Hospital OS",
    ctaHref: "/docs/hospital",
    tourText: "Take a clinical tour",
    tourHref: "/docs/hospital",
    trustMetrics: [
      "160 Beds Real-Time Census",
      "Smart OPD Queue Triage",
      "NABH Clinical Ready",
      "Instant Insurance TPA",
    ],
    monitor: {
      headerApp: "Hospital OS",
      headerBadge: "NABH Clinical",
      searchPlaceholder: "Search UHID, OPD, Bed, Doctor...",
      userGreeting: "Dr. Priya S.",
      userInitial: "P",
      sidebarActive: "Clinical Hub",
      sidebarItems: ["OPD Queue", "IPD Wards", "Pharmacy", "Laboratory"],
      metrics: [
        { label: "IPD Bed Occupancy", value: "142 / 160", sub: "88.7%", subColor: "text-teal-600" },
        { label: "OPD Triage Today", value: "384 Pts", sub: "Avg: 8 min", subColor: "text-teal-600" },
        { label: "Pharmacy & Lab", value: "₹8.42L", sub: "Auto-Billed", subColor: "text-[#142d25]" },
      ],
      chartTitle: "Daily Patient Admissions & IPD Triage",
      chartTag: "Live Census",
      chartColor: "#b3ed97",
      chartFill: "rgba(179, 237, 151, 0.2)",
      chartPath: "M0 30 Q 60 24, 110 18 T 200 12 T 280 8 T 360 2",
      checklistTitle: "Clinical Operations & Triage Status",
      checklistSubtitle: "NABH Compliant",
      checklists: [
        { text: "OPD Queue Registration & Smart Triage", status: "384 Cleared", statusColor: "text-teal-700", ready: true },
        { text: "IPD Ward Consultant Rounds Recorded", status: "92% Done", statusColor: "text-teal-700", ready: true },
      ],
      floatingTop: {
        avatar: "PS",
        role: "Medical Supt",
        name: "Dr. Priya S.",
        metricLabel: "Bed Occupancy",
        metricValue: "88.7%",
        metricTrend: "+6%",
        chartPath: "M0 14 Q 20 12, 35 8 T 65 6 T 90 2",
      },
      floatingMid: {
        title: "AI Triage Agent",
        sub: "Auto-routing 384 Pts",
      },
      floatingBottom: {
        title: "Active Inpatients & ICU",
        sub: "Beds: 142 Active",
        bars: [55, 70, 65, 88, 92],
      },
    },
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 6.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = heroSlides[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-[#142d25] text-white pt-4 pb-6 md:pt-6 md:pb-8 lg:pt-6 lg:pb-10"
    >
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
        {/* Top Product Tabs: Slide between ERP and Hospital (Compact & Shifted Upward) */}
        <div className="mb-3 sm:mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#10241e]/90 p-0.5 backdrop-blur-md">
            {heroSlides.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                  activeIndex === idx
                    ? "bg-[#b3ed97] text-[#142d25] shadow-xs"
                    : "text-[#c2d9cc] hover:text-white hover:bg-white/10"
                }`}
              >
                {item.tabIcon}
                <span>{item.tabLabel}</span>
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#b8d1c5]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#b3ed97] animate-pulse" />
            <span>Interactive 3D Studio Monitor</span>
          </div>
        </div>

        {/* 2-Column Hero Layout matching Campfire Screenshot (Compact & Uncropped) */}
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 xl:gap-10">
          {/* LEFT COLUMN: Animated Value Proposition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex max-w-lg flex-col items-start text-left"
            >
              {/* Enterprise Tag */}
              <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#b3ed97]/30 bg-[#10241e]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#b3ed97] backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b3ed97]" />
                {slide.tagline}
              </div>

              {/* Campfire Headline (Compact, Fits in 3 Lines Cleanly) */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] xl:text-[3.35rem] font-bold tracking-tight text-white leading-[1.03] whitespace-pre-line">
                {slide.headlineMain}
                <br />
                <span className="text-[#b3ed97]">{slide.headlineMint}</span>
              </h1>

              {/* Subheading */}
              <p className="mt-3 max-w-md text-xs sm:text-sm text-[#c2d9cc] leading-normal">
                {slide.subheading}
              </p>

              {/* Signature Campfire Pill Button with Orange Circular Arrow */}
              <div className="mt-4 sm:mt-5 flex items-center gap-4">
                <Link
                  href={slide.ctaHref}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#b3ed97] pl-6 pr-1.5 py-1.5 text-xs sm:text-sm font-semibold text-[#142d25] shadow-lg hover:bg-[#a6e688] transition-all hover:shadow-[#b3ed97]/25"
                >
                  <span>{slide.ctaText}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff862f] text-white shadow-xs transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link
                  href={slide.tourHref}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#b3ed97] hover:text-white transition-colors"
                >
                  {slide.tourText} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Trust & Performance Metrics */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-[11px] font-semibold text-[#b8d1c5]">
                {slide.trustMetrics.map((tm, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#b3ed97] shrink-0" />
                    <span>{tm}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT COLUMN: The 3D Studio Monitor with Aluminum Stand & Orbital Rings (Scaled Neatly) */}
          <div className="relative w-full select-none py-1">
            {/* Ambient background glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 opacity-40 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 60% 45%, rgba(179, 237, 151, 0.16), rgba(20, 45, 37, 0.4) 40%, transparent 70%)",
              }}
            />

            {/* Orbital Dotted Rings & Star Nodes */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-visible"
            >
              <svg
                viewBox="0 0 650 420"
                className="h-[115%] w-[115%] -translate-y-2 opacity-60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Orbit */}
                <ellipse
                  cx="340"
                  cy="210"
                  rx="300"
                  ry="170"
                  transform="rotate(-13 340 210)"
                  stroke="#b3ed97"
                  strokeWidth="1.1"
                  strokeDasharray="4 6"
                  strokeOpacity="0.25"
                />
                {/* Inner Orbit */}
                <ellipse
                  cx="340"
                  cy="210"
                  rx="240"
                  ry="130"
                  transform="rotate(-10 340 210)"
                  stroke="#b3ed97"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  strokeOpacity="0.3"
                />

                {/* Star nodes */}
                <g transform="translate(340, 45)">
                  <circle cx="0" cy="0" r="8" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.6" />
                  <circle cx="0" cy="0" r="2" fill="#b3ed97" />
                </g>
                <g transform="translate(80, 270)">
                  <circle cx="0" cy="0" r="7" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.5" />
                  <circle cx="0" cy="0" r="1.8" fill="#b3ed97" />
                </g>
                <g transform="translate(580, 310)">
                  <circle cx="0" cy="0" r="7" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.5" />
                  <circle cx="0" cy="0" r="1.8" fill="#b3ed97" />
                </g>
              </svg>
            </div>

            {/* Floating Card 1: Top-Right (User Avatar + Metric Sparkline) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`top-${slide.id}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="absolute -top-3 right-0 sm:right-2 z-30 flex items-center gap-1.5 scale-90 sm:scale-95 origin-right"
              >
                {/* User Avatar Chip */}
                <div className="flex items-center gap-1.5 rounded-lg border border-[#b3ed97]/30 bg-[#142d25]/95 px-2 py-1 text-white shadow-lg backdrop-blur-md">
                  <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700/80 ring-1 ring-[#b3ed97]/50 text-[9px] font-bold text-white">
                    {slide.monitor.floatingTop.avatar}
                    <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-[#b3ed97] ring-1 ring-[#142d25]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] uppercase tracking-wider text-[#b3ed97] font-semibold">
                      {slide.monitor.floatingTop.role}
                    </div>
                    <div className="text-[10px] font-bold text-white leading-tight">
                      {slide.monitor.floatingTop.name}
                    </div>
                  </div>
                </div>

                {/* Metric Box */}
                <div className="rounded-lg border border-[#b3ed97]/30 bg-[#142d25]/95 px-2 py-1 text-white shadow-lg backdrop-blur-md min-w-[90px]">
                  <div className="text-[8px] text-emerald-200/70 font-medium">
                    {slide.monitor.floatingTop.metricLabel}
                  </div>
                  <div className="text-xs font-bold text-white tracking-tight flex items-center gap-1 mt-0.2">
                    {slide.monitor.floatingTop.metricValue}
                    <span className="text-[8px] font-semibold text-[#b3ed97] flex items-center">
                      <TrendingUp className="h-2 w-2" />
                      {slide.monitor.floatingTop.metricTrend}
                    </span>
                  </div>
                  <div className="mt-0.5 h-3 w-full">
                    <svg viewBox="0 0 90 20" className="h-full w-full overflow-visible" fill="none">
                      <path
                        d={slide.monitor.floatingTop.chartPath}
                        stroke="#b3ed97"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Card 2: Middle-Right (AI Agent Toggle) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`mid-${slide.id}`}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute top-[42%] -right-1 sm:right-1 z-30 scale-90 sm:scale-95 origin-right"
              >
                <div className="flex items-center gap-2 rounded-lg border border-[#b3ed97]/35 bg-[#142d25]/95 px-2.5 py-1 text-white shadow-lg backdrop-blur-md">
                  <div className="flex h-4 w-4 items-center justify-center rounded-md bg-[#b3ed97]/20 text-[#b3ed97]">
                    <Sparkles className="h-2.5 w-2.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-white flex items-center gap-1">
                      {slide.monitor.floatingMid.title}
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b3ed97] animate-pulse" />
                    </div>
                    <div className="text-[8px] text-[#b3ed97]">{slide.monitor.floatingMid.sub}</div>
                  </div>
                  <div className="ml-1 flex h-3.5 w-6 items-center rounded-full bg-[#b3ed97] p-0.5 shadow-inner">
                    <div className="h-2.5 w-2.5 translate-x-2.5 rounded-full bg-[#142d25] shadow-xs" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Card 3: Bottom-Left (Automated Spend & Metric) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bot-${slide.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-3 -left-1 sm:left-1 z-30 scale-90 sm:scale-95 origin-left"
              >
                <div className="rounded-lg border border-[#b3ed97]/35 bg-[#142d25]/95 p-2 text-white shadow-lg backdrop-blur-md max-w-[145px]">
                  <div className="text-[8px] font-medium text-emerald-200/80">
                    {slide.monitor.floatingBottom.title}
                  </div>
                  <div className="mt-0.2 text-[10px] font-bold text-white">
                    {slide.monitor.floatingBottom.sub}
                  </div>
                  {/* Mini Bar Chart */}
                  <div className="mt-1 flex items-end gap-1 h-5 w-full pt-0.5">
                    {slide.monitor.floatingBottom.bars.map((bar, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-[#b3ed97]"
                        style={{ height: `${bar}%`, opacity: 0.4 + i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 3D Tilted Studio Monitor Chassis (Sleek Compact Dimensions) */}
            <div
              className="relative z-10 flex flex-col items-center"
              style={{ perspective: "1100px" }}
            >
              <div
                className="relative w-full max-w-[430px] sm:max-w-[460px] rounded-xl bg-[#090b0a] p-1.5 ring-1 ring-white/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:rotate-0"
                style={{
                  transform: "rotateY(-12deg) rotateX(3deg) translateZ(0)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Top Bezel Webcam Notch */}
                <div className="absolute top-0.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-slate-700" />
                  <span className="h-0.5 w-0.5 rounded-full bg-emerald-400" />
                </div>

                {/* Screen Content Window */}
                <div className="relative overflow-hidden rounded-lg bg-white text-slate-800 shadow-inner">
                  {/* App Header */}
                  <div className="flex h-8 items-center justify-between border-b border-slate-100 bg-[#fafbfa] px-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff862f]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b3ed97]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      </div>
                      <div className="flex items-center gap-1 border-l border-slate-200 pl-1.5">
                        <span className="font-heading text-[10px] font-bold tracking-tight text-[#142d25]">
                          {slide.monitor.headerApp}
                        </span>
                        <span className="rounded-full bg-emerald-50 px-1 py-0.2 text-[7px] font-bold text-emerald-700 border border-emerald-200">
                          {slide.monitor.headerBadge}
                        </span>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center gap-1 rounded border border-slate-200/80 bg-white px-1.5 py-0.5 text-[9px] text-slate-400 w-32 sm:w-36 shadow-2xs">
                      <Search className="h-2 w-2 text-slate-400" />
                      <span className="truncate">{slide.monitor.searchPlaceholder}</span>
                    </div>

                    {/* User greeting */}
                    <div className="flex items-center gap-1 text-[9px] font-semibold text-slate-700">
                      <span className="hidden sm:inline">{slide.monitor.userGreeting}</span>
                      <div className="h-3.5 w-3.5 rounded-full bg-[#142d25] text-white flex items-center justify-center text-[7px]">
                        {slide.monitor.userInitial}
                      </div>
                    </div>
                  </div>

                  {/* App Body (Sleek Compact Height: min-h-[195px] instead of 280px) */}
                  <div className="grid grid-cols-[65px_1fr] sm:grid-cols-[90px_1fr] bg-[#f8faf8] min-h-[195px] sm:min-h-[215px]">
                    {/* Mini Left Sidebar */}
                    <div className="border-r border-slate-200/70 bg-white p-1 text-[9px] space-y-0.5">
                      <div className="rounded bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-800 flex items-center justify-between text-[9px]">
                        <span>{slide.monitor.sidebarActive}</span>
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                      </div>
                      {slide.monitor.sidebarItems.map((item) => (
                        <div
                          key={item}
                          className="px-1.5 py-0.5 text-slate-600 hover:text-slate-900 font-medium"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Main Panel Content */}
                    <div className="p-2 space-y-1.5">
                      {/* Metric Cards Row */}
                      <div className="grid grid-cols-3 gap-1">
                        {slide.monitor.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded border border-slate-200/80 bg-white p-1 shadow-2xs"
                          >
                            <div className="text-[8px] text-slate-500 font-medium truncate">{m.label}</div>
                            <div className="text-xs font-bold text-slate-900 leading-tight">{m.value}</div>
                            <div className={`text-[7px] font-semibold ${m.subColor} truncate`}>
                              {m.sub}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Graph Panel */}
                      <div className="rounded border border-slate-200/80 bg-white p-1.5 shadow-2xs">
                        <div className="flex items-center justify-between mb-0.5">
                          <div className="text-[9px] font-bold text-slate-900">{slide.monitor.chartTitle}</div>
                          <span className="text-[7px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded-full border border-emerald-200">
                            {slide.monitor.chartTag}
                          </span>
                        </div>
                        <div className="h-8 w-full">
                          <svg viewBox="0 0 360 40" className="h-full w-full overflow-visible" fill="none">
                            <path
                              d="M0 32 Q 55 26, 100 20 T 190 14 T 270 8 T 360 2 L 360 40 L 0 40 Z"
                              fill={slide.monitor.chartFill}
                            />
                            <path
                              d={slide.monitor.chartPath}
                              stroke="#059669"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <circle cx="360" cy="2" r="2" fill="#059669" />
                          </svg>
                        </div>
                      </div>

                      {/* Checklist Panel (2 High-Impact Items) */}
                      <div className="rounded border border-slate-200/80 bg-white p-1.5 shadow-2xs">
                        <div className="flex items-center justify-between mb-0.5">
                          <div className="text-[9px] font-bold text-slate-900 flex items-center gap-1">
                            <ShieldCheck className="h-2.5 w-2.5 text-emerald-600" />
                            {slide.monitor.checklistTitle}
                          </div>
                          <span className="text-[7px] text-slate-500 font-medium">
                            {slide.monitor.checklistSubtitle}
                          </span>
                        </div>
                        <div className="space-y-0.5 text-[8px]">
                          {slide.monitor.checklists.map((c, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between rounded bg-slate-50 px-1 py-0.5"
                            >
                              <span className="flex items-center gap-1 text-slate-700 font-medium truncate max-w-[170px]">
                                <CheckCircle2 className="h-2 w-2 text-emerald-600 shrink-0" />
                                <span className="truncate">{c.text}</span>
                              </span>
                              <span className={`text-[7px] font-semibold ${c.statusColor} shrink-0`}>
                                {c.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Aluminum Monitor Stand with Cable Hole */}
              <div
                className="relative flex flex-col items-center -mt-1 z-0"
                style={{ transform: "rotateY(-12deg) rotateX(3deg)" }}
              >
                {/* Stem */}
                <div
                  className="relative h-9 w-10 shadow-md"
                  style={{
                    background: "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 50%, #71717a 100%)",
                    clipPath: "polygon(22% 0%, 78% 0%, 92% 100%, 8% 100%)",
                  }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#142d25] ring-1 ring-[#71717a]" />
                </div>

                {/* Aluminum Base Plate */}
                <div
                  className="h-1.5 w-24 rounded-xs shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, #a1a1aa 0%, #e4e4e7 50%, #71717a 100%)",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.5)",
                  }}
                />

                {/* Ground Contact Shadow */}
                <div className="h-2 w-32 -mt-0.5 rounded-full bg-black/60 blur-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Controls (Compact, Uncropped, Sits Snug Above Fold) */}
        <div className="mt-4 sm:mt-5 flex items-center justify-between px-2">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all shadow-xs hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Bottom Indicators */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 backdrop-blur-md border border-white/10">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 ${
                  activeIndex === idx
                    ? "h-1.5 w-5 rounded-full bg-[#b3ed97]"
                    : "h-1.5 w-1.5 rounded-full bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all shadow-xs hover:scale-105 active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Elegant Curved Bottom Divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", height: 40, width: "100%" }}
        >
          <path
            className="fill-[#0c1f17]"
            d="M0,22 C360,40 1080,0 1440,22 L1440,40 L0,40 Z"
          />
        </svg>
      </div>
    </section>
  );
}
