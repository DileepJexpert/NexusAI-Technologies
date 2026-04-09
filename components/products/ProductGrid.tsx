"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Fuse from "fuse.js";
import { products as allProducts, sortByStatus } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

const fuse = new Fuse(allProducts, {
  keys: ["name", "tagline", "description", "features.title"],
  threshold: 0.35,
});

export function ProductGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    let list = allProducts;
    if (query.trim()) {
      list = fuse.search(query).map((r) => r.item);
    }
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category_id === activeCategory);
    }
    return sortByStatus(list);
  }, [query, activeCategory]);

  return (
    <div>
      <div className="relative mx-auto max-w-2xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products — e.g. mandi prices, scheme, loan..."
          className="w-full rounded-full border bg-background py-3.5 pl-12 pr-4 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <CategoryChip
          active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        >
          All Products
        </CategoryChip>
        {categories.map((c) => (
          <CategoryChip
            key={c.id}
            active={activeCategory === c.id}
            color={c.color}
            onClick={() => setActiveCategory(c.id)}
          >
            {c.icon} {c.name}
          </CategoryChip>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-muted-foreground">
          No products found. Try a different search.
        </div>
      )}
    </div>
  );
}

function CategoryChip({
  children,
  active,
  onClick,
  color,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all",
        active
          ? "border-transparent bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-background text-foreground hover:border-primary/40"
      )}
      style={active && color ? { backgroundColor: color, borderColor: color } : undefined}
    >
      {children}
    </button>
  );
}
