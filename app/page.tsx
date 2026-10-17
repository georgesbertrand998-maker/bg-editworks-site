import { pageMetadata } from "./seo";
import { SiteExperience } from "./site-experience";

export const metadata = pageMetadata("/", "Monteur vidéo freelance & motion design | BG EDITWORKS", "Montage vidéo à distance pour entreprises, agences et créateurs : formats courts, interviews, sous-titrage et animation. Découvrez les exemples et tarifs.");

export default function Home() {
  return <SiteExperience />;
}
