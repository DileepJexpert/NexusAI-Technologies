import type { Product } from "./types";

const WHATSAPP_NUMBER = "919876543210";
const WA = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const products: Product[] = [
  // ============ AGRICULTURE ============
  {
    id: "kisanmitra",
    name: "KisanMitra",
    tagline: "AI Assistant for Indian Farmers",
    tagline_hi: "भारतीय किसानों का AI सहायक",
    description:
      "KisanMitra helps farmers discover government schemes, track real-time mandi prices, calculate loan eligibility and generate DPRs — all over WhatsApp in Hindi and 9 more Indian languages.",
    status: "live",
    category_id: "agriculture",
    icon: "🌾",
    color: "#16A34A",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Namaste KisanMitra, I want help with government schemes"),
    youtube_video_id: "",
    features: [
      {
        icon: "🏛️",
        title: "Scheme Finder",
        title_hi: "योजना खोजक",
        description:
          "Search 500+ central and state government schemes. Get eligibility, documents needed and application steps in your language.",
      },
      {
        icon: "📈",
        title: "Mandi Price Tracker",
        title_hi: "मंडी भाव",
        description:
          "Live prices from 500+ mandis across India. Compare rates and decide the best time and market to sell your produce.",
      },
      {
        icon: "🏦",
        title: "Loan Eligibility Calculator",
        title_hi: "लोन पात्रता",
        description:
          "Check eligibility for KCC, NABARD DEDS, PMFME, Mudra and more. Know your EMI before you apply.",
      },
      {
        icon: "📄",
        title: "DPR Generator",
        description:
          "Generate detailed project reports for dairy, fisheries, food processing and more — ready for bank submission.",
      },
      {
        icon: "⚖️",
        title: "Legal Notice for MSME",
        description:
          "Draft legal notices under the MSMED Act to recover delayed payments from buyers.",
      },
      {
        icon: "🔔",
        title: "Smart Alerts",
        description:
          "Get alerts for scheme deadlines, price changes, weather advisories and subsidy openings.",
      },
    ],
    usecases: [
      {
        title: "Ramesh gets ₹7 lakh dairy loan",
        description:
          "Ramesh from UP chats with KisanMitra, finds NABARD DEDS subsidy, generates DPR and gets his loan approved in 3 weeks.",
      },
      {
        title: "Sunita tracks best mandi price",
        description:
          "Sunita compares tomato prices across 5 nearby mandis, picks the best rate and earns ₹4,000 extra that week.",
      },
      {
        title: "Vinod applies to PMFME scheme",
        description:
          "Vinod uses KisanMitra to check PMFME eligibility and complete his application for a ₹10 lakh food processing unit.",
      },
    ],
    pricing: [
      {
        name: "Free",
        price: "₹0",
        priceDetail: "Forever",
        features: [
          "5 queries per day",
          "Scheme search",
          "Basic mandi prices",
          "Hindi + English",
          "WhatsApp delivery",
        ],
        cta: "Start Free",
      },
      {
        name: "Basic",
        price: "₹99",
        priceDetail: "per month",
        features: [
          "50 queries per day",
          "All schemes + alerts",
          "Full mandi price history",
          "Voice support",
          "10 Indian languages",
          "Loan eligibility checks",
        ],
        cta: "Subscribe",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "₹499",
        priceDetail: "per month",
        features: [
          "Unlimited queries",
          "DPR generation",
          "Legal notice drafts",
          "Priority support",
          "Personalised alerts",
          "Export to PDF",
        ],
        cta: "Go Premium",
      },
    ],
    screenshots: [
      "/images/products/kisanmitra/chat1.webp",
      "/images/products/kisanmitra/chat2.webp",
      "/images/products/kisanmitra/chat3.webp",
    ],
    testimonials: [
      {
        name: "Ramesh Kumar",
        location: "Sitapur, UP",
        occupation: "Dairy Farmer",
        quote:
          "KisanMitra helped me get a ₹7 lakh dairy loan. I never knew about NABARD subsidies before.",
        rating: 5,
      },
      {
        name: "Sunita Devi",
        location: "Nashik, Maharashtra",
        occupation: "Vegetable Farmer",
        quote:
          "I earn ₹4,000 extra every week by picking the best mandi. This is my morning ritual now.",
        rating: 5,
      },
      {
        name: "Vinod Patil",
        location: "Kolhapur, Maharashtra",
        occupation: "Food Processor",
        quote:
          "Applied for PMFME in just 2 days. The DPR generator is a miracle.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Is KisanMitra really free?",
        answer:
          "Yes. The Free plan gives you 5 queries per day forever. Paid plans unlock more queries, DPRs and legal drafts.",
      },
      {
        question: "Which languages does it support?",
        answer:
          "Hindi, English, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati, Punjabi and Malayalam. Voice messages are supported in all of them.",
      },
      {
        question: "Do I need to install an app?",
        answer:
          "No. KisanMitra works entirely on WhatsApp. Save our number and send a message to start.",
      },
      {
        question: "How accurate are mandi prices?",
        answer:
          "We pull data from AGMARKNET and state APMC portals. Prices are updated every 30 minutes during market hours.",
      },
      {
        question: "Is my data safe?",
        answer:
          "We never ask for Aadhaar. Conversations are encrypted and stored only to improve the service — never sold.",
      },
    ],
  },
  {
    id: "mandimitra",
    name: "MandiMitra",
    tagline: "Real-Time Mandi Price Intelligence",
    description:
      "Live prices from 500+ mandis, 7-day predictions and transport cost calculators — helping farmers pick the best market for every crop.",
    status: "coming_soon",
    category_id: "agriculture",
    icon: "📊",
    color: "#16A34A",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Notify me when MandiMitra launches"),
    youtube_video_id: "",
    features: [
      { icon: "📍", title: "500+ Mandi Coverage", description: "Live prices from every major APMC mandi in India." },
      { icon: "🔮", title: "7-Day Prediction", description: "AI price forecasts to help you time your sale." },
      { icon: "🎯", title: "Best Market Recommendation", description: "Get a ranked list of mandis by net profit." },
      { icon: "📲", title: "SMS Price Alerts", description: "Alerts delivered by SMS even without internet." },
      { icon: "🚚", title: "Transport Cost Calculator", description: "Know your real profit after transport." },
      { icon: "📉", title: "Historical Trends", description: "10-year price charts for every crop." },
    ],
    usecases: [],
    pricing: [],
    screenshots: [],
    testimonials: [],
    faq: [],
  },
  {
    id: "pashuseva",
    name: "PashuSeva",
    tagline: "Livestock Health & Insurance AI",
    description:
      "Cattle symptom checker, vet video consults, insurance claim help and vaccination scheduler — one assistant for every farmer with livestock.",
    status: "coming_soon",
    category_id: "agriculture",
    icon: "🐄",
    color: "#16A34A",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Notify me when PashuSeva launches"),
    youtube_video_id: "",
    features: [
      { icon: "🩺", title: "Symptom Checker", description: "Describe symptoms in Hindi and get a likely diagnosis." },
      { icon: "📹", title: "Vet Video Consult", description: "Connect to qualified vets over video in minutes." },
      { icon: "📑", title: "Insurance Claim Assistant", description: "Draft claims for livestock insurance end-to-end." },
      { icon: "💉", title: "Vaccination Scheduler", description: "Never miss a vaccination with smart reminders." },
      { icon: "🐃", title: "Breed Recommendation", description: "Pick the right breed for your region and budget." },
      { icon: "🌾", title: "Feed Calculator", description: "Optimal feed mix for milk yield and health." },
    ],
    usecases: [],
    pricing: [],
    screenshots: [],
    testimonials: [],
    faq: [],
  },

  // ============ FINANCE ============
  {
    id: "niyammitra",
    name: "NiyamMitra",
    tagline: "Bank Compliance AI Agent",
    description:
      "Track RBI circulars, build compliance checklists, prepare audits and file regulatory reports — a domain-aware AI copilot for Indian banks.",
    status: "live",
    category_id: "finance",
    icon: "🏛️",
    color: "#2563EB",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Hi NiyamMitra, I want a demo for my bank"),
    youtube_video_id: "",
    features: [
      { icon: "📜", title: "RBI Circular Tracker", description: "Real-time alerts for every RBI circular with impact summaries." },
      { icon: "✅", title: "Compliance Checklist Generator", description: "Auto-build checklists per circular, tailored to your bank." },
      { icon: "🔍", title: "Audit Preparation Assistant", description: "Prepare evidence and gap reports before any audit." },
      { icon: "⚠️", title: "Risk Assessment Tool", description: "Score risks across KYC, AML and operational areas." },
      { icon: "📨", title: "Regulatory Filing Helper", description: "Draft and review regulatory filings quickly." },
      { icon: "🎓", title: "Training Module AI", description: "On-demand training modules for every circular." },
    ],
    usecases: [
      {
        title: "Compliance officer beats the deadline",
        description:
          "A co-operative bank used NiyamMitra to draft a compliance note on new KYC guidelines in under an hour.",
      },
      {
        title: "Audit-ready in a week",
        description:
          "NiyamMitra helped a regional bank build evidence packs across 50 branches before a scheduled RBI audit.",
      },
    ],
    pricing: [
      {
        name: "Free Trial",
        price: "₹0",
        priceDetail: "14 days",
        features: ["5 users", "Circular alerts", "Basic checklists", "Email support"],
        cta: "Start Trial",
      },
      {
        name: "Professional",
        price: "₹999",
        priceDetail: "per month",
        features: [
          "20 users",
          "Full checklist builder",
          "Audit prep",
          "Risk scoring",
          "Priority support",
        ],
        cta: "Subscribe",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Unlimited users",
          "On-prem deployment",
          "SSO + audit logs",
          "Custom integrations",
          "Dedicated CSM",
        ],
        cta: "Contact Sales",
      },
    ],
    screenshots: [],
    testimonials: [
      {
        name: "Priya S.",
        location: "Mumbai",
        occupation: "Compliance Officer",
        quote: "We cut our circular-review time by 70%. NiyamMitra is a godsend for mid-sized banks.",
        rating: 5,
      },
      {
        name: "Anand Rao",
        location: "Hyderabad",
        occupation: "Bank Auditor",
        quote: "The audit prep module saved us weeks before an RBI inspection. Every question had evidence ready.",
        rating: 5,
      },
      {
        name: "Meera Iyer",
        location: "Chennai",
        occupation: "Regulatory Head",
        quote: "Our team finally sleeps on weekends. NiyamMitra tracks every circular so we don't have to.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Is data stored in India?",
        answer: "Yes. All data stays on Indian soil on Cloudflare and AWS Mumbai.",
      },
      {
        question: "Can NiyamMitra integrate with our internal systems?",
        answer: "Enterprise customers get custom integrations with LOS, CBS and audit tools.",
      },
      {
        question: "Who is behind NiyamMitra?",
        answer: "Built by ex-banking professionals with deep expertise in RBI regulation.",
      },
    ],
  },
  {
    id: "loansathi",
    name: "LoanSathi",
    tagline: "Loan Eligibility & EMI Calculator",
    description:
      "Check eligibility across personal, home, car and business loans in one place. Get the best loan combination, EMI schedule and nearest bank.",
    status: "live",
    category_id: "finance",
    icon: "💳",
    color: "#2563EB",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Hi LoanSathi, I want a loan eligibility check"),
    youtube_video_id: "",
    features: [
      { icon: "🧮", title: "Multi-Loan Eligibility", description: "One check, all major banks and NBFCs." },
      { icon: "📆", title: "EMI Calculator", description: "See full schedules, prepayment impact and total interest." },
      { icon: "🎯", title: "Best Combination Finder", description: "We pick the mix that minimises your total EMI." },
      { icon: "📋", title: "Document Checklist", description: "Exact documents needed for each loan." },
      { icon: "🏦", title: "Nearest Bank Finder", description: "Find branches that are most likely to say yes." },
      { icon: "📲", title: "Application Tracker", description: "Follow your application status in one place." },
    ],
    usecases: [],
    pricing: [
      {
        name: "Free",
        price: "₹0",
        features: ["Basic eligibility check", "EMI calculator", "Document checklist"],
        cta: "Start Free",
      },
      {
        name: "Premium",
        price: "₹199",
        priceDetail: "per month",
        features: [
          "Unlimited eligibility checks",
          "Best loan combination",
          "Application tracking",
          "Priority support",
        ],
        cta: "Go Premium",
        highlighted: true,
      },
    ],
    screenshots: [],
    testimonials: [
      {
        name: "Arjun Mehta",
        location: "Pune",
        occupation: "Software Engineer",
        quote: "Found a home loan 0.8% cheaper than what my current bank offered. Saved lakhs.",
        rating: 5,
      },
      {
        name: "Kavita Singh",
        location: "Delhi NCR",
        occupation: "HR Manager",
        quote: "LoanSathi compared 12 banks for my car loan in 30 seconds. The document checklist was perfect.",
        rating: 5,
      },
      {
        name: "Nitin Sharma",
        location: "Bengaluru",
        occupation: "Small Business Owner",
        quote: "Got a ₹25 lakh business loan approved in 10 days. Would never have managed without this tool.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Do you store my financial data?",
        answer: "No, calculations happen on the fly. We don't store salary slips or statements.",
      },
      {
        question: "Are the interest rates up to date?",
        answer: "Yes, we refresh published rates from RBI and bank websites daily.",
      },
    ],
  },
  {
    id: "khatabook-ai",
    name: "KhataBook AI",
    tagline: "AI-Powered Smart Bookkeeping",
    description:
      "Voice-based bookkeeping in Hindi, auto GST, invoice generator and tax filing assistant — for every Indian small business owner.",
    status: "coming_soon",
    category_id: "finance",
    icon: "📒",
    color: "#2563EB",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Notify me when KhataBook AI launches"),
    youtube_video_id: "",
    features: [
      { icon: "🎙️", title: "Voice Entry in Hindi", description: "Just speak: 'आज 2000 रुपये का माल बेचा'." },
      { icon: "🧾", title: "Auto GST Calculation", description: "Real-time GST on every transaction." },
      { icon: "📄", title: "Invoice Generator", description: "Create branded invoices in 10 seconds." },
      { icon: "🏷️", title: "Expense Categorisation", description: "AI auto-categorises every expense." },
      { icon: "💹", title: "Cash Flow Prediction", description: "Know your balance 30 days in advance." },
      { icon: "🧑‍⚖️", title: "Tax Filing Assistant", description: "Guided GSTR and ITR filing help." },
    ],
    usecases: [],
    pricing: [],
    screenshots: [],
    testimonials: [],
    faq: [],
  },

  // ============ EDUCATION ============
  {
    id: "vidyabot",
    name: "VidyaBot",
    tagline: "Scholarship & Career Guidance AI",
    description:
      "1000+ scholarships, eligibility auto-match, application help, career guidance and mentor connect — a personal counsellor for every Indian student.",
    status: "coming_soon",
    category_id: "education",
    icon: "🎓",
    color: "#7C3AED",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Notify me when VidyaBot launches"),
    youtube_video_id: "",
    features: [
      { icon: "💰", title: "1000+ Scholarships", description: "Central, state and private scholarships in one database." },
      { icon: "🎯", title: "Eligibility Auto-Match", description: "Get scholarships matched to your profile in seconds." },
      { icon: "📝", title: "Application Assistant", description: "Step-by-step help with forms and essays." },
      { icon: "🧭", title: "Career Guidance", description: "AI career paths based on your interests and strengths." },
      { icon: "📚", title: "Exam Prep Tips", description: "Personalised tips for JEE, NEET, UPSC and state exams." },
      { icon: "🤝", title: "Mentor Connect", description: "Chat with mentors who have walked your path." },
    ],
    usecases: [],
    pricing: [],
    screenshots: [],
    testimonials: [],
    faq: [],
  },
  {
    id: "parikshamitra",
    name: "ParikshaMitra",
    tagline: "AI Exam Preparation Assistant",
    description:
      "Personalised study plans, Hindi practice questions, doubt solving on WhatsApp and previous-year analysis for every major Indian exam.",
    status: "coming_soon",
    category_id: "education",
    icon: "📘",
    color: "#7C3AED",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Notify me when ParikshaMitra launches"),
    youtube_video_id: "",
    features: [
      { icon: "📅", title: "Personalised Study Plan", description: "Plans adapted to your strengths and exam date." },
      { icon: "❓", title: "Practice Questions", description: "Thousands of questions in Hindi and English." },
      { icon: "💡", title: "Doubt Solver", description: "Send a photo of your doubt and get an instant solution." },
      { icon: "📊", title: "Previous Year Analysis", description: "Focus on what's actually asked." },
      { icon: "📈", title: "Performance Tracker", description: "See progress by subject and topic." },
      { icon: "🎯", title: "Subject-wise Tips", description: "High-yield shortcuts for every subject." },
    ],
    usecases: [],
    pricing: [],
    screenshots: [],
    testimonials: [],
    faq: [],
  },

  // ============ LEGAL ============
  {
    id: "nyaymitra",
    name: "NyayMitra",
    tagline: "Legal Help for Common People",
    description:
      "RTI drafting, consumer complaints, property disputes, labour law, FIR help and legal notice templates — jargon-free, in your language.",
    status: "coming_soon",
    category_id: "legal",
    icon: "⚖️",
    color: "#DC2626",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Notify me when NyayMitra launches"),
    youtube_video_id: "",
    features: [
      { icon: "📬", title: "RTI Application Drafter", description: "Generate RTI applications ready to send." },
      { icon: "🛒", title: "Consumer Complaints", description: "Draft complaints under CPA 2019." },
      { icon: "🏠", title: "Property Dispute Guidance", description: "Understand your rights and next steps." },
      { icon: "👷", title: "Labour Law Explainer", description: "Know your rights under Indian labour codes." },
      { icon: "🚨", title: "FIR Filing Guide", description: "Step-by-step help to file an FIR correctly." },
      { icon: "📝", title: "Legal Notice Templates", description: "Ready templates for common situations." },
    ],
    usecases: [],
    pricing: [],
    screenshots: [],
    testimonials: [],
    faq: [],
  },
  {
    id: "udyamsathi",
    name: "UdyamSathi",
    tagline: "MSME Compliance & Growth Assistant",
    description:
      "GST compliance, MSME registration, dispute resolution under MSMED Act, delayed payment recovery and tender discovery — all in one place.",
    status: "beta",
    category_id: "legal",
    icon: "🏭",
    color: "#DC2626",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Hi UdyamSathi, I want to join the beta"),
    youtube_video_id: "",
    features: [
      { icon: "📊", title: "GST Compliance Tracker", description: "Never miss a filing deadline again." },
      { icon: "🏷️", title: "MSME Registration Guide", description: "Register on Udyam in under 10 minutes." },
      { icon: "⚖️", title: "MSMED Act Disputes", description: "File disputes under Section 15 properly." },
      { icon: "💸", title: "Payment Recovery", description: "Recover delayed payments with legal notices." },
      { icon: "📜", title: "License Checklist", description: "Licenses and permits required for your business." },
      { icon: "🏛️", title: "Tender Finder", description: "Government tenders that match your profile." },
    ],
    usecases: [],
    pricing: [
      {
        name: "Beta",
        price: "Free",
        priceDetail: "while in beta",
        features: [
          "All features",
          "Priority support",
          "Lifetime 50% discount after beta",
        ],
        cta: "Join Beta",
        highlighted: true,
      },
    ],
    screenshots: [],
    testimonials: [
      {
        name: "Deepak Patil",
        location: "Nashik",
        occupation: "MSME Owner",
        quote: "Recovered ₹3.2 lakh of delayed payments in 40 days using the MSMED Act notice feature.",
        rating: 5,
      },
      {
        name: "Farhan Sheikh",
        location: "Ahmedabad",
        occupation: "Textile Exporter",
        quote: "GST tracker alone saved us a late-filing penalty. The tender finder surfaces deals we'd miss.",
        rating: 5,
      },
    ],
    faq: [],
  },

  // ============ EVENTS ============
  {
    id: "eventkhata",
    name: "EventKhata",
    tagline: "AI Event Management Tool",
    description:
      "Guest lists, AI-suggested budgets, vendor comparisons, invitation design and post-event analytics — planning events has never been this easy.",
    status: "live",
    category_id: "events",
    icon: "🎪",
    color: "#EA580C",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Hi EventKhata, I want to plan an event"),
    youtube_video_id: "",
    features: [
      { icon: "👥", title: "Guest List Management", description: "Invite, track RSVPs and seat everyone." },
      { icon: "💰", title: "AI Budget Tracker", description: "Smart suggestions to cut costs without compromise." },
      { icon: "🔍", title: "Vendor Finder", description: "Compare caterers, decorators and DJs in your city." },
      { icon: "💌", title: "Invitation Designer", description: "Beautiful digital invites in seconds." },
      { icon: "📅", title: "Day-of Scheduler", description: "Minute-by-minute schedule shared with your team." },
      { icon: "📊", title: "Post-Event Analytics", description: "Know what worked and what didn't." },
    ],
    usecases: [
      {
        title: "500-guest wedding under budget",
        description:
          "A family in Jaipur planned a 500-guest wedding ₹2 lakh under budget using EventKhata's vendor suggestions.",
      },
    ],
    pricing: [
      {
        name: "Free",
        price: "₹0",
        features: ["Up to 50 guests", "Basic budget tracker", "1 event at a time"],
        cta: "Start Free",
      },
      {
        name: "Pro",
        price: "₹299",
        priceDetail: "per event",
        features: [
          "Unlimited guests",
          "AI budget + vendor finder",
          "Invitation designer",
          "Day-of scheduler",
          "Analytics",
        ],
        cta: "Buy Pro",
        highlighted: true,
      },
    ],
    screenshots: [],
    testimonials: [
      {
        name: "Rohit & Aparna",
        location: "Jaipur",
        occupation: "Newlyweds",
        quote: "We planned our wedding in 3 weeks. EventKhata even found our caterer.",
        rating: 5,
      },
      {
        name: "Neha Kapoor",
        location: "Gurgaon",
        occupation: "Corporate Event Manager",
        quote: "I run 15 events a month. EventKhata's budget tracker alone pays for itself every week.",
        rating: 5,
      },
      {
        name: "Vikram Reddy",
        location: "Hyderabad",
        occupation: "Father of the bride",
        quote: "Guest list, vendors, schedule — everything in one chat. Zero spreadsheets.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Can I manage multiple events?",
        answer: "Yes, Pro supports unlimited events. The Free plan allows one event at a time.",
      },
    ],
  },

  // ============ HEALTH ============
  {
    id: "graminvaidya",
    name: "GraminVaidya",
    tagline: "Rural Health Advisory AI",
    description:
      "Symptom checker in Hindi, AYUSH remedies, nearest PHC finder, medicine reminders and telemedicine connect — health guidance for every village.",
    status: "coming_soon",
    category_id: "health",
    icon: "🏥",
    color: "#0D9488",
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_link: WA("Notify me when GraminVaidya launches"),
    youtube_video_id: "",
    features: [
      { icon: "🩺", title: "Hindi Symptom Checker", description: "Describe symptoms in your language, get likely causes." },
      { icon: "🌿", title: "AYUSH Remedies", description: "Evidence-backed Ayurveda, Yoga and Unani suggestions." },
      { icon: "🏥", title: "Nearest PHC/Hospital", description: "Find the closest government health facility." },
      { icon: "⏰", title: "Medicine Reminder", description: "Never miss a dose again." },
      { icon: "🏛️", title: "Health Scheme Finder", description: "Ayushman Bharat, Janani Suraksha and more." },
      { icon: "📞", title: "Telemedicine Connect", description: "Connect to certified doctors in minutes." },
    ],
    usecases: [],
    pricing: [],
    screenshots: [],
    testimonials: [],
    faq: [],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category_id === categoryId);
}

export function getLiveProducts(): Product[] {
  return products.filter((p) => p.status === "live");
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.status === "live").slice(0, 4);
}

const STATUS_ORDER: Record<string, number> = { live: 0, beta: 1, coming_soon: 2 };
export function sortByStatus(list: Product[]): Product[] {
  return [...list].sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);
}
