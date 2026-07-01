"use client";

import Image from "next/image";
import { useState } from "react";

import { useCart } from "../../context/CartContext";
import { useCoupon } from "../../context/CouponContext";

export default function OrderSummary() {
  const { cart, subtotal } = useCart();

  const {
    coupon,
    discount,
    applyCoupon,
    clearCoupon,
  } = useCoupon();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const FREE_SHIPPING = 999;

  const shipping = subtotal >= FREE_SHIPPING ? 0 : 99;

  const remaining = Math.max(
    FREE_SHIPPING - subtotal,
    0
  );

  const progress = Math.min(
    (subtotal / FREE_SHIPPING) * 100,
    100
  );

  const total = subtotal - discount + shipping;

  function handleCoupon() {
    const valid = applyCoupon(code, subtotal);

    if (!valid) {
      setError("Invalid coupon code");
      return;
    }

    setError("");
  }

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

      {/* Free Shipping Progress */}

      <div className="mb-8">
        {shipping === 0 ? (
          <p className="mb-3 font-semibold text-green-500">
            🎉 Congratulations! You unlocked FREE Shipping.
          </p>
        ) : (
          <p className="mb-3 text-gray-400">
            Add{" "}
            <span className="font-bold text-white">
              ₹{remaining}
            </span>{" "}
            more to unlock FREE Shipping.
          </p>
        )}

        <div className="h-2 overflow-hidden rounded-full bg-[#222]">
          <div
            className="h-full rounded-full bg-red-600 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div className="my-8 border-t border-white/10" />

      {/* Coupon */}

      <div className="space-y-3">
        <label className="text-sm uppercase tracking-widest text-gray-400">
          Coupon Code
        </label>

        <div className="flex gap-3">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="WELCOME10"
            className="flex-1 rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-red-600"
          />

          <button
            type="button"
            onClick={handleCoupon}
            className="rounded-xl bg-red-600 px-6 font-bold uppercase text-white transition hover:bg-red-700"
          >
            Apply
          </button>
        </div>

        {coupon && (
          <div className="flex items-center justify-between">
            <p className="text-green-500">
              Applied: {coupon}
            </p>

            <button
              type="button"
              onClick={() => {
                clearCoupon();
                setCode("");
                setError("");
              }}
              className="text-sm text-red-500 hover:text-red-400"
            >
              Remove
            </button>
          </div>
        )}

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}
      </div>

      <div className="my-8 border-t border-white/10" />

      <div className="space-y-4">
        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-500">
            <span>Discount</span>
            <span>-₹{Math.round(discount)}</span>
          </div>
        )}

        <div className="flex justify-between text-gray-400">
          <span>Shipping</span>

          <span>
            {shipping === 0 ? "FREE" : `₹${shipping}`}
          </span>
        </div>

        <div className="border-t border-white/10 pt-4" />

        <div className="flex justify-between text-2xl font-black text-white">
          <span>Total</span>
          <span>₹{Math.round(total)}</span>
        </div>
      </div>
    </aside>
  );
}