import { QuoteForm } from "./QuoteForm";

const services = [
  { n: "01", title: "Montage vidéo", text: "Interviews, contenus de marque, formats YouTube et réseaux sociaux : un montage précis, rythmé et pensé pour votre audience." },
  { n: "02", title: "Motion design", text: "Titres, habillages, transitions et identités animées réalisés sous After Effects pour renforcer votre message." },
  { n: "03", title: "Animation 2D", text: "Animations graphiques sobres et expressives pour expliquer, présenter ou donner du relief à vos contenus." },
  { n: "04", title: "Post-production", text: "Nettoyage audio, étalonnage, sous-titrage et déclinaisons optimisées pour chaque plateforme." },
];

const steps = [
  ["01", "Brief", "Nous cadrons le message, le format, les références et les délais."],
  ["02", "Réception", "Vous transmettez vos rushes et vos éléments graphiques à distance."],
  ["03", "Création", "Je construis le montage, le rythme et l’univers visuel de votre projet."],
  ["04", "Validation", "Vous commentez une première version, puis les ajustements sont intégrés."],
  ["05", "Livraison", "Vous recevez les exports finaux, prêts pour vos canaux de diffusion."],
];

const deliverables = [
  ["Premiere Pro", "Dérushage, narration, rythme, transitions et montage complet."],
  ["After Effects", "Titres animés, motion design, tracking et habillages visuels."],
  ["Image & son", "Correction colorimétrique, nettoyage audio et mixage."],
  ["Diffusion", "Sous-titres, recadrages et exports adaptés à chaque plateforme."],
];

const questions = [
  ["Travaillez-vous à distance ?", "Oui. Vous transmettez vos rushes et vos éléments en ligne. Les échanges, validations et livraisons se font entièrement à distance."],
  ["BG EDITWORKS réalise-t-il les tournages ?", "Non. Le studio est spécialisé dans la post-production et intervient à partir des images que vous fournissez."],
  ["Quels formats pouvez-vous livrer ?", "Formats horizontaux, verticaux ou carrés pour YouTube, sites web, présentations, Instagram, Reels, Shorts et autres réseaux sociaux."],
  ["Comment sont gérées les modifications ?", "Le besoin et le nombre d’allers-retours sont définis dans le devis. Vous recevez une première version, puis les ajustements convenus sont intégrés."],
  ["Quand le travail commence-t-il ?", "Uniquement après signature du devis et encaissement d’un acompte de 40 %. Une demande envoyée depuis le site ne réserve pas de créneau et ne déclenche aucun travail."],
  ["Que se passe-t-il en cas d’annulation ?", "Le devis et les conditions de vente précisent les conséquences de l’annulation. L’acompte engage les deux parties, sous réserve des droits légaux de rétractation éventuellement applicables."],
];

const prices = [
  { label: "Format court", title: "Reel / Short", price: "110 €", unit: "à partir de", features: ["Vidéo jusqu’à 60 secondes", "Montage, rythme et musique", "Sous-titres simples", "1 série de corrections"] },
  { label: "Format long", title: "Vidéo YouTube", price: "280 €", unit: "à partir de", features: ["Vidéo montée jusqu’à 10 minutes", "Jusqu’à 60 minutes de rushes", "Titres, son et colorimétrie", "2 séries de corrections"] },
  { label: "Entreprise", title: "Interview / corporate", price: "420 €", unit: "à partir de", features: ["Vidéo finale de 1 à 3 minutes", "Montage et habillage simple", "Nettoyage audio et étalonnage", "2 séries de corrections"] },
  { label: "After Effects", title: "Motion design 2D", price: "330 €", unit: "par jour", features: ["Titres et éléments animés", "Animation de logo ou habillage", "Assets graphiques fournis", "2 séries de corrections"] },
];

const businessPrices = [
  { title: "Interview / témoignage", price: "420 €", delay: "7 à 10 jours ouvrés", text: "Vidéo finale de 1 à 3 minutes, jusqu’à 60 minutes de rushes, habillage simple, son et étalonnage." },
  { title: "Formation / tutoriel", price: "550 €", delay: "7 à 12 jours ouvrés", text: "Vidéo structurée jusqu’à 15 minutes, chapitrage, titres, nettoyage audio et export professionnel." },
  { title: "Film de marque", price: "650 €", delay: "10 à 15 jours ouvrés", text: "Film de 1 à 3 minutes avec narration renforcée, habillage, sound design et finition colorimétrique." },
  { title: "Campagne réseaux", price: "720 €", delay: "10 à 15 jours ouvrés", text: "Une vidéo principale et quatre déclinaisons courtes adaptées aux formats sociaux de l’entreprise." },
];

const options = [
  ["Rushes supplémentaires", "+ 40 €", "Par tranche de 30 minutes de rushes à trier"],
  ["Minute finale supplémentaire", "+ 25 €", "Pour les vidéos longues au-delà du format prévu"],
  ["Montage multicaméra", "+ 80 €", "Synchronisation et sélection de plusieurs caméras"],
  ["Sous-titres simples", "+ 30 €", "Jusqu’à 10 minutes de vidéo"],
  ["Sous-titres animés", "dès 60 €", "Style dynamique, tarif selon la durée"],
  ["Format supplémentaire", "+ 40 €", "Déclinaison verticale, carrée ou horizontale"],
  ["Extrait pour les réseaux", "+ 70 €", "Création d’un teaser court depuis la vidéo principale"],
  ["Miniature YouTube", "+ 50 €", "Une proposition prête à publier"],
  ["Animation de logo", "dès 150 €", "Animation 2D simple à partir du logo fourni"],
  ["Motion design avancé", "330 € / jour", "Habillage ou animation sur mesure"],
  ["Nettoyage audio avancé", "dès 50 €", "Réduction de bruit et traitement approfondi"],
  ["Étalonnage avancé", "dès 70 €", "Travail colorimétrique renforcé"],
  ["Recherche d’assets", "dès 50 €", "Hors coût des licences éventuelles"],
  ["Correction supplémentaire", "+ 40 €", "Par série de retours au-delà du devis"],
  ["Livraison urgente", "+ 30 %", "Selon disponibilité et délai demandé"],
  ["Fichiers sources", "+ 20 %", "Projet organisé et médias transmissibles"],
];

const packs = [
  { title: "Pack 4 Shorts", price: "400 €", rhythm: "4 vidéos / mois", details: ["60 secondes maximum par vidéo", "15 minutes de rushes maximum par vidéo", "Livraison sous 3 à 5 jours ouvrés", "1 série de corrections par vidéo"] },
  { title: "Pack 8 Shorts", price: "760 €", rhythm: "8 vidéos / mois", details: ["60 secondes maximum par vidéo", "Environ 2 livraisons par semaine", "15 minutes de rushes maximum par vidéo", "1 série de corrections par vidéo"] },
  { title: "Pack 4 YouTube", price: "1 000 €", rhythm: "4 vidéos / mois", details: ["10 minutes maximum par vidéo", "60 minutes de rushes maximum par vidéo", "Livraison sous 5 à 7 jours ouvrés", "2 séries de corrections par vidéo"] },
  { title: "Pack Mixte", price: "820 €", rhythm: "2 YouTube + 4 Shorts", details: ["YouTube : 10 minutes maximum", "Shorts tirés des deux vidéos longues", "60 minutes de rushes par vidéo longue", "2 séries de corrections par projet"] },
];

export default function Home() {
  return (
    <main className="homePage">
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="BG Editworks — accueil">
          <span className="brandMark">BG</span><span className="brandText">EDITWORKS</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="/services">Services</a><a href="#tarifs">Tarifs</a><a href="#portfolio">Portfolio</a><a href="#apropos">À propos</a>
        </nav>
        <a className="navCta" href="/devis">Créer mon devis <span>↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroGlow" aria-hidden="true" />
        <p className="eyebrow"><span /> Studio indépendant de post-production</p>
        <h1>Chaque image<br />mérite <em>d’être racontée.</em></h1>
        <div className="heroBottom">
          <p>Montage vidéo, motion design et animation 2D pour les entreprises, marques et créateurs qui veulent donner du relief à leurs contenus.</p>
          <div className="heroActions">
            <a className="button primary" href="/devis">Demander un devis <span>↗</span></a>
            <a className="button ghost" href="#portfolio">Découvrir le studio <span>↓</span></a>
          </div>
        </div>
        <div className="reelPlaceholder" aria-label="Emplacement du futur showreel">
          <div className="reelLines" aria-hidden="true" />
          <span className="play">▶</span>
          <p><b>SHOWREEL — BIENTÔT</b><small>Vos futurs projets prendront place ici</small></p>
          <span className="timecode">00:00:00</span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="sectionHead"><p className="kicker">Expertises</p><h2>La post-production,<br /><em>de l’idée à l’impact.</em></h2><p>Une prise en charge claire et exigeante de vos images, sans tournage, où que vous soyez.</p></div>
        <div className="serviceGrid">{services.map((s) => <article className="service" key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><i aria-hidden="true">↗</i></article>)}</div>
        <div className="deliverables">
          <div className="deliverableIntro"><p className="kicker">Prise en charge</p><h3>Du rush<br />au fichier final.</h3></div>
          <div className="deliverableList">{deliverables.map(([title,text],index) => <article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h4>{title}</h4><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="pricing" id="tarifs">
        <div className="shell">
          <div className="sectionHead"><p className="kicker">Tarifs</p><h2>Des repères clairs.<br /><em>Un devis précis.</em></h2><p>Des tarifs de lancement cohérents avec le marché français, calculés selon le temps et la complexité réelle du projet.</p></div>
          <div className="priceGrid">{prices.map((offer,index) => <article className={index === 1 ? "priceCard featured" : "priceCard"} key={offer.title}>
            <div className="priceTop"><span>{offer.label}</span>{index === 1 && <b>Le plus demandé</b>}</div>
            <h3>{offer.title}</h3>
            <p className="price"><small>{offer.unit}</small>{offer.price}</p>
            <ul>{offer.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a href="/devis">Demander un devis <span>↗</span></a>
          </article>)}</div>
          <div className="pricingBase"><p><b>Taux journalier de référence</b><span>Montage vidéo : 280 € / jour</span><span>Motion design : 330 € / jour</span></p><small>Tarifs indicatifs pour des rushes organisés et un brief clair. Tout besoin supplémentaire, urgence ou série de corrections additionnelle fait l’objet d’un chiffrage. Le montant final et le régime de TVA applicable sont précisés sur le devis.</small></div>
          <article className="paidTrial">
            <div><p className="kicker">Première collaboration</p><h3>Testez le studio<br />sur un format court.</h3></div>
            <div className="paidTrialDetails"><p>Un essai payé et clairement délimité pour valider le style, la communication et la méthode avant un projet plus important.</p><ul><li>Extrait final jusqu’à 60 secondes</li><li>15 minutes de rushes maximum</li><li>1 série de corrections</li><li>Livraison sous 3 à 5 jours ouvrés</li></ul></div>
            <div className="paidTrialPrice"><small>Forfait d’essai</small><strong>150 €</strong><span>50 € déduits d’un projet de 500 € ou plus signé sous 30 jours.</span><a className="button primary" href="/devis">Demander un essai <span>↗</span></a></div>
          </article>
          <div className="businessPricing">
            <div className="optionsHead"><div><p className="kicker">Entreprises</p><h3>Des formats pensés<br />pour vos équipes.</h3></div><p>Communication interne, témoignage client, formation ou campagne de marque : chaque offre comprend un cadre précis, un délai annoncé et un interlocuteur unique.</p></div>
            <div className="businessGrid">{businessPrices.map((offer,index) => <article className={index === 2 ? "featured" : ""} key={offer.title}><span>ENT-{String(index+1).padStart(2,"0")}</span><h4>{offer.title}</h4><p>{offer.text}</p><div><b>À partir de {offer.price}</b><small>{offer.delay}</small></div><a href="/devis">Configurer ce projet <i>↗</i></a></article>)}</div>
            <p className="businessNote">Montants indicatifs avant application éventuelle de la TVA. Le devis précise les montants HT et TTC, la date de livraison ferme et les conditions de règlement.</p>
          </div>
          <div className="optionsBlock">
            <div className="optionsHead"><div><p className="kicker">Options</p><h3>Composez la prestation<br />selon votre projet.</h3></div><p>Ces suppléments permettent de garder un prix de base juste tout en adaptant précisément la prestation au volume et au niveau de finition demandé.</p></div>
            <div className="optionGrid">{options.map(([title,price,description],index) => <article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h4>{title}</h4><p>{description}</p></div><b>{price}</b></article>)}</div>
          </div>
          <div className="packsBlock">
            <div className="optionsHead"><div><p className="kicker">Packs mensuels</p><h3>Publiez régulièrement.<br />Payez moins à l’unité.</h3></div><p>Des volumes définis à l’avance pour organiser les livraisons sur le mois et bénéficier d’un tarif dégressif sans réduire le niveau de finition.</p></div>
            <div className="packGrid">{packs.map((pack,index) => <article className={index === 3 ? "packCard featured" : "packCard"} key={pack.title}><div className="packLabel"><span>{pack.rhythm}</span>{index === 3 && <b>Polyvalent</b>}</div><h4>{pack.title}</h4><p className="packPrice">{pack.price}<small>/ mois</small></p><ul>{pack.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><a href="/devis">Choisir ce pack <span>↗</span></a></article>)}</div>
            <div className="packBenefits"><p>Inclus dans tous les packs</p><div><span>Brief mensuel</span><span>Calendrier de livraison</span><span>Créneau prioritaire</span><span>Retours centralisés</span><span>Archivage 30 jours</span></div></div>
            <p className="packNote">Les packs sont organisés sur un mois calendaire et réglés au début de la période. Les options, urgences, volumes de rushes et corrections supplémentaires restent facturés selon la grille ci-dessus.</p>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="shell">
          <div className="sectionHead compact"><p className="kicker">Portfolio</p><h2>Les prochaines images<br /><em>seront peut-être les vôtres.</em></h2></div>
          <div className="projects">
            {["Projet 01", "Projet 02", "Projet 03"].map((p, i) => <article className={`project p${i+1}`} key={p}><div className="frame"><span>À VENIR</span><b>{String(i+1).padStart(2,"0")}</b></div><p>{p}<small>Portfolio en construction</small></p></article>)}
          </div>
          <p className="portfolioNote">Cette sélection accueillera les premiers montages, études de cas et extraits de showreel de BG EDITWORKS.</p>
        </div>
      </section>

      <section className="section shell process" id="methode">
        <div className="sectionHead"><p className="kicker">Méthode</p><h2>Un processus simple.<br /><em>Un suivi précis.</em></h2></div>
        <div className="steps">{steps.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="about" id="apropos"><div className="shell aboutGrid">
        <div className="aboutVisual"><span className="bigBG">BG</span><span className="solo">INDÉPENDANT<br />À DISTANCE</span></div>
        <div className="aboutCopy"><p className="kicker">À propos</p><h2>Un regard dédié<br />à <em>vos images.</em></h2><p>Je m’appelle Bertrand. J’ai créé BG EDITWORKS comme un studio indépendant de post-production, avec un interlocuteur unique pour accompagner chaque projet du brief à la livraison.</p><p>J’interviens exclusivement à partir de vos rushes : montage sous Premiere Pro, création sous After Effects, motion design et animation 2D.</p><div className="values"><span>Précision</span><span>Créativité</span><span>Fiabilité</span><span>Échange direct</span></div></div>
      </div></section>

      <section className="feedbackCorner shell" id="feedback">
        <div className="feedbackNumber" aria-hidden="true">05</div>
        <div className="feedbackCopy">
          <p className="kicker">Le coin feedback</p>
          <h2>Votre retour fait aussi<br /><em>avancer le studio.</em></h2>
          <p>Après une mission livrée, chaque client peut partager son expérience en quelques minutes. Aucun témoignage n’est publié sans autorisation explicite.</p>
        </div>
        <div className="feedbackAction">
          <p><span>01</span> Projet livré</p>
          <p><span>02</span> Retour vérifié</p>
          <p><span>03</span> Publication autorisée</p>
          <a className="button primary" href="/feedback">Laisser un feedback <span>↗</span></a>
        </div>
      </section>

      <section className="section shell faq" id="faq">
        <div className="sectionHead"><p className="kicker">Questions</p><h2>Avant de<br /><em>commencer.</em></h2><p>Les réponses essentielles pour savoir rapidement si BG EDITWORKS correspond à votre projet.</p></div>
        <div className="faqList">{questions.map(([question,answer],index) => <details key={question}><summary><span>{String(index+1).padStart(2,"0")}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow"><span /> Un projet en tête ?</p>
        <h2>Donnons du rythme<br />à <em>vos idées.</em></h2>
        <p className="contactIntro">Présentez votre projet, vos objectifs et vos délais. Vous recevrez une réponse claire et adaptée à votre besoin.</p>
        <div className="orderRule"><p><span>01</span><b>Devis signé</b></p><i>→</i><p><span>02</span><b>Acompte de 40 % encaissé</b></p><i>→</i><p><span>03</span><b>Créneau confirmé</b></p><i>→</i><p><span>04</span><b>Début du montage</b></p></div>
        <QuoteForm />
        <p className="directMail">Ou écrivez directement à <a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></p>
      </section>

      <footer className="shell"><a className="brand" href="#top"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a><p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p><div><a href="/services">Services</a><a href="#tarifs">Tarifs</a><a href="/feedback">Feedback</a><a href="/conditions-de-vente">Conditions</a><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="#contact">Contact</a></div><small>© 2026 BG EDITWORKS</small></footer>
    </main>
  );
}
