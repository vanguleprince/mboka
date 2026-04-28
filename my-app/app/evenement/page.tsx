import Link from "next/link";

const events = [
  {
    title: "Mboka Live Session",
    place: "Institut Francais, Kinshasa",
    date: "18 Juin 2026",
    time: "19:30",
    tag: "Showcase",
  },
  {
    title: "Urban Night x Mboka",
    place: "Espace Texaf Bilembo",
    date: "28 Juin 2026",
    time: "20:00",
    tag: "Concert",
  },
  {
    title: "Street Culture Festival",
    place: "Agora de la Gombe",
    date: "12 Juillet 2026",
    time: "17:00",
    tag: "Festival",
  },
];

export default function EvenementPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09080f] px-4 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-8 left-6 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute right-4 top-1/4 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <section className="overflow-hidden rounded-[34px] border border-white/12 bg-[linear-gradient(135deg,rgba(109,40,217,0.30),rgba(37,99,235,0.18)),rgba(0,0,0,0.55)] p-6 shadow-[0_28px_80px_rgba(10,8,28,0.55)] backdrop-blur-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">Mboka Experience</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">Evenements</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            Retrouve tous les concerts, showcases et festivals du label Mboka. Une page dediee
            uniquement aux evenements pour suivre les prochaines dates.
          </p>
          <Link
            href="/decouvrir"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-violet-200/35 bg-linear-to-r from-violet-700 to-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
          >
            Retour a Decouvrir
          </Link>
        </section>

        <section className="mt-6 rounded-[34px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Programmation</h2>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.14em] text-violet-200">
              A VENIR
            </span>
          </div>

          <div className="space-y-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white">{event.title}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{event.place}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-400">
                      {event.date} · {event.time}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-emerald-300/35 bg-emerald-300/12 px-3 py-1 text-xs font-semibold text-emerald-100">
                    {event.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
