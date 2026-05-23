import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { getArtistTracklist } from "@/lib/services/artist-tracklist.service";

export default async function C2BTracklistPage() {
  const tracklist = await getArtistTracklist("c2b");
  return <ArtistTracklistClient tracklist={tracklist} />;
}
