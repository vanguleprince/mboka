
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PREVIEW_LIMIT_SECONDS = 17;

const ALLOWED_EXTERNAL_MEDIA_HOSTS = new Set([
  "open.spotify.com",
  "spotify.com",
  "www.youtube.com",
  "youtube.com",
  "youtu.be",
]);

function getIntentFallbackUrl(rawLink: string): string | null {
  const fallbackMatch = rawLink.match(/(?:S\.)?browser_fallback_url=([^;]+)/);
  if (!fallbackMatch?.[1]) return null;

  try {
    return decodeURIComponent(fallbackMatch[1]);
  } catch {
    return null;
  }
}

function toSafeExternalMediaUrl(rawLink: string): string | null {
  const candidate = rawLink.startsWith("intent://")
    ? getIntentFallbackUrl(rawLink)
    : rawLink;

  if (!candidate) return null;

  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== "https:") return null;
    if (!ALLOWED_EXTERNAL_MEDIA_HOSTS.has(parsed.hostname)) return null;

    return parsed.toString();
  } catch {
    return null;
  }
}

export interface Track {
  title: string;
  src: string;
  cover?: string;
  artist?: string;
  link?: string; // Ton lien Spotify stocké dans le JSON
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
 
  const playlistRef = useRef<Track[]>([]);
  const currentIndexRef = useRef<number | null>(null);
  const redirectTriggeredRef = useRef(false);

  useEffect(() => {
    playlistRef.current = playlist;
  }, [playlist]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const safePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Autoplay ou lecture refusee :", err);
      setIsPlaying(false);
    }
  }, []);

  // Initialisation de l'audio et gestion globale des événements (Uniquement côté Client)
  useEffect(() => {
    if (typeof window === "undefined") return; // Sécurité Hydratation Next.js

    audioRef.current = new Audio();
    const audio = audioRef.current;

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      if (redirectTriggeredRef.current) return;

      setProgress((audio.currentTime / audio.duration) * 100);

      // --- LOGIQUE DE PREVIEW AVEC NETTOYAGE STRICT ---
      if (audio.currentTime >= PREVIEW_LIMIT_SECONDS) {
        const idx = currentIndexRef.current;
        const currentTrack = idx !== null ? playlistRef.current[idx] : null;

        // On coupe le son immédiatement
        audio.pause();
        setIsPlaying(false);
        redirectTriggeredRef.current = true;

        if (currentTrack?.link) {
          const safeUrl = toSafeExternalMediaUrl(currentTrack.link);
          if (!safeUrl) {
            console.warn("External media URL blocked: invalid or non-whitelisted domain.");
            return;
          }

          // Ouvre d'abord en nouvel onglet si possible, puis fallback en navigation directe
          // pour eviter les blocages popup sur certains navigateurs/appareils.
          const openedWindow = window.open(safeUrl, "_blank", "noopener,noreferrer");
          if (!openedWindow) {
            window.location.assign(safeUrl);
          }
        }
      }
    };

    const onLoaded = () => {
      setDuration(audio.duration);
    };
    
    const onEnded = () => {
      setCurrentIndex((prev) => {
        if (prev === null) return null;
        return (prev + 1) % (playlistRef.current.length || 1);
      });
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  // Charger et jouer quand currentIndex change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || currentIndex === null || !playlist[currentIndex]) return;
    redirectTriggeredRef.current = false;
    
    audio.src = playlist[currentIndex].src;
    audio.load();
    if (isPlaying) {
      void safePlay();
    }
  }, [currentIndex, playlist, isPlaying, safePlay]);

  // Synchronisation de l'état play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      void safePlay();
    } else {
      audio.pause();
    }
  }, [isPlaying, safePlay]);
 
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
    
    const targetTime = ratio * audio.duration;
    audio.currentTime = targetTime >= PREVIEW_LIMIT_SECONDS ? PREVIEW_LIMIT_SECONDS - 0.1 : targetTime;
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


