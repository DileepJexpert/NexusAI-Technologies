export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface ResourcesColumn {
  heading: string;
  links: NavLink[];
}

export const mainNav: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Accounting POS", href: "/accounting-pos-software" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const resourcesMenu: ResourcesColumn[] = [
  {
    heading: "Learn",
    links: [
      { label: "Blog", href: "/blog", description: "Guides, tips & product updates" },
      { label: "API Documentation", href: "/docs", description: "REST API reference for developers" },
      { label: "GST Guides", href: "/gst-guides", description: "GST compliance made simple" },
      { label: "Help Center", href: "/help", description: "Guides, FAQs & support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Case Studies", href: "/case-studies", description: "How MSMEs use Katixo" },
      { label: "Integrations", href: "/integrations", description: "Connect tools you already use" },
      { label: "Compare", href: "/compare", description: "Katixo vs Tally, Zoho & more" },
      { label: "Partners", href: "/partners", description: "Partner program & resellers" },
    ],
  },
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
      { label: "GST Guides", href: "/gst-guides" },
      { label: "Help Center", href: "/help" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Compare", href: "/compare" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
];

export const socialLinks = {
  linkedin: "",
  twitter: "",
  youtube: "",
  github: "https://github.com/DileepJexpert/NexusAI-Technologies",
};
