import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Katixo products and services.",
};

export default function TermsPage() {
  return (
    <div className="container-wide max-w-3xl py-16 md:py-24">
      <h1 className="font-heading text-4xl font-extrabold">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
        <h2 className="mt-10 font-heading text-2xl font-bold">1. Acceptance</h2>
        <p className="mt-3 leading-relaxed">
          By using any Katixo product or service ("Service") you agree to these Terms. If you do not agree, please do not use the Service.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">2. Informational purpose</h2>
        <p className="mt-3 leading-relaxed">
          Information provided by Katixo, including product guidance, workflow suggestions and automated outputs, is intended for general support and operational convenience. Always verify critical decisions with the relevant professional or official source when needed.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">3. Accounts and subscriptions</h2>
        <p className="mt-3 leading-relaxed">
          Paid services may be billed monthly, annually or per engagement depending on the product. Cancellation terms follow the plan or agreement attached to that service.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">4. Acceptable use</h2>
        <p className="mt-3 leading-relaxed">
          You agree not to misuse the Service for unlawful, abusive, deceptive or harmful purposes.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">5. Limitation of liability</h2>
        <p className="mt-3 leading-relaxed">
          To the maximum extent permitted by law, Katixo&apos;s liability for claims arising from the Service is limited to the amount paid by you for the relevant Service during the prior six months.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">6. Governing law</h2>
        <p className="mt-3 leading-relaxed">
          These Terms are governed by the laws of India. Any disputes will be resolved exclusively in the courts of Noida, Uttar Pradesh.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold">7. Contact</h2>
        <p className="mt-3 leading-relaxed">
          For any questions about these Terms, email{" "}
          <a className="text-primary underline-offset-4 hover:underline" href="mailto:hello@katixo.com">
            hello@katixo.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
