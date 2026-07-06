import { supabase } from "./supabase";

export interface AddressData {
  customer_id: string;
  address: string;
  city: string;
  state: string;
  pin_code: string;
  country: string;
}

export async function createAddress(address: AddressData) {
  const { data, error } = await supabase
    .from("addresses")
    .insert(address)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}