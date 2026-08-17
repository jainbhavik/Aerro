"use client";

import { INDIA_FEATURES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp, SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  // Made in India
  <svg key="in" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>,
  // Range
  <svg key="range" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 16V8l8-4 8 4v8l-8 4-8-4z" />
    <path d="M12 12v8M4 8l8 4 8-4" />
  </svg>,
  // Charging
  <svg key="charge" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 2 4 14h7l-1 8 10-12h-7l1-8z" />
  </svg>,
  // Connectivity
  <svg key="smart" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12a7 7 0 0 1 14 0M8.5 12a3.5 3.5 0 0 1 7 0" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>,
  // Sustainable
  <svg key="eco" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21c-4-3-7-6.2-7-10a7 7 0 0 1 14 0c0 3.8-3 7-7 10z" />
    <path d="M12 11v4M10 13h4" />
  </svg>,
];

export function IndiaSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title={"Born in India.\nBuilt for the Future."}
          subtitle="Precision engineering rooted in Indian ambition — built to move a nation forward."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDIA_FEATURES.map((feature, i) => (
            <FadeUp
              key={feature.title}
              delay={i * 0.07}
              className={i === INDIA_FEATURES.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <GlassCard className="h-full transition hover:shadow-[0_0_40px_rgba(0,212,255,0.12)]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-accent">
                  {icons[i]}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {feature.description}
                </p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
