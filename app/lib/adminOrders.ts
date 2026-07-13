import { supabase } from "./supabase";

export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select(`
      *,
      customers (
        first_name,
        last_name,
        email
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}