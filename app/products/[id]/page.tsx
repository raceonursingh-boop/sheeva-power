"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/Products";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find(
    (product) => product.id === Number(params.id)
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        Product not found.
      </main>
    );
  }

  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

        {/* Images */}
        <div>

          <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#111]">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6 grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* Product Info */}
        <div>

          <p className="uppercase tracking-[0.4em] text-red-500">
            {product.badge}
          </p>

          <h1 className="mt-4 text-6xl font-black text-white">
            {product.name}
          </h1>

          <p className="mt-6 text-4xl font-bold text-red-500">
            ₹{product.price}
          </p>

          <div className="mt-6 flex text-red-500">
            ★★★★★
          </div>

          <p className="mt-8 max-w-lg leading-8 text-gray-400">
            Premium oversized heavyweight cotton designed for the gym,
            the streets and everyday life.
          </p>

          <div className="mt-10 flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="rounded-lg border border-white/20 px-6 py-3 text-white transition hover:bg-red-600"
              >
                {size}
              </button>
            ))}
          </div>

          <button className="mt-10 w-full rounded-full bg-red-600 py-5 text-lg font-bold uppercase text-white transition hover:bg-red-700">
            Add To Cart
          </button>

          <div className="mt-12 space-y-3 text-gray-400">
            <p>✓ 240–250 GSM Heavyweight Cotton</p>
            <p>✓ Premium Oversized Fit</p>
            <p>✓ Streetwear × Gym</p>
            <p>✓ Built For The Relentless</p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-block text-gray-400 hover:text-white"
          >
            ← Back to Shop
          </Link>

        </div>

      </div>
    </main>
  );
}