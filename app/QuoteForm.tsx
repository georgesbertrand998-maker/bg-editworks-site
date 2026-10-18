"use client";

import { useEffect, useMemo, useState } from "react";
import { billableHours } from "./hourly-pricing";

const packages = {
  particulier: [
    ["Montage personnel premium", 480],
    ["Créateur & réseaux", 690],
    ["Film souvenir / événement", 950],
  ],
  professionnel: [
    ["Montage professionnel", 650],
    ["Montage + Motion", 890],
    ["Campagne multi-format", 1450],
  ],
} as const;

const monthlyPlans = [
  { name: "Collaboration 4 jours / mois", hours: 32, prices: [1040, 1020, 1000] },
  { name: "Collaboration 8 jours / mois", hours: 64, prices: [2000, 1960, 1920] },
  { name: "Collaboration 12 jours / mois", hours: 96, prices: [2880, 2820, 2760] },
] as const;

const engagements = ["Sans engagement", "Engagement 3 mois", "Engagement 6 mois"] as const;

const options = [
  ["Sous-titrage", 90], ["Format supplémentaire", 95],
  ["Miniature / visuel", 75], ["Étalonnage avancé", 190],
  ["Nettoyage audio avancé", 140], ["Motion design supplémentaire", 260],
  ["Animation 2D personnalisée", 420], ["Livraison prioritaire", 0],
] as const;

export default function QuoteForm() {
  const [audience, setAudience] = useState<keyof typeof packages>("particulier");
  const [packageIndex, setPackageIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [requestedHours, setHours] = useState(0);
  const [engagement, setEngagement] = useState(0);
  useEffect(() => {
    const plan = Number(new URLSearchParams(window.location.search).get("collaboration"));
    if (plan >= 1 && plan <= monthlyPlans.length) { setAudience("professionnel"); setPackageIndex(packages.professionnel.length + plan - 1); }
  }, []);
  const monthly = audience === "professionnel" && packageIndex >= packages.professionnel.length ? monthlyPlans[packageIndex - packages.professionnel.length] : null;
  const packageName = monthly ? monthly.name : packages[audience][packageIndex]?.[0] ?? "";
  const hours = monthly ? 0 : billableHours(requestedHours);
  const base = monthly ? monthly.prices[engagement] : packages[audience][packageIndex]?.[1] ?? 0;
  const hourlyTotal = hours * 40;
  const activeOptions = monthly ? [] : selected;
  const fixedOptionsTotal = activeOptions.reduce((sum, name) => name === "Livraison prioritaire" ? sum : sum + (options.find((item) => item[0] === name)?.[1] ?? 0), 0);
  const prioritySupplement = activeOptions.includes("Livraison prioritaire") ? Math.round((base + fixedOptionsTotal + hourlyTotal) * .35) : 0;
  const total = base + fixedOptionsTotal + hourlyTotal + prioritySupplement;
  const mailBody = useMemo(() => monthly
    ? `Bonjour,\n\nJe souhaite une collaboration mensuelle : ${monthly.name} (${monthly.hours} heures par période).\nFormule : ${engagements[engagement]}.\nTarif indicatif : ${total.toLocaleString("fr-FR")} € TTC par mois.\nDate de début souhaitée : \nTypes de vidéos et volume prévu : \n\nMerci,`
    : `Bonjour,\n\nJe souhaite une estimation pour ${packageName}.\nOptions : ${activeOptions.join(", ") || "aucune"}.\nHeures supplémentaires hors forfait : ${hours || 0}.\nEstimation indicative TTC : ${total.toLocaleString("fr-FR")} €.\n\nMerci,`, [monthly, engagement, packageName, activeOptions, hours, total]);
  const toggle = (name: string) => setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  return <div className="quote-layout">
    <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
      <p className="kicker">ESTIMATION EN LIGNE</p>
      <h1>Construisez votre <em>devis.</em></h1>
      <p className="quote-intro">Sélectionnez votre profil, une formule et les options utiles. Le montant se met à jour en temps réel ; le devis définitif est confirmé avant tout démarrage.</p>
      <fieldset><legend>Vous êtes</legend><div className="quote-audience">
        <button type="button" aria-pressed={audience === "particulier"} className={audience === "particulier" ? "selected" : ""} onClick={() => { setAudience("particulier"); setPackageIndex(0); }}>Particulier</button>
        <button type="button" aria-pressed={audience === "professionnel"} className={audience === "professionnel" ? "selected" : ""} onClick={() => { setAudience("professionnel"); setPackageIndex(0); }}>Entreprise</button>
      </div></fieldset>
      <fieldset><legend>Formule de départ</legend><div className="quote-choices">{packages[audience].map(([name, price], index) => <label key={name} className={packageIndex === index ? "selected" : ""}><input type="radio" name="package" checked={packageIndex === index} onChange={() => setPackageIndex(index)} /><span><b>{name}</b><small>À partir de {price.toLocaleString("fr-FR")} € TTC</small></span></label>)}</div></fieldset>
      {audience === "professionnel" && <fieldset><legend>Ou une collaboration mensuelle</legend><p className="field-note">Un volume d’heures réservé chaque mois pour vos contenus réguliers, au tarif dégressif.</p><div className="quote-choices">{monthlyPlans.map((plan, i) => { const index = packages.professionnel.length + i; return <label key={plan.name} className={packageIndex === index ? "selected" : ""}><input type="radio" name="package" checked={packageIndex === index} onChange={() => setPackageIndex(index)} /><span><b>{plan.name}</b><small>{plan.hours} h · dès {plan.prices[2].toLocaleString("fr-FR")} € TTC / mois</small></span></label>; })}</div></fieldset>}
      {monthly && <fieldset><legend>Engagement</legend><div className="quote-choices">{engagements.map((label, i) => <label key={label} className={engagement === i ? "selected" : ""}><input type="radio" name="engagement" checked={engagement === i} onChange={() => setEngagement(i)} /><span><b>{label}</b><small>{monthly.prices[i].toLocaleString("fr-FR")} € TTC / mois</small></span></label>)}</div><p className="field-note">Le temps réservé couvre la préparation, le montage, les corrections et les exports. Les options hors forfait (animation 3D, ressources payantes…) sont chiffrées au devis. Report des heures, dépassements et arrêt anticipé : voir les <a href="/conditions-de-vente">conditions de commande</a>, article 04.</p></fieldset>}
      {!monthly && <><fieldset><legend>Options hors inclusions du forfait</legend><p className="field-note">Ajoutez uniquement les besoins qui dépassent les éléments déjà inclus dans votre formule. Le périmètre et les éventuels suppléments seront confirmés ensemble dans le devis.</p><div className="quote-options">{options.map(([name, price]) => <label key={name}><input type="checkbox" checked={selected.includes(name)} onChange={() => toggle(name)} /><span>{name}</span><b>{price ? `+ ${price} €` : "+ 35 %"}</b></label>)}</div></fieldset>
      <fieldset><legend>Travail supplémentaire hors forfait</legend><p className="field-note">40 € TTC par heure, minimum 2 heures (80 € TTC). Uniquement pour les demandes non incluses dans la prestation choisie : corrections au-delà des allers-retours inclus, nouveaux rushs ou changement de direction. Les corrections prévues au devis restent incluses. Tout supplément est chiffré et accepté avant sa réalisation. Cette option est facultative.</p><input className="hours-input" type="number" min="0" step="any" aria-label="Nombre d’heures de travail supplémentaire hors forfait" aria-describedby="hourly-minimum" value={requestedHours || ""} placeholder="Nombre d’heures" onChange={(event) => setHours(Math.max(0, Number(event.target.value) || 0))} /><p id="hourly-minimum" className="field-note" aria-live="polite">{requestedHours > 0 && requestedHours < 2 ? "Minimum de facturation appliqué : 2 heures, soit 80 € TTC en complément du forfait." : "Option facultative : 0 € sans heures ; sinon 2 heures minimum à 80 € TTC, puis 40 € TTC par heure supplémentaire."}</p></fieldset></>}
    </form>
    <aside className="quote-summary"><p className="kicker">ESTIMATION INDICATIVE</p><strong role="status" aria-live="polite" aria-atomic="true">{total.toLocaleString("fr-FR")} €</strong><span>{monthly ? "Par mois · " : ""}TTC · TVA non applicable, art. 293 B du CGI</span><div className="quote-line-items"><div><span>{packageName}{monthly ? ` · ${engagements[engagement].toLowerCase()}` : ""}</span><b>{base.toLocaleString("fr-FR")} €</b></div>{activeOptions.map((name) => <div key={name}><span>{name}</span><b>{name === "Livraison prioritaire" ? "+ 35 %" : `+ ${(options.find((item) => item[0] === name)?.[1] ?? 0).toLocaleString("fr-FR")} €`}</b></div>)}{hours > 0 && <div><span>Travail supplémentaire hors forfait · {hours} h</span><b>+ {hourlyTotal.toLocaleString("fr-FR")} €</b></div>}</div><p>Ce montant est une estimation, pas une facture : le périmètre, les livrables, les délais, les corrections et le prix final seront confirmés dans le devis accepté avant le début de la prestation.</p><a className="button button-primary" href={`mailto:bgeditworks@gmail.com?subject=Demande%20de%20devis%20en%20ligne%20-%20BG%20EDITWORKS&body=${encodeURIComponent(mailBody)}`}>Préparer ma demande par e-mail <span>↗</span></a><p>Ouvre votre messagerie avec le récapitulatif prérempli. La demande sera envoyée lorsque vous confirmerez son envoi dans votre messagerie.</p></aside>
  </div>;
}
