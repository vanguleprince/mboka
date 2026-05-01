import Image from "next/image";
import Link from "next/link";

export default function AproposPage() {
  return (
    <main className="min-h-screen bg-[#0A1445] px-4 py-10 sm:px-8 sm:py-14">
      {/* Logo Mboka centré en haut */}
      <div className="mx-auto mb-4 flex justify-center">
        <Image
          src="/imagepages/mboka.png"
          alt="Logo Mboka"
          width={200}
          height={200}
          className="h-40 w-40 object-contain sm:h-52 sm:w-52 lg:h-64 lg:w-64"
          priority
        />
      </div>

      <section className="mx-auto w-full max-w-6xl rounded-[20px] bg-[#DCCFFF] p-6 text-[#13133a] shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3e2b80]">Label Mboka</p>
        <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">L excellence au service de la creation urbaine</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#2a2361] sm:text-lg">
          Fonde a Kinshasa, Mboka porte une vision claire: construire un label solide, moderne et exigeant,
          ou l artiste reste au centre de chaque decision. Notre mission est de transformer des idees fortes
          en oeuvres durables, avec une execution professionnelle a chaque etape.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[20px] bg-white/55 p-5 sm:p-6">
            <h2 className="text-xl font-extrabold text-[#281f66]">Une vision sans frontieres</h2>
            <p className="mt-3 text-sm leading-7 text-[#2f2869] sm:text-base">
              Mboka n est pas une simple structure de production. C est un espace de direction artistique,
              de strategie et d innovation sonore. Nous construisons des catalogues qui traversent le temps,
              pas des tendances qui disparaissent.
            </p>
          </article>

          <article className="rounded-[20px] bg-white/55 p-5 sm:p-6">
            <h2 className="text-xl font-extrabold text-[#281f66]">Accompagnement 360</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#2f2869] sm:text-base">
              <li>Direction artistique sur mesure pour l identite visuelle et sonore.</li>
              <li>Distribution digitale et partenariats strategiques.</li>
              <li>Marketing, communication et narration de marque.</li>
              <li>Encadrement des droits et valorisation du catalogue.</li>
            </ul>
          </article>
        </div>

        <div className="mt-6 rounded-[20px] bg-[#bda6f7] p-5 sm:p-7">
          <h2 className="text-2xl font-black text-[#20165b]">Roster Mboka</h2>
          <p className="mt-2 text-sm leading-7 text-[#2a1f66] sm:text-base">
            Trois identites fortes portent la signature Mboka. Focus special sur BOGOthegoat, C2B et flacko.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-[20px] border border-[#4e3a95]/20 bg-white/70 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3f2f86]">Headliner Mboka</p>
              <h3 className="mt-2 text-2xl font-black text-[#1f1556]">BOGOthegoat</h3>
              <p className="mt-2 text-sm leading-7 text-[#2d2468]">
                Une energie brute, une signature vocale reconnaissable et une direction artistique assumee.
                BOGOthegoat incarne la force de frappe creative du label.
              </p>
            </article>

            <article className="rounded-[20px] border border-[#4e3a95]/20 bg-white/70 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3f2f86]">Headliner Mboka</p>
              <h3 className="mt-2 text-2xl font-black text-[#1f1556]">C2B</h3>
              <p className="mt-2 text-sm leading-7 text-[#2d2468]">
                C2B apporte une ecriture precise, des melodies marquantes et une vision moderne du son urbain.
                Son univers positionne Mboka comme une reference ambitieuse.
              </p>
            </article>
          </div>

          <article className="mt-4 rounded-[20px] border border-[#4e3a95]/20 bg-white/60 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3f2f86]">Artiste en lumiere</p>
            <h3 className="mt-2 text-xl font-black text-[#1f1556]">flacko</h3>
            <p className="mt-2 text-sm leading-7 text-[#2d2468] sm:text-base">
              flacko complete ce trio avec une couleur musicale singuliere et une presence artistique forte.
              Ensemble, ces artistes definissent l ADN de Mboka: authenticite, exigence et impact.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-[20px] bg-[#b894f5] p-5 sm:p-7">
          <h2 className="text-2xl font-black text-[#20165b]">Team Mboka</h2>
          <p className="mt-2 text-sm leading-7 text-[#2a1f66] sm:text-base">
            Les talents qui font vivre le label chaque jour.
          </p>

          <div className="mt-6 flex flex-row items-start justify-between gap-4 overflow-x-auto pb-2">
            <article className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full border-4 border-[#281f66]/40 overflow-hidden bg-white/30">
                <Image
                  src="/imagepages/bogopicture.png"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-black text-[#1f1556]">Production</h3>
              <p className="mt-1 text-xs text-[#2d2468] text-center">Direction artistique et mix</p>
            </article>

            <article className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full border-4 border-[#281f66]/40 overflow-hidden bg-white/30">
                <Image
                  src="/imagepages/cdbpicture.png"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-black text-[#1f1556]">Marketing</h3>
              <p className="mt-1 text-xs text-[#2d2468] text-center">Strategie et communication</p>
            </article>

            <article className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full border-4 border-[#281f66]/40 overflow-hidden bg-white/30">
                <Image
                  src="/imagepages/flackoCram.jpg"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-black text-[#1f1556]">Distribution</h3>
              <p className="mt-1 text-xs text-[#2d2468] text-center">Partenariats et logistics</p>
            </article>

            <Link href="/artistes/keurma" className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full border-4 border-[#281f66]/40 overflow-hidden bg-white/30">
                <Image
                  src="/imagepages/keurma2.jpg"
                  alt="Team member"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-black text-[#1f1556]">Visuel</h3>
              <p className="mt-1 text-xs text-[#2d2468] text-center">Design et identite graphique</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
