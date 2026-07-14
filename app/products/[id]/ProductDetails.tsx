"use client";

import { useState } from "react";
import Link from "next/link";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import ProductGallery from "../../components/product/ProductGallery";
import SizeSelector from "../../components/product/SizeSelector";
import QuantitySelector from "../../components/product/QuantitySelector";
import ProductActions from "../../components/product/ProductActions";
import ProductFeatures from "../../components/product/ProductFeatures";
import ShippingCard from "../../components/product/ShippingCard";
import RelatedProducts from "../../components/RelatedProducts";

interface Product {
  id: string; // Supabase UUID
  product_id: number; // Numeric product ID
  name: string;
  price: number;
  material: string;
  badge: string;
  image: string;
}

interface Props {
  product: Product;
}

export default function ProductDetails({
  product,
}: Props) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } =
    useWishlist();

  const [selectedSize, setSelectedSize] =
    useState("M");

  const [quantity, setQuantity] =
    useState(1);

  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const [selectedImage, setSelectedImage] =
    useState(images[0]);

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
          <p className="uppercase tracking-[0.4em] text-red-500">
            {product.badge}
          </p>

          <h1 className="mt-4 text-6xl font-black text-white">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            {product.material}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="text-yellow-400">
              ★★★★★
            </div>

            <p className="text-sm text-gray-500">
              145 Reviews
            </p>
          </div>

          <p className="mt-6 text-5xl font-black text-red-500">
            ₹{product.price}
          </p>

          <p className="mt-8 max-w-lg leading-8 text-gray-400">
            Premium oversized heavyweight cotton designed
            for training, travel, college and everyday
            life.
          </p>

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
                  id: product.product_id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  size: selectedSize,
                });
              }
            }}
            onToggleWishlist={() =>
              toggleWishlist(product.product_id)
            }
            wishlisted={isWishlisted(product.product_id)}
          />

          <ProductFeatures
            material={product.material}
          />

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
        <RelatedProducts
          currentId={product.product_id}
        />
      </div>
    </main>
  );
}