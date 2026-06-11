export interface DocNavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface DocNavSection {
  title: string;
  items: DocNavItem[];
}

export const docsNav: DocNavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Overview", href: "/docs" },
      { label: "Authentication", href: "/docs/authentication" },
      { label: "Errors", href: "/docs/errors" },
      { label: "Rate Limits", href: "/docs/errors#rate-limits" },
    ],
  },
  {
    title: "Core API",
    items: [
      { label: "Invoices", href: "/docs/invoices" },
      { label: "Items", href: "/docs/items" },
      { label: "Customers & Parties", href: "/docs/customers" },
      { label: "Inventory", href: "/docs/inventory" },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "GST & Tax", href: "/docs/gst" },
      { label: "Bank Reconciliation", href: "/docs/bank-reconciliation" },
      { label: "Ledgers & Reports", href: "/docs/ledgers" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Webhooks", href: "/docs/webhooks" },
      { label: "Changelog", href: "/docs/changelog", badge: "New" },
    ],
  },
];
