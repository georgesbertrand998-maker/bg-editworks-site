import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — BG EDITWORKS",
  description: "Traitement des données personnelles et exercice de vos droits auprès de BG EDITWORKS.",
};

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="BG EDITWORKS — accueil"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a>
        <nav aria-label="Navigation principale"><a href="/">Accueil</a><a href="/services">Services</a><a href="/conditions-de-vente">Conditions</a><a href="/#contact">Contact</a></nav>
        <a className="navCta" href="/devis">Demander un devis <span>↗</span></a>
      </header>

      <section className="legalHero shell">
        <p className="eyebrow"><span /> Vie privée</p>
        <h1>Politique de<br /><em>confidentialité.</em></h1>
        <div className="legalStatus"><b>Information claire</b><p>Cette page décrit l’utilisation des informations transmises à BG EDITWORKS lors d’une demande de contact ou de devis.</p></div>
      </section>

      <section className="legalContent shell">
        <aside><p className="kicker">Vos droits</p><ul><li>Accès</li><li>Rectification</li><li>Effacement</li><li>Limitation</li><li>Opposition</li><li>Portabilité applicable</li></ul><a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></aside>
        <div className="legalArticles">
          <article className="accentArticle"><span>01</span><div><h2>Responsable du traitement</h2><p>Le responsable du traitement est BG EDITWORKS, exploité par Bertrand [NOM], entrepreneur individuel.</p><p className="missingInfo">À compléter après immatriculation : adresse professionnelle et SIREN / SIRET.</p><p>Contact relatif aux données personnelles : <a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></p></div></article>
          <article><span>02</span><div><h2>Données concernées</h2><p>Lors d’une demande, les informations suivantes peuvent être traitées : nom ou entreprise, adresse e-mail, prestation recherchée, budget indicatif, délai, volume du projet, options sélectionnées et contenu du message.</p><p>Ne transmettez pas de données sensibles ni de fichiers confidentiels avant qu’un moyen d’échange adapté ait été convenu.</p></div></article>
          <article><span>03</span><div><h2>Finalités et base légale</h2><p>Ces données servent uniquement à répondre à votre demande, étudier la faisabilité du projet, préparer une estimation ou un devis et assurer les échanges précontractuels. Le traitement repose sur les démarches effectuées à votre demande avant la conclusion éventuelle d’un contrat.</p></div></article>
          <article><span>04</span><div><h2>Fonctionnement des formulaires</h2><p>Dans la version actuelle du site, les formulaires ne sont pas enregistrés dans une base de données : ils préparent un message dans votre logiciel de messagerie. Les informations ne sont transmises à BG EDITWORKS que si vous envoyez ensuite cet e-mail.</p></div></article>
          <article><span>05</span><div><h2>Destinataires</h2><p>Bertrand, en qualité d’exploitant de BG EDITWORKS, est le destinataire des demandes. Les prestataires strictement nécessaires au courrier électronique ou à l’hébergement pourront traiter certaines données selon leurs propres garanties contractuelles. Les données ne sont ni vendues ni louées.</p></div></article>
          <article><span>06</span><div><h2>Durées de conservation</h2><p>Lorsqu’aucun contrat n’est conclu, les informations d’un prospect sont conservées au maximum trois ans après leur collecte ou le dernier contact venant de sa part. En cas de relation contractuelle, les données sont conservées pendant la relation puis archivées pendant les durées nécessaires aux obligations comptables, fiscales ou à la défense des droits. Les factures et données comptables associées sont conservées dix ans.</p></div></article>
          <article><span>07</span><div><h2>Exercice de vos droits</h2><p>Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition au traitement de vos données et, lorsque les conditions sont réunies, leur portabilité. Écrivez à <a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a> en précisant votre demande.</p><p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <a href="https://www.cnil.fr/fr/adresser-une-plainte">CNIL</a>.</p></div></article>
          <article><span>08</span><div><h2>Cookies et mesure d’audience</h2><p>Le site n’utilise actuellement aucun outil publicitaire ni dispositif de mesure d’audience nécessitant un consentement. Aucun cookie non essentiel n’est volontairement déposé. Si un tel service est ajouté ultérieurement, cette page sera mise à jour et un choix sera proposé avant tout dépôt soumis au consentement.</p></div></article>
          <article><span>09</span><div><h2>Sécurité</h2><p>BG EDITWORKS limite l’accès aux données et applique des mesures adaptées à la nature des informations traitées. Aucun moyen de transmission sur internet ne peut toutefois garantir une sécurité absolue ; les rushes et fichiers volumineux feront l’objet d’un canal de transfert convenu séparément.</p></div></article>
          <article><span>10</span><div><h2>Mise à jour</h2><p>Cette politique pourra évoluer lors de l’immatriculation, du choix de l’hébergeur ou de l’ajout de nouveaux services. La version publiée sur cette page sera la version applicable.</p></div></article>
        </div>
      </section>

      <section className="legalCta shell"><p>Une question sur vos données ?</p><h2>Un échange<br /><em>transparent.</em></h2><a className="button primary large" href="mailto:bgeditworks@gmail.com">Nous écrire <span>↗</span></a></section>
      <footer className="shell"><a className="brand" href="/"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a><p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p><div><a href="/">Accueil</a><a href="/services">Services</a><a href="/conditions-de-vente">Conditions</a><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="/#contact">Contact</a></div><small>© 2026 BG EDITWORKS</small></footer>
    </main>
  );
}
