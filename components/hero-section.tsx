import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Male model in high-fashion attire"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-foreground/70 mb-4">
          New Season
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-tight">
          Elevated Essentials
        </h2>
        <p className="text-lg sm:text-xl text-foreground/70 mt-4 max-w-md text-pretty">
          For the modern wardrobe
        </p>
        <Link
          href="#trending"
          className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d81b60] transition-colors"
        >
          Shop Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase text-foreground/40">Scroll</span>
        <div className="w-px h-8 bg-foreground/20 animate-pulse" />
      </div>
    </section>
  )
}
