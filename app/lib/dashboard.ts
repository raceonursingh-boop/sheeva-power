import { supabase } from "./supabase";

export async function getDashboardStats() {
  const [
    ordersResult,
    customersResult,
    revenueResult,
    productsResult,
  ] = await Promise.all([
    supabase
      .from("orders")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("customers")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("orders")
      .select("total"),

    supabase
      .from("order_items")
      .select("quantity"),
  ]);



  const revenue =
    revenueResult.data?.reduce(
      (sum, order) => sum + order.total,
      0
    ) ?? 0;

  const productsSold =
    productsResult.data?.reduce(
      (sum, item) => sum + item.quantity,
      0
    ) ?? 0;

  return {
    revenue,
    orders: ordersResult.count ?? 0,
    customers: customersResult.count ?? 0,
    productsSold,
  };
}