import MainNav from "@/components/MainNav";
import { AudioProvider } from "@/components/AudioProvider";
import DeferredUi from "../components/DeferredUi";
import { PwaProvider } from "../components/PwaContext";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "MBOKA",
  description: "Créé par Vangu Mvuluzi",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-192.png?v=20260523", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=20260523", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=20260523", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon-192.png?v=20260523",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MBOKA",
  },
};

export const viewport: Viewport = {
  themeColor: "#581c87",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased bg-black">
      <body className="min-h-full flex flex-col bg-black text-white" suppressHydrationWarning>
        <PwaProvider>
          <AudioProvider>
            <header className="bg-linear-to-r from-purple-900 to-blue-900 px-4 py-4 sm:px-6 sm:py-5">
              <MainNav />
            </header>

            {children}

            <footer className="bg-linear-to-r from-purple-900 to-blue-900 px-4 py-4 sm:px-6 sm:py-5">
            </footer>
            <DeferredUi />
          </AudioProvider>
        </PwaProvider>
      </body>
    </html>
  );
}