"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import HeroProducts from "./HeroProducts";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />

      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-40">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-sm uppercase tracking-[0.6em] text-red-600"
        >
          DROP 001
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-6xl font-black md:text-8xl xl:text-[10rem]"
        >
          SHEEVA
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .1 }}
          className="text-center text-6xl font-black text-red-600 md:text-8xl xl:text-[10rem]"
        >
          POWER
        </motion.h1>

        <p className="mt-8 max-w-xl text-center text-lg text-neutral-400">
          Built For Every Journey.
        </p>

        <Link
          href="/shop"
          className="mt-10 rounded-full border border-red-600 px-10 py-4 text-sm font-bold uppercase tracking-[0.3em] transition hover:bg-red-600"
        >
          SHOP COLLECTION
        </Link>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="mt-24"
        >
          <img
            src="/products/legacy-front.png"
            alt="Legacy"
            className="w-[420px] drop-shadow-[0_0_60px_rgba(220,38,38,.45)]"
          />
        </motion.div>

        <HeroProducts />

      </div>

    </section>
  );
}