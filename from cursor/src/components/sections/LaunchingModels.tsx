"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp, SectionHeading } from "@/components/ui/SectionHeading";

const MODELS = [
  { id: "M1", src: "/brand/M1.jpeg" },
  { id: "M2", src: "/brand/M2.jpeg" },
  { id: "M3", src: "/brand/M3.jpeg" },
  { id: "M4", src: "/brand/M4.jpeg" },
  { id: "M5", src: "/brand/M5.jpeg" },
  { id: "M6", src: "/brand/M6.jpeg" },
];

export function LaunchingModels() {
  return (
    <section id="launching" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Launching Soon"
          title="Our Models"
          subtitle="Six electric scooters engineered for India's roads — arriving soon."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {MODELS.map((model, i) => (
            <FadeUp key={model.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="gradient-border group overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition hover:shadow-[0_20px_50px_rgba(0,212,255,0.12)]"
              >
                {/* image fills card without cropping */}
                <div className="relative aspect-[4/3] w-full bg-surface/60">
                  <Image
                    src={model.src}
                    alt={`AERRO EV ${model.id}`}
                    fill
                    className="object-contain p-3 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <span className="absolute right-2.5 top-2.5 rounded-full border border-accent/30 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
                    Launching Soon
                  </span>
                </div>
                <div className="border-t border-border/60 bg-surface/40 px-4 py-3">
                  <p className="font-display text-base font-semibold tracking-tight">
                    AERRO {model.id}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
