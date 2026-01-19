import type { Metadata } from "next";
import { Nunito, Bubblegum_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bubblegum = Bubblegum_Sans({
  variable: "--font-bubblegum",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://popandchipshop.in"),
  title: "The Pop and Chip Shop | Homemade Baked Goodies",
  description: "Delicious homemade cookies, muffins, cake pops, loaf cakes and more! Freshly baked with love in Bangalore. Order your favorite treats today!",
  keywords: ["bakery", "homemade cookies", "cake pops", "muffins", "bangalore bakery", "home bakery", "fresh baked goods"],
  authors: [{ name: "Chaitra Poornima" }],
  openGraph: {
    title: "The Pop and Chip Shop | Homemade Baked Goodies",
    description: "Delicious homemade cookies, muffins, cake pops, loaf cakes and more! Freshly baked with love.",
    type: "website",
    url: "https://popandchipshop.in",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pop and Chip Shop",
    description: "Delicious homemade cookies, muffins, cake pops, loaf cakes and more!",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${bubblegum.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
