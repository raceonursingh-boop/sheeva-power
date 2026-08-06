export interface Product {
  id: string; // UUID from Supabase

  product_id: number; // Numeric product number

  name: string;
  slug: string;

  price: number;

  material: string;
  color: string;

  badge: string;

  description: string;

  images: string[];

  image: string;

  sizes: string[];

  stock: number;

  category: string;

  collection: string;

  featured: boolean;

  active: boolean;
}