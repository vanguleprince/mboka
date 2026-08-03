import { notFound } from "next/navigation";
import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { getArtistTracklist } from "@/lib/services/artist-tracklist.service";
import { ARTIST_SLUGS, isArtistSlug } from "@/lib/types/artist";

export function generateStaticParams() {
  return ARTIST_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArtistTracklistBySlugPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isArtistSlug(slug)) {
    notFound();
  }

  const tracklist = await getArtistTracklist(slug);
  return <ArtistTracklistClient tracklist={tracklist} />;
}