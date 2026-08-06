import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CouponProvider } from "./context/CouponContext";

import MiniCart from "./components/cart/MiniCart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sheevapower.com"),

  title: {
    default: "SHEEVA POWER | Premium Oversized Streetwear",
    template: "%s | SHEEVA POWER",
  },

  description:
    "Built For The Relentless. Premium 240 GSM oversized streetwear designed to outlive trends.",

  keywords: [
    "Sheeva Power",
    "Streetwear",
    "Oversized T-Shirt",
    "Luxury Streetwear",
    "240 GSM",
    "Premium Clothing",
    "Indian Streetwear",
    "Minimal Fashion",
    "Oversized Clothing",
    "Heavyweight Cotton",
  ],

  authors: [
    {
      name: "SHEEVA POWER",
    },
  ],

  creator: "SHEEVA POWER",

  publisher: "SHEEVA POWER",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sheevapower.com",
    siteName: "SHEEVA POWER",
    title: "SHEEVA POWER | Premium Oversized Streetwear",
    description:
      "Built For The Relentless. Premium 240 GSM oversized streetwear designed to outlive trends.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SHEEVA POWER",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SHEEVA POWER",
    description:
      "Built For The Relentless. Premium oversized streetwear.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <CouponProvider>

                {/* Global Mini Cart */}

                <MiniCart />

                {children}

              </CouponProvider>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}