import { notFound } from "next/navigation";

import { getProductById } from "@/app/lib/products";
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

  try {
    const product = await getProductById(Number(id));

    if (!product) {
      notFound();
    }

    return (
      <ProductDetails
        product={product}
      />
    );
  } catch {
    notFound();
  }
}