export type ArtistSlug = "bogo" | "c2b" | "flacko" | "keurma";

export interface ArtistTrack {
  title: string;
  duration: string;
  src?: string;
}

export interface ArtistTracklist {
  slug: ArtistSlug;
  name: string;
  cover: string;
  tracks: ArtistTrack[];
}

export const ARTIST_TRACKLISTS: Record<ArtistSlug, ArtistTracklist> = {
  bogo: {
    slug: "bogo",
    name: "Bogo The Goat",
    cover: "/imagepages/bogothegoat3.jpeg",
    tracks: [
      { title: "Bogo - Track 1", duration: "3:12", src: "/audios/bogo/bogo1.mp3" },
      { title: "Bogo - Track 2", duration: "2:58", src: "/audios/bogo/bogo2.mp3" },
      { title: "Bogo - Track 3", duration: "4:01", src: "/audios/bogo/bogo3.mp3" },
      { title: "Bogo - Track 4", duration: "3:44", src: "/audios/bogo/bogo4.mp3" },
      { title: "Bogo - Track 5", duration: "3:27", src: "/audios/bogo/bogo5.mp3" },
      { title: "Bogo - Track 6", duration: "3:09", src: "/audios/bogo/bogo6.mp3" },
      { title: "Bogo - Track 7", duration: "2:54", src: "/audios/bogo/bogo7.mp3" },
      { title: "Bogo - Track 8", duration: "3:35", src: "/audios/bogo/bogo8.mp3" },
    ],
  },
  c2b: {
    slug: "c2b",
    name: "C2B",
    cover: "/imagepages/cdbpicture.png",
    tracks: [
      { title: "Intro C2B", duration: "3:10" },
      { title: "Vibration Nocturne", duration: "2:56" },
      { title: "Ligne de Feu", duration: "3:48" },
      { title: "Aube Claire", duration: "3:33" },
      { title: "Ciel Ouvert", duration: "3:21" },
    ],
  },
  flacko: {
    slug: "flacko",
    name: "Flacko",
    cover: "/imagepages/flackoCram.jpg",
    tracks: [
      { title: "Sans Frein", duration: "3:05" },
      { title: "Courant Alternatif", duration: "2:47" },
      { title: "Freestyle Goma", duration: "3:55" },
      { title: "Ondes Lentes", duration: "3:18" },
      { title: "Nuit Blanche", duration: "3:40" },
    ],
  },
  keurma: {
    slug: "keurma",
    name: "Keurma",
    cover: "/imagepages/keurma.jpg",
    tracks: [
      { title: "Mon Horizon", duration: "3:08" },
      { title: "Rivages", duration: "2:54" },
      { title: "Lueur", duration: "3:41" },
      { title: "Pas a Pas", duration: "3:22" },
      { title: "Aube Tropicale", duration: "3:17" },
    ],
  },
};
