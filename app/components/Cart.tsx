"use client";

import Image from "next/image";
import { X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export default function Cart({ open, onClose }: CartProps) {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
console.log("CART:", cart);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-[#111] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <h2 className="text-2xl font-black text-white">
                YOUR CART
              </h2>

              <button onClick={onClose}>
                <X className="text-white" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <p className="text-gray-400">
                  Your cart is empty.
                </p>
              ) : (
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-[#181818] p-4"
                    >
                      <div className="relative h-24 w-24 overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col">
                        <h3 className="font-bold text-white">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-400">
                          Size: {item.size}
                        </p>

                        <p className="mt-1 font-semibold text-red-500">
                          ₹{item.price}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item.id,
                                item.size
                              )
                            }
                            className="rounded-lg bg-red-600 p-2"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="font-bold text-white">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.id,
                                item.size
                              )
                            }
                            className="rounded-lg bg-red-600 p-2"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="font-bold text-white">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 p-6">
              <div className="mb-6 flex justify-between text-2xl font-bold text-white">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <button className="w-full rounded-full bg-red-600 py-4 font-bold uppercase tracking-widest text-white transition hover:bg-red-700">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}