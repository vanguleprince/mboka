"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "mboka:youtube-notice-seen";

type VideoNoticeItem = {
  title: string;
  artist: string;
  href: string;
  image: string;
  cta: string;
};

const VIDEO_ITEMS: VideoNoticeItem[] = [
  {
    title: "NTABA MISATO",
    artist: "Bogo",
    href: "https://www.youtube.com/results?search_query=Bogo+Ntaba+Misato",
    image: "/imagepages/bogothegoat3.jpeg",
    cta: "Regarder sur YouTube",
  },
  {
    title: "Flacko",
    artist: "Flacko",
    href: "https://www.youtube.com/@BIGFLACKOCRAM",
    image: "/imagepages/flackoCram.jpg",
    cta: "Visiter la chaine",
  },
  {
    title: "Nouvelle video C2B",
    artist: "C2B",
    href: "https://www.youtube.com/@C2BCramcity",
    image: "/imagepages/cdbpicture.png",
    cta: "Voir la nouveaute",
  },
];

export default function YoutubeArtistNotice() {
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo(() => VIDEO_ITEMS, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    if (alreadySeen) return;

    let timeoutId: number | undefined;

    const scheduleOpen = () => {
      timeoutId = window.setTimeout(() => {
        setIsOpen(true);
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      }, 30000);
    };

    if (document.readyState === "complete") {
      scheduleOpen();
    } else {
      window.addEventListener("load", scheduleOpen, { once: true });
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("load", scheduleOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousOverflowY = document.body.style.overflowY;
    document.body.style.overflow = "hidden";
    document.body.style.overflowY = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.overflowY = previousOverflowY;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-80 flex items-end justify-center overflow-y-auto bg-black/65 px-4 py-6 sm:items-center"
      onClick={() => setIsOpen(false)}
    >
      <div className="flex min-h-full w-full items-end justify-center sm:items-center">
        <div
          className="relative w-full max-w-5xl max-h-[calc(100vh-2.5rem)] overflow-y-auto rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),rgba(17,24,39,0.95)_48%),linear-gradient(130deg,rgba(220,38,38,0.18),rgba(15,23,42,0.95))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-7"
          style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.25rem)" }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-red-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex items-start justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-200/90">Video notice</p>
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setIsOpen(false)}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/25 bg-black/60 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white/20 active:scale-[0.98] sm:min-h-10 sm:px-3 sm:py-1.5 sm:text-xs"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>Fermer</span>
            </button>
          </div>

          <h2 className="mt-2 max-w-xl text-2xl font-black tracking-tight text-white sm:text-3xl">
            Nouvelles videos a voir sur YouTube
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-200/90">
            Decouvre les contenus de NTABA MISATO, Flacko et C2B. Clique sur une carte pour ouvrir directement YouTube.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/15 bg-black/30 transition hover:-translate-y-1 hover:border-red-300/40 hover:bg-black/45"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                    YouTube
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-300">{item.artist}</p>
                  <p className="mt-1 text-base font-bold text-white">{item.title}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-200 transition group-hover:text-red-100">
                    {item.cta}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M4.25 10a.75.75 0 0 1 .75-.75h8.19l-2.97-2.97a.75.75 0 0 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H5a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/20 bg-white/12 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20 active:scale-[0.99]"
            >
              Fermer cette section
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}