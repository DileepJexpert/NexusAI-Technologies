import { recognition } from "@/data/recognition";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const BADGE_COLORS = [
  { bg: "#EEF2FF", fg: "#4338CA" },
  { bg: "#FEF3C7", fg: "#D97706" },
  { bg: "#ECFDF5", fg: "#059669" },
  { bg: "#FEF2F2", fg: "#DC2626" },
  { bg: "#EFF6FF", fg: "#2563EB" },
];

export function Recognition() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="container-wide">
        <SectionHeading
          title="Recognized & powered by"
          subtitle="We partner with India's leading AI platforms and government initiatives."
          align="center"
        />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {recognition.map((r, idx) => {
            const palette = BADGE_COLORS[idx % BADGE_COLORS.length];
            const abbr = r.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <AnimateOnScroll key={r.name} delay={idx * 0.06}>
                <div className="group flex items-center gap-3 rounded-xl border bg-background px-5 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-heading text-sm font-bold"
                    style={{ backgroundColor: palette.bg, color: palette.fg }}
                  >
                    {abbr}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {r.name}
                  </span>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
