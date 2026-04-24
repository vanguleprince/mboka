import Image from "next/image";

const sections = [
  {
    title: "News d'artiste",
    subtitle: "Nouvelles sorties et sons exclusifs",
    color: "from-violet-500/45 via-fuchsia-500/25 to-zinc-900/85",
  },
  {
    title: "Evenement",
    subtitle: "Concerts lives, showcases et invites",
    color: "from-purple-500/40 via-violet-600/25 to-zinc-900/85",
  },
  {
    title: "A propos",
    subtitle: "Vision, equipe et univers Mboka",
    color: "from-indigo-500/35 via-violet-500/25 to-zinc-900/85",
  },
];

const artists = [
  { name: "Bogo", role: "Artiste principal", image: "/imagepages/bogopicture.png" },
  { name: "CDB", role: "Voix soul", image: "/imagepages/cdbpicture.png" },
  { name: "Flacko", role: "Rap melodique", image: "/imagepages/flacko.png" },
  { name: "Keurma", role: "Afro pop", image: "/imagepages/keurma.png" },
];

export default function DecouvrirPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08070c] px-4 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-6 left-8 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -right-10 top-1/3 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <section className="rounded-[34px] border border-white/10 bg-black/40 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-violet-100 sm:text-xl">Explore</h2>
            <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.16em] text-violet-200">
              SECTIONS
            </span>
          </div>

          <div className="relative overflow-x-auto pb-2">
            <div className="flex w-max gap-4 pr-4 sm:gap-6">
              {sections.map((item) => (
                <article
                  key={item.title}
                  className={`group h-97.5 w-72.5 shrink-0 rounded-[30px] border border-white/12 bg-linear-to-br ${item.color} p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition sm:h-107.5 sm:w-85`}
                >
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
                    <div>
                      <span className="inline-flex rounded-full border border-violet-200/25 bg-violet-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-100">
                        iOS Card
                      </span>
                      <h3 className="mt-4 text-3xl font-black leading-tight text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-200/90">{item.subtitle}</p>
                    </div>

                    <div className="rounded-2xl border border-violet-100/20 bg-black/35 p-4">
                      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                        <div className="h-full w-2/3 rounded-full bg-linear-to-r from-violet-300 to-fuchsia-300" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-300">
                        <span>Now</span>
                        <span>Streaming</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[34px] border border-emerald-300/20 bg-linear-to-br from-emerald-500/24 via-green-500/12 to-zinc-900/85 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-emerald-100 sm:text-xl">Artistes du label</h2>
            <span className="rounded-full border border-emerald-300/35 bg-emerald-300/12 px-3 py-1 text-xs tracking-[0.16em] text-emerald-100">
              LABEL CREW
            </span>
          </div>

          <div className="relative overflow-x-auto pb-2 [scrollbar-width:thin] [scrollbar-color:rgba(110,231,183,0.45)_transparent]">
            <div className="flex w-max gap-4 pr-4 sm:gap-6">
              {artists.map((artist) => (
                <article
                  key={artist.name}
                  className="w-52 shrink-0 rounded-3xl border border-emerald-200/25 bg-black/30 p-3 backdrop-blur-sm sm:w-56"
                >
                  <div className="overflow-hidden rounded-2xl border border-emerald-200/20 bg-black/35">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={320}
                      height={320}
                      className="h-44 w-full object-cover"
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="text-base font-bold text-emerald-100">{artist.name}</h3>
                    <p className="mt-1 text-xs text-emerald-200/80">{artist.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
