import { Hero } from "@/components/home/Hero";
import { CTABanner } from "@/components/home/CTABanner";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformShowcase />
      <CTABanner />
    </>
  );
}
