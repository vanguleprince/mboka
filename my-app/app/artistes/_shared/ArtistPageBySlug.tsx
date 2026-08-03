"use client";

import type { ArtistSlug } from "@/lib/types/artist";
import ArtistPageTemplate from "./ArtistPageTemplate";
import { ARTIST_PAGE_DATA } from "./artistPageData";

interface ArtistPageBySlugProps {
  slug: ArtistSlug;
}

export default function ArtistPageBySlug({ slug }: ArtistPageBySlugProps) {
  return <ArtistPageTemplate {...ARTIST_PAGE_DATA[slug]} />;
}