"use client";

import { useState } from "react";
import Link from "next/link";

import type { Product } from "../../types/Product";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import ProductGallery from "../../components/product/ProductGallery";
import SizeSelector from "../../components/product/SizeSelector";
import QuantitySelector from "../../components/product/QuantitySelector";
import ProductActions from "../../components/product/ProductActions";
import ProductFeatures from "../../components/product/ProductFeatures";
import ShippingCard from "../../components/product/ShippingCard";


interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [selectedImage, setSelectedImage] = useState(
    images[0] || product.image
  );

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Gallery */}
        <ProductGallery
          images={images}
          selectedImage={selectedImage}
          onSelect={setSelectedImage}
          productName={product.name}
        />

        {/* Product Info */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-red-500">
            {product.badge}
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-tight text-white md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-5 text-base uppercase tracking-[0.25em] text-neutral-400">
            {product.material}
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="rounded-full border border-red-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              DROP 001
            </span>

            <span className="text-sm text-neutral-500">
              LIMITED RELEASE
            </span>
          </div>

          <p className="mt-8 text-4xl font-black text-white">
            ₹{product.price}
          </p>

          <div className="mt-10 border-t border-white/10 pt-10">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Description
            </h2>

            <p className="max-w-xl leading-8 text-neutral-400">
              {product.description}
            </p>
          </div>

          <SizeSelector
  selected={selectedSize}
  onSelect={setSelectedSize}
/>

          {/* QUANTITY */}
          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
          />

          {/* ACTIONS */}
          <ProductActions
            onAddToCart={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart({
                  id: product.product_id,
                  name: product.name,
                  price: product.price,
                  image: selectedImage,
                  size: selectedSize,
                });
              }
            }}
            onToggleWishlist={() =>
              toggleWishlist(product.product_id)
            }
            wishlisted={isWishlisted(product.product_id)}
          />

          {/* Specifications */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-[#0d0d0d] p-8">
            <h2 className="mb-8 text-xl font-bold text-white">
              Specifications
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-neutral-500">Material</span>

                <span className="font-medium text-white">
                  {product.material}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-neutral-500">Fit</span>

                <span className="font-medium text-white">
                  Oversized
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-neutral-500">Collection</span>

                <span className="font-medium text-white">
                  {product.collection}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-500">Origin</span>

                <span className="font-medium text-white">
                  Designed in India
                </span>
              </div>
            </div>
          </div>

          <ProductFeatures material={product.material} />

          <ShippingCard />

          <Link
            href="/shop"
            className="mt-12 inline-flex items-center text-sm uppercase tracking-[0.25em] text-neutral-500 transition hover:text-white"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
}