"use client";

import { notFound } from "next/navigation";

import { products } from "../../data/Products";
import ProductDetails from "./ProductDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <ProductDetails
      product={product}
    />
  );
}