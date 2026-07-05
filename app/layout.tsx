import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diamond-art.pro"),
  title: {
    default: `${siteConfig.name} | Architecture, BIM & Formations Revit / D5 Render`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortIntro,
  keywords: [
    "BIM",
    "Revit",
    "AutoCAD",
    "D5 Render",
    "architecture",
    "modélisation 3D",
    "visualisation architecturale",
    "formation Revit",
    "formation D5 Render",
    "Diamond Art",
  ],
  openGraph: {
    title: `${siteConfig.name} | Architecture, BIM & Formations`,
    description: siteConfig.shortIntro,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Architecture, BIM & Formations`,
    description: siteConfig.shortIntro,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased bg-paper text-ink transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
