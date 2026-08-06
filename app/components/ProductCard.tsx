"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product & {
    product_id?: number;
  };
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { toggleWishlist, isWishlisted } = useWishlist();

  const productId = product.product_id ?? product.id;

  const frontImage =
    product.images?.[0] ?? product.image;

  const backImage =
    product.images?.[1] ??
    product.images?.[0] ??
    product.image;

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="group"
    >
      <Link href={`/products/${productId}`}>
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/5
            bg-[#090909]
            transition-all
            duration-500
            group-hover:border-red-500/20
            group-hover:shadow-[0_35px_80px_rgba(0,0,0,.55)]
          "
        >
          {/* Wishlist */}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(productId);
            }}
            className="
              absolute
              right-5
              top-5
              z-20
              rounded-full
              bg-black/60
              p-3
              backdrop-blur
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
              hover:bg-red-600
            "
          >
            <Heart
              size={18}
              className={
                isWishlisted(productId)
                  ? "fill-red-500 text-red-500"
                  : "text-white"
              }
            />
          </button>

          {/* Images */}

          <div className="relative aspect-[4/5] overflow-hidden">
            {/* Front */}

            <Image
              src={frontImage}
              alt={product.name}
              fill
              className="
                object-contain
                p-5
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:opacity-0
              "
            />

            {/* Back */}

            <Image
              src={backImage}
              alt={product.name}
              fill
              className="
                object-contain
                p-5
                opacity-0
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:opacity-100
              "
            />
          </div>
        </div>

        {/* Product Info */}

        <div className="mt-10 text-center">
          <h3 className="text-[2rem] font-black uppercase leading-none tracking-[0.2em] transition-colors duration-300 group-hover:text-red-500">
            {product.name}
          </h3>

          <p className="mt-3 text-xs uppercase tracking-[0.35em] text-neutral-400">
            {product.material}
          </p>

          <p className="mt-5 text-2xl font-bold text-white">
            ₹{product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}