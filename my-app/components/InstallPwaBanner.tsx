"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const PWA_INSTALL_DISMISSED_KEY = "mboka:pwa-install-dismissed:v3";
const LEGACY_DISMISSED_KEYS = ["mboka:pwa-install-dismissed", "mboka:pwa-install-dismissed:v2"];
const LEGACY_INSTALLED_KEYS = ["mboka:pwa-installed", "mboka:pwa-installed:v2"];

export default function InstallPwaBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [ready, setReady] = useState(false);
  const [manualInstallText, setManualInstallText] = useState(
    "Ouvrez le menu du navigateur puis choisissez Installer l'application."
  );

  const persistDismiss = () => {
    window.localStorage.setItem(PWA_INSTALL_DISMISSED_KEY, "true");
    setHidden(true);
  };

  const markInstalled = () => {
    window.localStorage.setItem(PWA_INSTALL_DISMISSED_KEY, "true");
    setInstalled(true);
    setHidden(true);
  };

  const resetPromptForTesting = () => {
    window.localStorage.removeItem(PWA_INSTALL_DISMISSED_KEY);
    LEGACY_DISMISSED_KEYS.forEach((key) => window.localStorage.removeItem(key));
    LEGACY_INSTALLED_KEYS.forEach((key) => window.localStorage.removeItem(key));
    setInstalled(false);
    setHidden(false);
    setShowHelp(true);
  };

  useEffect(() => {
    LEGACY_DISMISSED_KEYS.forEach((key) => window.localStorage.removeItem(key));
    LEGACY_INSTALLED_KEYS.forEach((key) => window.localStorage.removeItem(key));

    const wasDismissed = window.localStorage.getItem(PWA_INSTALL_DISMISSED_KEY) === "true";

    if (wasDismissed) {
      setHidden(true);
    }

    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      markInstalled();
      setReady(true);
      return;
    }

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setShowHelp(false);
      setHidden(false);
    };

    const onAppInstalled = () => {
      markInstalled();
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    const ua = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    if (isIos) {
      setManualInstallText("Sur iPhone/iPad: touchez Partager puis Sur l'ecran d'accueil.");
    } else if (isAndroid) {
      setManualInstallText(
        "Sur Android: ouvrez le menu du navigateur puis choisissez Installer l'application."
      );
    }

    const helpTimer = window.setTimeout(() => {
      setShowHelp(true);
    }, 3500);

    setReady(true);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
      window.clearTimeout(helpTimer);
    };
  }, []);

  if (!ready || installed || hidden || (!deferredPrompt && !showHelp)) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) {
      setShowHelp(true);
      const secureHint = window.isSecureContext
        ? ""
        : "\n\nAstuce: l'installation PWA n'est disponible qu'en HTTPS.";
      window.alert(`${manualInstallText}${secureHint}`);
      return;
    }

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      markInstalled();
      setDeferredPrompt(null);
      return;
    }

    persistDismiss();
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
          <p className="text-xs text-zinc-300">{manualInstallText}</p>
          <p className="mt-2 text-xs text-zinc-300">{helpText}</p>
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
