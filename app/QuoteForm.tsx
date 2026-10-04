"use client";

import { useMemo, useState } from "react";

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
  const [hours, setHours] = useState(0);
  const base = packages[audience][packageIndex]?.[1] ?? 0;
  const hourlyTotal = hours * 40;
  const fixedOptionsTotal = selected.reduce((sum, name) => name === "Livraison prioritaire" ? sum : sum + (options.find((item) => item[0] === name)?.[1] ?? 0), 0);
  const prioritySupplement = selected.includes("Livraison prioritaire") ? Math.round((base + fixedOptionsTotal + hourlyTotal) * .35) : 0;
  const total = base + fixedOptionsTotal + hourlyTotal + prioritySupplement;
  const mailBody = useMemo(() => `Bonjour,\n\nJe souhaite une estimation pour ${packages[audience][packageIndex][0]}.\nOptions : ${selected.join(", ") || "aucune"}.\nHeures à la carte : ${hours || 0}.\nEstimation indicative TTC : ${total.toLocaleString("fr-FR")} €.\n\nMerci,`, [audience, packageIndex, selected, hours, total]);
  const toggle = (name: string) => setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  return <div className="quote-layout">
    <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
      <p className="kicker">ESTIMATION EN LIGNE</p>
      <h2>Construisez votre <em>devis.</em></h2>
      <p className="quote-intro">Sélectionnez votre profil, une formule et les options utiles. Le montant se met à jour en temps réel ; le devis définitif est confirmé avant tout démarrage.</p>
      <fieldset><legend>Vous êtes</legend><div className="quote-audience">
        <button type="button" className={audience === "particulier" ? "selected" : ""} onClick={() => { setAudience("particulier"); setPackageIndex(0); }}>Particulier</button>
        <button type="button" className={audience === "professionnel" ? "selected" : ""} onClick={() => { setAudience("professionnel"); setPackageIndex(0); }}>Entreprise</button>
      </div></fieldset>
      <fieldset><legend>Formule de départ</legend><div className="quote-choices">{packages[audience].map(([name, price], index) => <label key={name} className={packageIndex === index ? "selected" : ""}><input type="radio" name="package" checked={packageIndex === index} onChange={() => setPackageIndex(index)} /><span><b>{name}</b><small>À partir de {price.toLocaleString("fr-FR")} € TTC</small></span></label>)}</div></fieldset>
      <fieldset><legend>Options</legend><div className="quote-options">{options.map(([name, price]) => <label key={name}><input type="checkbox" checked={selected.includes(name)} onChange={() => toggle(name)} /><span>{name}</span><b>{price ? `+ ${price} €` : "+ 35 %"}</b></label>)}</div></fieldset>
      <fieldset><legend>Travail à l’heure — en complément</legend><p className="field-note">Pour une retouche, un conseil ou une demande hors forfait : 40 € TTC / heure, minimum 2 heures. Cette formule est facultative.</p><input className="hours-input" type="number" min="0" max="40" value={hours || ""} placeholder="Nombre d’heures" onChange={(event) => setHours(Math.max(0, Number(event.target.value) || 0))} /></fieldset>
    </form>
    <aside className="quote-summary"><p className="kicker">FACTURE PROVISOIRE · ESTIMATION</p><strong>{total.toLocaleString("fr-FR")} €</strong><span>TTC · TVA non applicable, art. 293 B du CGI</span><div className="quote-line-items"><div><span>{packages[audience][packageIndex][0]}</span><b>{base.toLocaleString("fr-FR")} €</b></div>{selected.map((name) => <div key={name}><span>{name}</span><b>{name === "Livraison prioritaire" ? "+ 35 %" : `+ ${(options.find((item) => item[0] === name)?.[1] ?? 0).toLocaleString("fr-FR")} €`}</b></div>)}{hours > 0 && <div><span>Travail à l’heure · {hours} h</span><b>+ {hourlyTotal.toLocaleString("fr-FR")} €</b></div>}</div><p>Cette facture provisoire se met à jour selon vos choix. Elle ne vaut pas facture définitive : le périmètre, les livrables, les délais, les corrections et le prix final seront confirmés dans le devis accepté avant le début de la prestation.</p><a className="button button-primary" href={`mailto:bgeditworks@gmail.com?subject=Demande%20de%20devis%20en%20ligne%20-%20BG%20EDITWORKS&body=${encodeURIComponent(mailBody)}`}>Envoyer ma demande <span>↗</span></a></aside>
  </div>;
}
