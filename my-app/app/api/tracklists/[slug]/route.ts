import { NextResponse } from "next/server";
import { ARTIST_SLUGS, isArtistSlug } from "@/lib/types/artist";
import { getArtistTracklist } from "@/lib/services/artist-tracklist.service";

export function generateStaticParams() {
  return ARTIST_SLUGS.map((slug) => ({ slug }));
}

interface Context {
  params: Promise<{ slug: string }>;
}

export async function GET(_: Request, context: Context) {
  const { slug } = await context.params;
  if (!isArtistSlug(slug)) {
    return NextResponse.json({ message: "Artist not found" }, { status: 404 });
  }

  const tracklist = await getArtistTracklist(slug);
  return NextResponse.json(tracklist);
}
