"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <Image
        src="/logo.png"
        alt="Sheeva Power Logo"
        width={50}
        height={50}
        priority
        className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
      />

<h1
  className="
    whitespace-nowrap
    text-3xl
    font-black
    uppercase
    tracking-tight
    bg-gradient-to-r
    from-white
    via-[#60A5FA]
    to-[#1D4ED8]
    bg-clip-text
    text-transparent
    transition-all
    duration-300
    group-hover:brightness-110
  "
>
  SHEEVA POWER
</h1>
    </Link>
  );
}