"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="cursor-pointer whitespace-nowrap text-3xl font-black uppercase text-white">
        SHEEVA<span className="text-red-600"> POWER</span>
      </h1>
    </Link>
  );
}