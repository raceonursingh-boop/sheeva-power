"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    name: "CORE",
    front: "/products/core-001/front.jpg",
    back: "/products/core-001/back.jpg",
    href: "/products/1",
  },
  {
    name: "POWER CLUB",
    front: "/products/powerclub-front.png",
    back: "/products/powerclub-back.png",
    href: "/products/6",
  },
  {
    name: "REBEL",
    front: "/products/rebel-front.png",
    back: "/products/rebel-back.png",
    href: "/products/8",
  },
  {
    name: "NO LIMIT",
    front: "/products/nolimit-front.png",
    back: "/products/nolimit-back.png",
    href: "/products/9",
  },
];

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl items-center justify-items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:justify-items-stretch">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md text-center lg:max-w-none lg:text-left"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.7em] text-red-500">
              DROP 001
            </p>
<div className="flex justify-center lg:justify-start">
  <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-black via-[#080808] to-black px-4 py-3 transition-all duration-500">
    <Image
      src="/sheeva-logo-navbar.png"
      alt="Sheeva Power"
      width={520}
      height={104}
      priority
      className="h-20 w-auto opacity-95 mix-blend-screen transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:opacity-100 group-hover:drop-shadow-[0_0_28px_rgba(255,255,255,0.22)] sm:h-24 md:h-28 lg:h-32 xl:h-36"
    />

    {/* subtle moving glow */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
  </div>
</div>

            <p className="mt-6 text-base leading-7 text-neutral-400 sm:text-lg md:text-xl lg:max-w-lg">
              Built For Every Journey.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="/shop"
                className="rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_18px_40px_rgba(220,38,38,0.35)]"
              >
                SHOP DROP 001
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE - LEGACY */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex w-full justify-center lg:justify-end"
          >
            <Link href="/products/7" className="group block">
              <div className="relative h-[360px] w-[300px] sm:h-[480px] sm:w-[380px] md:h-[620px] md:w-[500px]">
                {/* FRONT */}
                <Image
                  src="/products/legacy-front.png"
                  alt="Legacy front"
                  fill
                  priority
                  className="object-contain transition-all duration-700 group-hover:scale-105 group-hover:opacity-0 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                />

                {/* BACK */}
                <Image
                  src="/products/legacy-back.png"
                  alt="Legacy back"
                  fill
                  className="object-contain opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
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
      <section className="bg-black px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center lg:mb-24"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.6em] text-red-500">
              THE COLLECTION
            </p>

            <h2 className="text-4xl font-black uppercase md:text-6xl lg:text-7xl">
              TEN DESIGNS.
              <br />
              ONE VISION.
            </h2>
          </motion.div>

          {/* 4 LARGE FLOATING SHIRTS */}
          <div className="grid grid-cols-1 gap-y-20 gap-x-10 sm:grid-cols-2 md:gap-x-16 lg:gap-x-20">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className={index % 2 === 0 ? "md:-mt-8" : "md:mt-8"}
              >
                <Link href={product.href} className="group block">
                  <div className="relative mx-auto h-[340px] w-full max-w-[340px] sm:h-[420px] sm:max-w-[420px] lg:h-[560px] lg:max-w-[520px]">
                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 rounded-full bg-red-600/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

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

                  <h3 className="mt-8 text-center text-lg font-bold uppercase tracking-[0.25em] transition duration-300 group-hover:text-red-500 sm:mt-10 sm:text-2xl sm:tracking-[0.35em]">
                    {product.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* SMALL BUTTON */}
          <div className="mt-20 flex justify-center lg:mt-24">
            <Link
              href="/shop"
              className="text-xs font-semibold uppercase tracking-[0.45em] text-neutral-400 transition-all duration-300 hover:text-red-500"
            >
              VIEW ALL TEN DESIGNS →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}