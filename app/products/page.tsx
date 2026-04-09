import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Explore every NexusAI product — AI assistants for agriculture, finance, legal, education, events and health, built for India.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Our Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            AI tools for every need — all delivered on WhatsApp.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide">
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
