import { NextResponse } from "next/server";
import crypto from "crypto";
import { getOrCreateCustomer } from "../../lib/customers";
import { createAddress } from "../../lib/addresses";
import { createOrder } from "../../lib/orders";
import { createOrderItems } from "../../lib/orderitems";

export async function POST(request: Request) {
  try {
    const {
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,

  customer,
  address,
  cart,

  subtotal,
  shipping,
  total,
} = await request.json();

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(body)
      .digest("hex");

    const isAuthentic =
      expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 }
      );
    }
console.log("✅ Payment verified");

console.log("➡️ About to save customer");

const savedCustomer = await getOrCreateCustomer({
  first_name: customer.firstName,
  last_name: customer.lastName,
  email: customer.email,
  phone: customer.phone,
});

console.log("✅ Customer saved");

console.log(savedCustomer);

console.log("Customer:", savedCustomer);
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}