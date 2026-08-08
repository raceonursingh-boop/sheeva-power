"use client";

import { useMemo, useState } from "react";

import Navbar from "../navbar/Navbar";
import ProductCard from "../ProductCard";
import CollectionFilter from "./CollectionFilter";
import SortDropdown from "./SortDropdown";
import ShopSearch from "./ShopSearch";

interface ShopClientProps {
  products: any[];
}

export default function ShopClient({
  products,
}: ShopClientProps) {
  const [collection, setCollection] = useState("ALL");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (collection !== "ALL") {
      filtered = filtered.filter(
        (product) => product.collection === collection
      );
    }

    switch (sort) {
      case "low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    return filtered;
  }, [products, collection, sort, search]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="mb-16 text-center sm:mb-20 lg:mb-24">

            <p className="mb-4 text-xs uppercase tracking-[0.6em] text-red-500 sm:mb-6 sm:tracking-[0.7em]">
              DROP 001
            </p>

            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
              TEN DESIGNS.
              <br />
              ONE VISION.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-400 sm:mt-8 sm:max-w-2xl sm:text-lg sm:leading-8 lg:max-w-3xl">
              Every garment is built with purpose.
              Heavyweight cotton.
              Oversized silhouettes.
              Designed for everyday wear.
            </p>

          </div>

          {/* Search */}
          <div className="mx-auto mb-8 max-w-xl sm:mb-10">
            <ShopSearch
              value={search}
              onChange={setSearch}
            />
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-center lg:justify-between">

            <CollectionFilter
              selected={collection}
              onSelect={setCollection}
            />

            <SortDropdown
              value={sort}
              onChange={setSort}
            />

          </div>

          {/* Product Count */}
          <p className="mb-10 text-center text-[10px] uppercase tracking-[0.45em] text-neutral-500 sm:mb-12 sm:text-xs sm:tracking-[0.5em]">
            {filteredProducts.length} DESIGNS
          </p>

          {/* Products */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-10 xl:gap-y-20">
            {filteredProducts.map((product: any) => (
              <ProductCard
                key={product.product_id}
                product={product}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-24 text-center sm:py-32">
              <h2 className="text-3xl font-black uppercase sm:text-4xl">
                No Designs Found
              </h2>

              <p className="mt-4 text-neutral-500">
                Try changing your search or collection.
              </p>
            </div>
          )}

        </div>
      </main>
    </>
  );
}