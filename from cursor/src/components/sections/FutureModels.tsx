"use client";

import { motion } from "framer-motion";
import { MODELS } from "@/lib/constants";
import { VehicleByType } from "@/components/vehicles/Silhouettes";
import { FadeUp, SectionHeading } from "@/components/ui/SectionHeading";

export function FutureModels() {
  return (
    <section id="models" className="relative bg-background-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Coming Soon"
          title="Future Models"
          subtitle="A lineup engineered as technology first — mobility that follows."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {MODELS.map((model, i) => (
            <FadeUp key={model.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="gradient-border group h-full overflow-hidden rounded-[1.25rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition hover:shadow-[0_24px_60px_rgba(0,212,255,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {model.name}
                  </h3>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-3 text-sm text-body">{model.blurb}</p>
                <div className="mt-8 rounded-xl bg-background-secondary/80 p-3 transition group-hover:bg-surface-elevated">
                  <VehicleByType
                    type={model.type}
                    className="opacity-80 transition group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_rgba(0,212,255,0.25)]"
                  />
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
