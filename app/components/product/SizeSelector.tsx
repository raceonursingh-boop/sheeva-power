"use client";

import { motion } from "framer-motion";

interface Props {
  selected: string;
  onSelect: (size: string) => void;
}

const sizes = ["S", "M", "L", "XL"];

export default function SizeSelector({
  selected,
  onSelect,
}: Props) {
  return (
    <section className="mt-12">

      <div className="mb-5 flex items-center justify-between">

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Select Size
        </p>

        <button
          type="button"
          className="text-xs uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white"
        >
          Size Guide
        </button>

      </div>

      <div className="grid grid-cols-4 gap-3">

        {sizes.map((size) => {
          const active = selected === size;

          return (
            <motion.button
              key={size}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(size)}
              className={`
                h-14
                rounded-2xl
                border
                text-sm
                font-bold
                uppercase
                transition-all
                duration-300
                ${
                  active
                    ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/25"
                    : "border-white/10 bg-[#101010] text-white hover:border-red-600 hover:bg-[#171717]"
                }
              `}
            >
              {size}
            </motion.button>
          );
        })}

      </div>

    </section>
  );
}