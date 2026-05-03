import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { ARTIST_TRACKLISTS } from "@/lib/artistTracklists";

export default function BogoTracklistPage() {
  return <ArtistTracklistClient tracklist={ARTIST_TRACKLISTS.bogo} />;
}
