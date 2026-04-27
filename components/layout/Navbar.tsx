"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navigation";
import { categories } from "@/data/categories";
import { getProductsByCategory, sortByStatus } from "@/data/products";
import { StatusBadge } from "@/components/shared/StatusBadge";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
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
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0B1628]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg font-heading text-lg font-bold text-white shadow-md"
            style={{
              background: "linear-gradient(135deg, #1B2A4A 0%, #2E5090 60%, #16A34A 100%)",
            }}
          >
            N
          </div>
          <span className="font-heading text-lg font-bold text-white">
            NexusAI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            {productsOpen && <MegaMenu />}
          </div>
          {mainNav
            .filter((link) => link.label !== "Products")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
          <span className="text-sm font-medium text-slate-400 hover:text-white cursor-pointer transition-colors">
            Sign in
          </span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-green-500/25"
            style={{
              background: "linear-gradient(135deg, #075E54 0%, #25D366 100%)",
              boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.5 2C6.261 2 2 6.261 2 11.5c0 1.898.526 3.673 1.44 5.187L2 22l5.45-1.428A9.446 9.446 0 0011.5 21C16.739 21 21 16.739 21 11.5S16.739 2 11.5 2zm0 17.25a7.73 7.73 0 01-3.942-1.08l-.284-.168-2.924.767.78-2.851-.185-.292A7.712 7.712 0 013.75 11.5C3.75 7.224 7.224 3.75 11.5 3.75S19.25 7.224 19.25 11.5 15.776 19.25 11.5 19.25z" />
            </svg>
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-[#0B1628] lg:hidden">
          <div className="container-wide flex flex-col gap-2 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-4 h-px bg-white/10" />
            <div className="px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Live products
            </div>
            {categories.map((c) => {
              const liveProducts = sortByStatus(getProductsByCategory(c.id)).filter(
                (p) => p.status !== "coming_soon"
              );
              if (liveProducts.length === 0) return null;
              return (
                <div key={c.id} className="mt-2">
                  <div className="px-4 py-1 text-xs font-semibold text-slate-400">
                    {c.icon} {c.name}
                  </div>
                  {liveProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${c.id}/${p.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-6 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      {p.name}
                      <StatusBadge status={p.status} />
                    </Link>
                  ))}
                </div>
              );
            })}
            <div className="my-4 h-px bg-white/10" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #075E54 0%, #25D366 100%)",
              }}
            >
              Get Started on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
      <div className="w-[min(90vw,900px)] rounded-xl border border-white/10 bg-[#0B1628]/95 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
          {categories.map((c) => {
            const cats = sortByStatus(getProductsByCategory(c.id));
            return (
              <div key={c.id}>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </div>
                <div className="flex flex-col gap-1">
                  {cats.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${c.id}/${p.id}`}
                      className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span>{p.name}</span>
                      <StatusBadge status={p.status} />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-white/10 p-4 text-center">
          <Link
            href="/products"
            className="text-sm font-semibold text-accent hover:underline"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </div>
  );
}
