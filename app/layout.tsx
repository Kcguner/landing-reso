import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reso.app"),
  title: "Reso | Ses ile Mekan Keşfet",
  description:
    "Zen, Neutral ve Hype modlarıyla çevrendeki mekanları akustik vibe’larına göre keşfet. Harita tabanlı, topluluk destekli Reso deneyimi.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reso | Ses ile Mekan Keşfet",
    description:
      "Zen, Neutral ve Hype modlarıyla çevrendeki mekanları akustik vibe’larına göre keşfet. Harita tabanlı, topluluk destekli Reso deneyimi.",
    url: "https://reso.app",
    siteName: "Reso",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og/reso-og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Reso landing page sosyal paylaşım görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reso | Ses ile Mekan Keşfet",
    description:
      "Zen, Neutral ve Hype modlarıyla çevrendeki mekanları akustik vibe’larına göre keşfet.",
    images: ["/og/reso-og-placeholder.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
