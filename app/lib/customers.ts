import { supabase } from "./supabase";

export interface CustomerData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export async function getOrCreateCustomer(customer: CustomerData) {
  // Check if customer already exists
  const { data: existingCustomer, error: fetchError } = await supabase
    .from("customers")
    .select("*")
    .eq("email", customer.email)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    throw fetchError;
  }

  if (existingCustomer) {
    return existingCustomer;
  }

  // Create new customer
  const { data: newCustomer, error: insertError } = await supabase
    .from("customers")
    .insert(customer)
    .select()
    .single();

  if (insertError) {
    throw insertError;
  }

  return newCustomer;
}