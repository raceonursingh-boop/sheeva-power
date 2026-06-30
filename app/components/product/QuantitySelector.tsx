"use client";

interface Props {
  quantity: number;
  setQuantity: (value: number) => void;
}

export default function QuantitySelector({
  quantity,
  setQuantity,
}: Props) {
  return (
    <div className="mt-8">

      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-400">
        Quantity
      </p>

      <div className="flex w-fit items-center overflow-hidden rounded-xl border border-white/10 bg-[#111]">

        <button
          onClick={() =>
            setQuantity(Math.max(1, quantity - 1))
          }
          className="px-5 py-3 text-xl text-white transition hover:bg-red-600"
        >
          −
        </button>

        <div className="w-14 text-center font-bold text-white">
          {quantity}
        </div>

        <button
          onClick={() =>
            setQuantity(quantity + 1)
          }
          className="px-5 py-3 text-xl text-white transition hover:bg-red-600"
        >
          +
        </button>

      </div>

    </div>
  );
}