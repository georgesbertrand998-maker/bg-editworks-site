import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page introuvable — BG EDITWORKS" };

export default function NotFound() {
  return (
    <main className="legalPage">
      <header className="nav shell"><a className="brand" href="/" aria-label="BG EDITWORKS — accueil"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a><a className="navCta" href="/">Retour à l’accueil <span>↗</span></a></header>
      <section className="legalHero shell"><p className="eyebrow"><span /> Erreur 404</p><h1>Cette page est<br /><em>hors champ.</em></h1><div className="legalStatus"><b>Page introuvable</b><p>Le lien demandé n’existe plus ou n’a jamais été créé.</p></div><p><a className="button primary large" href="/">Revenir à l’accueil <span>↗</span></a></p></section>
    </main>
  );
}
