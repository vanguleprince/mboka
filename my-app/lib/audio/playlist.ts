export interface PlayableTrack {
  title: string;
  src: string;
  cover?: string;
  artist?: string;
  link?: string;
}

export function buildPlayableTracks<T extends { title: string; src: string; link?: string }>(
  tracks: T[],
  metadata: Pick<PlayableTrack, "cover" | "artist">,
): PlayableTrack[] {
  return tracks.map((track) => ({
    ...track,
    cover: metadata.cover,
    artist: metadata.artist,
  }));
}

export function hasSameTrackOrder(
  left: Array<{ src?: string }>,
  right: Array<{ src?: string }>,
): boolean {
  if (left.length !== right.length) return false;

  return left.every((track, index) => track.src === right[index]?.src);
}

export function getTrackIndexBySrc(tracks: Array<{ src?: string }>, src?: string): number {
  if (!src) return -1;

  return tracks.findIndex((track) => track.src === src);
}