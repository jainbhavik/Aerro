import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata: Metadata = {
  title: "Test Ride",
  description: "Book an AERRO EV test ride.",
};

export default function TestRidePage() {
  return (
    <ComingSoonPage
      title="Test Ride"
      description="Test ride bookings will open with our first models."
    />
  );
}
