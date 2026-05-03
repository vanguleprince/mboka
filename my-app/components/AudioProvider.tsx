"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface Track {
  title: string;
  src: string;
  cover?: string;
  artist?: string;
}

interface AudioState {
  playlist: Track[];
  currentIndex: number | null;
  isPlaying: boolean;
  progress: number;   // 0-100
  duration: number;   // secondes
  setPlaylist: (tracks: Track[], startIndex?: number) => void;
  playTrack: (index: number) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrev: () => void;
  seek: (ratio: number) => void;
}

const AudioContext = createContext<AudioState | null>(null);

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used inside AudioProvider");
  return ctx;
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playlist, setPlaylistState] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Créer l'élément audio une seule fois côté client
  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    const onTimeUpdate = () =>
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () =>
      setCurrentIndex((prev) => {
        if (prev === null) return null;
        return (prev + 1) % (playlist.length || 1);
      });

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Charger et jouer quand currentIndex change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || currentIndex === null || !playlist[currentIndex]) return;
    audio.src = playlist[currentIndex].src;
    audio.load();
    if (isPlaying) audio.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, playlist]);

  // Sync play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const setPlaylist = useCallback((tracks: Track[], startIndex = 0) => {
    setPlaylistState(tracks);
    setCurrentIndex(startIndex);
    setIsPlaying(true);
    setProgress(0);
  }, []);

  const playTrack = useCallback(
    (index: number) => {
      if (currentIndex === index) {
        setIsPlaying((p) => !p);
      } else {
        setCurrentIndex(index);
        setIsPlaying(true);
        setProgress(0);
      }
    },
    [currentIndex]
  );

  const togglePlay = useCallback(() => setIsPlaying((p) => !p), []);

  const playNext = useCallback(() => {
    if (!playlist.length) return;
    setCurrentIndex((prev) =>
      prev === null ? 0 : (prev + 1) % playlist.length
    );
    setIsPlaying(true);
    setProgress(0);
  }, [playlist]);

  const playPrev = useCallback(() => {
    if (!playlist.length) return;
    setCurrentIndex((prev) =>
      prev === null ? 0 : (prev - 1 + playlist.length) % playlist.length
    );
    setIsPlaying(true);
    setProgress(0);
  }, [playlist]);

  const seek = useCallback((ratio: number) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    audio.currentTime = ratio * audio.duration;
  }, []);

  return (
    <AudioContext.Provider
      value={{
        playlist,
        currentIndex,
        isPlaying,
        progress,
        duration,
        setPlaylist,
        playTrack,
        togglePlay,
        playNext,
        playPrev,
        seek,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
