"use client";

import Image from "next/image";
import { useAudio } from "./AudioProvider";

function fmt(s: number) {
  if (!s || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function MiniPlayer() {
  const {
    playlist,
    currentIndex,
    isPlaying,
    progress,
    duration,
    togglePlay,
    playNext,
    playPrev,
    seek,
  } = useAudio();

  if (currentIndex === null || !playlist[currentIndex]) return null;

  const track = playlist[currentIndex];

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-black/85 px-4 py-3 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2">
        {/* Barre de progression cliquable */}
        <div
          className="h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/15"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            seek((e.clientX - rect.left) / rect.width);
          }}
        >
          <div
            className="h-full rounded-full bg-linear-to-r from-violet-400 to-fuchsia-400 transition-[width]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-4">
          {/* Pochette */}
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-violet-200/20 bg-black/40">
            {track.cover ? (
              <Image
                src={track.cover}
                alt={track.title}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-violet-900/40">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-violet-300">
                  <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" />
                </svg>
              </div>
            )}
          </div>

          {/* Infos titre */}
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-semibold text-white">{track.title}</p>
            <p className="text-xs text-zinc-400">
              {track.artist ?? "Mboka Label"} · {fmt(duration * progress / 100)} / {fmt(duration)}
            </p>
          </div>

          {/* Contrôles */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Précédent */}
            <button
              type="button"
              onClick={playPrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/8 text-zinc-300 transition hover:bg-white/20 hover:text-white"
              aria-label="Précédent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
              </svg>
            </button>

            {/* Play / Pause */}
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-fuchsia-500 text-white shadow-[0_4px_18px_rgba(109,40,217,0.45)] transition hover:brightness-110"
              aria-label={isPlaying ? "Pause" : "Lecture"}
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
                </svg>
              )}
            </button>

            {/* Suivant */}
            <button
              type="button"
              onClick={playNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/8 text-zinc-300 transition hover:bg-white/20 hover:text-white"
              aria-label="Suivant"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M6 18l8.5-6L6 6v12zm2-12v8l5.5-4L8 6zm8-2h2v12h-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
