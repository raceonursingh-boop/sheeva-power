"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({
  onClick,
}: CartButtonProps) {
  const { cart } = useCart();

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-full border border-red-600 px-4 py-2 text-white transition hover:bg-red-600"
    >
      <ShoppingBag size={18} />
      {cart.length}
    </button>
  );
}