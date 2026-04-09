import { Phone, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    title: "Save Our Number",
    description: "Add our WhatsApp number to your contacts.",
  },
  {
    icon: MessageCircle,
    title: "Send a Message",
    description: "Type or send a voice message in Hindi or English.",
  },
  {
    icon: Sparkles,
    title: "Get AI Help",
    description: "Our AI agent helps you with schemes, loans, prices and more.",
  },
];

export function HowItWorks() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How It Works"
          title="Three steps to AI on WhatsApp"
          subtitle="No app download. No registration forms. No setup fees."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <AnimateOnScroll key={step.title} delay={idx * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                    <Icon className="h-10 w-10" />
                    <div className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading text-base font-bold text-white shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-muted-foreground">
            It&apos;s that simple. Start now on WhatsApp.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Start Now on WhatsApp <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
