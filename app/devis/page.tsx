import type { Metadata } from "next";
import { QuoteConfigurator } from "./QuoteConfigurator";

export const metadata: Metadata = {
  title: "Demander un devis — BG EDITWORKS",
  description: "Configurez votre projet de montage vidéo, motion design ou animation 2D et obtenez une première estimation.",
};

export default function QuotePage() {
  return (
    <main className="quotePage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="BG EDITWORKS — accueil"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a>
        <nav aria-label="Navigation principale"><a href="/">Accueil</a><a href="/services">Services</a><a href="/#tarifs">Tarifs</a><a href="/conditions-de-vente">Conditions</a></nav>
        <a className="navCta" href="mailto:bgeditworks@gmail.com">Contact direct <span>↗</span></a>
      </header>
      <section className="quoteHero shell"><p className="eyebrow"><span /> Votre projet</p><h1>Construisons votre<br /><em>première estimation.</em></h1><p>Quelques choix suffisent pour obtenir un repère clair. Vous recevrez ensuite un devis adapté aux fichiers, aux délais et au niveau de finition attendu.</p></section>
      <QuoteConfigurator />
      <footer className="shell"><a className="brand" href="/"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a><p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p><div><a href="/">Accueil</a><a href="/services">Services</a><a href="/conditions-de-vente">Conditions</a><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="mailto:bgeditworks@gmail.com">Contact</a></div><small>© 2026 BG EDITWORKS</small></footer>
    </main>
  );
}
