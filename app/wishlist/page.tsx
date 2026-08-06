"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/Products";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

 const savedProducts = products.filter((product) =>
  wishlist.some((item) => item.id === product.product_id)
);

  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-5xl font-black uppercase text-white">
          Wishlist ❤️
        </h1>

        {savedProducts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#111] p-12 text-center">
            <p className="text-xl text-gray-400">
              Your wishlist is empty.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-full bg-red-600 px-8 py-4 font-bold uppercase text-white hover:bg-red-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {savedProducts.map((product) => (
              <Link
                key={product.id}
            href={`/products/${product.product_id}`}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition hover:border-red-600"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-black text-white">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-gray-400">
                    {product.material}
                  </p>

                  <p className="mt-4 text-2xl font-bold text-red-500">
                    ₹{product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}