import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata: Metadata = {
  title: "Dealers",
  description: "Partner with AERRO EV as a dealer across India.",
};

export default function DealersPage() {
  return (
    <ComingSoonPage
      title="Dealers"
      description="Dealer network applications will open here soon."
    />
  );
}
