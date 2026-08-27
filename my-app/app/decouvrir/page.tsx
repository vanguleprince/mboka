"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useAudio } from "@/components/AudioProvider";
import { buildPlayableTracks, hasSameTrackOrder } from "@/lib/audio/playlist";

const sections = [
  {
    title: "A propos",
    subtitle: "Vision, equipe et univers Mboka",
    color: "from-indigo-500/35 via-violet-500/25 to-zinc-900/85",
    href: "/apropos",
  },
  {
    title: "Boutique",
    subtitle: "Merch officiel, drops et exclusivites",
    color: "from-amber-500/40 via-orange-500/20 to-zinc-900/85",
    href: "/boutique",
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
  {
    title: "Autre branche",
    subtitle: "Nouvelle branche du label, visibilite renforcee",
    color: "from-amber-400/65 via-orange-500/45 to-zinc-900/88",
    href: "/autre-branche",
  },
];

const artists = [
  {
    name: "C2B",
    role: "Modjalisme",
    image: "/imagepages/cdbpicture.png",
    hoverImages: ["/imagepages/bogothegoat3.jpeg", "/imagepages/flackoCram.jpg", "/imagepages/keurma2.jpg"],
    href: "/artistes/c2b",
  },
  {
    name: "Bogo",
    role: "Artiste Trap",
    image: "/imagepages/bogothegoat3.jpeg",
    hoverImages: ["/imagepages/cdbpicture.png", "/imagepages/flackoCram.jpg", "/imagepages/keurma2.jpg"],
    href: "/artistes/bogo",
  },
  {
    name: "Flacko",
    role: "Rap pur",
    image: "/imagepages/flackoCram.jpg",
    hoverImages: ["/imagepages/bogothegoat3.jpeg", "/imagepages/cdbpicture.png", "/imagepages/keurma2.jpg"],
    href: "/artistes/flacko",
  },
  {
    name: "Ceurma",
    role: "Afro pop kin",
    image: "/imagepages/keurma2.jpg",
    hoverImages: ["/imagepages/bogothegoat3.jpeg", "/imagepages/cdbpicture.png", "/imagepages/flackoCram.jpg"],
    href: "/artistes/keurma",
  },
  {
    name: "Wendy Rose",
    role: "Artiste Mboka",
    image: "/wendypict.jpeg",
    hoverImages: ["/imagepages/bogothegoat3.jpeg", "/imagepages/cdbpicture.png", "/imagepages/flackoCram.jpg"],
    href: "/artistes/wendy-rose",
  },
];

const clothingItems = [
  { id: "1", name: "Generation Gang T-shirt", type: "T-shirt", price: "15.000 FC", image: "/imagepages/thrity1.jpeg" },
  { id: "2", name: "Generation Gang T-shirt", type: "T-shirt", price: "35.000 FC", image: "/imagepages/thrity2.jpeg" },
  { id: "3", name: "MBOKA T-shirt", type: "T-shirt", price: "25.000 FC", image: "/imagepages/mbokaTshirt1.png" },
  { id: "4", name: "CRAMECITY T-shirt", type: "T-shirt", price: "28.000 FC", image: "/imagepages/crame1.png" },
  { id: "5", name: "Corne C2B", type: "Accessoire", price: "22.000 FC", image: "/corneC2B.jpeg" },
  { id: "6", name: "Corne C2B", type: "Accessoire", price: "22.000 FC", image: "/corne2C2B.jpeg" },
];

const audioTracks = [
  { title: "MPIAKA (feat. Gaz Fabilouss)", artist: "C2B", image: "/imagepages/cdbpicture.png", src: "/cdb/C2B - MPIAKA & Gaz Fabilouss - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg" },
  { title: "Oa Nani (feat. Mobutu Satana)", artist: "C2B", image: "/imagepages/cdbpicture.png", src: "/cdb/C2B - Oa Nani & @MobutuSatanaOfficiel - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg" },
  { title: "HENNESSY", artist: "Bogo", image: "/imagepages/bogothegoat3.jpeg", src: "/audios/bogo/bogo1.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
  { title: "WOLO PALATA", artist: "Bogo", image: "/imagepages/bogothegoat3.jpeg", src: "/audios/bogo/bogo2.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
  { title: "C'est fou ca (Prod by Offside)", artist: "Flacko", image: "/imagepages/flackoCram.jpg", src: "/flacko/FLACKO - C'est fou ça (Prod by Offside) - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg" },
  { title: "HUSTLE (Goat Session)", artist: "Flacko", image: "/imagepages/flackoCram.jpg", src: "/flacko/FLACKO - HUSTLE ( GOAT SESSION ) - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg" },
  { title: "Montage (feat. Suintement)", artist: "Ceurma", image: "/imagepages/keurma.jpg", src: "/keurma/❤️MA - Montage feat. Suintement (Clip Officiel) - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6dFCDvHfmQzvELK8AlpXoi?si=sbKCCt3CQBqcDaEAd7z5Hw" },
  { title: "Vraie Momie", artist: "Ceurma", image: "/imagepages/keurma.jpg", src: "/keurma/❤️MA - Vraie Momie - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6dFCDvHfmQzvELK8AlpXoi?si=sbKCCt3CQBqcDaEAd7z5Hw" },
];

export default function DecouvrirPage() {
  const { playlist, currentIndex, isPlaying, setPlaylist, playTrack } = useAudio();

  const playableTracks = useMemo(
    () => buildPlayableTracks(audioTracks, { cover: "", artist: "" }).map((track, index) => ({
      ...track,
      cover: audioTracks[index].image,
      artist: audioTracks[index].artist,
    })),
    [],
  );

  const samePlaylist = useMemo(
    () => hasSameTrackOrder(playlist, playableTracks),
    [playlist, playableTracks],
  );

  const playFromLabelList = (index: number) => {
    if (!samePlaylist) {
      setPlaylist(playableTracks, index);
      return;
    }

    playTrack(index);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#08070c] px-4 py-10 text-white sm:px-8"
      suppressHydrationWarning
      translate="no"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-6 left-8 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-10 top-1/3 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <section className="rounded-[34px] border border-white/10 bg-black/40 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-violet-100 sm:text-xl">Explore</h2>
           
          </div>

          <div className="relative">
            {/* Masques de fondu sur les bords */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-black/55 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-black/55 to-transparent" />
            <div className="flex gap-4 overflow-x-auto pb-1 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 [scroll-snap-type:x_mandatory]">
              {sections.map((item) => {
                const card = (
                  <div className={`group h-97.5 w-72.5 shrink-0 snap-start rounded-[30px] border border-white/12 bg-linear-to-br ${item.color} p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition hover:brightness-110 sm:h-107.5 sm:w-85`}>
                    <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
                      <div>
                       
                        <h3 suppressHydrationWarning className="notranslate mt-4 text-3xl font-black leading-tight text-white" translate="no">
                          {item.title}
                        </h3>
                        <p suppressHydrationWarning className="notranslate mt-3 text-sm leading-6 text-zinc-200/90" translate="no">
                          {item.subtitle}
                        </p>
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

                if (artist.href) {
                  return (
                    <Link key={artist.name} href={artist.href} className="shrink-0 cursor-pointer">
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
              {audioTracks.map((track, index) => {
                const active = currentIndex === index && samePlaylist;
                return (
                <button
                  key={track.src}
                  type="button"
                  onClick={() => playFromLabelList(index)}
                  className={`group flex w-80 shrink-0 items-center gap-4 rounded-3xl border px-4 py-3 text-left transition sm:w-96 ${
                    active
                      ? "border-violet-400/35 bg-violet-500/15"
                      : "border-violet-200/12 bg-black/28 hover:bg-white/8"
                  }`}
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
                      <h3 className={`truncate text-base font-bold ${active ? "text-violet-200" : "text-white"}`}>
                        {track.title}
                      </h3>
                      {active ? (
                        <span className="shrink-0 rounded-full bg-violet-300/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-violet-200">
                          Active
                        </span>
                      ) : null}
                    </div>
                    <p className="truncate text-sm text-zinc-400">{track.artist}</p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-300">
                    {active && isPlaying ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-violet-300">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-zinc-300">
                        <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
                      </svg>
                    )}
                  </div>
                </button>
              );
              })}
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
                  key={item.id}
                  href="/boutique"
                  className="group relative h-97.5 w-72.5 shrink-0 overflow-hidden rounded-[30px] border border-sky-200/20 bg-black/28 transition hover:brightness-110 sm:h-107.5 sm:w-85"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 290px, 340px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-sky-200/25 bg-black/45 p-4 backdrop-blur-sm">
                    <h3 className="text-xl font-black leading-tight text-white">{item.name}</h3>
                    <p className="mt-1 text-sm text-sky-100/85">{item.type}</p>
                    <div className="mt-3 inline-flex rounded-full border border-sky-200/30 bg-sky-300/12 px-4 py-1.5 text-sm font-semibold text-sky-100">
                      {item.price}
                    </div>
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
