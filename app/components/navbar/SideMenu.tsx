"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Collections",
    href: "/collections",
  },
  {
    name: "Search",
    href: "/search",
  },
  {
    name: "Wishlist",
    href: "/wishlist",
  },
  {
    name: "Cart",
    href: "/cart",
  },
];

export default function SideMenu({
  open,
  onClose,
}: Props) {
  const pathname = usePathname();

  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[85vw] max-w-[380px] flex-col bg-[#090909] px-10 py-8 shadow-2xl"
          >
            <div className="mb-14 flex items-start justify-between">
              <h2 className="text-5xl font-black uppercase leading-none">
                <span className="text-white">
                  SHEEVA
                </span>

                <br />

                <span className="text-red-600">
                  POWER
                </span>
              </h2>

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 p-3 text-white transition-all duration-300 hover:border-red-600 hover:bg-[#151515]"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-9">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between text-2xl font-black uppercase tracking-wide transition-all duration-300 hover:translate-x-2 ${
                      pathname === item.href
                        ? "text-red-600"
                        : "text-white hover:text-red-600"
                    }`}
                  >
                    <span>{item.name}</span>

                    {item.name === "Cart" &&
                      totalItems > 0 && (
                        <span className="rounded-full bg-red-600 px-3 py-1 text-sm text-white">
                          {totalItems}
                        </span>
                      )}

                    {item.name === "Wishlist" &&
                      wishlist.length > 0 && (
                        <span className="rounded-full bg-red-600 px-3 py-1 text-sm text-white">
                          {wishlist.length}
                        </span>
                      )}
                  </Link>
                </motion.div>
              ))}
            </nav>
                        {/* Footer */}
            <div className="mt-auto border-t border-white/10 pt-8">

              {user ? (
                <div className="space-y-4">

                  <Link
                    href="/admin"
                    onClick={onClose}
                    className="block text-lg font-bold uppercase tracking-wide text-red-600 transition hover:text-red-500"
                  >
                    Admin Dashboard
                  </Link>

                  <button
                    onClick={async () => {
                      await logout();
                      onClose();
                    }}
                    className="block text-lg font-bold uppercase tracking-wide text-white transition hover:text-red-600"
                  >
                    Logout
                  </button>

                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={onClose}
                  className="block text-lg font-bold uppercase tracking-wide text-white transition hover:text-red-600"
                >
                  Login
                </Link>
              )}

              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
                  SHEEVA POWER
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  Built For The Relentless
                </p>
              </div>

            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}