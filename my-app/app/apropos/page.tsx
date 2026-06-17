import Image from "next/image";

export default function AproposPage() {
  return (
    <main className="min-h-screen bg-[#0A1445] px-4 py-10 sm:px-8 sm:py-14">
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3e2b80]">A propos de Mboka</p>
        <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">MBOKA</h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-[#2a2361] sm:text-lg">
          Nous ne sommes pas une entreprise. Nous sommes une prise de pouvoir.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[20px] bg-white/55 p-5 sm:p-6">
            <h2 className="text-xl font-extrabold text-[#281f66]">Manifeste</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-[#2f2869] sm:text-base">
              <p>Transport. Production musicale. Design. Événementiel. Immobilier. Restauration.</p>
              <p>Nous ne nous diversifions pas… nous construisons un empire.</p>
              <p>On ne touche pas à plusieurs secteurs pour essayer.</p>
              <p>On les prend pour régner.</p>
              <p>Chaque business est une arme.</p>
              <p>Chaque projet est une conquête.</p>
              <p>Chaque réussite est un message envoyé au marché.</p>
              <p>On ne cherche pas la lumière… on devient la source.</p>
              <p>On ne suit pas les opportunités… on les crée.</p>
              <p>Et lorsqu’elles n’existent pas, on les impose.</p>
              <p>Nous bâtissons une industrie de jeunes, solide, organisée, implacable.</p>
              <p>On ne parle pas de motivation… on parle d’exécution.</p>
              <p>On ne veut pas être connus… on veut être incontournables.</p>
            </div>
          </article>

          <article className="rounded-[20px] bg-white/55 p-5 sm:p-6">
            <h2 className="text-xl font-extrabold text-[#281f66]">Axes de domination</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#2f2869] sm:text-base">
              <li>Immobilier pour posséder.</li>
              <li>Restauration pour capter les flux.</li>
              <li>Événementiel pour dominer l’attention.</li>
              <li>Production pour influencer les masses.</li>
              <li>Transport pour maîtriser le mouvement.</li>
              <li>Design pour contrôler l’image.</li>
            </ul>
            <div className="mt-4 rounded-2xl bg-[#f6f1ff] p-4 text-sm leading-7 text-[#2d2468]">
              <p>On ne loue pas le futur…</p>
              <p>On le construit.</p>
              <p className="mt-2">On ne demande pas l’accès…</p>
              <p>On crée la porte.</p>
              <p className="mt-2">On ne négocie pas notre valeur…</p>
              <p>On la fixe.</p>
            </div>
          </article>
        </div>

        <div className="mt-6 rounded-[20px] bg-[#bda6f7] p-5 sm:p-7">
          <h2 className="text-2xl font-black text-[#20165b]">Laurent Ilonga Weya</h2>
          <p className="mt-2 text-sm leading-7 text-[#2a1f66] sm:text-base">Né à Kinshasa le 30 juin 1999.</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-[20px] border border-[#4e3a95]/20 bg-white/70 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3f2f86]">Début</p>
              <p className="mt-2 text-sm leading-7 text-[#2d2468]">
                Entrepreneur précoce, il fait ses premiers pas dans le business à seulement 16 ans avec la création d’un restaurant congolais, posant déjà les bases d’une vision tournée vers l’autonomie et la création de valeur locale.
              </p>
            </article>

            <article className="rounded-[20px] border border-[#4e3a95]/20 bg-white/70 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3f2f86]">Structuration</p>
              <p className="mt-2 text-sm leading-7 text-[#2d2468]">
                À 18 ans, il franchit un cap décisif en structurant ses ambitions avec la création de MBOKA SARL, marquant le début d’un parcours entrepreneurial construit avec discipline et stratégie.
              </p>
            </article>
          </div>

          <article className="mt-4 rounded-[20px] border border-[#4e3a95]/20 bg-white/60 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3f2f86]">Vision</p>
            <p className="mt-2 text-sm leading-7 text-[#2d2468] sm:text-base">
              Visionnaire, stratège et animé par une détermination constante, il ne construit pas seulement des projets… il construit un écosystème. À travers MBOKA, il incarne une nouvelle génération de leaders africains qui refusent de subir et choisissent de bâtir.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#2d2468] sm:text-base">
              Son objectif est clair : créer une industrie puissante dirigée par les jeunes, capable de transformer la culture congolaise en une force économique, sociale et internationale.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#2d2468] sm:text-base">
              Pour lui, entreprendre n’est pas une option. C’est une mission. Et cette mission est déjà en marche.
            </p>
          </article>
        </div>

        <section className="mt-6 rounded-[20px] bg-white/55 p-5 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-black text-[#20165b]">Membres de l&apos;equipe</h2>
            <span className="rounded-full border border-[#4e3a95]/25 bg-[#efe7ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#3f2f86]">
              Team Mboka
            </span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-[20px] border border-[#4e3a95]/20 bg-white/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="relative overflow-hidden rounded-2xl border border-[#4e3a95]/20">
                <Image
                  src="/mboka_admi/laurent_mboka.jpg"
                  alt="Laurent Ilonga Weya"
                  width={900}
                  height={900}
                  className="h-72 w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-[#281f66]">Laurent Ilonga Weya</h3>
              <p className="mt-1 text-sm font-semibold text-[#3f2f86]">Président (CEO)</p>
            </article>

            <article className="rounded-[20px] border border-[#4e3a95]/20 bg-white/70 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="relative overflow-hidden rounded-2xl border border-[#4e3a95]/20">
                <Image
                  src="/mboka_admi/desmond_picture.jpg"
                  alt="Desmond Despi"
                  width={900}
                  height={900}
                  className="h-72 w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-[#281f66]">Desmond Despi</h3>
              <p className="mt-1 text-sm font-semibold text-[#3f2f86]">Manager d&apos;artistes</p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}
