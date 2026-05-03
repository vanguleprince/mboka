"use client";

import Image from "next/image";
import Link from "next/link";
import { useAudio } from "@/components/AudioProvider";
import type { ArtistTracklist } from "@/lib/artistTracklists";

interface ArtistTracklistClientProps {
  tracklist: ArtistTracklist;
}

export default function ArtistTracklistClient({ tracklist }: ArtistTracklistClientProps) {
  const { playlist, currentIndex, isPlaying, setPlaylist, playTrack } = useAudio();

  const playableTracks = tracklist.tracks.filter((track) => Boolean(track.src));

  const playFromTracklist = (index: number) => {
    const selected = tracklist.tracks[index];
    if (!selected.src) return;

    const samePlaylist =
      playlist.length === playableTracks.length &&
      playableTracks.every((track, i) => track.src === playlist[i]?.src);

    if (!samePlaylist) {
      setPlaylist(
        playableTracks.map((track) => ({
          title: track.title,
          src: track.src!,
          cover: tracklist.cover,
          artist: tracklist.name,
        })),
        playableTracks.findIndex((track) => track.src === selected.src)
      );
      return;
    }

    const playableIndex = playableTracks.findIndex((track) => track.src === selected.src);
    if (playableIndex >= 0) playTrack(playableIndex);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09080f] px-4 py-10 pb-32 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute right-4 top-1/4 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <Link
          href={`/artistes/${tracklist.slug}`}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/15 hover:text-white"
        >
          Retour a l'artiste
        </Link>

        <section className="overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(135deg,rgba(109,40,217,0.30),rgba(37,99,235,0.18)),rgba(0,0,0,0.55)] p-5 shadow-[0_28px_80px_rgba(10,8,28,0.55)] backdrop-blur-xl sm:p-7">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-violet-200/20">
              <Image src={tracklist.cover} alt={tracklist.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Tracklist</p>
              <h1 className="mt-1 text-2xl font-black text-white sm:text-3xl">{tracklist.name}</h1>
              <p className="mt-1 text-sm text-zinc-300">Tous les titres de l'artiste</p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-4xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Titres</h2>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.14em] text-violet-200">
              {tracklist.tracks.length} TRACKS
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {tracklist.tracks.map((track, index) => {
              const playableIndex = playableTracks.findIndex((item) => item.src === track.src);
              const active = track.src && playableIndex === currentIndex;
              return (
                <button
                  key={`${track.title}-${index}`}
                  type="button"
                  onClick={() => playFromTracklist(index)}
                  disabled={!track.src}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                    active
                      ? "border-violet-400/40 bg-violet-500/15"
                      : "border-white/8 bg-white/5 hover:bg-white/10"
                  } ${!track.src ? "cursor-not-allowed opacity-70 hover:bg-white/5" : ""}`}
                >
                  <span className="w-6 text-center text-sm font-bold text-zinc-400">{index + 1}</span>

                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-violet-200/20 bg-black/40">
                    <Image src={tracklist.cover} alt={track.title} width={80} height={80} className="h-full w-full object-cover" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-semibold ${active ? "text-violet-200" : "text-white"}`}>
                      {track.title}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {tracklist.name} · {track.duration}
                    </p>
                  </div>

                  {!track.src ? (
                    <span className="shrink-0 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                      Bientot
                    </span>
                  ) : active && isPlaying ? (
                    <span className="shrink-0 rounded-full border border-violet-300/30 bg-violet-300/12 px-3 py-1 text-xs text-violet-200">
                      Lecture
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                      Ecouter
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
