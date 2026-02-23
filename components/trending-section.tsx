import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

export function TrendingSection() {
  return (
    <section id="trending" className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
          Curated For You
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          Trending Now
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
