"use client";

import { motion } from "framer-motion";

const philosophy = [
  {
    title: "PURPOSE",
    text: "Every garment begins with intention. Nothing is added without a reason.",
  },
  {
    title: "DISCIPLINE",
    text: "Progress is built through consistency, not shortcuts or hype.",
  },
  {
    title: "LEGACY",
    text: "Create something worth remembering. Wear your ambition every day.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-black px-6 py-40 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.7em] text-red-500">
            OUR PHILOSOPHY
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl xl:text-8xl">
            PURPOSE.
            <br />
            DISCIPLINE.
            <br />
            LEGACY.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-400">
            Sheeva Power exists to create garments that outlive trends,
            inspire discipline and become part of your everyday journey.
          </p>
        </motion.div>

        {/* Philosophy */}

        <div className="mt-32 grid gap-16 lg:grid-cols-3">

          {philosophy.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="border-t border-neutral-800 pt-8">

                <h3 className="text-3xl font-black uppercase">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-neutral-400">
                  {item.text}
                </p>

              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}