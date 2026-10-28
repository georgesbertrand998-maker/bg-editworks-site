import type { Metadata } from "next";
import { FeedbackForm } from "../FeedbackForm";
export const metadata: Metadata = { title: "Avis clients — BG EDITWORKS", description: "Partagez votre retour après une prestation réalisée avec BG EDITWORKS.", robots: { index: false, follow: true } };
export default function FeedbackPage() {
  return <main className="feedbackPage">
    <header className="legal-nav"><a className="brand" href="/"><span>BG</span><b>EDITWORKS</b></a><a href="/">← Retour au site</a></header>
    <section className="feedbackHero"><p className="kicker">AVIS CLIENTS · APRÈS LA LIVRAISON</p><h1>VOTRE EXPÉRIENCE<br/><em>COMPTE.</em></h1><p>Merci pour votre confiance. Partagez votre retour sur le travail accompli : ce qui vous a plu, et ce que nous pourrions améliorer.</p></section>
    <section className="feedbackFormSection" aria-label="Laisser un avis"><aside className="feedbackPromise"><article><span>01</span><h2>Votre retour</h2><p>Un avis libre sur une prestation réalisée avec le studio.</p></article><article><span>02</span><h2>Votre choix</h2><p>Retour privé ou publication autorisée : vous décidez.</p></article><article><span>03</span><h2>En toute clarté</h2><p>Le formulaire prépare un e-mail. Vous le relisez et confirmez son envoi dans votre messagerie. Rien n’est publié automatiquement.</p></article></aside><FeedbackForm /></section>
    <footer className="legal-footer"><a href="/">BG EDITWORKS</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="/mentions-legales">Mentions légales</a></footer>
  </main>;
}
