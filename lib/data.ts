export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  images: string[]
  colors: { name: string; hex: string }[]
  sizes: string[]
  rating: number
  reviews: number
  description: string
  careInstructions: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Noir Slim Fit Dress Shirt",
    price: 189,
    category: "Shirts",
    image: "/images/product-1.jpg",
    images: ["/images/product-1.jpg", "/images/product-1.jpg", "/images/product-1.jpg"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1a2744" },
      { name: "White", hex: "#f5f5f5" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 124,
    description:
      "Crafted from premium Egyptian cotton with a modern slim fit silhouette. Features mother-of-pearl buttons, French cuffs, and a spread collar designed for both business and evening wear.",
    careInstructions: ["Dry clean recommended", "Iron on low heat", "Do not bleach", "Hang dry"],
  },
  {
    id: "2",
    name: "Heritage Wool Blazer",
    price: 459,
    category: "Suits",
    image: "/images/product-2.jpg",
    images: ["/images/product-2.jpg", "/images/product-2.jpg", "/images/product-2.jpg"],
    colors: [
      { name: "Navy", hex: "#1a2744" },
      { name: "Charcoal", hex: "#3a3a3a" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 89,
    description:
      "A masterfully tailored blazer in premium Italian wool. Half-canvas construction ensures a natural drape, while the notch lapel and two-button closure deliver timeless sophistication.",
    careInstructions: ["Professional dry clean only", "Store on padded hanger", "Steam to remove wrinkles"],
  },
  {
    id: "3",
    name: "Indigo Raw Selvedge Denim",
    price: 245,
    category: "Denim",
    image: "/images/product-3.jpg",
    images: ["/images/product-3.jpg", "/images/product-3.jpg", "/images/product-3.jpg"],
    colors: [
      { name: "Dark Indigo", hex: "#1a1a3a" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 156,
    description:
      "Japanese selvedge denim crafted on vintage shuttle looms. The 14oz fabric develops a unique patina over time, making each pair distinctly yours. Slim tapered fit with a mid-rise waist.",
    careInstructions: ["Wash sparingly in cold water", "Turn inside out before washing", "Hang dry", "Avoid tumble dryer"],
  },
  {
    id: "4",
    name: "Cashmere Crewneck Sweater",
    price: 329,
    category: "Knitwear",
    image: "/images/product-4.jpg",
    images: ["/images/product-4.jpg", "/images/product-4.jpg", "/images/product-4.jpg"],
    colors: [
      { name: "Charcoal", hex: "#3a3a3a" },
      { name: "Camel", hex: "#c4a76c" },
      { name: "Burgundy", hex: "#6b1d3a" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 203,
    description:
      "Luxuriously soft 100% Mongolian cashmere in a relaxed crewneck silhouette. 12-gauge knit provides substantial warmth without bulk. Ribbed cuffs and hem ensure a clean finish.",
    careInstructions: ["Hand wash in cool water", "Lay flat to dry", "Fold, do not hang", "Use cashmere comb for pilling"],
  },
  {
    id: "5",
    name: "Oxford Button-Down Shirt",
    price: 159,
    category: "Shirts",
    image: "/images/product-5.jpg",
    images: ["/images/product-5.jpg", "/images/product-5.jpg", "/images/product-5.jpg"],
    colors: [
      { name: "White", hex: "#f5f5f5" },
      { name: "Light Blue", hex: "#a8c8e8" },
      { name: "Pink", hex: "#e8b8c8" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    reviews: 178,
    description:
      "The quintessential Oxford shirt in superior brushed cotton. Features a soft button-down collar, back box pleat, and locker loop. A versatile essential for every wardrobe.",
    careInstructions: ["Machine wash at 30\u00b0C", "Iron on medium heat", "Tumble dry low"],
  },
  {
    id: "6",
    name: "Tailored Wool Trousers",
    price: 279,
    category: "Suits",
    image: "/images/product-6.jpg",
    images: ["/images/product-6.jpg", "/images/product-6.jpg", "/images/product-6.jpg"],
    colors: [
      { name: "Charcoal", hex: "#3a3a3a" },
      { name: "Navy", hex: "#1a2744" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 92,
    description:
      "Precisely tailored flat-front trousers in premium super 120s wool. Features a medium rise, tapered leg, and extended waistband for a flawless fit. Fully lined to the knee.",
    careInstructions: ["Dry clean only", "Iron on low heat with press cloth", "Hang on trouser hanger"],
  },
  {
    id: "7",
    name: "Leather Bomber Jacket",
    price: 695,
    category: "Outerwear",
    image: "/images/product-7.jpg",
    images: ["/images/product-7.jpg", "/images/product-7.jpg", "/images/product-7.jpg"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Brown", hex: "#5a3a1a" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 67,
    description:
      "Full-grain lambskin leather bomber with a buttery soft hand feel. Ribbed knit collar, cuffs, and hem. Silk-lined interior with interior pockets. An investment piece that ages beautifully.",
    careInstructions: [
      "Professional leather cleaning only",
      "Condition leather seasonally",
      "Store on padded hanger",
      "Avoid prolonged sun exposure",
    ],
  },
  {
    id: "8",
    name: "Merino Turtleneck",
    price: 219,
    category: "Knitwear",
    image: "/images/product-8.jpg",
    images: ["/images/product-8.jpg", "/images/product-8.jpg", "/images/product-8.jpg"],
    colors: [
      { name: "Burgundy", hex: "#6b1d3a" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Cream", hex: "#f0e8d8" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 134,
    description:
      "Extra-fine merino wool turtleneck with a contemporary fit. The 16-gauge knit offers a refined drape perfect for layering under blazers or wearing solo. Temperature regulating and naturally moisture-wicking.",
    careInstructions: ["Machine wash on wool cycle", "Do not tumble dry", "Reshape while damp", "Fold to store"],
  },
]

export const categories = [
  { name: "Shirts", image: "/images/cat-shirts.jpg", slug: "shirts" },
  { name: "Suits", image: "/images/cat-suits.jpg", slug: "suits" },
  { name: "Denim", image: "/images/cat-denim.jpg", slug: "denim" },
  { name: "Knitwear", image: "/images/cat-knitwear.jpg", slug: "knitwear" },
]

export const lookbookItems = [
  {
    id: "look-1",
    title: "Urban Twilight",
    description: "A refined silhouette for the city after dark",
    image: "/images/lookbook-1.jpg",
    products: ["7", "1"],
  },
  {
    id: "look-2",
    title: "Weekend Luxe",
    description: "Effortless sophistication meets casual comfort",
    image: "/images/lookbook-2.jpg",
    products: ["4", "6"],
  },
  {
    id: "look-3",
    title: "The Power Move",
    description: "Command attention with impeccable tailoring",
    image: "/images/lookbook-3.jpg",
    products: ["2", "6"],
  },
  {
    id: "look-4",
    title: "Edge & Elegance",
    description: "Where premium meets streetwear sensibility",
    image: "/images/lookbook-4.jpg",
    products: ["3", "7"],
  },
]
