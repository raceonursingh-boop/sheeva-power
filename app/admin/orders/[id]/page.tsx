import { getOrder } from "@/app/lib/adminOrder";
import OrderStatus from "@/app/components/admin/OrderStatus";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderPage({
  params,
}: PageProps) {
  const { id } = await params;

  const order = await getOrder(id);

  const address = order.addresses?.[0];

  return (
    <div className="space-y-10">
      {/* Header */}

      <div>
        <p className="uppercase tracking-[0.4em] text-red-500">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black text-white">
          Order Details
        </h1>

        <p className="mt-3 font-mono text-zinc-500">
          #{order.id.slice(0, 8).toUpperCase()}
        </p>
      </div>

      {/* Customer + Shipping */}

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Customer */}

        <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
          <h2 className="mb-6 text-xl font-bold text-white">
            Customer
          </h2>

          <div className="space-y-3">
            <p className="font-semibold text-white">
              {order.customers.first_name}{" "}
              {order.customers.last_name}
            </p>

            <p className="text-zinc-400">
              {order.customers.email}
            </p>

            <p className="text-zinc-400">
              {order.customers.phone}
            </p>
          </div>
        </div>

        {/* Shipping */}

        <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
          <h2 className="mb-6 text-xl font-bold text-white">
            Shipping Address
          </h2>

          {address ? (
            <div className="space-y-2 text-zinc-300">
              <p>{address.address}</p>

              <p>
                {address.city}, {address.state}
              </p>

              <p>{address.pin_code}</p>

              <p>{address.country}</p>
            </div>
          ) : (
            <p className="text-zinc-500">
              No shipping address found.
            </p>
          )}
        </div>
      </div>

      {/* Products */}

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
        <h2 className="mb-8 text-xl font-bold text-white">
          Products Ordered
        </h2>

        <div className="space-y-6">
          {order.order_items.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/40 p-5"
            >
              <div>
                <h3 className="font-semibold text-white">
                  {item.product_name}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Size {item.size}
                </p>
              </div>

              <div className="text-right">
                <p className="text-zinc-400">
                  Qty {item.quantity}
                </p>

                <p className="mt-2 font-bold text-white">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment */}

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
        <h2 className="mb-8 text-xl font-bold text-white">
          Payment & Order
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Payment Status
              </p>

              <span className="mt-2 inline-block rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
                {order.payment_status.charAt(0).toUpperCase() +
                  order.payment_status.slice(1)}
              </span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Order Status
              </p>

              <span className="mt-2 inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-400">
                {order.order_status.charAt(0).toUpperCase() +
                  order.order_status.slice(1)}
              </span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Total Paid
              </p>

              <p className="mt-2 text-3xl font-black text-white">
                ₹{order.total.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Razorpay Order ID
              </p>

              <p className="mt-2 break-all font-mono text-sm text-zinc-300">
                {order.razorpay_order_id}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Razorpay Payment ID
              </p>

              <p className="mt-2 break-all font-mono text-sm text-zinc-300">
                {order.razorpay_payment_id}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Update Status */}

      <OrderStatus
        orderId={order.id}
        currentStatus={order.order_status}
      />
    </div>
  );
}