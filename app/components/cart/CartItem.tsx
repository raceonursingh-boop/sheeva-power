"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";

import {
  CartItem as CartItemType,
  useCart,
} from "../../context/CartContext";

interface Props {
  item: CartItemType;
}

export default function CartItem({
  item,
}: Props) {
  const {
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-[#111] p-4">

      {/* Product Image */}

      <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-[#1a1a1a]">

        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />

      </div>

      {/* Product Info */}

      <div className="flex flex-1 flex-col justify-between">

        <div>

          <h3 className="font-bold uppercase text-white">
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Size {item.size}
          </p>

          <p className="mt-2 font-bold text-red-500">
            ₹{item.price}
          </p>

        </div>

        {/* Quantity */}

        <div className="mt-4 flex w-fit items-center overflow-hidden rounded-full border border-white/10">

          <button
            onClick={() =>
              decreaseQuantity(
                item.id,
                item.size
              )
            }
            className="p-2 transition hover:bg-red-600"
          >
            <Minus size={16} />
          </button>

          <span className="w-10 text-center text-white">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQuantity(
                item.id,
                item.size
              )
            }
            className="p-2 transition hover:bg-red-600"
          >
            <Plus size={16} />
          </button>

        </div>

      </div>

    </div>
  );
}