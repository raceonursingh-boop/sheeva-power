"use client";

export default function PaymentSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#111] p-8">

      <h2 className="mb-6 text-2xl font-black uppercase text-white">
        Payment
      </h2>

      <div className="space-y-4">

        <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 p-5 hover:border-red-600">

          <input
            type="radio"
            name="payment"
            defaultChecked
          />

          <span className="text-white">
            Razorpay (Cards / UPI / Net Banking)
          </span>

        </label>

        <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 p-5 hover:border-red-600">

          <input
            type="radio"
            name="payment"
          />

          <span className="text-white">
            Cash on Delivery
          </span>

        </label>

      </div>

    </section>
  );
}