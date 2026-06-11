import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${brand.name} — we're building accounting and POS software for Indian MSMEs. See open roles and how we work.`,
};

const perks = [
  { icon: "🏠", title: "Remote-first", description: "Work from anywhere in India. We coordinate asynchronously and meet when it matters." },
  { icon: "🧰", title: "Real problems", description: "Indian MSMEs need better tools. You'll build software that shops and businesses actually use every day." },
  { icon: "📈", title: "Early-stage equity", description: "Early team members get meaningful ownership. We grow together." },
  { icon: "🎯", title: "Small team, high leverage", description: "No layers of approvals. You ship directly to users and see the impact the same week." },
];

export default function CareersPage() {
  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl text-balance">
            Build software that Indian businesses actually need
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            {brand.name} is a small, focused team building accounting and POS software for
            MSMEs, retailers, and distributors across India. We are early-stage and hiring.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading eyebrow="Why Katixo" title="What it's like to work here" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="text-4xl">{p.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Open Roles"
            title="We're hiring for these positions"
            subtitle="We value practical builders over pedigree. Show us what you've shipped."
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            <RoleCard
              title="Full-Stack Engineer"
              type="Full-time · Remote (India)"
              description="Build end-to-end features across our Next.js frontend and Node.js backend — invoicing workflows, inventory systems, bank reconciliation, and GST compliance modules."
              skills={["TypeScript", "React / Next.js", "PostgreSQL", "REST APIs"]}
            />
            <RoleCard
              title="Frontend Engineer"
              type="Full-time · Remote (India)"
              description="Own the user experience for billing counters, dashboards, and reports. Performance and keyboard-first interaction matter — our users bill hundreds of invoices a day."
              skills={["React", "Tailwind CSS", "Accessibility", "Performance"]}
            />
            <RoleCard
              title="Product Designer"
              type="Full-time or Contract · Remote"
              description="Design interfaces for complex accounting workflows that feel simple. You'll work directly with the founder and ship designs within the same sprint."
              skills={["Figma", "Design systems", "User research", "Prototyping"]}
            />
            <RoleCard
              title="DevOps / Infrastructure"
              type="Full-time · Remote (India)"
              description="Own our deployment pipeline, database reliability, and edge infrastructure on Cloudflare. We ship static frontends and serverless APIs."
              skills={["Cloudflare Workers", "PostgreSQL", "CI/CD", "Monitoring"]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading eyebrow="Process" title="How we hire" />
          <div className="mx-auto mt-14 max-w-2xl space-y-6">
            <Step number="1" title="Apply via email">
              Send your resume and a short note about what you&apos;ve built to{" "}
              <a href={`mailto:${brand.supportEmail}?subject=Career Application`} className="text-accent hover:underline">
                {brand.supportEmail}
              </a>. No cover letter template — just tell us what excites you.
            </Step>
            <Step number="2" title="Short intro call (30 min)">
              We discuss your background, what you&apos;re looking for, and whether there&apos;s a mutual fit.
            </Step>
            <Step number="3" title="Paid take-home task">
              A small, practical task related to the role. We pay for your time — we know good work isn&apos;t free.
            </Step>
            <Step number="4" title="Final conversation">
              A deeper discussion about how you&apos;d work day-to-day, compensation, and timeline.
            </Step>
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16 text-white">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold">Don&apos;t see your role listed?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            We&apos;re always interested in hearing from strong builders. Send us a note
            and we&apos;ll reach out when something opens up.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${brand.supportEmail}?subject=General Application`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5"
            >
              Email us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function RoleCard({
  title,
  type,
  description,
  skills,
}: {
  title: string;
  type: string;
  description: string;
  skills: string[];
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-heading text-lg font-bold">{title}</h3>
          <div className="mt-1 text-sm text-accent">{type}</div>
        </div>
        <a
          href={`mailto:hello@katixo.com?subject=Application: ${title}`}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Apply
        </a>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        {number}
      </div>
      <div>
        <h3 className="font-heading text-base font-bold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
