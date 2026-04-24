// 1. AJOUTE LES IMPORTS (Essentiel pour éviter l'erreur "geistSans is not defined")
import { Geist, Geist_Mono } from "next/font/google";
import BackLogo from "@/components/BackLogo";
import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

// 2. INITIALISE LES POLICES
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="fr"
      // 3. AJOUTE "bg-black" ici pour éviter le flash blanc au chargement
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">

       <header className="bg-linear-to-r from-purple-900 to-blue-900 px-4 py-4 sm:px-6 sm:py-5">
         <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-3 shadow-lg backdrop-blur-sm sm:px-8 sm:py-4">
    
      {/* Première DIV : Logo */}
       <div className="flex items-center">
        <BackLogo />
    </div>

    {/* Deuxième DIV : Boutons */}
    <div className="flex items-center gap-4 sm:gap-6">
      <Link href="/apropos" className="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white sm:px-4">
        À propos
      </Link>
      <Link href="/boutique" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-gray-200 active:scale-95 sm:px-5 sm:py-2.5">
        Boutique
      </Link>
    </div>

  </nav>
</header>

        {children}

        <footer className="bg-linear-to-r from-purple-900 to-blue-900 px-4 py-4 sm:px-6 sm:py-5">
           
        </footer>
      </body>
    </html>
  );
}