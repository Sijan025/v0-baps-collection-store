import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data"

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
          Browse By
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          Categories
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/?category=${category.slug}`}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-semibold text-white tracking-wide">
                {category.name}
              </h3>
              <p className="text-xs text-white/60 mt-1 tracking-wide uppercase group-hover:text-primary transition-colors">
                Shop Now
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
