import Link from "next/link";
import { getCustomer } from "@/app/lib/adminCustomer";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CustomerPage({
  params,
}: PageProps) {
  const { id } = await params;

  const customer = await getCustomer(id);

  return (
    <div className="space-y-10">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="uppercase tracking-[0.4em] text-red-500">
            Admin
          </p>

          <h1 className="mt-4 text-5xl font-black text-white">
            Customer Details
          </h1>

          <p className="mt-3 text-zinc-500">
            Customer Profile
          </p>
        </div>

        <Link
          href="/admin/customers"
          className="rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/5"
        >
          ← Back
        </Link>
      </div>

      {/* Customer Info */}

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
          <h2 className="mb-6 text-xl font-bold text-white">
            Customer
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Name
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                {customer.first_name} {customer.last_name}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Email
              </p>

              <p className="mt-1 text-zinc-300">
                {customer.email}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Phone
              </p>

              <p className="mt-1 text-zinc-300">
                {customer.phone}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Joined
              </p>

              <p className="mt-1 text-zinc-300">
                {new Date(
                  customer.created_at
                ).toLocaleDateString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
          <h2 className="mb-6 text-xl font-bold text-white">
            Statistics
          </h2>

          <div className="space-y-6">
            <div className="flex justify-between">
              <span className="text-zinc-400">
                Total Orders
              </span>

              <span className="font-bold text-white">
                {customer.totalOrders}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-400">
                Lifetime Spend
              </span>

              <span className="font-bold text-white">
                ₹{customer.totalSpent.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-400">
                Average Order
              </span>

              <span className="font-bold text-white">
                ₹{customer.averageOrder.toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Addresses */}

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
        <h2 className="mb-8 text-xl font-bold text-white">
          Addresses
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {customer.addresses.length > 0 ? (
            customer.addresses.map((address: any) => (
              <div
                key={address.id}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <p className="text-white">
                  {address.address}
                </p>

                <p className="mt-2 text-zinc-400">
                  {address.city}, {address.state}
                </p>

                <p className="text-zinc-400">
                  {address.pin_code}
                </p>

                <p className="text-zinc-400">
                  {address.country}
                </p>
              </div>
            ))
          ) : (
            <p className="text-zinc-500">
              No addresses found.
            </p>
          )}
        </div>
      </div>

      {/* Orders */}

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
        <h2 className="mb-8 text-xl font-bold text-white">
          Orders
        </h2>

        <div className="space-y-5">
          {customer.orders.length > 0 ? (
            customer.orders.map((order: any) => (
              <Link
                key={order.id}
                href={`/admin/orders/${order.id}`}
                className="block rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-red-600"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-sm text-zinc-400">
                      #{order.id.slice(0, 8).toUpperCase()}
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      ₹{order.total.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-400">
                      {order.order_status}
                    </span>

                    <p className="mt-3 text-sm text-zinc-500">
                      {new Date(
                        order.created_at
                      ).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-zinc-500">
              No orders found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}