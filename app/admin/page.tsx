import StatCard from "./components/StatCard";
import { getDashboardStats } from "../lib/dashboard";

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-10">
      <div>
        <p className="uppercase tracking-[0.35em] text-red-500">
          Admin
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Dashboard
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Revenue"
          value={`₹${stats.revenue}`}
          subtitle="Total Revenue"
        />

        <StatCard
          title="Orders"
          value={stats.orders}
          subtitle="Orders Received"
        />

        <StatCard
          title="Customers"
          value={stats.customers}
          subtitle="Registered Customers"
        />

        <StatCard
          title="Products Sold"
          value={stats.productsSold}
          subtitle="Items Sold"
        />
      </div>
    </div>
  );
}