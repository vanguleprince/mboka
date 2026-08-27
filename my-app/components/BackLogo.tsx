"use client";

import Image from "next/image";
import Link from "next/link";

export default function BackLogo() {
  return (
    <Link
      href="/decouvrir"
      className="flex items-center justify-center transition-opacity hover:opacity-80"
      aria-label="Aller a la page Decouvrir"
    >
      <Image
        src="/imagepages/mboka.png"
        alt="Mboka"
        width={180}
        height={180}
        className="h-[72px] w-auto object-contain sm:h-[88px] md:h-[112px] lg:h-[140px]"
        priority
      />
    </Link>
  );
}