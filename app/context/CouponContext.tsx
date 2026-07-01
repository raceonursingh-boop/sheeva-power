"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { coupons } from "../lib/coupons";

type CouponContextType = {
  coupon: string;
  discount: number;
  applyCoupon: (
    code: string,
    subtotal: number
  ) => boolean;
  clearCoupon: () => void;
};

const CouponContext = createContext<
  CouponContextType | undefined
>(undefined);

export function CouponProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] =
    useState(0);

  function applyCoupon(
    code: string,
    subtotal: number
  ) {
    const found = coupons.find(
      (c) =>
        c.code === code.toUpperCase()
    );

    if (!found) return false;

    if (found.type === "percentage") {
      setDiscount(
        (subtotal * found.value) / 100
      );
    } else {
      setDiscount(found.value);
    }

    setCoupon(found.code);

    return true;
  }

  function clearCoupon() {
    setCoupon("");
    setDiscount(0);
  }

  return (
    <CouponContext.Provider
      value={{
        coupon,
        discount,
        applyCoupon,
        clearCoupon,
      }}
    >
      {children}
    </CouponContext.Provider>
  );
}

export function useCoupon() {
  const context =
    useContext(CouponContext);

  if (!context) {
    throw new Error(
      "useCoupon must be used inside CouponProvider"
    );
  }

  return context;
}