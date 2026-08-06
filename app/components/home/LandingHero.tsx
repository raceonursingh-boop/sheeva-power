"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.75)_100%)]" />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24 lg:grid lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-8 text-xs uppercase tracking-[0.7em] text-red-500">
            DROP 001
          </p>

          <h1 className="text-6xl font-black leading-[0.88] tracking-tight md:text-7xl xl:text-8xl">
            SHEEVA
            <br />
            POWER
          </h1>

          <p className="mt-10 max-w-md text-lg leading-9 text-neutral-400">
            Ten designs.
            <br />
            One vision.
            <br />
            Crafted with purpose.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-red-600 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
            >
              Shop Drop 001
            </Link>

            <button
              onClick={() =>
                document
                  .getElementById("drop001")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-neutral-700 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Explore
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-20 flex justify-center lg:mt-0"
        >
          {/* Shadow */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.55, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 h-20 w-80 rounded-full bg-black blur-3xl"
          />

          {/* Floating Shirt */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.02,
              y: -16,
            }}
          >
            <Image
              src="/products/legacy-front.png"
              alt="Legacy Tee"
              width={760}
              height={760}
              priority
              className="select-none drop-shadow-[0_80px_120px_rgba(0,0,0,.85)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.6em] text-neutral-500"
      >
        SCROLL
      </motion.div>
    </section>
  );
}