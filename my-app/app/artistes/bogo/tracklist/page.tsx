import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { getArtistTracklist } from "@/lib/services/artist-tracklist.service";

export default async function BogoTracklistPage() {
  const tracklist = await getArtistTracklist("bogo");
  return <ArtistTracklistClient tracklist={tracklist} />;
}
