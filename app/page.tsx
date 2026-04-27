import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CategorySpotlight } from "@/components/home/CategorySpotlight";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsCounter } from "@/components/home/StatsCounter";
import { CompanyVideo } from "@/components/home/CompanyVideo";
import { Testimonials } from "@/components/home/Testimonials";
import { Recognition } from "@/components/home/Recognition";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <CategorySpotlight />
      <HowItWorks />
      <StatsCounter />
      <CompanyVideo />
      <Testimonials />
      <Recognition />
      <CTABanner />
    </>
  );
}
