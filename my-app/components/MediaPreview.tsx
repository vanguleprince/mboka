"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type VideoItem = {
  src: string;
  title: string;
};

const videos: VideoItem[] = [
  { src: "/videos/bogo.MP4", title: "Vidéo 1" },
  { src: "/videos/cdb.MP4", title: "Vidéo 2" },
  { src: "/videos/flacko.MP4", title: "Vidéo 3" },
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
     

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900 via-black to-zinc-800 p-3">
        <p className="mb-3 text-sm font-semibold text-zinc-200">{activeVideo.title}</p>

        {hasError ? (
          <div className="relative flex min-h-80 flex-col items-center justify-center rounded-xl bg-zinc-950 px-4 py-6 text-center">
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
              className="absolute bottom-5 left-1/2 inline-flex min-w-[15rem] -translate-x-1/2 items-center justify-center rounded-full border border-violet-200/45 bg-linear-to-r from-violet-800 via-blue-700 to-emerald-500 px-10 py-3.5 text-center text-base font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.45)] transition hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Decouvrez Mboka
            </Link>
          </div>
        ) : (
          <div className="relative">
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

            <Link
              href="/decouvrir"
              className="absolute bottom-5 left-1/2 inline-flex min-w-[15rem] -translate-x-1/2 items-center justify-center rounded-full border border-violet-200/45 bg-linear-to-r from-violet-800 via-blue-700 to-emerald-500 px-10 py-3.5 text-center text-base font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.45)] transition hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Decouvrez Mboka
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
