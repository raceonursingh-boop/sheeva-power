"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const products = [
  { id: 1, name: "Legacy", price: 1299 },
  { id: 2, name: "Core", price: 999 },
  { id: 3, name: "Power Club", price: 1199 },
  { id: 4, name: "Rebel", price: 1299 },
  { id: 5, name: "No Limit", price: 1299 },
  { id: 6, name: "Ascend", price: 1299 },
  { id: 7, name: "Crimson", price: 1299 },
  { id: 8, name: "Forged", price: 1299 },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center rounded-full border border-white/10 bg-[#111] px-4 py-3">
        <Search className="h-5 w-5 text-gray-500" />

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-3 w-full bg-transparent text-white placeholder-gray-500 outline-none"
        />
      </div>

      {filteredProducts.length > 0 && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              onClick={() => setQuery("")}
              className="block border-b border-white/10 p-4 transition hover:bg-[#1b1b1b]"
            >
              <div className="font-bold text-white">
                {product.name}
              </div>

              <div className="text-sm text-gray-400">
                ₹{product.price}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}