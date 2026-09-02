import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions de commande — BG EDITWORKS",
  description: "Acompte, paiement, annulation et cadre de collaboration de BG EDITWORKS.",
};

const essentials = [
  ["01", "Devis signé", "La demande devient une commande ferme."],
  ["02", "Acompte 40 %", "Le créneau est réservé après encaissement."],
  ["03", "Démarrage", "Le travail commence à la date légalement autorisée."],
  ["04", "Solde 60 %", "Les fichiers finaux sont remis après paiement."],
];

export default function ConditionsPage() {
  return (
    <main className="legalPage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="BG EDITWORKS — accueil"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a>
        <nav aria-label="Navigation principale"><a href="/">Accueil</a><a href="/services">Services</a><a href="/#tarifs">Tarifs</a><a href="/#contact">Contact</a></nav>
        <a className="navCta" href="/devis">Demander un devis <span>↗</span></a>
      </header>

      <section className="legalHero shell">
        <p className="eyebrow"><span /> Cadre de collaboration</p>
        <h1>Conditions de<br /><em>commande.</em></h1>
        <div className="legalStatus"><b>Version préparatoire</b><p>À compléter avec le SIRET, l’adresse professionnelle, le régime de TVA et le médiateur de la consommation avant publication officielle.</p></div>
      </section>

      <section className="legalRules shell" aria-label="Règles essentielles">
        {essentials.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}
      </section>

      <section className="legalContent shell">
        <aside><p className="kicker">À compléter</p><ul><li>Identité juridique</li><li>Adresse professionnelle</li><li>SIRET / RCS</li><li>Régime de TVA</li><li>Médiateur référencé</li></ul><a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></aside>
        <div className="legalArticles">
          <article><span>01</span><div><h2>Objet</h2><p>Ces conditions encadrent les prestations de post-production de BG EDITWORKS : montage vidéo, motion design, animation 2D, habillage, audio, sous-titrage et exports. Aucun tournage n’est réalisé. Le devis définit précisément la prestation, les livrables, les délais, les corrections incluses et le prix.</p></div></article>
          <article><span>02</span><div><h2>Commande</h2><p>Le formulaire du site constitue uniquement une demande de devis. La commande devient ferme après signature du devis et encaissement de la somme expressément désignée comme <strong>acompte</strong>. Toute modification du périmètre nécessite un accord écrit ou un devis complémentaire.</p></div></article>
          <article className="accentArticle"><span>03</span><div><h2>Acompte et réservation</h2><p>Un acompte de 40 % du montant total est demandé à la commande. Il s’agit d’un premier paiement qui engage le client et BG EDITWORKS. Le créneau n’est réservé qu’après encaissement. Aucun travail ne commence avant cette confirmation et, pour un consommateur, avant la fin du délai de rétractation ou la réception d’une demande expresse valable de démarrage anticipé.</p><p>Les packs mensuels sont payables à 100 % au début de la période, sauf mention différente sur le devis.</p></div></article>
          <article><span>04</span><div><h2>Rétractation du consommateur</h2><p>Pour un contrat conclu à distance avec un consommateur, un délai légal de quatorze jours s’applique en principe. Si le client demande expressément un démarrage anticipé puis se rétracte, il règle la part correspondant au travail déjà exécuté. La perte du droit après exécution complète suppose son accord préalable exprès et sa reconnaissance de cette perte.</p></div></article>
          <article><span>05</span><div><h2>Annulation ou report</h2><p>Toute demande doit être écrite. Hors droit légal de rétractation, l’acompte engage les deux parties. Les conséquences d’une annulation sont déterminées selon le travail effectué, les frais engagés, le préjudice justifié, le devis et la loi applicable. Lorsque le planning le permet, un report amiable est privilégié.</p></div></article>
          <article><span>06</span><div><h2>Prix et paiement</h2><p>Le devis indique les prix HT ou TTC et le régime de TVA. Sauf mention contraire, le solde de 60 % est payable avant la remise des fichiers finaux sans filigrane. Pour un client professionnel, tout retard entraîne les pénalités prévues par la loi au taux de refinancement de la BCE majoré de dix points et l’indemnité forfaitaire de 40 € pour recouvrement. Cette indemnité ne concerne pas les consommateurs.</p></div></article>
          <article><span>07</span><div><h2>Éléments fournis</h2><p>Le client remet les rushes, sons, textes, logos, polices, consignes et autorisations nécessaires. Il garantit disposer des droits permettant leur utilisation. Un retard, un fichier défectueux ou un élément manquant suspend le calendrier et peut justifier un devis complémentaire.</p></div></article>
          <article><span>08</span><div><h2>Corrections</h2><p>Le nombre d’allers-retours inclus figure au devis. Les retours doivent être regroupés et transmis par écrit. Tout changement de brief, nouvelle version après validation ou correction supplémentaire est facturé après accord du client.</p></div></article>
          <article><span>09</span><div><h2>Délais</h2><p>Les délais commencent après réception de l’acompte, du brief et de tous les fichiers nécessaires, sous réserve du délai de rétractation. Ils sont prolongés lorsque le client tarde à envoyer un élément ou une validation. Une date impérative doit être acceptée par écrit.</p></div></article>
          <article><span>10</span><div><h2>Livraison et archivage</h2><p>Les livrables prévus sont remis après paiement intégral. Sauf option écrite, les projets Premiere Pro, After Effects et autres fichiers de travail ne sont pas inclus. Les éléments du projet sont conservés trente jours après livraison, puis peuvent être supprimés.</p></div></article>
          <article><span>11</span><div><h2>Droits d’auteur</h2><p>La cession éventuelle des droits d’exploitation prend effet après paiement complet. Le devis précise séparément les droits cédés, les supports, la destination, le territoire et la durée. BG EDITWORKS ne présente le projet dans son portfolio qu’avec l’accord du client.</p></div></article>
          <article><span>12</span><div><h2>Réclamation et médiation</h2><p>Toute réclamation est d’abord envoyée à <a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a>. Un consommateur peut ensuite saisir gratuitement le médiateur de la consommation désigné par BG EDITWORKS.</p><p className="missingInfo">À compléter avant publication : nom, adresse et site du médiateur référencé par la CECMC.</p></div></article>
          <article><span>13</span><div><h2>Droit applicable</h2><p>Le contrat est soumis au droit français. Les parties recherchent d’abord une solution amiable. À défaut, le litige relève des juridictions compétentes selon les règles de droit commun, sans priver un consommateur de ses protections obligatoires.</p></div></article>
        </div>
      </section>

      <section className="legalCta shell"><p>Une question avant de vous engager ?</p><h2>Un devis clair.<br /><em>Un cadre précis.</em></h2><a className="button primary large" href="/devis">Configurer mon projet <span>↗</span></a></section>
      <footer className="shell"><a className="brand" href="/"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a><p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p><div><a href="/">Accueil</a><a href="/services">Services</a><a href="/#tarifs">Tarifs</a><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="/#contact">Contact</a></div><small>© 2026 BG EDITWORKS</small></footer>
    </main>
  );
}
