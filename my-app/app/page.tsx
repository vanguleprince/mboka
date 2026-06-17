import InfiniteLogoMarquee from "@/components/InfiniteLogoMarquee";
import MediaPreview from "@/components/MediaPreview";
import ClothingCard from "@/components/ClothingCard";
import Link from "next/link";

const featuredItems = [
  {
    id: "1",
    title: "Generation Gang T-shirt",
    price: 15000,
    image: "/imagepages/thrity1.jpeg",
    category: "T-shirt",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    title: "Generation Gang T-shirt",
    price: 35000,
    image: "/imagepages/thrity2.jpeg",
    category: "T-shirt",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "3",
    title: "MBOKA T-shirt",
    price: 25000,
    image: "/imagepages/mbokaTshirt1.png",
    category: "T-shirt",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "4",
    title: "CRAMECITY T-shirt",
    price: 28000,
    image: "/imagepages/crame1.png",
    category: "T-shirt",
    rating: 4.5,
    inStock: true,
  },
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <InfiniteLogoMarquee direction="left" />

      <main className="relative flex flex-1 items-center justify-center px-6 py-14 sm:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-violet-900/50 blur-3xl" />
          <div className="absolute -bottom-20 -right-12 h-80 w-80 rounded-full bg-violet-800/35 blur-3xl" />

        </div>

        <section
          className="relative z-10 mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-3 sm:p-4 shadow-2xl"
        >
          <MediaPreview />
        </section>
      </main>

      {/* Section Boutique */}
      <section className="px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">Boutique</h2>
            <Link
              href="/boutique"
              className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40"
            >
              Voir tout
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item) => (
              <ClothingCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                rating={item.rating}
                inStock={item.inStock}
              />
            ))}
          </div>
        </div>
      </section>

        
    </div>
  );
}