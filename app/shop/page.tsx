"use client";

import { useMemo, useState } from "react";

import Navbar from "../components/navbar/Navbar";

import ProductCard from "../components/ProductCard";
import CollectionFilter from "../components/shop/CollectionFilter";
import SortDropdown from "../components/shop/SortDropdown";
import ShopSearch from "../components/shop/ShopSearch";

import { products } from "../data/Products";

export default function ShopPage() {
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
  }, [collection, sort, search]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          {/* Hero */}
          <div className="mb-14 text-center">

            <p className="mb-3 uppercase tracking-[0.4em] text-red-500">
              SHEEVA POWER
            </p>

            <h1 className="text-6xl font-black uppercase">
              Shop
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
              Discover every collection. Built for training,
              travel, college and everyday life.
            </p>

          </div>

          {/* Search */}
          <div className="mx-auto mb-10 max-w-xl">
            <ShopSearch
              value={search}
              onChange={setSearch}
            />
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

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
          <p className="mb-8 text-sm uppercase tracking-widest text-gray-500">
            {filteredProducts.length} Products
          </p>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                badge={product.badge}
                material={product.material}
              />
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 text-center">

              <h2 className="text-3xl font-black uppercase">
                No Products Found
              </h2>

              <p className="mt-4 text-gray-500">
                Try changing your search or filters.
              </p>

            </div>
          )}

        </div>
      </main>
    </>
  );
}