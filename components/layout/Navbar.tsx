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
    }, 180);
  };

  const isDark = mounted && theme === "dark";

  return (
    <div className="sticky top-0 z-[100] w-full bg-white">
      {/* Top Campfire Announcement Banner (Sleek Compact Height) */}
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

      {/* Main Campfire Navbar (Compact h-11 / sm:h-12 Bar to Save Space) */}
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

          {/* Center Navigation Links: Products ∨, Solutions ∨, Partners ∨, Customers, Resources ∨ */}
          <nav className="hidden items-center gap-0.5 lg:flex">
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
                  "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
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

              {/* COMPACT FLOATING PRODUCTS CARD (Does NOT layover full screen!) */}
              {activeDropdown === "products" && (
                <div
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 z-[120] pt-2 animate-fade-in"
                >
                  <div className="w-[780px] rounded-2xl border border-slate-200/90 bg-white p-5 text-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22)]">
                    <div className="grid grid-cols-[1.1fr_1.1fr_0.95fr] gap-5 divide-x divide-slate-100">
                      {/* Column 1: Products */}
                      <div className="pr-4 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wider">
                          Products
                        </div>
                        <div className="space-y-0.5">
                          <Link
                            href="/products/finance/general-ledger"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                              <BookOpen className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                                Core Accounting
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Modern general ledger that scales
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/products/sales/sales-orders"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                              <TrendingUp className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                                Revenue Automation
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                End-to-end billing & collection
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/docs/ai"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                              <Flame className="h-3.5 w-3.5 text-[#ff862f]" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                                Ember AI
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Autonomous accounting teammate
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/docs/custom-reports"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                              <LineChart className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                                Forecast & Cash Flow
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Real-time month-end runway
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Platform */}
                      <div className="px-4 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wider">
                          Platform
                        </div>
                        <div className="space-y-0.5">
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
                                Integrations
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Bank feeds & financial connectors
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
                                Accounting Intelligence
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                GST 2.0 Notification 9/2025-CT
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
                                Migration & Rescue
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Move from NetSuite, SAP or Tally
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Featured (Compact Card) */}
                      <div className="pl-4 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wider">
                          Featured
                        </div>
                        <Link
                          href="/contact"
                          onClick={() => setActiveDropdown(null)}
                          className="block group"
                        >
                          <div
                            className="relative h-24 rounded-xl p-3 flex items-center justify-center overflow-hidden text-center shadow-xs transition-transform group-hover:scale-[1.01]"
                            style={{
                              background: "linear-gradient(135deg, #5b6e56 0%, #4a5c46 100%)",
                            }}
                          >
                            <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-bold text-slate-900 shadow-md">
                              <Sparkles className="h-3 w-3 text-[#0a4733]" />
                              <span>Meet us at Basecamp</span>
                            </div>
                          </div>
                          <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-[#0a4733]">
                            Join us at Basecamp 2026
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            AI conference for corporate finance.
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                  "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
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

              {/* COMPACT FLOATING SOLUTIONS CARD (Does NOT layover full screen!) */}
              {activeDropdown === "solutions" && (
                <div
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 z-[120] pt-2 animate-fade-in"
                >
                  <div className="w-[580px] rounded-2xl border border-slate-200/90 bg-white p-5 text-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22)]">
                    <div className="grid grid-cols-2 gap-5 divide-x divide-slate-100">
                      {/* Column 1: By Industry */}
                      <div className="pr-4 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wider">
                          By Industry
                        </div>
                        <div className="space-y-0.5">
                          <Link
                            href="/docs/hospital"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                              <Activity className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                                Healthcare & Hospitals
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                NABH IPD, OPD queue triage & pharmacy
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
                            href="/docs/field-sales"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                              <Truck className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                                FMCG & Route Distribution
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Van stock balancing & GPS beats
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
                                Supermarkets & Retail
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Barcode checkout & POS receipts
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: By Persona */}
                      <div className="pl-4 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wider">
                          By Persona
                        </div>
                        <div className="space-y-0.5">
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
                            href="/docs/hospital"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0 mt-0.5">
                              <Activity className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                                Hospital Medical Supts
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                Real-time census & insurance TPA
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
                                Multi-tenant client books & GSTR
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                  "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
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

              {/* COMPACT FLOATING PARTNERS CARD */}
              {activeDropdown === "partners" && (
                <div
                  onMouseEnter={() => handleMouseEnter("partners")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 z-[120] pt-2 animate-fade-in"
                >
                  <div className="w-[380px] rounded-2xl border border-slate-200/90 bg-white p-4 text-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22)]">
                    <div className="text-[11px] font-semibold text-slate-400 tracking-wider mb-2">
                      Partner Programs
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/partners"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
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

                      <Link
                        href="/integrations"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="h-7 w-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#ecf6ef] group-hover:text-[#0a4733] shrink-0">
                          <Blocks className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0a4733]">
                            Technology Integrators
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Build connectors & apps with REST APIs
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/compare"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="h-7 w-7 rounded-md bg-[#ff862f]/10 text-[#ff862f] flex items-center justify-center shrink-0">
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
                  </div>
                </div>
              )}
            </div>

            {/* 4. Customers Direct Link */}
            <Link
              href="/case-studies"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-[#142d25] transition-colors hover:text-black"
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
                  "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
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

              {/* COMPACT FLOATING RESOURCES CARD */}
              {activeDropdown === "resources" && (
                <div
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute right-0 top-full z-[120] pt-2 animate-fade-in"
                >
                  <div className="w-[520px] rounded-2xl border border-slate-200/90 bg-white p-5 text-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22)]">
                    <div className="grid grid-cols-2 gap-5 divide-x divide-slate-100">
                      <div className="pr-4 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wider">
                          Documentation & APIs
                        </div>
                        <div className="space-y-0.5">
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
                        </div>
                      </div>

                      <div className="pl-4 space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wider">
                          Compliance & Stories
                        </div>
                        <div className="space-y-0.5">
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
                                Notification 9/2025-CT rules
                              </div>
                            </div>
                          </Link>

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
                                Real Indian enterprise stories
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white text-slate-800 lg:hidden">
            <div className="container-wide flex flex-col gap-2.5 py-5">
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
