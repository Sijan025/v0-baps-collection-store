"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronLeft, CreditCard, Lock, MapPin, Package } from "lucide-react"
import { useCart } from "@/components/cart-provider"

type Step = "shipping" | "payment" | "review"

const steps: { key: Step; label: string; icon: React.ElementType }[] = [
  { key: "shipping", label: "Shipping", icon: MapPin },
  { key: "payment", label: "Payment", icon: CreditCard },
  { key: "review", label: "Review", icon: Package },
]

export function CheckoutWizard() {
  const { items, totalPrice, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState<Step>("shipping")
  const [isComplete, setIsComplete] = useState(false)

  const currentIndex = steps.findIndex((s) => s.key === currentStep)

  const goNext = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].key)
    } else {
      setIsComplete(true)
      clearCart()
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].key)
    }
  }

  if (items.length === 0 && !isComplete) {
    return (
      <div className="pt-24 pb-20 min-h-screen">
        <div className="mx-auto max-w-lg px-6 text-center">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-foreground mb-4">Your bag is empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to proceed with checkout.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d81b60] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="pt-24 pb-20 min-h-screen">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Order Confirmed</h1>
          <p className="text-muted-foreground mb-2">Thank you for your purchase.</p>
          <p className="text-sm text-muted-foreground mb-8">
            A confirmation email has been sent. Your order will be processed within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d81b60] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="mx-auto max-w-5xl px-6">
        {/* Back */}
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        {/* Step Indicator */}
        <div className="flex items-center gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = idx === currentIndex
            const isDone = idx < currentIndex

            return (
              <div key={step.key} className="flex items-center gap-4 flex-1">
                <div
                  className={`flex items-center gap-2 ${
                    isActive ? "text-foreground" : isDone ? "text-primary" : "text-muted-foreground/40"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : isDone
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground"
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" /> : <Icon className="h-3.5 w-3.5" />}
                  </div>
                  <span className="text-sm font-medium hidden sm:block">{step.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px ${isDone ? "bg-primary" : "bg-border"}`}
                  />
                )}
              </div>
            )
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form Area */}
          <div className="flex-1">
            {currentStep === "shipping" && <ShippingForm />}
            {currentStep === "payment" && <PaymentForm />}
            {currentStep === "review" && <ReviewStep items={items} total={totalPrice} />}

            <button
              onClick={goNext}
              className="w-full mt-8 bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d81b60] transition-colors flex items-center justify-center gap-2"
            >
              {currentStep === "review" ? (
                <>
                  <Lock className="h-4 w-4" />
                  Place Order
                </>
              ) : (
                "Continue"
              )}
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Order Summary</h3>
              <ul className="flex flex-col gap-4 mb-6">
                {items.map((item) => (
                  <li key={`${item.product.id}-${item.size}-${item.color}`} className="flex items-center gap-3">
                    <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" {...(idx === 0 ? { priority: true } : {})} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.color} / {item.size} x{item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4 flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{totalPrice >= 300 ? "Free" : "$15"}</span>
                </div>
                <div className="border-t border-border pt-3 mt-2 flex justify-between">
                  <span className="text-sm font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold text-foreground">
                    ${(totalPrice + (totalPrice >= 300 ? 0 : 15)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InputField({
  label,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string
  placeholder: string
  type?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
      />
    </div>
  )
}

function ShippingForm() {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-6">Shipping Address</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <InputField label="First Name" placeholder="John" className="flex-1" />
          <InputField label="Last Name" placeholder="Doe" className="flex-1" />
        </div>
        <InputField label="Email" placeholder="john@example.com" type="email" />
        <InputField label="Address" placeholder="123 Fashion Street" />
        <div className="flex gap-4">
          <InputField label="City" placeholder="New York" className="flex-1" />
          <InputField label="State" placeholder="NY" className="w-24" />
          <InputField label="ZIP" placeholder="10001" className="w-28" />
        </div>
        <InputField label="Phone" placeholder="+1 (555) 000-0000" type="tel" />
      </div>
    </div>
  )
}

function PaymentForm() {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-6">Payment Details</h2>
      <div className="flex flex-col gap-4">
        <InputField label="Card Number" placeholder="4242 4242 4242 4242" />
        <InputField label="Cardholder Name" placeholder="John Doe" />
        <div className="flex gap-4">
          <InputField label="Expiry" placeholder="MM / YY" className="flex-1" />
          <InputField label="CVC" placeholder="123" className="w-28" />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" />
        <span>Your payment information is encrypted and secure</span>
      </div>
    </div>
  )
}

function ReviewStep({
  items,
  total,
}: {
  items: { product: { name: string; price: number; image: string }; quantity: number; size: string; color: string }[]
  total: number
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-6">Review Order</h2>
      <div className="bg-card rounded-xl border border-border divide-y divide-border">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4">
            <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
              <Image src={item.product.image} alt={item.product.name} fill className="object-cover" {...(idx === 0 ? { priority: true } : {})} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{item.product.name}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {item.color} / {item.size} x{item.quantity}
              </p>
            </div>
            <span className="text-sm font-semibold text-foreground">
              ${(item.product.price * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-card rounded-xl border border-border p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Shipping to</span>
          <span className="text-foreground">New York, NY 10001</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Estimated delivery</span>
          <span className="text-foreground">3-5 business days</span>
        </div>
      </div>
    </div>
  )
}
