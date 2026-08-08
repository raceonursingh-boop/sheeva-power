"use client";

import SizeGuide from "../SizeGuide";

interface Props {
  selected: string;
  onSelect: (size: string) => void;
}

const sizes = ["S", "M", "L", "XL"];

export default function SizeSelector({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Select Size
        </h2>

        <SizeGuide />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onSelect(size)}
            className={`rounded-2xl border px-4 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-300 ${
              selected === size
                ? "border-red-600 bg-red-600 text-white"
                : "border-white/10 bg-[#0b0b0b] text-white hover:border-red-600 hover:bg-red-600 hover:text-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}