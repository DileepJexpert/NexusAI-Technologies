import { Phone, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Save Our Number",
    description:
      "Add our WhatsApp number to your contacts. No app download or registration required.",
    color: "#2E5090",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Send a Message",
    description:
      "Type or send a voice message in Hindi, English or any of 10+ supported Indian languages.",
    color: "#16A34A",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Get AI Help Instantly",
    description:
      "Our AI agents answer questions, fill forms, find schemes and guide you — all on WhatsApp.",
    color: "#7C3AED",
  },
];

const phoneChips = [
  { icon: "🌾", label: "KisanMitra", color: "#16A34A" },
  { icon: "💰", label: "LoanSathi",  color: "#2563EB" },
  { icon: "⚖️", label: "NiyamMitra", color: "#DC2626" },
  { icon: "🎪", label: "EventKhata", color: "#EA580C" },
];

export function HowItWorks() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How It Works"
          title="Three steps to AI on WhatsApp"
          subtitle="No app download. No registration forms. No setup fees."
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          {/* Left — steps */}
          <div className="flex flex-col gap-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.title} delay={idx * 0.12}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      {idx < steps.length - 1 && (
                        <div
                          className="w-px flex-1 rounded-full opacity-20"
                          style={{
                            background: `linear-gradient(to bottom, ${step.color}, ${steps[idx + 1].color})`,
                            minHeight: 32,
                          }}
                        />
                      )}
                    </div>
                    <div className="pt-1">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Step {step.number}
                      </div>
                      <h3 className="font-heading text-xl font-bold">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}

            <AnimateOnScroll delay={0.38}>
              <Button variant="accent" size="lg" asChild className="self-start">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Start Now on WhatsApp <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </AnimateOnScroll>
          </div>

          {/* Right — phone frame */}
          <AnimateOnScroll delay={0.1} className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Floating chips */}
              {phoneChips.map((chip, i) => {
                const positions = [
                  "-top-4 -left-8",
                  "-top-4 -right-8",
                  "-bottom-4 -left-8",
                  "-bottom-4 -right-8",
                ];
                return (
                  <div
                    key={chip.label}
                    className={`absolute ${positions[i]} z-10 flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold shadow-md`}
                    style={{
                      animation: `floatA ${6 + i * 1.2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.8}s`,
                    }}
                  >
                    <span>{chip.icon}</span>
                    <span>{chip.label}</span>
                  </div>
                );
              })}

              {/* Phone frame */}
              <div className="relative flex h-[480px] w-[240px] flex-col overflow-hidden rounded-[2.5rem] border-4 border-foreground/10 bg-[#0B1628] shadow-2xl">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-1">
                  <span className="text-[10px] font-semibold text-white/50">9:41</span>
                  <div className="h-3 w-20 rounded-full bg-foreground/10" />
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-1.5 w-1 rounded-sm bg-white/40" />
                    ))}
                  </div>
                </div>
                {/* WhatsApp header */}
                <div
                  className="flex items-center gap-2 px-4 py-2"
                  style={{ background: "#075E54" }}
                >
                  <div className="h-7 w-7 rounded-full bg-white/20 text-center text-sm leading-7">
                    🤖
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-white">NexusAI</div>
                    <div className="text-[9px] text-white/60">online</div>
                  </div>
                </div>
                {/* Chat bg */}
                <div
                  className="flex flex-1 flex-col gap-2 px-3 py-3"
                  style={{ background: "#E5DDD5" }}
                >
                  {[
                    { from: "user", text: "Hello! I need help 🌾" },
                    { from: "bot",  text: "Hi! How can NexusAI assist you today?" },
                    { from: "user", text: "KCC loan status?" },
                    { from: "bot",  text: "Sure! Please share your application ID." },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className={`max-w-[80%] rounded-xl px-2.5 py-1.5 text-[10px] leading-snug shadow-sm ${
                        m.from === "user"
                          ? "ml-auto rounded-tr-sm bg-[#DCF8C6] text-gray-800"
                          : "mr-auto rounded-tl-sm bg-white text-gray-800"
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>
                {/* Input bar */}
                <div
                  className="flex items-center gap-1.5 px-2 py-2"
                  style={{ background: "#F0F0F0" }}
                >
                  <div className="flex flex-1 items-center rounded-full bg-white px-3 py-1 text-[10px] text-gray-400">
                    Message…
                  </div>
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                    style={{ background: "#25D366" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
