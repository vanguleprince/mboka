export const ARTIST_SLUGS = ["bogo", "c2b", "flacko", "keurma", "wendy-rose"] as const;

export type ArtistSlug = (typeof ARTIST_SLUGS)[number];

export interface ArtistTrack {
  title: string;
  duration: string;
  src?: string;
  link?: string;
}

export interface ArtistTracklist {
  slug: ArtistSlug;
  name: string;
  cover: string;
  tracks: ArtistTrack[];
}

export function isArtistSlug(value: string): value is ArtistSlug {
  return ARTIST_SLUGS.includes(value as ArtistSlug);
}
