import Link from "next/link";

export default function DecouvrirPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center shadow-2xl">
        <h1 className="text-4xl font-bold">Bienvenue sur la page découverte</h1>
        <p className="mt-4 text-zinc-300">
          Cette page peut maintenant accueillir les détails de ton projet, tes services ou ta présentation complète.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
