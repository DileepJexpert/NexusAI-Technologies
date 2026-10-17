import type { Metadata } from "next";
import { ArrowRight, Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a Katixo demo for accounting, GST billing, POS, inventory, pharmacy, distribution, MSME finance or hospital workflows.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Katixo, I want to book a demo."
  )}`;

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fafc] py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50 via-emerald-50/70 to-transparent"
        />
        <div className="container-wide relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Contact
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl">
              Book a demo for your business type.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Retail counter, pharmacy, distribution, MSME finance or a hospital:
              tell us what you run and we will map the right billing, inventory,
              GST and reporting workflow.
            </p>

            <div className="mt-8 grid gap-4 sm:max-w-lg">
              <ContactLink
                icon={<MessageCircle className="h-5 w-5" />}
                title="Chat on WhatsApp"
                description="Fastest way to reach the Katixo team."
                href={whatsappLink}
                accent="bg-emerald-600 text-white"
              />
              <ContactLink
                icon={<Mail className="h-5 w-5" />}
                title="hello@katixo.com"
                description="For partnerships, product questions and everything else."
                href="mailto:hello@katixo.com"
                accent="bg-blue-50 text-blue-700"
              />
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-base font-bold text-slate-950">
                      Sector 143, Noida
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Katixo operates from Noida, Uttar Pradesh, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-slate-950">
                  Tell us about your business
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  We will reply with a demo slot within one working day.
                </p>
              </div>
              <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 sm:flex">
                <Clock3 className="h-3.5 w-3.5" />
                1 day reply
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactLink({
  icon,
  title,
  description,
  href,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group rounded-2xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent}`}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-heading text-base font-bold text-slate-950">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}
