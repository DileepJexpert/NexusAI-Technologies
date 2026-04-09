import Link from "next/link";
import { Linkedin, Twitter, Youtube, Github } from "lucide-react";
import { footerLinks, socialLinks } from "@/data/navigation";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F1A33] text-slate-300">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white font-heading text-xl font-bold">
                N
              </div>
              <span className="font-heading text-xl font-bold text-white">
                NexusAI
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              AI-powered tools for every Indian. We build WhatsApp AI
              assistants that help farmers, businesses and students navigate
              government schemes and daily challenges in their own language.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={socialLinks.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={socialLinks.twitter} label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={socialLinks.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={socialLinks.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialIcon>
            </div>
            <div className="mt-6 max-w-sm">
              <div className="mb-2 text-sm font-semibold text-white">
                Join our newsletter
              </div>
              <NewsletterForm />
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} NexusAI Technologies. All rights reserved.</div>
          <div>
            Made with <span className="text-red-400">❤</span> in India{" "}
            <span aria-hidden>🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
