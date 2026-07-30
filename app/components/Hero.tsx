"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]" />

      {/* Ambient Blue Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D4ED8]/10 blur-[180px]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:70px_70px]" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Drop */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8 uppercase tracking-[0.8em] text-[#2563EB]"
        >
          DROP 001
        </motion.p>

        {/* SHEEVA */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-6xl font-black uppercase tracking-tight text-white md:text-[8rem] xl:text-[10rem]"
        >
          SHEEVA
        </motion.h1>

        {/* POWER */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-white via-[#60A5FA] to-[#1D4ED8] bg-clip-text text-6xl font-black uppercase tracking-tight text-transparent md:text-[8rem] xl:text-[10rem]"
        >
          POWER
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="my-10 h-px w-28 origin-center bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Product */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-xl font-semibold uppercase tracking-[0.6em] text-gray-400 md:text-2xl"
        >
          CORE_001
        </motion.h2>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="mt-10 max-w-xl space-y-2 text-lg leading-relaxed text-gray-500"
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
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#1D4ED8]
              px-10
              py-4
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-white
              shadow-xl
              shadow-blue-900/30
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#2563EB]
              hover:shadow-blue-700/50
            "
          >
            SHOP DROP 001
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-24 flex flex-col items-center text-gray-500"
        >
          <span className="mb-3 text-xs uppercase tracking-[0.45em]">
            Explore
          </span>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}