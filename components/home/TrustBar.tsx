import { recognition } from "@/data/recognition";

const allItems = [...recognition, ...recognition];

export function TrustBar() {
  return (
    <div className="marquee-track border-y border-border bg-muted/40 py-3.5">
      <div className="marquee-inner gap-16">
        {allItems.map((r, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {r.name}
          </span>
        ))}
      </div>
    </div>
  );
}
