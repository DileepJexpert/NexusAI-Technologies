export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Products", href: "/products" },
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
      { label: "KisanMitra", href: "/products/agriculture/kisanmitra" },
      { label: "NiyamMitra", href: "/products/finance/niyammitra" },
      { label: "LoanSathi", href: "/products/finance/loansathi" },
      { label: "EventKhata", href: "/products/events/eventkhata" },
      { label: "UdyamSathi", href: "/products/legal/udyamsathi" },
      { label: "All Products", href: "/products" },
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
  linkedin: "https://linkedin.com/company/nexusai",
  twitter: "https://twitter.com/nexusai",
  youtube: "https://youtube.com/@nexusai",
  github: "https://github.com/nexusai",
};
