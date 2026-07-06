import { supabase } from "./supabase";

export interface OrderData {
  customer_id: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  subtotal: number;
  shipping: number;
  total: number;
  payment_status: string;
  order_status: string;
}

export async function createOrder(order: OrderData) {
  const { data, error } = await supabase
    .from("orders")
    .insert(order)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}