import Link from "next/link";
import { ArrowRight, BellRing } from "lucide-react";
import type { Product } from "@/data/types";
import { getCategoryById } from "@/data/categories";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryById(product.category_id);
  const isLive = product.status === "live" || product.status === "beta";

  return (
    <div
      className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{ borderTopColor: product.color, borderTopWidth: 3 }}
    >
      <div className="flex items-start justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl"
          style={{ backgroundColor: `${product.color}15` }}
        >
          {product.icon}
        </div>
        <StatusBadge status={product.status} />
      </div>

      <Link href={`/products/${product.category_id}/${product.id}`} className="flex-1">
        <h3 className="mt-5 font-heading text-lg font-bold group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
      </Link>

      {category && (
        <div className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
          {category.icon} {category.name}
        </div>
      )}

      <div className="mt-5">
        {isLive ? (
          <Button asChild size="sm" variant="accent" className="w-full">
            <a
              href={product.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Now <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button asChild size="sm" variant="outline" className="w-full">
            <a
              href={product.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BellRing className="h-4 w-4" /> Notify Me
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
