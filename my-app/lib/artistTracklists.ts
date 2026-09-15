import type { ArtistSlug, ArtistTracklist } from "@/lib/types/artist";

export type { ArtistSlug, ArtistTrack, ArtistTracklist } from "@/lib/types/artist";

export const ARTIST_TRACKLISTS: Record<ArtistSlug, ArtistTracklist> = {
  bogo: {
    slug: "bogo",
    name: "Bogo The Goat",
    cover: "/imagepages/bogothegoat3.jpeg",
    tracks: [],
  },
  c2b: {
    slug: "c2b",
    name: "C2B",
    cover: "/imagepages/cdbpicture.png",
    tracks: [],
  },
  flacko: {
    slug: "flacko",
    name: "Flacko",
    cover: "/imagepages/flackoCram.jpg",
    tracks: [],
  },
  keurma: {
    slug: "keurma",
    name: "Keurma",
    cover: "/imagepages/keurma.jpg",
    tracks: [],
  },
  "ndoki-na-beat": {
    slug: "ndoki-na-beat",
    name: "Ndoki na Beats",
    cover: "/ndoki_na-beat.jpeg",
    tracks: [],
  },
  "wendy-rose": {
    slug: "wendy-rose",
    name: "Wendy Rose",
    cover: "/mboka_admi/wendy_rose.png",
    tracks: [],
  },
};

