"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col"
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">Shopping Bag</h2>
          <button
            onClick={closeCart}
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close shopping bag"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
              <ShoppingBag className="h-12 w-12" />
              <p className="text-sm">Your bag is empty</p>
              <button
                onClick={closeCart}
                className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-foreground leading-tight">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.color} / {item.size}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                          }
                          className="h-7 w-7 rounded border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center text-foreground">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                          }
                          className="h-7 w-7 rounded border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-foreground">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id, item.size, item.color)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-lg font-semibold text-foreground">${totalPrice.toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-semibold tracking-wide text-center hover:bg-[#d81b60] transition-colors"
            >
              Checkout Now
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
