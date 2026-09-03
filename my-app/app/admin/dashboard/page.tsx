import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ADMIN_COOKIE_NAME, isAllowedAdminEmail } from "@/lib/admin-auth";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const adminEmail = cookieStore.get(ADMIN_COOKIE_NAME)?.value ?? null;

  if (!isAllowedAdminEmail(adminEmail)) {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen bg-[#09080f] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[32px] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(17,24,39,0.9),rgba(88,28,135,0.7))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">Admin</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-white">Dashboard MBOKA</h1>
          </div>

          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Se déconnecter
            </button>
          </form>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Artistes", value: "5", detail: "enregistrés", trend: "actifs" },
            { title: "Musiques", value: "30", detail: "titres", trend: "total" },
            { title: "Commandes", value: "0", detail: "commandes", trend: "aucune" },
            { title: "Utilisateurs", value: "21", detail: "utilisateurs", trend: "total" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-violet-400/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(17,24,39,0.8))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/80">{item.title}</p>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                  {item.trend}
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-4xl font-black tracking-tight text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-right">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">Status</p>
                  <p className="text-sm font-semibold text-violet-200">Live</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[30px] border border-white/10 bg-black/25 p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-white">Modules admin</h2>
            <span className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Design
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Dashboard",
              "Artistes",
              "Musiques",
              "Boutique",
              "Utilisateurs",
              "Paramètres",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
