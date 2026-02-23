import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/cart-provider"
import { Navbar } from "@/components/navbar"
import { CartDrawer } from "@/components/cart-drawer"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "BAPS COLLECTION | Elevated Essentials for the Modern Wardrobe",
  description:
    "Discover premium men's fashion at Baps Collection. Shop curated suits, shirts, denim, and knitwear designed for the modern man.",
}

export const viewport: Viewport = {
  themeColor: "#121212",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
