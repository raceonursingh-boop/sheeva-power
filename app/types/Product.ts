export interface Product {
  // UUID from Supabase
  id: string;

  // Numeric ID used by your frontend/cart/routes
  product_id: number;

  name: string;
  price: number;

  material: string;
  color: string;

  badge: string;

  description: string;

  images: string[];

  sizes: string[];

  stock: number;

  category: string;

  collection: string;

  image: string;
}