import Link from "next/link";

const branchCards = [
  {
    title: "Location des vehicules",
    status: "A configurer",
    description:
      "Ajoutez ici les categories de vehicules, les tarifs journaliers, les conditions et le numero de contact.",
  },
  {
    title: "Mboka Session",
    status: "A planifier",
    description:
      "Presentez les sessions studio, les invites, les dates et les formulaires d'inscription.",
  },
  {
    title: "Autres services",
    status: "En preparation",
    description:
      "Utilisez cet espace pour ajouter toutes les autres branches: event support, media, branding, etc.",
  },
];

export default function AutreBranchePage() {
  return (
    <main className="min-h-screen bg-[#08070c] px-4 py-10 text-white sm:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-8 left-8 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl rounded-[34px] border border-amber-300/25 bg-black/45 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-amber-200/80">M B O K A</p>
            <h1 className="mt-2 text-3xl font-black text-amber-100 sm:text-5xl">Autre branche</h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-200/90 sm:text-base">
              Cette page est prete pour centraliser les nouvelles activites: location des vehicules, Mboka Session et tous les services annexes.
            </p>
          </div>

          <Link
            href="/decouvrir"
            className="rounded-full border border-amber-300/40 bg-amber-300/15 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/25"
          >
            Retour a Decouvrir
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {branchCards.map((card) => (
            <section
              key={card.title}
              className="rounded-3xl border border-amber-200/25 bg-linear-to-br from-amber-400/35 via-orange-500/25 to-zinc-900/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            >
              <span className="inline-flex rounded-full border border-amber-200/40 bg-amber-200/15 px-3 py-1 text-xs tracking-[0.12em] text-amber-100">
                {card.status}
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-100/90">{card.description}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
