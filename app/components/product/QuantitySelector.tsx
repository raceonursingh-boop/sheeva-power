"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  setQuantity: (value: number) => void;
}

export default function QuantitySelector({
  quantity,
  setQuantity,
}: Props) {
  return (
    <section className="mt-10">

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
        Quantity
      </p>

      <div className="flex w-fit items-center rounded-2xl border border-white/10 bg-[#101010] p-1">

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() =>
            setQuantity(Math.max(1, quantity - 1))
          }
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition hover:bg-red-600"
        >
          <Minus size={18} />
        </motion.button>

        <div className="flex h-12 w-16 items-center justify-center text-lg font-bold text-white">
          {quantity}
        </div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() =>
            setQuantity(quantity + 1)
          }
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition hover:bg-red-600"
        >
          <Plus size={18} />
        </motion.button>

      </div>

    </section>
  );
}