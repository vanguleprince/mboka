"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type VideoItem = {
  src: string;
  title: string;
};

const videos: VideoItem[] = [
  { src: "/videos/ntamba-misatu.mp4", title: "Ntaba Misatu" },
  { src: "/videos/keurma_1.mp4", title: "Keurma" },
];

export default function MediaPreview() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const enforceMuted = (video: HTMLVideoElement | null) => {
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
  };

  const activeVideo = videos[activeIndex];
  const hasError = videoErrors[activeIndex];

  return (
    <div className="space-y-4">
     

      <div className="overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br from-zinc-900 via-black to-zinc-800 p-2 sm:p-2.5">
        <p className="mb-3 text-sm font-semibold text-zinc-200">{activeVideo.title}</p>

        {!isMounted ? (
          <div className="relative flex min-h-[22rem] flex-col items-center justify-center rounded-xl bg-zinc-950 px-4 py-6 text-center sm:min-h-[26rem]">
            <Image
              src="/imagepages/mboka.png"
              alt="Mboka"
              width={140}
              height={140}
              className="mb-3 h-auto w-24 object-contain opacity-90"
            />
            <p className="text-sm text-zinc-300">Chargement du media...</p>
          </div>
        ) : hasError ? (
          <div className="relative flex min-h-[22rem] flex-col items-center justify-center rounded-xl bg-zinc-950 px-4 py-6 text-center sm:min-h-[26rem]">
            <Image
              src="/imagepages/mboka.png"
              alt="Mboka"
              width={140}
              height={140}
              className="mb-3 h-auto w-24 object-contain opacity-90"
            />
            <p className="text-sm text-zinc-300">Cette vidéo n’a pas pu être chargée.</p>
            <Link
              href="/decouvrir"
              suppressHydrationWarning
              aria-label="Decouvrir Mboka"
              className="absolute left-1/2 top-1/2 inline-flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-200/50 bg-linear-to-br from-violet-700 to-blue-600 text-white shadow-[0_12px_35px_rgba(59,130,246,0.5)] transition hover:scale-110 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <span className="sr-only">Decouvrir Mboka</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="ml-1 h-8 w-8 fill-current"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="relative">
            <video
              key={activeVideo.src}
              autoPlay
              controls={false}
              ref={enforceMuted}
              muted
              playsInline
              preload="none"
              poster="/imagepages/mboka.png"
              className="h-[21rem] w-full rounded-xl object-cover sm:h-[34rem]"
              onVolumeChange={(event) => {
                event.currentTarget.muted = true;
                event.currentTarget.defaultMuted = true;
                event.currentTarget.volume = 0;
              }}
              onError={() => {
                setVideoErrors((current) => ({
                  ...current,
                  [activeIndex]: true,
                }));

                setActiveIndex((current) => (current + 1) % videos.length);
              }}
              onEnded={() => setActiveIndex((current) => (current + 1) % videos.length)}
            >
              <source src={activeVideo.src} type="video/mp4" />
            </video>

            <Link
              href="/decouvrir"
              suppressHydrationWarning
              aria-label="Decouvrir Mboka"
              className="absolute left-1/2 top-1/2 inline-flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-200/50 bg-linear-to-br from-violet-700 to-blue-600 text-white shadow-[0_12px_35px_rgba(59,130,246,0.5)] transition hover:scale-110 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <span className="sr-only">Decouvrir Mboka</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="ml-1 h-8 w-8 fill-current"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>
        )}

        <div className="mt-4 flex items-center justify-center gap-2">
          {videos.map((video, index) => (
            <button
              key={video.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index ? "w-8 bg-cyan-400" : "w-2.5 bg-white/30"
              }`}
              aria-label={`Afficher ${video.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
