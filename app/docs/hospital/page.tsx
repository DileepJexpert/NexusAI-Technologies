import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  ArrowRight,
  Users,
  Stethoscope,
  Bed,
  FlaskConical,
  Scissors,
  Pill,
  Receipt,
  Layers,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Hospital OS Clinical Suite Guide — Katixo Docs",
  description: `Complete guide to the Hospital OS clinical and operational suite: patient management, OPD queue, IPD admissions, lab, OT, pharmacy, and hospital billing in ${brand.name}.`,
};

function ModuleCard({
  icon,
  title,
  badge,
  description,
  howToCreate,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  howToCreate: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-[#142d25] hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-[#b3ed97]/50"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#142d25] transition-colors group-hover:bg-[#142d25] group-hover:text-white dark:bg-white/10 dark:text-[#b3ed97] dark:group-hover:bg-[#b3ed97] dark:group-hover:text-[#142d25]">
            {icon}
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">
            {badge}
          </span>
        </div>
        <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-[#b3ed97]">
          {title}
        </h3>
        <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
        <div className="mt-3 rounded-lg bg-slate-50 p-2.5 text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-white">Workflow: </span>
          {howToCreate}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-semibold text-[#142d25] dark:border-white/5 dark:text-[#b3ed97]">
        <span>Explore clinical guide</span>
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function HospitalOverviewPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-white/10">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-[#b3ed97]">
          Healthcare & Clinical Operations Guide
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hospital OS Clinical Suite
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          A modern, unified Hospital Information System (HIS) connecting clinical care with Katixo&apos;s
          enterprise ERP backend. Explore complete module documentation covering the entire patient journey:
          from front-desk registration and OPD token calling to inpatient ward admissions, laboratory investigations,
          operation theatre scheduling, pharmacy dispensing, and cashless TPA insurance billing.
        </p>
      </div>

      {/* 1. What is Hospital OS? */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>1. Module Overview: The Unified Hospital Information System</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Katixo Hospital OS bridges the historical divide between medical software and commercial accounting.
          Clinical events (admissions, lab tests, medications administered, surgeries) automatically generate
          billing lines in the patient folio and post compound journals to the General Ledger with zero manual reentry:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Single UHID Patient Record</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              One Unique Hospital Identification (UHID) number connects lifetime OPD visits, IPD admissions, and lab results.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">Auto-Accrual Billing</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Daily bed rent, nursing charges, and doctor consultation fees auto-accrue to the patient folio at midnight.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]">
            <h4 className="font-bold text-slate-900 dark:text-white">ABDM &amp; E-Prescription</h4>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Compliant with Ayushman Bharat Digital Mission (ABDM) guidelines for interoperable health records.
            </p>
          </div>
        </div>
      </section>

      {/* 2. End-to-End Patient Journey */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Workflow className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>2. End-to-End Clinical Workflow (The 5-Stage Patient Journey)</span>
        </h2>

        <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10 bg-white dark:bg-white/[0.02]">
          <ol className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">1</span>
              <div>
                <strong>Reception Registration &amp; OPD Token:</strong> Front desk captures patient demographics, creates the UHID, and issues an OPD consultation token. Token status displays live on the waiting room digital TV screen.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">2</span>
              <div>
                <strong>Doctor Consultation (eRx):</strong> The physician calls the token, reviews medical history, records chief complaints, vitals, and diagnoses, and generates an electronic prescription with digital signature.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">3</span>
              <div>
                <strong>Diagnostics &amp; Pharmacy:</strong> Prescribed lab tests flow directly to the Pathology workstation for barcode accessioning; medicines flow to the Hospital Pharmacy for FEFO batch dispensing.
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">4</span>
              <div>
                <strong>Inpatient (IPD) Care:</strong> If hospitalization is required, the patient is assigned a ward/bed (General, Semi-Private, Deluxe, ICU). Nurses maintain electronic medication administration records (eMAR).
              </div>
            </li>
            <li className="flex gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900 dark:bg-white/10 dark:text-white">5</span>
              <div>
                <strong>Discharge &amp; Final Billing:</strong> All bed fees, pharmacy issues, surgeries, and doctor visits consolidate into a unified itemized bill. Cashless TPA insurance pre-authorizations are settled in one click.
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Detailed Clinical Modules */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="h-5 w-5 text-emerald-700 dark:text-[#b3ed97]" />
          <span>3. Clinical &amp; Operational Modules</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <ModuleCard
            icon={<Users className="h-5 w-5" />}
            title="Patient Registration & Master Index"
            badge="Front Desk"
            description="Manage patient demographics, UHID generation, emergency intake, biometric verification, and Ayushman Bharat ABHA linking."
            howToCreate="Go to Hospital > Patients > 'New Patient'. Enter full name, mobile, age/gender, and photo. Click 'Register' to generate the UHID and barcode wristband."
            href="/docs/hospital/patients"
          />
          <ModuleCard
            icon={<Stethoscope className="h-5 w-5" />}
            title="Outpatient Department (OPD) & Queue"
            badge="Consultations"
            description="Manage department schedules, doctor appointment slots, live TV token queue calling, vitals recording, and digital e-prescriptions."
            howToCreate="Issue a token from Reception > OPD. The consulting doctor clicks 'Call Token', reviews patient history, types clinical notes, and clicks 'Save & Print eRx'."
            href="/docs/hospital/opd"
          />
          <ModuleCard
            icon={<Bed className="h-5 w-5" />}
            title="Inpatient (IPD) & Bed Management"
            badge="Ward Care"
            description="Interactive graphical bed board, admission records, nursing vitals charts, doctor round notes, and medical discharge summaries."
            howToCreate="From Patient Profile, click 'Admit to IPD'. Select Ward and Bed number. Daily room rent and nursing charges auto-accrue at midnight."
            href="/docs/hospital/ipd"
          />
          <ModuleCard
            icon={<FlaskConical className="h-5 w-5" />}
            title="Laboratory & Pathology Management"
            badge="Diagnostics"
            description="Diagnostic test catalog, sample accessioning with barcode labels, lab technician result entry, pathologist authorization, and PDF report dispatch."
            howToCreate="Prescribed lab orders appear under Laboratory > Pending Samples. Barcode the vial, enter test parameters, pathologist signs off, and results sync to patient portal."
            href="/docs/hospital/laboratory"
          />
          <ModuleCard
            icon={<Scissors className="h-5 w-5" />}
            title="Operation Theatre (OT) Scheduling"
            badge="Surgical Suite"
            description="Surgical suite booking, PAC (Pre-Anaesthesia Check), surgeon/anaesthetist rostering, consumable usage tracking, and post-op recovery notes."
            howToCreate="Go to OT > 'Book Surgery'. Select OT room, primary surgeon, anaesthetist, and scheduled time. Track used surgical kits and implants for billing."
            href="/docs/hospital/ot"
          />
          <ModuleCard
            icon={<Pill className="h-5 w-5" />}
            title="Hospital Pharmacy & Dispensary"
            badge="Pharmacy"
            description="Dispense doctor prescriptions with zero manual typing, FEFO batch lot picking, bed-side IPD medicine distribution, and crash cart replenishment."
            howToCreate="Open Pharmacy > 'Pending Prescriptions'. Search patient UHID. Katixo pulls the eRx lines, auto-picks available non-expired batches, and prints dosage labels."
            href="/docs/hospital/pharmacy"
          />
          <ModuleCard
            icon={<Receipt className="h-5 w-5" />}
            title="Hospital Billing, Packages & TPA Insurance"
            badge="Finance & TPA"
            description="Multi-tier package billing, automated bed rent accrual, insurance TPA pre-authorization, co-pay tracking, and final discharge invoice generation."
            howToCreate="Open IPD Folio > 'Generate Final Bill'. Review consolidated bed rent, pharmacy items, and lab tests. Apply package rates or TPA co-pay, and record receipt."
            href="/docs/hospital/billing"
          />
        </div>
      </section>

      {/* 4. Developer Reference (Compact at bottom) */}
      <section className="border-t border-slate-200 pt-8 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Developer &amp; Microservices Architecture
          </h2>
          <span className="text-xs text-slate-500">JWT Scoped Context</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Hospital OS operates alongside Katixo ERP via typed internal microservices:
        </p>

        <div className="grid gap-2 sm:grid-cols-2 font-mono text-xs">
          <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
            <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Clinical Service Base:</span>
            <code className="text-emerald-700 dark:text-[#b3ed97]">https://hospital.katixo.com/api/v1</code>
          </div>
          <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
            <span className="font-bold text-slate-900 dark:text-white block mb-0.5">ERP Business Service Base:</span>
            <code className="text-emerald-700 dark:text-[#b3ed97]">https://api.katixo.com/api/v1</code>
          </div>
        </div>
      </section>
    </div>
  );
}
