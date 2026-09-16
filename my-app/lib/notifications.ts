export type MbokaNotificationPayload = {
  title: string;
  body: string;
  icon?: string;
  tag?: string;
  requireInteraction?: boolean;
};

export function isNotificationSupported(): boolean {
  return typeof window !== "undefined" && "Notification" in window;
}

export async function requestMbokaNotifications(): Promise<NotificationPermission> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return "denied";
  }

  if (Notification.permission === "granted") {
    return "granted";
  }

  if (Notification.permission === "denied") {
    return "denied";
  }

  return Notification.requestPermission();
}

export async function triggerMbokaNotification({
  title,
  body,
  icon = "/icon-192.png",
  tag = "mboka-update",
  requireInteraction = true,
}: MbokaNotificationPayload): Promise<boolean> {
  if (typeof window === "undefined") return false;

  try {
    const canUseServiceWorker = "serviceWorker" in navigator && navigator.serviceWorker?.ready;

    if (canUseServiceWorker) {
      const registration = await navigator.serviceWorker.ready;
      if (registration && typeof registration.showNotification === "function") {
        await registration.showNotification(title, {
          body,
          icon,
          tag,
          requireInteraction,
          vibrate: [120, 60, 120],
        } as NotificationOptions & { vibrate: number[] });
        return true;
      }
    }
  } catch {
    // fallback to standard Notification API below
  }

  if (!isNotificationSupported()) return false;

  if (Notification.permission !== "granted") {
    return false;
  }

  new Notification(title, {
    body,
    icon,
    tag,
    requireInteraction,
    vibrate: [120, 60, 120],
  } as NotificationOptions & { vibrate: number[] });

  return true;
}

export function canAskForNotifications(): boolean {
  if (typeof window === "undefined") return false;
  return "Notification" in window && Notification.permission === "default";
}
