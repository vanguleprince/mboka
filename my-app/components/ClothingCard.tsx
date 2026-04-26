import Image from "next/image";
import Link from "next/link";

interface ClothingCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  inStock?: boolean;
}

export default function ClothingCard({
  id,
  title,
  price,
  image,
  category,
  rating = 4.5,
  inStock = true,
}: ClothingCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-900 transition hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 sm:h-56">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-500">
            <span className="text-sm">Image</span>
          </div>
        )}

        {/* Badge de disponibilité */}
        <div className="absolute right-2 top-2">
          {inStock ? (
            <span className="inline-block rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
              En stock
            </span>
          ) : (
            <span className="inline-block rounded-full bg-red-500/90 px-3 py-1 text-xs font-semibold text-white">
              Rupture
            </span>
          )}
        </div>

        {/* Catégorie Badge */}
        <div className="absolute left-2 top-2">
          <span className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-56 flex-col justify-between p-4 sm:p-5">
        <div>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white sm:text-xl">
            {title}
          </h3>

          {/* Rating */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rating)
                      ? "text-yellow-400"
                      : "text-zinc-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-zinc-400">{rating}/5</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-3 border-t border-white/5 pt-4">
          <span suppressHydrationWarning className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text sm:text-3xl">
            {price.toLocaleString("fr-FR", {
              style: "currency",
              currency: "XAF",
            })}
          </span>
          <Link
            href={`/boutique/${id}`}
            className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 sm:px-5 sm:py-2.5"
          >
            Voir
          </Link>
        </div>
      </div>
    </div>
  );
}
