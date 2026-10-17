export function FeatureTicker() {
  const row1 = [
    "Flux Commentary & Analysis",
    "Autonomous Bank Matching",
    "Prepaid Amortization",
    "Duplicate Expense Detection",
    "GST 2.0 Classification",
    "3-Way Match (PO → GRN → Bill)",
    "AR Aging & Dunning Notices",
    "Cash Flow Projections",
    "Anomaly Detection Queue",
    "Multi-Entity Consolidation",
  ];

  const row2 = [
    "Custom Report Builder",
    "Automated Cron Email Digests",
    "Indian Payroll (PF 12% + ESI + PT)",
    "FEFO Batch Stock Dispatch",
    "CDSCO Drug Interaction Checks",
    "FMCG Beat & Route Planning",
    "Evening Day-Close Cash Reconciliation",
    "Schedule H1 Drug Registers",
    "Offline Counter POS",
    "E-Invoicing & E-Way Bill",
  ];

  return (
    <section className="overflow-hidden border-y border-slate-200/80 bg-white py-12 dark:border-white/10 dark:bg-[#07111f]">
      <div className="container-wide mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          The modern Indian finance and operations team uses Katixo for:
        </p>
      </div>

      <div className="space-y-3">
        {/* Row 1: Leftward */}
        <div className="marquee-track">
          <div className="marquee-inner gap-3">
            {[...row1, ...row1, ...row1].map((item, index) => (
              <span
                key={`r1-${item}-${index}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward / Alternating */}
        <div className="marquee-track">
          <div className="marquee-inner gap-3" style={{ animationDirection: "reverse" }}>
            {[...row2, ...row2, ...row2].map((item, index) => (
              <span
                key={`r2-${item}-${index}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
