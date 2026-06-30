"use client";

import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function OrderSummary() {
  const { cart, subtotal } = useCart();

  const shipping = subtotal >= 999 ? 0 : 99;

  const total = subtotal + shipping;

  return (
    <aside className="rounded-3xl border border-white/10 bg-[#111] p-8">

      <h2 className="mb-8 text-2xl font-black uppercase text-white">
        Order Summary
      </h2>

      <div className="space-y-6">

        {cart.length === 0 ? (
          <p className="text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-4"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-[#1a1a1a]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold uppercase text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Size {item.size}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Qty {item.quantity}
                </p>
              </div>

              <div className="font-bold text-red-500">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))
        )}

      </div>

      <div className="my-8 border-t border-white/10" />

      <div className="space-y-4">

        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Shipping</span>

          <span>
            {shipping === 0 ? "FREE" : `₹${shipping}`}
          </span>
        </div>

        <div className="border-t border-white/10 pt-4" />

        <div className="flex justify-between text-2xl font-black text-white">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

    </aside>
  );
}