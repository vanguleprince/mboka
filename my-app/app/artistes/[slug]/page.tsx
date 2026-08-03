import { notFound } from "next/navigation";
import ArtistPageBySlug from "../_shared/ArtistPageBySlug";
import { ARTIST_SLUGS, isArtistSlug } from "@/lib/types/artist";

export function generateStaticParams() {
  return ARTIST_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArtistBySlugPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isArtistSlug(slug)) {
    notFound();
  }

  return <ArtistPageBySlug slug={slug} />;
}