"use client";

import { motion } from "framer-motion";

const items = [
  "240 GSM PREMIUM COTTON",
  "BUILT FOR EVERY JOURNEY",
  "OVERSIZED FIT",
  "PREMIUM QUALITY",
  "FREE SHIPPING",
  "STREETWEAR",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#080808] py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-8 text-sm font-bold uppercase tracking-[0.35em] text-gray-400"
          >
            <span>{item}</span>

            <span className="text-red-600">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}