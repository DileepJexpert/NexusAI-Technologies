import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Pharma Clinical Masters API — API Docs",
  description: `Drug interaction safety checks, CDSCO drug masters, generic substitutions, and HSN Chapter 30 GST 2.0 mapping via the ${brand.name} Pharmacy API.`,
};

function Endpoint({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    PATCH: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-white/10">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${colors[method] || ""}`}>{method}</span>
      <code className="text-sm text-slate-700 dark:text-slate-300">{path}</code>
    </div>
  );
}

export default function PharmaPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Pharma Clinical Masters & Drug Safety</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Clinical and regulatory tools for pharmacies and pharmaceutical distributors. Features CDSCO
        drug directory lookups, real-time drug-drug interaction safety checks at POS checkout, generic
        substitution recommendations, and automated GST 2.0 classification (Notification 9/2025-CT Rate).
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Endpoints</h2>
      <div className="mt-4 space-y-2">
        <Endpoint method="GET" path="/api/v1/pharmacy-masters/interactions/check-by-composition" />
        <Endpoint method="GET" path="/api/v1/pharmacy-masters/interactions/check" />
        <Endpoint method="GET" path="/api/v1/pharmacy-masters/substitutions" />
        <Endpoint method="GET" path="/api/v1/pharmacy-masters/rack-locations" />
        <Endpoint method="GET" path="/api/v1/drug-master/search" />
        <Endpoint method="GET" path="/api/v1/drug-master/salts/search" />
        <Endpoint method="GET" path="/api/v1/pharmacy-masters/hsn/search" />
      </div>

      <div className="mt-4 rounded-lg border border-teal-200 bg-teal-50 px-5 py-4 text-sm text-teal-800 dark:border-teal-800/40 dark:bg-teal-900/20 dark:text-teal-300">
        <strong>GST 2.0 Pharmaceutical Compliance:</strong> Chapter 30 items (3001&ndash;3006 medicines,
        vaccines, dressings) and medical devices (9018/9019/9021) auto-resolve to 5% GST. Over-the-counter
        nutraceuticals (2106) default to 18%.
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Check Drug Interactions by Cart Composition</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/pharmacy-masters/interactions/check-by-composition" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Checks whether active pharmaceutical compositions in a retail cart present adverse clinical
        interactions (contraindicated, severe, or moderate).
      </p>

      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 px-5 py-4 text-sm text-slate-200">
        <code>{`curl "https://api.katixo.com/api/v1/pharmacy-masters/interactions/check-by-composition?compositions=Aspirin%2075mg,Ibuprofen%20400mg" \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# Response
{
  "success": true,
  "message": "Interaction check completed",
  "data": [
    {
      "saltA": "Aspirin",
      "saltB": "Ibuprofen",
      "severity": "SEVERE",
      "description": "Concurrent use increases risk of gastrointestinal bleeding and ulceration.",
      "actionRecommendation": "Avoid combination or substitute analgesic."
    }
  ]
}`}</code>
      </pre>

      {/* ------------------------------------------------------------------ */}
      <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">Generic Substitutions</h2>
      <div className="mt-3">
        <Endpoint method="GET" path="/api/v1/pharmacy-masters/substitutions" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
        Finds clinically equivalent branded and generic alternatives with identical salt formulations,
        helping pharmacists offer affordable generic options to patients.
      </p>
    </>
  );
}
