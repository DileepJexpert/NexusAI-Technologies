"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { productsMenu, solutionsMenu, partnersMenu, resourcesMenu } from "@/data/navigation";
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
    }, 150);
  };

  const isDark = mounted && theme === "dark";

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Campfire/Milterra Announcement Banner */}
      <div className="relative z-50 border-b border-white/10 bg-[#0d221b] text-white py-1.5 px-4 text-center text-xs font-medium tracking-wide">
        <div className="container-wide flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b3ed97]/20 px-2 py-0.5 text-[10px] font-bold text-[#b3ed97]">
            <Sparkles className="h-3 w-3" /> OFFICIAL 2026 RELEASE
          </span>
          <span className="hidden sm:inline text-white/80">
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

      {/* Main Campfire Navbar */}
      <header
        className={cn(
          "w-full transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-[#142d25]/95 shadow-lg backdrop-blur-xl"
            : "border-b border-white/10 bg-[#142d25]"
        )}
      >
        <div className="container-wide flex h-14 items-center justify-between">
          {/* Left Brand: Campfire spark mark + white wordmark */}
          <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
            <KatixoLogo className="h-9 w-auto sm:h-10" white={true} />
          </Link>

          {/* Center Navigation Links with Campfire order: Products, Solutions, Partners, Customers, Resources */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* 1. Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors",
                  activeDropdown === "products"
                    ? "bg-white/10 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                Products
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeDropdown === "products" && "rotate-180"
                  )}
                />
              </button>

              {activeDropdown === "products" && (
                <div
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 z-50 pt-2 animate-fade-in"
                >
                  <div className="w-[840px] rounded-2xl border border-white/10 bg-[#10271e]/98 p-6 text-white shadow-2xl backdrop-blur-2xl">
                    <div className="grid grid-cols-3 gap-6 divide-x divide-white/10">
                      {productsMenu.map((col, idx) => (
                        <div key={col.heading} className={cn("space-y-3", idx > 0 && "pl-6")}>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#b3ed97]">
                            {col.heading}
                          </div>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group block rounded-lg p-2 transition-colors hover:bg-white/10"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-white group-hover:text-[#b3ed97]">
                                    {link.label}
                                  </span>
                                  {link.badge && (
                                    <span className="rounded bg-[#b3ed97]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#b3ed97]">
                                      {link.badge}
                                    </span>
                                  )}
                                </div>
                                {link.description && (
                                  <p className="mt-0.5 text-xs text-white/55 line-clamp-1">
                                    {link.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between text-xs">
                      <span className="text-white/60">
                        Built for Indian Enterprise &bull; Ind-AS &bull; Notification 9/2025-CT
                      </span>
                      <Link
                        href="/products"
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-1 font-semibold text-[#b3ed97] hover:text-white transition-colors"
                      >
                        Explore all 48 modules &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors",
                  activeDropdown === "solutions"
                    ? "bg-white/10 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeDropdown === "solutions" && "rotate-180"
                  )}
                />
              </button>

              {activeDropdown === "solutions" && (
                <div
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 z-50 pt-2 animate-fade-in"
                >
                  <div className="w-[620px] rounded-2xl border border-white/10 bg-[#10271e]/98 p-6 text-white shadow-2xl backdrop-blur-2xl">
                    <div className="grid grid-cols-2 gap-6 divide-x divide-white/10">
                      {solutionsMenu.map((col, idx) => (
                        <div key={col.heading} className={cn("space-y-3", idx > 0 && "pl-6")}>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#b3ed97]">
                            {col.heading}
                          </div>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group block rounded-lg p-2 transition-colors hover:bg-white/10"
                              >
                                <div className="text-sm font-semibold text-white group-hover:text-[#b3ed97]">
                                  {link.label}
                                </div>
                                {link.description && (
                                  <p className="mt-0.5 text-xs text-white/55 line-clamp-1">
                                    {link.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Partners Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("partners")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "partners" ? null : "partners")}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors",
                  activeDropdown === "partners"
                    ? "bg-white/10 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                Partners
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeDropdown === "partners" && "rotate-180"
                  )}
                />
              </button>

              {activeDropdown === "partners" && (
                <div
                  onMouseEnter={() => handleMouseEnter("partners")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-1/2 top-full -translate-x-1/2 z-50 pt-2 animate-fade-in"
                >
                  <div className="w-[380px] rounded-2xl border border-white/10 bg-[#10271e]/98 p-5 text-white shadow-2xl backdrop-blur-2xl">
                    <div className="space-y-3">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#b3ed97]">
                        {partnersMenu[0].heading}
                      </div>
                      <div className="space-y-1">
                        {partnersMenu[0].links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group block rounded-lg p-2.5 transition-colors hover:bg-white/10"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-white group-hover:text-[#b3ed97]">
                                {link.label}
                              </span>
                              {link.badge && (
                                <span className="rounded bg-[#ff862f]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#ff862f]">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            {link.description && (
                              <p className="mt-0.5 text-xs text-white/55">
                                {link.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Customers Direct Link */}
            <Link
              href="/case-studies"
              className="rounded-md px-3.5 py-1.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              Customers
            </Link>

            {/* 5. Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                suppressHydrationWarning
                onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors",
                  activeDropdown === "resources"
                    ? "bg-white/10 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                Resources
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeDropdown === "resources" && "rotate-180"
                  )}
                />
              </button>

              {activeDropdown === "resources" && (
                <div
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute right-0 top-full z-50 pt-2 animate-fade-in"
                >
                  <div className="w-[620px] rounded-2xl border border-white/10 bg-[#10271e]/98 p-6 text-white shadow-2xl backdrop-blur-2xl">
                    <div className="grid grid-cols-2 gap-6 divide-x divide-white/10">
                      {resourcesMenu.map((col, idx) => (
                        <div key={col.heading} className={cn("space-y-3", idx > 0 && "pl-6")}>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#b3ed97]">
                            {col.heading}
                          </div>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group block rounded-lg p-2 transition-colors hover:bg-white/10"
                              >
                                <div className="text-sm font-semibold text-white group-hover:text-[#b3ed97]">
                                  {link.label}
                                </div>
                                {link.description && (
                                  <p className="mt-0.5 text-xs text-white/55 line-clamp-1">
                                    {link.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Nav Actions (Campfire style) */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Theme toggle pill */}
            {mounted && (
              <button
                suppressHydrationWarning
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className="flex items-center rounded-full border border-white/20 bg-white/10 p-0.5 text-[11px] font-semibold text-white"
              >
                <span
                  className={cn(
                    "rounded-full px-2.5 py-[3px] transition-all duration-200",
                    !isDark
                      ? "bg-[#b3ed97] text-[#142d25] font-bold shadow-sm"
                      : "text-white/70"
                  )}
                >
                  Light
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-[3px] transition-all duration-200",
                    isDark
                      ? "bg-[#10241d] text-[#b3ed97] font-bold shadow-sm"
                      : "text-white/70"
                  )}
                >
                  Dark
                </span>
              </button>
            )}

            {/* Sign In text link */}
            <Link
              href="/admin/login"
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              Sign In
            </Link>

            {/* Get Started pill button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#142d25] px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#1a3a30] hover:border-[#b3ed97]/50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            suppressHydrationWarning
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="fixed inset-x-0 top-24 z-40 h-[calc(100vh-6rem)] overflow-y-auto border-t border-white/10 bg-[#142d25] text-white lg:hidden">
            <div className="container-wide flex flex-col gap-3 py-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#b3ed97] px-4">
                Products
              </div>
              {productsMenu.flatMap((col) => col.links).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-6 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="rounded bg-[#b3ed97]/20 px-1.5 py-0.5 text-[10px] text-[#b3ed97]">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}

              <div className="my-2 h-px bg-white/10" />

              <div className="text-xs font-bold uppercase tracking-wider text-[#b3ed97] px-4">
                Solutions
              </div>
              {solutionsMenu.flatMap((col) => col.links).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-6 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-white/10" />

              <div className="text-xs font-bold uppercase tracking-wider text-[#b3ed97] px-4">
                Partners & Customers
              </div>
              {partnersMenu[0].links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-6 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/case-studies"
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-6 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              >
                Customers & Case Studies
              </Link>

              <div className="my-4 h-px bg-white/10" />

              {mounted && (
                <button
                  suppressHydrationWarning
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="mx-4 flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 py-2.5 text-sm font-semibold text-white"
                >
                  {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              )}

              <Link
                href="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="mx-4 text-center rounded-lg border border-white/20 py-2.5 text-sm font-medium text-white hover:bg-white/10"
              >
                Sign In
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#b3ed97] px-6 py-3 text-sm font-bold text-[#142d25]"
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
