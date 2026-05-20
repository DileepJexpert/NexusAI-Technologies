import { SectionHeading } from "@/components/shared/SectionHeading";
import { Play } from "lucide-react";

export function CompanyVideo() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Watch"
          title="See Katixo in motion"
          subtitle="A short look at how Katixo brings product strategy, AI tooling and delivery operations together under one brand."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="absolute inset-0 gradient-primary flex items-center justify-center">
              <div className="text-center text-white">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Play className="ml-1 h-8 w-8 fill-white" />
                </div>
                <p className="mt-4 text-sm text-slate-300">Brand film coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
