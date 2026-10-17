"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { mainNav, resourcesMenu } from "@/data/navigation";
import { categories } from "@/data/categories";
import { getProductsByCategory, sortByStatus } from "@/data/products";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { KatixoLogo } from "@/components/shared/KatixoLogo";
import { brand } from "@/lib/brand";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  const isDark = mounted && theme === "dark";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#142d25]/95 shadow-lg backdrop-blur-xl"
          : "border-b border-white/10 bg-[#142d25]"
      )}
    >
      <div className="container-wide flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={`${brand.name} home`}>
          <KatixoLogo className="h-9 w-auto sm:h-10" white={true} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              suppressHydrationWarning
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Products
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {productsOpen && <MegaMenu onClose={() => setProductsOpen(false)} />}
          </div>
          {mainNav
            .filter((link) => link.label !== "Products")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              suppressHydrationWarning
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Resources
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {resourcesOpen && <ResourcesDropdown onClose={() => setResourcesOpen(false)} />}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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

          <Link
            href="/admin/login"
            className="text-xs font-medium text-white/80 transition-colors hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#142d25] px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1a3a30] hover:border-[#b3ed97]/50"
          >
            Get Started
          </Link>
        </div>

        <button
          suppressHydrationWarning
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-14 z-40 h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-white/10 bg-[#142d25] text-white lg:hidden">
          <div className="container-wide flex flex-col gap-2 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-4 h-px bg-white/10" />
            {resourcesMenu.map((col) => (
              <div key={col.heading}>
                <div className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#b3ed97]">
                  {col.heading}
                </div>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    <span className="font-medium">{link.label}</span>
                    {link.description && (
                      <span className="ml-2 text-xs text-white/50">{link.description}</span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
            <div className="my-4 h-px bg-white/10" />
            <div className="px-4 text-xs font-semibold uppercase tracking-wider text-[#b3ed97]">
              Live Products
            </div>
            {categories.map((c) => {
              const liveProducts = sortByStatus(getProductsByCategory(c.id)).filter(
                (p) => p.status !== "coming_soon"
              );
              if (liveProducts.length === 0) return null;
              return (
                <div key={c.id} className="mt-2">
                  <div className="px-4 py-1 text-xs font-semibold text-white/60">
                    {c.icon} {c.name}
                  </div>
                  {liveProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${c.id}/${p.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-6 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {p.name}
                      <StatusBadge status={p.status} />
                    </Link>
                  ))}
                </div>
              );
            })}
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
  );
}

function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-0 top-full z-50 animate-fade-in pt-2">
      <div className="rounded-xl border border-white/10 bg-[#10271e] text-white shadow-2xl backdrop-blur-xl">
        <div className="flex divide-x divide-white/10 gap-0">
          {categories.map((c) => {
            const prods = sortByStatus(getProductsByCategory(c.id));
            return (
              <div key={c.id} className="w-[145px] px-3.5 py-3">
                <div className="mb-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#b3ed97]">
                  <span>{c.icon}</span>
                  <span className="truncate">{c.name.split(" ")[0]}</span>
                </div>
                {prods.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${c.id}/${p.id}`}
                    onClick={onClose}
                    className="block truncate rounded px-1.5 py-1 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
        <div className="border-t border-white/10 px-4 py-2.5 text-center">
          <Link
            href="/products"
            onClick={onClose}
            className="text-xs font-semibold text-[#b3ed97] transition-colors hover:text-white"
          >
            View all products &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute right-0 top-full z-50 animate-fade-in pt-2">
      <div className="w-[640px] rounded-xl border border-white/10 bg-[#10271e] text-white shadow-2xl backdrop-blur-xl">
        <div className="flex divide-x divide-white/10">
          {resourcesMenu.map((col) => (
            <div key={col.heading} className="flex-1 px-4 py-4">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#b3ed97]">
                {col.heading}
              </div>
              <div className="space-y-1">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-md px-2.5 py-2 transition-colors hover:bg-white/10"
                  >
                    <div className="text-sm font-medium text-white">
                      {link.label}
                    </div>
                    {link.description && (
                      <div className="mt-0.5 text-xs text-white/50">
                        {link.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
