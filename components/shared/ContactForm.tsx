"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (key) {
      data.append("access_key", key);
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
        if (res.ok) {
          setStatus("success");
          form.reset();
          return;
        }
      } catch {
        // fall through
      }
      setStatus("error");
    } else {
      // Demo: just show success locally if no key configured
      setTimeout(() => {
        setStatus("success");
        form.reset();
      }, 500);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="text-4xl">✅</div>
        <h3 className="mt-4 font-heading text-xl font-bold">Message received</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Name</label>
          <Input name="name" required placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Email</label>
          <Input type="email" name="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Subject</label>
        <select
          name="subject"
          required
          className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="General">General inquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Support">Support</option>
          <option value="Media">Media / Press</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Message</label>
        <Textarea name="message" required placeholder="How can we help?" />
      </div>
      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please email us directly.
        </p>
      )}
    </form>
  );
}
