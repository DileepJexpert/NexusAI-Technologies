import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center text-white shadow-2xl md:p-16"
          style={{
            background:
              "linear-gradient(135deg, #0B1628 0%, #1B2A4A 45%, #0f2010 100%)",
          }}
        >
          {/* Blobs */}
          <div
            aria-hidden
            className="blob pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] opacity-30"
            style={{
              background:
                "radial-gradient(circle, #2E5090 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="blob float-b pointer-events-none absolute -bottom-20 right-0 h-[280px] w-[280px] opacity-25"
            style={{
              background:
                "radial-gradient(circle, #16A34A 0%, transparent 70%)",
              animationDelay: "5s",
            }}
          />
          {/* Grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.05]"
            style={{ backgroundSize: "32px 32px" }}
          />

          <div className="relative">
            {/* Glass badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Start for free · No credit card
            </div>

            <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl text-balance">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg text-balance">
              Try any of our AI tools for free. No credit card required. No app
              to install. Just open WhatsApp and start chatting.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white font-semibold text-[#0B1628] shadow-lg hover:bg-white/90"
                asChild
              >
                <Link href="/products">
                  Explore Products <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #075E54 0%, #25D366 100%)",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.5 2C6.261 2 2 6.261 2 11.5c0 1.898.526 3.673 1.44 5.187L2 22l5.45-1.428A9.446 9.446 0 0011.5 21C16.739 21 21 16.739 21 11.5S16.739 2 11.5 2zm0 17.25a7.73 7.73 0 01-3.942-1.08l-.284-.168-2.924.767.78-2.851-.185-.292A7.712 7.712 0 013.75 11.5C3.75 7.224 7.224 3.75 11.5 3.75S19.25 7.224 19.25 11.5 15.776 19.25 11.5 19.25z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
