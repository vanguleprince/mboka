import InfiniteLogoMarquee from "@/components/InfiniteLogoMarquee";
import MediaPreview from "@/components/MediaPreview";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <InfiniteLogoMarquee direction="left" />

      <main className="relative flex flex-1 items-center justify-center px-6 py-14 sm:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-violet-900/50 blur-3xl" />
          <div className="absolute -bottom-20 -right-12 h-80 w-80 rounded-full bg-violet-800/35 blur-3xl" />

        </div>

        <section
          className="relative z-10 mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-3 sm:p-4 shadow-2xl"
        >
          <MediaPreview />
        </section>
      </main>

        
    </div>
  );
}