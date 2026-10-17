import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {
  MessageSquare,
  Mic,
  Camera,
  FileText,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: `WhatsApp AI Business & Billing Agent | ${brand.name}`,
  description: `Turn WhatsApp into an autonomous bookkeeping assistant for your Indian business. Voice-note accounting, paper bill scanning, automated customer ledger PDFs, and instant UPI collection links.`,
};

export default function WhatsAppAiToolPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs mb-4">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span>Zero Learning Curve • 100% WhatsApp Native</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            WhatsApp AI Business & Billing Agent
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Stop waiting until night to type bills into a computer. Record cash receipts and vendor expenses via voice notes or bill photos, and let customers check their balance and download PDF statements on demand.
          </p>
        </div>
      </section>

      {/* Interactive Workflow Simulation */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Live Experience"
            title="How Indian Businesses Run on WhatsApp AI"
            subtitle="No desktop software needed in the field. Your entire team already knows how to use WhatsApp."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-slate-800 dark:text-emerald-400">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900 dark:text-white">
                1. Voice-Note Accounting
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Send a 5-second voice note in Hindi or English: <em>"Received ₹15,000 via PhonePe from Gupta Medicals for bill 204."</em>
              </p>
              <div className="mt-4 rounded-xl bg-slate-100 p-3 text-xs font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <div className="text-[10px] text-emerald-600 font-bold uppercase mb-1">AI Output:</div>
                DR Bank (PhonePe): ₹15,000<br />
                CR Gupta Medicals: ₹15,000<br />
                Status: Posted & Receipt WhatsApped ✓
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 dark:bg-slate-800 dark:text-blue-400">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900 dark:text-white">
                2. Snap Photo of Vendor Bill
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Take a photo of any printed or handwritten supplier invoice. Our vision AI extracts vendor GSTIN, items, quantities, and GST rates.
              </p>
              <div className="mt-4 rounded-xl bg-slate-100 p-3 text-xs font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <div className="text-[10px] text-blue-600 font-bold uppercase mb-1">OCR Match:</div>
                Vendor: Sun Pharma Ltd<br />
                Items: 14 batches extracted<br />
                GST Split: 5% (Ch. 30)<br />
                Drafted into Purchase Bills ✓
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-800 dark:bg-slate-800 dark:text-purple-400">
                <QrCode className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900 dark:text-white">
                3. Instant Customer Statements
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                When a customer asks for their ledger, type <em>"Send statement to Sharma Traders"</em>. The bot instantly sends a signed PDF with a direct UPI payment link.
              </p>
              <div className="mt-4 rounded-xl bg-slate-100 p-3 text-xs font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <div className="text-[10px] text-purple-600 font-bold uppercase mb-1">Customer View:</div>
                PDF: Sharma_Oct_Ledger.pdf<br />
                Balance Due: ₹42,500<br />
                Dynamic UPI QR attached ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Activate WhatsApp AI for Your Business Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            Works directly with your official WhatsApp Business number and integrates natively into {brand.name} ERP.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Connect My WhatsApp <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
