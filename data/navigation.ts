export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export interface NavSection {
  heading: string;
  links: NavLink[];
}

export const productsMenu: NavSection[] = [
  {
    heading: "Core Finance & GL",
    links: [
      { label: "General Ledger", href: "/products/finance/general-ledger", description: "Multi-entity consolidation & 24h close" },
      { label: "Accounts Payable", href: "/products/procurement/purchase-orders", description: "3-way invoice match & vendor statements" },
      { label: "Accounts Receivable", href: "/products/sales/sales-orders", description: "Delivery challans & real-time e-invoicing" },
      { label: "GST 2.0 Engine", href: "/gst-guides", description: "Notification 9/2025-CT auto-split rates", badge: "2.0 Ready" },
      { label: "Autonomous Bank Match", href: "/docs/banking", description: "AI feed parsing & zero-variance reconciliation" },
    ],
  },
  {
    heading: "Industry Packs",
    links: [
      { label: "Hospital OS", href: "/docs/hospital", description: "NABH IPD, OPD queue triage & clinical pharmacy", badge: "NABH" },
      { label: "FMCG Route Vans", href: "/docs/field-sales", description: "GPS beat routing & day-close cash settlement", badge: "Field" },
      { label: "Pharma Clinical", href: "/docs/pharma", description: "100K+ salts, contraindications & FEFO returns", badge: "CDSCO" },
      { label: "Retail POS Software", href: "/accounting-pos-software", description: "Sub-second barcode scan & receipt journals" },
    ],
  },
  {
    heading: "Packs & Developer",
    links: [
      { label: "FIFO Inventory Costing", href: "/docs/inventory-costing", description: "Lot consumption & warehouse transfers" },
      { label: "Indian SMB Payroll", href: "/docs/payroll", description: "PF 12%, ESI, PT slabs & direct salary posting" },
      { label: "Custom Report Builder", href: "/docs/custom-reports", description: "Ad-hoc SQL query builder with cron delivery" },
      { label: "Developer APIs & SDKs", href: "/docs", description: "Complete REST API reference & webhooks" },
    ],
  },
];

export const solutionsMenu: NavSection[] = [
  {
    heading: "By Industry",
    links: [
      { label: "Healthcare & Hospitals", href: "/docs/hospital", description: "For multi-specialty hospitals, clinics & diagnostic centers" },
      { label: "Pharma Chemists & Chains", href: "/docs/pharma", description: "For retail pharmacies, CDSCO distributors & wholesale" },
      { label: "FMCG & Route Distribution", href: "/docs/field-sales", description: "For van sales, FMCG distributors & spot billing" },
      { label: "Supermarkets & Retail Kirana", href: "/accounting-pos-software", description: "For high-volume retail counters with barcode scanning" },
    ],
  },
  {
    heading: "By Persona / Scale",
    links: [
      { label: "CFOs & Controllers", href: "/docs", description: "Close faster, automate audits, eliminate manual spreadsheets" },
      { label: "Hospital Medical Supts", href: "/docs/hospital", description: "Real-time census, IPD rounds & instant insurance TPA" },
      { label: "Supply Chain & Operations", href: "/docs/delivery-challans", description: "Dispatch validation & batch balance control" },
      { label: "Chartered Accountants & CAs", href: "/partners", description: "Multi-tenant client books & automated GSTR filing" },
    ],
  },
];

export const partnersMenu: NavSection[] = [
  {
    heading: "Partner Programs",
    links: [
      { label: "Advisory & CA Partnerships", href: "/partners", description: "For Chartered Accountants, Tax Practitioners & CFO Advisory" },
      { label: "Technology & ISV Integrators", href: "/integrations", description: "Build connectors, apps & payment gateways with our APIs" },
      { label: "Legacy ERP Rescue Fund", href: "/compare", description: "Switch from NetSuite, SAP, or Tally with ₹0 migration fees", badge: "Zero Fee" },
    ],
  },
];

export const resourcesMenu: NavSection[] = [
  {
    heading: "Documentation & APIs",
    links: [
      { label: "Developer Documentation", href: "/docs", description: "Guides, SDKs & complete API reference" },
      { label: "Delivery Challans API", href: "/docs/delivery-challans", description: "FEFO dispatch & stock deductions" },
      { label: "Procurement & 3-Way Match", href: "/docs/procurement", description: "PO to GRN to purchase invoice" },
      { label: "Inventory Costing Engine", href: "/docs/inventory-costing", description: "FIFO cost lot consumption engine" },
    ],
  },
  {
    heading: "Compliance & Insights",
    links: [
      { label: "GST 2.0 Reform Guide", href: "/gst-guides", description: "Notification 9/2025-CT rate schedule & rules" },
      { label: "Product Updates & Changelog", href: "/docs/changelog", description: "Latest features, releases & API additions" },
      { label: "Compare Alternatives", href: "/compare", description: "Katixo vs NetSuite, SAP, Tally, Zoho & Busy" },
      { label: "Case Studies & Customers", href: "/case-studies", description: "How Indian enterprises run on Katixo" },
    ],
  },
];

export const mainNav: { label: string; href: string }[] = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/docs/hospital" },
  { label: "Partners", href: "/partners" },
  { label: "Customers", href: "/case-studies" },
  { label: "Resources", href: "/docs" },
];

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerLinks: FooterColumn[] = [
  {
    title: "Products & Packs",
    links: [
      { label: "Finance ERP & GL", href: "/products/finance/general-ledger" },
      { label: "Hospital OS (NABH)", href: "/docs/hospital" },
      { label: "FMCG Field Sales & Vans", href: "/docs/field-sales" },
      { label: "Pharma Clinical Masters", href: "/docs/pharma" },
      { label: "Accounting POS Software", href: "/accounting-pos-software" },
      { label: "Indian SMB Payroll", href: "/docs/payroll" },
      { label: "Custom Report Builder", href: "/docs/custom-reports" },
      { label: "Book a Demo", href: "/contact" },
    ],
  },
  {
    title: "Solutions & Partners",
    links: [
      { label: "Healthcare & Hospitals", href: "/docs/hospital" },
      { label: "Pharma Chemists", href: "/docs/pharma" },
      { label: "FMCG Distribution", href: "/docs/field-sales" },
      { label: "Chartered Accountants", href: "/partners" },
      { label: "Legacy ERP Rescue", href: "/compare" },
      { label: "Integrations & ISVs", href: "/integrations" },
    ],
  },
  {
    title: "Resources & APIs",
    links: [
      { label: "Developer Docs", href: "/docs" },
      { label: "GST 2.0 Reform Guide", href: "/gst-guides" },
      { label: "Delivery Challans API", href: "/docs/delivery-challans" },
      { label: "Procurement & GRN API", href: "/docs/procurement" },
      { label: "Product Changelog", href: "/docs/changelog" },
      { label: "Compare NetSuite / Tally", href: "/compare" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Katixo", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "/help" },
    ],
  },
];

export const socialLinks = {
  linkedin: "",
  twitter: "",
  youtube: "",
  github: "https://github.com/DileepJexpert/NexusAI-Technologies",
};
