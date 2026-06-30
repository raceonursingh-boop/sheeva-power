"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartFooter() {
  const {
    subtotal,
    totalItems,
    clearCart,
    closeCart,
  } = useCart();

  return (
    <div className="border-t border-white/10 bg-[#111] p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Items
          </p>

          <p className="text-xl font-bold text-white">
            {totalItems}
          </p>

        </div>

        <div className="text-right">

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Subtotal
          </p>

          <p className="text-2xl font-black text-red-500">
            ₹{subtotal}
          </p>

        </div>

      </div>

      <Link
        href="/checkout"
        onClick={closeCart}
        className="mb-3 flex w-full items-center justify-center rounded-full bg-red-600 py-4 font-bold uppercase tracking-widest text-white transition hover:bg-red-700"
      >
        Checkout
      </Link>

      <button
        onClick={clearCart}
        className="w-full rounded-full border border-white/10 py-4 font-bold uppercase tracking-widest text-white transition hover:border-red-600"
      >
        Clear Cart
      </button>

    </div>
  );
}