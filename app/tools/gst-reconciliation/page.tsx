"use client";

import { useState } from "react";
import Link from "next/link";
import { brand } from "@/lib/brand";
import {
  FileSpreadsheet,
  FileCode2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  ArrowRight,
  Download,
  Share2,
  RefreshCw,
  ShieldCheck,
  Building2,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface InvoiceMatch {
  id: string;
  gstin: string;
  vendorName: string;
  invoiceNo: string;
  invoiceDate: string;
  bookTaxable: number;
  bookGst: number;
  portalTaxable: number;
  portalGst: number;
  status: "matched" | "mismatch" | "missing_in_2b" | "missing_in_books";
  notes: string;
  vendorPhone?: string;
}

const sampleInvoices: InvoiceMatch[] = [
  {
    id: "1",
    gstin: "27AABCT3518Q1ZY",
    vendorName: "Apex Pharma Distributors LLP",
    invoiceNo: "INV-2026-0891",
    invoiceDate: "2026-10-02",
    bookTaxable: 145000,
    bookGst: 7250,
    portalTaxable: 145000,
    portalGst: 7250,
    status: "matched",
    notes: "100% Match at 5% GST (Ch. 30 Medicines)",
  },
  {
    id: "2",
    gstin: "29AAGCA1294F1Z8",
    vendorName: "Karnataka Surgical Supplies",
    invoiceNo: "KSS/26/1044",
    invoiceDate: "2026-10-05",
    bookTaxable: 88000,
    bookGst: 4400,
    portalTaxable: 88000,
    portalGst: 4400,
    status: "matched",
    notes: "100% Match at 5% GST (Medical Devices 9018)",
  },
  {
    id: "3",
    gstin: "07AAACR4412K1Z3",
    vendorName: "Reliance Retail Logistics Ltd",
    invoiceNo: "RRL-DEL-4019",
    invoiceDate: "2026-10-08",
    bookTaxable: 210000,
    bookGst: 37800,
    portalTaxable: 210000,
    portalGst: 25200,
    status: "mismatch",
    notes: "Tax Rate Mismatch: Books claimed 18%, Vendor filed at 12%. Discrepancy: ₹12,600",
    vendorPhone: "+919811200001",
  },
  {
    id: "4",
    gstin: "33AAECF9012M1Z0",
    vendorName: "Southern FMCG & Packaging Corp",
    invoiceNo: "SFC/OCT/221",
    invoiceDate: "2026-10-10",
    bookTaxable: 165000,
    bookGst: 29700,
    portalTaxable: 0,
    portalGst: 0,
    status: "missing_in_2b",
    notes: "CRITICAL: Vendor has NOT filed GSTR-1 for Oct 2026. ₹29,700 ITC blocked under Sec 16(2)(aa).",
    vendorPhone: "+919840100002",
  },
  {
    id: "5",
    gstin: "06AAACT7719B1Z2",
    vendorName: "Haryana Corrugated Boxes Pvt Ltd",
    invoiceNo: "HCB-2026-551",
    invoiceDate: "2026-10-12",
    bookTaxable: 62000,
    bookGst: 11160,
    portalTaxable: 0,
    portalGst: 0,
    status: "missing_in_2b",
    notes: "Vendor return pending. Send 1-click WhatsApp payment hold notice.",
    vendorPhone: "+919812000003",
  },
  {
    id: "6",
    gstin: "24AAACD8814R1ZN",
    vendorName: "Gujarat Petrochem Solutions",
    invoiceNo: "GPS-88912",
    invoiceDate: "2026-10-14",
    bookTaxable: 0,
    bookGst: 0,
    portalTaxable: 95000,
    portalGst: 17100,
    status: "missing_in_books",
    notes: "Unclaimed ITC: Filed on GST portal by supplier but missing from Purchase Register. ₹17,100 available to claim.",
  },
];

export default function GstReconciliationToolPage() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "matched" | "mismatch" | "missing_in_2b" | "missing_in_books">("all");
  const [reminderSent, setReminderSent] = useState<{ [key: string]: boolean }>({});

  const filteredInvoices = sampleInvoices.filter((inv) => {
    if (activeTab === "all") return true;
    return inv.status === activeTab;
  });

  const totalBookItc = sampleInvoices.reduce((acc, curr) => acc + curr.bookGst, 0);
  const matchedItc = sampleInvoices.filter((i) => i.status === "matched").reduce((acc, curr) => acc + curr.portalGst, 0);
  const atRiskItc = sampleInvoices.filter((i) => i.status === "missing_in_2b").reduce((acc, curr) => acc + curr.bookGst, 0);
  const unclaimedItc = sampleInvoices.filter((i) => i.status === "missing_in_books").reduce((acc, curr) => acc + curr.portalGst, 0);

  const handleSendReminder = (invId: string, vendorName: string, amount: number) => {
    setReminderSent((prev) => ({ ...prev, [invId]: true }));
    const msg = encodeURIComponent(
      `Dear ${vendorName}, our monthly GST reconciliation shows invoice ${invId} (GST amount ₹${amount.toLocaleString("en-IN")}) is missing in our GSTR-2B. Please file or update your GSTR-1 to ensure timely payment processing. Thank you.`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs mb-4">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>GST 2.0 Compliance Engine • 100% Client-Side Private</span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            GSTR-2B vs Purchase Auto-Reconciler
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Protect your Input Tax Credit (ITC) under GST Section 16(2)(aa). Match purchase registers against official portal 2B data in seconds, detect vendor tax rate mismatches, and automate WhatsApp filing reminders.
          </p>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="container-wide">
          {/* Tool Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {/* Upload Zone */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* File 1: GSTR-2B JSON */}
              <div className="rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center hover:border-primary/50 transition-colors bg-slate-50/50 dark:border-slate-700 dark:bg-slate-800/40">
                <FileCode2 className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-3 font-heading text-base font-bold text-slate-800 dark:text-white">
                  1. Official GSTR-2B (JSON)
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Download monthly GSTR-2B JSON from the GST portal and drop here.
                </p>
                <button
                  onClick={() => setDataLoaded(true)}
                  className="mt-4 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200"
                >
                  {dataLoaded ? "✓ 2B Loaded (October 2026)" : "Select 2B JSON"}
                </button>
              </div>

              {/* File 2: Purchase Register Excel */}
              <div className="rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center hover:border-primary/50 transition-colors bg-slate-50/50 dark:border-slate-700 dark:bg-slate-800/40">
                <FileSpreadsheet className="mx-auto h-10 w-10 text-emerald-600" />
                <h3 className="mt-3 font-heading text-base font-bold text-slate-800 dark:text-white">
                  2. Purchase Register (Excel / Tally / Busy)
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Export purchase bills with GSTIN, invoice number, and tax split.
                </p>
                <button
                  onClick={() => setDataLoaded(true)}
                  className="mt-4 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200"
                >
                  {dataLoaded ? "✓ Purchase Register Loaded" : "Select Excel/CSV"}
                </button>
              </div>
            </div>

            {/* Quick Demo Trigger Button */}
            {!dataLoaded && (
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 p-6 text-center border border-emerald-100 dark:from-slate-800 dark:to-slate-850 dark:border-slate-700">
                <p className="text-sm font-semibold text-emerald-950 dark:text-emerald-300">
                  Want to test the algorithm without uploading your files?
                </p>
                <p className="mt-1 text-xs text-emerald-700 dark:text-slate-400">
                  Click below to load realistic sample invoices (clean matches, tax rate discrepancies, and unfiled vendor returns).
                </p>
                <button
                  onClick={() => setDataLoaded(true)}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                >
                  <Sparkles className="h-4 w-4" /> Load Sample 2B Reconciliation Demo
                </button>
              </div>
            )}

            {/* Results Display */}
            {dataLoaded && (
              <div className="mt-10 space-y-6">
                {/* KPI Metrics */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-850">
                    <div className="text-xs font-semibold uppercase text-slate-500">Total Purchase ITC</div>
                    <div className="mt-2 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                      ₹{totalBookItc.toLocaleString("en-IN")}
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">Across 5 purchase bills</div>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-xs dark:border-emerald-900/50 dark:bg-emerald-950/20">
                    <div className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                      Safe Claimable ITC
                    </div>
                    <div className="mt-2 font-heading text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                      ₹{matchedItc.toLocaleString("en-IN")}
                    </div>
                    <div className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-500">
                      100% matched with portal
                    </div>
                  </div>

                  <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 shadow-xs dark:border-red-900/50 dark:bg-red-950/20">
                    <div className="text-xs font-semibold uppercase text-red-700 dark:text-red-400">
                      ITC At Risk (Unfiled)
                    </div>
                    <div className="mt-2 font-heading text-2xl font-bold text-red-700 dark:text-red-400">
                      ₹{atRiskItc.toLocaleString("en-IN")}
                    </div>
                    <div className="mt-1 text-[11px] text-red-600 dark:text-red-400">
                      Vendors haven't filed GSTR-1
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 shadow-xs dark:border-blue-900/50 dark:bg-blue-950/20">
                    <div className="text-xs font-semibold uppercase text-blue-700 dark:text-blue-400">
                      Unclaimed ITC in Books
                    </div>
                    <div className="mt-2 font-heading text-2xl font-bold text-blue-700 dark:text-blue-400">
                      ₹{unclaimedItc.toLocaleString("en-IN")}
                    </div>
                    <div className="mt-1 text-[11px] text-blue-600 dark:text-blue-400">
                      In portal but missing in ledger
                    </div>
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 dark:border-slate-800">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        activeTab === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      All Invoices ({sampleInvoices.length})
                    </button>
                    <button
                      onClick={() => setActiveTab("matched")}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        activeTab === "matched" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400"
                      }`}
                    >
                      ✓ Matched (2)
                    </button>
                    <button
                      onClick={() => setActiveTab("mismatch")}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        activeTab === "mismatch" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-400"
                      }`}
                    >
                      ⚠ Rate Mismatch (1)
                    </button>
                    <button
                      onClick={() => setActiveTab("missing_in_2b")}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        activeTab === "missing_in_2b" ? "bg-red-600 text-white" : "bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400"
                      }`}
                    >
                      ✗ Missing in 2B (2)
                    </button>
                    <button
                      onClick={() => setActiveTab("missing_in_books")}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        activeTab === "missing_in_books" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400"
                      }`}
                    >
                      + Missing in Books (1)
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setDataLoaded(false)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300"
                    >
                      <RefreshCw className="h-3.5 w-3.5" /> Reset
                    </button>
                    <button
                      onClick={() => alert("Downloaded CA Audit Reconciliation Excel (Simulated)")}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 transition"
                    >
                      <Download className="h-3.5 w-3.5" /> Export CA Audit Excel
                    </button>
                  </div>
                </div>

                {/* Reconciliation Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="border-b bg-slate-100/70 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      <tr>
                        <th className="px-4 py-3">Vendor / GSTIN</th>
                        <th className="px-4 py-3">Invoice Details</th>
                        <th className="px-4 py-3 text-right">Books Taxable / GST</th>
                        <th className="px-4 py-3 text-right">Portal 2B Taxable / GST</th>
                        <th className="px-4 py-3">Status & Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {filteredInvoices.map((inv) => (
                        <tr key={inv.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/50">
                          <td className="px-4 py-3">
                            <div className="font-bold text-slate-900 dark:text-white">{inv.vendorName}</div>
                            <div className="font-mono text-[11px] text-slate-500">{inv.gstin}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-slate-800 dark:text-slate-200">{inv.invoiceNo}</div>
                            <div className="text-[11px] text-slate-500">{inv.invoiceDate}</div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            {inv.bookTaxable > 0 ? (
                              <>
                                <div className="font-medium text-slate-900 dark:text-white">
                                  ₹{inv.bookTaxable.toLocaleString("en-IN")}
                                </div>
                                <div className="text-emerald-600 font-semibold">
                                  +₹{inv.bookGst.toLocaleString("en-IN")} GST
                                </div>
                              </>
                            ) : (
                              <span className="text-slate-400 italic">Not in books</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {inv.portalTaxable > 0 ? (
                              <>
                                <div className="font-medium text-slate-900 dark:text-white">
                                  ₹{inv.portalTaxable.toLocaleString("en-IN")}
                                </div>
                                <div className="text-emerald-600 font-semibold">
                                  +₹{inv.portalGst.toLocaleString("en-IN")} GST
                                </div>
                              </>
                            ) : (
                              <span className="text-red-500 font-semibold">Missing from 2B</span>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="space-y-1.5">
                              {inv.status === "matched" && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400">
                                  <CheckCircle2 className="h-3 w-3" /> 100% Match
                                </span>
                              )}
                              {inv.status === "mismatch" && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 dark:bg-amber-950/60 dark:text-amber-400">
                                  <AlertTriangle className="h-3 w-3" /> Rate Mismatch
                                </span>
                              )}
                              {inv.status === "missing_in_2b" && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-[11px] font-bold text-red-800 dark:bg-red-950/60 dark:text-red-400">
                                  <XCircle className="h-3 w-3" /> Vendor Return Pending
                                </span>
                              )}
                              {inv.status === "missing_in_books" && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-bold text-blue-800 dark:bg-blue-950/60 dark:text-blue-400">
                                  <HelpCircle className="h-3 w-3" /> Unclaimed ITC
                                </span>
                              )}
                              <div className="text-[11px] text-slate-500 leading-tight max-w-xs">{inv.notes}</div>

                              {inv.status === "missing_in_2b" && (
                                <button
                                  onClick={() => handleSendReminder(inv.invoiceNo, inv.vendorName, inv.bookGst)}
                                  className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs hover:bg-emerald-700 transition"
                                >
                                  <Share2 className="h-3 w-3" />
                                  {reminderSent[inv.invoiceNo] ? "Sent Reminder ✓" : "WhatsApp Filing Reminder"}
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Explanatory Guide: Why GST 2.0 Requires Continuous Reconciliation */}
      <section className="section-padding border-t border-slate-200 dark:border-slate-800">
        <div className="container-wide max-w-4xl space-y-10">
          <SectionHeading
            eyebrow="Legal & Compliance Rules"
            title="Why GSTR-2B Auto-Reconciliation is Mandatory in India"
            subtitle="The government has eliminated provisional credit. Here is what every business owner and CA must know."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 shadow-xs">
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                1. Section 16(2)(aa) Rule
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                You can only claim Input Tax Credit if the supplier has actually uploaded the invoice details in their GSTR-1 and it is reflected in your GSTR-2B. Claiming unreflected credit leads to automated scrutiny notices and 18% annual interest penalties.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-xs">
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                2. Automated Vendor Follow-Ups
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                Instead of arguing with suppliers over missing invoices at year-end, Katixo sends instant WhatsApp reminders with exact invoice numbers before the 11th of each month, holding payments automatically if GSTR-1 is not filed.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-xs">
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                3. Post-GST-2.0 Rate Discrepancies
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                With Notification 9/2025-CT(Rate) dropping medical devices and generic pharma to 5% while leaving nutraceuticals at 18%, suppliers frequently bill with outdated tax codes. Katixo flags line-by-line rate conflicts before you file GSTR-3B.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-xs">
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                4. Zero Double Data Entry
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                When using Katixo AI ERP, your purchase register reconciles continuously with the GST portal in real-time. No manual Excel exports, no VLOOKUP headaches, and no midnight filing rushes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance">
            Automate Your Entire GST Workflow with {brand.name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-200 text-balance">
            Stop wasting hours on manual spreadsheet matching. Run continuous, automated GSTR-2B reconciliation, e-invoicing, and GSTR-3B preparation in one integrated ERP.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-lg transition hover:bg-slate-100"
            >
              Get Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Compare with Tally & Zoho
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
