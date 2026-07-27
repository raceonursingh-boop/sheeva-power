"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Drop */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 uppercase tracking-[0.8em] text-red-500"
        >
          DROP 001
        </motion.p>

        {/* Brand */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-7xl font-black uppercase tracking-tight text-white md:text-[8rem]"
        >
          SHEEVA
        </motion.h1>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-7xl font-black uppercase tracking-tight text-white md:text-[8rem]"
        >
          POWER
        </motion.h1>

        {/* Product */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-2xl font-semibold uppercase tracking-[0.5em] text-gray-300"
        >
          CORE_001
        </motion.h2>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 space-y-2 text-lg text-gray-400"
        >
          <p>Built for everyone.</p>
          <p>For everything.</p>
          <p>For every memory.</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-14"
        >
          <Link
            href="/shop"
            className="inline-flex rounded-full border border-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            SHOP DROP 001
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}