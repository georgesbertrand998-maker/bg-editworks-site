import type { Metadata } from "next";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Montserrat({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "BG EDITWORKS — Studio de post-production",
  description: "Montage vidéo, motion design, After Effects et animation 2D. Studio indépendant de post-production à distance.",
  applicationName: "BG EDITWORKS",
  creator: "BG EDITWORKS",
  keywords: ["montage vidéo", "motion design", "animation 2D", "post-production", "Premiere Pro", "After Effects"],
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "BG EDITWORKS",
    title: "BG EDITWORKS — Studio de post-production",
    description: "Montage vidéo, motion design et animation 2D pour entreprises, marques et créateurs.",
  },
  twitter: {
    card: "summary",
    title: "BG EDITWORKS — Studio de post-production",
    description: "Montage vidéo, motion design et animation 2D à distance.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
