import ProductCard from "./ProductCard";
import { products } from "../data/Products";

export default function Products() {
  return (
    <section className="bg-black py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center uppercase tracking-[0.5em] text-red-500">
          DROP 001
        </p>

        <h2 className="mb-16 text-center text-5xl font-black uppercase text-white">
          Featured Collection
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
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
      </div>
    </section>
  );
}