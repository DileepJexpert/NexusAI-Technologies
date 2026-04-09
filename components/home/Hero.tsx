"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const words = ["Farmers", "Businesses", "Students", "Everyone"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(id);
  }, []);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden gradient-primary text-white">
      {/* Grid pattern background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-40"
        style={{ backgroundSize: "48px 48px" }}
      />
      {/* Radial glows */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-secondary/40 blur-3xl"
      />

      <div className="container-wide relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="text-base">🚀</span> Startup India Recognized
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            AI-Powered Tools for
            <br />
            <span className="inline-block bg-gradient-to-r from-accent via-emerald-300 to-accent bg-clip-text text-transparent">
              {words[index]}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-200 sm:text-lg md:text-xl text-balance">
            We build WhatsApp AI assistants that help Indians navigate government
            schemes, financial services, and daily challenges — in their own language.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="accent" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="whiteOutline" size="lg" asChild>
              <Link href="/products">
                Explore Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-300">
            Available in Hindi + 9 more Indian languages
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
