import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { categories, getCategoryById } from "@/data/categories";
import { getProductsByCategory, sortByStatus } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface Params {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) return { title: "Category not found" };
  return {
    title: `${cat.name} AI Tools`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) notFound();

  const products = sortByStatus(getProductsByCategory(category));

  return (
    <>
      <section
        className="relative overflow-hidden py-20 text-white"
        style={{ background: `linear-gradient(135deg, ${cat.color}, ${cat.color}99)` }}
      >
        <div className="container-wide">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-white">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{cat.name}</span>
          </nav>
          <div className="flex items-center gap-6">
            <div className="text-7xl">{cat.icon}</div>
            <div>
              <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl">
                {cat.name}
              </h1>
              <p className="mt-2 max-w-2xl text-lg text-white/90">
                {cat.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            title={`All ${cat.name} products`}
            subtitle={`${products.length} ${products.length === 1 ? "product" : "products"} to help you thrive.`}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
