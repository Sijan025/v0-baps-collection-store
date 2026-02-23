import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { TrendingSection } from "@/components/trending-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <TrendingSection />

      {/* Editorial Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          <div className="relative">
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
              The Edit
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Explore the Lookbook
            </h2>
            <p className="text-foreground/60 mt-4 max-w-md mx-auto text-pretty">
              Magazine-style editorial featuring our latest collections. Get inspired and shop the looks.
            </p>
            <Link
              href="/lookbook"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d81b60] transition-colors"
            >
              View Lookbook
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
