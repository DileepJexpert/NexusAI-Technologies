"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  BookOpen,
  TrendingUp,
  Flame,
  LineChart,
  Blocks,
  Cpu,
  ArrowLeftRight,
  Activity,
  Truck,
  Pill,
  ShoppingBag,
  FileText,
  Users,
  ShieldCheck,
  Building,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { KatixoLogo } from "@/components/shared/KatixoLogo";
import { brand } from "@/lib/brand";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const isDark = mounted && theme === "dark";

  return (
    <div className="sticky top-0 z-[100] w-full bg-white">
      {/* Top Campfire Announcement Banner */}
      <div className="relative z-[102] border-b border-emerald-950/10 bg-[#0d221b] text-white py-1.5 px-4 text-center text-xs font-medium tracking-wide">
        <div className="container-wide flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b3ed97]/20 px-2 py-0.5 text-[10px] font-bold text-[#b3ed97]">
            <Sparkles className="h-3 w-3" /> OFFICIAL 2026 RELEASE
          </span>
          <span className="hidden sm:inline text-white/85">
            GST 2.0 Notification 9/2025-CT &bull; Multi-Entity ERP &bull; Hospital OS &bull; FMCG Route Vans.
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-semibold text-[#b3ed97] hover:underline underline-offset-2 ml-1"
          >
            Book a Live Demo <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Main Campfire Navbar (Clean White Bar matching Campfire screenshot!) */}
      <header
        className={cn(
          "relative z-[101] w-full transition-all duration-200 border-b border-slate-200/90 bg-white",
          scrolled && "shadow-sm"
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between">
          {/* Left Brand: Katixo Logo with Spark Icon */}
          <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
            <KatixoLogo className="h-8 w-auto sm:h-9" white={false} />
          </Link>

          {/* Center Navigation Links: Products ∨, Solutions ∨, Partners ∨, Customers, Resources ∨ */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* 1. Products Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  activeDropdown === "products"
                    ? "text-black"
                    : "text-[#142d25] hover:text-black"
                )}
              >
                Products
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-slate-500 transition-transform duration-200",
                    activeDropdown === "products" && "rotate-180"
                  )}
                />
              </button>
            </div>

            {/* 2. Solutions Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  activeDropdown === "solutions"
                    ? "text-black"
                    : "text-[#142d25] hover:text-black"
                )}
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-slate-500 transition-transform duration-200",
                    activeDropdown === "solutions" && "rotate-180"
                  )}
                />
              </button>
            </div>

            {/* 3. Partners Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("partners")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "partners" ? null : "partners")}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  activeDropdown === "partners"
                    ? "text-black"
                    : "text-[#142d25] hover:text-black"
                )}
              >
                Partners
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-slate-500 transition-transform duration-200",
                    activeDropdown === "partners" && "rotate-180"
                  )}
                />
              </button>
            </div>

            {/* 4. Customers Direct Link */}
            <Link
              href="/case-studies"
              className="rounded-md px-3.5 py-2 text-sm font-medium text-[#142d25] transition-colors hover:text-black"
            >
              Customers
            </Link>

            {/* 5. Resources Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  activeDropdown === "resources"
                    ? "text-black"
                    : "text-[#142d25] hover:text-black"
                )}
              >
                Resources
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-slate-500 transition-transform duration-200",
                    activeDropdown === "resources" && "rotate-180"
                  )}
                />
              </button>
            </div>
          </nav>

          {/* Right Nav Actions (Campfire style: Sign In text + dark green Get Started pill button) */}
          <div className="hidden items-center gap-5 lg:flex">
            {/* Theme toggle pill */}
            {mounted && (
              <button
                suppressHydrationWarning
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className="flex items-center rounded-full border border-slate-200 bg-slate-100 p-0.5 text-[11px] font-semibold text-slate-800"
              >
                <span
                  className={cn(
                    "rounded-full px-2.5 py-[3px] transition-all duration-200",
                    !isDark
                      ? "bg-white text-[#142d25] font-bold shadow-xs"
                      : "text-slate-500"
                  )}
                >
                  Light
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-[3px] transition-all duration-200",
                    isDark
                      ? "bg-[#10241d] text-[#b3ed97] font-bold shadow-xs"
                      : "text-slate-500"
                  )}
                >
                  Dark
                </span>
              </button>
            )}

            {/* Sign In text link */}
            <Link
              href="/admin/login"
              className="text-sm font-medium text-[#142d25] transition-colors hover:text-black"
            >
              Sign In
            </Link>

            {/* Get Started pill button (Signature dark forest green from Campfire screenshot!) */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#142d25] px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#1f4236]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            suppressHydrationWarning
            className="text-slate-800 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ========================================================================= */}
        {/* CAMPFIRE FULL-WIDTH PURE WHITE MEGA MENU (Matching User's Screenshot!)   */}
        {/* ========================================================================= */}

        {/* 1. PRODUCTS MEGA-MENU */}
        {activeDropdown === "products" && (
          <div
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 top-full z-[120] border-b border-slate-200/90 bg-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] animate-fade-in"
          >
            <div className="container-wide py-9 grid grid-cols-12 gap-8 divide-x divide-slate-100">
              {/* Column 1: Products */}
              <div className="col-span-4 pr-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Products
                </div>
                <div className="space-y-1">
                  <Link
                    href="/products/finance/general-ledger"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Core Accounting
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        The modern general ledger that scales with you
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/products/sales/sales-orders"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Revenue Automation
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Automate your end-to-end billing & collection process
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/ai"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Flame className="h-4 w-4 text-[#ff862f]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Ember AI
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Your autonomous accounting teammate, built in
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/custom-reports"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <LineChart className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Forecast & Cash Flow
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        See where the month lands, any day of the month
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Column 2: Platform */}
              <div className="col-span-4 px-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Platform
                </div>
                <div className="space-y-1">
                  <Link
                    href="/integrations"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Blocks className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Integrations
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Connect directly to your finance team&apos;s existing systems
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/gst-guides"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Accounting Intelligence
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        GST 2.0 Notification 9/2025-CT foundation models
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/compare"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <ArrowLeftRight className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Implementation and Migration
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Move years of journal entries and reconcile every account
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Column 3: Featured (Sage green card matching Basecamp from screenshot!) */}
              <div className="col-span-4 pl-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Featured
                </div>
                <div>
                  <Link
                    href="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="block group"
                  >
                    <div
                      className="relative h-32 rounded-2xl p-4 flex items-center justify-center overflow-hidden text-center shadow-xs transition-transform group-hover:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, #5b6e56 0%, #4a5c46 100%)",
                      }}
                    >
                      {/* Subtle topographic contour wave overlay */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-20 bg-grid-pattern"
                      />
                      <div className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-lg">
                        <Sparkles className="h-3.5 w-3.5 text-[#0a4733]" />
                        <span>Meet us at Katixo Basecamp</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#0a4733]">
                        Join us at Basecamp 2026
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        The AI conference for corporate finance & healthcare.
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. SOLUTIONS MEGA-MENU */}
        {activeDropdown === "solutions" && (
          <div
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 top-full z-[120] border-b border-slate-200/90 bg-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] animate-fade-in"
          >
            <div className="container-wide py-9 grid grid-cols-12 gap-8 divide-x divide-slate-100">
              {/* Column 1: By Industry */}
              <div className="col-span-4 pr-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  By Industry
                </div>
                <div className="space-y-1">
                  <Link
                    href="/docs/hospital"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Healthcare & Hospitals
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        NABH IPD, OPD queue triage & clinical pharmacy
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/pharma"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Pill className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Pharma Chemists & Chains
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        100K+ CDSCO salts, interaction warnings & FEFO
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/field-sales"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Truck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        FMCG & Route Distribution
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Van stock balancing, GPS beats & day-close settlement
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/accounting-pos-software"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Supermarkets & Retail Kirana
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Sub-second barcode scan & cash drawer reconciliation
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Column 2: By Persona */}
              <div className="col-span-4 px-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  By Persona
                </div>
                <div className="space-y-1">
                  <Link
                    href="/docs"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        CFOs & Controllers
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Close in 24 hours without manual spreadsheets
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/hospital"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Hospital Medical Supts
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Real-time census, IPD consultant rounds & instant TPA
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/partners"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Chartered Accountants & CAs
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Multi-tenant client books & automated GSTR filing
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Column 3: Featured */}
              <div className="col-span-4 pl-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Featured Solution
                </div>
                <Link
                  href="/docs/hospital"
                  onClick={() => setActiveDropdown(null)}
                  className="block group"
                >
                  <div
                    className="relative h-32 rounded-2xl p-4 flex items-center justify-center overflow-hidden text-center shadow-xs transition-transform group-hover:scale-[1.01]"
                    style={{
                      background: "linear-gradient(135deg, #142d25 0%, #0a4733 100%)",
                    }}
                  >
                    <div className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#b3ed97] px-5 py-2.5 text-xs font-bold text-[#142d25] shadow-lg">
                      <Activity className="h-3.5 w-3.5 text-[#142d25]" />
                      <span>NABH Hospital OS Cloud</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#0a4733]">
                      Clinical Healthcare ERP
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Complete inpatient & outpatient workflow suite.
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 3. PARTNERS MEGA-MENU */}
        {activeDropdown === "partners" && (
          <div
            onMouseEnter={() => handleMouseEnter("partners")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 top-full z-[120] border-b border-slate-200/90 bg-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] animate-fade-in"
          >
            <div className="container-wide py-9 grid grid-cols-12 gap-8 divide-x divide-slate-100">
              <div className="col-span-6 pr-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Partner Programs
                </div>
                <div className="space-y-1">
                  <Link
                    href="/partners"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Advisory & CA Partnerships
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        For Chartered Accountants, Tax Practitioners & CFO Advisory
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/integrations"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Blocks className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Technology & ISV Integrators
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Build connectors, apps & payment gateways with our APIs
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-span-6 pl-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Rescue Program
                </div>
                <Link
                  href="/compare"
                  onClick={() => setActiveDropdown(null)}
                  className="block p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 transition-colors group"
                >
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ff862f]/15 px-2.5 py-0.5 text-xs font-bold text-[#ff862f]">
                    Zero Migration Fee
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-2 group-hover:text-[#0a4733]">
                    Legacy ERP Rescue Fund
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Switch from NetSuite, SAP, or Tally with ₹0 migration fees and guaranteed 48-hour onboarding.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. RESOURCES MEGA-MENU */}
        {activeDropdown === "resources" && (
          <div
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 top-full z-[120] border-b border-slate-200/90 bg-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] animate-fade-in"
          >
            <div className="container-wide py-9 grid grid-cols-12 gap-8 divide-x divide-slate-100">
              <div className="col-span-4 pr-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Documentation & APIs
                </div>
                <div className="space-y-1">
                  <Link
                    href="/docs"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Developer Documentation
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Guides, SDKs & complete REST API reference
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/delivery-challans"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Truck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Delivery Challans & Dispatch
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        FEFO dispatch validation & batch stock deduction
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-span-4 px-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Compliance & Updates
                </div>
                <div className="space-y-1">
                  <Link
                    href="/gst-guides"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        GST 2.0 Reform Guide
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Notification 9/2025-CT rate schedule & rules
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/docs/changelog"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0a4733]">
                        Product Changelog
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Latest ERP releases, features & updates
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-span-4 pl-6 space-y-4">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  Stories
                </div>
                <Link
                  href="/case-studies"
                  onClick={() => setActiveDropdown(null)}
                  className="block p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 transition-colors group"
                >
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#0a4733]">
                    Customer Case Studies
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    How high-volume Indian enterprises scaled on Katixo ERP.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-24 z-40 h-[calc(100vh-6rem)] overflow-y-auto border-t border-slate-200 bg-white text-slate-800 lg:hidden">
            <div className="container-wide flex flex-col gap-3 py-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0a4733] px-4">
                Products
              </div>
              <Link
                href="/products/finance/general-ledger"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Core Accounting</span>
              </Link>
              <Link
                href="/docs/hospital"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Hospital OS</span>
              </Link>
              <Link
                href="/docs/field-sales"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>FMCG Route Vans</span>
              </Link>
              <Link
                href="/accounting-pos-software"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Retail POS Software</span>
              </Link>

              <div className="my-2 h-px bg-slate-100" />

              <div className="text-xs font-bold uppercase tracking-wider text-[#0a4733] px-4">
                Solutions & Partners
              </div>
              <Link
                href="/docs/hospital"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100"
              >
                Healthcare & Hospitals
              </Link>
              <Link
                href="/partners"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100"
              >
                Advisory & CA Partnerships
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100"
              >
                Customers & Case Studies
              </Link>
              <Link
                href="/docs"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100"
              >
                Developer Docs & APIs
              </Link>

              <div className="my-4 h-px bg-slate-100" />

              <Link
                href="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="mx-4 text-center rounded-lg border border-slate-200 py-2.5 text-sm font-medium hover:bg-slate-50"
              >
                Sign In
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#142d25] px-6 py-3 text-sm font-bold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
