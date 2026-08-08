import Link from "next/link";
import Image from "next/image";

import type { Product } from "../types/Product";

type Props = {
  products: Product[];
};

export default function RelatedProducts({ products }: Props) {
  if (!products.length) return null;

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-red-500">
              MORE FROM THE DROP
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
              Related Products
            </h2>
          </div>

          <Link
            href="/shop"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400 transition hover:text-red-500"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:border-red-500/40 hover:bg-[#111111]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2 border-t border-white/5 p-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.25em] transition-colors duration-300 group-hover:text-red-500">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">
                      ₹{product.price}
                    </span>

                    <span className="text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}