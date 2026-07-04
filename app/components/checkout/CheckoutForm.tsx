"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ShippingMethod from "./ShippingMethod";
import PaymentSection from "./PaymentSection";

import {
  checkoutSchema,
  CheckoutFormData,
} from "../../lib/checkoutSchema";

type RazorpayPaymentResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

export default function CheckoutForm() {
  const router = useRouter();

  const {
    clearCart,
    subtotal,
  } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      country: "India",
    },
  });

  async function onSubmit(data: CheckoutFormData) {
    try {
      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: subtotal,
        }),
      });

      if (!orderResponse.ok) {
        alert("Unable to create Razorpay order.");
        return;
      }

      const order = await orderResponse.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,

        amount: order.amount,

        currency: order.currency,

        name: "Sheeva Power",

        description: "Order Payment",

        image: "/logo.png",

        order_id: order.id,

        prefill: {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          contact: data.phone,
        },

        theme: {
          color: "#dc2626",
        },

        handler: async (
          response: RazorpayPaymentResponse
        ) => {
          const verifyResponse = await fetch(
            "/api/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            }
          );

          const result = await verifyResponse.json();

          if (result.success) {
            clearCart();
            router.push("/checkout/success");
          } else {
            alert("Payment verification failed.");
          }
        },

        modal: {
          ondismiss() {
            console.log("Payment cancelled.");
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }


        return (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-10"
  >
          {/* Contact */}
      <section className="rounded-3xl border border-white/10 bg-[#111] p-8">
        <h2 className="mb-6 text-2xl font-black uppercase text-white">
          Contact
        </h2>

        <input
          type="email"
          placeholder="Email Address"
          {...register("email")}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-red-600"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </section>

      {/* Shipping Address */}
      <section className="rounded-3xl border border-white/10 bg-[#111] p-8">
        <h2 className="mb-6 text-2xl font-black uppercase text-white">
          Shipping Address
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />

            {errors.firstName && (
              <p className="mt-2 text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />

            {errors.lastName && (
              <p className="mt-2 text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Address"
              {...register("address")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />

            {errors.address && (
              <p className="mt-2 text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="City"
              {...register("city")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />

            {errors.city && (
              <p className="mt-2 text-sm text-red-500">
                {errors.city.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="State"
              {...register("state")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />

            {errors.state && (
              <p className="mt-2 text-sm text-red-500">
                {errors.state.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="PIN Code"
              {...register("pinCode")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />

            {errors.pinCode && (
              <p className="mt-2 text-sm text-red-500">
                {errors.pinCode.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("country")}
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            />
          </div>

        </div>
      </section>
            <ShippingMethod />

      <PaymentSection />

      <button
        type="submit"
        className="w-full rounded-full bg-red-600 py-5 text-lg font-bold uppercase tracking-widest text-white transition hover:bg-red-700"
      >
        Place Order
      </button>
  </form>
      );
}