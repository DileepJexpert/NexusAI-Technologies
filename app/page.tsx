import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTABanner } from "@/components/home/CTABanner";
import { SeoBusinessSections } from "@/components/home/SeoBusinessSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SeoBusinessSections />
      <HowItWorks />
      <CTABanner />
    </>
  );
}
