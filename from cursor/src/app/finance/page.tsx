import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata: Metadata = {
  title: "Finance",
  description: "Financing options for AERRO EV vehicles.",
};

export default function FinancePage() {
  return (
    <ComingSoonPage
      title="Finance"
      description="Flexible ownership programs are being prepared."
    />
  );
}
