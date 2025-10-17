import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: { default: "Premio — No-Code MVP Studio", template: "%s | Premio" },
  description:
    "We build no-code MVPs fast and clean so you can validate, learn, and grow.",
  keywords: [
    "no-code",
    "Bubble",
    "MVP studio",
    "startup",
    "rapid prototyping",
    "product development",
  ],
  authors: [{ name: "Premio" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Premio — No-Code MVP Studio",
    description:
      "Launch your MVP fast—without technical chaos. Bubble, Airtable, Make, Xano.",
    url: "https://your-domain.com", // change after deploy
    siteName: "Premio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premio — No-Code MVP Studio",
    description:
      "Launch your MVP fast—without technical chaos.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text-base antialiased">{children}</body>
    </html>
  );
}
