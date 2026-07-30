import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .eq("active", true);

  if (error) {
    throw error;
  }

  return data;
}

export async function getProductsByCollection(
  collection: string
) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("collection", collection)
    .eq("active", true);

  if (error) {
    throw error;
  }

  return data;
}

export async function getRelatedProducts(
  category: string,
  excludeId: string
) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .neq("id", excludeId)
    .limit(4);

  if (error) {
    throw error;
  }

  return data;
}

export async function getProductById(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("product_id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}