"use client";

export default function ShippingCard() {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-[#111] p-6">

      <h3 className="mb-5 text-lg font-black uppercase text-white">
        Shipping & Returns
      </h3>

      <div className="space-y-3 text-gray-300">

        <p>🚚 Free shipping on orders above ₹999</p>

        <p>📦 Ships within 1–2 business days</p>

        <p>🔄 7-Day Easy Returns</p>

        <p>✅ Secure Checkout</p>

      </div>

    </div>
  );
}