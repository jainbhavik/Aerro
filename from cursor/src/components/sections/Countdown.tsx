"use client";

import { useMemo } from "react";
import { LAUNCH_DATE } from "@/lib/constants";
import { useCountdown } from "@/hooks/useCountdown";
import { FadeUp } from "@/components/ui/SectionHeading";

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="relative min-w-[4.5rem] flex-1 rounded-2xl border border-border bg-surface-elevated px-3 py-5 text-center shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:min-w-[6.5rem] sm:px-5 sm:py-7">
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
      <div className="font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        {display}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-body">
        {label}
      </div>
    </div>
  );
}

export function Countdown() {
  const target = useMemo(() => LAUNCH_DATE, []);
  const { days, hours, minutes, seconds, completed, mounted } =
    useCountdown(target);

  return (
    <section className="relative overflow-hidden border-y border-border bg-background-secondary py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 aerospace-grid" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <FadeUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
            Launch Sequence
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            The Future Arrives Soon
          </h2>
        </FadeUp>

        <FadeUp delay={0.12} className="mt-12">
          {!mounted ? (
            <div
              className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4"
              aria-hidden
            >
              <Digit value={0} label="Days" />
              <Digit value={0} label="Hours" />
              <Digit value={0} label="Minutes" />
              <Digit value={0} label="Seconds" />
            </div>
          ) : completed ? (
            <p className="font-mono text-2xl tracking-[0.2em] text-accent">
              WE&apos;RE LIVE
            </p>
          ) : (
            <div
              className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4"
              aria-live="polite"
            >
              <Digit value={days} label="Days" />
              <Digit value={hours} label="Hours" />
              <Digit value={minutes} label="Minutes" />
              <Digit value={seconds} label="Seconds" />
            </div>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
