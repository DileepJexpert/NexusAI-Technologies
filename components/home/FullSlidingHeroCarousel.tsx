"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Activity,
  Truck,
  Pill,
  Sparkles,
  TrendingUp,
  Search,
  Bell,
  ShieldCheck,
} from "lucide-react";

interface SlideData {
  id: string;
  tabLabel: string;
  tabIcon: React.ReactNode;
  categoryTag: string;
  headlinePrefix: string;
  headlineHighlight: string;
  subheading: string;
  badges: { icon: string; text: string }[];
  sealBadge: { text: string; sub: string };
  metricHeader: string;
  metricLabel: string;
  metricValue: string;
  metricTrend: string;
  metricDescription: string;
  monitor: {
    appHeader: string;
    appBadge: string;
    searchPlaceholder: string;
    userGreeting: string;
    userInitial: string;
    sidebarActive: string;
    sidebarItems: string[];
    topMetric: { label: string; value: string; sub: string };
    chartTitle: string;
    chartTag: string;
    chartColor: string;
    chartPath: string;
    checklistTitle: string;
    checklists: { text: string; status: string; ready: boolean }[];
    floatingBadgeTop: {
      role: string;
      name: string;
      value: string;
      trend: string;
    };
  };
}

const slides: SlideData[] = [
  {
    id: "finance-erp",
    tabLabel: "Finance ERP",
    tabIcon: <Building2 className="h-3.5 w-3.5" />,
    categoryTag: "OFFICIAL 2026 ENTERPRISE RELEASE",
    headlinePrefix: "KATASTICHO FINANCE ERP & ",
    headlineHighlight: "GENERAL LEDGER",
    subheading:
      "Autonomous 3-way invoice matching, multi-entity journals, and 24-hour financial close without spreadsheets.",
    badges: [
      { icon: "🏢", text: "Multi-Entity Consolidation" },
      { icon: "⚡", text: "99.4% Bank Match" },
      { icon: "📜", text: "GST 2.0 Notification 9/2025-CT" },
    ],
    sealBadge: {
      text: "KATASTICHO",
      sub: "ENTERPRISE",
    },
    metricHeader: "CATALOGUE BENCHMARK",
    metricLabel: "Autonomous Bank Match",
    metricValue: "99.4%",
    metricTrend: "+14.2% YoY &bull; 24h Month-End Close",
    metricDescription:
      "Cut out 90% of manual tasks with autonomous bank feed matching, multi-entity consolidation, and Ind-AS compliant journals.",
    monitor: {
      appHeader: "Katixo ERP",
      appBadge: "Live Ledger",
      searchPlaceholder: "Search journals, GST, bank...",
      userGreeting: "Andrew K.",
      userInitial: "A",
      sidebarActive: "Dashboard",
      sidebarItems: ["Reconcile", "GST 2.0", "Journals", "Reports"],
      topMetric: { label: "ARR / Revenue", value: "$2.1M", sub: "+14.2% YoY" },
      chartTitle: "Cash Flow & Working Capital",
      chartTag: "Auto-Forecast",
      chartColor: "#b3ed97",
      chartPath: "M0 32 Q 40 28, 80 18 T 160 14 T 240 6",
      checklistTitle: "Month-End Close Automation",
      checklists: [
        { text: "Bank Feeds Autonomous Reconciliation", status: "Matched 99.4%", ready: true },
        { text: "GST 2.0 Inward vs GSTR-2B ITC Check", status: "Reconciled", ready: true },
        { text: "FIFO Cost Lot Stock Consumption", status: "Balanced", ready: true },
      ],
      floatingBadgeTop: {
        role: "Controller",
        name: "Andrew K.",
        value: "$2.1M ARR",
        trend: "+14%",
      },
    },
  },
  {
    id: "hospital-os",
    tabLabel: "Hospital OS",
    tabIcon: <Activity className="h-3.5 w-3.5" />,
    categoryTag: "NABH-READY CLINICAL HEALTHCARE",
    headlinePrefix: "CLINICAL MANAGEMENT, OPD & ",
    headlineHighlight: "INPATIENT HOSPITAL OS",
    subheading:
      "Real-time OPD queue triage, consultant IPD rounds, ICU bed allocation, and automated insurance TPA clearance.",
    badges: [
      { icon: "🏥", text: "160 IPD Beds Census" },
      { icon: "🩺", text: "Smart OPD Triage" },
      { icon: "💊", text: "In-House Pharmacy POS" },
    ],
    sealBadge: {
      text: "NABH READY",
      sub: "CLINICAL OS",
    },
    metricHeader: "LIVE HOSPITAL CENSUS",
    metricLabel: "Bed Occupancy Rate",
    metricValue: "88.7%",
    metricTrend: "142 / 160 Beds &bull; 384 OPD Patients",
    metricDescription:
      "Seamless clinical journey from emergency triage and consultant ward rounds to automated pathology orders and instant TPA pre-auth.",
    monitor: {
      appHeader: "Hospital OS",
      appBadge: "NABH Clinical",
      searchPlaceholder: "Search UHID, OPD, Bed, Doctor...",
      userGreeting: "Dr. Priya S.",
      userInitial: "P",
      sidebarActive: "Clinical Hub",
      sidebarItems: ["OPD Queue", "IPD Wards", "Pharmacy", "Laboratory"],
      topMetric: { label: "IPD Bed Occupancy", value: "142 / 160", sub: "88.7% Occupied" },
      chartTitle: "Daily Patient Admissions & Triage",
      chartTag: "Live Census",
      chartColor: "#b3ed97",
      chartPath: "M0 30 Q 50 25, 90 15 T 170 12 T 240 4",
      checklistTitle: "Clinical Operations & Triage Status",
      checklists: [
        { text: "OPD Queue Registration & Smart Triage", status: "384 Cleared", ready: true },
        { text: "IPD Ward Consultant Rounds Recorded", status: "92% Done", ready: true },
        { text: "Emergency OT 3 Sterilization & Prep", status: "Ready", ready: true },
      ],
      floatingBadgeTop: {
        role: "Medical Supt",
        name: "Dr. Priya S.",
        value: "88.7% Census",
        trend: "+6%",
      },
    },
  },
  {
    id: "fmcg-sales",
    tabLabel: "FMCG Route Vans",
    tabIcon: <Truck className="h-3.5 w-3.5" />,
    categoryTag: "FIELD SALES & ROUTE DISTRIBUTION",
    headlinePrefix: "FIELD SALES, BEAT ROUTING & ",
    headlineHighlight: "VAN CASH RECONCILIATION",
    subheading:
      "Morning warehouse stock loading, GPS retailer visits, spot billing delivery challans, and automated evening cash settlement.",
    badges: [
      { icon: "🚚", text: "18 Active Route Vans" },
      { icon: "📍", text: "Real-Time GPS Beats" },
      { icon: "💰", text: "Zero Variance Day-Close" },
    ],
    sealBadge: {
      text: "FMCG SELECT",
      sub: "DISTRIBUTION",
    },
    metricHeader: "FIELD SALES VELOCITY",
    metricLabel: "Daily Beat Revenue",
    metricValue: "₹14.28L",
    metricTrend: "18 Vans Active &bull; 100% On Beat",
    metricDescription:
      "Real-time van stock transfers, spot billing delivery challans, retailer GPS visit check-ins, and automated evening cash drawer balance.",
    monitor: {
      appHeader: "Field Sales",
      appBadge: "Van Routing",
      searchPlaceholder: "Search Route, Van, Retailer...",
      userGreeting: "Vikram R.",
      userInitial: "V",
      sidebarActive: "Beat Routes",
      sidebarItems: ["Van Stock", "Retailers", "Collections", "Day Close"],
      topMetric: { label: "Van Sales Today", value: "₹14.28L", sub: "112% Target" },
      chartTitle: "Route Beat Completion & Stock Velocity",
      chartTag: "Live GPS",
      chartColor: "#b3ed97",
      chartPath: "M0 34 Q 45 28, 85 16 T 165 10 T 240 4",
      checklistTitle: "Daily Field Sales & Day-Close Wizard",
      checklists: [
        { text: "Morning Van Stock Loading & Transfer Confirm", status: "18/18 Loaded", ready: true },
        { text: "Retailer GPS Visits & Cash Collection", status: "84 Visits", ready: true },
        { text: "Evening Van Return & Day-Close Cash Count", status: "Balanced", ready: true },
      ],
      floatingBadgeTop: {
        role: "Route Head",
        name: "Vikram R.",
        value: "₹14.2L Beat",
        trend: "+18%",
      },
    },
  },
  {
    id: "pharma-retail",
    tabLabel: "Pharma Cloud",
    tabIcon: <Pill className="h-3.5 w-3.5" />,
    categoryTag: "CDSCO PHARMACY & BATCH POS",
    headlinePrefix: "SCHEDULE X & H1 TRACKING WITH ",
    headlineHighlight: "100K+ CDSCO SALT DIRECTORY",
    subheading:
      "Composition-based contraindication warnings at checkout, batch barcode FEFO dispensing, and automated near-expiry supplier debit notes.",
    badges: [
      { icon: "🔬", text: "100K+ CDSCO Salts" },
      { icon: "⚠️", text: "Drug Interaction Alert" },
      { icon: "📦", text: "Near-Expiry FEFO Returns" },
    ],
    sealBadge: {
      text: "CDSCO",
      sub: "CERTIFIED",
    },
    metricHeader: "PHARMA REPOSITORY",
    metricLabel: "Active Salt Directory",
    metricValue: "100,000+",
    metricTrend: "Real-Time Contraindication Check",
    metricDescription:
      "Automated Schedule H1 registers, sub-second POS barcode checkout, and instant supplier debit note drafting for expiring batches.",
    monitor: {
      appHeader: "Pharma Cloud",
      appBadge: "CDSCO Masters",
      searchPlaceholder: "Search Salt, Brand, Batch barcode...",
      userGreeting: "Rajesh M.",
      userInitial: "R",
      sidebarActive: "Dispensing",
      sidebarItems: ["Salts", "Batches", "Interactions", "Debit Notes"],
      topMetric: { label: "Salts Indexed", value: "100,000+", sub: "CDSCO Master" },
      chartTitle: "Batch FEFO Dispensing & Expiry Velocity",
      chartTag: "FEFO Engine",
      chartColor: "#b3ed97",
      chartPath: "M0 30 Q 55 24, 100 16 T 175 10 T 240 4",
      checklistTitle: "Pharmacy Compliance & Expiry Engine",
      checklists: [
        { text: "CDSCO Drug & Salt Master Verification", status: "Verified", ready: true },
        { text: "Real-time Salt Contraindication Guard", status: "Active", ready: true },
        { text: "Near-Expiry Supplier Returns Drafted", status: "100% Filed", ready: true },
      ],
      floatingBadgeTop: {
        role: "Pharmacist",
        name: "Rajesh M.",
        value: "100K+ Salts",
        trend: "Verified",
      },
    },
  },
];

export function FullSlidingHeroCarousel() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const activeIndex = ((page % slides.length) + slides.length) % slides.length;
  const slide = slides[activeIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const jumpTo = (index: number) => {
    const diff = index - activeIndex;
    if (diff !== 0) {
      setPage([page + diff, diff > 0 ? 1 : -1]);
    }
  };

  // Auto-slide every 6.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6500);
    return () => clearInterval(timer);
  }, [page, isPaused]);

  // Framer motion sliding variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden bg-[#142d25] text-[#f9f9f8] pt-4 pb-12 sm:pt-6 sm:pb-16"
    >
      {/* Background ambient lighting - strictly Campfire pine and mint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, rgba(179, 237, 151, 0.08), transparent 50%), radial-gradient(circle at 80% 55%, rgba(179, 237, 151, 0.05), transparent 45%), #142d25",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]"
        style={{ backgroundSize: "60px 60px" }}
      />

      <div className="container-wide relative z-10">
        {/* Top Product Tabs (Campfire signature switcher in dark pine & mint) */}
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#10271e]/90 p-1 backdrop-blur-md">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => jumpTo(idx)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeIndex === idx
                    ? "bg-[#b3ed97] text-[#142d25] shadow-md"
                    : "text-[#c2d9cc] hover:bg-white/10 hover:text-white"
                }`}
              >
                {s.tabIcon}
                <span>{s.tabLabel}</span>
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#869c80]">
            <span className="flex h-2 w-2 rounded-full bg-[#b3ed97] animate-pulse" />
            <span>Interactive Multi-Product Studio</span>
          </div>
        </div>

        {/* FULL SLIDING PANORAMIC CAROUSEL BANNER (Directly matching user screenshot layout) */}
        <div className="relative min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#10271e]/95 to-[#0c1f17]/98 shadow-2xl backdrop-blur-xl">
          {/* Animated Slide Container */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 28 },
                opacity: { duration: 0.25 },
              }}
              className="absolute inset-0 flex h-full w-full items-center px-4 py-8 sm:px-8 md:px-12 lg:px-16"
            >
              <div className="grid h-full w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_1.1fr_0.85fr] lg:gap-6 xl:gap-10">
                {/* 1. LEFT COLUMN: Big Product Title & Pills (Matching Screenshot Left Side) */}
                <div className="flex flex-col items-start justify-center text-left">
                  {/* Category Pill */}
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#b3ed97]/30 bg-[#142d25] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b3ed97]">
                    <Sparkles className="h-3 w-3" />
                    {slide.categoryTag}
                  </div>

                  {/* Large Product Title */}
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold uppercase leading-tight tracking-tight text-white">
                    {slide.headlinePrefix}
                    <span className="text-[#b3ed97]">{slide.headlineHighlight}</span>
                  </h2>

                  {/* Characteristic Pill Capsule (Matching: [ 📦 1 Litre | 🌿 Cow ghee ] in screenshot) */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-[#142d25]/80 p-2 backdrop-blur-md">
                    {slide.badges.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[#52644d]/30 bg-[#10271e] px-2.5 py-1 text-xs font-semibold text-white/90 shadow-sm"
                      >
                        <span className="text-sm">{b.icon}</span>
                        <span>{b.text}</span>
                      </span>
                    ))}
                  </div>

                  {/* Subtitle */}
                  <p className="mt-4 text-xs sm:text-sm text-[#869c80] leading-relaxed max-w-md">
                    {slide.subheading}
                  </p>

                  {/* CTA Buttons - Campfire signature styling */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#b3ed97] pl-5 pr-1.5 py-1.5 text-xs sm:text-sm font-bold text-[#142d25] shadow-lg hover:bg-[#a6e688] transition-all"
                    >
                      <span>Try Katixo</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff862f] text-white shadow-sm transition-transform group-hover:translate-x-0.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>

                    <Link
                      href="/docs"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#b3ed97] hover:text-white transition-colors"
                    >
                      View live docs &rarr;
                    </Link>
                  </div>
                </div>

                {/* 2. CENTER COLUMN: Product Hero Visual with Campfire Halo & Seal Badge */}
                <div className="relative flex items-center justify-center py-2">
                  {/* Radiant Campfire Mint Halo Glow Behind Product Visual */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-4 rounded-full opacity-50 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(179, 237, 151, 0.22) 0%, rgba(20, 45, 37, 0.5) 40%, transparent 70%)",
                    }}
                  />

                  {/* Circular Seal Badge - Styled in Campfire Dark Pine & Mint */}
                  <div className="absolute -top-1 -right-1 sm:top-1 sm:right-2 z-20 flex h-14 w-14 sm:h-16 sm:w-16 flex-col items-center justify-center rounded-full border-2 border-[#b3ed97] bg-[#10271e] text-[#b3ed97] shadow-2xl rotate-6 animate-pulse">
                    <span className="text-[8px] font-black tracking-widest text-[#b3ed97]">
                      {slide.sealBadge.text}
                    </span>
                    <span className="text-[9px] font-extrabold uppercase tracking-tight text-white">
                      {slide.sealBadge.sub}
                    </span>
                  </div>

                  {/* Compact Campfire Studio Monitor Window */}
                  <div className="relative w-full max-w-[430px] rounded-2xl border border-white/20 bg-[#10241e] p-3 text-left shadow-2xl backdrop-blur-xl">
                    {/* Device Window Top Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="ml-1 text-[11px] font-bold text-white">
                          {slide.monitor.appHeader}
                        </span>
                        <span className="rounded bg-[#b3ed97]/20 px-1.5 py-0.2 text-[9px] font-bold text-[#b3ed97]">
                          {slide.monitor.appBadge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#142d25] font-bold text-[#b3ed97] border border-white/10">
                          {slide.monitor.userInitial}
                        </span>
                        <span className="hidden sm:inline font-medium text-white/80">
                          {slide.monitor.userGreeting}
                        </span>
                      </div>
                    </div>

                    {/* Fake Search & Action Bar */}
                    <div className="mb-2 flex items-center justify-between rounded-lg bg-[#142d25] px-2 py-1 text-[10px] text-white/60 border border-white/5">
                      <div className="flex items-center gap-1.5">
                        <Search className="h-3 w-3 text-white/40" />
                        <span>{slide.monitor.searchPlaceholder}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bell className="h-3 w-3 text-white/50" />
                        <ShieldCheck className="h-3 w-3 text-[#b3ed97]" />
                      </div>
                    </div>

                    {/* Screen Core Bento Grid */}
                    <div className="space-y-2">
                      {/* Metric Card inside Monitor */}
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#142d25] p-2">
                        <div>
                          <div className="text-[10px] text-[#869c80]">
                            {slide.monitor.topMetric.label}
                          </div>
                          <div className="text-base font-extrabold text-white">
                            {slide.monitor.topMetric.value}
                          </div>
                        </div>
                        <span className="rounded bg-[#b3ed97]/15 px-2 py-0.5 text-[10px] font-bold text-[#b3ed97]">
                          {slide.monitor.topMetric.sub}
                        </span>
                      </div>

                      {/* Mini Trend Line Graphic in Campfire Mint */}
                      <div className="rounded-xl border border-white/10 bg-[#142d25] p-2">
                        <div className="flex items-center justify-between text-[10px] text-[#869c80] mb-1">
                          <span>{slide.monitor.chartTitle}</span>
                          <span className="text-[#b3ed97] font-semibold">
                            {slide.monitor.chartTag}
                          </span>
                        </div>
                        <svg viewBox="0 0 240 40" className="h-10 w-full" fill="none">
                          <path
                            d={slide.monitor.chartPath}
                            stroke={slide.monitor.chartColor}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Checklists Automation Status */}
                      <div className="rounded-xl border border-white/10 bg-[#0a1c15] p-2 space-y-1">
                        <div className="text-[9px] font-bold uppercase tracking-wider text-[#b3ed97]">
                          {slide.monitor.checklistTitle}
                        </div>
                        {slide.monitor.checklists.map((c, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center justify-between text-[10px] text-white/80"
                          >
                            <span className="truncate pr-2">{c.text}</span>
                            <span className="shrink-0 text-[#b3ed97] font-semibold">
                              {c.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. RIGHT COLUMN: Highlight Metric Dark Glass Card (Matching Screenshot Right Side) */}
                <div className="flex flex-col items-start justify-center text-left">
                  {/* Category Header (Matching CATALOGUE PRICE) */}
                  <div className="text-xs font-bold uppercase tracking-widest text-[#869c80] mb-2">
                    {slide.metricHeader}
                  </div>

                  {/* Dark Glass Card (Matching the dark box with Current Price ₹2,200 in Campfire colors) */}
                  <div className="w-full rounded-2xl border border-white/15 bg-[#10271e]/95 p-5 shadow-2xl backdrop-blur-xl">
                    <div className="text-xs font-semibold text-[#869c80]">
                      {slide.metricLabel}
                    </div>
                    <div className="mt-1 font-heading text-3xl sm:text-4xl font-black tracking-tight text-white">
                      {slide.metricValue}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#b3ed97]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#b3ed97]">
                      <TrendingUp className="h-3 w-3" />
                      <span dangerouslySetInnerHTML={{ __html: slide.metricTrend }} />
                    </div>
                  </div>

                  {/* Product Narrative Subtitle in Campfire Sage */}
                  <p className="mt-4 text-xs text-[#869c80] leading-relaxed">
                    {slide.metricDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CIRCULAR NAVIGATION BUTTONS (Matching `<` and `>` from User Screenshot!) */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous product"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-[#10271e]/85 hover:bg-[#142d25] text-white hover:text-[#b3ed97] backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            aria-label="Next product"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-[#10271e]/85 hover:bg-[#142d25] text-white hover:text-[#b3ed97] backdrop-blur-md transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* BOTTOM-CENTER INDICATOR PILL CONTAINER (Matching `( [====] • • • )` from User Screenshot in Campfire colors) */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#10271e]/90 px-3.5 py-1.5 backdrop-blur-md border border-white/15 shadow-lg">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 ${
                    activeIndex === idx
                      ? "h-1.5 w-6 rounded-full bg-[#b3ed97]"
                      : "h-1.5 w-1.5 rounded-full bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
