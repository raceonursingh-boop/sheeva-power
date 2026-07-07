import { supabase } from "./supabase";

export interface CustomerData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export async function getOrCreateCustomer(
  customer: CustomerData
) {
  console.log("========== CUSTOMER DEBUG ==========");
  console.log("Customer received:", customer);
  console.log("Checking for existing customer...");

  const { data: existingCustomer, error: fetchError } =
    await supabase
      .from("customers")
      .select("*")
      .eq("email", customer.email)
      .maybeSingle();

  console.log("Existing Customer:", existingCustomer);
  console.log("Fetch Error:", fetchError);

  if (fetchError) {
    console.error("Fetch failed:", fetchError);
    throw fetchError;
  }

  if (existingCustomer) {
    console.log("Customer already exists.");
    console.log("====================================");
    return existingCustomer;
  }

  console.log("Creating new customer...");

  const { data: newCustomer, error: insertError } =
    await supabase
      .from("customers")
      .insert({
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        phone: customer.phone,
      })
      .select()
      .single();

  console.log("Inserted Customer:", newCustomer);
  console.log("Insert Error:", insertError);

  if (insertError) {
    console.error("Insert failed:", insertError);
    throw insertError;
  }

  console.log("Customer created successfully.");
  console.log("====================================");

  return newCustomer;
}