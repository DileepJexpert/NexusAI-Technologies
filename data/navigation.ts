export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Accounting POS", href: "/accounting-pos-software" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const footerLinks: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Accounting POS Software", href: "/accounting-pos-software" },
      { label: "GST Billing Software", href: "/accounting-pos-software#gst-ready-billing" },
      { label: "MSME Accounting", href: "/accounting-pos-software" },
      { label: "Inventory and Billing", href: "/accounting-pos-software" },
      { label: "Book a Demo", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

export const socialLinks = {
  linkedin: "",
  twitter: "",
  youtube: "",
  github: "https://github.com/DileepJexpert/NexusAI-Technologies",
};
