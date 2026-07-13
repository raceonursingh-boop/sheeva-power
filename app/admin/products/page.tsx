import Link from "next/link";
import { getProducts } from "@/app/lib/adminProducts";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="uppercase tracking-[0.4em] text-red-500">
            Admin
          </p>

          <h1 className="mt-4 text-5xl font-black text-white">
            Products
          </h1>

          <p className="mt-3 text-zinc-400">
            Manage your store products.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          + Add Product
        </Link>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/5">
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <th className="p-6">Product</th>
              <th className="p-6">Price</th>
              <th className="p-6">Stock</th>
              <th className="p-6">Collection</th>
              <th className="p-6">Badge</th>
              <th className="p-6">Status</th>
              <th className="p-6 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product: any) => (
              <tr
                key={product.id}
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                {/* Product */}
                <td className="p-6">
                  <div className="font-semibold text-white">
                    {product.name}
                  </div>

                  <div className="mt-1 text-sm text-zinc-500">
                    {product.category}
                  </div>
                </td>

                {/* Price */}
                <td className="p-6 font-bold text-white">
                  ₹{product.price.toLocaleString("en-IN")}
                </td>

                {/* Stock */}
                <td className="p-6">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      product.stock > 0
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>

                {/* Collection */}
                <td className="p-6 text-zinc-300">
                  {product.collection}
                </td>

                {/* Badge */}
                <td className="p-6">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                    {product.badge}
                  </span>
                </td>

                {/* Status */}
                <td className="p-6">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      product.active
                        ? "bg-green-500/20 text-green-400"
                        : "bg-zinc-500/20 text-zinc-400"
                    }`}
                  >
                    {product.active ? "Active" : "Hidden"}
                  </span>
                </td>

                {/* Action */}
                <td className="p-6 text-right">
                  <Link
                    href={`/admin/products/${product.id}`}
                    className="rounded-full border border-red-600 px-5 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-600 hover:text-white"
                  >
                    Edit →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-zinc-400">
              No products found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}