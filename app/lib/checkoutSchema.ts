import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is required"),

  lastName: z
    .string()
    .min(2, "Last name is required"),

  email: z
    .string()
    .email("Enter a valid email"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid phone number"),

  address: z
    .string()
    .min(5, "Address is required"),

  city: z
    .string()
    .min(2, "City is required"),

  state: z
    .string()
    .min(2, "State is required"),

  pinCode: z
    .string()
    .regex(/^\d{6}$/, "PIN code must be 6 digits"),

  country: z
    .string()
    .min(2),
});

export type CheckoutFormData =
  z.infer<typeof checkoutSchema>;