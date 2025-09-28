"use server";

import { createClient } from "./server";

export async function fetchProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    return { success: false, message: "Products not found", data: [] };
  }
  return { success: true, message: "Products found", data };
}
