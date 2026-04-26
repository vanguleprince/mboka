"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type InfiniteLogoMarqueeProps = {
  direction?: "left" | "right";
  variant?: "default" | "violet";
};

const logos = Array.from({ length: 10 });

export default function InfiniteLogoMarquee({
  direction = "left",
  variant = "default",
}: InfiniteLogoMarqueeProps) {
  const repeatedLogos = [...logos, ...logos];
  
  const bgClass = variant === "violet" ? "bg-violet-900/30" : "bg-zinc-900";
  const borderClass = variant === "violet" ? "border-violet-500/30" : "border-white/10";

  return (
    <div className={`overflow-hidden border-y ${borderClass} bg-black py-4`}>
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap px-6"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {repeatedLogos.map((_, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 rounded-full border ${borderClass} ${bgClass} px-2 py-1`}
          >
            <Image
              src="/imagepages/mboka.png"
              alt="Logo Mboka"
              width={42}
              height={42}
              className="h-15 w-15 object-contain"
            />
           
          </div>
        ))}
      </motion.div>
    </div>
  );
}
