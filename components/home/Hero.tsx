"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { WAChat } from "./WAChat";

export function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <section className="relative overflow-hidden bg-[#0B1628] pb-14 text-white">
      {/* Blobs */}
      <div
        aria-hidden
        className="blob pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] opacity-[0.18]"
        style={{ background: "radial-gradient(circle, #2E5090 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="blob float-b pointer-events-none absolute -bottom-40 right-0 h-[480px] w-[480px] opacity-[0.14]"
        style={{
          background: "radial-gradient(circle, #16A34A 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.055]"
        style={{ backgroundSize: "56px 56px" }}
      />

      <div className="container-wide relative z-10 grid min-h-[88vh] items-center gap-12 py-24 lg:grid-cols-[1fr_auto]">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            The AI Platform for India
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.06] sm:text-5xl md:text-6xl lg:text-[3.75rem] text-balance">
            One platform.
            <br />
            <span className="grad-text-animated">Every Indian domain.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg text-balance">
            Enterprise-grade AI assistants across agriculture, finance, legal,
            education, events and health — delivered on WhatsApp in 10+ Indian
            languages.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button variant="accent" size="lg" asChild>
              <Link href="/products">
                Explore the platform <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="whiteOutline" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Talk to us
              </a>
            </Button>
          </div>

          {/* Category chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Six domains · One platform
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/products/${c.id}`}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="text-sm">{c.icon}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — WAChat mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
          className="float-a hidden lg:flex items-center justify-center"
        >
          <WAChat />
        </motion.div>
      </div>

      {/* Wave divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", height: 52, width: "100%" }}
        >
          <path
            d="M0,28 C360,52 1080,0 1440,28 L1440,52 L0,52 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
