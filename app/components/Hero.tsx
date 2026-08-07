"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    name: "CORE",
    front: "/products/core-001/front.jpg",
    back: "/products/core-001/back.jpg",
    href: "/shop",
  },
  {
    name: "POWER CLUB",
    front: "/products/powerclub-front.png",
    back: "/products/powerclub-back.png",
    href: "/shop",
  },
  {
    name: "REBEL",
    front: "/products/rebel-front.png",
    back: "/products/rebel-back.png",
    href: "/products/rebel",
  },
  {
    name: "NO LIMIT",
    front: "/products/nolimit-front.png",
    back: "/products/nolimit-back.png",
    href: "/products/nolimit",
  },
];

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050505] px-6 pt-36 pb-28 text-white md:pt-44 md:pb-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.7em] text-red-500">
              SHEEVA POWER
            </p>

            <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl xl:text-8xl">
              BUILT
              <br />
              FOR THE
              <br />
              RELENTLESS
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400 md:text-xl lg:max-w-lg">
              Heavyweight oversized apparel crafted for training, travel, and everyday life.
              Minimal design. Maximum presence.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/shop"
                className="rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_18px_40px_rgba(220,38,38,0.35)]"
              >
                SHOP DROP 001
              </Link>

              <Link
                href="/shop"
                className="rounded-full border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-red-600 hover:bg-[#111111]"
              >
                VIEW COLLECTION
              </Link>
            </div>
          </motion.div>
{/* RIGHT SIDE - LEGACY */}
<motion.div
  initial={{ opacity: 0, x: 40, scale: 0.96 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="relative flex justify-center lg:justify-end"
>
  <Link href="/shop" className="group block">
    <div className="relative h-[540px] w-[420px] md:h-[620px] md:w-[500px] xl:h-[700px] xl:w-[560px]">
      {/* FRONT */}
      <Image
        src="/products/legacy-front.png"
        alt="Legacy front"
        fill
        priority
        className="object-contain transition-all duration-700 group-hover:opacity-0 group-hover:scale-105 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
      />

      {/* BACK */}
      <Image
        src="/products/legacy-back.png"
        alt="Legacy back"
        fill
        className="object-contain opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
      />
    </div>
  </Link>
</motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative mx-auto mt-16 flex max-w-7xl flex-col items-center text-neutral-500 lg:items-start"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">
            SCROLL
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="mt-3 h-10 w-px bg-gradient-to-b from-neutral-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* REVEAL SECTION */}
      <section className="bg-black px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-24 text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.6em] text-red-500">
              DROP 001
            </p>

            <h2 className="text-5xl font-black uppercase md:text-7xl">
              TEN DESIGNS.
              <br />
              ONE VISION.
            </h2>
          </motion.div>

          {/* 4 LARGE FLOATING SHIRTS */}
          <div className="grid gap-y-28 gap-x-20 md:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
              >
                <Link href={product.href} className="group block">
                  <div className="relative mx-auto h-[560px] w-full max-w-[520px]">
                    {/* FRONT */}
                    <Image
                      src={product.front}
                      alt={product.name}
                      fill
                      className="object-contain transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                    />

                    {/* BACK */}
                    <Image
                      src={product.back}
                      alt={`${product.name} back`}
                      fill
                      className="object-contain opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mt-10 text-center text-2xl font-bold uppercase tracking-[0.35em] transition duration-300 group-hover:text-red-500">
                    {product.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-28 flex justify-center">
            <Link
              href="/shop"
              className="rounded-full border border-white/15 px-10 py-4 text-sm font-black uppercase tracking-[0.35em] text-white transition-all duration-300 hover:border-red-600 hover:bg-red-600"
            >
              VIEW ALL TEN DESIGNS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}