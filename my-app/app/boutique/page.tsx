import Link from "next/link";

export default function BoutiquePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center shadow-2xl">
        <h1 className="text-4xl font-bold">Bienvenue dans la boutique</h1>
        <p className="mt-4 text-zinc-300">
          Cette page est prête pour accueillir tes produits, services ou offres spéciales.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
