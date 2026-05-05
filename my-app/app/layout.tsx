import MainNav from "@/components/MainNav";
import { AudioProvider } from "@/components/AudioProvider";
import MiniPlayer from "@/components/MiniPlayer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevTalk | Un site par jour",
  description: "Créé par Vangu Mvuluzi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased bg-black">
      <body className="min-h-full flex flex-col bg-black text-white" suppressHydrationWarning>
        <AudioProvider>
          <header className="bg-linear-to-r from-purple-900 to-blue-900 px-4 py-4 sm:px-6 sm:py-5">
            <MainNav />
          </header>

          {children}

          <footer className="bg-linear-to-r from-purple-900 to-blue-900 px-4 py-4 sm:px-6 sm:py-5">
          </footer>

          <MiniPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}