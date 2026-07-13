import { supabase } from "./supabase";

export async function getCustomers() {
  const { data, error } = await supabase
    .from("customers")
    .select(`
      *,
      orders (
        id,
        total,
        created_at
      )
    `)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data.map((customer: any) => ({
    ...customer,

    totalOrders: customer.orders.length,

    totalSpent: customer.orders.reduce(
      (sum: number, order: any) => sum + order.total,
      0
    ),

    lastOrder:
      customer.orders.length > 0
        ? customer.orders[0].created_at
        : null,
  }));
}