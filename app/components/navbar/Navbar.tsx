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
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div
          className={`
            w-full
            max-w-7xl
            rounded-2xl
            transition-all
            duration-500
            ${
              scrolled
                ? "border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl"
                : "border border-transparent bg-transparent"
            }
          `}
        >
          <div
            className={`
              flex
              items-center
              justify-between
              gap-6
              px-6
              transition-all
              duration-500
              ${scrolled ? "py-4" : "py-5"}
            `}
          >
            <Logo />

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <NavLinks />
            </div>

            {/* Desktop Search */}
            <div className="hidden max-w-sm flex-1 xl:block">
              <SearchBar />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <WishlistButton />

              <div className="relative">
                <CartButton onClick={openCart} />

                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white shadow-lg">
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