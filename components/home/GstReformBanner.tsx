import Link from "next/link";
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GstReformBanner() {
  return (
    <section className="border-y border-amber-200/80 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-blue-500/10 py-10 dark:border-amber-500/20 dark:from-amber-950/20 dark:via-emerald-950/20 dark:to-blue-950/20">
      <div className="container-wide">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-800 dark:text-amber-300">
              <Zap className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              GST 2.0 Reform Ready &bull; Notification 9/2025-CT (Rate)
            </div>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Never worry about tax rate penalties.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Katixo automatically enforces the latest GST 2.0 statutory rate changes across your inventory, counter POS, and invoices &mdash; zero manual tax recalculations required.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Chapter 30 Medicines</p>
                <p className="mt-1 text-lg font-bold text-emerald-600">5% GST</p>
                <span className="text-[10px] text-slate-400">Reduced from 12%</span>
              </div>
              <div className="rounded-lg border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Medical Devices</p>
                <p className="mt-1 text-lg font-bold text-emerald-600">5% GST</p>
                <span className="text-[10px] text-slate-400">9018, 9019, 9021</span>
              </div>
              <div className="rounded-lg border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Kirana Commodities</p>
                <p className="mt-1 text-lg font-bold text-blue-600">Auto-Detect</p>
                <span className="text-[10px] text-slate-400">0% Loose / 5% Packaged</span>
              </div>
              <div className="rounded-lg border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Soaps vs Detergents</p>
                <p className="mt-1 text-lg font-bold text-indigo-600">5% vs 18%</p>
                <span className="text-[10px] text-slate-400">Auto HSN Resolution</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md dark:border-white/10 dark:bg-[#07111f]">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              Statutory Exemption Engine
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Includes automatic zero-rate exemption for 33 notified lifesaving medications by drug name, avoiding costly tax audits.
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild size="sm" variant="default">
                <Link href="/gst-guides">
                  Read GST 2.0 Compliance Guide <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/docs/gst">
                  View GST &amp; Tax APIs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
