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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Roboto+Serif:wght@100;400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
