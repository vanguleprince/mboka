import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { ARTIST_TRACKLISTS } from "@/lib/artistTracklists";

export default function C2BTracklistPage() {
  return <ArtistTracklistClient tracklist={ARTIST_TRACKLISTS.c2b} />;
}
