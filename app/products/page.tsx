import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Finance ERP Products",
  description:
    "Explore Katixo finance ERP modules for accounting, GST review, bank reconciliation, reporting and business finance control in India.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="gradient-primary py-20 text-white">
        <div className="container-wide text-center">
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl text-balance">
            Our Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200 text-balance">
            Focused digital products, each built to solve a clear workflow or market problem.
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
