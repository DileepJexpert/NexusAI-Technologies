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
    ],
  },
  {
    title: "Core API",
    items: [
      { label: "Invoices", href: "/docs/invoices" },
      { label: "Contacts", href: "/docs/customers" },
      { label: "Items", href: "/docs/items" },
      { label: "Purchase Bills", href: "/docs/purchase-bills" },
    ],
  },
  {
    title: "Inventory",
    items: [
      { label: "Batches & Stock", href: "/docs/inventory" },
      { label: "Stock Counts", href: "/docs/stock-counts" },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "GST & Tax", href: "/docs/gst" },
      { label: "Expenses", href: "/docs/expenses" },
      { label: "Recurring Invoices", href: "/docs/recurring-invoices" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Workflows", href: "/docs/workflows" },
      { label: "Changelog", href: "/docs/changelog", badge: "New" },
    ],
  },
];
