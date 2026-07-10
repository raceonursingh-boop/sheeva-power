"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Orders",
    href: "/admin/orders",
  },
  {
    name: "Customers",
    href: "/admin/customers",
  },
  {
    name: "Products",
    href: "/admin/products",
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
  },
  {
    name: "Coupons",
    href: "/admin/coupons",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-white/10 bg-black lg:flex lg:flex-col">
      <div className="border-b border-white/10 p-8">
        <h1 className="text-2xl font-black uppercase tracking-[0.25em]">
          SHEEVA
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Power Admin
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-6">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-5 py-4 transition-all ${
                active
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}