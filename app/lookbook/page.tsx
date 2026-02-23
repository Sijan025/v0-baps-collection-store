import { LookbookFeed } from "@/components/lookbook-feed"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lookbook | BAPS COLLECTION",
  description: "Explore our editorial lookbook featuring the latest men's fashion collections from Baps Collection.",
}

export default function LookbookPage() {
  return <LookbookFeed />
}
