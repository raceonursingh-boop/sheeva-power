import Link from "next/link";
import { getCustomers } from "@/app/lib/adminCustomers";

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <p className="uppercase tracking-[0.4em] text-red-500">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black text-white">
          Customers
        </h1>

        <p className="mt-3 text-zinc-400">
          View and manage your customers.
        </p>
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/5">
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <th className="p-6">Customer</th>
              <th className="p-6">Phone</th>
              <th className="p-6">Orders</th>
              <th className="p-6">Spent</th>
              <th className="p-6">Last Order</th>
              <th className="p-6 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer: any) => (
              <tr
                key={customer.id}
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                {/* Customer */}

                <td className="p-6">
                  <div className="font-semibold text-white">
                    {customer.first_name} {customer.last_name}
                  </div>

                  <div className="mt-1 text-sm text-zinc-500">
                    {customer.email}
                  </div>
                </td>

                {/* Phone */}

                <td className="p-6 text-zinc-300">
                  {customer.phone}
                </td>

                {/* Orders */}

                <td className="p-6">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                    {customer.totalOrders}
                  </span>
                </td>

                {/* Total Spent */}

                <td className="p-6 font-bold text-white">
                  ₹{customer.totalSpent.toLocaleString("en-IN")}
                </td>

                {/* Last Order */}

                <td className="p-6 text-zinc-300">
                  {customer.lastOrder
                    ? new Date(
                        customer.lastOrder
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "-"}
                </td>

                {/* View */}

                <td className="p-6 text-right">
                  <Link
                    href={`/admin/customers/${customer.id}`}
                    className="rounded-full border border-red-600 px-5 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-600 hover:text-white"
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {customers.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-zinc-400">
              No customers found.
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Customers will appear here after checkout.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}