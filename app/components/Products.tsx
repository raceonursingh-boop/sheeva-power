import ProductCard from "./ProductCard";
import { getProducts } from "@/app/lib/products";

export default async function Products() {
  const products = await getProducts();

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
          {products.map((product: any) => (
            <ProductCard
              key={product.product_id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}