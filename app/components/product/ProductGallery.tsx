"use client";

import Image from "next/image";

interface Props {
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
  productName: string;
}

export default function ProductGallery({
  images,
  selectedImage,
  onSelect,
  productName,
}: Props) {
  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#111]">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onSelect(image)}
            className={`relative aspect-square overflow-hidden rounded-xl border transition ${
              selectedImage === image
                ? "border-red-600"
                : "border-white/10 hover:border-red-600"
            }`}
          >
            <Image
              src={image}
              alt={productName}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}