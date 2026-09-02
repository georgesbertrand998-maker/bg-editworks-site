import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — BG EDITWORKS",
  description: "Informations légales relatives au site BG EDITWORKS.",
};

export default function LegalNoticePage() {
  return (
    <main className="legalPage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="BG EDITWORKS — accueil"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a>
        <nav aria-label="Navigation principale"><a href="/">Accueil</a><a href="/services">Services</a><a href="/conditions-de-vente">Conditions</a><a href="/#contact">Contact</a></nav>
        <a className="navCta" href="/devis">Demander un devis <span>↗</span></a>
      </header>

      <section className="legalHero shell">
        <p className="eyebrow"><span /> Informations du site</p>
        <h1>Mentions<br /><em>légales.</em></h1>
        <div className="legalStatus"><b>Version à finaliser</b><p>Les champs signalés seront complétés après l’immatriculation de la micro-entreprise et le choix de l’hébergeur.</p></div>
      </section>

      <section className="legalContent shell">
        <aside><p className="kicker">Informations requises</p><ul><li>Nom complet</li><li>Adresse professionnelle</li><li>SIREN / SIRET</li><li>Régime de TVA</li><li>Hébergeur</li></ul><a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></aside>
        <div className="legalArticles">
          <article className="accentArticle"><span>01</span><div><h2>Éditeur du site</h2><p><strong>BG EDITWORKS</strong>, nom commercial d’une entreprise individuelle sous le régime de la micro-entreprise.</p><p className="missingInfo">À compléter : Bertrand [NOM], entrepreneur individuel — adresse professionnelle — SIREN et SIRET — mention d’immatriculation au Registre national des entreprises — régime de TVA.</p><p>Contact : <a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></p></div></article>
          <article><span>02</span><div><h2>Directeur de la publication</h2><p>Le directeur de la publication est Bertrand [NOM], exploitant de BG EDITWORKS.</p></div></article>
          <article><span>03</span><div><h2>Hébergement</h2><p className="missingInfo">À compléter lors de la mise en ligne : nom de l’hébergeur, dénomination sociale, adresse et numéro de téléphone.</p></div></article>
          <article><span>04</span><div><h2>Propriété intellectuelle</h2><p>La structure du site, les textes, l’identité visuelle, le logo et les créations présentées sont protégés par le droit de la propriété intellectuelle, sauf mention contraire. Toute reproduction, adaptation ou exploitation non autorisée est interdite.</p><p>Les marques, logiciels et contenus appartenant à des tiers restent la propriété de leurs titulaires respectifs.</p></div></article>
          <article><span>05</span><div><h2>Responsabilité</h2><p>BG EDITWORKS veille à fournir des informations exactes et à jour. Les tarifs affichés sont indicatifs : seul un devis accepté fixe définitivement le périmètre, le prix et les délais d’une prestation.</p><p>Le site peut contenir des liens vers des services externes sur lesquels BG EDITWORKS n’exerce aucun contrôle.</p></div></article>
          <article><span>06</span><div><h2>Données personnelles</h2><p>Les informations relatives aux données personnelles, aux demandes de devis et à l’exercice de vos droits figurent dans la <a href="/politique-de-confidentialite">politique de confidentialité</a>.</p></div></article>
          <article><span>07</span><div><h2>Conditions de commande</h2><p>Les règles concernant les devis, acomptes, délais, corrections, paiements et annulations figurent dans les <a href="/conditions-de-vente">conditions de commande</a>.</p></div></article>
        </div>
      </section>

      <section className="legalCta shell"><p>Un projet de post-production ?</p><h2>Parlons de<br /><em>vos images.</em></h2><a className="button primary large" href="/devis">Configurer mon projet <span>↗</span></a></section>
      <footer className="shell"><a className="brand" href="/"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a><p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p><div><a href="/">Accueil</a><a href="/services">Services</a><a href="/conditions-de-vente">Conditions</a><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="/#contact">Contact</a></div><small>© 2026 BG EDITWORKS</small></footer>
    </main>
  );
}
