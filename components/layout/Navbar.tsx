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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading text-lg font-bold">
            N
          </div>
          <span className="font-heading text-lg font-bold">NexusAI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
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
                className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
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
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button variant="accent" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-wide flex flex-col gap-2 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-4 h-px bg-border" />
            <div className="px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Live products
            </div>
            {categories.map((c) => {
              const liveProducts = sortByStatus(getProductsByCategory(c.id)).filter(
                (p) => p.status !== "coming_soon"
              );
              if (liveProducts.length === 0) return null;
              return (
                <div key={c.id} className="mt-2">
                  <div className="px-4 py-1 text-xs font-semibold">
                    {c.icon} {c.name}
                  </div>
                  {liveProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${c.id}/${p.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-6 py-2 text-sm hover:bg-muted"
                    >
                      {p.name}
                      <StatusBadge status={p.status} />
                    </Link>
                  ))}
                </div>
              );
            })}
            <div className="my-4 h-px bg-border" />
            <Button variant="accent" className="mx-4" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Get Started on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
      <div className="w-[min(90vw,900px)] rounded-xl border border-border bg-background shadow-2xl animate-fade-in">
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
          {categories.map((c) => {
            const cats = sortByStatus(getProductsByCategory(c.id));
            return (
              <div key={c.id}>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </div>
                <div className="flex flex-col gap-1">
                  {cats.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${c.id}/${p.id}`}
                      className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
        <div className="border-t border-border p-4 text-center">
          <Link
            href="/products"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </div>
  );
}
