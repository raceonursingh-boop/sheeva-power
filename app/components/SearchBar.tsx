"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { products } from "../data/Products";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center rounded-full border border-white/10 bg-[#111] px-4 py-2">
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-3 w-full bg-transparent text-white placeholder-gray-500 outline-none"
        />
      </div>

      {filteredProducts.length > 0 && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl">
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