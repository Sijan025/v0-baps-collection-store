"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X, ShoppingBag, ArrowRight } from "lucide-react"
import { lookbookItems, products } from "@/lib/data"

export function LookbookFeed() {
  const [quickViewProduct, setQuickViewProduct] = useState<string | null>(null)

  const activeProduct = quickViewProduct ? products.find((p) => p.id === quickViewProduct) : null

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
            The Edit
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
            Lookbook
          </h1>
          <p className="text-foreground/60 mt-4 max-w-md mx-auto text-pretty">
            Magazine-style editorial featuring our latest collections
          </p>
        </div>

        {/* Feed */}
        <div className="flex flex-col gap-20">
          {lookbookItems.map((look, idx) => (
            <article
              key={look.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary group">
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    className="object-cover"
                  />

                  {/* Hotspot overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                      <p className="text-white text-sm font-medium tracking-wide">Shop the Look</p>
                      <div className="flex gap-2">
                        {look.products.map((productId) => {
                          const product = products.find((p) => p.id === productId)
                          if (!product) return null
                          return (
                            <button
                              key={product.id}
                              onClick={() => setQuickViewProduct(product.id)}
                              className="bg-white/90 backdrop-blur-sm text-background px-4 py-2 rounded-lg text-xs font-medium hover:bg-white transition-colors"
                            >
                              {product.name.split(" ").slice(0, 2).join(" ")}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="lg:w-[360px] flex flex-col justify-center">
                <span className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                  Look {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                  {look.title}
                </h2>
                <p className="text-foreground/60 mt-3 leading-relaxed">
                  {look.description}
                </p>

                {/* Featured products */}
                <div className="mt-6 flex flex-col gap-3">
                  {look.products.map((productId) => {
                    const product = products.find((p) => p.id === productId)
                    if (!product) return null
                    return (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="flex items-center gap-3 group/item p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                      >
                        <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate group-hover/item:text-primary transition-colors">
                            {product.name}
                          </p>
                          <p className="text-sm text-muted-foreground">${product.price}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {activeProduct && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setQuickViewProduct(null)}
          />
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto bg-background border border-border rounded-2xl z-50 overflow-hidden">
            <div className="flex items-start gap-4 p-6">
              <div className="relative w-28 h-36 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                <Image src={activeProduct.image} alt={activeProduct.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{activeProduct.category}</p>
                    <h3 className="text-lg font-bold text-foreground mt-1">{activeProduct.name}</h3>
                  </div>
                  <button
                    onClick={() => setQuickViewProduct(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close quick view"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xl font-bold text-foreground mt-2">${activeProduct.price}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                  {activeProduct.description}
                </p>
                <Link
                  href={`/products/${activeProduct.id}`}
                  className="mt-4 w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d81b60] transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
