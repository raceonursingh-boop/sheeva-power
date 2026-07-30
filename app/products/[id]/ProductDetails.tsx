"use client";

import { useState } from "react";
import Link from "next/link";

import { Product } from "../../types/Product";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import ProductGallery from "../../components/product/ProductGallery";
import SizeSelector from "../../components/product/SizeSelector";
import QuantitySelector from "../../components/product/QuantitySelector";
import ProductActions from "../../components/product/ProductActions";
import ProductFeatures from "../../components/product/ProductFeatures";
import ShippingCard from "../../components/product/ShippingCard";

import RelatedProducts from "../../components/RelatedProducts";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  // 🔍 DEBUG
  console.log("FULL PRODUCT:", product);
  console.log("IMAGE:", product.image);
  console.log("IMAGES:", product.images);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [selectedImage, setSelectedImage] = useState(
    images[0] || product.image
  );

  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
  <ProductGallery
  images={images}
  selectedImage={selectedImage}
  onSelect={setSelectedImage}
  productName={product.name}
/>

        <div>
          <p className="uppercase tracking-[0.4em] text-[#2563EB]">
            {product.badge}
          </p>

          <h1 className="mt-4 text-6xl font-black uppercase text-white">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            {product.material}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="rounded-full border border-[#2563EB] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
              DROP 001
            </span>

            <span className="text-sm text-gray-400">
              LIMITED RELEASE
            </span>
          </div>

          <p className="mt-6 text-5xl font-black text-white">
            ₹{product.price}
          </p>

          <p className="mt-8 max-w-lg leading-8 text-gray-400">
            {product.description}
          </p>

          <div className="my-8 h-px bg-white/10" />

          <SizeSelector
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
          />

          <ProductActions
            onAddToCart={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: selectedImage,
                  size: selectedSize,
                });
              }
            }}
            onToggleWishlist={() => toggleWishlist(product.id)}
            wishlisted={isWishlisted(product.id)}
          />

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6">
            <h3 className="mb-5 text-lg font-bold text-white">
              Specifications
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>• {product.material}</li>
              <li>• Oversized Relaxed Fit</li>
              <li>• Double Needle Stitching</li>
              <li>• Soft Touch Finish</li>
              <li>• Minimal Signature Branding</li>
              <li>• Designed in India</li>
            </ul>
          </div>

          <ProductFeatures material={product.material} />

          <ShippingCard />

          <Link
            href="/shop"
            className="mt-10 inline-block text-gray-400 transition hover:text-white"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl">
        <RelatedProducts currentId={product.id} />
      </div>
    </main>
  );
}