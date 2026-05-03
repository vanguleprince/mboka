import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { ARTIST_TRACKLISTS } from "@/lib/artistTracklists";

export default function FlackoTracklistPage() {
  return <ArtistTracklistClient tracklist={ARTIST_TRACKLISTS.flacko} />;
}
