"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none"
    >
      <option value="newest">
        Newest
      </option>

      <option value="low">
        Price: Low → High
      </option>

      <option value="high">
        Price: High → Low
      </option>
    </select>
  );
}