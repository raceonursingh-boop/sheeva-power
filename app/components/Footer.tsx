import Link from "next/link";

import { Mail, ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0b0b0b] to-black">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <h2 className="text-5xl font-black uppercase leading-none">
              <span className="text-white">
                SHEEVA
              </span>

              <br />

              <span className="text-red-600">
                POWER
              </span>
            </h2>

            <p className="mt-8 max-w-xs leading-8 text-neutral-400">
              Built For The Relentless.
              Premium oversized streetwear designed
              to outlive trends.
            </p>
          </div>

          {/* Shop */}

          <div>

            <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-white">
              Shop
            </h3>

            <div className="space-y-5">

              <Link
                href="/shop"
                className="group flex items-center gap-3 text-neutral-400 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-8" />
                Shop
              </Link>

              <Link
                href="/wishlist"
                className="group flex items-center gap-3 text-neutral-400 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-8" />
                Wishlist
              </Link>

              <Link
                href="/checkout"
                className="group flex items-center gap-3 text-neutral-400 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-8" />
                Checkout
              </Link>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-white">
              Navigate
            </h3>

            <div className="space-y-5">

              <Link
                href="/"
                className="group flex items-center gap-3 text-neutral-400 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-8" />
                Home
              </Link>

              <Link
                href="/shop"
                className="group flex items-center gap-3 text-neutral-400 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-8" />
                Shop
              </Link>

              <Link
                href="/login"
                className="group flex items-center gap-3 text-neutral-400 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-red-600 transition-all duration-300 group-hover:w-8" />
                Login
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-white">
              Contact
            </h3>

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Have a question?
            </p>

            <a
              href="mailto:sheevapower@gmail.com"
              className="group flex items-center gap-3 text-neutral-300 transition hover:text-white"
            >
              <Mail size={18} />
              sheevapower@gmail.com
            </a>

            <div className="mt-12">

              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Follow
              </p>

              <a
                href="https://instagram.com/sheevapower"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-neutral-300 transition hover:text-white"
              >
                <FaInstagram size={18} />

                Instagram

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </a>

            </div>

          </div>

        </div>

        {/* Watermark */}

        <div className="mt-28 overflow-hidden border-t border-white/10 pt-20">

          <h2
            className="
              select-none
              text-center
              text-[4rem]
              font-black
              uppercase
              leading-none
              tracking-[0.18em]
              text-white/[0.03]
              md:text-[7rem]
              lg:text-[10rem]
            "
          >
            SHEEVA POWER
          </h2>

        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} SHEEVA POWER.
            All Rights Reserved.
          </p>

          <p className="text-xs uppercase tracking-[0.45em] text-neutral-600">
            BUILT FOR THE RELENTLESS
          </p>

        </div>

      </div>

    </footer>
  );
}