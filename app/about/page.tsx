import type { Metadata } from "next";
import { Linkedin, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { team } from "@/data/team";
import { builtWith, recognition } from "@/data/recognition";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NexusAI Technologies is building AI tools for every Indian — farmers, businesses, students and citizens — delivered on WhatsApp in 10+ languages.",
};

const timeline = [
  { year: "2025", title: "The idea is born", description: "Our founder sees rural Indians struggle to access government schemes and decides to build AI tools that help." },
  { year: "2026 Q1", title: "NexusAI founded", description: "First product KisanMitra launched on WhatsApp for Indian farmers." },
  { year: "2026 Q2", title: "1,000+ users", description: "Expanded into finance and legal with NiyamMitra and UdyamSathi." },
  { year: "2026 Q3", title: "Startup India recognised", description: "Applied to the IndiaAI Innovation Challenge and secured DPIIT recognition." },
  { year: "2026 Q4", title: "10 products, pan-India", description: "Platform serves farmers, MSMEs and students across every major Indian state." },
];

const values = [
  { icon: "🇮🇳", title: "India First", description: "Models trained on Indian languages. Data stays on Indian soil." },
  { icon: "🔒", title: "Privacy", description: "We never store Aadhaar. We collect only what's absolutely needed." },
  { icon: "🌐", title: "Accessible", description: "Works on WhatsApp. No app. Voice-first for illiterate users." },
  { icon: "💡", title: "Open Source", description: "Built on Apache 2.0 / MIT licensed AI models we can all trust." },
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Building AI for Bharat
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            We believe every Indian deserves access to AI-powered tools in
            their own language — whether they&apos;re a farmer in Kanpur or a shop
            owner in Chennai.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section-padding">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="text-4xl">🎯</div>
            <h2 className="mt-4 font-heading text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To put AI-powered assistance into the hands of every Indian — in
              their own language, on a platform they already use every day:
              WhatsApp.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="text-4xl">🌟</div>
            <h2 className="mt-4 font-heading text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              To become India&apos;s largest AI product company, building tools
              that serve 100 million Indians across every domain — from
              agriculture to finance to legal services.
            </p>
          </div>
        </div>
      </section>

      {/* Story timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading eyebrow="Our Story" title="From idea to impact" />
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

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Team"
            title="Meet the people building NexusAI"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border bg-card p-6 shadow-sm text-center"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary font-heading text-3xl font-bold text-primary-foreground">
                  {m.name.charAt(0)}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{m.name}</h3>
                <div className="text-sm text-accent">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {m.twitter && (
                    <a
                      href={m.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built with */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Technology"
            title="Built with the best of Indian AI"
            subtitle="We use open-source Indian AI models to keep data sovereign and costs low."
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

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border bg-card p-6 shadow-sm"
              >
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
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
