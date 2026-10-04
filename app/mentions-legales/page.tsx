import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — BG EDITWORKS",
  description: "Mentions légales et informations de confidentialité de BG EDITWORKS.",
};

export default function LegalPage() {
  return <main className="legal-page">
    <header className="legal-nav">
      <Link className="brand" href="/"><span>BG</span><b>EDITWORKS</b></Link>
      <Link className="legal-back" href="/">← Retour au site</Link>
    </header>

    <section className="legal-hero">
      <p className="kicker">INFORMATIONS OFFICIELLES</p>
      <h1>Mentions<br/><em>légales.</em></h1>
      <p>Dernière mise à jour : 3 octobre 2026.</p>
    </section>

    <section className="legal-content">
      <article>
        <span>01</span><h2>Éditeur du site</h2>
        <p><strong>Bertrand Paul Emmanuel GEORGES EI</strong>, exerçant sous le nom commercial <strong>BG EDITWORKS</strong>.</p>
        <p>Entrepreneur individuel — micro-entreprise<br/>35 rue de la Gare, 18300 Veaugues, France<br/>SIREN : 109 009 688<br/>SIRET : 109 009 688 00010<br/>Immatriculation : RCS Bourges 109 009 688<br/>Code APE : 5912Z</p>
        <p><a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a><br/><a href="tel:+33614422782">06 14 42 27 82</a></p>
      </article>

      <article>
        <span>02</span><h2>Direction de la publication</h2>
        <p>Le directeur de la publication est Bertrand GEORGES, entrepreneur individuel et responsable de BG EDITWORKS.</p>
      </article>

      <article>
        <span>03</span><h2>Hébergement</h2>
        <p>Le site est hébergé par OpenAI Ireland Ltd, 1st Floor, The Liffey Trust Centre, 117-126 Sheriff Street Upper, Dublin 1, D01 YC43, Irlande.</p>
      </article>

      <article>
        <span>04</span><h2>Propriété intellectuelle</h2>
        <p>Les textes, visuels, éléments graphiques, marques et contenus présentés sur ce site sont protégés. Toute reproduction, diffusion, adaptation ou réutilisation sans autorisation écrite préalable est interdite, sauf exception légale.</p>
      </article>

      <article>
        <span>05</span><h2>Données personnelles</h2>
        <p>Le responsable du traitement est Bertrand Paul Emmanuel GEORGES EI — BG EDITWORKS. Le site ne comporte ni compte client ni formulaire stockant directement des données.</p>
        <p>Lorsque vous contactez BG EDITWORKS par e-mail ou par téléphone, les informations transmises sont traitées pour répondre à votre demande et préparer un devis (mesures précontractuelles), exécuter la prestation (contrat), assurer le suivi commercial (intérêt légitime) et respecter les obligations administratives, fiscales et comptables (obligation légale).</p>
        <p>Les données sont accessibles uniquement à BG EDITWORKS et, dans la stricte mesure nécessaire, à ses prestataires techniques ou professionnels soumis à une obligation de confidentialité. Les échanges sans suite commerciale sont conservés pendant une durée maximale de trois ans à compter du dernier contact. Les documents contractuels et comptables sont conservés pendant les durées légales applicables.</p>
        <p>Vous disposez, selon les conditions prévues par la réglementation, de droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité. Vous pouvez les exercer à <a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a>. Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a>.</p>
        <p>Des données techniques strictement nécessaires peuvent être traitées par l’hébergeur pour assurer le fonctionnement et la sécurité du service.</p>
      </article>

      <article>
        <span>06</span><h2>Tarifs et responsabilité</h2>
        <p>Les tarifs affichés sont des prix de départ exprimés en euros toutes taxes comprises (TTC). BG EDITWORKS bénéficiant de la franchise en base de TVA, le montant HT est égal au montant TTC.</p>
        <p><strong>TVA non applicable, art. 293 B du CGI.</strong></p>
        <p>Seul le devis accepté fixe le périmètre, les livrables, le prix définitif, le calendrier, les corrections et les droits d’utilisation applicables au projet. Les éventuels frais ou licences indispensables non compris dans le prix affiché sont signalés et chiffrés avant la commande.</p>
      </article>

      <article>
        <span>07</span><h2>Cookies et traceurs</h2>
        <p>BG EDITWORKS ne dépose actuellement aucun cookie publicitaire, de mesure d’audience ou de personnalisation. Aucun bandeau de consentement n’est donc requis à ce titre. Si des traceurs non strictement nécessaires sont ajoutés ultérieurement, le site sera mis à jour et le consentement des visiteurs sera recueilli avant leur dépôt.</p>
      </article>

      <article>
        <span>08</span><h2>Médiation de la consommation</h2>
        <p>Conformément au Code de la consommation, BG EDITWORKS a désigné un médiateur de la consommation pour les litiges avec un client consommateur, après réclamation écrite préalable auprès de l’entreprise.</p>
        <p><strong>Médiateur : Société Médiation Professionnelle — Médiateur-Consommation-SMP Alteritae</strong><br/>5 rue Salvaing, 12000 Rodez, France<br/><a href="https://www.mediateur-consommation-smp.fr" target="_blank" rel="noreferrer">www.mediateur-consommation-smp.fr</a><br/><a href="mailto:saisine@mediateur-consommation-smp.fr">saisine@mediateur-consommation-smp.fr</a></p>
        <p>La médiation est accessible dans les conditions prévues par le Code de la consommation et après une tentative préalable de résolution directe du litige.</p>
      </article>

      <article>
        <span>09</span><h2>Commande et conditions de vente</h2>
        <p>Le site présente des prestations et des tarifs indicatifs. Il ne permet pas de commander ni de payer en ligne : aucune vente n’est conclue sans échange préalable et devis accepté.</p>
        <p>Avant toute commande, le client reçoit les conditions applicables au projet : périmètre, livrables, délais, prix, modalités de paiement, corrections, licences et droits d’utilisation. Les conditions particulières du devis prévalent pour la prestation concernée.</p>
      </article>
    </section>

    <footer className="legal-footer"><Link href="/">BG EDITWORKS</Link><p>Studio indépendant de post-production.</p></footer>
  </main>;
}
