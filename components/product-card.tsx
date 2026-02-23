"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"
import type { Product } from "@/lib/data"

export function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            isWishlisted ? "fill-primary text-primary" : "text-foreground/80"
          }`}
        />
      </button>

      {/* Product Info */}
      <div className="mt-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-semibold text-foreground">${product.price}</p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) ? "text-primary" : "text-muted-foreground/30"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}
