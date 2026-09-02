"use client";

import type { FormEvent } from "react";

export function QuoteForm() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const budget = String(data.get("budget") ?? "");
    const deadline = String(data.get("deadline") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Demande de devis — ${service || "Projet vidéo"}`;
    const body = [
      "Bonjour BG EDITWORKS,",
      "",
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Prestation : ${service}`,
      `Budget indicatif : ${budget}`,
      `Délai souhaité : ${deadline || "À définir"}`,
      "",
      "Présentation du projet :",
      message,
      "",
      "Merci.",
    ].join("\n");

    window.location.href = `mailto:bgeditworks@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="quoteForm" onSubmit={prepareEmail}>
      <div className="formHead">
        <p>Votre projet</p>
        <span>Demande sans engagement</span>
      </div>
      <div className="formGrid">
        <label>
          <span>Nom ou entreprise</span>
          <input name="name" type="text" placeholder="Votre nom" required />
        </label>
        <label>
          <span>Adresse e-mail</span>
          <input name="email" type="email" placeholder="vous@entreprise.fr" required />
        </label>
        <label>
          <span>Prestation</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Choisir une prestation</option>
            <option>Montage vidéo</option>
            <option>Motion design</option>
            <option>Animation 2D</option>
            <option>Post-production complète</option>
            <option>Pack 4 Shorts</option>
            <option>Pack 8 Shorts</option>
            <option>Pack 4 vidéos YouTube</option>
            <option>Pack mixte</option>
            <option>Autre demande</option>
          </select>
        </label>
        <label>
          <span>Budget indicatif</span>
          <select name="budget" defaultValue="" required>
            <option value="" disabled>Sélectionner une fourchette</option>
            <option>Moins de 500 €</option>
            <option>500 € — 1 000 €</option>
            <option>1 000 € — 2 500 €</option>
            <option>Plus de 2 500 €</option>
            <option>À définir ensemble</option>
          </select>
        </label>
        <label className="full">
          <span>Délai souhaité</span>
          <input name="deadline" type="text" placeholder="Ex. : livraison avant le 30 septembre" />
        </label>
        <label className="full">
          <span>Parlez-moi du projet</span>
          <textarea name="message" rows={5} placeholder="Format, durée, volume de rushes, objectif de la vidéo…" required />
        </label>
      </div>
      <div className="formFooter">
        <p>Cette demande ne déclenche aucun travail. Votre messagerie s’ouvrira avec les informations déjà préparées. Consultez la <a href="/politique-de-confidentialite">politique de confidentialité</a>.</p>
        <button className="button primary large" type="submit">Préparer ma demande <span>↗</span></button>
      </div>
    </form>
  );
}
