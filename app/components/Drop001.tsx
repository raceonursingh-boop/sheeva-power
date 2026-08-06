"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    name: "CORE",
    front: "/products/core-001/front.jpg",
    back: "/products/core-001/back.jpg",
    href: "/products/1",
  },
  {
    name: "POWER CLUB",
    front: "/products/powerclub-front.png",
    back: "/products/powerclub-back.png",
    href: "/products/6",
  },
  {
    name: "REBEL",
    front: "/products/rebel-front.png",
    back: "/products/rebel-back.png",
    href: "/products/8",
  },
  {
    name: "NO LIMIT",
    front: "/products/nolimit-front.png",
    back: "/products/nolimit-back.png",
    href: "/products/9",
  },
];

export default function Drop001() {
  return (
    <section className="bg-[#050505] px-6 py-36 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-28 text-center"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.7em] text-red-500">
            DROP 001
          </p>

          <h2 className="text-5xl font-black uppercase md:text-7xl">
            TEN DESIGNS.
            <br />
            ONE VISION.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Every design tells its own story.
            Created with purpose.
            Designed to be worn.
          </p>
        </motion.div>

        {/* Products */}

        <div className="grid gap-y-28 gap-x-20 md:grid-cols-2">

          {featuredProducts.map((product, index) => (

            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <Link href={product.href} className="group block">

                <div className="relative mx-auto h-[520px] w-full max-w-md">

                  {/* Front */}

                  <Image
                    src={product.front}
                    alt={product.name}
                    fill
                    className="object-contain transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                  />

                  {/* Back */}

                  <Image
                    src={product.back}
                    alt={product.name}
                    fill
                    className="object-contain opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />

                </div>

                <h3 className="mt-10 text-center text-2xl font-bold uppercase tracking-[0.35em] transition duration-500 group-hover:text-red-500">
                  {product.name}
                </h3>

              </Link>
            </motion.div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-32 flex justify-center">

          <Link
            href="/shop"
            className="rounded-full border border-neutral-700 px-10 py-4 text-sm font-semibold uppercase tracking-[0.35em] transition-all duration-500 hover:border-red-600 hover:bg-red-600"
          >
            VIEW ALL TEN DESIGNS
          </Link>

        </div>

      </div>
    </section>
  );
}