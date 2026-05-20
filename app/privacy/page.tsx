import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Katixo collects, uses and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container-wide max-w-3xl py-16 md:py-24">
      <h1 className="font-heading text-4xl font-extrabold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
        <h2 className="mt-10 font-heading text-2xl font-bold">Who we are</h2>
        <p className="mt-3 leading-relaxed">
          Katixo ("Katixo", "we", "us") operates digital products, services and AI-assisted workflows across multiple customer use cases.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">What we collect</h2>
        <p className="mt-3 leading-relaxed">
          We collect the minimum information needed to operate our products, respond to inquiries and improve the customer experience.
        </p>
        <p className="mt-3 leading-relaxed">
          We do not intentionally collect highly sensitive information unless a specific product clearly requires it and states so.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">How we use your data</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>To operate and improve our products and services.</li>
          <li>To respond to inquiries, demos and support requests.</li>
          <li>To measure usage patterns and make better product decisions.</li>
        </ul>

        <h2 className="mt-10 font-heading text-2xl font-bold">Your choices</h2>
        <p className="mt-3 leading-relaxed">
          You may request access, correction or deletion of your data where applicable. We aim to respond within a reasonable period.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">Contact</h2>
        <p className="mt-3 leading-relaxed">
          For privacy questions, email{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:privacy@katixo.com">
            privacy@katixo.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
