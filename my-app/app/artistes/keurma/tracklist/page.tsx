import ArtistTracklistClient from "@/components/ArtistTracklistClient";
import { ARTIST_TRACKLISTS } from "@/lib/artistTracklists";

export default function KeurmaTracklistPage() {
  return <ArtistTracklistClient tracklist={ARTIST_TRACKLISTS.keurma} />;
}
