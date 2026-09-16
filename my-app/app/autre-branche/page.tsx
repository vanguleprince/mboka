"use client";

import Link from "next/link";
import { useState } from "react";

const coverImageUrl =
  "https://mail.google.com/mail/u/0?ui=2&ik=58735822f9&attid=0.1&permmsgid=msg-a:r-5879894469780954388&th=1a0a4f8d3fe518dc&view=fimg&fur=ip&permmsgid=msg-a:r-5879894469780954388&sz=s0-l75-ft&attbid=ANGjdJ-MS39PrM7JVAVNI-alGpZqplk8tUDDyXmHoVmZHlixl57LcFA_D1io47kwHyb7g_XcU_YC6GVbAa4By5X2eudVk8md-Osg6THQJ010LK3ETDylmNYnuGSj13s&disp=emb&realattid=ii_1a0a4f8920141504c5a1&zw";

export default function AutreBranchePage() {
  const [expandedMedia, setExpandedMedia] = useState(false);
  const [expandedThrifty, setExpandedThrifty] = useState(false);
  const [expandedMisterBo, setExpandedMisterBo] = useState(false);
  const [expandedMbokaTrans, setExpandedMbokaTrans] = useState(false);

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
            <p className="text-xs tracking-[0.2em] text-amber-200/80">STUDIO D’AFRIQUE | KINSHASA</p>
            <h1 className="mt-2 text-3xl font-black text-amber-100 sm:text-5xl">Autre branche</h1>
          </div>

          <Link
            href="/decouvrir"
            className="rounded-full border border-amber-300/40 bg-amber-300/15 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/25"
          >
            Retour a Decouvrir
          </Link>
        </div>

        <div className="mt-8 space-y-8">
          <div className="overflow-hidden rounded-[30px] border border-amber-200/20 bg-linear-to-br from-amber-400/15 via-orange-500/10 to-zinc-900/80 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[280px] overflow-hidden border-b border-amber-200/10 lg:min-h-[500px] lg:border-b-0 lg:border-r">
                <img
                  src={coverImageUrl}
                  alt="Média Studio d’Afrique"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <span className="inline-flex w-fit rounded-full border border-amber-200/35 bg-amber-200/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-100">
                 Studio d’Afrique
                </span>

                <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Le studio qui met Kinshasa dans l’assiette et l’Afrique à l’honneur.
                </h2>

                <div className="mt-5 text-sm leading-7 text-zinc-200/90 sm:text-base">
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedMedia ? "max-h-[700px] opacity-100" : "max-h-[120px] opacity-100"
                    }`}
                  >
                    <div className="space-y-4">
                      <p>
                        Studio d’Afrique est un studio dédié à la découverte et à la valorisation de la gastronomie, de la restauration, des restaurants, des chefs, des entrepreneurs et des nouveaux concepts qui font évoluer l’univers culinaire à Kinshasa.
                      </p>

                      <p>
                        Nous mettons également en lumière la culture, la musique, le lifestyle, l’entrepreneuriat et les talents africains à travers des contenus, des interviews et des expériences authentiques.
                      </p>

                      <p>
                        Notre mission : valoriser ceux qui créent, innovent et font vivre la gastronomie congolaise, tout en faisant découvrir Kinshasa autrement.
                      </p>

                      <p className="font-semibold text-amber-100">
                        Studio d’Afrique — Goûter. Découvrir. Raconter.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedMedia((prev) => !prev)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200/35 bg-amber-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-amber-100 transition hover:bg-amber-200/15"
                  >
                    {expandedMedia ? "Voir moins" : "Voir plus"}
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 transition-transform duration-300 ${expandedMedia ? "rotate-180" : "rotate-0"}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-violet-200/20 bg-linear-to-br from-violet-400/15 via-fuchsia-500/10 to-zinc-900/80 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[240px] overflow-hidden border-b border-violet-200/10 lg:min-h-[420px] lg:border-b-0 lg:border-r">
                <img
                  src="/thritty.jpeg"
                  alt="THRIFTY RDC"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <span className="inline-flex w-fit rounded-full border border-violet-200/35 bg-violet-200/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-100">
                  THRIFTY RDC
                </span>

                <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-3xl">
                  THRIFTY RDC — Créer autrement. Porter autrement.
                </h2>

                <div className="mt-5 text-sm leading-7 text-zinc-200/90 sm:text-base">
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedThrifty ? "max-h-[700px] opacity-100" : "max-h-[120px] opacity-100"
                    }`}
                  >
                    <div className="space-y-4">
                      <p>
                        THRIFTY RDC est la filiale de THRIFTY GROUP dédiée au développement de la marque en République démocratique du Congo, avec Kinshasa comme pôle stratégique.
                      </p>

                      <p>
                        À travers l’upcycling, la mode, l’art et la culture urbaine, THRIFTY RDC transforme des vêtements et matières existants en créations contemporaines, tout en valorisant les talents locaux et en sensibilisant à une consommation plus responsable.
                      </p>

                      <p>
                        La filiale développe notamment le prêt-à-porter, les pièces premium, les collaborations, les pop-up stores et les activations culturelles.
                      </p>

                      <p className="font-semibold text-violet-100">
                        THRIFTY RDC — Créer autrement. Porter autrement.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedThrifty((prev) => !prev)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-200/35 bg-violet-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-violet-100 transition hover:bg-violet-200/15"
                  >
                    {expandedThrifty ? "Voir moins" : "Voir plus"}
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 transition-transform duration-300 ${expandedThrifty ? "rotate-180" : "rotate-0"}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-emerald-200/20 bg-linear-to-br from-emerald-400/10 via-lime-500/10 to-zinc-900/80 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[240px] overflow-hidden border-b border-emerald-200/10 lg:min-h-[420px] lg:border-b-0 lg:border-r">
                <img
                  src="/B.Omister.png"
                  alt="MISTER Bo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <span className="inline-flex w-fit rounded-full border border-emerald-200/35 bg-emerald-200/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">
                  MISTER Bo
                </span>

                <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Des savons naturels pour une peau saine, protégée et éclatante.
                </h2>

                <div className="mt-5 text-sm leading-7 text-zinc-200/90 sm:text-base">
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedMisterBo ? "max-h-[700px] opacity-100" : "max-h-[120px] opacity-100"
                    }`}
                  >
                    <div className="space-y-4">
                      <p>
                        MISTER Bo est une marque congolaise de savons à base d’ingrédients naturels, pensée pour prendre soin de la peau au quotidien.
                      </p>

                      <p>
                        Notre objectif est simple : proposer des savons qui permettent de nettoyer, prendre soin et sublimer la peau, tout en respectant son aspect naturel.
                      </p>

                      <p>
                        Chez MISTER Bo, nous croyons qu’une belle peau ne signifie pas forcément une peau blanchie. Il s’agit plutôt de prendre soin de sa peau, de la protéger et de lui permettre de retrouver son éclat naturel.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => setExpandedMisterBo((prev) => !prev)}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-200/35 bg-emerald-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100 transition hover:bg-emerald-200/15"
                    >
                      {expandedMisterBo ? "Voir moins" : "Voir plus"}
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 transition-transform duration-300 ${expandedMisterBo ? "rotate-180" : "rotate-0"}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <a
                      href="https://misterbo-savons-naturel.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-50 transition hover:bg-emerald-500/25"
                    >
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-sky-200/20 bg-linear-to-br from-sky-400/10 via-cyan-500/10 to-zinc-900/80 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[240px] overflow-hidden border-b border-sky-200/10 lg:min-h-[420px] lg:border-b-0 lg:border-r">
                <img
                  src="/mbokatrans.png"
                  alt="Mboka Trans"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <span className="inline-flex w-fit rounded-full border border-sky-200/35 bg-sky-200/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-100">
                  Mboka Trans
                </span>

                <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Transport & logistique moderne pour les particuliers et les professionnels.
                </h2>

                <div className="mt-5 text-sm leading-7 text-zinc-200/90 sm:text-base">
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedMbokaTrans ? "max-h-[900px] opacity-100" : "max-h-[140px] opacity-100"
                    }`}
                  >
                    <div className="space-y-4">
                      <p>
                        <strong className="font-bold text-sky-100">Mboka Trans</strong> est une entreprise innovante spécialisée dans le secteur du <strong className="font-bold text-sky-100">transport et de la logistique</strong>. Acteur engagé de la mobilité, elle propose des solutions de déplacement et d’acheminement modernes, fiables et sécurisées, adaptées aux besoins des particuliers et des professionnels.
                      </p>

                      <p>
                        Alliant efficacité opérationnelle et proximité, Mboka Trans s’engage à fluidifier les flux de transport avec un service de qualité supérieure, axé sur la ponctualité, le confort et l’innovation technologique.
                      </p>

                      <p>
                        Souhaitez-vous que l’on développe une version spécifique pour votre site web, vos réseaux sociaux ou un pitch commercial ?
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedMbokaTrans((prev) => !prev)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-200/35 bg-sky-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-100 transition hover:bg-sky-200/15"
                  >
                    {expandedMbokaTrans ? "Voir moins" : "Voir plus"}
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 transition-transform duration-300 ${expandedMbokaTrans ? "rotate-180" : "rotate-0"}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
