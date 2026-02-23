import { CheckoutWizard } from "@/components/checkout-wizard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout | BAPS COLLECTION",
  description: "Complete your purchase at Baps Collection.",
}

export default function CheckoutPage() {
  return <CheckoutWizard />
}
