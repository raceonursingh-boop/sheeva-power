"use client";

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

      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-400">
        Size
      </p>

      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`rounded-xl px-6 py-3 transition ${
              selected === size
                ? "bg-red-600 text-white"
                : "border border-white/20 text-white hover:bg-red-600"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

    </div>
  );
}