export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Accounting POS", href: "/accounting-pos-software" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "API Docs", href: "/docs" },
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
      { label: "API Documentation", href: "/docs" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/docs/changelog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const socialLinks = {
  linkedin: "",
  twitter: "",
  youtube: "",
  github: "https://github.com/DileepJexpert/NexusAI-Technologies",
};
