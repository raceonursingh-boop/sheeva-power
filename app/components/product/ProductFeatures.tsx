"use client";

interface Props {
  material: string;
}

export default function ProductFeatures({
  material,
}: Props) {
  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-[#111] p-6">

      <h3 className="mb-6 text-lg font-black uppercase text-white">
        Product Features
      </h3>

      <div className="space-y-4 text-gray-300">

        <p>✓ {material}</p>

        <p>✓ Premium Oversized Fit</p>

        <p>✓ Streetwear × Gym</p>

        <p>✓ Breathable Heavyweight Fabric</p>

        <p>✓ Built For Every Journey</p>

      </div>

    </div>
  );
}