"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ShopSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-red-600"
    />
  );
}