"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const businessTypes = [
  "Kirana / retail counter",
  "Medical shop / pharmacy",
  "Distributor / wholesale",
  "Hospital / clinic",
  "MSME finance team",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [subject, setSubject] = useState("Demo");
  const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSubject(params.get("intent") === "register" ? "Register" : "Demo");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const businessType = String(formData.get("businessType") || "");
    const formSubject = String(formData.get("subject") || subject);
    const message = String(formData.get("message") || "");
    const enrichedMessage = [
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      `Business type: ${businessType || "Not selected"}`,
      "",
      message,
    ].join("\n");

    try {
      const siteRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject: formSubject, message: enrichedMessage }),
      });

      if (siteRes.ok) {
        setStatus("success");
        form.reset();
        setSubject("Demo");
        return;
      }

      if (!web3formsKey) {
        const mailSubject = encodeURIComponent(`[${formSubject}] Website inquiry from ${name}`);
        const mailBody = encodeURIComponent(`${enrichedMessage}\n\nFrom: ${name} <${email}>`);
        window.location.href = `mailto:hello@katixo.com?subject=${mailSubject}&body=${mailBody}`;
        setStatus("success");
        form.reset();
        setSubject("Demo");
        return;
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          from_name: "Katixo website",
          name,
          email,
          phone,
          business_type: businessType,
          subject: formSubject,
          message: enrichedMessage,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setSubject("Demo");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-950">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold">Request received</h3>
        <p className="mt-2 text-sm text-emerald-800">
          Thanks for reaching out. We will get back to you within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Name</label>
          <Input name="name" required placeholder="Full name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Email</label>
          <Input type="email" name="email" required placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Phone / WhatsApp</label>
          <Input type="tel" name="phone" placeholder="+91" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Request type</label>
        <select
          name="subject"
          required
          suppressHydrationWarning
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
            className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="Demo">Book a demo</option>
            <option value="Register">Register interest</option>
            <option value="Partnership">Partnership</option>
            <option value="Support">Support</option>
            <option value="General">General inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold">Business type</label>
        <select
          name="businessType"
          defaultValue=""
          suppressHydrationWarning
          className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="" disabled>
            Select business type
          </option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold">What do you want to solve first?</label>
        <Textarea
          name="message"
          required
          placeholder="Example: GST billing at the counter, pharmacy stock with expiry, distributor receivables, OPD queue and billing..."
          className="min-h-[120px]"
        />
      </div>

      <Button type="submit" disabled={status === "sending"} className="w-full" size="lg">
        {status === "sending" ? "Sending..." : "Request a demo"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again or email hello@katixo.com directly.
        </p>
      )}
    </form>
  );
}
