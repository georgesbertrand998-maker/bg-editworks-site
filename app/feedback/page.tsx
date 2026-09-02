import type { Metadata } from "next";
import { FeedbackForm } from "../FeedbackForm";

export const metadata: Metadata = {
  title: "Le coin feedback — BG EDITWORKS",
  description: "Partagez votre retour après une mission réalisée avec BG EDITWORKS.",
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return (
    <main className="feedbackPage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="BG Editworks — accueil"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a>
        <nav aria-label="Navigation principale"><a href="/services">Services</a><a href="/#portfolio">Portfolio</a><a href="/#apropos">À propos</a><a href="/#contact">Contact</a></nav>
        <a className="navCta" href="/devis">Créer mon devis <span>↗</span></a>
      </header>
      <section className="feedbackHero shell">
        <p className="eyebrow"><span /> Réservé aux projets livrés</p>
        <h1>Le coin<br /><em>feedback.</em></h1>
        <div className="feedbackHeroNote"><b>MERCI POUR VOTRE CONFIANCE</b><p>Votre retour aide BG EDITWORKS à améliorer son accompagnement et permet aux futurs clients de découvrir une expérience réelle.</p></div>
      </section>
      <section className="feedbackFormSection shell">
        <div className="feedbackPromise">
          <article><span>01</span><h2>Authentique</h2><p>Le retour est associé à une mission réellement livrée.</p></article>
          <article><span>02</span><h2>Libre</h2><p>Vous choisissez précisément la façon dont il peut être publié.</p></article>
          <article><span>03</span><h2>Utile</h2><p>Les remarques privées restent confidentielles et servent à progresser.</p></article>
        </div>
        <FeedbackForm />
      </section>
      <footer className="shell">
        <a className="brand" href="/"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a>
        <p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p>
        <div><a href="/">Accueil</a><a href="/devis">Devis</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="mailto:bgeditworks@gmail.com">Contact</a></div>
        <small>© 2026 BG EDITWORKS</small>
      </footer>
    </main>
  );
}
