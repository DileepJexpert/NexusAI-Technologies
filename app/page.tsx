import { Hero } from "@/components/home/Hero";
import { FeatureTicker } from "@/components/home/FeatureTicker";
import { GstReformBanner } from "@/components/home/GstReformBanner";
import { CampfireBentoGrid } from "@/components/home/CampfireBentoGrid";
import { InteractiveVerticalSimulator } from "@/components/home/InteractiveVerticalSimulator";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureTicker />
      <GstReformBanner />
      <CampfireBentoGrid />
      <InteractiveVerticalSimulator />
      <PlatformShowcase />
      <CTABanner />
    </>
  );
}
