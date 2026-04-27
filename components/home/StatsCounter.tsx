"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/stats";

const subLabels: Record<string, string> = {
  "Users Helped":        "active monthly",
  "AI Products":         "across 6 domains",
  "Indian Languages":    "natively supported",
  "Government Schemes":  "mapped to date",
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      {/* Dark navy gradient background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0B1628 0%, #1B2A4A 50%, #0f2010 100%)",
        }}
      />
      {/* Blobs */}
      <div
        aria-hidden
        className="blob pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] opacity-20"
        style={{ background: "radial-gradient(circle, #2E5090 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="blob float-b pointer-events-none absolute -bottom-32 right-0 h-[360px] w-[360px] opacity-15"
        style={{
          background: "radial-gradient(circle, #16A34A 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={[
                "flex flex-col items-center px-8 py-10 text-center",
                idx < stats.length - 1
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : "",
              ].join(" ")}
            >
              <div
                className="font-heading font-extrabold text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
                {s.label}
              </div>
              {subLabels[s.label] && (
                <div className="mt-1 text-xs text-slate-500">
                  {subLabels[s.label]}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
