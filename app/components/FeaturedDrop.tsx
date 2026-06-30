"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedDrop() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-6 py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/5" />

      <div className="relative mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.45em] text-red-500"
        >
          DROP 01
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-5xl font-black uppercase leading-tight text-white md:text-7xl"
        >
          BUILT FOR
          <br />
          EVERY JOURNEY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          Heavyweight essentials designed for training,
          streetwear, college, travel and everyday life.
          Every piece is made to move with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-12"
        >
          <Link
            href="/shop"
            className="inline-flex rounded-full bg-red-600 px-10 py-5 font-bold uppercase tracking-widest text-white transition hover:scale-105 hover:bg-red-700"
          >
            Shop Drop
          </Link>
        </motion.div>

      </div>

    </section>
  );
}