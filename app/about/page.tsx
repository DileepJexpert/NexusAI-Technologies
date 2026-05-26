import type { Metadata } from "next";
import { Linkedin, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { team } from "@/data/team";
import { builtWith, recognition } from "@/data/recognition";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Katixo is an umbrella company building, operating and scaling practical digital products for real-world business workflows.",
};

const timeline = [
  {
    year: "2026",
    title: "Katixo started",
    description:
      "Katixo starts in Noida with a clear focus on practical accounting, billing and finance software for Indian businesses.",
  },
  {
    year: "2026 Q1",
    title: "Operating thesis defined",
    description:
      "The company begins structuring product systems, reusable workflows and go-to-market foundations.",
  },
  {
    year: "2026 Q2",
    title: "Multi-product direction",
    description:
      "Shared infrastructure, brand systems and customer learning start feeding multiple ventures at once.",
  },
  {
    year: "2026 Q3",
    title: "Sharper operating model",
    description:
      "Katixo evolves into a practical parent platform for digital products, AI tools and service-led brands.",
  },
  {
    year: "2026 Q4",
    title: "Scale through focus",
    description:
      "The roadmap shifts from one flagship experience to a portfolio approach built for long-term growth.",
  },
];

const values = [
  { icon: "🏗️", title: "Built to Operate", description: "We care about what it takes to run products well after launch." },
  { icon: "🧭", title: "Clarity", description: "We prefer simple positioning, strong systems and decisions that compound." },
  { icon: "🤝", title: "Partnership", description: "We work closely with customers, operators and collaborators instead of shipping in isolation." },
  { icon: "⚙️", title: "Practical AI", description: "We use AI where it creates real leverage, not where it adds noise." },
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Building durable digital businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Katixo exists to build focused products under one disciplined parent company,
            combining strategy, systems, AI and execution into repeatable growth.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="text-4xl">🎯</div>
            <h2 className="mt-4 font-heading text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To turn strong digital product ideas into practical operating businesses
              that customers can trust and teams can scale.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="text-4xl">🌐</div>
            <h2 className="mt-4 font-heading text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become a trusted umbrella company for modern digital ventures:
              a place where strong product ideas are turned into dependable companies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading eyebrow="Our Story" title="From thesis to portfolio" />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative border-l-2 border-primary/20 pl-8">
              {timeline.map((t) => (
                <div key={t.year} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className="text-sm font-semibold text-accent">{t.year}</div>
                  <h3 className="mt-1 font-heading text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading eyebrow="Team" title="Meet the people building Katixo" />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary font-heading text-3xl font-bold text-primary-foreground">
                  {m.name.charAt(0)}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{m.name}</h3>
                <div className="text-sm text-accent">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {m.twitter && (
                    <a href={m.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Technology"
            title="Built with dependable systems"
            subtitle="We prefer reusable infrastructure, sensible tooling and operating simplicity."
          />
          <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
            {builtWith.map((r) => (
              <div
                key={r.name}
                className="flex h-16 items-center justify-center rounded-lg border bg-background text-sm font-semibold text-muted-foreground"
              >
                {r.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading title="Recognized by" />
          <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
            {recognition.map((r) => (
              <div
                key={r.name}
                className="flex h-16 items-center justify-center rounded-lg border bg-background text-sm font-semibold text-muted-foreground"
              >
                {r.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
