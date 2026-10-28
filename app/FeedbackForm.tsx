"use client";

import { useState, type FormEvent } from "react";

export function FeedbackForm() {
  const [prepared, setPrepared] = useState(false);
  const [mailLink, setMailLink] = useState("");
  function prepareFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const project = String(data.get("project") ?? "");
    const rating = String(data.get("rating") ?? "");
    const need = String(data.get("need") ?? "");
    const experience = String(data.get("experience") ?? "");
    const privateNote = String(data.get("privateNote") ?? "");
    const permission = String(data.get("permission") ?? "");

    const subject = `Avis client — ${company || name}`;
    const body = [
      "Bonjour BG EDITWORKS,",
      "",
      "Voici mon retour après la livraison de mon projet.",
      "",
      `Nom : ${name}`,
      `Entreprise : ${company || "Non renseignée"}`,
      `E-mail : ${email}`,
      `Projet : ${project}`,
      `Satisfaction : ${rating}/5`,
      "",
      "Mon besoin :",
      need,
      "",
      "Mon expérience avec BG EDITWORKS :",
      experience,
      "",
      "Remarque privée :",
      privateNote || "Aucune",
      "",
      `Autorisation de publication : ${permission}`,
    ].join("\n");

    setPrepared(true);
    const link = `mailto:bgeditworks@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailLink(link);
  }

  return (
    <form className="feedbackForm" onSubmit={prepareFeedback}>
      <div className="formHead">
        <p>Votre expérience</p>
        <span>2 à 3 minutes</span>
      </div>
      <div className="formGrid feedbackIdentity">
        <label><span>Nom et prénom</span><input name="name" maxLength={100} autoComplete="name" type="text" placeholder="Votre nom" required /></label>
        <label><span>Entreprise ou chaîne</span><input name="company" maxLength={120} autoComplete="organization" type="text" placeholder="Facultatif" /></label>
        <label><span>Adresse e-mail</span><input name="email" maxLength={254} autoComplete="email" type="email" placeholder="vous@entreprise.fr" required /></label>
        <label>
          <span>Projet réalisé</span>
          <select name="project" defaultValue="" required>
            <option value="" disabled>Choisir une prestation</option>
            <option>Montage vidéo</option><option>Vidéo YouTube</option><option>Reel / Short</option><option>Vidéo d’entreprise</option><option>Motion design</option><option>Animation 2D</option><option>Autre projet</option>
          </select>
        </label>
        <label className="full">
          <span>Satisfaction générale</span>
          <select name="rating" defaultValue="" required>
            <option value="" disabled>Choisir une note</option>
            <option value="5">5/5 — Très satisfait</option><option value="4">4/5 — Satisfait</option><option value="3">3/5 — Correct</option><option value="2">2/5 — À améliorer</option><option value="1">1/5 — Insatisfait</option>
          </select>
        </label>
        <label className="full"><span>Quel était votre besoin ?</span><textarea name="need" maxLength={500} rows={3} placeholder="Le contexte et l’objectif de votre vidéo…" required /></label>
        <label className="full"><span>Quel est votre retour sur la collaboration ?</span><textarea name="experience" maxLength={1500} rows={4} placeholder="Le résultat, les échanges, les délais et les points à améliorer…" required /></label>
        <label className="full"><span>Une remarque à garder privée ?</span><textarea name="privateNote" maxLength={500} rows={3} placeholder="Facultatif — ce texte ne sera jamais publié" /></label>
        <label className="full">
          <span>Autorisation de publication</span>
          <select name="permission" defaultValue="" required>
            <option value="" disabled>Choisir une autorisation</option>
            <option>Oui, avec mon nom et mon entreprise</option><option>Oui, avec mon prénom uniquement</option><option>Oui, de manière anonyme</option><option>Non, retour privé uniquement</option>
          </select>
        </label>
      </div>
      <p className="feedback-disclosure">Votre adresse e-mail et votre remarque privée ne seront pas publiées. Les avis autorisés sont examinés avant publication pour vérifier qu’ils concernent une prestation réelle, sans sélection fondée sur la note.</p>
      <div className="formFooter">
        <p>Préparez votre avis, puis ouvrez le courriel proposé pour le relire et confirmer son envoi dans votre messagerie. Consultez la <a href="/politique-de-confidentialite">politique de confidentialité</a>.</p>
        <button className="button primary large" type="submit">Préparer mon avis par e-mail <span>↗</span></button>
      </div>
      {prepared && <div className="feedback-status" role="status"><strong>Votre avis est préparé, il n’est pas encore envoyé.</strong><p><a href={mailLink}>Ouvrir le courriel préparé</a>, puis confirmez son envoi dans votre messagerie. Si vous ne disposez pas d’application de messagerie, écrivez à bgeditworks@gmail.com.</p></div>}
    </form>
  );
}
