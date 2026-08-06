import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({
  products,
}: RelatedProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-8 text-4xl font-black uppercase text-white">
        You May Also Like
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
