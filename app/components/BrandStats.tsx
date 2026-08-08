"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "240",
    suffix: "GSM",
    title: "Heavyweight Cotton",
  },
  {
    number: "100",
    suffix: "%",
    title: "Premium Quality",
  },
  {
    number: "10",
    suffix: "+",
    title: "Future Collections",
  },
  {
    number: "24",
    suffix: "/7",
    title: "Built For Every Journey",
  },
];

export default function BrandStats() {
  return (
    <section className="bg-[#050505] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-[#111] p-10 text-center transition hover:border-red-600"
            >
              <h2 className="text-6xl font-black text-red-600">
                {stat.number}
                <span className="text-3xl">
                  {stat.suffix}
                </span>
              </h2>

              <p className="mt-6 text-gray-400">
                {stat.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
