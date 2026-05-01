import Image from "next/image";
import Link from "next/link";

const artists = [
  {
    name: "Bogo",
    style: "Rap urbain",
    city: "Kinshasa",
    image: "/imagepages/bogopicture.png",
    highlight: "Nouvel EP en preparation",
  },
  {
    name: "C2B",
    style: "Rap urbain",
    city: "Kinshasa",
    image: "/imagepages/cdbpicture.png",
    highlight: "Session live ce vendredi",
  },
  {
    name: "Flacko",
    style: "Trap music",
    city: "Kinshasa",
    image: "/imagepages/flackoCram.jpg",
    highlight: "Clip Sans Frein disponible",
  },
  {
    name: "Keurma",
    style: "Afro pop",
    city: "Matadi",
    image: "/imagepages/keurma2.jpg",
    highlight: "Single Mon Horizon en tendance",
  },
];

export default function ArtistesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09080f] px-4 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-8 left-8 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-6 top-1/3 h-60 w-60 rounded-full bg-indigo-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <section className="rounded-[34px] border border-white/10 bg-black/40 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/80">Mboka Label</p>
              <h1 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">Artistes</h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300 sm:text-base">
                Decouvre les voix du label, leurs univers sonores et les sorties qui font bouger la scene.
              </p>
            </div>

            <Link
              href="/decouvrir"
              className="rounded-full border border-violet-200/35 bg-violet-300/10 px-5 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-300/20"
            >
              Retour a Decouvrir
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist) => {
            const card = (
              <div className="group overflow-hidden rounded-[30px] border border-white/12 bg-linear-to-br from-violet-500/20 via-fuchsia-500/10 to-black/70 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.4)] backdrop-blur-sm transition hover:brightness-110">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={500}
                    height={500}
                    className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 space-y-2">
                  <h2 className="text-xl font-bold text-white">{artist.name}</h2>
                  <p className="text-sm text-violet-200/85">{artist.style}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{artist.city}</p>
                  <p className="pt-2 text-sm leading-6 text-zinc-200">{artist.highlight}</p>
                </div>
              </div>
            );

            if (artist.name === "Bogo") {
              return (
                <Link key={artist.name} href="/artistes/bogo">
                  {card}
                </Link>
              );
            }

            if (artist.name === "C2B") {
              return (
                <Link key={artist.name} href="/artistes/c2b">
                  {card}
                </Link>
              );
            }

            if (artist.name === "Flacko") {
              return (
                <Link key={artist.name} href="/artistes/flacko">
                  {card}
                </Link>
              );
            }

            if (artist.name === "Keurma") {
              return (
                <Link key={artist.name} href="/artistes/keurma">
                  {card}
                </Link>
              );
            }

            return <article key={artist.name}>{card}</article>;
          })}
        </section>
      </div>
    </main>
  );
}
