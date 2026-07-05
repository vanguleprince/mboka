"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => {
        setIsReady(true);
      }, { timeout: 2200 });

      return () => {
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = window.setTimeout(() => {
      setIsReady(true);
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!isReady) return null;

  return (
    <>
      <InstallPwaBanner />
      <MiniPlayer />
    </>
  );
}
