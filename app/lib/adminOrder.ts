import { supabase } from "./supabase";

export async function getOrder(id: string) {
  // Order + Customer
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select(`
      *,
      customers (*)
    `)
    .eq("id", id)
    .single();

  if (orderError) throw orderError;

  // Address
  const { data: addresses } = await supabase
    .from("addresses")
    .select("*")
    .eq("customer_id", order.customer_id);

  // Order Items
  const { data: orderItems } = await supabase
    .from("order_items")
    .select("*")
    .eq("order_id", order.id);

  return {
    ...order,
    addresses,
    order_items: orderItems,
  };
}