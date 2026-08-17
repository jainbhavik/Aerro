"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export function ComingSoonPoster({
  onDealerClick,
}: {
  onDealerClick: () => void;
}) {
  return (
    <section
      id="home"
      className="relative flex h-[100dvh] min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 aerospace-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-6 pt-20 sm:px-8 sm:pb-8 sm:pt-24">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-5"
          >
            <Logo size="hero" priority className="justify-center" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="text-sm leading-none" aria-hidden>
              🇮🇳
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground sm:text-[11px]">
              Made in India EV
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-4xl font-display text-[1.85rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            A New Era of Electric Mobility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-3 max-w-xl text-sm text-body sm:mt-4 sm:text-base md:text-lg"
          >
            Engineered for Tomorrow. Built for India.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 font-mono text-[10px] uppercase tracking-[0.35em] text-accent sm:mt-4 sm:text-[11px]"
          >
            Launching Soon
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.44 }}
            className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row"
          >
            <Button
              onClick={() => {
                document
                  .getElementById("newsletter")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Notify Me
            </Button>
            <Button variant="secondary" onClick={onDealerClick}>
              Become a Dealer
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
