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
    heading: "ERP Solutions",
    links: [
      { label: "Pharma & Clinical", href: "/docs/pharma", description: "CDSCO masters & interaction checks" },
      { label: "FMCG Field Sales", href: "/docs/field-sales", description: "Beats, routes & van stock reconciliation" },
      { label: "Indian Payroll", href: "/docs/payroll", description: "PF 12%, ESI, PT slabs & journal post" },
      { label: "Custom Report Builder", href: "/docs/custom-reports", description: "Ad-hoc query builder with cron delivery" },
    ],
  },
  {
    heading: "API Reference",
    links: [
      { label: "Delivery Challans", href: "/docs/delivery-challans", description: "Dispatch & FEFO stock allocation" },
      { label: "Procurement & GRN", href: "/docs/procurement", description: "Purchase orders & 3-way match" },
      { label: "FIFO Inventory", href: "/docs/inventory-costing", description: "Lot consumption & warehouse transfers" },
      { label: "Full API Docs", href: "/docs", description: "Complete REST API reference" },
    ],
  },
  {
    heading: "Company & Guides",
    links: [
      { label: "Compare Alternatives", href: "/compare", description: "Katixo vs Tally, Zoho, Busy & Vyapar" },
      { label: "GST Guides", href: "/gst-guides", description: "GST 2.0 compliance made simple" },
      { label: "Case Studies", href: "/case-studies", description: "How Indian businesses run on Katixo" },
      { label: "Help Center", href: "/help", description: "FAQs, workflows & operator support" },
    ],
  },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const footerLinks: FooterColumn[] = [
  {
    title: "Products & Packs",
    links: [
      { label: "Accounting POS Software", href: "/accounting-pos-software" },
      { label: "Pharma Clinical Masters", href: "/docs/pharma" },
      { label: "FMCG Field Sales & Vans", href: "/docs/field-sales" },
      { label: "Custom Report Builder", href: "/docs/custom-reports" },
      { label: "Indian SMB Payroll", href: "/docs/payroll" },
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
    title: "Resources & APIs",
    links: [
      { label: "API Documentation", href: "/docs" },
      { label: "Delivery Challans API", href: "/docs/delivery-challans" },
      { label: "Procurement & GRN API", href: "/docs/procurement" },
      { label: "GST Guides", href: "/gst-guides" },
      { label: "Compare Alternatives", href: "/compare" },
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
