"use client";

import { useEffect, useState } from "react";
import InstallPwaBanner from "@/components/InstallPwaBanner";
import MiniPlayer from "@/components/MiniPlayer";

export default function DeferredUi() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <InstallPwaBanner />
      {mounted ? <MiniPlayer /> : null}
    </>
  );
}
