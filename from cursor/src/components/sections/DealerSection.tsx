"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { FadeUp, SectionHeading } from "@/components/ui/SectionHeading";

export function DealerSection({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const close = () => {
    onOpenChange(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <section id="dealership" className="relative overflow-hidden bg-background-secondary py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/10 blur-[90px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <SectionHeading
          title="Grow With AERRO"
          subtitle="Join India's electric revolution."
        />
        <FadeUp delay={0.1} className="mt-10">
          <Button onClick={() => onOpenChange(true)}>Become a Dealer</Button>
        </FadeUp>
      </div>

      <Modal open={open} onClose={close} title="Become a Dealer">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-display text-xl font-semibold">Request received</p>
            <p className="mt-2 text-sm text-body">
              Our partnerships team will reach out shortly.
            </p>
            <div className="mt-6">
              <Button onClick={close} magnetic={false}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <Input label="Name" name="name" required placeholder="Your full name" />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              required
              placeholder="+91"
            />
            <Input label="City" name="city" required placeholder="City" />
            <Select label="Business Type" name="businessType" required defaultValue="">
              <option value="" disabled>
                Select type
              </option>
              <option value="dealership">Dealership</option>
              <option value="service">Service Partner</option>
              <option value="fleet">Fleet Operator</option>
              <option value="investor">Investor / Distributor</option>
            </Select>
            <div className="pt-2">
              <Button type="submit" className="w-full" magnetic={false} disabled={loading}>
                {loading ? "Submitting…" : "Submit Application"}
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
}
