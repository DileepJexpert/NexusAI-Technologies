import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NexusAI Technologies collects, uses and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container-wide max-w-3xl py-16 md:py-24">
      <h1 className="font-heading text-4xl font-extrabold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
        <h2 className="mt-10 font-heading text-2xl font-bold">Who we are</h2>
        <p className="mt-3 leading-relaxed">
          NexusAI Technologies (&quot;NexusAI&quot;, &quot;we&quot;, &quot;us&quot;) provides
          AI-powered assistants on WhatsApp under product names including
          KisanMitra, NiyamMitra, LoanSathi and UdyamSathi.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">What we collect</h2>
        <p className="mt-3 leading-relaxed">
          We collect the minimum data required to provide our services: your
          WhatsApp phone number, the messages you send us and any optional
          profile details you choose to share (state, crop, business type).
        </p>
        <p className="mt-3 leading-relaxed">
          We <strong>do not</strong> ask for, store, or process Aadhaar numbers,
          bank passwords, OTPs or PAN numbers.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">How we use your data</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>To answer your questions and personalise responses.</li>
          <li>To improve our AI models (only on anonymised, aggregated data).</li>
          <li>To send service-related notifications.</li>
        </ul>

        <h2 className="mt-10 font-heading text-2xl font-bold">Where your data lives</h2>
        <p className="mt-3 leading-relaxed">
          All data is stored on servers located in India (AWS Mumbai and
          Cloudflare India edge). We never sell or rent your data to third parties.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">Your rights under DPDP Act 2023</h2>
        <p className="mt-3 leading-relaxed">
          You have the right to access, correct and delete your data at any time.
          Send a message saying &quot;delete my data&quot; on WhatsApp or email
          privacy@nexusai.in and we will comply within 7 days.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">Contact</h2>
        <p className="mt-3 leading-relaxed">
          For privacy questions, email{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:privacy@nexusai.in">
            privacy@nexusai.in
          </a>
          .
        </p>
      </div>
    </div>
  );
}
