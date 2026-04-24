import Link from "next/link";

export default function AproposPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08070c] px-4 py-12 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -right-16 bottom-6 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-4xl rounded-[34px] border border-white/10 bg-black/40 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-violet-300">A PROPOS</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-5xl">Univers Mboka</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
          Mboka est un label creatif qui melange musique, mode et culture urbaine.
          Notre vision: offrir des experiences fortes, authentiques et modernes, entre sons,
          image et style de vie.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <article className="rounded-3xl border border-violet-200/20 bg-violet-500/10 p-4">
            <h2 className="text-lg font-bold text-violet-100">Vision</h2>
            <p className="mt-2 text-sm text-zinc-300">Construire une scene locale forte et inspiree.</p>
          </article>
          <article className="rounded-3xl border border-violet-200/20 bg-violet-500/10 p-4">
            <h2 className="text-lg font-bold text-violet-100">Equipe</h2>
            <p className="mt-2 text-sm text-zinc-300">Artistes, producteurs, createurs visuels et stylists.</p>
          </article>
          <article className="rounded-3xl border border-violet-200/20 bg-violet-500/10 p-4">
            <h2 className="text-lg font-bold text-violet-100">Ambition</h2>
            <p className="mt-2 text-sm text-zinc-300">Faire rayonner Mboka au-dela de la scene locale.</p>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/decouvrir"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Retour decouvrir
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Accueil
          </Link>
        </div>
      </section>
    </main>
  );
}
