import { supabase } from "./supabase";

export async function getCustomer(id: string) {
  const { data, error } = await supabase
    .from("customers")
    .select(`
      *,
      addresses (*),
      orders (
        *,
        order_items (*)
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  const totalOrders = data.orders.length;

  const totalSpent = data.orders.reduce(
    (sum: number, order: any) => sum + order.total,
    0
  );

  const averageOrder =
    totalOrders > 0
      ? totalSpent / totalOrders
      : 0;

  return {
    ...data,
    totalOrders,
    totalSpent,
    averageOrder,
  };
}