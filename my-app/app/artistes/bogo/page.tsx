"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tracks = [
  { title: "Mboka Intro", duration: "3:12" },
  { title: "Street Melody", duration: "2:58" },
  { title: "Dans le Bloc", duration: "4:01" },
  { title: "Nuit Lumiere", duration: "3:44" },
  { title: "Coeur de Ville", duration: "3:27" },
];

const newsItems = [
  {
    title: "EP en préparation",
    detail: "Bogo The Goat finalise actuellement un nouveau projet avec une direction plus ambitieuse et internationale.",
  },
  {
    title: "Nouveaux visuels",
    detail: "Plusieurs contenus visuels sont en production pour accompagner les prochains titres et renforcer son image artistique.",
  },
  {
    title: "Présence scénique",
    detail: "L'artiste prépare aussi de nouvelles apparitions live pour connecter encore plus fort avec son public.",
  },
];

const merchItems = [
  {
    name: "T-shirt Signature",
    description: "Coupe streetwear avec identité visuelle Bogo The Goat.",
    price: "25$",
  },
  {
    name: "Hoodie Black Drop",
    description: "Sweat premium pensé pour les sorties, les shows et le quotidien.",
    price: "45$",
  },
  {
    name: "Casquette Logo",
    description: "Accessoire minimal avec branding frontal inspiré de l'univers Mboka.",
    price: "20$",
  },
];

export default function BogoPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09080f] px-4 py-10 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute right-4 top-1/4 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">

        {/* Retour */}
        <Link
          href="/artistes"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/15 hover:text-white"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
          Retour aux artistes
        </Link>

        {/* Hero */}
        <section className="overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(135deg,rgba(109,40,217,0.30),rgba(37,99,235,0.18)),rgba(0,0,0,0.55)] shadow-[0_28px_80px_rgba(10,8,28,0.55)] backdrop-blur-xl">
          <div className="flex flex-col gap-0 md:flex-row">
            <div className="relative h-72 w-full shrink-0 md:h-auto md:w-80 lg:w-96">
              <Image
                src="/imagepages/bogopicture.png"
                alt="Bogo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/60 md:bg-linear-to-l" />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/80">Mboka Label</p>
              <h1 className="mt-3 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl">BOGO THE GOAT</h1>
              <p className="mt-2 text-lg font-medium text-violet-200/70">Rap urbain · Kinshasa</p>
              <div className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
                {/* Paragraphe toujours visible */}
                <p>
                  <span className="font-semibold text-white">Bogo Thegoat</span>, de son vrai nom Kevin Lunzayila, né le 17 mai 1998, est un rappeur bilingue (français–lingala) originaire de la République Démocratique du Congo, basé à Ngaliema.
                </p>

                {/* Paragraphes cachés / affichés */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expanded ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3">
                    <p>
                      Issu d&apos;une génération portée par la résilience et l&apos;ambition, il développe une identité artistique forte, mêlant les sonorités congolaises à l&apos;influence du rap américain. Son univers, à la fois authentique et moderne, se distingue par un flow maîtrisé, une énergie marquante et une attention particulière à l&apos;image, faisant de lui un artiste complet au croisement de la musique et de la culture urbaine.
                    </p>
                    <p>
                      Fort de plus de 5 ans de carrière, Bogo Thegoat s&apos;impose progressivement sur la scène urbaine congolaise avec plus de 15 titres disponibles sur les plateformes de streaming, dont plusieurs accompagnés de visuels cumulant des milliers de vues.
                    </p>
                    <p>
                      Sa régularité et sa capacité à connecter avec une audience jeune et engagée renforcent son positionnement et confirment son potentiel de croissance.
                    </p>
                    <p>
                      Au-delà de la musique, il incarne une nouvelle génération d&apos;artistes capables de créer un univers cohérent entre son, image et influence, offrant ainsi de véritables opportunités de collaboration avec des marques en quête d&apos;authenticité et d&apos;impact culturel.
                    </p>
                    <p>
                      Actuellement en préparation de nouveaux projets, dont un EP à venir, Bogo Thegoat ambitionne d&apos;élargir son audience à l&apos;international et de s&apos;inscrire durablement sur la scène musicale globale.
                    </p>
                  </div>
                </div>

                {/* Bouton toggle */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-violet-300 transition hover:text-violet-100"
                >
                  {expanded ? "Voir moins" : "Voir plus"}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      expanded ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Rap urbain", "Kinshasa", "Live performer", "EP en preparation"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-3 gap-4">
          {[
            { label: "Titres", value: "12+" },
            { label: "Shows", value: "24" },
            { label: "Fans", value: "8K+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Discographie */}
        <section className="mt-6 rounded-[32px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Discographie</h2>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.14em] text-violet-200">
              STREAMING
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {tracks.map((track, i) => (
              <div
                key={track.title}
                className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <span className="w-5 text-center text-sm font-bold text-zinc-500">{i + 1}</span>
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-violet-200/20 bg-black/40">
                  <Image
                    src="/imagepages/bogopicture.png"
                    alt={track.title}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{track.title}</p>
                  <p className="text-xs text-zinc-400">Bogo · Mboka Label</p>
                </div>
                <span className="shrink-0 text-xs text-zinc-500">{track.duration}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Actualites</p>
                <h2 className="mt-2 text-lg font-bold text-white">Les news de Bogo</h2>
              </div>
              <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs tracking-[0.14em] text-violet-200">
                UPDATE
              </span>
            </div>

            <div className="space-y-3">
              {newsItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 transition hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-violet-300/20 bg-[linear-gradient(180deg,rgba(109,40,217,0.18),rgba(9,8,15,0.82))] p-5 backdrop-blur-xl sm:p-7">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Boutique</p>
              <h2 className="mt-2 text-lg font-bold text-white">Vetements de l'artiste</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Une selection de pieces inspirees de l'univers visuel de Bogo The Goat.
              </p>
            </div>

            <div className="space-y-3">
              {merchItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-violet-200/15 bg-black/35 px-4 py-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{item.description}</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/boutique"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-200/35 bg-linear-to-r from-violet-700 to-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              Voir la boutique
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-6 overflow-hidden rounded-[32px] border border-violet-300/25 bg-[linear-gradient(135deg,rgba(109,40,217,0.35),rgba(37,99,235,0.25))] p-7 text-center backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_45%)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">Nouvel EP</p>
          <h3 className="mt-2 text-2xl font-black text-white">En preparation</h3>
          <p className="mt-2 text-sm text-zinc-300">Reste connecte pour etre le premier a l&apos;ecouter.</p>
          <Link
            href="/decouvrir"
            className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-200/40 bg-linear-to-r from-violet-700 via-blue-600 to-emerald-500 px-8 py-3 text-sm font-bold text-white shadow-[0_8px_28px_rgba(109,40,217,0.35)] transition hover:brightness-110"
          >
            Decouvrez Mboka
          </Link>
        </section>

      </div>
    </main>
  );
}
