"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type VideoItem = {
  src: string;
  title: string;
};

const videos: VideoItem[] = [
  { src: "/imagepages/bogo.MP4", title: "Vidéo 1" },
  { src: "/imagepages/cdb.MP4", title: "Vidéo 2" },
  { src: "/imagepages/flacko.MP4", title: "Vidéo 3" },
];

export default function MediaPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        for (let step = 1; step <= videos.length; step += 1) {
          const nextIndex = (current + step) % videos.length;
          if (!videoErrors[nextIndex]) {
            return nextIndex;
          }
        }

        return current;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, [videoErrors]);

  const activeVideo = videos[activeIndex];
  const hasError = videoErrors[activeIndex];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
          Galerie vidéo
        </span>
        <p className="text-sm text-zinc-400">Une seule fenêtre affiche les 3 vidéos tour à tour.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900 via-black to-zinc-800 p-3">
        <p className="mb-3 text-sm font-semibold text-zinc-200">{activeVideo.title}</p>

        {hasError ? (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-xl bg-zinc-950 px-4 py-6 text-center">
            <Image
              src="/imagepages/mboka.png"
              alt="Mboka"
              width={140}
              height={140}
              className="mb-3 h-auto w-24 object-contain opacity-90"
            />
            <p className="text-sm text-zinc-300">Cette vidéo n’a pas pu être chargée.</p>
          </div>
        ) : (
          <video
            key={activeVideo.src}
            controls
            autoPlay
            muted
            playsInline
            poster="/imagepages/mboka.png"
            className="h-72 w-full rounded-xl object-cover sm:h-96"
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
