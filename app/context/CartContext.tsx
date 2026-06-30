"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (
    item: Omit<CartItem, "quantity">
  ) => void;

  increaseQuantity: (
    id: number,
    size: string
  ) => void;

  decreaseQuantity: (
    id: number,
    size: string
  ) => void;

  clearCart: () => void;

  subtotal: number;

  totalItems: number;

  isCartOpen: boolean;

  openCart: () => void;

  closeCart: () => void;

  toggleCart: () => void;
};

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem(
      "sheeva-cart"
    );

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(
      "sheeva-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }

  function addToCart(
    item: Omit<CartItem, "quantity">
  ) {
    setCart((prev) => {
      const existing = prev.find(
        (p) =>
          p.id === item.id &&
          p.size === item.size
      );

      if (existing) {
        return prev.map((p) =>
          p.id === item.id &&
          p.size === item.size
            ? {
                ...p,
                quantity: p.quantity + 1,
              }
            : p
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    openCart();
  }

  function increaseQuantity(
    id: number,
    size: string
  ) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.size === size
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(
    id: number,
    size: string
  ) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.size === size
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        subtotal,
        totalItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}