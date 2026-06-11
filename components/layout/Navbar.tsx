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
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(brand.whatsappGreeting)}`;
  const isDark = mounted && theme === "dark";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-slate-200 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#1C1917]/85"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={`${brand.name} home`}>
          <KatixoLogo className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">
              Products
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            {productsOpen && <MegaMenu onClose={() => setProductsOpen(false)} />}
          </div>
          {mainNav
            .filter((link) => link.label !== "Products")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">
              Resources
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            {resourcesOpen && <ResourcesDropdown onClose={() => setResourcesOpen(false)} />}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme pill toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex items-center rounded-full border border-slate-200 bg-slate-100 p-0.5 text-[11px] font-semibold dark:border-white/15 dark:bg-white/8"
            >
              <span
                className={cn(
                  "rounded-full px-2.5 py-[3px] transition-all duration-200",
                  !isDark
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 dark:text-slate-500"
                )}
              >
                Light
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-[3px] transition-all duration-200",
                  isDark
                    ? "bg-[#2C2420] text-white shadow-sm dark:bg-[#2C2420]"
                    : "text-slate-400"
                )}
              >
                Dark
              </span>
            </button>
          )}

          <Link
            href="/admin/login"
            className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
          >
            Sign in
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-green-500/25"
            style={{
              background: "linear-gradient(135deg, #075E54 0%, #25D366 100%)",
              boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.5 2C6.261 2 2 6.261 2 11.5c0 1.898.526 3.673 1.44 5.187L2 22l5.45-1.428A9.446 9.446 0 0011.5 21C16.739 21 21 16.739 21 11.5S16.739 2 11.5 2zm0 17.25a7.73 7.73 0 01-3.942-1.08l-.284-.168-2.924.767.78-2.851-.185-.292A7.712 7.712 0 013.75 11.5C3.75 7.224 7.224 3.75 11.5 3.75S19.25 7.224 19.25 11.5 15.776 19.25 11.5 19.25z" />
            </svg>
            Get Started
          </a>
        </div>

        <button
          className="text-slate-700 dark:text-slate-300 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-14 z-40 h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#1C1917] lg:hidden">
          <div className="container-wide flex flex-col gap-2 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-4 h-px bg-slate-200 dark:bg-white/10" />
            {resourcesMenu.map((col) => (
              <div key={col.heading}>
                <div className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {col.heading}
                </div>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <span className="font-medium">{link.label}</span>
                    {link.description && (
                      <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">{link.description}</span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
            <div className="my-4 h-px bg-slate-200 dark:bg-white/10" />
            <div className="px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Live products
            </div>
            {categories.map((c) => {
              const liveProducts = sortByStatus(getProductsByCategory(c.id)).filter(
                (p) => p.status !== "coming_soon"
              );
              if (liveProducts.length === 0) return null;
              return (
                <div key={c.id} className="mt-2">
                  <div className="px-4 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {c.icon} {c.name}
                  </div>
                  {liveProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${c.id}/${p.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-6 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      {p.name}
                      <StatusBadge status={p.status} />
                    </Link>
                  ))}
                </div>
              );
            })}
            <div className="my-4 h-px bg-slate-200 dark:bg-white/10" />
            {/* Mobile theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="mx-4 flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100 py-2.5 text-sm font-semibold text-slate-700 dark:border-white/15 dark:bg-white/8 dark:text-slate-300"
              >
                {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
              </button>
            )}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #075E54 0%, #25D366 100%)" }}
            >
              Get Started on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-0 top-full z-50 animate-fade-in pt-2">
      <div className="rounded-lg border border-slate-200 bg-white shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#1C1917]/95">
        <div className="flex divide-x divide-slate-100 gap-0 dark:divide-white/8">
          {categories.map((c) => {
            const prods = sortByStatus(getProductsByCategory(c.id));
            return (
              <div key={c.id} className="w-[140px] px-3 py-3">
                <div className="mb-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span>{c.icon}</span>
                  <span className="truncate">{c.name.split(" ")[0]}</span>
                </div>
                {prods.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${c.id}/${p.id}`}
                    onClick={onClose}
                    className="block truncate rounded px-1 py-1 text-[11px] text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/8 dark:hover:text-white"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
        <div className="border-t border-slate-100 px-4 py-2 text-center dark:border-white/8">
          <Link
            href="/products"
            onClick={onClose}
            className="text-[11px] font-semibold text-accent transition-colors hover:text-accent/80"
          >
            View all products →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute right-0 top-full z-50 animate-fade-in pt-2">
      <div className="w-[420px] rounded-lg border border-slate-200 bg-white shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#1C1917]/95">
        <div className="flex divide-x divide-slate-100 dark:divide-white/8">
          {resourcesMenu.map((col) => (
            <div key={col.heading} className="flex-1 px-4 py-4">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {col.heading}
              </div>
              <div className="space-y-1">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-md px-2 py-2 transition-colors hover:bg-slate-50 dark:hover:bg-white/8"
                  >
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {link.label}
                    </div>
                    {link.description && (
                      <div className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
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
