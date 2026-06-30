"use client";

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

const collections = [
  "ALL",
  "POWER",
  "STREET",
  "CAMPUS",
  "NIGHT",
];

export default function CollectionFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {collections.map((collection) => (
        <button
          key={collection}
          onClick={() => onSelect(collection)}
          className={`rounded-full px-6 py-3 text-sm font-bold uppercase transition ${
            selected === collection
              ? "bg-red-600 text-white"
              : "border border-white/10 bg-[#111] text-gray-300 hover:border-red-600 hover:text-white"
          }`}
        >
          {collection}
        </button>
      ))}
    </div>
  );
}