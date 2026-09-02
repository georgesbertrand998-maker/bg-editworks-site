"use client";

import { FormEvent, useMemo, useState } from "react";

type ServiceKey = "short" | "youtube" | "corporate" | "training" | "brandfilm" | "campaign" | "motion" | "pack4shorts" | "pack8shorts" | "pack4youtube" | "packmixte";

const services: Record<ServiceKey, { label: string; base: number; rushes: number; duration: number; delivery: string }> = {
  short: { label: "Reel / Short", base: 110, rushes: 15, duration: 1, delivery: "3 à 5 jours ouvrés" },
  youtube: { label: "Vidéo YouTube", base: 280, rushes: 60, duration: 10, delivery: "5 à 7 jours ouvrés" },
  corporate: { label: "Entreprise — interview / témoignage", base: 420, rushes: 60, duration: 3, delivery: "7 à 10 jours ouvrés" },
  training: { label: "Entreprise — formation / tutoriel", base: 550, rushes: 90, duration: 15, delivery: "7 à 12 jours ouvrés" },
  brandfilm: { label: "Entreprise — film de marque", base: 650, rushes: 90, duration: 3, delivery: "10 à 15 jours ouvrés" },
  campaign: { label: "Entreprise — campagne réseaux", base: 720, rushes: 120, duration: 5, delivery: "10 à 15 jours ouvrés" },
  motion: { label: "Motion design 2D — 1 jour", base: 330, rushes: 0, duration: 0, delivery: "selon la complexité" },
  pack4shorts: { label: "Pack mensuel — 4 Shorts", base: 400, rushes: 60, duration: 4, delivery: "calendrier mensuel" },
  pack8shorts: { label: "Pack mensuel — 8 Shorts", base: 760, rushes: 120, duration: 8, delivery: "calendrier mensuel" },
  pack4youtube: { label: "Pack mensuel — 4 YouTube", base: 1000, rushes: 240, duration: 40, delivery: "calendrier mensuel" },
  packmixte: { label: "Pack mensuel — 2 YouTube + 4 Shorts", base: 820, rushes: 120, duration: 24, delivery: "calendrier mensuel" },
};

const options = [
  { id: "multicam", label: "Montage multicaméra", detail: "Synchronisation de plusieurs caméras", price: 80 },
  { id: "subtitles", label: "Sous-titres simples", detail: "Jusqu’à 10 minutes", price: 30 },
  { id: "animated-subtitles", label: "Sous-titres animés", detail: "Style dynamique", price: 60 },
  { id: "format", label: "Format supplémentaire", detail: "Vertical, carré ou horizontal", price: 40 },
  { id: "teaser", label: "Extrait réseaux sociaux", detail: "Teaser depuis la vidéo principale", price: 70 },
  { id: "thumbnail", label: "Miniature YouTube", detail: "Une proposition prête à publier", price: 50 },
  { id: "logo", label: "Animation de logo", detail: "Animation 2D simple", price: 150 },
  { id: "audio", label: "Nettoyage audio avancé", detail: "Réduction de bruit approfondie", price: 50 },
  { id: "grading", label: "Étalonnage avancé", detail: "Travail colorimétrique renforcé", price: 70 },
  { id: "assets", label: "Recherche d’assets", detail: "Hors licences éventuelles", price: 50 },
];

const percentageOptions = [
  { id: "urgent", label: "Livraison urgente", detail: "Sous réserve de disponibilité", rate: .3 },
  { id: "sources", label: "Fichiers sources", detail: "Projet organisé et médias transmissibles", rate: .2 },
];

function euro(value: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

export function QuoteConfigurator() {
  const [service, setService] = useState<ServiceKey>("youtube");
  const [rushMinutes, setRushMinutes] = useState(60);
  const [finalMinutes, setFinalMinutes] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);
  const current = services[service];
  const isPack = service.startsWith("pack");

  const estimate = useMemo(() => {
    const extraRushes = !isPack && current.rushes > 0 && rushMinutes > current.rushes ? Math.ceil((rushMinutes - current.rushes) / 30) * 40 : 0;
    const extraDuration = !isPack && current.duration > 0 && finalMinutes > current.duration ? Math.ceil(finalMinutes - current.duration) * 25 : 0;
    const flatOptions = options.filter((option) => selected.includes(option.id)).reduce((sum, option) => sum + option.price, 0);
    const subtotal = current.base + extraRushes + extraDuration + flatOptions;
    const percentage = percentageOptions.filter((option) => selected.includes(option.id)).reduce((sum, option) => sum + option.rate, 0);
    const total = Math.round(subtotal * (1 + percentage));
    return { extraRushes, extraDuration, flatOptions, total, deposit: Math.round(total * .4), balance: Math.round(total * .6) };
  }, [current, finalMinutes, isPack, rushMinutes, selected]);

  function changeService(value: ServiceKey) {
    const next = services[value];
    setService(value);
    setRushMinutes(next.rushes);
    setFinalMinutes(next.duration);
  }

  function toggle(id: string) {
    setSelected((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  }

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const chosenOptions = [...options, ...percentageOptions].filter((option) => selected.includes(option.id)).map((option) => option.label);
    const body = [
      "Bonjour BG EDITWORKS,", "", "Je souhaite recevoir un devis pour le projet suivant :", "",
      `Nom / entreprise : ${data.get("name")}`,
      `E-mail : ${data.get("email")}`,
      `Prestation : ${current.label}`,
      !isPack && current.rushes > 0 ? `Volume de rushes : ${rushMinutes} minutes` : "",
      !isPack && current.duration > 0 ? `Durée finale souhaitée : ${finalMinutes} minutes` : "",
      `Options : ${chosenOptions.length ? chosenOptions.join(", ") : "Aucune"}`,
      `Estimation affichée : ${euro(estimate.total)}`,
      `Acompte indicatif de 40 % : ${euro(estimate.deposit)}`,
      `Délai souhaité : ${data.get("deadline") || "À définir"}`, "",
      "Description du projet :", String(data.get("message") || ""), "",
      "Je comprends que cette estimation est indicative et que seul le devis signé fixe le prix et réserve le créneau.", "", "Merci.",
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:bgeditworks@gmail.com?subject=${encodeURIComponent(`Demande de devis — ${current.label}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="configurator" onSubmit={prepareEmail}>
      <div className="configMain">
        <section className="configSection">
          <div className="configTitle"><span>01</span><div><h2>Prestation</h2><p>Choisissez le format principal du projet.</p></div></div>
          <div className="serviceChoices">
            {(Object.entries(services) as [ServiceKey, typeof current][]).map(([key, item]) => <button className={service === key ? "selected" : ""} type="button" onClick={() => changeService(key)} key={key}><span>{item.label}</span><b>{euro(item.base)}</b></button>)}
          </div>
        </section>

        {!isPack && service !== "motion" && <section className="configSection">
          <div className="configTitle"><span>02</span><div><h2>Volume</h2><p>Indiquez une estimation des fichiers et de la durée finale.</p></div></div>
          <div className="volumeGrid">
            <label><span>Rushes à trier</span><div><input type="number" min="1" max="600" value={rushMinutes} onChange={(event) => setRushMinutes(Number(event.target.value))} /><small>minutes</small></div><p>{current.rushes} min incluses dans le tarif de base</p></label>
            <label><span>Vidéo finale</span><div><input type="number" min="1" max="120" value={finalMinutes} onChange={(event) => setFinalMinutes(Number(event.target.value))} /><small>minutes</small></div><p>{current.duration} min incluses dans le tarif de base</p></label>
          </div>
        </section>}

        <section className="configSection">
          <div className="configTitle"><span>{isPack || service === "motion" ? "02" : "03"}</span><div><h2>Options</h2><p>Ajoutez uniquement les finitions utiles.</p></div></div>
          <div className="configOptions">
            {options.map((option) => <label className={selected.includes(option.id) ? "selected" : ""} key={option.id}><input type="checkbox" checked={selected.includes(option.id)} onChange={() => toggle(option.id)} /><span><b>{option.label}</b><small>{option.detail}</small></span><strong>+ {euro(option.price)}</strong></label>)}
            {percentageOptions.map((option) => <label className={selected.includes(option.id) ? "selected" : ""} key={option.id}><input type="checkbox" checked={selected.includes(option.id)} onChange={() => toggle(option.id)} /><span><b>{option.label}</b><small>{option.detail}</small></span><strong>+ {option.rate * 100} %</strong></label>)}
          </div>
        </section>

        <section className="configSection identitySection">
          <div className="configTitle"><span>{isPack || service === "motion" ? "03" : "04"}</span><div><h2>Votre projet</h2><p>Ces informations préparent la demande de devis.</p></div></div>
          <div className="identityGrid">
            <label><span>Nom ou entreprise</span><input name="name" required placeholder="Votre nom" /></label>
            <label><span>Adresse e-mail</span><input name="email" type="email" required placeholder="vous@entreprise.fr" /></label>
            <label className="wide"><span>Délai souhaité</span><input name="deadline" placeholder="Ex. : livraison avant le 30 septembre" /></label>
            <label className="wide"><span>Description du projet</span><textarea name="message" required rows={6} placeholder="Objectif, audience, style, références et informations utiles…" /></label>
          </div>
        </section>
      </div>

      <aside className="estimateCard">
        <p className="kicker">Estimation</p><h2>{current.label}</h2>
        <div className="estimatePrice"><small>À partir de</small><strong>{euro(estimate.total)}</strong></div>
        <dl><div><dt>Base</dt><dd>{euro(current.base)}</dd></div>{estimate.extraRushes > 0 && <div><dt>Rushes supplémentaires</dt><dd>{euro(estimate.extraRushes)}</dd></div>}{estimate.extraDuration > 0 && <div><dt>Durée supplémentaire</dt><dd>{euro(estimate.extraDuration)}</dd></div>}{estimate.flatOptions > 0 && <div><dt>Options</dt><dd>{euro(estimate.flatOptions)}</dd></div>}</dl>
        <div className="paymentSplit"><p><span>Acompte 40 %</span><b>{euro(estimate.deposit)}</b></p><p><span>Solde 60 %</span><b>{euro(estimate.balance)}</b></p></div>
        <p className="deliveryLine"><span>Délai indicatif</span><b>{current.delivery}</b></p>
        <p className="deadlineRule">Le délai commence après réception de l’acompte, du brief validé et de tous les fichiers nécessaires. Les temps d’attente liés aux retours du client ne sont pas inclus.</p>
        <button className="button primary large" type="submit">Préparer ma demande <span>↗</span></button>
        <p className="estimateNote">Estimation non contractuelle. Seul le devis signé fixe le prix, les livrables et les délais. Le créneau est réservé après encaissement de l’acompte.</p>
        <div className="legalLinks"><a className="conditionsLink" href="/conditions-de-vente">Conditions de commande →</a><a className="conditionsLink" href="/politique-de-confidentialite">Confidentialité →</a></div>
      </aside>
    </form>
  );
}
