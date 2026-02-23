import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import { ProductDetail } from "@/components/product-detail"
import type { Metadata } from "next"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === id)
  if (!product) return { title: "Product Not Found" }

  return {
    title: `${product.name} | BAPS COLLECTION`,
    description: product.description,
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
