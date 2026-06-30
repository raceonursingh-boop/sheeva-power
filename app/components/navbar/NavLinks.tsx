"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/" },
  { name: "Collections", href: "/collections/power" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

export default function NavLinks() {
  return (
    <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wider text-gray-300 lg:flex">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="transition hover:text-red-500"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}