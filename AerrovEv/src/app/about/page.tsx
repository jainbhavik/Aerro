import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AERRO EV and our mission for electric mobility in India.",
};

export default function AboutPage() {
  return (
    <ComingSoonPage
      title="About AERRO"
      description="Our full story is on the way. Until then, explore the launch page."
    />
  );
}
