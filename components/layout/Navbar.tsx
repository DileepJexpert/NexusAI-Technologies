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
  HeartPulse,
  Receipt,
  HelpCircle,
  Building2,
  Workflow,
  Clock,
  Layers,
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
    }, 180);
  };

  const isDark = mounted && theme === "dark";

  return (
    <div className="sticky top-0 z-[100] w-full bg-white">
      {/* Top Announcement Banner (Campfire Style Compact Bar) */}
      <div className="relative z-[102] border-b border-emerald-950/10 bg-[#0d221b] text-white py-0.5 px-3 text-center text-[10px] sm:text-[11px] font-medium tracking-wide">
        <div className="container-wide flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#b3ed97]/20 px-1.5 py-0 text-[8.5px] font-bold text-[#b3ed97]">
            <Sparkles className="h-2 w-2" /> 2026 RELEASE
          </span>
          <span className="hidden sm:inline text-white/85">
            GST 2.0 Notification 9/2025-CT &bull; Multi-Entity ERP &bull; Hospital OS &bull; FMCG Route Vans.
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-0.5 font-semibold text-[#b3ed97] hover:underline underline-offset-2 ml-1"
          >
            Live Demo <ArrowRight className="h-2.5 w-2.5" />
          </Link>
        </div>
      </div>

      {/* Main Campfire Navbar Header (Compact h-11 / sm:h-12 Bar) */}
      <header
        className={cn(
          "relative z-[101] w-full transition-all duration-200 border-b border-slate-200/90 bg-white",
          scrolled && "shadow-xs"
        )}
      >
        <div className="container-wide flex h-11 sm:h-12 items-center justify-between">
          {/* Left Brand: Katixo Logo with Spark Icon */}
          <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
            <KatixoLogo className="h-6.5 sm:h-7 w-auto" white={false} />
          </Link>

          {/* Center Navigation Triggers: Products ∨, Solutions ∨, Partners ∨, Customers, Resources ∨ */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* 1. Products Trigger */}
            <button
              suppressHydrationWarning
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                activeDropdown === "products"
                  ? "text-black font-semibold"
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

            {/* 2. Solutions Trigger */}
            <button
              suppressHydrationWarning
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                activeDropdown === "solutions"
                  ? "text-black font-semibold"
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

            {/* 3. Partners Trigger */}
            <button
              suppressHydrationWarning
              onMouseEnter={() => handleMouseEnter("partners")}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveDropdown(activeDropdown === "partners" ? null : "partners")}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                activeDropdown === "partners"
                  ? "text-black font-semibold"
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

            {/* 4. Customers Direct Link */}
            <Link
              href="/case-studies"
              onMouseEnter={() => setActiveDropdown(null)}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-[#142d25] transition-colors hover:text-black"
            >
              Customers
            </Link>

            {/* 5. Resources Trigger */}
            <button
              suppressHydrationWarning
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                activeDropdown === "resources"
                  ? "text-black font-semibold"
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
          </nav>

          {/* Right Nav Actions (Campfire style: Sign In text + dark green Get Started pill button) */}
          <div className="hidden items-center gap-4 lg:flex">
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
                    "rounded-full px-2.5 py-[2px] transition-all duration-200",
                    !isDark
                      ? "bg-white text-[#142d25] font-bold shadow-2xs"
                      : "text-slate-500"
                  )}
                >
                  Light
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-[2px] transition-all duration-200",
                    isDark
                      ? "bg-[#10241d] text-[#b3ed97] font-bold shadow-2xs"
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

            {/* Get Started pill button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#142d25] px-4.5 py-1.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#1f4236]"
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

        {/* FULL-WIDTH HORIZONTAL MEGA-MENU BAR (Spans full viewport width, container-wide content, compact height) */}
        {activeDropdown && (
          <div
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full inset-x-0 w-full border-b border-slate-200/90 bg-white text-slate-800 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.18)] z-[120] animate-fade-in"
          >
            <div className="container-wide py-3.5 sm:py-4">
              {/* 1. Products Mega Menu */}
              {activeDropdown === "products" && (
                <div className="grid grid-cols-4 gap-6 divide-x divide-slate-100">
                  {/* Col 1: Financial Core */}
                  <div className="pr-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Enterprise ERP Core
                    </div>
                    <Link
                      href="/products/finance/khatabook-ai"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <BookOpen className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Core Finance & GL
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Multi-entity GL, journals & 24h close
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/invoices"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Receipt className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Invoicing & Receivables
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Delivery challans, e-invoicing & AR ledger
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/purchase-bills"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <TrendingUp className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Procurement & Bills
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          PO to GRN 3-way match & vendor statements
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/banking"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <LineChart className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Banking & Reconciliation
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Autonomous statement & ledger matching
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 2: Industry OS */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Industry OS
                    </div>
                    <Link
                      href="/products/health/katixo-hospital-os"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-teal-50 flex items-center justify-center text-teal-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Activity className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Hospital OS
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          NABH IPD, OPD queue triage & clinical pharmacy
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/field-sales"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Truck className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          FMCG Route Vans
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Van stock balancing, GPS beats & day-close
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/pharma"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Pill className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Pharma Chemists & Chains
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          100K+ CDSCO salts & FEFO returns
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/accounting-pos-software"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <ShoppingBag className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Supermarkets & Retail POS
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Barcode checkout & instant billing
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 3: AI & Compliance Engine */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      AI & Compliance Engine
                    </div>
                    <Link
                      href="/docs/ai"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          AI Decision Engine
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Cross-cutting anomaly & compliance detection
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/gst-guides"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Cpu className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          GST 2.0 Engine
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Notification 9/2025-CT auto-split rates
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/inventory-costing"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Layers className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          FIFO Inventory Costing
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Lot consumption & warehouse balance
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/custom-reports"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <FileText className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Custom Report Builder
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Multi-entity scheduled report engine
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 4: Featured Platform Hub */}
                  <div className="pl-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Featured Suite
                    </div>
                    <Link
                      href="/products"
                      onClick={() => setActiveDropdown(null)}
                      className="block group"
                    >
                      <div
                        className="relative h-20 rounded-xl p-3 flex items-center justify-center overflow-hidden text-center shadow-xs transition-transform group-hover:scale-[1.01]"
                        style={{
                          background: "linear-gradient(135deg, #142d25 0%, #0d221b 100%)",
                        }}
                      >
                        <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#142d25] shadow-md">
                          <Sparkles className="h-3 w-3 text-emerald-600" />
                          <span>Katixo Product Suite</span>
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-[#0a4733]">
                        Explore All Products &rarr;
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        From Indian Enterprise ERP to Healthcare OS and Agricultural tools.
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {/* 2. Solutions Mega Menu */}
              {activeDropdown === "solutions" && (
                <div className="grid grid-cols-4 gap-6 divide-x divide-slate-100">
                  {/* Col 1: Healthcare & Clinical */}
                  <div className="pr-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Healthcare & Clinical
                    </div>
                    <Link
                      href="/docs/hospital"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <HeartPulse className="h-3.5 w-3.5 text-rose-500" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Hospitals & Clinics
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Multi-specialty hospital management
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/hospital/opd"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Clock className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          OPD Queue Triage
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Zero-wait patient token routing
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/hospital/ipd"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Activity className="h-3.5 w-3.5 text-teal-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          IPD & Bed Census
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Real-time 160+ bed occupancy tracking
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/hospital/billing"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Receipt className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Insurance TPA Desk
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Cashless & corporate claim clearance
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 2: Distribution & Retail */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Distribution & Retail
                    </div>
                    <Link
                      href="/docs/field-sales"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Truck className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          FMCG & Route Sales
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Spot billing, van cash & day-close
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/pharma"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Pill className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Pharma Distribution
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Batch expiry & generic substitutions
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/accounting-pos-software"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <ShoppingBag className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Supermarket & POS
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          High-speed counter billing & barcode
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/delivery-challans"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Blocks className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Warehouse & Dispatch
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Challan dispatch & batch stock deduction
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 3: Roles & Operations */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Roles & Scale
                    </div>
                    <Link
                      href="/docs"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          CFOs & Controllers
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Close in 24 hours without spreadsheets
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/partners"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Chartered Accountants
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Multi-tenant client books & GSTR filing
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/payroll"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Building2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Payroll & HR Teams
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          PF 12%, ESI, PT & statutory slips
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/compare"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <ArrowLeftRight className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Legacy ERP Migration
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Zero fees from NetSuite, SAP, Tally
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 4: Featured Tour */}
                  <div className="pl-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Product Tour
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setActiveDropdown(null)}
                      className="block group"
                    >
                      <div
                        className="relative h-20 rounded-xl p-3 flex items-center justify-center overflow-hidden text-center shadow-xs transition-transform group-hover:scale-[1.01]"
                        style={{
                          background: "linear-gradient(135deg, #142d25 0%, #0d221b 100%)",
                        }}
                      >
                        <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#142d25] shadow-md">
                          <Activity className="h-3 w-3 text-emerald-600" />
                          <span>Interactive Demo</span>
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-[#0a4733]">
                        Schedule a Live Tour &rarr;
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Experience live OPD queues, batch inventory & automated month-end close.
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {/* 3. Partners Mega Menu */}
              {activeDropdown === "partners" && (
                <div className="grid grid-cols-4 gap-6 divide-x divide-slate-100">
                  {/* Col 1: Advisory & CAs */}
                  <div className="pr-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Advisory & CAs
                    </div>
                    <Link
                      href="/partners"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Advisory & CA Partnerships
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          For Chartered Accountants & CFO Advisory
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 2: Technology & APIs */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Technology & APIs
                    </div>
                    <Link
                      href="/integrations"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Blocks className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Technology Integrators
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Connectors, payment gateways & banks
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 3: Enterprise Migration */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      ERP Switch Program
                    </div>
                    <Link
                      href="/compare"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <ArrowLeftRight className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Legacy ERP Rescue Fund
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Zero migration fees from NetSuite/SAP/Tally
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 4: Partner Portal */}
                  <div className="pl-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Join Ecosystem
                    </div>
                    <Link
                      href="/partners"
                      onClick={() => setActiveDropdown(null)}
                      className="block group"
                    >
                      <div
                        className="relative h-20 rounded-xl p-3 flex items-center justify-center overflow-hidden text-center shadow-xs transition-transform group-hover:scale-[1.01]"
                        style={{
                          background: "linear-gradient(135deg, #142d25 0%, #0d221b 100%)",
                        }}
                      >
                        <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#142d25] shadow-md">
                          <Users className="h-3 w-3 text-emerald-600" />
                          <span>Partner Registration</span>
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-[#0a4733]">
                        Become a Partner &rarr;
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Earn recurring revenue with Katixo implementations.
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {/* 4. Resources Mega Menu */}
              {activeDropdown === "resources" && (
                <div className="grid grid-cols-4 gap-6 divide-x divide-slate-100">
                  {/* Col 1: Documentation & APIs */}
                  <div className="pr-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Documentation & APIs
                    </div>
                    <Link
                      href="/docs"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <FileText className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Developer Documentation
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Complete REST APIs & guides
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/delivery-challans"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Truck className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Delivery Challans API
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          FEFO dispatch & stock deductions
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/procurement"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <TrendingUp className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Procurement & 3-Way Match
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          PO to GRN to purchase bills
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/workflows"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Workflow className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Approval Workflows
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Multi-level approval chains
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 2: Tax & Compliance */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Tax & Compliance
                    </div>
                    <Link
                      href="/gst-guides"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          GST 2.0 Reform Guide
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Notification 9/2025-CT rate rules
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/payroll"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Building2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Indian Payroll Guide
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          PF 12%, ESI, PT slabs & TDS
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/banking"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <LineChart className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Bank Reconciliation
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Auto-matching rules & statements
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs/changelog"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Sparkles className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Product Changelog
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Latest ERP releases & updates
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 3: Stories & Comparison */}
                  <div className="px-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Stories & Insights
                    </div>
                    <Link
                      href="/case-studies"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Customer Case Studies
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          How Indian enterprises scale on Katixo
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/compare"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <ArrowLeftRight className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Compare Alternatives
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Katixo vs NetSuite, SAP, Tally, Zoho
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/about"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <Building2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          About Katixo
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Our mission, leadership & story
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/help"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                        <HelpCircle className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                          Help Center & FAQs
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                          Setup guides & quick troubleshooting
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Col 4: Support Card */}
                  <div className="pl-4 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Support
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setActiveDropdown(null)}
                      className="block group"
                    >
                      <div
                        className="relative h-20 rounded-xl p-3 flex items-center justify-center overflow-hidden text-center shadow-xs transition-transform group-hover:scale-[1.01]"
                        style={{
                          background: "linear-gradient(135deg, #142d25 0%, #0d221b 100%)",
                        }}
                      >
                        <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#142d25] shadow-md">
                          <HelpCircle className="h-3 w-3 text-emerald-600" />
                          <span>Enterprise Support</span>
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-[#0a4733]">
                        Contact Support &rarr;
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Direct Slack & WhatsApp engineering hotline for enterprise clients.
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white text-slate-800 lg:hidden">
            <div className="container-wide flex flex-col gap-2.5 py-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0a4733] px-4">
                Products
              </div>
              <Link
                href="/products/finance/khatabook-ai"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Core Finance & GL</span>
              </Link>
              <Link
                href="/products/health/katixo-hospital-os"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Hospital OS</span>
                <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-semibold text-teal-800">
                  NABH
                </span>
              </Link>
              <Link
                href="/docs/pharma"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Pharma Clinical ERP</span>
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
                Company & Resources
              </div>
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100"
              >
                Pricing
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
              <Link
                href="/partners"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium hover:bg-slate-100"
              >
                Partner Programs
              </Link>

              <div className="my-3 h-px bg-slate-100" />

              <Link
                href="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="mx-4 text-center rounded-lg border border-slate-200 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#142d25] px-6 py-2.5 text-sm font-bold text-white"
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
