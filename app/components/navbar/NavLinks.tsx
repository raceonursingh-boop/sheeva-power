"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/#philosophy" },
  { name: "Contact", href: "/#footer" },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-gray-300 lg:flex">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="relative transition duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}