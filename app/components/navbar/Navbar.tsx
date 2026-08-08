"use client";

import { useState, useEffect } from "react";

import SearchBar from "../SearchBar";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";

import HamburgerButton from "./HamburgerButton";
import SideMenu from "./SideMenu";

import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { openCart, totalItems } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={`
            mx-auto
            w-full
            max-w-7xl
            rounded-2xl
            transition-all
            duration-500
            ${
              scrolled
                ? "border border-white/10 bg-black/70 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
                : "border border-white/5 bg-black/25 backdrop-blur-xl"
            }
          `}
        >
          <div
            className={`
              flex
              items-center
              justify-between
              gap-4
              px-4
              transition-all
              duration-500
              sm:px-6
              lg:px-8
              ${scrolled ? "py-4 lg:py-5" : "py-5 lg:py-6"}
            `}
          >
            {/* Logo */}
            <div className="min-w-0 flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <NavLinks />
            </div>

            {/* Desktop Search */}
            <div className="hidden max-w-md flex-1 xl:block">
              <SearchBar />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 lg:gap-4">
              <WishlistButton />

              <div className="relative">
                <CartButton onClick={openCart} />

                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-lg sm:-right-2 sm:-top-2 sm:h-6 sm:w-6 sm:text-xs">
                    {totalItems}
                  </span>
                )}
              </div>

              <HamburgerButton
                open={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          </div>
        </div>
      </header>

      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}