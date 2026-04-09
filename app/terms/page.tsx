import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using NexusAI Technologies products.",
};

export default function TermsPage() {
  return (
    <div className="container-wide max-w-3xl py-16 md:py-24">
      <h1 className="font-heading text-4xl font-extrabold">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
        <h2 className="mt-10 font-heading text-2xl font-bold">1. Acceptance</h2>
        <p className="mt-3 leading-relaxed">
          By using any NexusAI product (&quot;Service&quot;) you agree to these Terms.
          If you do not agree, please do not use the Service.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">2. Informational purpose</h2>
        <p className="mt-3 leading-relaxed">
          Information provided by NexusAI — including scheme eligibility,
          mandi prices, legal advice and loan calculations — is intended for
          general guidance only and is not a substitute for professional advice.
          Always verify critical information with the relevant official source
          before acting on it.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">3. Accounts &amp; subscriptions</h2>
        <p className="mt-3 leading-relaxed">
          Paid subscriptions are billed monthly or annually via Razorpay. You
          may cancel at any time; cancellations take effect at the end of the
          current billing cycle.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">4. Acceptable use</h2>
        <p className="mt-3 leading-relaxed">
          You agree not to misuse the Service for unlawful, abusive or
          automated mass-messaging purposes.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">5. Limitation of liability</h2>
        <p className="mt-3 leading-relaxed">
          To the maximum extent permitted by Indian law, NexusAI&apos;s
          liability for any claim arising out of the Service is limited to the
          amount you paid us in the last six months.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">6. Governing law</h2>
        <p className="mt-3 leading-relaxed">
          These Terms are governed by the laws of India. Any disputes will be
          resolved exclusively in the courts of Bengaluru, Karnataka.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">7. Contact</h2>
        <p className="mt-3 leading-relaxed">
          For any questions about these Terms, email{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:hello@nexusai.in">
            hello@nexusai.in
          </a>
          .
        </p>
      </div>
    </div>
  );
}
