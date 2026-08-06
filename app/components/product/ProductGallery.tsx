"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="lg:sticky lg:top-28">

      {/* Main Image */}

      <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#090909]">

        <div className="relative aspect-[4/5]">

          <AnimatePresence mode="wait">

            {selectedImage && (
              <motion.div
                key={selectedImage}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedImage}
                  alt={productName}
                  fill
                  priority
                  unoptimized
                  className="object-contain p-10 transition duration-500 hover:scale-105"
                />
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>

      {/* Thumbnails */}

      <div className="mt-8 flex justify-center gap-5">

        {galleryImages.map((image, index) => (

          <button
            key={index}
            onClick={() => onSelect(image)}
            className={`relative h-28 w-24 overflow-hidden rounded-2xl border transition-all duration-300 ${
              selectedImage === image
                ? "border-red-600"
                : "border-white/10 hover:border-red-500"
            }`}
          >

            <Image
              src={image}
              alt={`${productName}-${index}`}
              fill
              unoptimized
              className="object-contain p-2 transition duration-300 hover:scale-105"
            />

          </button>

        ))}

      </div>

    </div>
  );
}