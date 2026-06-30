"use client";

export default function ShippingMethod() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#111] p-8">

      <h2 className="mb-6 text-2xl font-black uppercase text-white">
        Shipping Method
      </h2>

      <div className="space-y-4">

        <label className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 p-5 hover:border-red-600">

          <div>
            <p className="font-bold text-white">
              Standard Shipping
            </p>

            <p className="text-sm text-gray-400">
              Delivery in 3–5 business days
            </p>
          </div>

          <span className="font-bold text-red-500">
            FREE
          </span>

        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 p-5 hover:border-red-600">

          <div>
            <p className="font-bold text-white">
              Express Shipping
            </p>

            <p className="text-sm text-gray-400">
              Delivery in 1–2 business days
            </p>
          </div>

          <span className="font-bold text-red-500">
            ₹199
          </span>

        </label>

      </div>

    </section>
  );
}