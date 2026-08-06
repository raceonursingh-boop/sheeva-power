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

      <main className="min-h-screen bg-[#050505] pt-36 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <div className="mb-24 text-center">

            <p className="mb-6 text-xs uppercase tracking-[0.7em] text-red-500">
              DROP 001
            </p>

            <h1 className="text-6xl font-black uppercase leading-none md:text-8xl">
              TEN DESIGNS.
              <br />
              ONE VISION.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
              Every garment is built with purpose.
              Heavyweight cotton.
              Oversized silhouettes.
              Designed for everyday wear.
            </p>

          </div>

          {/* Search */}

          <div className="mb-10 mx-auto max-w-xl">
            <ShopSearch
              value={search}
              onChange={setSearch}
            />
          </div>

          {/* Filters */}

          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

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

          <p className="mb-12 text-center text-xs uppercase tracking-[0.5em] text-neutral-500">
            {filteredProducts.length} DESIGNS
          </p>

          {/* Products */}

          <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product: any) => (
              <ProductCard
                key={product.product_id}
                product={product}
              />
            ))}
          </div>

          {/* Empty State */}

          {filteredProducts.length === 0 && (
            <div className="py-32 text-center">
              <h2 className="text-4xl font-black uppercase">
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