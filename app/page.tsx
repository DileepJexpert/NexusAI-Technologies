import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsCounter } from "@/components/home/StatsCounter";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { SeoBusinessSections } from "@/components/home/SeoBusinessSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SeoBusinessSections />
      <HowItWorks />
      <StatsCounter />
      <Testimonials />
      <CTABanner />
    </>
  );
}
