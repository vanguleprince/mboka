"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function InstallPwaBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setInstalled(true);
      return;
    }

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setShowHelp(false);
      setHidden(false);
    };

    const onAppInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
      setHidden(true);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    const helpTimer = window.setTimeout(() => {
      setShowHelp(true);
    }, 3500);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
      window.clearTimeout(helpTimer);
    };
  }, []);

  if (installed || hidden || (!deferredPrompt && !showHelp)) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      setInstalled(true);
      setDeferredPrompt(null);
      return;
    }
    setHidden(true);
  };

  const helpText =
    "Si le bouton Installer n'apparait pas, ouvre le menu du navigateur puis choisis Installer l'application.";

  return (
    <div className="fixed bottom-24 right-4 z-50 w-[min(92vw,360px)] rounded-2xl border border-white/15 bg-black/85 p-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:bottom-28 sm:right-6">
      <p className="text-sm font-semibold">Installer MBOKA</p>
      <p className="mt-1 text-xs text-zinc-300">Ajoute l'application sur ton ecran d'accueil pour y acceder plus vite.</p>
      {deferredPrompt ? (
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={handleInstall}
            className="rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
          >
            Installer
          </button>
          <button
            type="button"
            onClick={() => setHidden(true)}
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-zinc-300 transition hover:border-white/40 hover:text-white"
          >
            Plus tard
          </button>
        </div>
      ) : (
        <div className="mt-3">
          <p className="text-xs text-zinc-300">{helpText}</p>
          <button
            type="button"
            onClick={() => setHidden(true)}
            className="mt-3 rounded-full border border-white/20 px-4 py-2 text-xs text-zinc-300 transition hover:border-white/40 hover:text-white"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}
