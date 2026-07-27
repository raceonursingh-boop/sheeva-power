"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "240 GSM",
    text: "Heavyweight premium cotton built to hold its structure wear after wear.",
  },
  {
    title: "OVERSIZED",
    text: "Relaxed proportions designed for movement and everyday comfort.",
  },
  {
    title: "MINIMAL",
    text: "Timeless essentials without unnecessary graphics or distractions.",
  },
  {
    title: "EVERY MEMORY",
    text: "Built to move with you through the gym, college, travel and everything in between.",
  },
];

export default function WhySheeva() {
  return (
    <section className="bg-[#050505] py-40 px-6">
      <div className="mx-auto max-w-7xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-red-500 uppercase tracking-[0.6em]"
        >
          WHY SHEEVA POWER
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-black uppercase text-white md:text-7xl"
        >
          BUILT TO LAST.
        </motion.h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-10 transition duration-300 hover:border-red-600"
            >
              <h3 className="text-3xl font-black text-white">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}