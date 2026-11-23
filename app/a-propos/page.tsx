import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le studio — Bertrand, monteur vidéo | BG EDITWORKS",
  description: "Je m'appelle Bertrand : 20 ans en cuisine gastronomique en Europe, aujourd'hui monteur vidéo et motion designer. Un seul interlocuteur, en français, anglais ou allemand.",
};

const css = `
.studio-page{min-height:100vh;background:#0b0b0c;color:#ece9e6}
.studio-wrap{display:grid;grid-template-columns:minmax(260px,420px) 1fr;gap:56px;padding:64px 6vw 96px;max-width:1200px;margin:0 auto;align-items:start}
.studio-photo{width:100%;aspect-ratio:1/1;object-fit:cover;border:1px solid #ffffff20;display:block}
.studio-text h1{font-size:clamp(40px,6vw,76px);line-height:.95;margin:0 0 24px;text-transform:uppercase}
.studio-text h1 em{color:var(--red,#e5322d);font-style:italic}
.studio-hook{font-size:22px;line-height:1.5;color:#ece9e6;margin:0 0 30px;max-width:640px}
.studio-text p{font-size:17px;line-height:1.75;color:#d6d2ce;margin:0 0 18px}
.studio-list{padding:0;margin:26px 0;list-style:none}
.studio-list li{padding:12px 0;border-top:1px solid #ffffff14}
.studio-list li::before{content:"— ";color:var(--red,#e5322d)}
.studio-review{margin:28px 0 8px;padding:22px 26px;border:1px solid #ffffff20;border-left:3px solid var(--red,#e5322d);background:#ffffff08}
.studio-review p{margin:0;font-size:17px;color:#ece9e6}
.studio-review div{margin-top:12px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#a9a4a0}
.studio-review b{color:var(--red,#e5322d)}
.studio-cta{display:flex;flex-wrap:wrap;gap:18px;align-items:center;margin-top:28px}
.studio-cta a.studio-link{color:#ece9e6}
@media (max-width:760px){.studio-wrap{grid-template-columns:1fr;gap:32px;padding:40px 16px 72px}}
`;

export default function StudioPage() {
  return <main className="legal-page studio-page">
    <style>{css}</style>
    <header className="legal-nav">
      <Link className="brand" href="/"><span>BG</span><b>EDITWORKS</b></Link>
      <Link className="legal-back" href="/">← Retour au site</Link>
    </header>

    <section className="studio-wrap">
      <img className="studio-photo" src="/bertrand-georges.webp" alt="Bertrand, monteur vidéo et motion designer de BG EDITWORKS" width={560} height={560} />
      <div className="studio-text">
        <p className="kicker">LE STUDIO</p>
        <h1>Je m’appelle<br/><em>Bertrand.</em></h1>
        <p className="studio-hook">20 ans en cuisine gastronomique. Aujourd’hui, je monte vos vidéos avec la même exigence.</p>
        <p>Derrière BG EDITWORKS, il n’y a pas d’agence : c’est moi qui monte chacune de vos vidéos, du premier échange à la livraison.</p>
        <p>Le montage vidéo est ma reconversion professionnelle, après 20 ans dans la restauration gastronomique, comme cuisinier puis chef, en Angleterre, au Luxembourg et pendant 13 ans en Allemagne, près de Francfort. J’en garde la rigueur, le sens du timing et l’exigence du détail, que je mets aujourd’hui au service de vos vidéos.</p>
        <p>Je travaille sur Premiere Pro et After Effects, à distance, pour des clients en France et en Europe. Vous pouvez échanger avec moi en français, en anglais ou en allemand.</p>
        <p><strong>Avec moi, vous avez un seul interlocuteur.</strong> Vous me parlez directement, sans intermédiaire, et chaque retour est pris en compte.</p>
        <ul className="studio-list">
          <li>Un devis clair avant de commencer</li>
          <li>Des échanges par écrit, pour que rien ne se perde</li>
          <li>Des fichiers livrés aux bons formats pour vos réseaux</li>
        </ul>
        <blockquote className="studio-review">
          <p>« Le travail a été fait rapidement et très bien fait. La communication a été fluide et la compréhension du projet a été instantanée. Je suis très satisfaite du service. »</p>
          <div><b>Cliente anonyme · Canada</b> · Montage vidéo pour les réseaux sociaux · 5/5</div>
        </blockquote>
        <div className="studio-cta">
          <Link className="button button-primary" href="/devis">Demander un devis <span>↘</span></Link>
          <a className="studio-link" href="tel:+33614422782">06 14 42 27 82</a>
          <a className="studio-link" href="mailto:bgeditworks@gmail.com">bgeditworks@gmail.com</a>
        </div>
      </div>
    </section>
  </main>;
}
