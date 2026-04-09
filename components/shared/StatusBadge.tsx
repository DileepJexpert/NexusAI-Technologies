import { Badge } from "@/components/ui/badge";
import type { ProductStatus } from "@/data/types";

export function StatusBadge({ status }: { status: ProductStatus }) {
  if (status === "live") {
    return (
      <Badge variant="live" className="gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        LIVE
      </Badge>
    );
  }
  if (status === "beta") {
    return <Badge variant="beta">BETA</Badge>;
  }
  return <Badge variant="soon">COMING SOON</Badge>;
}
