import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">

      <div className="max-w-xl rounded-3xl border border-white/10 bg-[#111] p-12 text-center">

        <CheckCircle2
          size={90}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-8 text-5xl font-black text-white">
          Order Confirmed
        </h1>

        <p className="mt-6 leading-8 text-gray-400">
          Thank you for shopping with
          <span className="font-bold text-white">
            {" "}Sheeva Power
          </span>.
          Your order has been received and is being processed.
        </p>

        <Link
          href="/shop"
          className="mt-10 inline-flex rounded-full bg-red-600 px-10 py-4 font-bold uppercase tracking-widest text-white transition hover:bg-red-700"
        >
          Continue Shopping
        </Link>

      </div>

    </main>
  );
}