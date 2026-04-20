// 1. AJOUTE LES IMPORTS (Essentiel pour éviter l'erreur "geistSans is not defined")
import { Geist, Geist_Mono } from "next/font/google";
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

        <header>
           <nav>

             <div>
                
             </div>
             <div></div>
           </nav>
        </header>

        {children}

        <footer>
          
        </footer>
      </body>
    </html>
  );
}