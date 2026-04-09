import { recognition } from "@/data/recognition";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Recognition() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="container-wide">
        <SectionHeading
          title="Recognized & powered by"
          subtitle="We partner with India's leading AI platforms and government initiatives."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {recognition.map((r) => (
            <div
              key={r.name}
              className="flex h-16 items-center justify-center rounded-lg border bg-background px-4 text-center text-sm font-semibold text-muted-foreground opacity-70 transition-opacity hover:opacity-100"
            >
              {r.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
