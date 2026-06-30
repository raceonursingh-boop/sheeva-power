"use client";

import { ShoppingBag, Heart } from "lucide-react";

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
    <div className="mt-10 grid grid-cols-2 gap-4">

      <button
        onClick={onAddToCart}
        className="flex items-center justify-center gap-2 rounded-full bg-red-600 py-5 font-bold uppercase tracking-widest text-white transition hover:bg-red-700"
      >
        <ShoppingBag size={18} />
        Add To Cart
      </button>

      <button
        onClick={onToggleWishlist}
        className={`flex items-center justify-center gap-2 rounded-full border py-5 font-bold uppercase tracking-widest transition ${
          wishlisted
            ? "border-red-600 bg-red-600 text-white"
            : "border-white/10 text-white hover:border-red-600"
        }`}
      >
        <Heart
          size={18}
          className={wishlisted ? "fill-white" : ""}
        />

        {wishlisted ? "Wishlisted" : "Wishlist"}
      </button>

    </div>
  );
}