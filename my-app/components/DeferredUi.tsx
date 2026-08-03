"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import YoutubeArtistNotice from "@/components/YoutubeArtistNotice";

const InstallPwaBanner = dynamic(() => import("@/components/InstallPwaBanner"), {
  ssr: false,
});

const MiniPlayer = dynamic(() => import("@/components/MiniPlayer"), {
  ssr: false,
});

export default function DeferredUi() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const browserWindow = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (browserWindow.requestIdleCallback) {
      const idleId = browserWindow.requestIdleCallback(() => {
        setIsReady(true);
      }, { timeout: 2200 });

      return () => {
        browserWindow.cancelIdleCallback?.(idleId);
      };
    }

    const timeoutId = globalThis.setTimeout(() => {
      setIsReady(true);
    }, 1200);

    return () => {
      globalThis.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <InstallPwaBanner />
      {isReady ? (
        <MiniPlayer />
      ) : (
        <div className="fixed inset-x-0 bottom-0 z-40 px-4 py-3 sm:px-8">
          <div className="mx-auto h-20 w-full max-w-5xl animate-pulse rounded-2xl border border-white/10 bg-white/5" />
        </div>
      )}
      <YoutubeArtistNotice />
    </>
  );
}
