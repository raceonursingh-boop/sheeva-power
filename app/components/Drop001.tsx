"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductReveal() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 uppercase tracking-[0.6em] text-red-500">
            DROP 001
          </p>

          <h2 className="text-5xl font-black uppercase leading-none text-white md:text-7xl">
            NOT JUST
            <br />
            ANOTHER
            <br />
            T-SHIRT.
          </h2>

          <p className="mt-10 max-w-lg text-lg leading-8 text-gray-400">
            CORE_001 is built to move with you.
            Heavyweight 240 GSM cotton.
            Relaxed oversized fit.
            Minimal design that belongs in every part
            of your life.
          </p>

          <Link
            href="/products/1"
            className="mt-12 inline-flex rounded-full border border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
          >
            VIEW CORE_001
          </Link>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl bg-[#0a0a0a] p-8">
            <Image
              src="/products/core-001/front.jpg"
              alt="CORE_001"
              width={900}
              height={900}
              priority
              className="mx-auto transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}