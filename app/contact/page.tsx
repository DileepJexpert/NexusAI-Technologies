import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { socialLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NexusAI Technologies. Reach out for partnerships, support or general questions.",
};

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi NexusAI")}`;

  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Let&apos;s talk
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Got a question, a partnership idea or feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and we&apos;ll respond within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <InfoCard
                icon={<MessageCircle className="h-5 w-5 text-accent" />}
                title="Chat on WhatsApp"
                description="The fastest way to reach us."
                cta="Start chat →"
                href={whatsappLink}
              />
              <InfoCard
                icon={<Mail className="h-5 w-5 text-primary" />}
                title="Email"
                description="hello@nexusai.in"
                cta="Send email →"
                href="mailto:hello@nexusai.in"
              />
              <InfoCard
                icon={<MapPin className="h-5 w-5 text-secondary" />}
                title="Office"
                description="Bengaluru, Karnataka, India"
              />
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-3 font-heading text-base font-bold">Follow us</div>
                <div className="flex items-center gap-3">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground hover:border-primary hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground hover:border-primary hover:text-primary"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  description,
  cta,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          {icon}
        </div>
        <div className="font-heading text-base font-bold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      {cta && href && (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
        >
          {cta}
        </a>
      )}
    </div>
  );
}
