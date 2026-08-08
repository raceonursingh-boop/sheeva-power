import Link from "next/link";
import Image from "next/image";

import { getProducts } from "@/app/lib/products";

export default async function WishlistPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-red-500">
              Saved Picks
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight md:text-6xl">
              Wishlist
            </h1>
          </div>

          <Link
            href="/shop"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.product_id}
              href={`/products/${product.product_id}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition duration-300 hover:border-red-500/40 hover:bg-[#111111]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-white">
                    {product.name}
                  </h2>

                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-red-400">
                    {product.badge}
                  </span>
                </div>

                <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                  {product.material}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-black text-white">
                    ₹{product.price}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition group-hover:text-red-400">
                    View Product
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}