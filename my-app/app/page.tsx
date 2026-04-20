"use client";

import { motion } from "framer-motion";
import InfiniteLogoMarquee from "@/components/InfiniteLogoMarquee";
import MediaPreview from "@/components/MediaPreview";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-black text-white">
      <InfiniteLogoMarquee direction="left" />

      <main className="relative flex flex-1 items-center justify-center px-6 py-14 sm:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-[-5rem] top-[-4rem] h-72 w-72 rounded-full bg-zinc-700/30 blur-3xl"
            animate={{ x: [0, 35, 0], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-5rem] right-[-3rem] h-80 w-80 rounded-full bg-neutral-800/40 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-4 shadow-2xl"
        >
          
          <MediaPreview />
        </motion.section>
      </main>

      <InfiniteLogoMarquee direction="right" />
    </div>
  );
}