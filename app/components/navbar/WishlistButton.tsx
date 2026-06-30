"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";

export default function WishlistButton() {
  const { wishlist } = useWishlist();

  return (
    <Link
      href="/wishlist"
      className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-red-600 hover:bg-red-600"
    >
      <Heart size={18} />
      {wishlist.length}
    </Link>
  );
}