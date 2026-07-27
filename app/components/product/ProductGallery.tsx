"use client";

import Image from "next/image";

interface Props {
  images?: string[];
  selectedImage?: string;
  onSelect: (image: string) => void;
  productName: string;
}

export default function ProductGallery({
  images = [],
  selectedImage = "",
  onSelect,
  productName,
}: Props) {
  const galleryImages =
    images.length > 0
      ? images
      : selectedImage
      ? [selectedImage]
      : [];

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#111]">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt={productName}
            fill
            priority
            unoptimized
            className="object-cover transition duration-700 hover:scale-105"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(image)}
            className={`relative aspect-square overflow-hidden rounded-xl border transition ${
              selectedImage === image
                ? "border-red-600"
                : "border-white/10 hover:border-red-600"
            }`}
          >
            <Image
              src={image}
              alt={`${productName} ${index + 1}`}
              fill
              unoptimized
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}