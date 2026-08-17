"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Logo variant="compact" />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-body transition hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#newsletter"
          className="hidden rounded-full border border-border bg-surface px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground transition hover:border-accent hover:shadow-[0_0_24px_rgba(0,212,255,0.25)] md:inline-flex"
        >
          Notify Me
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-border bg-background px-5 pb-6 pt-2 md:hidden"
          >
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block font-display text-2xl font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
