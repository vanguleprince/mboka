"use client";

import { useEffect, useState } from "react";
import { usePwa } from "@/components/PwaContext";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const PWA_INSTALL_DISMISSED_KEY = "mboka:pwa-install-dismissed:v3";
const LEGACY_DISMISSED_KEYS = ["mboka:pwa-install-dismissed", "mboka:pwa-install-dismissed:v2"];
const LEGACY_INSTALLED_KEYS = ["mboka:pwa-installed", "mboka:pwa-installed:v2"];

export default function InstallPwaBanner() {
  const { deferredPrompt, setDeferredPrompt, isInstalled, setIsInstalled } = usePwa();
  const [hidden, setHidden] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [ready, setReady] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [manualInstallText, setManualInstallText] = useState(
    "Ouvrez le menu du navigateur puis choisissez Installer l'application."
  );

  const persistDismiss = () => {
    window.localStorage.setItem(PWA_INSTALL_DISMISSED_KEY, "true");
    setHidden(true);
  };

  const markInstalled = () => {
    window.localStorage.setItem(PWA_INSTALL_DISMISSED_KEY, "true");
    setIsInstalled(true);
    setHidden(true);
  };

  const resetPromptForTesting = () => {
    window.localStorage.removeItem(PWA_INSTALL_DISMISSED_KEY);
    LEGACY_DISMISSED_KEYS.forEach((key) => window.localStorage.removeItem(key));
    LEGACY_INSTALLED_KEYS.forEach((key) => window.localStorage.removeItem(key));
    setIsInstalled(false);
    setHidden(false);
    setShowHelp(true);
    setDeferredPrompt(null);
  };

  useEffect(() => {
    LEGACY_DISMISSED_KEYS.forEach((key) => window.localStorage.removeItem(key));
    LEGACY_INSTALLED_KEYS.forEach((key) => window.localStorage.removeItem(key));

    const wasDismissed = window.localStorage.getItem(PWA_INSTALL_DISMISSED_KEY) === "true";

    if (wasDismissed) {
      setHidden(true);
      setReady(true);
      return;
    }

    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      markInstalled();
      setReady(true);
      return;
    }

    const ua = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    if (isIos) {
      setIsIos(true);
      setManualInstallText("Sur iPhone/iPad: touchez Partager puis Sur l'ecran d'accueil.");
    } else if (isAndroid) {
      setManualInstallText(
        "Sur Android: ouvrez le menu du navigateur puis choisissez Installer l'application."
      );
    }

    // Show help after 3.5 seconds if no prompt yet
    const helpTimer = window.setTimeout(() => {
      setShowHelp(true);
    }, 3500);

    setReady(true);

    return () => {
      window.clearTimeout(helpTimer);
    };
  }, []);

  if (!ready || isInstalled || hidden || (!deferredPrompt && !showHelp)) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) {
      setShowHelp(true);
      const secureHint = window.isSecureContext
        ? ""
        : "\n\nAstuce: l'installation PWA n'est disponible qu'en HTTPS.";
      window.alert(`${manualInstallText}${secureHint}`);
      return;
    }

    try {
      console.log("Showing PWA install prompt");
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      console.log("User choice:", choice.outcome);
      
      if (choice.outcome === "accepted") {
        markInstalled();
        setDeferredPrompt(null);
        return;
      }

      persistDismiss();
    } catch (error) {
      console.error("Error during PWA install:", error);
      window.alert("Une erreur est survenue lors de l'installation. Veuillez réessayer.");
    }
  };

  const helpText =
    "Pas d'inquietude: vous pourrez desinstaller MBOKA a tout moment depuis votre navigateur.";

  return (
    <div className="fixed bottom-24 right-4 z-50 w-[min(92vw,360px)] rounded-2xl border border-white/15 bg-black/85 p-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:bottom-28 sm:right-6">
      <p className="text-sm font-semibold">Voulez-vous installer MBOKA sur votre ecran d'accueil ?</p>
      <p className="mt-1 text-xs text-zinc-300">Installez l'application pour y acceder plus vite, avec un lancement simple depuis votre ecran.</p>
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
            onClick={persistDismiss}
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-zinc-300 transition hover:border-white/40 hover:text-white"
          >
            Plus tard
          </button>
        </div>
      ) : (
        <div className="mt-3">
          {isIos ? (
            <div className="space-y-2">
              <p className="text-xs font-medium text-zinc-200">Suivez ces 3 étapes dans Safari :</p>
              <div className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold">1</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Appuyez sur l'icône{" "}
                  <span className="inline-flex items-center gap-0.5 rounded bg-white/10 px-1 py-0.5 font-medium text-white">
                    {/* Safari Share icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                      <polyline points="16 6 12 2 8 6"/>
                      <line x1="12" y1="2" x2="12" y2="15"/>
                    </svg>
                    Partager
                  </span>{" "}
                  en bas de Safari
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold">2</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Faites défiler et appuyez sur{" "}
                  <span className="inline-flex items-center gap-0.5 rounded bg-white/10 px-1 py-0.5 font-medium text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <line x1="12" y1="8" x2="12" y2="16"/>
                      <line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                    Sur l'écran d'accueil
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold">3</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Appuyez sur <span className="font-medium text-white">Ajouter</span> en haut à droite
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-xs text-zinc-300">{manualInstallText}</p>
              <p className="mt-2 text-xs text-zinc-300">{helpText}</p>
            </>
          )}
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
              onClick={persistDismiss}
              className="rounded-full border border-white/20 px-4 py-2 text-xs text-zinc-300 transition hover:border-white/40 hover:text-white"
            >
              Plus tard
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={resetPromptForTesting}
        className="mt-3 text-[11px] text-zinc-400 underline decoration-zinc-500/70 underline-offset-2 transition hover:text-zinc-200"
      >
        Reinitialiser le prompt (test)
      </button>
    </div>
  );
}
