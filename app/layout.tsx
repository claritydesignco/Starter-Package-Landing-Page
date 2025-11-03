import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$299 Therapist Website Package | Launch in 2-3 Weeks | Clarity Co.",
  description: "Professional therapy website for $299. Custom design, copywriting, logo, SEO, hosting included. Perfect for new therapists. Launch in 2-3 weeks. Only 5 spots monthly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
