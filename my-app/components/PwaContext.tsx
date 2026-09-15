"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

interface PwaContextType {
  deferredPrompt: BeforeInstallPromptEvent | null;
  setDeferredPrompt: (prompt: BeforeInstallPromptEvent | null) => void;
  isInstalled: boolean;
  setIsInstalled: (installed: boolean) => void;
  notificationPermission: NotificationPermission | "unsupported";
  requestNotificationPermission: () => Promise<NotificationPermission | "unsupported">;
  sendUpdateNotification: (message?: string) => Promise<boolean>;
}

const PwaContext = createContext<PwaContextType | undefined>(undefined);

export function PwaProvider({ children }: { children: ReactNode }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | "unsupported">(
    typeof window !== "undefined" && "Notification" in window ? Notification.permission : "unsupported",
  );

  const requestNotificationPermission = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setNotificationPermission("unsupported");
      return "unsupported";
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
    return permission;
  };

  const sendUpdateNotification = async (message = "MBOKA a été mis à jour. Nouveaux contenus disponibles.") => {
    if (typeof window === "undefined") return false;

    if ("serviceWorker" in navigator && navigator.serviceWorker?.ready) {
      try {
        const registration = await navigator.serviceWorker.ready;
        if (registration && typeof registration.showNotification === "function") {
          await registration.showNotification("MBOKA", {
            body: message,
            icon: "/icon-192.png",
            tag: "mboka-update",
            requireInteraction: true,
            vibrate: [120, 60, 120],
          });
          return true;
        }
      } catch {
        // fallback to browser notification below
      }
    }

    if (!("Notification" in window) || Notification.permission !== "granted") {
      return false;
    }

    new Notification("MBOKA", {
      body: message,
      icon: "/icon-192.png",
      tag: "mboka-update",
      requireInteraction: true,
      vibrate: [120, 60, 120],
    });

    return true;
  };

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const onAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      void sendUpdateNotification("MBOKA est installé. Les nouvelles sorties et mises à jour vous seront signalées ici.");
    };

    if (typeof window !== "undefined" && "Notification" in window) {
      setNotificationPermission(Notification.permission);
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  return (
    <PwaContext.Provider
      value={{
        deferredPrompt,
        setDeferredPrompt,
        isInstalled,
        setIsInstalled,
        notificationPermission,
        requestNotificationPermission,
        sendUpdateNotification,
      }}
    >
      {children}
    </PwaContext.Provider>
  );
}

export function usePwa() {
  const context = useContext(PwaContext);
  if (!context) {
    throw new Error("usePwa must be used within PwaProvider");
  }
  return context;
}
