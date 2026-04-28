"use client";

import Image from "next/image";
import Link from "next/link";

export default function BackLogo() {
  return (
    <Link
      href="/decouvrir"
      className="transition-opacity hover:opacity-80"
      aria-label="Aller a la page Decouvrir"
    >
      <Image
        src="/imagepages/mboka.png"
        alt="Mboka"
        width={200}
        height={174}
        className="h-16 w-auto object-contain"
        priority
      />
    </Link>
  );
}