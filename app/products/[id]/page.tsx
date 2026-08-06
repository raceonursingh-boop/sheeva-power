import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getProductById,
  getRelatedProducts,
} from "@/app/lib/products";

import ProductDetails from "./ProductDetails";
import RelatedProducts from "../../components/RelatedProducts";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    return {
      title: "Product Not Found | SHEEVA POWER",
    };
  }

  const image =
    product.images?.[0] || product.image;

  return {
    title: product.name,

    description: product.description,

    openGraph: {
      title: `${product.name} | SHEEVA POWER`,
      description: product.description,
      type: "website",
      images: [
        {
          url: image,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${product.name} | SHEEVA POWER`,
      description: product.description,
      images: [image],
    },

    alternates: {
      canonical: `https://sheevapower.com/products/${product.product_id}`,
    },
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(
    product.collection,
    product.product_id
  );

  return (
    <>
      <ProductDetails product={product} />

      <div className="mx-auto mt-32 max-w-7xl px-6">
        <RelatedProducts
          products={relatedProducts}
        />
      </div>
    </>
  );
}