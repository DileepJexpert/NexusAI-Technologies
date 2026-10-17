"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Bell,
  Search,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Activity,
  Bed,
  Stethoscope,
  Truck,
  Building2,
} from "lucide-react";

interface ProductSlide {
  id: string;
  name: string;
  categoryBadge: string;
  badgeIcon: React.ReactNode;
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
  checklistTitle: string;
  checklistSubtitle: string;
  checklists: { text: string; status: string; statusColor: string; ready: boolean }[];
  floatingCardTop: {
    avatar: string;
    role: string;
    name: string;
    metricLabel: string;
    metricValue: string;
    metricTrend: string;
    chartPath: string;
  };
  floatingCardMid: {
    title: string;
    sub: string;
  };
  floatingCardBottom: {
    title: string;
    sub: string;
    bars: number[];
  };
}

const productSlides: ProductSlide[] = [
  {
    id: "finance-erp",
    name: "Finance ERP",
    categoryBadge: "Katasticho ERP",
    badgeIcon: <Building2 className="h-3.5 w-3.5 text-[#b3ed97]" />,
    headerApp: "Katixo",
    headerBadge: "Live ERP",
    searchPlaceholder: "Search entries, GST, bank...",
    userGreeting: "Andrew K.",
    userInitial: "A",
    sidebarActive: "Dashboard",
    sidebarItems: ["Reconcile", "GST 2.0", "Journals", "Reports"],
    metrics: [
      { label: "ARR / Revenue", value: "$2.1M", sub: "+14.2% YoY", subColor: "text-emerald-600" },
      { label: "Bank Match Rate", value: "99.4%", sub: "Autonomous", subColor: "text-emerald-600" },
      { label: "GST Compliance", value: "100%", sub: "Notification 9/2025", subColor: "text-[#142d25]" },
    ],
    chartTitle: "Cash Flow & Working Capital",
    chartTag: "Auto-Forecast",
    chartColor: "#059669",
    chartFill: "rgba(16, 185, 129, 0.25)",
    checklistTitle: "Month-End Close Automation",
    checklistSubtitle: "3 of 4 Ready",
    checklists: [
      { text: "Bank Feeds Autonomous Reconciliation", status: "Matched 99.4%", statusColor: "text-emerald-700", ready: true },
      { text: "GST 2.0 Inward vs GSTR-2B ITC Check", status: "Reconciled", statusColor: "text-emerald-700", ready: true },
      { text: "FIFO Cost Lot & Stock Movement Allocation", status: "Reviewing 2 Lots", statusColor: "text-amber-700", ready: false },
    ],
    floatingCardTop: {
      avatar: "AK",
      role: "Controller",
      name: "Andrew K.",
      metricLabel: "ARR / Revenue",
      metricValue: "$2.1M",
      metricTrend: "+14%",
      chartPath: "M0 16 Q 18 14, 30 10 T 60 7 T 90 2",
    },
    floatingCardMid: {
      title: "AI Close Agent",
      sub: "Auto-reconciling 99.4%",
    },
    floatingCardBottom: {
      title: "Close faster by spend",
      sub: "Cash runway: 18 mo",
      bars: [40, 65, 50, 80, 100],
    },
  },
  {
    id: "hospital-os",
    name: "Hospital OS",
    categoryBadge: "Healthcare & IPD",
    badgeIcon: <Activity className="h-3.5 w-3.5 text-[#b3ed97]" />,
    headerApp: "Hospital OS",
    headerBadge: "NABH Clinical",
    searchPlaceholder: "Search UHID, OPD, Bed, Doctor...",
    userGreeting: "Dr. Priya S.",
    userInitial: "P",
    sidebarActive: "Clinical Hub",
    sidebarItems: ["OPD Queue", "IPD Wards", "Pharmacy", "Laboratory"],
    metrics: [
      { label: "IPD Bed Occupancy", value: "142 / 160", sub: "88.7% Occupied", subColor: "text-teal-600" },
      { label: "OPD Triage Today", value: "384 Pts", sub: "Avg wait: 8 mins", subColor: "text-teal-600" },
      { label: "Pharmacy & Lab", value: "₹8.42L", sub: "Auto-Billed", subColor: "text-[#142d25]" },
    ],
    chartTitle: "Daily Patient Admissions & IPD Triage",
    chartTag: "Live Census",
    chartColor: "#0d9488",
    chartFill: "rgba(13, 148, 136, 0.25)",
    checklistTitle: "Clinical Operations & Triage Status",
    checklistSubtitle: "NABH Compliant",
    checklists: [
      { text: "OPD Queue Registration & Smart Triage", status: "384 Cleared", statusColor: "text-teal-700", ready: true },
      { text: "IPD Ward Consultant Rounds Recorded", status: "92% Completed", statusColor: "text-teal-700", ready: true },
      { text: "Emergency OT 3 Sterilization & Prep", status: "Ready for Surgery", statusColor: "text-emerald-700", ready: true },
    ],
    floatingCardTop: {
      avatar: "PS",
      role: "Medical Supt",
      name: "Dr. Priya S.",
      metricLabel: "Bed Occupancy",
      metricValue: "88.7%",
      metricTrend: "+6% Census",
      chartPath: "M0 14 Q 20 12, 35 8 T 65 6 T 90 2",
    },
    floatingCardMid: {
      title: "AI Triage Agent",
      sub: "Auto-routing 384 Pts",
    },
    floatingCardBottom: {
      title: "Active Inpatients & ICU",
      sub: "Beds: 142 Active",
      bars: [55, 70, 65, 88, 92],
    },
  },
  {
    id: "fmcg-sales",
    name: "FMCG Route Vans",
    categoryBadge: "Distribution Pack",
    badgeIcon: <Truck className="h-3.5 w-3.5 text-[#b3ed97]" />,
    headerApp: "Field Sales",
    headerBadge: "Van Routing",
    searchPlaceholder: "Search Route, Van, Retailer...",
    userGreeting: "Vikram R.",
    userInitial: "V",
    sidebarActive: "Beat Routes",
    sidebarItems: ["Van Stock", "Retailers", "Collections", "Day Close"],
    metrics: [
      { label: "Active Route Vans", value: "18 Vans", sub: "100% On Beat", subColor: "text-emerald-600" },
      { label: "Van Sales Today", value: "₹14.28L", sub: "Target: 112%", subColor: "text-emerald-600" },
      { label: "Cash Reconciled", value: "₹12.65L", sub: "Zero Cash Discrepancy", subColor: "text-[#142d25]" },
    ],
    chartTitle: "Route Beat Completion & Van Stock Velocity",
    chartTag: "Live GPS",
    chartColor: "#059669",
    chartFill: "rgba(5, 150, 105, 0.25)",
    checklistTitle: "Daily Field Sales & Day-Close Wizard",
    checklistSubtitle: "18 Beats Running",
    checklists: [
      { text: "Morning Van Stock Loading & Transfer Confirm", status: "18/18 Loaded", statusColor: "text-emerald-700", ready: true },
      { text: "Retailer GPS Visits & Cash Collection", status: "84 Visits Done", statusColor: "text-emerald-700", ready: true },
      { text: "Evening Van Return & Day-Close Cash Count", status: "Balanced", statusColor: "text-emerald-700", ready: true },
    ],
    floatingCardTop: {
      avatar: "VR",
      role: "Route Head",
      name: "Vikram R.",
      metricLabel: "Beat Volume",
      metricValue: "₹14.2L",
      metricTrend: "+18%",
      chartPath: "M0 17 Q 20 15, 40 10 T 70 5 T 90 2",
    },
    floatingCardMid: {
      title: "Van Stock Agent",
      sub: "Auto-balancing 18 vans",
    },
    floatingCardBottom: {
      title: "Daily collections rate",
      sub: "Cash drawer: ₹12.6L",
      bars: [45, 60, 75, 85, 98],
    },
  },
];

export function CampfireStudioMonitor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation every 6 seconds unless paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = productSlides[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + productSlides.length) % productSlides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % productSlides.length);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative mx-auto w-full max-w-[480px] sm:max-w-[510px] lg:max-w-[530px] xl:max-w-[550px] select-none py-2"
    >
      {/* Product Carousel Switcher Tabs (Above Monitor) */}
      <div className="mb-3 flex items-center justify-between px-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#b3ed97]/30 bg-[#10241e]/90 p-1 backdrop-blur-md">
          {productSlides.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                activeIndex === idx
                  ? "bg-[#b3ed97] text-[#142d25] shadow-sm"
                  : "text-[#c2d9cc] hover:text-white hover:bg-white/10"
              }`}
            >
              {item.badgeIcon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Prev / Next Slide Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-[#142d25] text-white hover:bg-[#1f4236] transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-[#142d25] text-white hover:bg-[#1f4236] transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 45%, rgba(179, 237, 151, 0.16), rgba(20, 45, 37, 0.4) 40%, transparent 70%)",
        }}
      />

      {/* Orbital Dotted Rings & Star Nodes (Campfire signature, scaled down) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-visible"
      >
        <svg
          viewBox="0 0 700 480"
          className="h-[120%] w-[120%] -translate-y-2 opacity-70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Orbit */}
          <ellipse
            cx="370"
            cy="240"
            rx="330"
            ry="190"
            transform="rotate(-13 370 240)"
            stroke="#b3ed97"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            strokeOpacity="0.25"
          />
          {/* Middle Orbit */}
          <ellipse
            cx="370"
            cy="240"
            rx="270"
            ry="150"
            transform="rotate(-11 370 240)"
            stroke="#b3ed97"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            strokeOpacity="0.3"
          />
          {/* Inner Orbit */}
          <ellipse
            cx="370"
            cy="240"
            rx="210"
            ry="115"
            transform="rotate(-9 370 240)"
            stroke="#b3ed97"
            strokeWidth="1"
            strokeDasharray="3 4"
            strokeOpacity="0.2"
          />

          {/* Star nodes */}
          <g transform="translate(370, 55)">
            <circle cx="0" cy="0" r="9" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="0" cy="0" r="2.5" fill="#b3ed97" />
          </g>
          <g transform="translate(90, 310)">
            <circle cx="0" cy="0" r="8" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="0" cy="0" r="2" fill="#b3ed97" />
          </g>
          <g transform="translate(630, 350)">
            <circle cx="0" cy="0" r="8" fill="#142d25" stroke="#b3ed97" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="0" cy="0" r="2" fill="#b3ed97" />
          </g>
        </svg>
      </div>

      {/* Floating Card 1: Top-Right (User Avatar + Metric Sparkline) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`top-${slide.id}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-2 right-1 sm:right-3 md:right-4 z-30 flex items-center gap-1.5"
        >
          {/* User Avatar Chip */}
          <div className="flex items-center gap-1.5 rounded-lg border border-[#b3ed97]/30 bg-[#142d25]/95 px-2 py-1 text-white shadow-xl backdrop-blur-md">
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700/80 ring-1 ring-[#b3ed97]/50 text-[10px] font-bold text-white">
              {slide.floatingCardTop.avatar}
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#b3ed97] ring-1 ring-[#142d25]" />
            </div>
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-[#b3ed97] font-semibold">
                {slide.floatingCardTop.role}
              </div>
              <div className="text-[11px] font-bold text-white leading-tight">
                {slide.floatingCardTop.name}
              </div>
            </div>
          </div>

          {/* Metric Box */}
          <div className="rounded-lg border border-[#b3ed97]/30 bg-[#142d25]/95 px-2.5 py-1.5 text-white shadow-xl backdrop-blur-md min-w-[100px]">
            <div className="text-[9px] text-emerald-200/70 font-medium">
              {slide.floatingCardTop.metricLabel}
            </div>
            <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1 mt-0.2">
              {slide.floatingCardTop.metricValue}
              <span className="text-[9px] font-semibold text-[#b3ed97] flex items-center">
                <TrendingUp className="h-2.5 w-2.5" />
                {slide.floatingCardTop.metricTrend}
              </span>
            </div>
            <div className="mt-1 h-3.5 w-full">
              <svg viewBox="0 0 90 20" className="h-full w-full overflow-visible" fill="none">
                <path
                  d={slide.floatingCardTop.chartPath}
                  stroke="#b3ed97"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Card 2: Middle-Right (AI Agent) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`mid-${slide.id}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[48%] -right-2 sm:right-1 md:right-2 z-30"
        >
          <div className="flex items-center gap-2.5 rounded-lg border border-[#b3ed97]/35 bg-[#142d25]/95 px-2.5 py-1.5 text-white shadow-xl backdrop-blur-md">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#b3ed97]/20 text-[#b3ed97]">
              <Sparkles className="h-3 w-3" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-white flex items-center gap-1">
                {slide.floatingCardMid.title}
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b3ed97] animate-pulse" />
              </div>
              <div className="text-[9px] text-[#b3ed97]">{slide.floatingCardMid.sub}</div>
            </div>
            {/* Active toggle */}
            <div className="ml-1 flex h-4 w-7 items-center rounded-full bg-[#b3ed97] p-0.5 shadow-inner">
              <div className="h-3 w-3 translate-x-3 rounded-full bg-[#142d25] shadow" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Card 3: Bottom-Left (Automated Spend & Metric) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bot-${slide.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-5 -left-2 sm:left-1 md:left-2 z-30"
        >
          <div className="rounded-lg border border-[#b3ed97]/35 bg-[#142d25]/95 p-2.5 text-white shadow-xl backdrop-blur-md max-w-[160px]">
            <div className="text-[9px] font-medium text-emerald-200/80">
              {slide.floatingCardBottom.title}
            </div>
            <div className="mt-0.2 text-[11px] font-bold text-white">
              {slide.floatingCardBottom.sub}
            </div>
            {/* Mini Bar Chart */}
            <div className="mt-1.5 flex items-end gap-1 h-6 w-full pt-0.5">
              {slide.floatingCardBottom.bars.map((bar, i) => (
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

      {/* 3D Tilted Studio Monitor Chassis (Scaled down like Campfire) */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ perspective: "1100px" }}
      >
        <div
          className="relative w-full rounded-xl bg-[#090b0a] p-1.5 ring-1 ring-white/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:rotate-0"
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
            <div className="flex h-9 items-center justify-between border-b border-slate-100 bg-[#fafbfa] px-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#ff862f]" />
                  <span className="h-2 w-2 rounded-full bg-[#b3ed97]" />
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                </div>
                <div className="flex items-center gap-1.5 border-l border-slate-200 pl-2">
                  <span className="font-heading text-[11px] font-bold tracking-tight text-[#142d25]">
                    {slide.headerApp}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-1.5 py-0.2 text-[8px] font-bold text-emerald-700 border border-emerald-200">
                    {slide.headerBadge}
                  </span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex items-center gap-1 rounded border border-slate-200/80 bg-white px-2 py-0.5 text-[10px] text-slate-400 w-36 sm:w-44 shadow-xs">
                <Search className="h-2.5 w-2.5 text-slate-400" />
                <span className="truncate">{slide.searchPlaceholder}</span>
              </div>

              {/* User greeting */}
              <div className="flex items-center gap-1.5">
                <Bell className="h-3 w-3 text-slate-400" />
                <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700">
                  <span className="hidden sm:inline">{slide.userGreeting}</span>
                  <div className="h-4 w-4 rounded-full bg-[#142d25] text-white flex items-center justify-center text-[8px]">
                    {slide.userInitial}
                  </div>
                </div>
              </div>
            </div>

            {/* App Body */}
            <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[105px_1fr] bg-[#f8faf8] min-h-[260px] sm:min-h-[290px]">
              {/* Mini Left Sidebar */}
              <div className="border-r border-slate-200/70 bg-white p-1.5 text-[10px] space-y-0.5">
                <div className="rounded bg-emerald-50 px-1.5 py-1 font-semibold text-emerald-800 flex items-center justify-between text-[10px]">
                  <span>{slide.sidebarActive}</span>
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                </div>
                {slide.sidebarItems.map((item) => (
                  <div
                    key={item}
                    className="px-1.5 py-1 text-slate-600 hover:text-slate-900 font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main Panel Content */}
              <div className="p-2.5 sm:p-3 space-y-2">
                {/* Metric Cards Row */}
                <div className="grid grid-cols-3 gap-1.5">
                  {slide.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded border border-slate-200/80 bg-white p-1.5 shadow-2xs"
                    >
                      <div className="text-[9px] text-slate-500 font-medium truncate">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{m.value}</div>
                      <div className={`text-[8px] font-semibold ${m.subColor} truncate`}>
                        {m.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Graph Panel */}
                <div className="rounded border border-slate-200/80 bg-white p-2 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[10px] font-bold text-slate-900">{slide.chartTitle}</div>
                    <span className="text-[8px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200">
                      {slide.chartTag}
                    </span>
                  </div>
                  <div className="h-12 w-full">
                    <svg viewBox="0 0 360 50" className="h-full w-full overflow-visible" fill="none">
                      <path
                        d="M0 40 Q 55 35, 100 28 T 190 20 T 270 12 T 360 4 L 360 50 L 0 50 Z"
                        fill={slide.chartFill}
                      />
                      <path
                        d="M0 40 Q 55 35, 100 28 T 190 20 T 270 12 T 360 4"
                        stroke={slide.chartColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="360" cy="4" r="2.5" fill={slide.chartColor} />
                    </svg>
                  </div>
                </div>

                {/* Checklist Panel */}
                <div className="rounded border border-slate-200/80 bg-white p-2 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-emerald-600" />
                      {slide.checklistTitle}
                    </div>
                    <span className="text-[8px] text-slate-500 font-medium">
                      {slide.checklistSubtitle}
                    </span>
                  </div>
                  <div className="space-y-1 text-[9px]">
                    {slide.checklists.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded bg-slate-50 px-1.5 py-0.5"
                      >
                        <span className="flex items-center gap-1 text-slate-700 font-medium truncate max-w-[190px]">
                          {c.ready ? (
                            <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600 shrink-0" />
                          ) : (
                            <span className="h-2.5 w-2.5 rounded-full border border-amber-500 flex items-center justify-center text-[7px] text-amber-600 font-bold shrink-0">
                              •
                            </span>
                          )}
                          <span className="truncate">{c.text}</span>
                        </span>
                        <span className={`text-[8px] font-semibold ${c.statusColor} shrink-0`}>
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

        {/* Scaled Metallic Stand (Underneath Monitor) */}
        <div
          className="relative flex flex-col items-center -mt-1.5 z-0"
          style={{ transform: "rotateY(-12deg) rotateX(3deg)" }}
        >
          <div
            className="relative h-14 w-12 shadow-lg"
            style={{
              background: "linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 50%, #71717a 100%)",
              clipPath: "polygon(22% 0%, 78% 0%, 92% 100%, 8% 100%)",
            }}
          >
            {/* Center Oval Cable Pass-Through Hole */}
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-[#142d25] ring-1 ring-[#71717a]" />
          </div>

          {/* Aluminum Stand Base Plate */}
          <div
            className="h-2 w-28 rounded-xs shadow-xl"
            style={{
              background: "linear-gradient(90deg, #a1a1aa 0%, #e4e4e7 50%, #71717a 100%)",
              boxShadow: "0 8px 18px rgba(0,0,0,0.5)",
            }}
          />

          {/* Soft Ground Contact Shadow */}
          <div className="h-3 w-36 -mt-0.5 rounded-full bg-black/60 blur-xs" />
        </div>
      </div>
    </div>
  );
}
