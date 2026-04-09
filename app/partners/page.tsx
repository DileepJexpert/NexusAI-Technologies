import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with NexusAI — banks, FPOs, CSC centres, NGOs and government agencies building AI-powered services for India.",
};

const partnerTypes = [
  {
    icon: "🏦",
    title: "Banks & NBFCs",
    description: "Offer AI-powered financial advisory to your customers over WhatsApp.",
  },
  {
    icon: "🌾",
    title: "FPOs & Co-operatives",
    description: "Help your member farmers access schemes, mandi prices and loans.",
  },
  {
    icon: "🏪",
    title: "CSC Centres",
    description: "Add AI assistance to your service offerings and increase footfall.",
  },
  {
    icon: "🏛️",
    title: "Government",
    description: "Deploy citizen-facing AI for scheme discovery and grievance redressal.",
  },
];

const benefits = [
  "Revenue sharing with partners",
  "White-label deployment options",
  "Dedicated partner success manager",
  "Co-marketing and training support",
  "Priority product roadmap input",
  "Custom integrations with your systems",
];

export default function PartnersPage() {
  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Partner with NexusAI
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            We work with banks, FPOs, CSC centres, NGOs and government agencies
            to bring AI-powered services to every Indian.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Partner types"
            title="Who we work with"
            subtitle="If you serve Indian citizens or small businesses, we probably have a product for you."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-4xl">{t.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title="Why partner with us"
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold">Tell us about your organisation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll get back to you within two business days.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
