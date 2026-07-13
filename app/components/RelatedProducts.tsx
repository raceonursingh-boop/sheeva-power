import ProductCard from "./ProductCard";
import { products } from "../data/Products";

interface RelatedProductsProps {
  currentId: number;
}

export default function RelatedProducts({
  currentId,
}: RelatedProductsProps) {
  const related = products
    .filter((product) => product.id !== currentId)
    .slice(0, 4);

  return (
    <section>
      <h2 className="mb-8 text-4xl font-black uppercase text-white">
        You May Also Like
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {related.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            badge={product.badge}
            material={product.material}
          />
        ))}
      </div>
    </section>
  );
}