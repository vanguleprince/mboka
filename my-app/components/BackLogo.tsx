"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackLogo() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="transition-opacity hover:opacity-80"
      aria-label="Retour a la page precedente"
    >
      <Image
        src="/imagepages/mboka.png"
        alt="Mboka"
        width={200}
        height={174}
        className="h-16 w-auto object-contain"
        priority
      />
    </button>
  );
}