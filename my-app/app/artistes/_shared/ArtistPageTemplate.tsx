"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useAudio } from "@/components/AudioProvider";
import { buildPlayableTracks, hasSameTrackOrder } from "@/lib/audio/playlist";

export interface ArtistTrackItem {
  title: string;
  src: string;
  link: string;
  duration?: string;
}

export interface ArtistNewsItem {
  title: string;
  detail: string;
}

export interface ArtistMerchItem {
  name: string;
  description: string;
  price: string;
}

export interface ArtistSocialLinks {
  spotify?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}

export interface ArtistPromoBlock {
  badge: string;
  title: string;
  detail: string;
  ctaText: string;
  ctaHref: string;
  thumbHref: string;
  thumbImage: string;
  thumbAlt: string;
  thumbLabel: string;
}

interface ArtistPageTemplateProps {
  slug: string;
  heroImage: string;
  heroAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  bioLead: React.ReactNode;
  bioExpanded: React.ReactNode;
  tagList: string[];
  tracks: ArtistTrackItem[];
  playableArtist: string;
  socialLinks: ArtistSocialLinks;
  newsTitle: string;
  newsItems: ArtistNewsItem[];
  merchDescription: string;
  merchItems: ArtistMerchItem[];
  promoBlock?: ArtistPromoBlock;
  mainClassName?: string;
  sectionRoundedClassName?: string;
  expandedMaxClassName?: string;
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none">
      <path d="M6 9.3c4.2-1.3 8.7-.8 12.4 1.2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.9 12.2c3.4-1 7-.6 10 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.8 15c2.6-.7 5.2-.4 7.5.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className="mx-auto mb-2 h-12 w-12 text-white">
      <path d="M41 16.5c-4.2 0-8.1-1.9-10.7-5.1v20.2c0 8.4-6.8 15.2-15.2 15.2S0 40 0 31.6s6.8-15.2 15.2-15.2c1.1 0 2.2.1 3.2.3v8.5c-1-.4-2.1-.6-3.2-.6-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V1h8.1c.4 7.4 6.3 13.3 13.7 13.7v1.8z" />
    </svg>
  );
}

export default function ArtistPageTemplate({
  slug,
  heroImage,
  heroAlt,
  heroTitle,
  heroSubtitle,
  bioLead,
  bioExpanded,
  tagList,
  tracks,
  playableArtist,
  socialLinks,
  newsTitle,
  newsItems,
  merchDescription,
  merchItems,
  promoBlock,
  mainClassName,
  sectionRoundedClassName,
  expandedMaxClassName,
}: ArtistPageTemplateProps) {
  const [expanded, setExpanded] = useState(false);
  const { playlist, currentIndex, isPlaying, setPlaylist, playTrack } = useAudio();

  const playableTracks = useMemo(
    () => buildPlayableTracks(tracks, { cover: heroImage, artist: playableArtist }),
    [heroImage, playableArtist, tracks],
  );

  const samePlaylist = useMemo(
    () => hasSameTrackOrder(playlist, playableTracks),
    [playlist, playableTracks],
  );

  const playFromArtistList = (index: number) => {
    if (!samePlaylist) {
      setPlaylist(playableTracks, index);
      return;
    }

    playTrack(index);
  };

  const roundedClassName = sectionRoundedClassName ?? "rounded-4xl";
  const expandedClassName = expandedMaxClassName ?? "max-h-200";
  const pageClassName = mainClassName ?? "relative min-h-screen overflow-hidden bg-[#09080f] px-4 py-10 text-white sm:px-8";

  return (
    <main className={pageClassName}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute right-4 top-1/4 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <Link
          href="/artistes"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/15 hover:text-white"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
          Retour aux artistes
        </Link>

        <section className="overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(135deg,rgba(109,40,217,0.30),rgba(37,99,235,0.18)),rgba(0,0,0,0.55)] shadow-[0_28px_80px_rgba(10,8,28,0.55)] backdrop-blur-xl">
          <div className="flex flex-col gap-0 md:flex-row">
            <div className="relative h-72 w-full shrink-0 md:h-auto md:w-80 lg:w-96">
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/60 md:bg-linear-to-l" />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">Mboka Label</p>
              <h1 className="mt-3 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl">{heroTitle}</h1>
              <p className="mt-2 text-lg font-medium text-violet-200/70">{heroSubtitle}</p>
              <div className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
                {bioLead}

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded ? `${expandedClassName} opacity-100 mt-3` : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3">{bioExpanded}</div>
                </div>

                <button
                  onClick={() => setExpanded((prev) => !prev)}
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
                {tagList.map((tag) => (
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

        <section className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {socialLinks.spotify ? (
            <a
              href={socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-green-400/40 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1DB954]">
                <SpotifyIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-300">Spotify</p>
            </a>
          ) : null}

          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-pink-400/40 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]"
            >
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400">
                <InstagramIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-300">Instagram</p>
            </a>
          ) : null}

          {socialLinks.youtube ? (
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-red-400/40 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
            >
              <YoutubeIcon className="mx-auto mb-2 h-12 w-12 text-red-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-300">YouTube</p>
            </a>
          ) : null}

          {socialLinks.tiktok ? (
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <TiktokIcon />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">TikTok</p>
            </a>
          ) : null}
        </section>

        {promoBlock ? (
          <section className="mt-6 overflow-hidden rounded-4xl border border-red-300/20 bg-[linear-gradient(130deg,rgba(239,68,68,0.18),rgba(17,24,39,0.92))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200/85">{promoBlock.badge}</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{promoBlock.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-200">{promoBlock.detail}</p>
                <a
                  href={promoBlock.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-200/35 bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-100 transition hover:bg-red-500/35"
                >
                  {promoBlock.ctaText}
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path
                      fillRule="evenodd"
                      d="M4.25 10a.75.75 0 0 1 .75-.75h8.19l-2.97-2.97a.75.75 0 0 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H5a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <a
                href={promoBlock.thumbHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-44 w-full overflow-hidden rounded-2xl border border-white/20 md:max-w-xs"
              >
                <Image
                  src={promoBlock.thumbImage}
                  alt={promoBlock.thumbAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  <YoutubeIcon className="h-4 w-4" />
                  {promoBlock.thumbLabel}
                </div>
              </a>
            </div>
          </section>
        ) : null}

        <section className={`mt-6 ${roundedClassName} border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7`}>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Discographie</h2>
            <div className="flex items-center gap-2">
              <Link
                href={`/artistes/${slug}/tracklist`}
                className="rounded-full border border-violet-200/35 bg-black/35 px-3 py-1 text-xs font-semibold tracking-widest text-violet-100 transition hover:bg-violet-500/20"
              >
                Tracklist complete
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {tracks.map((track, index) => {
              const active = currentIndex === index && samePlaylist;
              return (
                <button
                  key={track.src}
                  type="button"
                  onClick={() => playFromArtistList(index)}
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
                      <span className="text-sm font-bold text-zinc-500">{index + 1}</span>
                    )}
                  </div>

                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-violet-200/20 bg-black/40">
                    <Image
                      src={heroImage}
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
                    <p className="text-xs text-zinc-400">{playableArtist} · Mboka Label</p>
                  </div>

                  {active ? (
                    <div className="flex shrink-0 items-center gap-1">
                      <span className="h-1.5 w-1 rounded-full bg-violet-400 animate-bounce [animation-delay:0ms]" />
                      <span className="h-2.5 w-1 rounded-full bg-violet-400 animate-bounce [animation-delay:150ms]" />
                      <span className="h-1.5 w-1 rounded-full bg-violet-400 animate-bounce [animation-delay:300ms]" />
                    </div>
                  ) : track.duration ? (
                    <span className="shrink-0 text-xs text-zinc-500">{track.duration}</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={`${roundedClassName} border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7`}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Actualites</p>
                <h2 className="mt-2 text-lg font-bold text-white">{newsTitle}</h2>
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

          <div className={`${roundedClassName} border border-violet-300/20 bg-[linear-gradient(180deg,rgba(109,40,217,0.18),rgba(9,8,15,0.82))] p-5 backdrop-blur-xl sm:p-7`}>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Boutique</p>
              <h2 className="mt-2 text-lg font-bold text-white">Vetements de l&apos;artiste</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{merchDescription}</p>
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

        <section className={`mt-6 overflow-hidden ${roundedClassName} border border-violet-300/25 bg-[linear-gradient(135deg,rgba(109,40,217,0.35),rgba(37,99,235,0.25))] p-7 text-center backdrop-blur-xl`}>
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
