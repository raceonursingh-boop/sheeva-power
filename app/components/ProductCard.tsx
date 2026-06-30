"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Eye,
  Star,
  Heart,
  CheckCircle,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

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
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-500 hover:border-red-600/40 hover:shadow-[0_20px_50px_rgba(220,38,38,0.18)]"
    >
      {/* IMAGE */}
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square cursor-pointer overflow-hidden bg-[#191919]">

          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Badge */}
          <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/40">
            {badge}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(id);
            }}
            className="absolute right-4 top-4 z-20 rounded-full bg-black/70 p-2 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-red-600"
          >
            <Heart
              size={20}
              className={
                isWishlisted(id)
                  ? "fill-red-500 text-red-500"
                  : "text-white"
              }
            />
          </button>

          {/* View Product Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white backdrop-blur">
              <Eye size={18} />
              View Product
            </div>
          </div>
        </div>
      </Link>

      {/* INFO */}
      <div className="space-y-5 p-6">

        <div>
          <Link href={`/products/${id}`}>
            <h3 className="text-2xl font-black uppercase text-white transition hover:text-red-500">
              {name}
            </h3>
          </Link>

          <p className="mt-2 text-sm text-gray-400">
            {material}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">

          <p className="text-3xl font-black text-red-500">
            ₹{price}
          </p>

          <div className="flex items-center gap-1 text-xs text-emerald-400">
            <CheckCircle size={14} />
            In Stock
          </div>

        </div>

        {/* Sizes */}
        <div className="grid grid-cols-4 gap-2">

          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-xl py-2 text-sm font-bold transition ${
                selectedSize === size
                  ? "bg-red-600 text-white"
                  : "border border-white/10 bg-[#191919] text-gray-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3">

          <Link
            href={`/products/${id}`}
            className="flex items-center justify-center rounded-full border border-white/10 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:border-red-600 hover:bg-[#1a1a1a]"
          >
            View
          </Link>

          <button
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                image,
                size: selectedSize,
              })
            }
            className="flex items-center justify-center gap-2 rounded-full bg-red-600 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-[1.02] hover:bg-red-700"
          >
            <ShoppingBag size={16} />
            Quick Add
          </button>

        </div>

      </div>
    </motion.div>
  );
}