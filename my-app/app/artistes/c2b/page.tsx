"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAudio } from "@/components/AudioProvider";

const tracks = [
  { title: "MPIAKA (feat. Gaz Fabilouss)", duration: "2:56", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - MPIAKA & Gaz Fabilouss - Download - Tubidy.mp3" },
  { title: "Oa Nani (feat. Mobutu Satana)", duration: "3:32", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - Oa Nani & @MobutuSatanaOfficiel - Download - Tubidy.mp3" },
  { title: "OG (feat. SINS OFF)", duration: "3:32", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - OG & @SINS_OFF - Download - Tubidy.mp3" },
  { title: "TUKU TUKU (feat. Diesel Gucci)", duration: "3:25", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/C2B - TUKU TUKU & @DieselGucciofficiel - Download - Tubidy.mp3" },
  { title: "DIPLOME", duration: "2:46", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg", src: "/cdb/DIPLOME [VISUALIZER 02] - Download - Tubidy.mp3" },
];

const newsItems = [
  {
    title: "Nouveau projet en cours",
    detail: "C2B finalise actuellement une nouvelle direction artistique avec une esthétique plus affirmée.",
  },
  {
    title: "Direction visuelle",
    detail: "Des contenus visuels sont en préparation pour accompagner les prochains singles de C2B.",
  },
  {
    title: "Scène & performances",
    detail: "L'artiste prépare de nouvelles apparitions live pour renforcer la connexion avec son public.",
  },
];

const merchItems = [
  {
    name: "T-shirt Signature C2B",
    description: "Coupe streetwear avec l'identité visuelle C2B.",
    price: "25$",
  },
  {
    name: "Hoodie Night Drop",
    description: "Sweat premium pensé pour les sorties, les shows et le quotidien.",
    price: "45$",
  },
  {
    name: "Casquette Logo",
    description: "Accessoire minimal avec branding frontal inspiré de l'univers Mboka.",
    price: "20$",
  },
];

export default function C2BPage() {
  const [expanded, setExpanded] = useState(false);
  const { playlist, currentIndex, isPlaying, setPlaylist, playTrack } = useAudio();

  const playableTracks = tracks.map((track) => ({
    ...track,
    cover: "/imagepages/cdbpicture.png",
    artist: "C2B",
  }));

  const playFromC2BList = (index: number) => {
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
                src="/imagepages/cdbpicture.png"
                alt="C2B"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/60 md:bg-linear-to-l" />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">Mboka Label</p>
              <h1 className="mt-3 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl">C2B</h1>
              <p className="mt-2 text-lg font-medium text-violet-200/70">Rap urbain · Kinshasa</p>
              <div className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
                {/* Paragraphe toujours visible */}
                <p>
                  Originaire de Kinshasa (RDC), entre Barumbu, Kinshasa et Ngaliema, <span className="font-semibold text-white">C2B</span> est un rappeur multilingue (francais, lingala, swahili, tshiluba) qui incarne une nouvelle generation d&apos;artistes africains prets a franchir les frontieres.
                </p>
                <p className="mt-3">
                  Il est ne le 07/05/1997.
                </p>

                {/* Paragraphes cachés / affichés */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3">
                    <p>
                      Revele en 2019 avec le titre <span className="font-semibold text-white">&quot;Koli&quot;</span>, il impose rapidement une direction claire : creer une musique sans barrieres, enracinee dans la culture congolaise mais connectee aux standards internationaux.
                    </p>
                    <p>
                      Entre rap, trap, afrobeat et drill, C2B construit un son hybride, moderne et identifiable des les premieres mesures. Inspire par des figures comme Migos, Deejay S ou Big Brown, il developpe un univers puissant : flow precis, energie brute, esthetique travaillee.
                    </p>
                    <p>
                      Chaque sortie est pensee comme une experience, melant attitude, image et storytelling. Avec des titres comme <span className="font-semibold text-white">&quot;C&apos;est la vie&quot;</span>, <span className="font-semibold text-white">&quot;Makala&quot;</span> ou <span className="font-semibold text-white">&quot;O&apos;A Nani ?&quot;</span>, cumulant des milliers de vues, C2B s&apos;impose progressivement sur la scene urbaine congolaise tout en preparant son expansion a l&apos;international.
                    </p>
                    <p>
                      Porte par une audience jeune, engagee et en pleine croissance, il avance avec une vision claire : passer de Kinshasa au monde.
                    </p>
                    <p>
                      Actuellement en preparation de nouveaux projets, dont un EP, C2B accelere son ascension et se positionne comme l&apos;un des visages montants de la scene urbaine africaine.
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
                {["Rap urbain", "Kinshasa", "Chaos maîtrisé", "Artiste complet"].map((tag) => (
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
        <section className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Spotify Link */}
          <a
            href="https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-green-400/40 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
          >
            <div className="mx-auto mb-2 h-12 w-12 relative">
              <Image
                src="/spotify.jpg"
                alt="Spotify"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-green-300 font-semibold">Spotify</p>
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/c2b_officiel?igsh=MXZwbjVhcXNnZXp5cw=="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-pink-400/40 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]"
          >
            <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-pink-300 font-semibold">Instagram</p>
          </a>

          {/* YouTube Link */}
          <a
            href="https://www.youtube.com/@C2BCramcity"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-red-400/40 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-12 w-12 text-red-500 mb-2">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <p className="text-xs uppercase tracking-[0.16em] text-red-300 font-semibold">YouTube</p>
          </a>

          {/* TikTok Link */}
          <a
            href="https://www.tiktok.com/@modjalisi_officiel?_r=1&_t=ZS-96T2VO6GmRh"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <svg viewBox="0 0 48 48" fill="currentColor" className="mx-auto mb-2 h-12 w-12 text-white">
              <path d="M41 16.5c-4.2 0-8.1-1.9-10.7-5.1v20.2c0 8.4-6.8 15.2-15.2 15.2S0 40 0 31.6s6.8-15.2 15.2-15.2c1.1 0 2.2.1 3.2.3v8.5c-1-.4-2.1-.6-3.2-.6-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V1h8.1c.4 7.4 6.3 13.3 13.7 13.7v1.8z" />
            </svg>
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-200 font-semibold">TikTok</p>
          </a>
        </section>

        {/* Discographie */}
        <section className="mt-6 rounded-[32px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Discographie</h2>
            <div className="flex items-center gap-2">
              <Link
                href="/artistes/c2b/tracklist"
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
                  onClick={() => playFromC2BList(i)}
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
                      src="/imagepages/cdbpicture.png"
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
                    <p className="text-xs text-zinc-400">C2B · Mboka Label</p>
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
                <h2 className="mt-2 text-lg font-bold text-white">Les news de C2B</h2>
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
                Une selection de pieces inspirees de l&apos;univers visuel de C2B.
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
