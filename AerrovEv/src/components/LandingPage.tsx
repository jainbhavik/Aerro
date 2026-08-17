"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ComingSoonPoster } from "@/components/sections/ComingSoonPoster";
import { LaunchingModels } from "@/components/sections/LaunchingModels";
import { FutureModels } from "@/components/sections/FutureModels";
import { IndiaSection } from "@/components/sections/IndiaSection";
import { Countdown } from "@/components/sections/Countdown";
import { Newsletter } from "@/components/sections/Newsletter";
import { DealerSection } from "@/components/sections/DealerSection";

export function LandingPage() {
  const [dealerOpen, setDealerOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <ComingSoonPoster onDealerClick={() => setDealerOpen(true)} />
        <LaunchingModels />
        <FutureModels />
        <IndiaSection />
        <Countdown />
        <Newsletter />
        <DealerSection open={dealerOpen} onOpenChange={setDealerOpen} />
      </main>
      <Footer />
    </>
  );
}
