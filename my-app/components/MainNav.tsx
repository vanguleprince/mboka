"use client";

import { useState } from "react";
import Link from "next/link";
import BackLogo from "@/components/BackLogo";

const navLinks = [
  { href: "/artistes", label: "Artistes" },
  { href: "/apropos", label: "A propos" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6">
      <span
        className={`absolute left-0 top-0.5 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 top-4.5 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
      />
    </span>
  );
}

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-[140] mx-auto max-w-7xl rounded-full border border-white/15 bg-[linear-gradient(135deg,rgba(139,92,246,0.26),rgba(59,130,246,0.18)),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] px-4 py-3 shadow-[0_18px_50px_rgba(18,14,38,0.42)] backdrop-blur-xl ring-1 ring-white/8 sm:px-8 sm:py-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.22),transparent_32%),radial-gradient(circle_at_right,rgba(59,130,246,0.2),transparent_30%)]" />
        <div className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
      </div>

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center">
          <BackLogo />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-full border border-violet-400/30 bg-[linear-gradient(135deg,rgba(109,40,217,0.62),rgba(37,99,235,0.45))] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(109,40,217,0.22),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:brightness-110"
            >
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_46%)]" />
              <span className="relative">{item.label}</span>
            </Link>
          ))}
          <Link
            href="/boutique"
            className="group relative overflow-hidden rounded-full border border-sky-300/40 bg-[linear-gradient(135deg,rgba(14,165,233,0.72),rgba(99,102,241,0.6))] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_22px_rgba(14,165,233,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:brightness-110"
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_46%)]" />
            <span className="relative">Boutique</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${
            isOpen
              ? "border-violet-200/60 bg-white/18 shadow-[0_0_30px_rgba(129,140,248,0.35)]"
              : "border-white/20 bg-white/10 hover:bg-white/20"
          }`}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <MenuIcon open={isOpen} />
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[120] md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_35%),linear-gradient(to_bottom,rgba(3,7,18,0.52),rgba(3,7,18,0.72))] backdrop-blur-[2px]"
            aria-label="Fermer le menu"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-4 top-28 w-[min(26rem,calc(100vw-2rem))] overflow-hidden rounded-[32px] border border-white/15 bg-[linear-gradient(135deg,rgba(139,92,246,0.28),rgba(59,130,246,0.18)),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4 shadow-[0_30px_80px_rgba(10,8,28,0.6)] backdrop-blur-2xl ring-1 ring-white/10 sm:right-6 sm:top-30">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-violet-100/75">Navigation</p>
                  <p className="mt-1 text-sm text-white/80">Accede rapidement aux sections</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition hover:bg-white/20"
                  aria-label="Fermer le menu"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative overflow-hidden rounded-2xl border border-violet-400/30 bg-[linear-gradient(135deg,rgba(109,40,217,0.72),rgba(37,99,235,0.58))] px-5 py-4 text-sm font-bold text-white shadow-[0_4px_24px_rgba(109,40,217,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all hover:brightness-110 hover:shadow-[0_6px_30px_rgba(109,40,217,0.42)]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_45%)]" />
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
              <Link
                href="/boutique"
                onClick={() => setIsOpen(false)}
                className="group relative overflow-hidden rounded-2xl border border-sky-300/40 bg-[linear-gradient(135deg,rgba(14,165,233,0.72),rgba(99,102,241,0.60))] px-5 py-4 text-center text-sm font-bold text-white shadow-[0_4px_24px_rgba(14,165,233,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all hover:brightness-110 hover:shadow-[0_6px_30px_rgba(14,165,233,0.42)]"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_45%)]" />
                <span className="relative">Boutique</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
