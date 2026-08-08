import Link from "next/link";
import { getOrders } from "@/app/lib/adminOrders";
import OrderStatus from "@/app/components/admin/OrderStatus";
export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="uppercase tracking-[0.4em] text-red-500">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black text-white">
          Orders
        </h1>

        <p className="mt-3 text-zinc-400">
          View and manage customer orders.
        </p>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/5">
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <th className="p-6">Order</th>
              <th className="p-6">Customer</th>
              <th className="p-6">Total</th>
              <th className="p-6">Payment</th>
              <th className="p-6">Status</th>
              <th className="p-6">Date</th>
              <th className="p-6 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order: any) => (
              <tr
                key={order.id}
                className="cursor-pointer border-b border-white/5 transition-all duration-300 hover:bg-white/5"
              >
                {/* Order ID */}
                <td className="p-6">
                  <span className="font-mono text-xs tracking-wider text-zinc-500">
                    #{order.id.slice(0, 8).toUpperCase()}
                  </span>
                </td>

                {/* Customer */}
                <td className="p-6">
                  <div className="font-semibold text-white">
                    {order.customers?.first_name}{" "}
                    {order.customers?.last_name}
                  </div>

                  <div className="mt-1 text-sm text-zinc-500">
                    {order.customers?.email}
                  </div>
                </td>

                {/* Total */}
                <td className="p-6">
                  <span className="text-lg font-bold text-white">
                    ₹{order.total.toLocaleString("en-IN")}
                  </span>
                </td>

                {/* Payment */}
                <td className="p-6">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      order.payment_status === "paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {order.payment_status.charAt(0).toUpperCase() +
                      order.payment_status.slice(1)}
                  </span>
                </td>

                {/* Status */}
                <td className="p-6">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      order.order_status === "pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : order.order_status === "processing"
                        ? "bg-blue-500/20 text-blue-400"
                        : order.order_status === "shipped"
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {order.order_status.charAt(0).toUpperCase() +
                      order.order_status.slice(1)}
                  </span>
                </td>

                {/* Date */}
                <td className="p-6 text-zinc-300">
                  {new Date(order.created_at).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </td>

                {/* Action */}
                <td className="p-6 text-right">
                  <Link
                    href={`/admin/orders/${order.id}`}
                    className="rounded-full border border-red-600 px-5 py-2 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-600 hover:text-white"
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-zinc-400">
              No orders yet.
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Orders will appear here after successful checkout.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}