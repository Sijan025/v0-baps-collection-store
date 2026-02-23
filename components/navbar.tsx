"use client"

import Link from "next/link"
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"

export function Navbar() {
  const { totalItems, openCart } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Left - Search + Mobile Menu */}
        <div className="flex items-center gap-4 w-1/3">
          <button
            className="lg:hidden text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase">
              Shop
            </Link>
            <Link href="/lookbook" className="text-sm text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase">
              Lookbook
            </Link>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex-shrink-0 w-1/3 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-lg lg:text-xl font-bold tracking-[0.3em] text-foreground uppercase">
              Baps Collection
            </h1>
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center justify-end gap-4 w-1/3">
          <Link
            href="/wishlist"
            className="text-foreground/80 hover:text-foreground transition-colors hidden sm:block"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <button
            onClick={openCart}
            className="relative text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors hidden sm:block" aria-label="Profile">
            <User className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/lookbook"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors tracking-wide uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lookbook
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
