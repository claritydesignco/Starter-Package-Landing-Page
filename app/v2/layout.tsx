import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$299 Therapist Website Package | Launch in 2-3 Weeks | Clarity Co. (6-Section Version)",
  description: "Professional therapy website for $299. Custom design, copywriting, logo, SEO, hosting included. Perfect for new therapists. Launch in 2-3 weeks. Only 5 spots monthly.",
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
