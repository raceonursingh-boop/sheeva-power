"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  orderId: string;
  currentStatus: string;
}

export default function OrderStatus({
  orderId,
  currentStatus,
}: Props) {
  const router = useRouter();

  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  async function saveStatus() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/admin/update-order-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: orderId,
            status,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error("Failed to update order.");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update order.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-8">
      <h2 className="mb-6 text-xl font-bold text-white">
        Update Order Status
      </h2>

      <div className="flex flex-wrap gap-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-white/10 bg-black px-5 py-3 text-white"
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="packed">Packed</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <button
          onClick={saveStatus}
          disabled={loading}
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}