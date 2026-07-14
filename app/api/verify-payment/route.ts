import { NextResponse } from "next/server";
import crypto from "crypto";

import { getOrCreateCustomer } from "../../lib/customers";
import { createAddress } from "../../lib/addresses";
import { createOrder } from "../../lib/orders";
import { createOrderItems } from "../../lib/orderitems";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type VerifyPaymentRequest = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;

  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };

  address: {
    address: string;
    city: string;
    state: string;
    pinCode: string;
    country: string;
  };

  cart: CartItem[];

  subtotal: number;
  shipping: number;
  total: number;
};

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
    }: VerifyPaymentRequest = await request.json();

    // ===========================
    // Verify Razorpay Signature
    // ===========================

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 }
      );
    }

    console.log("✅ Payment verified");

    // ===========================
    // Save Customer
    // ===========================

    console.log("➡️ Saving customer...");

    const savedCustomer = await getOrCreateCustomer({
      first_name: customer.firstName,
      last_name: customer.lastName,
      email: customer.email,
      phone: customer.phone,
    });

    console.log("✅ Customer saved");
    console.log(savedCustomer);

    // ===========================
    // Save Address
    // ===========================

    console.log("➡️ Saving address...");

    const savedAddress = await createAddress({
      customer_id: savedCustomer.id,
      address: address.address,
      city: address.city,
      state: address.state,
      pin_code: address.pinCode,
      country: address.country,
    });

    console.log("✅ Address saved");
    console.log(savedAddress);

    // ===========================
    // Save Order
    // ===========================

    console.log("➡️ Saving order...");

    const savedOrder = await createOrder({
      customer_id: savedCustomer.id,
      razorpay_order_id,
      razorpay_payment_id,
      subtotal,
      shipping,
      total,
      payment_status: "paid",
      order_status: "pending",
    });

    console.log("✅ Order saved");
    console.log(savedOrder);

    // ===========================
    // Save Order Items
    // ===========================

    console.log("➡️ Saving order items...");

    const orderItems = cart.map((item) => ({
      order_id: savedOrder.id,
      product_id: item.id,
      product_name: item.name,
      size: item.size,
      quantity: item.quantity,
      price: item.price,
    }));

    console.log("========== ORDER ITEMS ==========");
    console.log(JSON.stringify(orderItems, null, 2));
    console.log("================================");

    await createOrderItems(orderItems);

    console.log("✅ Order items saved");

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("❌ VERIFY PAYMENT ERROR");
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