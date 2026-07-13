import { getProducts } from "@/app/lib/products";
import ShopClient from "@/app/components/shop/ShopClient";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <ShopClient
      products={products}
    />
  );
}