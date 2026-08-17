import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore upcoming AERRO EV products.",
};

export default function ProductsPage() {
  return (
    <ComingSoonPage
      title="Products"
      description="Our product catalog is preparing for launch. Stay tuned."
    />
  );
}
