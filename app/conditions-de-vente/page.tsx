import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions de commande — BG EDITWORKS",
  description: "Acompte, paiement, annulation et cadre de collaboration de BG EDITWORKS.",
};

const essentials = [
  ["01", "Devis accepté", "La demande devient une commande ferme."],
  ["02", "Au-delà de 200 €", "50 % à la commande, puis 50 % à la livraison, hors formules prépayées."],
  ["03", "Démarrage", "Le travail commence à la date légalement autorisée."],
  ["04", "Jusqu’à 200 € inclus", "Paiement à la livraison, sauf formule prépayée expressément convenue."],
];

export default function ConditionsPage() {
  return (
    <main className="legal-page conditions-page">
      <header className="legal-nav">
        <a className="brand" href="/" aria-label="BG EDITWORKS — accueil"><span>BG</span><b>EDITWORKS</b></a>
        <nav aria-label="Navigation principale"><a href="/">Accueil</a><a href="/services">Services</a><a href="/offres">Tarifs</a><a href="/#contact">Contact</a></nav>
        <a className="legal-back" href="/devis">Demander un devis <span>↗</span></a>
      </header>

      <section className="legal-hero">
        <p className="eyebrow"><span /> Cadre de collaboration</p>
        <h1>Conditions de<br /><em>commande.</em></h1>
        <p>Montage vidéo et post-production à distance · Version du 17 octobre 2026.</p>
      </section>

      <section className="conditions-summary" aria-label="Règles essentielles">
        {essentials.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}
      </section>

      <section className="conditions-content">
        <aside><p className="kicker">BG EDITWORKS</p><p>Bertrand Paul Emmanuel GEORGES EI<br/>35 rue de la Gare, 18300 Veaugues, France<br/>SIRET : 109 009 688 00010<br/>TVA non applicable, art. 293 B du CGI.</p><p><a href="/mentions-legales">Consulter les mentions légales</a></p><a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></aside>
        <div className="legalArticles">
          <article><span>01</span><div><h2>Objet</h2><p>Ces conditions encadrent les prestations de post-production de BG EDITWORKS : montage vidéo, motion design, animation 2D, habillage, audio, sous-titrage et exports. Aucun tournage n’est réalisé. Le devis définit précisément la prestation, les livrables, les délais, les corrections incluses et le prix.</p></div></article>
          <article><span>02</span><div><h2>Commande</h2><p>Le formulaire du site constitue uniquement une demande de devis. La commande devient ferme après acceptation du devis. Lorsqu’un acompte ou un prépaiement est prévu, le créneau n’est réservé et le démarrage n’est confirmé qu’après son encaissement. La nature du versement demandé (<strong>acompte</strong> ou prépaiement de la formule choisie) est précisée dans le devis. Toute modification du périmètre nécessite un accord écrit ou un devis complémentaire.</p></div></article>
          <article className="accentArticle"><span>03</span><div><h2>Acompte et réservation</h2><p>Hors formules prépayées expressément convenues, pour une prestation supérieure à 200 € TTC, un acompte de 50 % du montant total est demandé à la commande ; les 50 % restants sont payables à la livraison. Pour une prestation de 200 € TTC ou moins, le paiement intervient à la livraison. Lorsqu’un acompte est prévu, le créneau est réservé après son encaissement. Le démarrage est confirmé après acceptation du devis et réception des éléments nécessaires, et, pour un consommateur, après la fin du délai de rétractation ou la réception d’une demande expresse valable de démarrage anticipé.</p><p>Les packs de 5 h et de 10 h sont prépayés et valables trois mois, selon l’offre choisie. Les collaborations mensuelles sont payées en début de période, avec renouvellement d’un commun accord. Ces modalités spécifiques sont rappelées dans le devis et acceptées avant la commande.</p></div></article>
          <article><span>04</span><div><h2>Rétractation du consommateur</h2><p>Pour un contrat conclu à distance avec un consommateur, un délai légal de quatorze jours s’applique en principe. Si le client demande expressément un démarrage anticipé puis se rétracte, il règle la part correspondant au travail déjà exécuté. La perte du droit après exécution complète suppose son accord préalable exprès et sa reconnaissance de cette perte.</p></div></article>
          <article><span>05</span><div><h2>Annulation ou report</h2><p>Toute demande doit être écrite. Hors droit légal de rétractation, l’acompte engage les deux parties. Les conséquences d’une annulation sont déterminées selon le travail effectué, les frais engagés, le préjudice justifié, le devis et la loi applicable. Lorsque le planning le permet, un report amiable est privilégié.</p></div></article>
          <article><span>06</span><div><h2>Prix et paiement</h2><p>Le devis indique les prix HT ou TTC et le régime de TVA. Hors formules prépayées, le solde de 50 % pour les prestations supérieures à 200 € TTC, ou le montant intégral pour celles de 200 € TTC ou moins, est payable à la livraison, avant remise des fichiers finaux sans filigrane. Pour un client professionnel, tout retard entraîne les pénalités prévues par la loi au taux de refinancement de la BCE majoré de dix points et l’indemnité forfaitaire de 40 € pour recouvrement. Cette indemnité ne concerne pas les consommateurs.</p></div></article>
          <article><span>07</span><div><h2>Éléments fournis</h2><p>Le client remet les rushes, sons, textes, logos, polices, consignes et autorisations nécessaires. Il garantit disposer des droits permettant leur utilisation. Un retard, un fichier défectueux ou un élément manquant suspend le calendrier et peut justifier un devis complémentaire.</p></div></article>
          <article><span>08</span><div><h2>Corrections</h2><p>Le nombre d’allers-retours inclus figure au devis. Les retours doivent être regroupés et transmis par écrit. Tout changement de brief, nouvelle version après validation ou correction supplémentaire est facturé après accord du client.</p></div></article>
          <article><span>09</span><div><h2>Délais</h2><p>Les délais commencent après acceptation du devis, réception du paiement préalable lorsqu’il est prévu, du brief et de tous les fichiers nécessaires, sous réserve du délai de rétractation. Ils sont prolongés lorsque le client tarde à envoyer un élément ou une validation. Une date impérative doit être acceptée par écrit.</p></div></article>
          <article><span>10</span><div><h2>Livraison et archivage</h2><p>Les livrables prévus sont remis après paiement intégral. Sauf option écrite, les projets Premiere Pro, After Effects et autres fichiers de travail ne sont pas inclus. Les fichiers de travail du projet, les copies de rushs et les ressources nécessaires à une reprise du montage, ainsi que les livrables, sont conservés pendant 30 jours à compter de la livraison finale et de la validation du client, en retenant la plus tardive de ces deux dates. Le client conserve ses fichiers originaux et télécharge ses vidéos finales. À l’expiration de ce délai, le dossier de travail et les copies dédiées au projet sont supprimés, sauf prolongation convenue par écrit ou conservation nécessaire au traitement d’un litige ; leur récupération ne peut plus être garantie. Un archivage prolongé doit être convenu par écrit avant cette échéance et peut faire l’objet d’un devis spécifique. Les documents contractuels, comptables et les éléments nécessaires au traitement d’un litige restent conservés selon les obligations applicables.</p></div></article>
          <article><span>11</span><div><h2>Droits d’auteur</h2><p>La cession éventuelle des droits d’exploitation prend effet après paiement complet. Le devis précise séparément les droits cédés, les supports, la destination, le territoire et la durée. BG EDITWORKS ne présente le projet dans son portfolio qu’avec l’accord du client.</p></div></article>
          <article><span>12</span><div><h2>Réclamation et médiation</h2><p>Toute réclamation est d’abord envoyée à <a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a>. Un consommateur peut ensuite saisir gratuitement le médiateur de la consommation désigné par BG EDITWORKS.</p><p><strong>Société Médiation Professionnelle — Médiateur-Consommation-SMP Alteritae</strong><br/>5 rue Salvaing, 12000 Rodez, France<br/><a href="https://www.mediateur-consommation-smp.fr" target="_blank" rel="noreferrer">www.mediateur-consommation-smp.fr</a><br/><a href="mailto:saisine@mediateur-consommation-smp.fr">saisine@mediateur-consommation-smp.fr</a></p></div></article>
          <article><span>13</span><div><h2>Droit applicable</h2><p>Le contrat est soumis au droit français. Les parties recherchent d’abord une solution amiable. À défaut, le litige relève des juridictions compétentes selon les règles de droit commun, sans priver un consommateur de ses protections obligatoires.</p></div></article>
        </div>
      </section>

      <section className="conditions-cta"><p>Une question avant de vous engager ?</p><h2>Un devis clair.<br /><em>Un cadre précis.</em></h2><a className="button primary large" href="/devis">Configurer mon projet <span>↗</span></a></section>
      <footer className="legal-footer"><a className="brand" href="/"><span>BG</span><b>EDITWORKS</b></a><p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p><div><a href="/">Accueil</a><a href="/services">Services</a><a href="/offres">Tarifs</a><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="/#contact">Contact</a></div><small>© 2026 BG EDITWORKS</small></footer>
    </main>
  );
}

