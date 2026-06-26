"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">
      {/* Background Glows */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute bottom-20 left-20 h-52 w-52 rounded-full bg-red-700/10 blur-[120px]" />

      <motion.div
        className="relative z-10 max-w-5xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="mb-8 uppercase tracking-[0.7em] text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          PERFORMANCE STREETWEAR
        </motion.p>

        <motion.h1
          className="text-7xl font-black uppercase leading-none text-white md:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          SHEEVA
        </motion.h1>

        <motion.h1
          className="text-7xl font-black uppercase leading-none text-red-600 md:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          POWER
        </motion.h1>

        <motion.p
          className="mx-auto mt-10 max-w-2xl text-xl leading-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Built for athletes, creators and relentless minds.
          Every piece is designed to push you further.
        </motion.p>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button>SHOP NOW</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}