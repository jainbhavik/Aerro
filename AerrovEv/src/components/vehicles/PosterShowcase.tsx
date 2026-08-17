"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

const MODELS = [
  { id: "M1", src: "/brand/M1.jpeg" },
  { id: "M2", src: "/brand/M2.jpeg" },
  { id: "M3", src: "/brand/M3.jpeg" },
];

function Particles({ count = 16 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 41) % 100}%`,
        top: `${(i * 29) % 85}%`,
        delay: (i % 6) * 0.4,
        size: 2 + (i % 2),
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-particle absolute rounded-full bg-accent"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            opacity: 0.4,
            boxShadow: "0 0 8px rgba(0,212,255,0.75)",
          }}
        />
      ))}
    </div>
  );
}

/** Vehicle grid showing M1–M6 scooter images */
export function PosterShowcase() {
  return (
    <div
      className="relative mx-auto w-full"
      aria-label="AERRO EV scooter models M1 to M6"
    >
      <div className="aerospace-grid absolute inset-0 rounded-2xl opacity-70" />
      <Particles />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative grid grid-cols-3 items-end gap-2 px-1 py-2 sm:gap-4 sm:px-4 sm:py-3">
        {MODELS.map((model, i) => (
          <motion.div
            key={model.id}
            className="group animate-float"
            style={{ animationDelay: `${i * 0.18}s` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + i * 0.08 }}
          >
            <div className="rounded-xl border border-border/70 bg-surface/60 backdrop-blur-md">
              <div className="relative flex items-center justify-center bg-surface/40 rounded-t-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={model.src}
                  alt={`AERRO EV ${model.id}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 30vw, 20vw"
                />
              </div>
              <p className="py-1.5 text-center font-mono text-[8px] uppercase tracking-[0.2em] text-body sm:py-2 sm:text-[10px]">
                {model.id}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

