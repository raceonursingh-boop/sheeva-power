"use client";

import { useState, useEffect } from "react";

import SearchBar from "../SearchBar";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";

import HamburgerButton from "./HamburgerButton";
import SideMenu from "./SideMenu";

import MiniCart from "../cart/MiniCart";

import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { openCart, totalItems } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close with Escape
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

  // Detect scrolling
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-500 ${
            scrolled ? "py-3" : "py-6"
          }`}
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
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
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
      </header>

    
      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}