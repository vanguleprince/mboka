import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ADMIN_COOKIE_NAME, isAdminSessionValid } from "@/lib/admin-auth";

export default async function AdminAccessPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const cookieStore = await cookies();
  const adminEmail = cookieStore.get(ADMIN_COOKIE_NAME)?.value ?? null;

  if (isAdminSessionValid(adminEmail)) {
    redirect("/admin/dashboard");
  }

  const params = (await searchParams) ?? {};
  const errorMessage = params.error ?? "";

  return (
    <main className="min-h-screen bg-[#09080f] px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-xl rounded-[32px] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(17,24,39,0.9),rgba(88,28,135,0.7))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-violet-300/35 bg-white/5 text-2xl font-black text-violet-100">
            M
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">MBOKA</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white">Administration MBOKA</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-200/90">
            Cette zone est réservée aux comptes administrateurs autorisés.
          </p>
        </div>

        <form action="/api/admin/authorize" method="POST" className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-violet-100">
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="vangu.leprince@gmail.com"
              className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-base text-white placeholder:text-zinc-400 focus:border-violet-300 focus:outline-none"
            />
          </div>

          {errorMessage ? (
            <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {errorMessage}
            </div>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full border border-violet-300/35 bg-[linear-gradient(135deg,rgba(109,40,217,0.75),rgba(59,130,246,0.65))] px-5 py-3 text-base font-bold text-white shadow-[0_10px_28px_rgba(109,40,217,0.35)] transition hover:brightness-110"
          >
            Continuer
          </button>
        </form>
      </div>
    </main>
  );
}
