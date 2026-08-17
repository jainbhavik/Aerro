import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function ComingSoonPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="pointer-events-none absolute inset-0 aerospace-grid opacity-60" />
      <div className="relative z-10 max-w-xl">
        <Logo size="hero" priority className="justify-center" />
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          Coming Soon
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-body">{description}</p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
