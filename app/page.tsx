import type { Metadata } from "next";
import { SiteExperience } from "./site-experience";

export const metadata: Metadata = {
  title: "BG EDITWORKS — Studio indépendant de post-production",
  description: "Montage vidéo, motion design, animation 2D et post-production à distance.",
};

export default function Home() {
  return <SiteExperience />;
}
