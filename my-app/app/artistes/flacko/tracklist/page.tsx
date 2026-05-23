import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { getArtistTracklist } from "@/lib/services/artist-tracklist.service";

export default async function FlackoTracklistPage() {
  const tracklist = await getArtistTracklist("flacko");
  return <ArtistTracklistClient tracklist={tracklist} />;
}
