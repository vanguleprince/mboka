import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { getArtistTracklist } from "@/lib/services/artist-tracklist.service";

export default async function KeurmaTracklistPage() {
  const tracklist = await getArtistTracklist("keurma");
  return <ArtistTracklistClient tracklist={tracklist} />;
}
