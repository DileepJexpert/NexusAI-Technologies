import type { Metadata } from "next";
import Link from "next/link";
import {
  Pill,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Search,
  Layers,
  FileCheck2,
  Boxes,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Pharma Clinical Masters & CDSCO Compliance Guide — Katixo Docs",
  description: `Complete guide to pharmaceutical distribution, CDSCO drug masters, drug-drug interaction alerts, generic substitutions, and Schedule H compliance in ${brand.name} ERP.`,
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-2.5 dark:border-white/10 text-xs">
      <span className={`rounded px-2 py-0.5 font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-slate-700 dark:text-slate-300 font-mono">{path}</code>
    </div>
  );
}

export default function PharmaPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Pharmaceutical Vertical Pack
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Pharma Clinical Masters, CDSCO & Retail Chemist Guide
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Engineered specifically for Indian pharmaceutical distributors, C&amp;F agents, and retail pharmacies.
          Ensure strict compliance with the Drugs and Cosmetics Act, prevent drug-drug interactions at POS,
          leverage generic substitution matrices, and streamline near-expiry supplier returns.
        </p>
      </div>

      {/* 1. Module Overview: Why Pharma Needs Specialized ERP */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Pill className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: Clinical & Regulatory Compliance</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Unlike general retail, pharmaceutical operations carry legal liability under CDSCO and State Drug Control
          Administration regulations. Katixo ERP comes with pre-seeded national clinical databases so pharmacies
          can operate safely from day one:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">National Drug Master</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Pre-seeded formulations, active salt compositions, manufacturer master, and HSN 3004 tax classifications.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Drug Interaction Engine</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Real-time clinical checks during POS checkout alert cashiers to dangerous contraindicated drug combinations.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Schedule H / H1 / X</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Mandatory doctor registration number capture, patient identity tagging, and statutory audit registers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step: Onboarding Pharma Products */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Search className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. How to Onboard Pharma Items (Step-by-Step)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Navigate to Items &gt; "Add Item":</strong> Type the brand name (e.g. <em>Augmentin 625</em>) or active salt. The debounced autocomplete searches Katixo&apos;s national drug master.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Automatic Regulatory Population:</strong> Selecting the drug auto-fills HSN Code (3004), GST rate (5%), dosage form (Strip of 10 Tablets), drug schedule category (Schedule H1), and manufacturer.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Assign Rack Location:</strong> Assign the physical storage location in your pharmacy or warehouse (e.g., Rack A-12, Shelf 3). During billing or picklist generation, this coordinate guides staff directly to the pack.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Real-Time Clinical Interaction Checks at POS */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Clinical Safety: Drug-Drug Interaction Warning at POS</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Pharmacists frequently dispense multiple medicines prescribed by different doctors. Katixo protects patients
          with automated clinical cross-checking:
        </p>

        <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 dark:border-rose-900/40 dark:bg-rose-950/20 text-xs text-rose-950 dark:text-rose-200 space-y-2">
          <div className="font-bold flex items-center gap-1.5">
            <AlertTriangle className="h-4 w-4 text-rose-600" />
            <span>How the Interaction Engine Works:</span>
          </div>
          <p>
            When items are added to the cart in POS or Sales Order, Katixo splits the underlying active salts (e.g. Aspirin + Ibuprofen)
            and checks the clinical interaction table. If a severe contraindication is detected, a severity-coded alert modal pops up:
          </p>
          <div className="rounded-lg bg-white/80 p-3 font-mono text-[11px] text-slate-800 dark:bg-black/40 dark:text-slate-200">
            <strong>[CLINICAL WARNING - SEVERE CONTRAINDICATION]</strong><br />
            Item A: Ecosprin 75mg (Aspirin) + Item B: Brufen 400mg (Ibuprofen)<br />
            <em>Clinical Risk: Concurrent use significantly increases risk of major gastrointestinal ulceration and bleeding.</em><br />
            Action: Pharmacist must acknowledge warning or suggest a safe analgesic alternative (e.g. Paracetamol).
          </div>
        </div>
      </section>

      {/* 4. Generic Substitution Matrix */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>4. Generic Substitution Matrix & Margin Optimization</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          If a prescribed brand is out of stock or the patient requests a more affordable equivalent, pharmacists click
          <strong> "Suggest Generic Substitutes"</strong>:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 dark:bg-white/5 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold">
              <tr>
                <th className="p-3">Prescribed Medicine</th>
                <th className="p-3">Bioequivalent Substitute</th>
                <th className="p-3">Active Salt</th>
                <th className="p-3">Customer Savings</th>
                <th className="p-3">Chemist Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-400">
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-white">Crocin 650 (Glaxo)</td>
                <td className="p-3 text-emerald-700 font-semibold dark:text-emerald-400">Calpol 650 (GSK) / Dolo 650</td>
                <td className="p-3">Paracetamol 650mg</td>
                <td className="p-3">₹8.00 per strip</td>
                <td className="p-3 font-bold text-slate-900 dark:text-white">22% vs 15%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900 dark:text-white">Omez 20mg (Dr. Reddy)</td>
                <td className="p-3 text-emerald-700 font-semibold dark:text-emerald-400">Ocid 20mg (Zydus)</td>
                <td className="p-3">Omeprazole 20mg</td>
                <td className="p-3">₹14.50 per strip</td>
                <td className="p-3 font-bold text-slate-900 dark:text-white">28% vs 18%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Near-Expiry Settlement Returns */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Boxes className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>5. Near-Expiry Alerts & Supplier Settlement Returns</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Expiring stock is the biggest margin destroyer in pharma trade. Katixo automates supplier return settlements:
        </p>

        <div className="rounded-xl border border-slate-200 p-4 dark:border-white/10 bg-white dark:bg-white/[0.02] text-xs space-y-2 text-slate-600 dark:text-slate-400">
          <p>1. Open <strong>Inventory &gt; Near Expiry Dashboard</strong>. Configure alert threshold (30, 60, or 90 days).</p>
          <p>2. The dashboard groups all expiring batches by supplier manufacturer.</p>
          <p>3. Select expiring batches and click <strong>"Draft Supplier Return (Debit Note)"</strong>.</p>
          <p>4. Katixo automatically builds a pre-filled Debit Note, deducts stock from active balance, reverses input GST, and adjusts Accounts Payable.</p>
        </div>
      </section>

      {/* 6. Developer & Integration Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer & API Integration Reference
          </h2>
          <span className="text-xs text-slate-500">JWT Bearer Required</span>
        </div>

        <div className="space-y-2">
          <Endpoint method="GET" path="/api/v1/pharmacy-masters/manufacturers/search" />
          <Endpoint method="GET" path="/api/v1/pharmacy-masters/hsn/search" />
          <Endpoint method="GET" path="/api/v1/pharmacy-masters/interactions/check-by-composition" />
          <Endpoint method="GET" path="/api/v1/pharmacy-masters/substitutions" />
          <Endpoint method="GET" path="/api/v1/drug-master/search" />
        </div>
      </section>
    </div>
  );
}
