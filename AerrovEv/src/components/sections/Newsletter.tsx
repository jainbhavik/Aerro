"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeUp, SectionHeading } from "@/components/ui/SectionHeading";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  };

  return (
    <section id="newsletter" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          title="Stay in the Loop"
          subtitle="Be first to know when AERRO opens the next chapter of electric mobility."
        />

        <FadeUp delay={0.1} className="mt-10">
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-2xl px-6 py-10 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-display text-2xl font-semibold">You&apos;re on the list</p>
                <p className="mt-2 text-sm text-body">
                  We&apos;ll notify you the moment AERRO goes live.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                className="glass-panel flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-center sm:p-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full flex-1 rounded-xl border-0 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-body/70"
                  aria-label="Email address"
                />
                <Button type="submit" magnetic={false} disabled={status === "loading"} className="w-full sm:w-auto">
                  {status === "loading" ? "Sending…" : "Notify Me"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeUp>
      </div>
    </section>
  );
}
