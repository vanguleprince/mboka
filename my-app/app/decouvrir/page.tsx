import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "A propos",
    subtitle: "Vision, equipe et univers Mboka",
    color: "from-indigo-500/35 via-violet-500/25 to-zinc-900/85",
    href: "/apropos",
  },
  {
    title: "Artistes",
    subtitle: "Nouvelles sorties et sons exclusifs",
    color: "from-violet-500/45 via-fuchsia-500/25 to-zinc-900/85",
    href: "/artistes",
  },
  {
    title: "Evenement",
    subtitle: "Concerts lives, showcases et invites",
    color: "from-purple-500/40 via-violet-600/25 to-zinc-900/85",
    href: "/evenement",
  },
];

const artists = [
  {
    name: "Bogo",
    role: "Artiste principal",
    image: "/imagepages/bogothegoat3.jpeg",
    hoverImages: ["/imagepages/cdbpicture.png", "/imagepages/flackoCram.jpg", "/imagepages/keurma2.jpg"],
  },
  {
    name: "C2B",
    role: "Voix soul",
    image: "/imagepages/cdbpicture.png",
    hoverImages: ["/imagepages/bogothegoat3.jpeg", "/imagepages/flackoCram.jpg", "/imagepages/keurma2.jpg"],
  },
  {
    name: "Flacko",
    role: "Rap melodique",
    image: "/imagepages/flackoCram.jpg",
    hoverImages: ["/imagepages/bogothegoat3.jpeg", "/imagepages/cdbpicture.png", "/imagepages/keurma2.jpg"],
  },
  {
    name: "Keurma",
    role: "Afro pop",
    image: "/imagepages/keurma2.jpg",
    hoverImages: ["/imagepages/bogothegoat3.jpeg", "/imagepages/cdbpicture.png", "/imagepages/flackoCram.jpg"],
  },
];

const clothingItems = [
  { name: "Hoodie Midnight", type: "Sweat capuche", price: "$65", image: "/imagepages/bogopicture.png" },
  { name: "Tee Ocean", type: "T-shirt oversize", price: "$35", image: "/imagepages/cdbpicture.png" },
  { name: "Veste Storm", type: "Veste street", price: "$90", image: "/imagepages/flackoCram.jpg" },
  { name: "Jogger Sky", type: "Pantalon confort", price: "$52", image: "/imagepages/keurma.png" },
  { name: "Top Electric", type: "Top premium", price: "$39", image: "/imagepages/mboka.png" },
  { name: "Casquette Blue Wave", type: "Accessoire", price: "$24", image: "/imagepages/bogopicture.png" },
];

const audioTracks = [
  { title: "Mboka Intro", artist: "Bogo", image: "/imagepages/bogopicture.png", active: true },
  { title: "Ville Lumiere", artist: "CDB", image: "/imagepages/cdbpicture.png" },
  { title: "Sans Frein", artist: "Flacko", image: "/imagepages/flackoCram.jpg" },
  { title: "Mon Horizon", artist: "Keurma", image: "/imagepages/keurma.png" },
  { title: "Street Melody", artist: "Bogo", image: "/imagepages/bogopicture.png" },
  { title: "Minuit Doux", artist: "CDB", image: "/imagepages/cdbpicture.png" },
  { title: "Dans le Bloc", artist: "Flacko", image: "/imagepages/flackoCram.jpg" },
  { title: "Coeur Neon", artist: "Keurma", image: "/imagepages/keurma.png" },
];

function AudioMenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}

export default function DecouvrirPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08070c] px-4 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-6 left-8 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-10 top-1/3 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <section className="rounded-[34px] border border-white/10 bg-black/40 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-violet-100 sm:text-xl">Explore</h2>
            <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.16em] text-violet-200">
              SECTIONS
            </span>
          </div>

          <div className="relative overflow-x-auto pb-2">
            <div className="flex w-max gap-4 pr-4 sm:gap-6">
              {sections.map((item) => {
                const card = (
                  <div className={`group h-97.5 w-72.5 shrink-0 rounded-[30px] border border-white/12 bg-linear-to-br ${item.color} p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition hover:brightness-110 sm:h-107.5 sm:w-85`}>
                    <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
                      <div>
                        <span className="inline-flex rounded-full border border-violet-200/25 bg-violet-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-100">
                          iOS Card
                        </span>
                        <h3 className="mt-4 text-3xl font-black leading-tight text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-200/90">{item.subtitle}</p>
                      </div>

                      <div className="rounded-2xl border border-violet-100/20 bg-black/35 p-4">
                        <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                          <div className="h-full w-2/3 rounded-full bg-linear-to-r from-violet-300 to-fuchsia-300" />
                        </div>
                        <div className="flex items-center justify-between text-xs text-zinc-300">
                          <span>Now</span>
                          <span>Streaming</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <Link key={item.title} href={item.href} className="shrink-0">
                      {card}
                    </Link>
                  );
                }

                return <article key={item.title}>{card}</article>;
              })}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[34px] border border-emerald-300/20 bg-linear-to-br from-emerald-500/24 via-green-500/12 to-zinc-900/85 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-emerald-100 sm:text-xl">Artistes du label</h2>
            <span className="rounded-full border border-emerald-300/35 bg-emerald-300/12 px-3 py-1 text-xs tracking-[0.16em] text-emerald-100">
              LABEL CREW
            </span>
          </div>

          <div className="relative overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:rgba(110,231,183,0.45)_transparent]">
            <div className="flex w-max gap-4 pr-4 sm:gap-6">
              {artists.map((artist) => {
                const card = (
                  <div className="group w-52 shrink-0 rounded-3xl border border-emerald-200/25 bg-black/30 p-3 backdrop-blur-sm transition hover:brightness-110 sm:w-56">
                    <div className="relative overflow-hidden rounded-2xl border border-emerald-200/20 bg-black/35">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        width={320}
                        height={320}
                        className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-[-6px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {artist.hoverImages.map((img, index) => (
                          <div
                            key={`${artist.name}-${img}`}
                            className="h-8 w-8 overflow-hidden rounded-full border border-emerald-100/55 shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
                            style={{ transform: `translateX(${index * -6}px)` }}
                          >
                            <Image
                              src={img}
                              alt={`${artist.name} artiste ${index + 1}`}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3">
                      <h3 className="text-base font-bold text-emerald-100">{artist.name}</h3>
                      <p className="mt-1 text-xs text-emerald-200/80">{artist.role}</p>
                    </div>
                  </div>
                );

                if (artist.name === "Bogo") {
                  return (
                    <Link key={artist.name} href="/artistes/bogo" className="shrink-0">
                      {card}
                    </Link>
                  );
                }

                if (artist.name === "C2B") {
                  return (
                    <Link key={artist.name} href="/artistes/c2b" className="shrink-0">
                      {card}
                    </Link>
                  );
                }

                if (artist.name === "Flacko") {
                  return (
                    <Link key={artist.name} href="/artistes/flacko" className="shrink-0">
                      {card}
                    </Link>
                  );
                }

                if (artist.name === "Keurma") {
                  return (
                    <Link key={artist.name} href="/artistes/keurma" className="shrink-0">
                      {card}
                    </Link>
                  );
                }

                return <div key={artist.name} className="shrink-0">{card}</div>;
              })}
            </div>
          </div>
        </section>
        <section className="mt-8 rounded-[34px] border border-violet-300/20 bg-linear-to-br from-violet-500/26 via-fuchsia-500/12 to-zinc-900/88 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-violet-100 sm:text-xl">Ecouter les artistes du label</h2>
            <span className="rounded-full border border-violet-300/35 bg-violet-300/12 px-3 py-1 text-xs tracking-[0.16em] text-violet-100">
              STREAMING APP
            </span>
          </div>

          <div className="relative overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:rgba(196,181,253,0.45)_transparent]">
            <div className="flex w-max gap-4 pr-4 sm:gap-6">
              {audioTracks.map((track) => (
                <article
                  key={`${track.title}-${track.artist}`}
                  className="group flex w-80 shrink-0 items-center gap-4 rounded-3xl border border-violet-200/12 bg-black/28 px-4 py-3 transition hover:bg-white/8 sm:w-96"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-violet-200/15 bg-black/35">
                    <Image
                      src={track.image}
                      alt={track.title}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`truncate text-base font-bold ${track.active ? "text-violet-300" : "text-white"}`}>
                        {track.title}
                      </h3>
                      {track.active ? (
                        <span className="shrink-0 rounded-full bg-violet-300/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-violet-200">
                          Active
                        </span>
                      ) : null}
                    </div>
                    <p className="truncate text-sm text-zinc-400">{track.artist}</p>
                  </div>

                  <button
                    type="button"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
                    aria-label={`Ouvrir le menu pour ${track.title}`}
                  >
                    <AudioMenuIcon />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[34px] border border-sky-300/20 bg-linear-to-br from-blue-900/70 via-indigo-900/55 to-zinc-900/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-sky-100 sm:text-xl">Collection vetements</h2>
            <span className="rounded-full border border-sky-300/35 bg-sky-300/12 px-3 py-1 text-xs tracking-[0.16em] text-sky-100">
              BLUE DROP
            </span>
          </div>

          <div className="relative overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:rgba(125,211,252,0.45)_transparent]">
            <div className="flex w-max gap-4 pr-4 sm:gap-6">
              {clothingItems.map((item) => (
                <Link
                  key={item.name}
                  href="/boutique"
                  className="group flex w-80 shrink-0 items-center gap-4 rounded-full border border-sky-200/20 bg-black/28 px-4 py-3 transition hover:bg-sky-100/12 sm:w-96"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-sky-200/25 bg-black/35">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>

                 
                  <div className="shrink-0 rounded-full border border-sky-200/20 bg-sky-300/12 px-4 py-1.5 text-sm font-semibold text-sky-100">
                    {item.price}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
