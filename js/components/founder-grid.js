/**
 * "Meet our founders" section — mounts into `<section data-founders></section>`.
 * Founder details live in js/data/founders.js; add/remove an entry and the
 * grid follows automatically. Two small render functions here play the
 * role of FounderGrid (the row) and FounderCard (one profile).
 */
import { foundersSectionContent, founders } from "../data/founders.js";

function renderFounderCard(founder) {
  const photo = founder.image
    ? `<img class="founder-card__photo" src="${founder.image}" alt="Portrait of ${founder.name}" />`
    : `<div class="founder-card__photo founder-card__photo--placeholder" role="img" aria-label="${founder.name} — founder photo placeholder">
         <span>Photo placeholder</span>
       </div>`;

  return `
    <article class="founder-card">
      ${photo}
      <h3 class="founder-card__name">${founder.name}</h3>
      <p class="founder-card__bio">${founder.bio}</p>
    </article>
  `;
}

function renderFounderGrid(members) {
  return `<div class="founders__grid">${members.map(renderFounderCard).join("")}</div>`;
}

function render(content, members) {
  return `
    <div class="section-inner founders__intro">
      <p class="eyebrow">${content.eyebrow}</p>
      <h2 class="founders__heading">${content.heading}</h2>
      <p class="founders__lede">${content.intro}</p>
    </div>
    ${renderFounderGrid(members)}
  `;
}

function mount() {
  const el = document.querySelector("[data-founders]");
  if (!el) return;
  el.classList.add("founders-section");
  el.innerHTML = render(foundersSectionContent, founders);
}

document.addEventListener("DOMContentLoaded", mount);
