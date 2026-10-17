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
        title: "Billing & Sales",
        items: [
          { label: "Invoices", href: "/docs/invoices" },
          { label: "Delivery Challans", href: "/docs/delivery-challans", badge: "New" },
          { label: "Purchase Bills", href: "/docs/purchase-bills" },
          { label: "Recurring Invoices", href: "/docs/recurring-invoices" },
          { label: "Expenses", href: "/docs/expenses" },
        ],
      },
      {
        title: "Procurement & Stock",
        items: [
          { label: "Purchase Orders & GRN", href: "/docs/procurement", badge: "New" },
          { label: "Items & Catalogue", href: "/docs/items" },
          { label: "Contacts & Ledgers", href: "/docs/customers" },
          { label: "Batches & Expiry", href: "/docs/inventory" },
          { label: "FIFO Lots & Transfers", href: "/docs/inventory-costing", badge: "New" },
          { label: "Stock Counts", href: "/docs/stock-counts" },
        ],
      },
      {
        title: "Vertical Packs",
        items: [
          { label: "Pharma Clinical Masters", href: "/docs/pharma", badge: "New" },
          { label: "FMCG Field Sales & Vans", href: "/docs/field-sales", badge: "New" },
        ],
      },
      {
        title: "Reporting & Analytics",
        items: [
          { label: "Custom Report Builder", href: "/docs/custom-reports", badge: "New" },
          { label: "GST & Statutory Tax", href: "/docs/gst" },
          { label: "Approval Workflows", href: "/docs/workflows" },
        ],
      },
      {
        title: "Payroll & Operations",
        items: [
          { label: "Indian Payroll & Slabs", href: "/docs/payroll", badge: "New" },
          { label: "AI Review & Suggestions", href: "/docs/ai", badge: "New" },
          { label: "Banking & Auto-Match", href: "/docs/banking", badge: "New" },
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
