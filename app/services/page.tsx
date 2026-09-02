import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — BG EDITWORKS",
  description: "Montage vidéo, motion design, animation 2D et post-production à distance.",
};

const services = [
  {
    number: "01",
    id: "montage-video",
    title: "Montage vidéo",
    intro: "Transformer vos rushes en un contenu clair, rythmé et adapté à votre audience.",
    items: ["Dérushage et sélection des plans", "Construction narrative et rythme", "Montage musique et sound design", "Titres, transitions et habillage", "Interviews, YouTube, corporate et publicité", "Versions horizontales et verticales"],
    software: "Adobe Premiere Pro",
  },
  {
    number: "02",
    id: "motion-design",
    title: "Motion design",
    intro: "Renforcer le message avec des éléments graphiques animés sobres et cohérents.",
    items: ["Titres et typographies animées", "Lower thirds et cartouches", "Animation de logo", "Transitions graphiques", "Habillage de marque", "Tracking et intégration d’éléments"],
    software: "Adobe After Effects",
  },
  {
    number: "03",
    id: "animation-2d",
    title: "Animation 2D",
    intro: "Expliquer, présenter ou illustrer une idée grâce à une animation construite sur mesure.",
    items: ["Animation de formes et pictogrammes", "Kinetic typography", "Infographies animées", "Animation de personnages simple", "Vidéos explicatives", "Déclinaisons pour les réseaux sociaux"],
    software: "Adobe After Effects",
  },
  {
    number: "04",
    id: "post-production",
    title: "Post-production",
    intro: "Finaliser l’image et le son pour obtenir un fichier propre, cohérent et prêt à diffuser.",
    items: ["Nettoyage et équilibrage audio", "Mixage voix, musique et bruitages", "Correction colorimétrique", "Sous-titrage simple ou animé", "Recadrage multi-format", "Compression et presets d’export"],
    software: "Premiere Pro + After Effects",
  },
];

export default function ServicesPage() {
  return (
    <main className="subpage">
      <header className="nav shell">
        <a className="brand" href="/" aria-label="BG Editworks — accueil"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a>
        <nav aria-label="Navigation principale"><a href="/">Accueil</a><a href="/#tarifs">Tarifs</a><a href="/#portfolio">Portfolio</a><a href="/#apropos">À propos</a></nav>
        <a className="navCta" href="/devis">Demander un devis <span>↗</span></a>
      </header>

      <section className="serviceHero shell">
        <p className="eyebrow"><span /> Services de post-production</p>
        <h1>Vos rushes.<br /><em>Une vision finale.</em></h1>
        <div className="serviceHeroBottom"><p>BG EDITWORKS intervient exclusivement en post-production. Vous fournissez les images ; je prends en charge leur transformation jusqu’aux exports finaux.</p><span>Premiere Pro · After Effects · À distance</span></div>
      </section>

      <section className="serviceDetails shell">
        {services.map((service) => <article id={service.id} key={service.id}>
          <div className="serviceNumber"><span>{service.number}</span><small>{service.software}</small></div>
          <div className="serviceTitle"><h2>{service.title}</h2><p>{service.intro}</p></div>
          <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </section>

      <section className="projectInputs">
        <div className="shell inputsGrid">
          <div><p className="kicker">Pour démarrer</p><h2>Ce qu’il faut<br /><em>me transmettre.</em></h2></div>
          <div className="inputList">
            <article><span>01</span><h3>Les rushes</h3><p>Les fichiers vidéo et audio originaux, idéalement classés par séquence ou par journée.</p></article>
            <article><span>02</span><h3>Le brief</h3><p>L’objectif, le public, le format final, la durée souhaitée et la date de livraison.</p></article>
            <article><span>03</span><h3>L’identité</h3><p>Logo, couleurs, polices, éléments graphiques et règles de marque disponibles.</p></article>
            <article><span>04</span><h3>Les références</h3><p>Des exemples de rythme, d’ambiance ou de style qui correspondent à votre intention.</p></article>
          </div>
        </div>
      </section>

      <section className="contact shell serviceCta">
        <p className="eyebrow"><span /> Votre projet</p><h2>Prêt à passer<br /><em>en post-production ?</em></h2><p className="contactIntro">Choisissez une prestation ou un pack, puis envoyez les premières informations pour recevoir un devis adapté.</p><a className="button primary large" href="/devis">Configurer mon projet <span>↗</span></a>
      </section>

      <footer className="shell"><a className="brand" href="/"><span className="brandMark">BG</span><span className="brandText">EDITWORKS</span></a><p>Bertrand · Studio indépendant<br />Montage · Motion design · Animation 2D</p><div><a href="/">Accueil</a><a href="/#tarifs">Tarifs</a><a href="/conditions-de-vente">Conditions</a><a href="/mentions-legales">Mentions légales</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="/#contact">Contact</a></div><small>© 2026 BG EDITWORKS</small></footer>
    </main>
  );
}
