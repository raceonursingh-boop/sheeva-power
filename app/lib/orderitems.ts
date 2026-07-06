import { supabase } from "./supabase";

export interface OrderItemData {
  order_id: string;
  product_id: number;
  product_name: string;
  size: string;
  quantity: number;
  price: number;
}

export async function createOrderItems(items: OrderItemData[]) {
  const { data, error } = await supabase
    .from("order_items")
    .insert(items)
    .select();

  if (error) {
    throw error;
  }

  return data;
}