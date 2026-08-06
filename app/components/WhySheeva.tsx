"use client";

import { motion } from "framer-motion";

export default function WhySheeva() {
  return (
    <section className="bg-[#050505] px-6 py-40 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.7em] text-red-500">
            WHY SHEEVA POWER
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl xl:text-8xl">
            WE DON'T
            <br />
            FOLLOW
            <br />
            TRENDS.
          </h2>
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-24 grid gap-20 lg:grid-cols-2"
        >
          <div>
            <p className="text-3xl font-light leading-relaxed text-neutral-300">
              We build garments designed to become part of your everyday life.
              Heavyweight fabrics. Timeless silhouettes. Purpose before hype.
            </p>
          </div>

          <div className="space-y-10">

            <div className="border-t border-neutral-800 pt-8">
              <h3 className="text-2xl font-black uppercase">
                250 GSM
              </h3>

              <p className="mt-4 text-neutral-400 leading-8">
                Heavyweight premium cotton built to keep its shape and feel,
                wear after wear.
              </p>
            </div>

            <div className="border-t border-neutral-800 pt-8">
              <h3 className="text-2xl font-black uppercase">
                OVERSIZED FIT
              </h3>

              <p className="mt-4 text-neutral-400 leading-8">
                Relaxed proportions that balance comfort, movement and everyday wear.
              </p>
            </div>

            <div className="border-t border-neutral-800 pt-8">
              <h3 className="text-2xl font-black uppercase">
                DESIGNED WITH PURPOSE
              </h3>

              <p className="mt-4 text-neutral-400 leading-8">
                Every graphic, fabric choice and fit exists for a reason.
                Nothing is added without intention.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}