"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

export default function Navbar() {
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <h1 className="text-3xl font-black uppercase text-white">
            SHEEVA<span className="text-red-600"> POWER</span>
          </h1>

          {/* Navigation */}
          <nav className="hidden gap-10 text-sm font-medium uppercase tracking-wider text-gray-300 md:flex">
            <a href="#" className="transition hover:text-red-500">
              Home
            </a>

            <a href="#" className="transition hover:text-red-500">
              Shop
            </a>

            <a href="#" className="transition hover:text-red-500">
              Collections
            </a>

            <a href="#" className="transition hover:text-red-500">
              About
            </a>

            <a href="#" className="transition hover:text-red-500">
              Contact
            </a>
          </nav>

          {/* Cart Button */}
          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 rounded-full border border-red-600 px-5 py-2 text-white transition hover:bg-red-600"
          >
            <ShoppingBag size={18} />
            Cart ({cart.length})
          </button>
        </div>
      </header>

      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}