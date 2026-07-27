"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

      <motion.div
        className="relative z-10 max-w-5xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-black uppercase leading-none text-white md:text-[8rem]"
        >
          STAY
          <br />
          POWERFUL.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 space-y-4 text-xl text-gray-400"
        >
          <p>Built for everyone.</p>
          <p>For everything.</p>
          <p>For every memory.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
