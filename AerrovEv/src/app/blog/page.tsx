import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "News and insights from AERRO EV.",
};

export default function BlogPage() {
  return (
    <ComingSoonPage
      title="Blog"
      description="Insights and updates will live here after launch."
    />
  );
}
