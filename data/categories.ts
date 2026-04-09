import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "agriculture",
    name: "Agriculture & Dairy",
    name_hi: "कृषि और डेयरी",
    icon: "🌾",
    color: "#16A34A",
    description:
      "AI tools that help Indian farmers discover schemes, track mandi prices, manage livestock and grow their income.",
    image: "/images/categories/agriculture.webp",
  },
  {
    id: "finance",
    name: "Finance & Banking",
    name_hi: "वित्त और बैंकिंग",
    icon: "💰",
    color: "#2563EB",
    description:
      "Compliance, loans and bookkeeping AI for banks, MSMEs and individuals — built for Indian regulations.",
    image: "/images/categories/finance.webp",
  },
  {
    id: "education",
    name: "Education",
    name_hi: "शिक्षा",
    icon: "📚",
    color: "#7C3AED",
    description:
      "Scholarships, career guidance and exam preparation — personalised AI mentors on WhatsApp.",
    image: "/images/categories/education.webp",
  },
  {
    id: "legal",
    name: "Legal & Compliance",
    name_hi: "कानूनी और अनुपालन",
    icon: "⚖️",
    color: "#DC2626",
    description:
      "Legal help for common people and MSME compliance — RTIs, notices, MSMED Act recovery and more.",
    image: "/images/categories/legal.webp",
  },
  {
    id: "events",
    name: "Events & Management",
    name_hi: "कार्यक्रम प्रबंधन",
    icon: "🎪",
    color: "#EA580C",
    description:
      "Plan events end-to-end with AI-powered budgeting, guest management and vendor discovery.",
    image: "/images/categories/events.webp",
  },
  {
    id: "health",
    name: "Health",
    name_hi: "स्वास्थ्य",
    icon: "🏥",
    color: "#0D9488",
    description:
      "Rural health advisory, symptom checking and AYUSH guidance in Hindi and regional languages.",
    image: "/images/categories/health.webp",
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
