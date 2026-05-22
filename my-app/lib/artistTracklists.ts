export type ArtistSlug = "bogo" | "c2b" | "flacko" | "keurma";

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

export const ARTIST_TRACKLISTS: Record<ArtistSlug, ArtistTracklist> = {
  bogo: {
    slug: "bogo",
    name: "Bogo The Goat",
    cover: "/imagepages/bogothegoat3.jpeg",
    tracks: [
      { title: "Bogo - Track 1", duration: "3:12", src: "/audios/bogo/bogo1.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
      { title: "Bogo - Track 2", duration: "2:58", src: "/audios/bogo/bogo2.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
      { title: "Bogo - Track 3", duration: "4:01", src: "/audios/bogo/bogo3.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
      { title: "Bogo - Track 4", duration: "3:44", src: "/audios/bogo/bogo4.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
      { title: "Bogo - Track 5", duration: "3:27", src: "/audios/bogo/bogo5.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
      { title: "Bogo - Track 6", duration: "3:09", src: "/audios/bogo/bogo6.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
      { title: "Bogo - Track 7", duration: "2:54", src: "/audios/bogo/bogo7.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
      { title: "Bogo - Track 8", duration: "3:35", src: "/audios/bogo/bogo8.mp3", link: "https://open.spotify.com/artist/21lSdHT5xVPgV1R7RknvFC?si=csAB-2U7S0W5zAmCUc8Q3Q" },
    ],
  },
  c2b: {
    slug: "c2b",
    name: "C2B",
    cover: "/imagepages/cdbpicture.png",
    tracks: [
      { title: "MPIAKA (feat. Gaz Fabilouss)", duration: "2:56", src: "/cdb/C2B - MPIAKA & Gaz Fabilouss - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg" },
      { title: "Oa Nani (feat. Mobutu Satana)", duration: "3:32", src: "/cdb/C2B - Oa Nani & @MobutuSatanaOfficiel - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg" },
      { title: "OG (feat. SINS OFF)", duration: "3:32", src: "/cdb/C2B - OG & @SINS_OFF - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg" },
      { title: "TUKU TUKU (feat. Diesel Gucci)", duration: "3:25", src: "/cdb/C2B - TUKU TUKU & @DieselGucciofficiel - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg" },
      { title: "DIPLOME", duration: "2:46", src: "/cdb/DIPLOME [VISUALIZER 02] - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6zUcMw2Cj20JpCj4XoPqp9?si=QwCrFTPCSFOUSP-bOIzaOg" },
    ],
  },
  flacko: {
    slug: "flacko",
    name: "Flacko",
    cover: "/imagepages/flackoCram.jpg",
    tracks: [
      { title: "C'est fou ça (Prod by Offside)", duration: "2:50", src: "/flacko/FLACKO - C'est fou ça (Prod by Offside) - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg" },
      { title: "HUSTLE (Goat Session)", duration: "2:38", src: "/flacko/FLACKO - HUSTLE ( GOAT SESSION ) - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg" },
      { title: "MASSE", duration: "2:34", src: "/flacko/FLACKO - MASSE (DIRECTED BY POPPINJEE) - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/14CMqCyT5GDbEJpzn8EmsJ?si=7dx-i4_wSl2dmBzYbjAIcg" },
    ],
  },
  keurma: {
    slug: "keurma",
    name: "Keurma",
    cover: "/imagepages/keurma.jpg",
    tracks: [
      { title: "Montage (feat. Suintement)", duration: "2:53", src: "/keurma/❤️MA - Montage feat. Suintement (Clip Officiel) - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6dFCDvHfmQzvELK8AlpXoi?si=sbKCCt3CQBqcDaEAd7z5Hw" },
      { title: "Vraie Momie", duration: "2:05", src: "/keurma/❤️MA - Vraie Momie - Download - Tubidy.mp3", link: "https://open.spotify.com/artist/6dFCDvHfmQzvELK8AlpXoi?si=sbKCCt3CQBqcDaEAd7z5Hw" },
    ],
  },
};
