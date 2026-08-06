"use client";

import { ShoppingBag, Heart, ShieldCheck, Truck, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onAddToCart: () => void;
  onToggleWishlist: () => void;
  wishlisted: boolean;
}

export default function ProductActions({
  onAddToCart,
  onToggleWishlist,
  wishlisted,
}: Props) {
  return (
    <section className="mt-12">

      {/* Add To Cart */}

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onAddToCart}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 py-5 text-sm font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_20px_45px_rgba(220,38,38,.35)]"
      >
        <ShoppingBag size={20} />
        Add To Cart
      </motion.button>

      {/* Wishlist */}

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onToggleWishlist}
        className={`mt-4 flex w-full items-center justify-center gap-3 rounded-2xl border py-5 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
          wishlisted
            ? "border-red-600 bg-red-600 text-white"
            : "border-white/10 bg-[#101010] text-white hover:border-red-600 hover:bg-[#171717]"
        }`}
      >
        <Heart
          size={18}
          className={wishlisted ? "fill-white" : ""}
        />

        {wishlisted ? "Wishlisted" : "Add To Wishlist"}
      </motion.button>

      {/* Trust Section */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6">

        <div className="flex items-center gap-3">
          <PackageCheck
            size={18}
            className="text-red-500"
          />
          <span className="text-sm text-neutral-300">
            Premium 240 GSM Cotton
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Truck
            size={18}
            className="text-red-500"
          />
          <span className="text-sm text-neutral-300">
            Fast Shipping Across India
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ShieldCheck
            size={18}
            className="text-red-500"
          />
          <span className="text-sm text-neutral-300">
            Secure Payments
          </span>
        </div>

      </div>

    </section>
  );
}