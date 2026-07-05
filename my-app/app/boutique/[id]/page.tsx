import Link from "next/link";

const productIds = ["1", "2", "3", "4", "5", "6"];

export function generateStaticParams() {
  return productIds.map((id) => ({ id }));
}

interface ProductWaitingPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductWaitingPage({ params }: ProductWaitingPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-linear-to-br from-zinc-900 via-zinc-950 to-black p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Produit {id}</p>
        <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">Merci pour votre interet</h1>
        <p className="mt-4 text-base text-zinc-300 sm:text-lg">
          Merci pour votre visite. Veuillez attendre les nouvelles, nous revenons vers vous tres bientot.
        </p>

        <Link
          href="/boutique"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-fuchsia-300/35 bg-fuchsia-500/15 px-6 py-3 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-500/25"
        >
          Retour a la boutique
        </Link>
      </div>
    </main>
  );
}