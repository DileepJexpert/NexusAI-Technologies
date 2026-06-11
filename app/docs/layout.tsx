"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsNav } from "@/data/docs-nav";
import { brand } from "@/lib/brand";
import type { Metadata } from "next";

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      {docsNav.map((section) => (
        <div key={section.title}>
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
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
                        ? "bg-accent/10 font-semibold text-accent"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/8 dark:hover:text-white"
                    )}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] font-bold text-accent">
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
    </nav>
  );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1917]">
      <div className="border-b border-slate-200 bg-slate-50/80 dark:border-white/10 dark:bg-[#1C1917]">
        <div className="container-wide flex h-10 items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
              {brand.name}
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">API Documentation</span>
            <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Beta
            </span>
          </div>
          <button
            className="text-slate-500 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle docs menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="container-wide flex gap-0">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 py-8 pr-6 dark:border-white/10 lg:block">
          <Sidebar />
        </aside>

        {mobileOpen && (
          <div className="fixed inset-x-0 top-[6.5rem] z-40 h-[calc(100vh-6.5rem)] overflow-y-auto border-t border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1C1917] lg:hidden">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        )}

        <main className="min-w-0 flex-1 py-8 lg:pl-10">
          <div className="docs-content max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
