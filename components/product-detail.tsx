"use client"

import Image from "next/image"
import { useState } from "react"
import { Star, Heart, Ruler, ShieldCheck, Truck, RotateCcw } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/data"

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem(product, selectedSize, selectedColor)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left - Image Gallery */}
          <div className="flex-1 flex gap-4">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Product Info (Sticky) */}
          <div className="lg:w-[420px] lg:sticky lg:top-24 lg:self-start">
            {/* Breadcrumb */}
            <p className="text-xs text-muted-foreground tracking-wide uppercase mb-4">
              {product.category}
            </p>

            <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-foreground mt-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-3">
                Color: <span className="text-muted-foreground font-normal">{selectedColor}</span>
              </p>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`h-8 w-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-primary scale-110"
                        : "border-border hover:border-foreground/40"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Size Chips */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-foreground">Size</p>
                <button className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  <Ruler className="h-3 w-3" />
                  Fit Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-[48px] px-4 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-foreground border-border hover:border-foreground/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs text-muted-foreground mt-2">Select a size to continue</p>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d81b60] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Bag
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`h-12 w-12 rounded-lg border flex items-center justify-center transition-all ${
                  isWishlisted
                    ? "bg-primary/10 border-primary text-primary"
                    : "border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground"
                }`}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-primary" : ""}`} />
              </button>
            </div>

            {/* Perks */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 flex-shrink-0" />
                <span>Complimentary shipping on orders over $300</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RotateCcw className="h-4 w-4 flex-shrink-0" />
                <span>30-day returns & exchanges</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                <span>Authenticity guaranteed</span>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-foreground mb-3">Care Instructions</h3>
              <ul className="flex flex-col gap-2">
                {product.careInstructions.map((instruction, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
