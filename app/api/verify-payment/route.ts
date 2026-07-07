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

    // Verify Razorpay signature
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
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
    // Customer
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
    // Address
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
    // Order
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
    // Order Items
    // ===========================

    console.log("➡️ Saving order items...");

    await createOrderItems(
      cart.map((item: any) => ({
        order_id: savedOrder.id,
        product_id: item.id,
        product_name: item.name,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      }))
    );

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