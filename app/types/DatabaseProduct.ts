export interface DatabaseProduct {
  id: string; // Supabase UUID

  product_id: number;

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
}