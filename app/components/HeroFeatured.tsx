"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const shirts = [
  {
    name: "REBEL",
    slug: "rebel",
    image: "/products/rebel-front.png",
  },
  {
    name: "CORE",
    slug: "core-001",
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

export default function HeroFeatured() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28">

      <div className="flex flex-col items-center">

        <p className="mb-12 text-xs uppercase tracking-[0.45em] text-neutral-500">
          Featured Designs
        </p>

        <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4">

          {shirts.map((shirt, index) => (
            <motion.div
              key={shirt.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
            >
              <Link
                href={`/products/${shirt.slug}`}
                className="group flex flex-col items-center"
              >
                <img
                  src={shirt.image}
                  alt={shirt.name}
                  className="h-72 object-contain transition duration-500 group-hover:-translate-y-3 group-hover:scale-105"
                />

                <span className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400 transition group-hover:text-white">
                  {shirt.name}
                </span>
              </Link>
            </motion.div>
          ))}

        </div>

        <Link
          href="/shop"
          className="mt-20 text-sm font-semibold uppercase tracking-[0.4em] text-neutral-400 transition hover:text-red-500"
        >
          EXPLORE DROP 001 →
        </Link>

      </div>

    </section>
  );
}