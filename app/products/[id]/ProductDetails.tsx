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

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.product_id,
        name: product.name,
        price: product.price,
        image: selectedImage,
        size: selectedSize,
      });
    }
  };

  return (
    <main className="min-h-screen bg-black px-4 py-20 pb-32 text-white sm:px-6 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
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

          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-neutral-400 sm:text-base">
            {product.material}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-red-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              DROP 001
            </span>

            <span className="text-sm text-neutral-500">
              LIMITED RELEASE
            </span>
          </div>

          <p className="mt-6 text-3xl font-black text-white sm:text-4xl">
            ₹{product.price}
          </p>

          <div className="mt-8 border-t border-white/10 pt-8 sm:mt-10 sm:pt-10">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Description
            </h2>

            <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
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
          <div className="hidden md:block">
            <ProductActions
              onAddToCart={handleAddToCart}
              onToggleWishlist={() =>
                toggleWishlist(product.product_id)
              }
              wishlisted={isWishlisted(product.product_id)}
            />
          </div>

          {/* Specifications */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:mt-12 sm:p-8">
            <h2 className="mb-6 text-lg font-bold text-white sm:mb-8 sm:text-xl">
              Specifications
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-sm text-neutral-500">Material</span>

                <span className="text-sm font-medium text-white sm:text-base">
                  {product.material}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-sm text-neutral-500">Fit</span>

                <span className="text-sm font-medium text-white sm:text-base">
                  Oversized
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-sm text-neutral-500">Collection</span>

                <span className="text-sm font-medium text-white sm:text-base">
                  {product.collection}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-neutral-500">Origin</span>

                <span className="text-sm font-medium text-white sm:text-base">
                  Designed in India
                </span>
              </div>
            </div>
          </div>

          <ProductFeatures material={product.material} />

          <ShippingCard />

          <Link
            href="/shop"
            className="mt-10 inline-flex items-center text-sm uppercase tracking-[0.25em] text-neutral-500 transition hover:text-white sm:mt-12"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>

      {/* MOBILE STICKY CART BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 p-4 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              {product.name}
            </p>

            <p className="text-lg font-black text-white">₹{product.price}</p>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full bg-red-600 px-6 py-3 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
}