import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="uppercase tracking-[0.4em] text-red-500">
            Secure Checkout
          </p>

          <h1 className="mt-4 text-6xl font-black text-white">
            Checkout
          </h1>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}