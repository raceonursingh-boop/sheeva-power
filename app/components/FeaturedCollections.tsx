"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "POWER",
    description: "Built for training and performance.",
    href: "/collections/power",
  },
  {
    title: "STREET",
    description: "Designed for everyday movement.",
    href: "/collections/street",
  },
  {
    title: "CAMPUS",
    description: "Comfort meets everyday style.",
    href: "/collections/campus",
  },
  {
    title: "NIGHT",
    description: "Minimal pieces for every evening.",
    href: "/collections/night",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-black px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.45em] text-red-500">
            Collections
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Shop By Collection
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Every collection is built with a different journey in mind.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {collections.map((collection) => (

            <motion.div
              key={collection.title}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <Link
                href={collection.href}
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-10 transition-all duration-300 hover:border-red-600"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <h3 className="text-3xl font-black uppercase text-white">
                    {collection.title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-400">
                    {collection.description}
                  </p>

                  <div className="mt-12 flex items-center gap-3 font-bold uppercase tracking-widest text-red-500 transition-all group-hover:gap-5">

                    Explore

                    <ArrowRight size={18} />

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}