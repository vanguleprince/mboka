"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAudio } from "@/components/AudioProvider";

const tracks = [
  { title: "C'est fou ça (Prod by Offside)", duration: "2:50", src: "/flacko/FLACKO - C'est fou ça (Prod by Offside) - Download - Tubidy.mp3" },
  { title: "HUSTLE (Goat Session)", duration: "2:38", src: "/flacko/FLACKO - HUSTLE ( GOAT SESSION ) - Download - Tubidy.mp3" },
  { title: "MASSE", duration: "2:34", src: "/flacko/FLACKO - MASSE (DIRECTED BY POPPINJEE) - Download - Tubidy.mp3" },
];

const newsItems = [
  {
    title: "Nouveau projet en cours",
    detail: "Flacko prépare un nouveau chapitre avec un son plus affirmé, mêlant rap mélodique et influences afro.",
  },
  {
    title: "Clip Sans Frein disponible",
    detail: "Son dernier clip est désormais disponible sur les plateformes et accumule des milliers de vues.",
  },
  {
    title: "Dates de showcase",
    detail: "Flacko prépare de nouvelles dates de showcase pour présenter ses titres en live à Goma et ailleurs.",
  },
];

const merchItems = [
  {
    name: "T-shirt Flacko Drop",
    description: "Coupe streetwear avec l'identité visuelle Flacko.",
    price: "25$",
  },
  {
    name: "Hoodie Goma Wave",
    description: "Sweat premium inspiré des nuits de Goma et de la scène urbaine.",
    price: "45$",
  },
  {
    name: "Casquette Melodic",
    description: "Accessoire minimal avec branding frontal inspiré de l'univers Flacko.",
    price: "20$",
  },
];

export default function FlackoPage() {
  const [expanded, setExpanded] = useState(false);
  const { playlist, currentIndex, isPlaying, setPlaylist, playTrack } = useAudio();

  const playableTracks = tracks.map((track) => ({
    ...track,
    cover: "/imagepages/flackoCram.jpg",
    artist: "Flacko",
  }));

  const playFromFlackoList = (index: number) => {
    const samePlaylist =
      playlist.length === playableTracks.length &&
      playableTracks.every((track, playlistIndex) => track.src === playlist[playlistIndex]?.src);

    if (!samePlaylist) {
      setPlaylist(playableTracks, index);
      return;
    }

    playTrack(index);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09080f] px-4 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute right-4 top-1/4 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">

        {/* Retour */}
        <Link
          href="/artistes"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/15 hover:text-white"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
          Retour aux artistes
        </Link>

        {/* Hero */}
        <section className="overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(135deg,rgba(109,40,217,0.30),rgba(37,99,235,0.18)),rgba(0,0,0,0.55)] shadow-[0_28px_80px_rgba(10,8,28,0.55)] backdrop-blur-xl">
          <div className="flex flex-col gap-0 md:flex-row">
            <div className="relative h-72 w-full shrink-0 md:h-auto md:w-80 lg:w-96">
              <Image
                src="/imagepages/flackoCram.jpg"
                alt="Flacko"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/60 md:bg-linear-to-l" />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">Mboka Label</p>
              <h1 className="mt-3 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl">FLACKO</h1>
              <p className="mt-2 text-lg font-medium text-violet-200/70">Trap music · Kinshasa</p>
              <div className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
                {/* Paragraphe toujours visible */}
                <p>
                  Originaire de la Republique Democratique du Congo et base a Lemba, <span className="font-semibold text-white">Flacko (Armando Choukrani)</span> incarne une nouvelle generation d&apos;artistes africains portee par l&apos;ambition, la discipline et une vision internationale.
                </p>

                {/* Paragraphes cachés / affichés */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3">
                    <p>
                      Artiste bilingue (francais / lingala), il developpe une signature musicale moderne, fusionnant les sonorites congolaises avec les codes du rap americain, de la trap et du dancehall. Influence par des figures majeures comme Chief Keef, Kendrick Lamar, Freeze Corleone et Young Thug, Flacko impose progressivement un univers artistique distinct : brut, authentique et resolument actuel.
                    </p>
                    <p>
                      Dote d&apos;un flow precis, d&apos;une forte presence et d&apos;un sens travaille de l&apos;image, il se positionne comme un artiste complet, capable de connecter musique, esthetique et culture urbaine.
                    </p>
                    <p>
                      Avec plus de 8 ans d&apos;activite, Flacko construit son ascension avec constance. Des titres comme <span className="font-semibold text-white">&quot;C&apos;est fou ca&quot;</span> et <span className="font-semibold text-white">&quot;Masse&quot;</span> sont disponibles sur les principales plateformes de streaming et s&apos;accompagnent de visuels ayant genere des milliers de vues, renforcant sa visibilite sur la scene urbaine congolaise.
                    </p>
                    <p>
                      Sa capacite a engager une audience jeune, connectee et fidele constitue aujourd&apos;hui l&apos;un de ses principaux leviers de croissance. Flacko s&apos;inscrit ainsi dans une dynamique d&apos;expansion, avec une strategie artistique orientee vers la performance, l&apos;image et la regularite des sorties.
                    </p>
                    <p>
                      Actuellement en preparation de nouveaux projets, dont un EP tres attendu, il ambitionne d&apos;elargir son rayonnement a l&apos;international et de s&apos;imposer comme une figure montante de la scene urbaine africaine.
                    </p>
                  </div>
                </div>

                {/* Bouton toggle */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-violet-300 transition hover:text-violet-100"
                >
                  {expanded ? "Voir moins" : "Voir plus"}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      expanded ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Trap music", "Kinshasa", "Live performer", "TRAPPIN mixtape"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-3 gap-4">
          {[
            { label: "Titres", value: "10+" },
            { label: "Shows", value: "18" },
            { label: "Fans", value: "6K+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Discographie */}
        <section className="mt-6 rounded-[32px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Discographie</h2>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.14em] text-violet-200">
                STREAMING
              </span>
              <Link
                href="/artistes/flacko/tracklist"
                className="rounded-full border border-violet-200/35 bg-black/35 px-3 py-1 text-xs font-semibold tracking-widest text-violet-100 transition hover:bg-violet-500/20"
              >
                Tracklist complete
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {tracks.map((track, i) => {
              const active = currentIndex === i &&
                playlist.length === playableTracks.length &&
                playableTracks.every((item, playlistIndex) => item.src === playlist[playlistIndex]?.src);
              return (
                <button
                  key={track.src}
                  type="button"
                  onClick={() => playFromFlackoList(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                    active
                      ? "border-violet-400/40 bg-violet-500/15"
                      : "border-white/8 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    {active && isPlaying ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-violet-300">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : active ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-violet-300">
                        <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
                      </svg>
                    ) : (
                      <span className="text-sm font-bold text-zinc-500">{i + 1}</span>
                    )}
                  </div>
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-violet-200/20 bg-black/40">
                    <Image
                      src="/imagepages/flackoCram.jpg"
                      alt={track.title}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`truncate text-sm font-semibold ${active ? "text-violet-200" : "text-white"}`}>
                      {track.title}
                    </p>
                    <p className="text-xs text-zinc-400">Flacko · Mboka Label</p>
                  </div>
                  {active ? (
                    <div className="flex shrink-0 items-center gap-1">
                      <span className="h-1.5 w-1 rounded-full bg-violet-400 animate-bounce [animation-delay:0ms]" />
                      <span className="h-2.5 w-1 rounded-full bg-violet-400 animate-bounce [animation-delay:150ms]" />
                      <span className="h-1.5 w-1 rounded-full bg-violet-400 animate-bounce [animation-delay:300ms]" />
                    </div>
                  ) : (
                    <span className="shrink-0 text-xs text-zinc-500">{track.duration}</span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Actualites</p>
                <h2 className="mt-2 text-lg font-bold text-white">Les news de Flacko</h2>
              </div>
              <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.14em] text-violet-200">
                UPDATE
              </span>
            </div>

            <div className="space-y-3">
              {newsItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 transition hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-violet-300/20 bg-[linear-gradient(180deg,rgba(109,40,217,0.18),rgba(9,8,15,0.82))] p-5 backdrop-blur-xl sm:p-7">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Boutique</p>
              <h2 className="mt-2 text-lg font-bold text-white">Vetements de l&apos;artiste</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Une selection de pieces inspirees de l&apos;univers visuel de Flacko.
              </p>
            </div>

            <div className="space-y-3">
              {merchItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-violet-200/15 bg-black/35 px-4 py-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{item.description}</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/boutique"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-200/35 bg-linear-to-r from-violet-700 to-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Voir la boutique
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-6 overflow-hidden rounded-[32px] border border-violet-300/25 bg-[linear-gradient(135deg,rgba(109,40,217,0.35),rgba(37,99,235,0.25))] p-7 text-center backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_45%)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Nouvel EP</p>
          <h3 className="mt-2 text-2xl font-black text-white">En preparation</h3>
          <p className="mt-2 text-sm text-zinc-300">Reste connecte pour etre le premier a l&apos;ecouter.</p>
          <Link
            href="/decouvrir"
            className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-200/40 bg-linear-to-r from-violet-700 via-blue-600 to-emerald-500 px-8 py-3 text-sm font-bold text-white shadow-[0_8px_28px_rgba(109,40,217,0.35)] transition hover:brightness-110"
          >
            Decouvrez Mboka
          </Link>
        </section>

      </div>
    </main>
  );
}
