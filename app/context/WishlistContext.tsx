"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type WishlistItem = {
  id: number;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  toggleWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  function toggleWishlist(id: number) {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === id);

      if (exists) {
        return prev.filter((item) => item.id !== id);
      }

      return [...prev, { id }];
    });
  }

  function isWishlisted(id: number) {
    return wishlist.some((item) => item.id === id);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}