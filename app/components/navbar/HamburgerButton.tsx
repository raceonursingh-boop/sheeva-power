"use client";

import { Menu, X } from "lucide-react";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerButton({
  open,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-white/10 p-3 text-white transition hover:border-red-600 hover:bg-[#111]"
      aria-label="Toggle Menu"
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}