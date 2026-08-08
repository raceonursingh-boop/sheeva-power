"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "SHADOW",
    slug: "shadow",
    image: "/products/shadow-front.png",
  },
  {
    name: "CORE",
    slug: "core",
    image: "/products/core-001/front.jpg",
  },
  {
    name: "ASCEND",
    slug: "ascend",
    image: "/products/ascend-front.png",
  },
  {
    name: "CRIMSON",
    slug: "crimson",
    image: "/products/crimson-front.png",
  },
];

export default function HeroProducts() {
  return (
    <div className="mt-24 w-full max-w-7xl">
      <p className="mb-6 text-center text-sm uppercase tracking-[0.45em] text-neutral-500">
        Explore More
      </p>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mb-12 text-center text-3xl text-white"
      >
        ↓
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25 + index * 0.1,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >
            <Link
              href={`/products/${product.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition hover:border-red-600"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-center text-xl font-black tracking-[0.25em] text-white">
                  {product.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}