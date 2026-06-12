export interface DocNavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface DocNavSection {
  title: string;
  items: DocNavItem[];
}

export interface DocNavProduct {
  product: string;
  icon: string;
  badge?: string;
  sections: DocNavSection[];
}

export const docsNav: DocNavProduct[] = [
  {
    product: "Platform",
    icon: "🔧",
    sections: [
      {
        title: "Getting Started",
        items: [
          { label: "Overview", href: "/docs" },
          { label: "Authentication", href: "/docs/authentication" },
          { label: "Errors", href: "/docs/errors" },
          { label: "Changelog", href: "/docs/changelog", badge: "New" },
        ],
      },
    ],
  },
  {
    product: "Katasticho ERP",
    icon: "📒",
    sections: [
      {
        title: "Billing",
        items: [
          { label: "Invoices", href: "/docs/invoices" },
          { label: "Purchase Bills", href: "/docs/purchase-bills" },
          { label: "Recurring Invoices", href: "/docs/recurring-invoices" },
          { label: "Expenses", href: "/docs/expenses" },
        ],
      },
      {
        title: "Catalogue",
        items: [
          { label: "Items", href: "/docs/items" },
          { label: "Contacts", href: "/docs/customers" },
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
          { label: "Workflows", href: "/docs/workflows" },
        ],
      },
    ],
  },
  {
    product: "Hospital OS",
    icon: "🏥",
    badge: "Beta",
    sections: [
      {
        title: "Clinical",
        items: [
          { label: "Overview", href: "/docs/hospital" },
          { label: "Patients", href: "/docs/hospital/patients" },
          { label: "OPD", href: "/docs/hospital/opd" },
          { label: "IPD", href: "/docs/hospital/ipd" },
        ],
      },
      {
        title: "Diagnostics",
        items: [
          { label: "Laboratory", href: "/docs/hospital/laboratory" },
          { label: "Operation Theatre", href: "/docs/hospital/ot" },
        ],
      },
      {
        title: "Operations",
        items: [
          { label: "Pharmacy", href: "/docs/hospital/pharmacy" },
          { label: "Billing", href: "/docs/hospital/billing" },
        ],
      },
    ],
  },
];
