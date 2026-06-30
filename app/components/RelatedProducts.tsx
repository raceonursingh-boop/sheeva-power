"use client";

import Link from "next/link";
import Image from "next/image";
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
    <section className="mt-24">
      <h2 className="mb-10 text-center text-4xl font-black uppercase text-white">
        You May Also Like
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition hover:border-red-600"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-black uppercase text-white">
                {product.name}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                {product.material}
              </p>

              <p className="mt-4 text-2xl font-bold text-red-500">
                ₹{product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}