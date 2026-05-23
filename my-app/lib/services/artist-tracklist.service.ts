import { ARTIST_TRACKLISTS } from "@/lib/artistTracklists";
import { hasRemoteApi } from "@/lib/config/env";
import { apiGetJson } from "@/lib/http/api-client";
import { ARTIST_SLUGS, isArtistSlug, type ArtistSlug, type ArtistTrack, type ArtistTracklist } from "@/lib/types/artist";

function isValidTrack(track: unknown): track is ArtistTrack {
  if (!track || typeof track !== "object") return false;

  const candidate = track as Partial<ArtistTrack>;
  return typeof candidate.title === "string" && typeof candidate.duration === "string";
}

function isValidTracklist(tracklist: unknown): tracklist is ArtistTracklist {
  if (!tracklist || typeof tracklist !== "object") return false;

  const candidate = tracklist as Partial<ArtistTracklist>;
  return (
    typeof candidate.slug === "string" &&
    isArtistSlug(candidate.slug) &&
    typeof candidate.name === "string" &&
    typeof candidate.cover === "string" &&
    Array.isArray(candidate.tracks) &&
    candidate.tracks.every(isValidTrack)
  );
}

export function getLocalArtistTracklist(slug: ArtistSlug): ArtistTracklist {
  return ARTIST_TRACKLISTS[slug];
}

export function getAllLocalArtistTracklists(): ArtistTracklist[] {
  return ARTIST_SLUGS.map((slug) => ARTIST_TRACKLISTS[slug]);
}

export async function getArtistTracklist(slug: ArtistSlug): Promise<ArtistTracklist> {
  if (!hasRemoteApi()) {
    return getLocalArtistTracklist(slug);
  }

  try {
    const remoteTracklist = await apiGetJson<ArtistTracklist>(`/artists/${slug}/tracklist`, {
      next: { revalidate: 60 },
    });

    if (!isValidTracklist(remoteTracklist)) {
      return getLocalArtistTracklist(slug);
    }

    return remoteTracklist;
  } catch {
    return getLocalArtistTracklist(slug);
  }
}

export async function getAllArtistTracklists(): Promise<ArtistTracklist[]> {
  if (!hasRemoteApi()) {
    return getAllLocalArtistTracklists();
  }

  try {
    const remoteTracklists = await apiGetJson<ArtistTracklist[]>("/artists/tracklists", {
      next: { revalidate: 60 },
    });

    if (!Array.isArray(remoteTracklists)) {
      return getAllLocalArtistTracklists();
    }

    const valid = remoteTracklists.filter(isValidTracklist);
    return valid.length ? valid : getAllLocalArtistTracklists();
  } catch {
    return getAllLocalArtistTracklists();
  }
}
