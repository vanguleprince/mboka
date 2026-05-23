"use client";

import { useEffect, useState } from "react";
import { usePwa } from "@/components/PwaContext";

const DISMISSED_KEY = "mboka:pwa-install-dismissed:v3";

export default function InstallPwaBanner() {
  const { deferredPrompt, setDeferredPrompt, isInstalled, setIsInstalled } = usePwa();

  // mounted = le nœud DOM est dans le DOM
  // visible = déclenche la transition d'entrée/sortie
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isIos, setIsIos] = useState(false);
  // previewMode : forcé via ?pwa-preview=android|ios pour tester l'UI en local
  const [previewMode, setPreviewMode] = useState<"android" | "ios" | null>(null);

  /** Cache le composant avec animation de sortie, puis le démonte */
  const hide = (persist: boolean) => {
    setVisible(false);
    setTimeout(() => {
      if (persist) window.localStorage.setItem(DISMISSED_KEY, "true");
      setMounted(false);
    }, 420);
  };

  const dismiss = () => hide(true);

  const markInstalled = () => {
    window.localStorage.setItem(DISMISSED_KEY, "true");
    setIsInstalled(true);
    setVisible(false);
    setTimeout(() => setMounted(false), 420);
  };

  useEffect(() => {
    // ── Mode preview (test local) : ?pwa-preview=android | ios ──────────────
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("pwa-preview");
    if (preview === "android" || preview === "ios") {
      const previewTimer = window.setTimeout(() => {
        setPreviewMode(preview);
        setIsIos(preview === "ios");
        setMounted(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }, 0);

      return () => window.clearTimeout(previewTimer); // bypass toutes les autres vérifications
    }

    // 1. Déjà ignoré par l'utilisateur
    if (window.localStorage.getItem(DISMISSED_KEY) === "true") return;

    // 2. Déjà en mode standalone (PWA déjà installée) → totalement invisible
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (isStandalone) {
      window.localStorage.setItem(DISMISSED_KEY, "true");
      const installedTimer = window.setTimeout(() => {
        setIsInstalled(true);
      }, 0);

      return () => window.clearTimeout(installedTimer);
    }

    // 3. Détection iOS (Safari bloque le prompt natif)
    const ua = window.navigator.userAgent;
    const iosDevice =
      /iPad|iPhone|iPod/.test(ua) &&
      !(window as Window & { MSStream?: unknown }).MSStream;
    const iosTimer = window.setTimeout(() => {
      setIsIos(iosDevice);
    }, 0);

    // 4. Monte le composant après 2 s, puis déclenche la transition
    const timer = window.setTimeout(() => {
      setMounted(true);
      // Double requestAnimationFrame pour laisser le DOM peindre avant d'animer
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, 2000);

    return () => {
      window.clearTimeout(iosTimer);
      window.clearTimeout(timer);
    };
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  // ── Conditions de rendu ──────────────────────────────────────────────────────
  if (!mounted || isInstalled) return null;
  // En preview mode on s'affranchit du deferredPrompt et de la détection iOS
  if (!previewMode && !deferredPrompt && !isIos) return null;

  // ── Gestionnaire d'installation Android / Chrome ─────────────────────────────
  const handleInstall = async () => {
    // En mode preview on simule juste une fermeture
    if (previewMode) { hide(false); return; }
    if (!deferredPrompt) return;
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        markInstalled();
        setDeferredPrompt(null);
      } else {
        dismiss();
      }
    } catch {
      dismiss();
    }
  };

  // ── Styles partagés ───────────────────────────────────────────────────────────
  const backdropStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transition: "opacity 0.4s ease",
    pointerEvents: visible ? "auto" : "none",
  };

  const modalStyle: React.CSSProperties = {
    background:
      "linear-gradient(160deg, rgba(18,8,55,0.94) 0%, rgba(8,12,45,0.97) 100%)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    transform: visible ? "translateY(0)" : "translateY(110%)",
    opacity: visible ? 1 : 0,
    transition:
      "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
    boxShadow: "0 -4px 60px rgba(109,40,217,0.25), 0 0 0 1px rgba(139,92,246,0.2)",
  };

  return (
    <>
      {/* ── Backdrop ────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="fixed inset-0 z-40 bg-black/30"
        style={backdropStyle}
      />

      {/* ── Modal principale ─────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Installer l'application Mboka"
        className="mboka-modal fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-md rounded-t-4xl px-5 pb-10 pt-5 text-white sm:bottom-5 sm:rounded-4xl"
        style={modalStyle}
      >
        {/* Handle bar mobile */}
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 sm:hidden" />

        {/* Badge preview (visible uniquement en mode ?pwa-preview=...) */}
        {previewMode && (
          <div className="mb-3 flex items-center justify-center">
            <span className="rounded-full border border-amber-400/40 bg-amber-400/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-300">
              ⚙ Preview {previewMode}
            </span>
          </div>
        )}

        {/* Bouton fermeture */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fermer"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/60 transition-all duration-200 hover:bg-white/20 hover:text-white active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── En-tête avec logo ─────────────────────────────────────────────── */}
        <div className="mb-5 flex items-center gap-3 pr-10">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: "linear-gradient(135deg, #6d28d9, #ec4899)",
              boxShadow: "0 4px 18px rgba(139,92,246,0.5)",
            }}
          >
            🎵
          </div>
          <div>
            <h2 className="text-base font-extrabold leading-tight tracking-wide">
              Installer{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MBOKA
              </span>
            </h2>
            <p className="text-[11px] font-medium text-violet-300/80">
              Accès rapide · Expérience immersive
            </p>
          </div>
        </div>

        {isIos ? (
          /* ═══════════════════════════════════════════════════════════════════
             CAS iOS / SAFARI — Instructions manuelles avec animation
          ════════════════════════════════════════════════════════════════════ */
          <div>
            <p className="mb-4 text-sm leading-relaxed text-zinc-300">
              Safari ne permet pas l&apos;installation automatique.{" "}
              <strong className="text-white">3 gestes suffisent :</strong>
            </p>

            <div className="space-y-2.5">
              {/* Étape 1 */}
              <div className="flex items-start gap-3 rounded-2xl border border-violet-500/20 bg-white/5 px-3.5 py-3">
                <span className="mboka-step-badge flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold">
                  1
                </span>
                <p className="text-xs leading-relaxed text-zinc-200">
                  Appuyez sur{" "}
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-violet-400/30 bg-violet-500/15 px-2 py-0.5 font-semibold text-violet-200">
                    {/* Icône Partager Safari — animée */}
                    <span className="mboka-share-icon inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                    </span>
                    Partager
                  </span>{" "}
                  en bas de Safari
                </p>
              </div>

              {/* Étape 2 */}
              <div className="flex items-start gap-3 rounded-2xl border border-violet-500/20 bg-white/5 px-3.5 py-3">
                <span className="mboka-step-badge flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold">
                  2
                </span>
                <p className="text-xs leading-relaxed text-zinc-200">
                  Faites défiler puis appuyez sur{" "}
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-violet-400/30 bg-violet-500/15 px-2 py-0.5 font-semibold text-violet-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2.5" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                    Sur l&apos;écran d&apos;accueil
                  </span>
                </p>
              </div>

              {/* Étape 3 */}
              <div className="flex items-start gap-3 rounded-2xl border border-violet-500/20 bg-white/5 px-3.5 py-3">
                <span className="mboka-step-badge flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold">
                  3
                </span>
                <p className="text-xs leading-relaxed text-zinc-200">
                  Confirmez en appuyant sur{" "}
                  <strong className="text-white">Ajouter</strong> en haut à droite ✅
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] text-zinc-500">
              Aucun téléchargement requis · Accès instantané 🚀
            </p>

            <button
              type="button"
              onClick={dismiss}
              className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-sm text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-[0.98]"
            >
              Peut-être plus tard
            </button>
          </div>
        ) : (
          /* ═══════════════════════════════════════════════════════════════════
             CAS ANDROID / CHROME (et autres navigateurs standards)
          ════════════════════════════════════════════════════════════════════ */
          <div>
            <p className="mb-5 text-sm leading-relaxed text-zinc-300">
              Installez{" "}
              <strong className="text-white">MBOKA</strong> en un clic pour
              une expérience musicale plein écran, même sans connexion.
            </p>

            <ul className="mb-5 space-y-2.5">
              {[
                { emoji: "⚡", text: "Lancement ultra-rapide depuis votre écran" },
                { emoji: "📶", text: "Accès partiel en mode hors ligne" },
                { emoji: "🎨", text: "Interface plein écran sans barre navigateur" },
              ].map(({ emoji, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <span className="text-base leading-none">{emoji}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={handleInstall}
              className="mboka-install-btn w-full rounded-2xl px-6 py-3.5 text-sm font-bold text-white active:scale-[0.97]"
              style={{ boxShadow: "0 4px 25px rgba(139,92,246,0.45)" }}
            >
              Installer l&apos;application ✨
            </button>

            <button
              type="button"
              onClick={dismiss}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-sm text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-[0.98]"
            >
              Plus tard
            </button>
          </div>
        )}
      </div>
    </>
  );
}

