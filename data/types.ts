export type ProductStatus = "live" | "beta" | "coming_soon";

export interface Feature {
  icon: string;
  title: string;
  title_hi?: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  steps?: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  priceDetail?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  occupation: string;
  quote: string;
  quote_hi?: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  tagline_hi?: string;
  description: string;
  status: ProductStatus;
  category_id: string;
  icon: string;
  color: string;
  whatsapp_number: string;
  whatsapp_link: string;
  youtube_video_id: string;
  website_url?: string;
  features: Feature[];
  usecases: UseCase[];
  pricing: PricingTier[];
  screenshots: string[];
  testimonials: Testimonial[];
  faq: FAQ[];
}

export interface Category {
  id: string;
  name: string;
  name_hi: string;
  icon: string;
  color: string;
  description: string;
  image: string;
}
