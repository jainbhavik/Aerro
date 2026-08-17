import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AERRO EV.",
};

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="pointer-events-none absolute inset-0 aerospace-grid opacity-60" />
      <div className="relative z-10 max-w-xl">
        <Logo size="hero" priority className="justify-center" />
        <h1 className="mt-10 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-body">Reach out to us — we&apos;d love to hear from you.</p>

        <div className="mt-10 flex flex-col gap-5 text-left rounded-2xl border border-border bg-surface px-8 py-7">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 text-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-body">Phone</p>
              <a href={`tel:${CONTACT.phone}`} className="mt-1 text-foreground hover:text-accent transition">
                +91 {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-0.5 text-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-body">Email</p>
              <a href={`mailto:${CONTACT.email}`} className="mt-1 text-foreground hover:text-accent transition">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-0.5 text-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-body">Address</p>
              <p className="mt-1 text-foreground">{CONTACT.address}</p>
            </div>
          </div>
        </div>

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

