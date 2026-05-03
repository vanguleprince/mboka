import Link from "next/link";
import ClothingCard from "@/components/ClothingCard";
import InfiniteLogoMarquee from "@/components/InfiniteLogoMarquee";

// Données des articles de vêtements
const clothingItems = [
  {
    id: "1",
    title: "T-shirt Premium Noir",
    price: 15000,
    image: "/imagepages/thrity1.jpeg",
    category: "T-shirt",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    title: "Jeans Slim Fit Bleu",
    price: 35000,
    image: "/imagepages/thrity2.jpeg",
    category: "Jeans",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "3",
    title: "Chemise Classique Blanche",
    price: 25000,
    image: "/imagepages/mbokaTshirt1.png",
    category: "Chemise",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "4",
    title: "Veste Bomber Gris",
    price: 45000,
    image: "/imagepages/cape.jpg",
    category: "Veste",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "5",
    title: "Shorts Cargo Kaki",
    price: 20000,
    image: "/imagepages/t-shirtwhite.png",
    category: "Shorts",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "6",
    title: "Hoodie Confortable Noir",
    price: 32000,
    image: "/imagepages/t-shirt.png",
    category: "Hoodie",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "7",
    title: "Pantalon Chino Beige",
    price: 28000,
    image: "/imagepages/crame1.png",
    category: "Pantalon",
    rating: 4.5,
    inStock: false,
  },
  {
    id: "8",
    title: "Polo Sportif Bleu",
    price: 18000,
    image: "/imagepages/mboka.png",
    category: "Polo",
    rating: 4.6,
    inStock: true,
  },
];

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mx-auto mb-16 max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Notre Boutique
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Découvrez notre collection exclusive de vêtements de qualité supérieure, conçus pour votre style et votre confort.
          </p>
        </div>

        {/* Filtres (optionnel) */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button className="rounded-full border border-white/20 bg-zinc-900 px-5 py-2 font-semibold text-white transition hover:border-pink-500 hover:bg-zinc-800">
            Tous
          </button>
          <button className="rounded-full border border-white/20 bg-zinc-900 px-5 py-2 font-semibold text-zinc-400 transition hover:border-pink-500 hover:bg-zinc-800 hover:text-white">
            T-shirts
          </button>
          <button className="rounded-full border border-white/20 bg-zinc-900 px-5 py-2 font-semibold text-zinc-400 transition hover:border-pink-500 hover:bg-zinc-800 hover:text-white">
            Pantalons
          </button>
          <button className="rounded-full border border-white/20 bg-zinc-900 px-5 py-2 font-semibold text-zinc-400 transition hover:border-pink-500 hover:bg-zinc-800 hover:text-white">
            Vestes
          </button>
        </div>
      </div>

      {/* Produits Grid */}
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clothingItems.map((item) => (
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

      {/* Infinite Logo Marquee - Separator */}
      <div className="mt-20 mb-20">
        <InfiniteLogoMarquee direction="left" variant="violet" />
      </div>

      {/* Contact Form Section */}
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-linear-to-br from-violet-600/20 via-blue-600/20 to-green-600/20 p-8 sm:p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
              Passez Votre Commande
            </h2>
            <p className="text-zinc-400">
              Remplissez le formulaire ci-dessous pour nous contacter ou effectuer une commande spéciale.
            </p>
          </div>

          <form className="space-y-6">
            {/* Row 1: Nom et Email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                />
              </div>
            </div>

            {/* Row 2: Téléphone et Mode de Paiement */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+237 6XX XXX XXX"
                  className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">
                  Mode de Paiement
                </label>
                <select className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-white transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20">
                  <option>Sélectionner un mode</option>
                  <option>Mobile Pay</option>
                  <option>Visa</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between pt-4">
              <button
                type="reset"
                className="rounded-lg border border-white/20 bg-transparent px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-zinc-800"
              >
                Réinitialiser
              </button>
              <button
                type="submit"
                className="rounded-lg bg-linear-to-r from-pink-500 to-purple-600 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40"
              >
                Envoyer la Commande
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
