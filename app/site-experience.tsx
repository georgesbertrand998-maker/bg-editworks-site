"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { n: "01", title: "Montage vidéo", tool: "Premiere Pro", image: "/process-ajustements.webp", position: "center", text: "Interviews, contenus de marque, formats YouTube et réseaux sociaux : un montage précis, rythmé et pensé pour votre audience." },
  { n: "02", title: "Motion Design", tool: "After Effects", image: "/process-creation.webp", position: "center", text: "Titres, habillages graphiques, logos animés et transitions sur mesure pour donner une identité forte à vos contenus." },
  { n: "03", title: "Animation 2D", tool: "Design en mouvement", image: "/process-echange.webp", position: "center 42%", text: "Des animations claires et modernes pour expliquer, promouvoir ou raconter votre message avec impact." },
  { n: "04", title: "Post-production", tool: "Image · Son · Export", image: "/process-cadrage.webp", position: "center", text: "Étalonnage, nettoyage audio, sous-titrage et exports optimisés pour chaque canal de diffusion." },
];

const projects = [
  { type: "MONTAGE · INTERVIEW", title: "Portrait de marque", mark: "01", image: "/process-ajustements.webp", position: "center" },
  { type: "MOTION DESIGN", title: "Identité en mouvement", mark: "02", image: "/process-creation.webp", position: "center" },
  { type: "ANIMATION 2D", title: "Expliquer en images", mark: "03", image: "/process-echange.webp", position: "center 42%" },
];

const animationNotes = [
  ["Géométrique", "Cercle, carré et arc se combinent progressivement pour composer le logo."],
  ["Glitch", "Déformation numérique, balayages et lignes lumineuses donnent une énergie digitale."],
  ["Cartoon", "Lettres colorées, fond à rayons et étincelles installent un ton illustré et dynamique."],
  ["Encre", "Une tache d’encre révèle le logo sur une matière papier texturée."],
  ["Cinématique", "Logo en relief, profondeur et halos lumineux créent une présentation premium."],
  ["Prestige", "Cadre doré, logo métallique et particules composent une finition élégante."],
];

const steps = [
  ["01", "Échange", "Vous partagez votre objectif, vos références et vos fichiers."],
  ["02", "Cadrage", "Le besoin, le planning et les livrables sont formalisés dans un devis."],
  ["03", "Création", "Le montage et les animations prennent forme avec des points d'étape clairs."],
  ["04", "Ajustements", "Corrections selon les conditions définies dans le devis."],
  ["05", "Livraison", "Vous recevez les fichiers finaux, optimisés pour leur destination."],
];

const packagesByAudience = {
  particulier: [
    { name: "Montage personnel premium", price: "480 €", description: "Pour transformer vos vidéos personnelles en un film propre, rythmé et agréable à partager.", details: ["Échange et cadrage du besoin", "Jusqu’à 30 min de rushes", "Montage jusqu’à 3 min livrées", "Coupes, rythme et transitions sobres", "Titrage simple", "Correction image et son de base", "1 format d’export", "Corrections selon le devis"] },
    { name: "Créateur & réseaux", price: "690 €", featured: true, description: "Pour YouTube, Instagram, TikTok ou une présentation personnelle avec davantage d’impact.", details: ["Jusqu’à 45 min de rushes", "Montage jusqu’à 5 min livrées", "Rythme dynamique et storytelling", "Titres animés simples", "Sous-titres simples", "Traitement image et son", "1 déclinaison de format", "Corrections selon le devis"] },
    { name: "Film souvenir / événement", price: "950 €", description: "Pour raconter un anniversaire, un voyage, une cérémonie ou un événement à partir de vos images.", details: ["Jusqu’à 90 min de rushes", "Montage jusqu’à 10 min livrées", "Construction narrative", "Musique et titrage", "Transitions et habillage adaptés", "Harmonisation image et son", "1 format d’export", "Livraison numérique"] },
  ],
  professionnel: [
    { name: "Montage professionnel", price: "650 €", description: "Pour une interview, une présentation, une vidéo de marque ou un contenu éditorial.", details: ["Brief et cadrage professionnel", "Jusqu’à 45 min de rushes", "Montage jusqu’à 3 min livrées", "Intégration de votre identité visuelle", "Titrage et transitions", "Traitement image et son", "1 format d’export", "Droits définis dans le devis"] },
    { name: "Montage + Motion", price: "890 €", featured: true, description: "Pour une vidéo de marque enrichie de titres animés et d’un habillage graphique cohérent.", details: ["Jusqu’à 60 min de rushes", "Montage jusqu’à 5 min livrées", "Titres et habillage sur After Effects", "Jusqu’à 5 éléments en motion design", "Sous-titres simples", "Traitement image et son renforcé", "2 formats d’export", "Corrections selon le devis"] },
    { name: "Campagne multi-format", price: "1 450 €", description: "Pour une campagne, un lancement ou une série de contenus déclinés sur plusieurs canaux.", details: ["Jusqu’à 90 min de rushes", "1 montage principal jusqu’à 8 min", "Jusqu’à 3 déclinaisons courtes", "Motion design personnalisé", "Étalonnage et traitement audio avancés", "Exports multi-plateformes", "Organisation des livrables", "Planning et droits définis au devis"] },
  ],
};

const professionalOptions = [
  ["Déclinaison multi-format", "95 €", "par format supplémentaire · vertical, carré ou horizontal"],
  ["Habillage de marque", "180 €", "titres, couleurs et éléments graphiques de votre identité"],
  ["Export multi-plateformes", "inclus", "livraison adaptée aux canaux prévus au devis"],
  ["Livraison prioritaire", "+ 35 %", "sous réserve de disponibilité"],
];

const options = [
  ["Montage à l’heure", "40 €", "tout compris · minimum 2 h"],
  ["Pack 5 heures", "190 €", "prépayé · remise de 5 % · valable 3 mois"],
  ["Pack 10 heures", "360 €", "prépayé · remise de 10 % · valable 3 mois"],
  ["Rushes supplémentaires", "120 €", "par tranche de 30 min"],
  ["Sous-titrage", "90 €", "jusqu’à 5 min"],
  ["Format supplémentaire", "95 €", "vertical, carré ou horizontal"],
  ["Miniature / visuel de couverture", "75 €", "1 proposition"],
  ["Étalonnage avancé", "190 €", "harmonisation et look renforcé"],
  ["Nettoyage audio avancé", "140 €", "selon la qualité des sources"],
  ["Motion design supplémentaire", "260 €", "module graphique simple"],
  ["Animation 2D personnalisée", "420 €", "séquence courte"],
  ["Animation 3D de base", "450 €", "brief précis · une version livrée · logo, texte ou objet simple"],
  ["Remise des fichiers sources", "180 €", "si techniquement possible et prévu"],
  ["Livraison prioritaire", "+ 35 %", "sous réserve de disponibilité"],
];

export function SiteExperience({ focus }: { focus?: string } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [audience, setAudience] = useState<keyof typeof packagesByAudience>("professionnel");
  useEffect(() => {

    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: .12 });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [focus, audience]);
  useEffect(() => {
    if (!focus) return;
    const timer = window.setTimeout(() => document.getElementById(focus)?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
    return () => window.clearTimeout(timer);
  }, [focus]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape" && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); } };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const ServicesHeading = focus === "services" ? "h1" : "h2";
  const OffersHeading = focus === "offres" || focus === "options" ? "h1" : "h2";
  const PortfolioHeading = focus === "portfolio" ? "h1" : "h2";
  const MethodHeading = focus === "methode" ? "h1" : "h2";
  const StudioHeading = focus === "studio" ? "h1" : "h2";
  const close = () => setMenuOpen(false);
  return <main className={focus ? `focus-${focus}` : undefined}>
    <header className="nav-shell">
      <a className="brand" href="/" aria-label="BG Editworks, accueil"><span>BG</span><b>EDITWORKS</b></a>
      <button ref={menuButton} className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation-principale" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}><i/><i/></button>
      <nav id="navigation-principale" className={menuOpen ? "open" : ""} aria-label="Navigation principale">
        <a onClick={close} href="/services">Services</a><a onClick={close} href="/offres">Offres & tarifs</a><a onClick={close} href="/options">Options</a><a onClick={close} href="/portfolio">Portfolio</a><a onClick={close} href="/methode">Méthode</a><a onClick={close} href="/a-propos">Le studio</a>
        <a onClick={close} href="/feedback">Avis clients</a><a onClick={close} className="nav-cta" href="/devis">Devis en ligne</a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-scene" aria-hidden="true"><div className="smoke smoke-a"/><div className="smoke smoke-b"/><div className="camera"><span className="reel reel-a"/><span className="reel reel-b"/><span className="camera-body"/><span className="lens"/><span className="tripod"/></div><div className="scanline"/></div>
      <div className="hero-copy">
        <p className="eyebrow"><span/> Studio indépendant de post-production</p>
        <h1>DONNEZ DU <em>RYTHME</em><br/>À VOS IMAGES.</h1>
        <p className="hero-lead">Montage vidéo, motion design et animation 2D pour transformer vos rushes en contenus qui captent l’attention.</p>
      <div className="hero-actions"><a className="button button-primary" href="/offres">Voir les offres <span>↘</span></a><a className="button button-ghost" href="/devis">Devis en ligne</a></div>
      </div>
      <div className="hero-index" aria-hidden="true">PLAY <span>00:01:24</span></div>
      <a className="scroll" href="/services"><span/> DÉFILER</a>
    </section>

    <section className="statement" data-reveal><p>UNE IDÉE. DES RUSHES.</p><h2>UN RÉCIT QUI<br/><em>RESTE EN TÊTE.</em></h2><p className="statement-note">Chaque coupe, chaque mouvement et chaque silence servent une intention.</p></section>

    <section className="section services" id="services">
      <div className="section-heading" data-reveal><p className="kicker">01 — EXPERTISE</p><ServicesHeading>Un regard complet<br/>sur vos <em>images.</em></ServicesHeading></div>
      <div className="service-list">{services.map((service) => <article key={service.n} className="service" data-reveal><div className="service-image" style={{ backgroundImage: `url(${service.image})`, backgroundPosition: service.position }} aria-hidden="true"><span>{service.n}</span></div><div className="service-title"><p>{service.tool}</p><h3>{service.title}</h3></div><p className="service-text">{service.text}</p><span className="service-arrow">↗</span></article>)}</div>
    </section>

    <section className="section pricing" id="tarifs">
      <div className="section-heading split" id="offres" data-reveal><div><p className="kicker">02 — OFFRES & TARIFS</p><OffersHeading>{focus === "options" ? <>Options pour<br/><em>votre montage.</em></> : <>Choisissez votre<br/><em>profil.</em></>}</OffersHeading></div><p>Particulier ou professionnel : sélectionnez votre profil pour afficher les prestations adaptées. Tous les montants sont des prix de départ TTC, confirmés par un devis. TVA non applicable, art. 293 B du CGI.</p></div>
      <div className="audience-switch" role="tablist" aria-label="Choisir le type de client" data-reveal>
        <button role="tab" aria-selected={audience === "professionnel"} className={audience === "professionnel" ? "active" : ""} onClick={() => setAudience("professionnel")}><span>01</span> Je représente une entreprise</button>
        <button role="tab" aria-selected={audience === "particulier"} className={audience === "particulier" ? "active" : ""} onClick={() => setAudience("particulier")}><span>02</span> Je suis un particulier</button>
      </div>
      <div className="audience-summary" data-reveal><p>{audience === "particulier" ? "Vidéos personnelles, créateurs, réseaux sociaux, souvenirs et événements — montage réalisé à partir de vos propres rushes." : "Interviews, vidéos de marque, contenus éditoriaux, campagnes et déclinaisons multi-formats — avec un cadre de production professionnel."}</p><a href="/options">Voir les options <span>↓</span></a></div>
      <div className={`price-grid ${audience}`}>
        {packagesByAudience[audience].map((item) => <article className={item.featured ? "featured" : ""} data-reveal key={`${audience}-${item.name}`}><p className="price-tag">{item.name}</p><h3><small>À PARTIR DE · TTC</small> {item.price}</h3><p>{item.description}</p><ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul><a href="/devis">Construire mon devis <span>→</span></a></article>)}
      </div>
      <section className="time-offers" aria-labelledby="time-offers-title">
        <div className="option-intro"><h3 id="time-offers-title">Montage à la demi-journée ou à la journée</h3><p>Pour les particuliers et les professionnels, réservez un créneau consacré au montage de vos vidéos.</p></div>
        <div className="time-offers-grid">
          <article><h4>Demi-journée — 150 € TTC</h4><p>4 heures de travail consacrées à votre projet.</p></article>
          <article><h4>Tarif à la journée — 280 € TTC</h4><p>8 heures de travail consacrées à votre projet.</p></article>
        </div>
        <p className="time-offers-terms">Le contenu de la prestation et les livrables sont définis ensemble avant réservation. Le dérushage, le montage, les ajustements et les exports sont décomptés du temps réservé. Ces formules correspondent à un temps de travail, sans garantie de finalisation complète du projet dans ce créneau. Tout dépassement fait l’objet de votre accord préalable et d’un devis complémentaire.</p>
        <a className="button button-primary" href="/devis">Demander un devis</a>
      </section>
      {audience === "professionnel" && <section className="time-offers monthly-offers" aria-labelledby="monthly-offers-title">
        <div className="option-intro"><p className="kicker">COLLABORATIONS RÉGULIÈRES · PROFESSIONNELS</p><h3 id="monthly-offers-title">Un partenaire montage pour vos contenus réguliers</h3><p>Réservez un volume de journées consacré à vos projets et bénéficiez d’un tarif dégressif, d’un interlocuteur unique et d’un planning convenu à l’avance.</p></div>
        <div className="time-offers-grid monthly-offers-grid">
          {[
            { days: 4, hours: 32, price: "1 040", daily: 260, saving: 80, percent: "7,1", commitments: [{ months: 3, price: "1 020", daily: 255, saving: 100, percent: "8,9" }, { months: 6, price: "1 000", daily: 250, saving: 120, percent: "10,7" }] },
            { days: 8, hours: 64, price: "2 000", daily: 250, saving: 240, percent: "10,7", commitments: [{ months: 3, price: "1 960", daily: 245, saving: 280, percent: "12,5" }, { months: 6, price: "1 920", daily: 240, saving: 320, percent: "14,3" }] },
            { days: 12, hours: 96, price: "2 880", daily: 240, saving: 480, percent: "14,3", commitments: [{ months: 3, price: "2 820", daily: 235, saving: 540, percent: "16,1" }, { months: 6, price: "2 760", daily: 230, saving: 600, percent: "17,9" }] },
          ].map(offer => <article key={offer.days}><h4>{offer.days} jours par mois</h4><p>{offer.hours} heures de travail réservées</p><strong className="monthly-price">{offer.price} € TTC / mois</strong><p>Sans engagement · soit {offer.daily} € TTC par journée de 8 h</p><p className="monthly-saving">Économisez {offer.saving} €/mois · soit {offer.percent} %</p><div className="monthly-commitments" style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.12)" }}>{offer.commitments.map(c => <p key={c.months} style={{ margin: "6px 0" }}><strong>Engagement {c.months} mois : {c.price} € TTC / mois</strong><br/>Soit {c.daily} € TTC par journée · économisez {c.saving} €/mois ({c.percent} %)</p>)}</div></article>)}
        </div>
        <p className="time-offers-terms">Économies calculées par rapport à des journées réservées à l’unité à 280 € TTC, pour le même volume de travail.</p>
        <p className="time-offers-terms"><strong>Paiement et durée.</strong> Le prix est payé au début de chaque période mensuelle, qui commence à la date fixée au devis, et réserve le volume d’heures indiqué. Sans engagement : renouvellement d’un commun accord. Avec un engagement de 3 ou 6 mois : tarif réduit et volume fixé pour toute la durée, facturation à chaque période ; en cas d’arrêt anticipé à votre demande, effectif à la fin de la période en cours, la réduction déjà obtenue vous est refacturée.</p>
        <p className="time-offers-terms"><strong>Compris dans le temps réservé.</strong> Préparation et dérushage, montage, titres et habillage simples, traitement de base de l’image et du son, sous-titres simples, corrections et exports, décomptés au quart d’heure. À titre indicatif, non contractuel : 4 jours, jusqu’à 8 vidéos courtes ou 1 à 2 vidéos de 3 à 5 min ; 8 jours, jusqu’à 16 vidéos courtes ou 3 à 4 vidéos de 3 à 5 min, plus 1 élément de motion design simple ; 12 jours, jusqu’à 24 vidéos courtes ou 5 à 6 vidéos de 3 à 5 min, plus 2 éléments de motion design simples.</p>
        <p className="time-offers-terms"><strong>Hors forfait, sur devis.</strong> Animation 3D (dès 450 €), animation 2D personnalisée (dès 420 €), motion design élaboré, ressources payantes (musiques, images, polices), voix off, traduction, remise des fichiers sources et livraison prioritaire.</p>
        <p className="time-offers-terms"><strong>Suivi et heures non utilisées.</strong> Un récapitulatif du temps utilisé et du temps restant vous est envoyé à chaque livraison et en fin de période. Jusqu’à 25 % du volume (1, 2 ou 3 journées selon la formule) peuvent être reportés sur la période suivante uniquement ; au-delà, les heures non utilisées sont perdues et ne sont pas remboursées. Si le retard vient de BG EDITWORKS, toutes les heures sont reportées ; s’il n’y a pas de suite, elles restent utilisables un mois de plus ou vous sont remboursées. Si vos fichiers ou vos retours arrivent en retard, le temps réservé non utilisé suit cette même règle de report. Tout dépassement nécessite votre accord préalable et est facturé au tarif horaire de votre formule.</p>
        <a className="button button-primary" href="/devis?collaboration=1">Parlons de votre collaboration</a>
      </section>}
      <div className="option-panel" id="options" data-reveal>
        <div className="option-intro"><p className="kicker">OPTIONS À LA CARTE</p><h3>Complétez votre montage.</h3><p>Tarifs TTC indicatifs ajoutés au forfait de base. Chaque option est confirmée dans le devis avant le démarrage. TVA non applicable, art. 293 B du CGI.</p></div>
        <div className="option-grid">{options.filter(([name]) => name !== "Livraison prioritaire").map(([name, price, note]) => <article key={name}><div><h4>{name}</h4><p>{note}</p></div><strong><small>À PARTIR DE · TTC</small>{price}</strong></article>)}</div>
        {audience === "professionnel" && <div className="professional-options" data-reveal><div className="option-intro"><p className="kicker">POUR LES ENTREPRISES</p><h3>Options professionnelles.</h3><p>Des compléments pour diffuser votre contenu sur plusieurs canaux et respecter votre identité de marque.</p></div><div className="option-grid">{professionalOptions.map(([name, price, note]) => <article key={name}><div><h4>{name}</h4><p>{note}</p></div><strong><small>{price === "inclus" ? "DANS LE FORFAIT · TTC" : "À PARTIR DE · TTC"}</small>{price}</strong></article>)}</div></div>}
      </div>
      <p className="pricing-note" data-reveal><strong>Prix affichés TTC.</strong> En raison de la franchise en base de TVA, le prix HT est égal au prix TTC : TVA non applicable, art. 293 B du CGI. Prestations réalisées à partir des fichiers fournis par le client. BG EDITWORKS est un studio indépendant de post-production et ne propose pas de tournage dans ces forfaits. Toute musique, police, image ou ressource payante nécessitant une licence est chiffrée séparément.</p>
      <div className="conditions" data-reveal><p className="kicker">CONDITIONS DE COLLABORATION</p><div><p><b>Devis avant démarrage.</b> Le périmètre, le calendrier, les livrables et le tarif sont validés avant le début de la prestation.</p><p><b>Brief précis.</b> Pour l’animation 3D de base, le client fournit avant démarrage la référence, la durée, le format, les éléments graphiques et le résultat attendu. Une seule version est livrée.</p><p><b>Corrections encadrées.</b> Toute nouvelle version, changement de direction ou demande hors périmètre fait l’objet d’un complément après accord.</p><p><b>Paiement et droits.</b> L’échéancier, les éventuels acomptes et la cession des droits d’utilisation sont précisés dans le devis.</p></div></div>
    </section>

    <section className="section work" id="portfolio">
      <div className="section-heading split" data-reveal><div><p className="kicker">03 — SÉLECTION</p><PortfolioHeading>Showreel<br/><em>BG EDITWORKS.</em></PortfolioHeading></div><p><strong>Portfolio en cours de construction.</strong> Exemples présentés à titre de démonstration : une compilation de travaux en montage vidéo, motion design et animation 2D, réunie dans un montage rythmé avec transitions en fondu et bande-son dédiée.</p></div>
      <article className="showreel-card" data-reveal><video className="showreel-video" controls preload="metadata" poster="/showreel-apercu.jpg" aria-label="Showreel BG EDITWORKS : compilation de démonstrations"><source src="/showreel.mp4" type="video/mp4"/>Votre navigateur ne prend pas en charge la vidéo.</video><div className="showreel-copy"><p className="kicker">SHOWREEL · MONTAGE & ANIMATION</p><h3>Donner du rythme à vos images.</h3><p>Exemple de compilation réunissant six identités animées, montées et enchaînées avec une transition en fondu et une bande-son dédiée.</p><div className="showreel-notes">{animationNotes.map(([title, text]) => <div key={title}><strong>{title}</strong><span>{text}</span></div>)}</div></div></article>
      <article className="showreel-card" style={{ marginTop: 28 }} data-reveal><video className="showreel-video" controls preload="metadata" playsInline aria-label="Création événementielle TOTEM SOLAIRE" poster="/totem-solaire.jpg"><source src="/totem-solaire.mp4" type="video/mp4"/>Votre navigateur ne prend pas en charge la vidéo.</video><div className="showreel-copy"><p className="kicker">CRÉATION ÉVÉNEMENTIELLE · ÉLECTRO</p><h3>TOTEM SOLAIRE</h3><p>Une création audiovisuelle pour un événement électro, mêlant montage rythmé, ambiances immersives et habillage visuel.</p><div className="showreel-notes"><div><strong>Montage</strong><span>Sélection et enchaînement des plans, progression de l’ambiance et rythme sur la musique.</span></div><div><strong>Transitions</strong><span>Déformations, poussées de zoom et secousses ponctuelles pour accentuer les temps forts.</span></div><div><strong>Habillage</strong><span>Présentation de BG EDITWORKS en ouverture, titrage animé et intégration du logo TOTEM SOLAIRE.</span></div><div><strong>Colorimétrie</strong><span>Correction colorimétrique et étalonnage : harmonisation des plans et look cinématographique aux ombres bleu-vert et aux lumières orangées.</span></div><div><strong>Finition</strong><span>Montage et composition en 4K, avec une version optimisée pour la diffusion web.</span></div></div><p>Format horizontal · 1 min 35 s</p></div></article>
      <article className="portfolio-video-card" data-reveal><div className="portfolio-video-frame"><video controls preload="metadata" playsInline poster="/sherbrooke-apercu.jpg" aria-label="Réel du Marché de Noël de la Gare de Sherbrooke"><source src="/sherbrooke-reel.mp4" type="video/mp4"/>Votre navigateur ne prend pas en charge la vidéo.</video></div><div className="portfolio-video-copy"><p className="kicker">PROJET À LA DEMANDE D’UN CLIENT · FORMAT SOCIAL</p><h3>Marché de Noël de la Gare de Sherbrooke.</h3><p>Un réel réalisé à la demande du client à partir de ses images, pour restituer l’ambiance festive du marché dans un format vertical. Le client a apprécié le résultat.</p><div className="showreel-notes"><div><strong>Montage & cadrage</strong><span>Sélection des moments forts, remontage court et recadrage plan par plan au format vertical 9:16.</span></div><div><strong>Étalonnage</strong><span>Harmonisation des plans et travail des contrastes et des couleurs pour accompagner l’ambiance de Noël.</span></div><div><strong>Typographie & habillage</strong><span>Création de titres animés, intégration des dates et du logo, habillage dans l’univers visuel de l’événement.</span></div><div><strong>Rythme & son</strong><span>Adaptation du montage et des raccords à la musique fournie.</span></div></div><p>Format vertical · 1080 × 1920 · environ 15 secondes<br/>Images et musique fournies par le client · Post-production BG EDITWORKS</p></div></article>
      <article className="portfolio-video-card" data-reveal><div className="portfolio-video-frame"><video controls preload="metadata" playsInline poster="/lysandre-fils-affiche.jpg" aria-label="Réel publicitaire haute joaillerie Lysandre & Fils"><source src="/lysandre-fils-reel.mp4" type="video/mp4"/>Votre navigateur ne prend pas en charge la vidéo.</video></div><div className="portfolio-video-copy"><p className="kicker">PROJET DE DÉMONSTRATION · MARQUE FICTIVE · FORMAT SOCIAL</p><h3>Lysandre &amp; Fils, haute joaillerie.</h3><p>Un réel publicitaire de 30 secondes pour une maison de joaillerie fictive de Lausanne : une seule bague, mise en valeur comme sur une vitrine tournante, avec un récit qui accompagne le regard jusqu’aux coordonnées de la maison.</p><div className="showreel-notes"><div><strong>Montage & rythme</strong><span>Six plans longs ralentis par interpolation optique, fondus enchaînés et coupes calés sur les attaques de la musique.</span></div><div><strong>Étalonnage & retouche</strong><span>Noirs profonds, hautes lumières maîtrisées, or rose préservé ; gravure de marque d’origine floutée par masques.</span></div><div><strong>Typographie & récit</strong><span>Textes animés en Bodoni Moda synchronisés sur la musique, placés dans la zone sûre des réseaux, carte de fin avec coordonnées.</span></div><div><strong>Son</strong><span>Musique piano et violon, extrait choisi pour s’éteindre sur la carte de fin, niveau normalisé pour le web.</span></div></div><p>Format vertical · 2160 × 3840 (4K) · 30 secondes<br/>Images Pexels (Quang Viet Nguyen) · Musique Mixkit · Post-production BG EDITWORKS</p></div></article>
      <article className="portfolio-video-card" data-reveal><div className="portfolio-video-frame"><video controls preload="metadata" playsInline aria-label="Exercice de montage vidéo café"><source src="/cafe-exercice-vertical.mp4" type="video/mp4"/>Votre navigateur ne prend pas en charge la vidéo.</video></div><div className="portfolio-video-copy"><p className="kicker">EXEMPLE · EXERCICE DE FORMATION</p><h3>Montage vidéo café.</h3><p>Exercice de mise en scène autour de la préparation d’un café, avec un traitement vertical pensé pour les formats sociaux et la démonstration du rythme, du cadrage et des raccords.</p></div></article>
      <div className="project-grid">{projects.map((project, i) => <article className={`project project-${i+1}`} key={project.mark} data-reveal><div className="project-visual" style={{backgroundImage: `linear-gradient(180deg,#05050622,#050506cc), url(${project.image})`, backgroundPosition: project.position}}><span className="frame-corner tl"/><span className="frame-corner br"/><b>{project.mark}</b><div className="timeline">{[1,2,3,4,5,6,7,8].map(n => <i key={n}/>)}</div><span className="concept-badge">Illustration de prestation</span></div><p>{project.type}</p><h3>{project.title}</h3></article>)}</div>
    </section>

    <section className="section process" id="methode">
      <div className="section-heading" data-reveal><p className="kicker">04 — PROCESSUS</p><MethodHeading>Simple. Clair.<br/><em>Maîtrisé.</em></MethodHeading></div>
      <div className="steps">{steps.map(step => <article key={step[0]} data-reveal><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
    </section>

    <section className="studio" id="studio">
      <div className="studio-visual" aria-hidden="true"><div className="monitor"><span>BG</span><i/><i/><i/></div><div className="desk"/></div>
      <div className="studio-copy" data-reveal><p className="kicker">05 — LE STUDIO</p><StudioHeading>Un interlocuteur.<br/><em>Une vision.</em></StudioHeading><p>BG EDITWORKS est un studio indépendant : votre projet est suivi de bout en bout par une seule personne, avec une communication directe et un soin constant.</p><p>La souplesse d’un indépendant, avec une méthode structurée et une exigence professionnelle.</p><a className="text-link" href="/a-propos">DÉCOUVRIR LE STUDIO <span>→</span></a></div>
    </section>

    <section className="section client-feedback" id="avis-clients" aria-labelledby="avis-clients-title">
      <p className="kicker">APRÈS LA LIVRAISON</p>
      <h2 id="avis-clients-title">VOTRE PROJET.<br/><em>VOTRE RETOUR.</em></h2>
      <p>Le résultat, les échanges, les points à améliorer : racontez votre expérience avec BG EDITWORKS.</p>
      <a className="button button-primary" href="/feedback">Laisser un avis <span aria-hidden="true">↗</span></a>
      <p className="feedback-disclosure">Votre retour peut rester privé. Toute publication nécessite votre autorisation et une vérification de la prestation.</p>
    </section>

    <section className="contact" id="contact">
      <p className="kicker" data-reveal>06 — CONTACT</p><h2 data-reveal>VOTRE PROCHAIN FILM<br/>COMMENCE <em>ICI.</em></h2>
      <div className="contact-row" data-reveal><div className="contact-details"><a className="phone" href="tel:+33614422782">06 14 42 27 82 <span>↗</span></a><a className="email" href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com <span>↗</span></a></div><div className="contact-actions"><a className="button button-primary" href="/devis">Devis en ligne</a><a className="button button-ghost" href="tel:+33614422782">Appeler le studio</a></div></div>
      <p className="contact-note">Disponible pour des collaborations à distance · France</p>
    </section>

    <footer><a className="brand" href="/"><span>BG</span><b>EDITWORKS</b></a><p>Studio indépendant de post-production<br/>Montage · Motion Design · Animation 2D<br/><a href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a></p><div><a href="/services">Services</a><a href="/offres">Particuliers</a><a href="/offres">Professionnels</a><a href="/options">Options</a><a href="/devis">Devis en ligne</a><a href="/#contact">Contact</a><a href="/feedback">Avis clients</a><a href="/mentions-legales">Mentions légales</a></div><small>© 2026 Bertrand Paul Emmanuel GEORGES EI — BG EDITWORKS</small></footer>
  </main>;
}
