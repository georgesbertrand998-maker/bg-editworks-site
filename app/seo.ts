import type { Metadata } from "next";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, "https://bgeditworks.fr").href;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "fr_FR", siteName: "BG EDITWORKS", title, description, url },
    twitter: { card: "summary", title, description },
  };
}
