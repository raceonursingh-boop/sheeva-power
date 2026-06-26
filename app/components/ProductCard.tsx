"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Eye, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  badge: string;
  material: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  badge,
  material,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl"
    >
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-[#191919] cursor-pointer">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {badge}
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full border border-white px-5 py-3 text-white">
              <Eye size={18} />
              Quick View
            </div>
          </div>
        </div>
      </Link>

      <div className="space-y-4 p-6">
        <Link href={`/products/${id}`}>
          <h3 className="cursor-pointer text-2xl font-black uppercase text-white transition hover:text-red-500">
            {name}
          </h3>
        </Link>

        <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
          {material}
        </p>

        <div className="flex gap-1 text-red-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        <p className="text-2xl font-bold text-red-500">
          ₹{price}
        </p>

        <div className="grid grid-cols-4 gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-lg py-2 transition ${
                selectedSize === size
                  ? "bg-red-600 text-white"
                  : "border border-white/20 text-white hover:border-red-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            addToCart({
              id,
              name,
              price,
              image,
            })
          }
          className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 py-4 font-bold uppercase tracking-widest text-white transition hover:bg-red-700"
        >
          <ShoppingBag size={18} />
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
}