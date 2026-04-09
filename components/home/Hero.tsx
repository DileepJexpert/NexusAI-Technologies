"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";

export function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#0B1628] text-white">
      {/* Gradient layers */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(46,80,144,0.35), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(22,163,74,0.12), transparent 60%)",
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-[0.07]"
        style={{ backgroundSize: "56px 56px" }}
      />

      <div className="container-wide relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            The AI Platform for India
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-balance">
            One platform.
            <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Every Indian domain.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl text-balance">
            Enterprise-grade AI assistants across agriculture, finance, legal,
            education, events and health — delivered on WhatsApp in 10+ Indian languages.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

          {/* Category chips — all 6 domains equally weighted */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14"
          >
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Six domains. One platform.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/products/${c.id}`}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="text-base">{c.icon}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
