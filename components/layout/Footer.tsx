import Link from "next/link";
import { Linkedin, Twitter, Youtube, Github } from "lucide-react";
import { footerLinks, socialLinks } from "@/data/navigation";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { KatixoLogo } from "@/components/shared/KatixoLogo";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F1A33] text-slate-300">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center" aria-label={`${brand.name} home`}>
              <KatixoLogo white className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400">{brand.footerSummary}</p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.linkedin ? (
                <SocialIcon href={socialLinks.linkedin} label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialIcon>
              ) : null}
              {socialLinks.twitter ? (
                <SocialIcon href={socialLinks.twitter} label="Twitter">
                  <Twitter className="h-4 w-4" />
                </SocialIcon>
              ) : null}
              {socialLinks.youtube ? (
                <SocialIcon href={socialLinks.youtube} label="YouTube">
                  <Youtube className="h-4 w-4" />
                </SocialIcon>
              ) : null}
              {socialLinks.github ? (
                <SocialIcon href={socialLinks.github} label="GitHub">
                  <Github className="h-4 w-4" />
                </SocialIcon>
              ) : null}
            </div>
            <div className="mt-6 max-w-sm">
              <div className="mb-2 text-sm font-semibold text-white">Join our newsletter</div>
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
          <div>© {new Date().getFullYear()} {brand.legalName}. All rights reserved.</div>
          <div>Built for focused digital brands.</div>
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
