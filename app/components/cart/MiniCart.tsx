"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";

import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

export default function MiniCart() {
  const {
    cart,
    isCartOpen,
    closeCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 250,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-l border-white/10 bg-[#0b0b0b]"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 p-6">

              <div className="flex items-center gap-3">

                <ShoppingBag
                  className="text-red-600"
                  size={22}
                />

                <h2 className="text-xl font-black uppercase text-white">
                  Your Cart
                </h2>

              </div>

              <button
                onClick={closeCart}
                className="rounded-full p-2 transition hover:bg-white/10"
              >
                <X className="text-white" />
              </button>

            </div>

            {/* Cart Items */}

            <div className="flex-1 overflow-y-auto p-6">

              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">

                  <ShoppingBag
                    size={56}
                    className="mb-6 text-gray-600"
                  />

                  <h3 className="text-2xl font-bold text-white">
                    Your cart is empty
                  </h3>

                  <p className="mt-3 text-gray-500">
                    Add something amazing.
                  </p>

                </div>
              ) : (
                <div className="space-y-5">

                  {cart.map((item) => (
                    <CartItem
                      key={`${item.id}-${item.size}`}
                      item={item}
                    />
                  ))}

                </div>
              )}

            </div>

            <CartFooter />

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}