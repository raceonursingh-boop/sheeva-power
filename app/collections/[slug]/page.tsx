import { notFound } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/Products";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collectionName = slug.toUpperCase();

  const collectionProducts = products.filter(
    (product) => product.collection === collectionName
  );

  if (collectionProducts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-6xl font-black uppercase">
          {collectionName}
        </h1>

        <p className="mb-16 max-w-2xl text-lg text-gray-400">
          Discover the {collectionName} Collection by Sheeva Power.
          Built for every journey.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collectionProducts.map((product) => (
         <ProductCard
  key={product.id}
  id={product.product_id}
  name={product.name}
  price={product.price}
  image={product.image}
  badge={product.badge}
  material={product.material}
/>
          ))}
        </div>
      </div>
    </main>
  );
}