"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsNav } from "@/data/docs-nav";
import { brand } from "@/lib/brand";
import { DocsCopyButtons } from "@/components/docs/DocsContentWrapper";

function ProductSection({
  product,
  onNavigate,
}: {
  product: (typeof docsNav)[number];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActiveProduct = product.sections.some((s) =>
    s.items.some((i) => pathname === i.href)
  );
  const [open, setOpen] = useState(isActiveProduct);

  return (
    <div className="border-b border-slate-100 pb-3 last:border-0 dark:border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm font-semibold transition-colors",
          isActiveProduct
            ? "text-slate-900 dark:text-white"
            : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        )}
      >
        <span>{product.icon}</span>
        <span className="flex-1">{product.product}</span>
        {product.badge && (
          <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
            {product.badge}
          </span>
        )}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="mt-1 space-y-4 pl-2">
          {product.sections.map((section) => (
            <div key={section.title}>
              <div className="mb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {section.title}
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-emerald-50 font-semibold text-emerald-800 dark:bg-emerald-950/40 dark:text-[#b3ed97]"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/8 dark:hover:text-white"
                        )}
                      >
                        {item.label}
                        {item.badge && (
                          <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="space-y-2">
      {docsNav.map((product) => (
        <ProductSection
          key={product.product}
          product={product}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c120f]">
      {/* Campfire Mintlify Style Top Bar */}
      <div className="border-b border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-[#0f1914]">
        <div className="container-wide flex h-12 items-center justify-between">
          {/* Navigation Tabs (Campfire Docs style) */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/docs"
              className={cn(
                "relative py-3 transition-colors",
                pathname === "/docs"
                  ? "text-[#142d25] font-bold dark:text-[#b3ed97]"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              )}
            >
              Guides
              {pathname === "/docs" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#142d25] dark:bg-[#b3ed97]" />
              )}
            </Link>
            <Link
              href="/docs/invoices"
              className={cn(
                "relative py-3 transition-colors",
                pathname !== "/docs" && pathname !== "/docs/changelog"
                  ? "text-[#142d25] font-bold dark:text-[#b3ed97]"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              )}
            >
              API Reference
              {pathname !== "/docs" && pathname !== "/docs/changelog" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#142d25] dark:bg-[#b3ed97]" />
              )}
            </Link>
            <Link
              href="/docs/changelog"
              className={cn(
                "relative py-3 transition-colors",
                pathname === "/docs/changelog"
                  ? "text-[#142d25] font-bold dark:text-[#b3ed97]"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              )}
            >
              Changelog
              {pathname === "/docs/changelog" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#142d25] dark:bg-[#b3ed97]" />
              )}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-xs text-slate-400 dark:border-white/10 dark:bg-white/5">
              <Search className="h-3 w-3" />
              <span>Search docs...</span>
              <kbd className="rounded border border-slate-200 bg-slate-50 px-1 text-[10px] text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-400">⌘K</kbd>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1 rounded-full bg-[#142d25] px-3.5 py-1.5 text-xs font-semibold text-white dark:bg-[#b3ed97] dark:text-[#142d25] transition-all hover:opacity-90"
            >
              <span>Get API Key</span>
            </Link>
            <button
              className="text-slate-500 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle docs menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="container-wide flex gap-0">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 py-8 pr-6 dark:border-white/10 lg:block">
          <Sidebar />
        </aside>

        {mobileOpen && (
          <div className="fixed inset-x-0 top-[6.5rem] z-40 h-[calc(100vh-6.5rem)] overflow-y-auto border-t border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#0c120f] lg:hidden">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        )}

        <main className="min-w-0 flex-1 py-8 lg:pl-10">
          <div className="docs-content max-w-3xl">
            {children}
            <DocsCopyButtons />
          </div>
        </main>
      </div>
    </div>
  );
}
