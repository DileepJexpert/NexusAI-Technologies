import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl gradient-accent p-10 text-center text-white shadow-2xl md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-pattern opacity-30"
            style={{ backgroundSize: "32px 32px" }}
          />
          <div className="relative">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl text-balance">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg text-balance">
              Try any of our AI tools for free. No credit card required. No app
              to install. Just open WhatsApp and start chatting.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/products">
                  Explore Products <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="whiteOutline" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
